# Web de IBIL — reglas para cada sesión

Web de la Iglesia Bautista Internacional de Logroño (IBIL). Fuente de verdad: `docs/Brief web IBIL 20261010.md`. Plan de trabajo: `docs/PLAN.md`. Léelos si vas a tocar algo que no esté claro aquí.

Prioridad si algo se contradice: 1) lo que diga Carlos en la sesión; 2) este archivo; 3) el brief; 4) el manual de marca (`marca/`).

## Decisiones tomadas (10/10/2026)
- **Alojamiento:** Cloudflare Pages (gratis). Dominio en GoDaddy, no se toca hasta la fase 5. No contratar nada en GoDaddy.
- **Generador:** Eleventy, contenido en Markdown. Sin frameworks de cliente, sin base de datos, sin CMS.
- **Color principal: #163A52** (azul profundo, el de las redes y del kit de marca; sustituye al #0c5373 del brief §4). Azul IBIL #1F5F80 para enlaces y botones secundarios. Granate #7A2E3B solo acento (≤10 %). Arena #EFE7DA y arena clara #F7F2E9 de fondos. Paleta completa en `marca/03 Colores/colores-ibil.css`.
- **Tipografías:** Cormorant Garamond (títulos, versículos; 500/600, cursiva 500) y Public Sans (texto, menú, botones; 400/600). Autoalojadas en WOFF2, nunca desde Google Fonts.
- **Datos oficiales** (más nuevos que el brief; vienen del plan de redes del 13/09/2026): un solo archivo, `datos/iglesia.json`. Nunca escribir horarios, dirección o teléfonos a mano en plantillas.
  - Domingo: 10:00 oración · 10:15 Escuela Bíblica · 11:30 culto · 12:00 clases para niños.
  - Miércoles 19:00-20:30 discipulado y oración · 3.er viernes 20:00-22:00 vigilia · 1.er sábado 18:00 Años Dorados (Carlos, 14/10/2026: «en realidad es a las 6»). Países de la congregación: España, Colombia, Venezuela, Brasil, México, Bolivia, Ecuador (`paises` en iglesia.json).
  - WhatsApp y teléfono de la iglesia: **624 09 86 80** (sí se publica). El del pastor no se publica.
  - C/ Ronda de los Cuarteles 32 bajo, 26005 Logroño.
- **Doctrina:** solo de las fuentes de la iglesia: `docs/Guia Doctrinas Basicas - vigente 2025.pdf`, el folleto y la web actual (brief, Anexos A y B). Nada de doctrina propia. Todo texto doctrinal es BORRADOR hasta que lo revise el pastor.
- **Veto:** nada de Gabriel Pérez se publica (predicaciones, reels).
- **Actualización 12/10/2026 (prevalece):** fundación oficial **marzo de 2024** (contrato del local); antes, en la IB Internacional de Calahorra y, desde 2023, en hogares de la congregación (nunca publicar direcciones de hogares). Identidad: iglesia pequeña que empieza, bajo el ministerio del pastor Felipe Albacete con los diáconos Carlos Campos y Evelyn Torres; «todo dentro de la Biblia y nada fuera de ella»; ser pequeña es un valor, nunca una disculpa; sin inventar proyectos sociales. Ministerios vigentes en `datos/iglesia.json` (`ministerios`; el juvenil lleva `oculto: true` hasta que Carlos confirme). Dominios: solo iglesiabautistalogrono.com y iglesiabautistalogroño.com; no proponer comprar más.

## Qué se actualiza solo y qué es fijo (decisión de Carlos, 10/10/2026)
**Se actualiza solo, sin tocar nada**, a partir de las colas de redes del PC (`edit/_sistema`):
- **Predicaciones** (última en portada, listado, página por sermón): cada sermón publicado en YouTube (estado «hecho» en `cola_youtube.json`) → `scripts/exportar_feed.py` crea su archivo en `contenido/predicaciones/` con resumen, pasaje y capítulos del `PUBLICACION.md`.
- **En un minuto**: los shorts publicados (misma cola).
- **Agenda**: parábolas del discipulado, vigilias, Años Dorados y Cena del Señor de `agenda_iglesia.json` (+ actos especiales escritos a mano en `datos/agenda.json`). Nunca muestra actos pasados.
- **Reflexión diaria**: los archivos de `contenido/reflexion-diaria/` (Carlos pasa los mensajes de los predicadores una vez a la semana; Claude los corrige y crea los archivos).
- **Noticias**: rutina «IBIL · noticias para la web (quincenal)», días 1 y 15 a las 18:00: revisa UEBE, FEREDE y Protestante Digital y deja hasta 3 noticias en `contenido/noticias/` con `borrador: true` (no salen). Carlos aprueba; para publicar se quita `borrador`.
- **Año del pie.**

