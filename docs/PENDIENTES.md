# Pendientes de la web IBIL (17/10/2026)

Estado: **web publicada** en https://web-ibil.pages.dev (Cloudflare Pages, se actualiza sola con cada cambio subido a GitHub `CarlosCampos2088/web-ibil-`, rama `main`). Ese enlace se puede enviar a cualquiera.

## Lo que hace Carlos (en el PC, con Claude al lado)

1. **Correo del formulario (Resend).**
   - Crear cuenta en https://resend.com con el Gmail de la iglesia («Continue with Google»).
   - Domains → Add domain → `iglesiabautistalogrono.com` → región Europa. Captura de los registros DNS para Claude (se ponen en Cloudflare en el paso 2).
   - API Keys → Create API key (permiso «Sending access») → copiar la clave.
   - En Cloudflare: Workers y Pages → web-ibil → Configuración → Variables de entorno (Producción) → añadir `RESEND_API_KEY` (la clave, marcada como secreta), `CONTACTO_DESTINO` = `iglesiabautistailog@gmail.com`, `CONTACTO_REMITENTE` = `web@iglesiabautistalogrono.com`. Volver a desplegar.
   - Claude quita el aviso «El formulario se activa al publicar» de la página de contacto y prueba un envío.

2. **Dominio.** En Cloudflare: Dominios → Agregar dominio → `iglesiabautistalogrono.com` (plan gratuito). Cloudflare da dos nameservers; se cambian en GoDaddy (Dominios → DNS → Nameservers → personalizados). Tarda de minutos a horas. Después:
   - Cloudflare Pages → web-ibil → Dominios personalizados → añadir `www.iglesiabautistalogrono.com` y `iglesiabautistalogrono.com`.
   - Registros DNS de Resend (del paso 1) en Cloudflare → DNS.
   - Dominio con ñ (`iglesiabautistalogroño.com`): añadirlo también y redirigir al principal (regla de redirección).
   - Email Routing: `contacto@iglesiabautistalogrono.com` → Gmail de la iglesia (opcional, gratis).

3. **Google.**
   - Search Console: añadir la propiedad del dominio (verificación por DNS en Cloudflare) y enviar `https://www.iglesiabautistalogrono.com/sitemap.xml`.
   - Google Cloud (app IEBIL Publicador): actualizar el enlace de la política de privacidad a `https://www.iglesiabautistalogrono.com/privacidad/`.
   - Ficha de Google Maps de la iglesia: poner la web nueva.

4. **Tarea programada del PC**: que después de publicar en YouTube/Meta ejecute `scripts\publicar_web.cmd` (exporta sermones y shorts, hace commit y push). Claude la monta cuando Carlos esté en el PC.

5. **Calendario Google «IBIL»** público (lo crea Carlos) → Claude lo enlaza en la agenda.

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
