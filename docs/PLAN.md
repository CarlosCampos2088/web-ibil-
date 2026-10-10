# Plan de la web de IBIL

Versión 1 · 10/10/2026 · Complementa al «Brief web IBIL 20261010» (que es la fuente de verdad del contenido). Este plan explica el **cómo** y el **en qué orden**, pensado para Carlos, que hace su primera web.

---

## 1. Las tres ideas que lo explican todo

1. **La web será un conjunto de archivos normales** (HTML, CSS, imágenes). No hay base de datos ni programa que la "haga funcionar". Eso la hace rápida, segura, gratuita de alojar y **trasladable a cualquier sitio en minutos**: cambiar de alojamiento es copiar una carpeta y apuntar el dominio al sitio nuevo.
2. **El original vive en GitHub**, no en el alojamiento. GitHub guarda cada versión de cada archivo (se puede volver atrás siempre), y desde ahí la web se publica sola cada vez que cambiamos algo. Si mañana desaparece el alojamiento, no se pierde nada.
3. **Añadir contenido = crear un archivo de texto.** Una predicación nueva o la reflexión del mes es un archivo con cinco líneas de cabecera y el texto. La web se reconstruye sola. Nada de tocar código.

---

## 2. Dominio y alojamiento (la duda de GoDaddy)

Hay que distinguir dos cosas que GoDaddy mezcla en su publicidad:

| | Qué es | Dónde está | Coste |
|---|---|---|---|
| **Dominio** (`iglesiabautistalogrono.com`) | El nombre. Es como la matrícula. | **GoDaddy** (ya pagado). Se queda ahí. | Renovación anual, ya cubierta |
| **Alojamiento** | El servidor donde viven los archivos. Es como el garaje. | A decidir. | Depende |

Opciones de alojamiento para una web de archivos estáticos:

| Opción | Coste | Ventajas | Inconvenientes |
|---|---|---|---|
| **Cloudflare Pages** (recomendada; es la del brief) | 0 € | Se publica sola desde GitHub; vista previa de cada cambio antes de publicarlo; HTTPS; red mundial (rápida en Logroño y en Colombia); redirecciones y cabeceras de seguridad en archivos de texto | Hay que crear una cuenta y cambiar dos líneas en GoDaddy (los «servidores de nombres»). Guiado paso a paso en el apartado 15 del brief |
| Alojamiento de GoDaddy | 5-15 €/mes | El dominio y la web en el mismo sitio | Pagar por algo que no necesita la web; subir archivos a mano por FTP cada vez que cambie algo; sin vista previa |
| GitHub Pages | 0 € | Muy simple | Sin redirecciones 301 ni cabeceras de seguridad propias; menos control |

**Decisión propuesta:** dominio en GoDaddy (como está), alojamiento en Cloudflare Pages. El brief ya lo prevé y en GoDaddy no hay que contratar nada.

**Garantía de traslado:** la carpeta `_site/` que genera la web funciona en cualquier alojamiento del mundo (GoDaddy incluido). El plan de traslado queda escrito en el README: 1) descargar la carpeta, 2) subirla al alojamiento nuevo, 3) apuntar el dominio. Sin dependencia de nada de Cloudflare que no se pueda sustituir.

---

## 3. Herramientas de diseño (investigación del 10/10/2026)

Lo que yo ya tengo en esta sesión: navegador integrado para ver y probar la web en móvil y escritorio, skills internas de diseño de artefactos, Canva (para fotos y recursos), y lectura de los archivos de marca.

Lo que conviene instalar (las tres son gratuitas y de código abierto; antes de instalar cada una leo su contenido y te lo digo, según tu regla):