**Mecanismo** (se monta en la fase 5, cuando exista GitHub y Cloudflare): la tarea del PC que publica en YouTube/Meta ejecuta después `py scripts/exportar_feed.py`, hace `git commit` y `git push`; Cloudflare Pages reconstruye la web en un minuto. Si el PC está apagado, la web muestra lo último; nunca queda vacía. Mientras no exista ese enlace, el exportador se ejecuta a mano.

**Fijo** (se cambia a mano, con revisión): portada, ¿Eres nuevo?, Conoce a Jesús, Nosotros (3), Vida de iglesia, Niños y jóvenes, Contacto, legales. Horarios, dirección y WhatsApp solo en `datos/iglesia.json`. Fotos en `datos/fotos.json`. Reflexión del mes: un archivo en `contenido/reflexiones/`.

## Marca y voz (resumen; detalle en brief §4)
- Logo B horizontal en cabecera, A en negativo en el pie, D para favicon. Los SVG de `marca/01 Logotipo` ya están en #163A52: no recolorear.
- Fotos reales de la iglesia; nunca banco de imágenes ni IA. Catálogo en `datos/fotos.json`; las de menores llevan `menores: true` y solo se muestran con `autorizada: true` (Carlos confirmó el 10/10/2026 que los padres firmaron la autorización LOPD). Hueco de foto = `[FOTO PENDIENTE: descripción]`.
- Frases cortas, tutear en singular («te esperamos»), «ustedes» en plural (nunca «vosotros» salvo citas RV60). Sin jerga sin explicar, sin emojis, sin mayúsculas para gritar. Versículos siempre con referencia, RV60 literal.
- Un solo botón principal en toda la web: «Visítanos este domingo» → `/eres-nuevo/`.
- Nombre: primera mención «Iglesia Bautista Internacional de Logroño»; después «IBIL». Firma «IBIL · Logroño».

## Reglas técnicas
- Móvil primero; WCAG 2.2 AA; Lighthouse móvil ≥ 90 en las cuatro categorías; zoom nunca bloqueado.
- Nada de terceros antes del consentimiento. Decisión 14/10/2026 tras revisión legal doble: sin banner de cookies; la web no guarda nada en el navegador y YouTube solo se carga al pulsar cada vídeo, con aviso previo (cookies y EE. UU.) y alternativa «Ver en youtube.com». Maps y Calendar, solo enlaces.
- Formulario sin preguntas religiosas (RGPD art. 9); peticiones de oración por WhatsApp o correo, que solo ven el pastor y los diáconos (confirmado por Carlos el 15/10/2026; así figura en la privacidad).
- Portabilidad: nada específico de Cloudflare en el HTML; `_redirects` y `_headers` en `public/`, con equivalente documentado en el README.
- Año del pie automático. Nunca mostrar actos pasados.
- Ninguna clave, contraseña ni dato personal no público en el repositorio.
- Mantener la dirección `/privacidad/` con la sección «Herramienta IEBIL Publicador» (brief §10.5); la antigua `/política-de-privacidad` redirige ahí.

## Flujo de trabajo
- Una rama por fase o tarea; commits en español; Carlos aprueba antes de fusionar en `main`.
- No tocar dominio ni DNS.
- No inventar datos: los huecos van como `[PENDIENTE: qué]` y a la lista de pendientes de la entrega.
- Al terminar cada fase: vista previa (móvil y escritorio), lista de cambios y lista de huecos.
- Carlos no es programador: explicaciones breves, pasos numerados, rutas con espacios entre comillas.
- Skills en `.claude/skills/`: `frontend-design` (dirección de diseño), `impeccable` (crítica y pulido; hooks desactivados, no activarlos), `web-quality-audit` y sus cinco auxiliares (rendimiento, Core Web Vitals, accesibilidad, SEO, buenas prácticas).

## Estructura
`datos/` datos de la iglesia · `contenido/predicaciones/` y `contenido/reflexiones/` un Markdown por entrada · `src/` plantillas, estilos y scripts · `public/` archivos que se copian tal cual · `marca/` kit de marca · `fotos/` originales de Carlos (se optimizan a WebP, no se publican tal cual) · `docs/` brief, plan, doctrina · `_site/` salida generada (no se versiona).
