// Genera los PDF de imprenta (y una vista PNG) de tarjetas y cartel. Uso: node impresos/generar.mjs
import puppeteer from "puppeteer-core";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const nav = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ["--allow-file-access-from-files"] });
for (const nombre of ["tarjetas", "cartel"]) {
  const p = await nav.newPage();
  await p.goto(pathToFileURL(resolve("impresos", nombre + ".html")).href, { waitUntil: "networkidle0" });
  await p.evaluateHandle("document.fonts.ready");
  await p.emulateMediaType("print");
  await p.pdf({ path: `impresos/${nombre}.pdf`, format: "A4", printBackground: true, preferCSSPageSize: true });
  await p.setViewport({ width: 794, height: 1123, deviceScaleFactor: 1.5 });
  await p.screenshot({ path: `impresos/${nombre}-vista.png`, clip: { x: 0, y: 0, width: 794, height: 1123 } });
}
await nav.close();
console.log("ok");
