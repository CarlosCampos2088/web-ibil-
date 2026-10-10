// Capturas de página completa de la web (móvil y escritorio) con el Chrome del sistema.
// Uso: node scripts/capturas.js [url-base] [carpeta-salida]   (por defecto http://localhost:8080 y _tmp/capturas)
import puppeteer from "puppeteer-core";
import { mkdir } from "node:fs/promises";

const base = process.argv[2] || "http://localhost:8080";
const salida = process.argv[3] || "_tmp/capturas";
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const paginas = ["/", "/eres-nuevo/", "/conoce-a-jesus/", "/predicaciones/", "/predicaciones/2026-09-20-cuando-un-hermano-se-extravia/", "/vida-de-iglesia/", "/nosotros/", "/contacto/"];
const vistas = { movil: { width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 }, escritorio: { width: 1440, height: 900 } };

await mkdir(salida, { recursive: true });
const browser = await puppeteer.launch({ executablePath: CHROME, headless: true });
for (const [vista, viewport] of Object.entries(vistas)) {
  const page = await browser.newPage();
  await page.setViewport(viewport);
  for (const ruta of paginas) {
    await page.goto(base + ruta, { waitUntil: "networkidle0" });
    await page.evaluate(() => document.fonts.ready);
    const nombre = (ruta === "/" ? "inicio" : ruta.replace(/^\/|\/$/g, "").replace(/\//g, "_"));
    await page.screenshot({ path: `${salida}/${vista}_${nombre}.png`, fullPage: true });
    console.log("✓", vista, ruta);
  }
  await page.close();
}
await browser.close();
