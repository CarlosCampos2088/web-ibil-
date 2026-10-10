// JavaScript mínimo de la web de IBIL: menú móvil y carga de vídeos de YouTube a petición.
(function () {
  // Menú móvil
  var boton = document.querySelector(".menu-boton");
  var menu = document.getElementById("menu-movil");
  if (boton && menu) {
    boton.addEventListener("click", function () {
      var abierto = boton.getAttribute("aria-expanded") === "true";
      boton.setAttribute("aria-expanded", String(!abierto));
      boton.textContent = abierto ? "Menú" : "Cerrar";
      menu.hidden = abierto;
      document.body.classList.toggle("menu-abierto", !abierto);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !menu.hidden) boton.click();
    });
  }

  // Vídeos de YouTube: nada se carga de YouTube hasta que la persona pulsa el botón.
  document.querySelectorAll(".video[data-youtube]").forEach(function (caja) {
    var btn = caja.querySelector("button");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var id = caja.getAttribute("data-youtube");
      var iframe = document.createElement("iframe");
      iframe.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0&hl=es";
      iframe.title = btn.getAttribute("data-titulo") || "Vídeo de YouTube";
      iframe.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
      iframe.setAttribute("allowfullscreen", "");
      caja.replaceChildren(iframe);
      caja.classList.add("video--cargado");
    });
  });
})();
