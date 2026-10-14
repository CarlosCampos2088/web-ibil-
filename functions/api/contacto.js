// Formulario de contacto de la web de IBIL (Cloudflare Pages Function: POST /api/contacto).
// No guarda nada: envía el mensaje al correo de la iglesia con Resend y deja en ese mismo
// correo la prueba del consentimiento (fecha, casilla y versión de la política de privacidad, RGPD art. 7.1).
//
// Variables que se configuran en Cloudflare (Settings → Variables), nunca en el código:
//   RESEND_API_KEY     clave de Resend
//   CONTACTO_DESTINO   Gmail de la iglesia que recibe los mensajes
//   CONTACTO_REMITENTE p. ej. "Web IBIL <web@iglesiabautistalogrono.com>" (dominio verificado en Resend)
//   TURNSTILE_SECRET   (opcional) clave secreta de Cloudflare Turnstile contra robots
//
// Portabilidad: si la web se muda de Cloudflare, este archivo se sustituye por cualquier
// servicio de formularios; el HTML del formulario no cambia salvo el atributo action.

const VERSION_PRIVACIDAD = "1.0 (octubre de 2026)";

export async function onRequestPost({ request, env }) {
  const datos = await request.formData();
  const nombre = (datos.get("nombre") || "").toString().trim().slice(0, 120);
  const correo = (datos.get("correo") || "").toString().trim().slice(0, 200);
  const mensaje = (datos.get("mensaje") || "").toString().trim().slice(0, 5000);
  const rgpd = datos.get("rgpd") === "on";
  const trampa = (datos.get("web") || "").toString();

  // Robots: el campo trampa debe ir vacío
  if (trampa) return volver("/contacto/gracias/");

  if (!nombre || !mensaje || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(correo) || !rgpd) {
    return volver("/contacto/?error=datos#formulario");
  }

  if (env.TURNSTILE_SECRET) {
    const r = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: new URLSearchParams({ secret: env.TURNSTILE_SECRET, response: datos.get("cf-turnstile-response") || "" }),
    });
    const v = await r.json();
    if (!v.success) return volver("/contacto/?error=robot#formulario");
  }

  const ahora = new Date().toLocaleString("es-ES", { timeZone: "Europe/Madrid" });
  const texto =
    `Mensaje desde la web de IBIL\n\n` +
    `Nombre: ${nombre}\nCorreo: ${correo}\n\n${mensaje}\n\n` +
    `— — —\nPrueba del consentimiento (RGPD art. 7.1):\n` +
    `Fecha y hora: ${ahora} (hora de Madrid)\n` +
    `Casilla «He leído y acepto la política de privacidad»: marcada\n` +
    `Versión de la política aceptada: ${VERSION_PRIVACIDAD}\n` +
    `Conservar este correo como máximo un año (ver política de privacidad).`;

  const envio = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: env.CONTACTO_REMITENTE,
      to: [env.CONTACTO_DESTINO],
      reply_to: correo,
      subject: `Web IBIL: mensaje de ${nombre}`,
      text: texto,
    }),
  });

  if (!envio.ok) return volver("/contacto/?error=envio#formulario");
  return volver("/contacto/gracias/");
}

function volver(destino) {
  return new Response(null, { status: 303, headers: { Location: destino } });
}
