/*
  Prueba de humo de una pagina de concepto. Se ejecuta dentro del navegador con:
    await (await fetch('../nucleo/prueba.js')).text() -> eval
  o pegando el contenido en la consola. Devuelve un objeto con lo que encontro.
  No reemplaza la prueba a mano: solo detecta lo que rompe.
*/
(async function () {
  "use strict";
  var out = { errores: [], avisos: [] };
  var B = window.Biblioteca;
  if (!B) { out.errores.push("Biblioteca no cargo"); return out; }
  // 1. rail y pasos
  var pasos = document.querySelectorAll(".paso"), rail = document.querySelectorAll(".rail button");
  out.pasos = pasos.length;
  if (pasos.length < 5) out.avisos.push("menos de 5 pasos");
  if (rail.length !== pasos.length) out.errores.push("rail (" + rail.length + ") y pasos (" + pasos.length + ") no coinciden");
  // 2. cada paso tiene chequeo con cuerpo renderizado
  pasos.forEach(function (p, i) {
    var chk = p.querySelectorAll(".check");
    if (!chk.length) out.avisos.push("paso " + (i + 1) + " sin chequeo");
    chk.forEach(function (c) {
      var tieneAlgo = c.querySelector(".opt, input, .fb, .slot-area, .linea, button");
      if (!tieneAlgo) out.errores.push("paso " + (i + 1) + ": chequeo vacio (no se renderizo)");
    });
    if (!p.querySelector(".sig")) out.errores.push("paso " + (i + 1) + " sin boton siguiente");
  });
  // 3. retos registrados existen en el DOM y tienen contenido
  var estados = document.querySelectorAll("[data-reto]");
  out.retos = estados.length;
  estados.forEach(function (e) {
    var id = e.getAttribute("data-reto"), el = document.getElementById(id) || e.closest(".reto, .check");
    if (!el) { out.errores.push("reto " + id + " sin elemento ni articulo"); return; }
    if (!el.querySelector(".opt, input, svg, .chip, .linea, button, .fb")) out.errores.push("reto " + id + " esta vacio");
  });
  // 4. KaTeX: ningun data-tex quedo sin renderizar y no hay errores de parse visibles
  var sinTex = [].filter.call(document.querySelectorAll("[data-tex]"), function (e) { return !e.querySelector(".katex"); });
  if (sinTex.length) out.errores.push(sinTex.length + " formulas data-tex sin renderizar");
  var katexErr = document.querySelectorAll(".katex-error");
  if (katexErr.length) out.errores.push(katexErr.length + " errores de KaTeX: " + [].map.call(katexErr, function (e) { return e.getAttribute("title") || e.textContent; }).slice(0, 3).join(" | "));
  // 5. citas y lecturas
  var citas = document.querySelectorAll("cite.cita");
  out.citas = citas.length;
  if (!citas.length) out.avisos.push("la pagina no cita ninguna fuente");
  citas.forEach(function (c) {
    var f = c.getAttribute("data-fuente");
    if (!window.FUENTES || !window.FUENTES[f]) out.errores.push("cita a fuente desconocida: " + f);
    if (!c.querySelector(".cita-chip")) out.errores.push("cita sin renderizar (falta B.citas()): " + f);
  });
  var lect = document.getElementById("lecturasLista");
  if (!lect) out.avisos.push("no hay seccion de lecturas"); else if (!lect.children.length) out.errores.push("lecturas vacias");
  // 6. vida real
  if (!document.getElementById("vidareal")) out.avisos.push("no hay seccion vida real");
  else {
    if (!document.querySelectorAll("#vrCode .ln").length) out.errores.push("el codigo de vida real no se renderizo");
    var sig = document.getElementById("vrSig");
    if (sig) { for (var i = 0; i < 400; i++) sig.click(); }
    var prog = document.getElementById("vrProg");
    out.vidaReal = prog ? prog.textContent : "sin progreso";
  }
  // 7. tarjetas y conexiones
  out.tarjetas = document.querySelectorAll(".tarjeta").length;
  if (!out.tarjetas) out.avisos.push("sin tarjetas de memoria");
  // 8. voseo
  var t = document.body.innerText;
  var ok = new Set("qué está más así sí después revés ahí esté además inglés irá demás estás aquí allí allá cuál quién cómo dónde también según tú él mí dé jamás atrás través país raíz aún".split(" "));
  var raros = [...new Set((t.match(/[A-Za-zñ]+(?:á|é|í)s?(?![a-záéíóúñ])/g) || []).filter(function (w) { return !ok.has(w.toLowerCase()); }))];
  var rio = t.match(/\b(acá|vos|dar vuelta|darlas vuelta|fijate|pensalo|agarr[aá])\b/gi) || [];
  if (raros.length) out.avisos.push("posible voseo: " + raros.slice(0, 12).join(", "));
  if (rio.length) out.errores.push("regionalismos: " + rio.join(", "));
  // 9. ancho
  if (document.documentElement.scrollWidth > document.documentElement.clientWidth + 1) out.errores.push("scroll horizontal: " + document.documentElement.scrollWidth + " > " + document.documentElement.clientWidth);
  // 10. recorrer todos los pasos forzando el candado y ver que no explote
  try {
    var prog0 = JSON.parse(localStorage.getItem("biblioteca:v1") || "{}");
    rail.forEach(function (b, i) { b.disabled = false; b.click(); });
    rail[0] && rail[0].click();
  } catch (e) { out.errores.push("al recorrer pasos: " + e.message); }
  out.ok = out.errores.length === 0;
  return out;
})();
