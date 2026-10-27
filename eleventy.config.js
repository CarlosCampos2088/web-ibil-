// Configuración de Eleventy para la web de IBIL.
// Contenido en Markdown, datos en datos/, plantillas en src/.
import { readFile, readdir } from "node:fs/promises";
import markdownIt from "markdown-it";
import matter from "gray-matter";

export default function (eleventyConfig) {
  // Archivos que se copian tal cual a la web generada
  eleventyConfig.addPassthroughCopy({ public: "/" });
  eleventyConfig.addPassthroughCopy({ "marca/04 Tipografia/webfonts": "/fuentes" });
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addWatchTarget("src/css");

  // Vista previa visible en la wifi (para verla en el móvil)
  eleventyConfig.setServerOptions({ showAllHosts: true });

  // Datos globales
  const leerJson = (p, vacio = {}) => async () => { try { return JSON.parse(await readFile(p, "utf8")); } catch { return vacio; } };
  eleventyConfig.addGlobalData("iglesia", leerJson("datos/iglesia.json"));
  eleventyConfig.addGlobalData("feed", leerJson("datos/feed.json", { sermones: [], shorts: [], agenda: [], diario: [] }));
  eleventyConfig.addGlobalData("agendaManual", leerJson("datos/agenda.json", { actos: [] }));
  eleventyConfig.addGlobalData("anio", () => new Date().getFullYear());
  eleventyConfig.addGlobalData("hoy", () => new Date().toISOString().slice(0, 10));
  // Agenda unificada: lo automático (feed) + lo escrito a mano (datos/agenda.json), solo futuro, ordenada
  eleventyConfig.addGlobalData("agendaProxima", async () => {
    const hoy = new Date().toISOString().slice(0, 10);
    const feed = await leerJson("datos/feed.json", { agenda: [] })();
    const manual = await leerJson("datos/agenda.json", { actos: [] })();
    const todos = [...(feed.agenda || []), ...(manual.actos || [])].filter((a) => a.fecha >= hoy);
    return todos.sort((a, b) => (a.fecha + a.hora).localeCompare(b.fecha + b.hora));
  });
  const DIAS = ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"], MESES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
  eleventyConfig.addFilter("dia", (d) => new Date(d + "T12:00:00").getDate());
  eleventyConfig.addFilter("mes", (d) => MESES[new Date(d + "T12:00:00").getMonth()]);
  eleventyConfig.addFilter("diaSemana", (d) => DIAS[new Date(d + "T12:00:00").getDay()]);
  eleventyConfig.addFilter("unicos", (arr, clave) => [...new Set(arr.map((x) => x[clave]).filter(Boolean))].sort());
  eleventyConfig.addFilter("urlencode", (s) => encodeURIComponent(s));
  // Datos de «evento» para Google (schema.org/Event) a partir de la agenda. Hora de Madrid.
  eleventyConfig.addFilter("eventosLd", (actos, iglesia) => {
    const offset = (f) => {
      const n = new Intl.DateTimeFormat("en", { timeZone: "Europe/Madrid", timeZoneName: "shortOffset" })
        .formatToParts(new Date(f + "T12:00:00Z")).find((x) => x.type === "timeZoneName").value; // «GMT+1» / «GMT+2»
      return `+0${n.replace("GMT+", "")}:00`;
    };
    const lugar = {
      "@type": "Place", name: iglesia.nombre,
      address: { "@type": "PostalAddress", streetAddress: iglesia.direccion.calle, postalCode: iglesia.direccion.cp,
        addressLocality: iglesia.direccion.ciudad, addressRegion: iglesia.direccion.provincia, addressCountry: "ES" },
    };
    const eventos = (actos || []).slice(0, 20).map((a) => ({
      "@context": "https://schema.org", "@type": "Event", name: a.nombre,
      startDate: a.hora ? `${a.fecha}T${a.hora}:00${offset(a.fecha)}` : a.fecha,
      ...(a.fin ? { endDate: `${a.fecha}T${a.fin}:00${offset(a.fecha)}` } : {}),
      ...(a.detalle ? { description: a.detalle } : {}),
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      isAccessibleForFree: true, location: lugar,
      organizer: { "@type": "Organization", name: iglesia.nombre, url: "https://www.iglesiabautistalogrono.com/" },
    }));
    return JSON.stringify(eventos).replace(/</g, "\u003c");
  });

  // Contenido en Markdown fuera de src/: contenido/predicaciones y contenido/reflexiones
  const md = markdownIt({ html: true, typographer: true, quotes: "«»‘’" });
  async function leerCarpeta(carpeta) {
    let archivos = [];
    try { archivos = (await readdir(carpeta)).filter((f) => f.endsWith(".md") && !f.startsWith("_")); } catch { return []; }
    const items = [];
    for (const f of archivos) {
      const { data, content } = matter(await readFile(`${carpeta}/${f}`, "utf8"));
      if (data.borrador) continue; // los borradores (p. ej. noticias propuestas por la rutina) no se publican
      items.push({ ...data, slug: f.replace(/\.md$/, ""), cuerpo: md.render(content) });
    }
    return items.sort((a, b) => String(b.fecha).localeCompare(String(a.fecha)));
  }
  eleventyConfig.addGlobalData("predicaciones", () => leerCarpeta("contenido/predicaciones"));
  eleventyConfig.addGlobalData("reflexiones", () => leerCarpeta("contenido/reflexiones"));
  eleventyConfig.addGlobalData("reflexionesDiarias", () => leerCarpeta("contenido/reflexion-diaria"));
  eleventyConfig.addGlobalData("noticias", () => leerCarpeta("contenido/noticias"));
  eleventyConfig.addWatchTarget("contenido");
  eleventyConfig.addWatchTarget("datos");
  eleventyConfig.setLibrary("md", md);

  // Fotos: catálogo + medidas generadas por scripts/imagenes.js
  let fotos = {}, medidas = {};
  eleventyConfig.on("eleventy.before", async () => {
    fotos = JSON.parse(await readFile("datos/fotos.json", "utf8")).fotos;
    try { medidas = JSON.parse(await readFile("datos/fotos.generadas.json", "utf8")); } catch { medidas = {}; }
  });

  // {% foto "slug", { clase, sizes, prioridad, alt } %}
  eleventyConfig.addShortcode("foto", (slug, op = {}) => {
    const f = fotos[slug], m = medidas[slug];
    if (!f || !m) return `<div class="foto-pendiente">[FOTO PENDIENTE: ${slug}]</div>`;
    if (f.menores && !(f.autorizada || op.autorizada)) return `<div class="foto-pendiente">[FOTO PENDIENTE: ${slug} (menores, falta autorización)]</div>`;
    const anchos = Object.keys(m.medidas).map(Number).sort((a, b) => a - b);
    const mayor = anchos[anchos.length - 1];
    const srcset = anchos.map((w) => `/img/fotos/${slug}-${w}.webp ${w}w`).join(", ");
    const sizes = op.sizes || "(min-width: 64rem) 50vw, 100vw";
    const alt = op.alt ?? f.alt;
    const carga = op.prioridad ? 'fetchpriority="high"' : 'loading="lazy" decoding="async"';
    const clase = op.clase ? ` class="${op.clase}"` : "";
    const estilo = f.pos ? ` style="object-position:${f.pos}"` : "";
    return `<img src="/img/fotos/${slug}-${mayor}.webp" srcset="${srcset}" sizes="${sizes}" width="${m.medidas[mayor].width}" height="${m.medidas[mayor].height}" alt="${alt}"${clase}${estilo} ${carga}>`;
  });

  // Fechas en español
  eleventyConfig.addFilter("fechaLarga", (d) => new Date(d).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Madrid" }));
  eleventyConfig.addFilter("fechaCorta", (d) => new Date(d).toLocaleDateString("es-ES", { day: "numeric", month: "short", timeZone: "Europe/Madrid" }));
  eleventyConfig.addFilter("iso", (d) => new Date(d).toISOString().slice(0, 10));

  return {
    dir: { input: "src", includes: "_includes", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
