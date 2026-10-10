// Configuración de Eleventy para la web de IBIL.
// Contenido en Markdown, datos en datos/, plantillas en src/.
export default function (eleventyConfig) {
  // Archivos que se copian tal cual a la web generada
  eleventyConfig.addPassthroughCopy({ public: "/" });
  eleventyConfig.addPassthroughCopy({ "marca/04 Tipografia/webfonts": "/fuentes" });
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addWatchTarget("src/css");

  // Datos globales: datos/iglesia.json → disponible como `iglesia` en todas las plantillas
  eleventyConfig.addGlobalData("iglesia", async () => {
    const { readFile } = await import("node:fs/promises");
    return JSON.parse(await readFile("datos/iglesia.json", "utf8"));
  });

  // Año actual para el pie (nunca escrito a mano)
  eleventyConfig.addGlobalData("anio", () => new Date().getFullYear());

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
