// Genera las versiones WebP de las fotos del catálogo (datos/fotos.json).
// Uso: node scripts/imagenes.js   (se ejecuta solo antes de construir la web: npm run build)
// Salida: src/img/fotos/<slug>-480.webp, -960, -1600 y datos/fotos.generadas.json (medidas).
import sharp from "sharp";
import { readFile, writeFile, mkdir, stat } from "node:fs/promises";
import path from "node:path";

const ANCHOS = [480, 960, 1600];
const catalogo = JSON.parse(await readFile("datos/fotos.json", "utf8")).fotos;
const salida = "src/img/fotos";
await mkdir(salida, { recursive: true });

let generadas = {};
try { generadas = JSON.parse(await readFile("datos/fotos.generadas.json", "utf8")); } catch {}

for (const [slug, f] of Object.entries(catalogo)) {
  const origen = path.join("fotos", f.archivo);
  const mtime = (await stat(origen)).mtimeMs;
  const clave = mtime + "|" + JSON.stringify(f.recorte || null);
  if (generadas[slug]?.clave === clave) continue; // ya está hecha

  let base = sharp(origen).rotate();
  let meta = await base.metadata();
  // Recorte opcional en fracciones del original: [izquierda, arriba, ancho, alto]
  if (f.recorte) {
    const [l, t, w, h] = f.recorte;
    const ancho = meta.orientation >= 5 ? meta.height : meta.width, alto = meta.orientation >= 5 ? meta.width : meta.height;
    base = base.extract({ left: Math.round(l * ancho), top: Math.round(t * alto), width: Math.round(w * ancho), height: Math.round(h * alto) });
    meta = { width: Math.round(w * ancho), height: Math.round(h * alto) };
  }
  const medidas = {};
  for (const w of ANCHOS) {
    if (w > meta.width && w !== ANCHOS[0]) continue;
    const info = await base.clone().resize({ width: w, withoutEnlargement: true }).webp({ quality: 78 }).toFile(`${salida}/${slug}-${w}.webp`);
    medidas[w] = { width: info.width, height: info.height };
  }
  generadas[slug] = { clave, ancho: meta.width, alto: meta.height, medidas };
  console.log("✓", slug);
}
await writeFile("datos/fotos.generadas.json", JSON.stringify(generadas, null, 2));
