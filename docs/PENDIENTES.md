# Pendientes de la web IBIL (18/10/2026)

Estado: **web publicada** en https://web-ibil.pages.dev (Cloudflare Pages, se actualiza sola con cada cambio subido a GitHub `CarlosCampos2088/web-ibil-`, rama `main`). Ese enlace se puede enviar a cualquiera.

## Hecho el 17-18/10/2026
- Web en https://www.iglesiabautistalogrono.com y sin www (Cloudflare Pages, certificado activo). Nameservers de GoDaddy cambiados a Cloudflare (kim / piotr).
- Formulario de contacto funcionando: Resend con dominio verificado (DKIM, rsend, send en Cloudflare, sin proxy); variables RESEND_API_KEY (secreto), CONTACTO_DESTINO y CONTACTO_REMITENTE en Producción.
- Sin «diezmos» en ningún texto.

## Lo que hace Carlos (en el PC, con Claude al lado)

1. **Dominio con ñ** (`iglesiabautistalogroño.com`): añadirlo en Cloudflare y redirigir al principal. Opcional: Email Routing `contacto@` hacia el Gmail.

2. **Google.**
   - Search Console: añadir la propiedad del dominio (verificación por DNS en Cloudflare) y enviar `https://www.iglesiabautistalogrono.com/sitemap.xml`.
   - Google Cloud (app IEBIL Publicador): actualizar el enlace de la política de privacidad a `https://www.iglesiabautistalogrono.com/privacidad/`.
   - Ficha de Google Maps de la iglesia: poner la web nueva.

3. **Tarea programada del PC**: que después de publicar en YouTube/Meta ejecute `scripts\publicar_web.cmd` (exporta sermones y shorts, hace commit y push). Claude la monta cuando Carlos esté en el PC.

4. **Calendario Google «IBIL»** público (lo crea Carlos) → Claude lo enlaza en la agenda.

## Lo que decide Carlos (solo decir sí o no)

- Publicar las 3 noticias en borrador del 15/10: premio Juan Blake Briones, gala de Diaconía, conferencia misionera de Galicia («publica la noticia X»).
- Revisión del pastor de los textos doctrinales y de «Nosotros» (siguen siendo borrador hasta que él diga).
- Mejora futura: Google Workspace para entidades sin ánimo de lucro (gratis; correo con dominio propio y contrato de datos).

## Lo que hace Claude solo (en la nube, con los créditos; hasta el 05/11/2026)

- Retoques de texto y diseño que vaya pidiendo Carlos.
- Lighthouse y comprobaciones sobre el dominio definitivo cuando esté conectado.
- Chat fijo para la reflexión diaria (Carlos pasa los mensajes de los predicadores; Claude crea los archivos).
- Noticias quincenales: la rutina deja borradores los días 1 y 15.

## Reglas que no cambian

- Contraseñas y claves las teclea Carlos; nunca en el chat ni en el código.
- Nada de Gabriel Pérez. Sin direcciones de hogares. Sin comprar dominios.
- Codex CLI solo para tareas de código locales que Claude le encargue y revise.
- Decisión 17/10/2026: en la web no se habla de «diezmos»; la iglesia se sostiene con ofrendas dadas con libertad.
