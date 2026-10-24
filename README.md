# Web de IBIL

Web de la Iglesia Bautista Internacional de Logroño: https://www.iglesiabautistalogrono.com

Hecha con **Eleventy** (convierte archivos de texto en páginas web; es el más simple que cumple el brief: sin JavaScript de cliente, un archivo Markdown por predicación). Se aloja gratis en Cloudflare Pages. El dominio está en GoDaddy.

Las reglas del proyecto están en `CLAUDE.md`; el brief completo y el plan, en `docs/`.

## Qué hay en cada carpeta

| Carpeta | Qué es |
|---|---|
| `datos/iglesia.json` | Horarios, dirección, WhatsApp, redes. **Si cambia un horario, se cambia aquí y solo aquí.** |
| `contenido/predicaciones/` | Una predicación = un archivo `.md` |
| `contenido/reflexiones/` | Una reflexión del mes = un archivo `.md` |
| `fotos/` | Fotos originales (se optimizan solas al construir) |
| `marca/` | Logotipos, colores y tipografías. `marca/_originales/` guarda lo que se sustituyó |
| `src/` | Plantillas, estilos y scripts de la web |
| `public/` | Archivos que se copian tal cual (redirecciones, cabeceras, favicons) |
| `docs/` | Brief, plan, guía de doctrinas y folleto |
| `_site/` | La web generada. No se toca ni se guarda: se vuelve a generar siempre |

## Cómo añadir una predicación (2 minutos)

1. Crea un archivo en `contenido/predicaciones/` con el nombre `AAAA-MM-DD-titulo-corto.md` (por ejemplo `2026-10-11-el-rico-insensato.md`).
2. Pega esto y rellénalo:

```markdown
---
titulo: "El rico insensato"
fecha: 2026-10-11
predicador: "Felipe Albacete"
pasaje: "Lucas 12:13-21"
libro: "Lucas"
serie: "Parábolas de Jesús"
youtube: "IDENTIFICADOR_DEL_VIDEO"
resumen: "Una frase que resuma la predicación."
---

Aquí va la síntesis de la predicación, el texto que ya produce el flujo semanal.
```

El identificador de YouTube es lo que va después de `v=` en la dirección del vídeo (`https://www.youtube.com/watch?v=IDENTIFICADOR`).

3. Guarda el archivo y súbelo al repositorio (commit). La web se reconstruye y publica sola.

## Cómo añadir la reflexión del mes

Igual, en `contenido/reflexiones/`, con el nombre `AAAA-MM-titulo.md`:

```markdown
---
titulo: "Título de la reflexión"
fecha: 2026-11-01
autor: "Nombre"
resumen: "Una frase."
---

El texto de la reflexión.
```

## Cómo ver la web en el ordenador

```bash
npm install
npm start
```

y abre http://localhost:8080. Para generar la versión final: `npm run build` (sale en `_site/`).

## Cómo trasladar la web a otro alojamiento

La web son archivos normales. Para llevarla a cualquier otro sitio (GoDaddy, Netlify, un servidor propio):

1. Genera la web: `npm run build`.
2. Sube **todo** el contenido de la carpeta `_site/` al alojamiento nuevo.
3. Si el alojamiento nuevo no entiende los archivos `_redirects` y `_headers` (son el formato de Cloudflare y Netlify), copia sus reglas al formato del alojamiento (Apache: `.htaccess`; Nginx: bloque `server`). Las reglas están en `public/` y son pocas.
4. La dirección sin «www» redirige a la de «www» con `functions/_middleware.js` (Cloudflare). En otro alojamiento hay que poner una regla 301 de host: en Apache, `RewriteCond %{HTTP_HOST} ^iglesiabautistalogrono\.com$ [NC]` seguida de `RewriteRule ^ https://www.iglesiabautistalogrono.com%{REQUEST_URI} [L,R=301]`.
4. Apunta el dominio al alojamiento nuevo (en GoDaddy, Administrar → DNS).

El original siempre está en GitHub; el alojamiento solo tiene una copia.

## Copia de seguridad fuera de GitHub

Una vez al mes, desde la carpeta del proyecto:

```bash
git bundle create "G:/Mi unidad/AAA IB/Web y marca/copia-web-ibil.bundle" --all
```

Ese archivo contiene todo el historial y se puede restaurar con `git clone copia-web-ibil.bundle`.

## Si algo falla

- La web no se actualiza tras subir una predicación: mira en Cloudflare Pages → el proyecto → «Deployments» si el último está en rojo, y abre el registro. Casi siempre es una errata en la cabecera del archivo (comillas o dos puntos).
- Un horario está mal: edita `datos/iglesia.json`.
- Cualquier otra cosa: abre un chat de Claude Code en esta carpeta y descríbelo.