| Skill | De quién | Para qué | Cómo se instala |
|---|---|---|---|
| **frontend-design** | Anthropic (oficial, revisada por Anthropic, en el directorio de plugins de la app) | Dirección de diseño: obliga a decidir una estética propia antes de escribir código, tipografía con intención, evitar el «aspecto de plantilla». Es la que pide el brief (13.1) | Desde el directorio de plugins de la app Claude, o `claude plugin add anthropic/frontend-design` |
| **Impeccable** | pbakaus (Apache 2.0) | Control de calidad: `critique`, `audit`, `polish`, `typeset`, `layout`; 59 reglas que detectan errores típicos de diseño hecho con IA (tarjetas dentro de tarjetas, fuentes manidas, etc.). Funciona con HTML estático | `npx impeccable install` dentro del repositorio |
| **Web Quality Skills** | Addy Osmani (ingeniero de Chrome en Google) | Auditorías de rendimiento (Core Web Vitals), accesibilidad y SEO, los tres objetivos del apartado 12 del brief | `npx add-skill addyosmani/web-quality-skills` |

Descartadas: *UI/UX Pro Max* (catálogo enorme de estilos; no hace falta porque ya tenemos manual de marca), skills de Tailwind/shadcn/React (son para aplicaciones, no para esta web), Playwright MCP (ya tengo navegador integrado), skills de animación GSAP (el brief pide movimiento mínimo).

Herramientas técnicas (se instalan en el proyecto, no en tu ordenador): **Eleventy** (generador de la web), **sharp** (convierte y redimensiona las fotos a WebP), **Lighthouse** (auditoría de Google, para los informes de rendimiento), **html-validate** y **pa11y** (validación de HTML y accesibilidad).

