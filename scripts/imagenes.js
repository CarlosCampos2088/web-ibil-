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
  if (generadas[slug]?.mtime === mtime) continue; // ya está hecha

  const base = sharp(origen).rotate();
  const meta = await base.metadata();
  const medidas = {};
  for (const w of ANCHOS) {
    if (w > meta.width && w !== ANCHOS[0]) continue;
    const info = await base.clone().resize({ width: w, withoutEnlargement: true }).webp({ quality: 78 }).toFile(`${salida}/${slug}-${w}.webp`);
    medidas[w] = { width: info.width, height: info.height };
  }
  generadas[slug] = { mtime, ancho: meta.width, alto: meta.height, medidas };
  console.log("✓", slug);
}
await writeFile("datos/fotos.generadas.json", JSON.stringify(generadas, null, 2));
