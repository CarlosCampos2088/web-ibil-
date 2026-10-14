// Aviso de cookies de la web de IBIL. La elección se guarda solo en este navegador, 12 meses.
// Nada de terceros se carga nunca sin que la persona pulse; aquí solo se recuerda su preferencia sobre YouTube.
(function () {
  var aviso = document.getElementById("aviso-cookies");
  if (!aviso) return;
  var CLAVE = "ibil-cookies";
  function leer() { try { var v = localStorage.getItem(CLAVE); return v ? JSON.parse(v) : null; } catch (e) { return null; } }
  function guardar(v) { try { v.fecha = Date.now(); localStorage.setItem(CLAVE, JSON.stringify(v)); } catch (e) {} aplicar(v); }
  function aplicar(v) { document.documentElement.setAttribute("data-youtube", v && v.youtube ? "si" : "no"); }

  var elec = leer();
  if (!elec || Date.now() - (elec.fecha || 0) > 365 * 864e5) { aviso.hidden = false; } else { aplicar(elec); }

  var opciones = aviso.querySelector(".cookies__opciones");
  var btnConfigurar = aviso.querySelector('[data-cookies="configurar"]');
  var btnGuardar = aviso.querySelector('[data-cookies="guardar"]');
  var casilla = document.getElementById("cookies-youtube");

  function abrirConfiguracion() {
    var v = leer();
    casilla.checked = !!(v && v.youtube);
    opciones.hidden = false; btnGuardar.hidden = false; btnConfigurar.hidden = true;
    aviso.hidden = false;
  }

  aviso.addEventListener("click", function (e) {
    var b = e.target.closest("[data-cookies]");
    if (!b) return;
    var que = b.getAttribute("data-cookies");
    if (que === "aceptar") { guardar({ youtube: true }); aviso.hidden = true; }
    else if (que === "rechazar") { guardar({ youtube: false }); aviso.hidden = true; }
    else if (que === "configurar") { abrirConfiguracion(); }
    else if (que === "guardar") { guardar({ youtube: casilla.checked }); aviso.hidden = true; }
  });

  document.querySelectorAll("[data-abrir-cookies]").forEach(function (a) {
    a.addEventListener("click", function (e) { e.preventDefault(); abrirConfiguracion(); });
  });
})();