Fuentes: [toolkit de diseño para Claude Code](https://github.com/wilwaldon/Claude-Code-Frontend-Design-Toolkit) · [frontend-design](https://github.com/anthropics/claude-plugins-official) · [Impeccable](https://github.com/pbakaus/impeccable) · [comparativa de skills de UI 2026](https://claudeskills.info/best/frontend-design-skills/) · [Cloudflare Pages vs GoDaddy](https://comparetiers.com/compare/cloudflare-pages-vs-godaddy).

---

## 4. Lo que un desarrollador de primer nivel tendría presente (lista de control del proyecto)

Marcado ✓ lo que el brief ya cubre; ✚ lo que añade este plan.

**Fundamentos**
- ✓ Control de versiones (GitHub) con ramas y revisión antes de publicar.
- ✚ **Copia de seguridad fuera de GitHub:** una copia del repositorio en tu Drive cada mes (un comando, lo dejo en el README).
- ✚ **Nadie imprescindible:** el pastor (o un segundo diácono) con acceso a GitHub, Cloudflare y GoDaddy. Si tú no estás, la web sigue.
- ✚ **Documentación para no programadores** (README): cómo añadir una predicación, cambiar un horario, trasladar la web, qué hacer si algo falla.

**Diseño**
- ✓ Marca, tipografías propias, fotos reales, móvil primero.
- ✚ **Dirección de diseño antes de construir:** te presento 2-3 propuestas visuales de la portada (en HTML real, en tu móvil) y eliges. Es el paso que marca la diferencia entre «correcta» y «bonita».
- ✚ **Sistema de diseño en un solo archivo** (`tokens.css`): colores, tamaños de letra, espacios. Cambiar un color ahí lo cambia en toda la web.
- ✚ Imagen para redes (Open Graph 1200×630), favicons para todos los dispositivos, página 404 propia, estilos de impresión (que la página de horarios se imprima bien).

**Contenido**
- ✓ Predicaciones y agenda que se actualizan solas; año del pie automático.
- ✚ **Datos en un solo sitio** (`datos/iglesia.json`): horarios, dirección, WhatsApp, redes. Se cambia una vez y se actualiza en toda la web y en los datos estructurados de Google.
- ✚ Revisión trimestral programada (una rutina de Claude te avisa: horarios, textos caducados, enlaces rotos).

**Legal y privacidad**
- ✓ RGPD, cookies con aceptar/rechazar al mismo nivel, nada de datos religiosos en formularios, nota de la RV60.
- ✚ Verificación automática de que no se carga nada de terceros antes del consentimiento (prueba en el navegador antes de cada entrega).

**Técnica**
- ✓ HTTPS, cabeceras de seguridad, sitemap, robots, datos estructurados, redirecciones de la web antigua.
- ✚ **Portabilidad garantizada:** nada específico de Cloudflare dentro del HTML; lo específico (redirecciones, cabeceras) en dos archivos de texto con equivalente documentado para otros alojamientos.
- ✚ Dependencias mínimas y fijadas (un `package-lock.json`): dentro de tres años la web se podrá reconstruir igual.
- ✚ Comprobación automática en cada cambio (GitHub Actions): HTML válido, enlaces internos, accesibilidad, Lighthouse ≥ 90.
- ✚ Correo `contacto@iglesiabautistalogrono.com` reenviado al Gmail de la iglesia (gratis con Cloudflare).
- ✚ Aviso si la web se cae (UptimeRobot, gratis) al móvil.

**Posicionamiento**
- ✓ Títulos, descripciones, schema Church, Search Console.
- ✚ **Perfil de Empresa de Google** antes de publicar: es lo primero que ve quien busca «iglesia evangélica Logroño» y hoy tiene el horario incompleto y la web caída. Es tarea tuya (reclamar la ficha) y la más rentable de todo el proyecto.
- ✚ Revisión de visibilidad en asistentes de IA (skill seo-ai-visibility) al final.

**Seguridad del dominio** (tarea tuya en GoDaddy, 10 minutos): verificación en dos pasos, renovación automática, fecha de vencimiento apuntada, acceso delegado al pastor.

---

## 5. Fases y qué necesito de ti en cada una

| Fase | Qué hago yo | Qué haces tú | Entrega |
|---|---|---|---|
| **0. Preparación** (1 sesión) | Repositorio local, CLAUDE.md, estructura, inventario y recolor de logos (#0c5373), comprobación de fuentes, instalación de skills | Cuenta de GitHub (gratis) · «sí» a las skills · responder la lista de datos pendientes (brief 19.1) | Informe de inventario |
| **1. Dirección de diseño** (1 sesión) | 2-3 propuestas de portada en HTML real, con la marca y fotos de muestra | Elegir una y decir qué cambiarías · subir fotos a `fotos/` | Portada aprobada |
| **2. Maqueta completa** (2 sesiones) | Todas las páginas con los textos borrador del brief, huecos marcados | Revisarla en el móvil (y en otro chat si quieres: «uno hace, otro revisa») | Vista previa + lista de huecos |
| **3. Contenido definitivo** (1 sesión) | Meter textos revisados, fotos reales, datos confirmados | Visto bueno del pastor a textos doctrinales | Web sin huecos críticos |
| **4. Legal, SEO, accesibilidad, rendimiento** (1 sesión) | Textos legales, cookies, schema, auditorías | Revisar los textos legales (eres tú el experto) | Informe de auditoría |
| **5. Publicación** (1 sesión, contigo delante) | Guiarte paso a paso | Cuenta Cloudflare, cambiar servidores de nombres en GoDaddy, Search Console, Google Cloud | Web en el dominio |
| **6. Mantenimiento** | Rutina trimestral de revisión | Predicación semanal (2 min), reflexión mensual | — |

Plazo: 6-7 sesiones de unas 2 horas. El cuello de botella son las fotos y los datos pendientes, no la construcción.

---

## 6. Decisiones abiertas (para empezar la Fase 0)

1. Alojamiento: Cloudflare Pages (propuesta) o GoDaddy.
2. Permiso para instalar las tres skills (te leo cada una antes).
3. ¿Tienes cuenta de GitHub? Si no, la creamos en la Fase 0 (gratis, 5 minutos).
4. Color principal: el brief dice #0c5373 (el original); las piezas de redes de octubre usan #163A52. ¿Web y redes iguales o seguimos el brief?
5. Horarios: uso los del plan de redes (13/09/2026: miércoles 19:00-20:30, Años Dorados 18:00, WhatsApp 624 09 86 80), que son más nuevos que los del brief.
