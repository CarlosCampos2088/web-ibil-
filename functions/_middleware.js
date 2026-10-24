// Una sola dirección oficial para Google: la que lleva «www».
// Quien entra por iglesiabautistalogrono.com (sin www) va a la misma página con www (301).
// Las vistas previas de Cloudflare (*.pages.dev) no se tocan.
// Equivalente fuera de Cloudflare: una regla 301 de host en el servidor (README, «Si cambiamos de alojamiento»).
const OFICIAL = "www.iglesiabautistalogrono.com";
const SIN_WWW = ["iglesiabautistalogrono.com"];

export async function onRequest(ctx) {
  const url = new URL(ctx.request.url);
  if (SIN_WWW.includes(url.hostname)) {
    url.hostname = OFICIAL;
    return Response.redirect(url.toString(), 301);
  }
  return ctx.next();
}
