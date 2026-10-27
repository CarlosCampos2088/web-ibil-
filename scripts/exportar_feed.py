# -*- coding: utf-8 -*-
"""Exporta a la web lo que ya está publicado en redes.

Lee las colas del sistema de redes (edit/_sistema) y escribe:
  - datos/feed.json: sermones publicados en YouTube, shorts, agenda y piezas diarias.
  - contenido/predicaciones/AAAA-MM-DD-titulo.md: un archivo por sermón publicado (solo si no existe,
    para que Carlos pueda editarlo a mano).
  - src/img/diario/*.webp: la imagen de la pieza diaria, reducida.

Uso: py scripts/exportar_feed.py            (desde la carpeta web-ibil)
Lo lanza la tarea programada del PC después de publicar en redes. No toca nada de las colas.
Reglas: solo lo que está en estado «hecho»; nada de Gabriel Pérez (veto); nunca se publica quién
imparte el discipulado.
"""
import json, re, sys, unicodedata, subprocess
from datetime import date, datetime, timedelta
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
SISTEMA = Path(r"D:\Videos Disco (D)\Sermones IBIL\edit\_sistema")
EDIT = SISTEMA.parent
VETO = ("gabriel", "pérez", "perez")
HOY = date.today()


def leer(p):
    return json.loads(Path(p).read_text(encoding="utf-8"))


def vetado(texto):
    t = (texto or "").lower()
    return "gabriel" in t and ("pérez" in t or "perez" in t or "p." in t)


def slug(s):
    s = unicodedata.normalize("NFKD", s).encode("ascii", "ignore").decode()
    s = re.sub(r"[^a-zA-Z0-9]+", "-", s).strip("-").lower()
    return s[:60]


def parse_video(nombre):
    """'2026-09-20 - Felipe Albacete - Título - Reel 3 - Subtítulo - OK.mp4' → dict"""
    n = Path(nombre).name
    m = re.match(r"(\d{4}-\d{2}-\d{2}) - (.+?) - (.+?) - Reel (\d+) - (.+?)(?: - OK)?\.mp4$", n)
    if m:
        return dict(fecha=m[1], predicador=m[2], sermon=m[3], reel=int(m[4]), titulo=m[5])
    m = re.match(r"(\d{4}-\d{2}-\d{2}) - (.+?) - (.+?) - Serm", n)
    if m:
        return dict(fecha=m[1], predicador=m[2], titulo=m[3])
    return {}


def leer_publicacion(carpeta):
    """Saca pasaje, título largo, descripción y capítulos del PUBLICACION.md del sermón."""
    p = EDIT / carpeta / "PUBLICACION.md"
    if not p.exists():
        return {}
    t = p.read_text(encoding="utf-8")
    out = {}
    m = re.search(r"^\*\*(.+?) — «(.+?)»\*\*", t, re.M)
    if m:
        out["pasaje"], out["titulo_largo"] = m[1].strip(), m[2].strip()
    m = re.search(r"\*\*Descripción:\*\*\s*```\n(.*?)```", t, re.S)
    if m:
        desc = m[1]
        parrafos = [x.strip() for x in re.split(r"\n\s*\n", desc) if x.strip()]
        if parrafos:
            out["resumen"] = re.sub(r"\s+", " ", parrafos[0])
        caps = re.findall(r"^(\d{2}:\d{2}(?::\d{2})?) (.+)$", desc, re.M)
        if caps:
            out["capitulos"] = [{"t": a, "n": b.strip()} for a, b in caps]
    return out


def main():
    cola_yt = leer(SISTEMA / "cola_youtube.json")
    agenda = leer(SISTEMA / "agenda_iglesia.json")
    try:
        cola_extra = leer(SISTEMA / "cola_extra.json")
    except FileNotFoundError:
        cola_extra = []

    sermones, shorts = [], []
    for x in cola_yt:
        if x.get("estado") != "hecho" or not x.get("video_id"):
            continue
        info = parse_video(x.get("video", ""))
        if not info or vetado(info.get("predicador")) or vetado(x.get("carpeta")):
            continue
        fecha_pub = (x.get("fecha") or "")[:10]
        # Programado en YouTube pero aún privado: no sale hasta su día.
        if fecha_pub and fecha_pub > HOY.isoformat():
            continue
        if x.get("tipo") == "sermon":
            pub = leer_publicacion(x.get("carpeta", ""))
            s = dict(
                video_id=x["video_id"], fecha=info["fecha"], publicado=fecha_pub,
                predicador=info["predicador"], titulo=info["titulo"],
                pasaje=pub.get("pasaje", ""), resumen=pub.get("resumen", ""),
                capitulos=pub.get("capitulos", []),
            )
            s["slug"] = f'{s["fecha"]}-{slug(s["titulo"])}'
            sermones.append(s)
        elif x.get("tipo") == "short":
            shorts.append(dict(video_id=x["video_id"], fecha=info["fecha"], publicado=fecha_pub,
                               predicador=info["predicador"], sermon=info["sermon"], titulo=info["titulo"]))
    sermones.sort(key=lambda s: s["fecha"], reverse=True)
    shorts.sort(key=lambda s: s["publicado"], reverse=True)

    # Archivos de predicación (solo los que no existen)
    carpeta = RAIZ / "contenido" / "predicaciones"
    carpeta.mkdir(parents=True, exist_ok=True)
    for s in sermones:
        f = carpeta / f'{s["slug"]}.md'
        if f.exists():
            continue
        libro = re.match(r"^(\d?\s?[A-Za-zÁÉÍÓÚáéíóúñ]+)", s["pasaje"] or "")
        caps = "\n".join(f'- {c["t"]} {c["n"]}' for c in s["capitulos"])
        f.write_text(
            "---\n"
            f'titulo: "{s["titulo"]}"\n'
            f'fecha: {s["fecha"]}\n'
            f'predicador: "{s["predicador"]}"\n'
            f'pasaje: "{s["pasaje"]}"\n'
            f'libro: "{libro[1].strip() if libro else ""}"\n'
            'serie: ""\n'
            f'youtube: "{s["video_id"]}"\n'
            f'resumen: "{s["resumen"].replace(chr(34), chr(39))}"\n'
            "---\n\n"
            f'{s["resumen"]}\n\n'
            + (f"## Capítulos\n\n{caps}\n" if caps else ""),
            encoding="utf-8",
        )
        print("+ predicación", f.name)

    # Agenda: próximos 90 días, solo Logroño, sin quién imparte
    eventos = []
    for fecha, (_, texto) in agenda.get("eventos", {}).items():
        m = re.match(r"(\d{1,2}:\d{2}) (.+)", texto)
        eventos.append(dict(fecha=fecha, hora=m[1] if m else "", nombre=m[2] if m else texto))
    for fecha, (tema, cita) in agenda.get("parabolas", {}).items():
        eventos.append(dict(fecha=fecha, hora="19:00", nombre="Discipulado: " + tema, detalle=cita))
    for fecha in agenda.get("cena_del_senor", []):
        eventos.append(dict(fecha=fecha, hora="11:30", nombre="Culto con Cena del Señor"))
    limite = (HOY + timedelta(days=90)).isoformat()
    eventos = sorted([e for e in eventos if HOY.isoformat() <= e["fecha"] <= limite], key=lambda e: (e["fecha"], e["hora"]))

    # Pieza diaria (reflexión de respaldo): la historia del día de la cola extra, ya publicada
    diario = []
    img_dir = RAIZ / "src" / "img" / "diario"
    img_dir.mkdir(parents=True, exist_ok=True)
    for x in cola_extra:
        if x.get("tipo") != "historia" or x.get("ig", {}).get("estado") != "hecho":
            continue
        fecha = (x.get("fecha") or "")[:10]
        alt = (x.get("alt") or [""])[0]
        # El alt empieza describiendo el diseño; el mensaje va después de la primera frase.
        partes = alt.split(". ", 1)
        texto = partes[1].strip() if len(partes) > 1 else alt
        texto = re.sub(r"\.\.(?!\.)", ".", texto)
        item = dict(fecha=fecha, texto=texto, id=x["id"])
        archivos = x.get("archivos") or []
        if archivos and Path(archivos[0]).exists():
            destino = img_dir / (slug(x["id"]) + ".webp")
            if not destino.exists():
                subprocess.run(["node", "-e",
                    "require('sharp')(process.argv[1]).resize({width:720}).webp({quality:72}).toFile(process.argv[2])",
                    archivos[0], str(destino)], cwd=RAIZ, check=False)
            item["imagen"] = "/img/diario/" + destino.name
        diario.append(item)
    diario.sort(key=lambda d: d["fecha"], reverse=True)

    feed = dict(generado=datetime.now().isoformat(timespec="minutes"), sermones=sermones[:60], shorts=shorts[:60],
                agenda=eventos, diario=diario[:90])
    (RAIZ / "datos" / "feed.json").write_text(json.dumps(feed, ensure_ascii=False, indent=1), encoding="utf-8")
    print(f"feed.json: {len(sermones)} sermones, {len(shorts)} shorts, {len(eventos)} actos, {len(diario)} piezas diarias")


if __name__ == "__main__":
    main()
