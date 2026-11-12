/*
  Biblioteca de matematicas - nucleo compartido.

  Expone window.Biblioteca con:
    progreso(id) / todoProgreso()    lectura del progreso guardado en este navegador
    estadoRepaso(p)                  si toca repasar un concepto (repeticion espaciada)
    concepto({id, retos, pasos})     registro de pasos y retos de una pagina
    medidor(el, concepto)            barra de dominio en la cabecera
    botonTema(btn)                   alterna tema auto / claro / oscuro
    nota(id, clave[, valor])         textos que escribe Francisco (hipotesis, etc.)
    tex(root) / texStr(src)          formulas con KaTeX
    pasos(root, cfg)                 recorrido paso a paso con candado
    opcionMultiple / numerico / ordenar / cazarError / tarjetas   tipos de reto
    citas(root) / lecturas(el)       chips de cita al PDF y la lista de lecturas de la pagina
    conexiones(id)                   prerrequisitos, siguientes y "Donde te lo ensenaron" desde el catalogo
    vidaReal(root, cfg)              codigo Python y R animado linea por linea

  Todo el estado vive en localStorage y cada acceso esta protegido: si el
  navegador lo bloquea, la pagina funciona igual pero sin recordar progreso.

  Cuando la biblioteca se sirve desde el servidor de produccion (carpeta despliegue/),
  el progreso tambien se sincroniza con /api/progreso (Docker en despliegue/ o Vercel con api/index.py): al cargar se mezcla con lo que
  hay guardado, y cada cambio se envia unos segundos despues. Abierta con doble clic o
  con el servidor local de pruebas no hay /api y todo queda solo en el navegador.
  B.nube dice el estado: "local", "sincronizando", "sincronizado" o "error".
*/
(function () {
  "use strict";

  var KEY = "biblioteca:v1";
  var KEY_TEMA = "biblioteca:tema";

  function leer() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
  }
  function guardar(db) {
    try { localStorage.setItem(KEY, JSON.stringify(db)); } catch (e) { /* sin almacenamiento */ }
    programarEnvio();
  }

  /* ---------------- sincronizacion con el servidor ---------------- */
  var HTTP = location.protocol === "http:" || location.protocol === "https:";
  var nube = { estado: "local", servidor: false, pdf: false, actualizado: null };
  // origen sin usuario ni clave: fetch rechaza rutas relativas si la pagina se abrio con credenciales en la URL
  var API = HTTP ? location.origin : "";
  var envioPendiente = null;

  function avisarNube(estado) {
    nube.estado = estado;
    try { document.dispatchEvent(new CustomEvent("biblioteca:nube", { detail: nube })); } catch (e) { /* nada */ }
  }
  // JSON con claves y listas de valores simples ordenadas, para comparar sin importar el orden
  function canonico(x) {
    if (Array.isArray(x)) {
      var simples = x.every(function (v) { return v === null || typeof v !== "object"; });
      var a = x.map(canonico);
      if (simples) a.sort();
      return "[" + a.join(",") + "]";
    }
    if (x && typeof x === "object") {
      return "{" + Object.keys(x).sort().map(function (k) { return JSON.stringify(k) + ":" + canonico(x[k]); }).join(",") + "}";
    }
    return JSON.stringify(x);
  }
  function crudo() {
    try { return localStorage.getItem(KEY) || "{}"; } catch (e) { return "{}"; }
  }
  function enviar(alCargar) {
    envioPendiente = null;
    var texto = crudo();
    var enviado;
    try { enviado = JSON.parse(texto) || {}; } catch (e) { enviado = {}; }
    avisarNube("sincronizando");
    return fetch(API + "/api/progreso", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ datos: enviado }),
      credentials: "same-origin"
    }).then(function (r) {
      if (!r.ok) throw new Error(r.status);
      return r.json();
    }).then(function (res) {
      nube.servidor = true;
      nube.actualizado = res.actualizado;
      if (crudo() !== texto) { programarEnvio(); return; }   // hubo cambios mientras se enviaba
      if (canonico(res.datos) !== canonico(enviado)) {
        // el servidor trajo progreso de otro dispositivo: se guarda y, al cargar, se recarga una vez
        try { localStorage.setItem(KEY, JSON.stringify(res.datos)); } catch (e) { /* nada */ }
        if (alCargar) {
          var ultima = 0;
          try { ultima = +sessionStorage.getItem("biblioteca:recarga") || 0; } catch (e) { /* nada */ }
          if (Date.now() - ultima > 15000) {
            try { sessionStorage.setItem("biblioteca:recarga", String(Date.now())); } catch (e) { /* nada */ }
            location.reload();
            return;
          }
        }
      }
      avisarNube("sincronizado");
    }).catch(function () {
      avisarNube(nube.servidor ? "error" : "local");
    });
  }
  function programarEnvio() {
    if (!HTTP || !nube.servidor) return;
    if (envioPendiente) clearTimeout(envioPendiente);
    envioPendiente = setTimeout(function () { enviar(false); }, 2000);
  }
  if (HTTP) {
    fetch(API + "/api/salud", { credentials: "same-origin" }).then(function (r) {
      if (!r.ok) throw new Error(r.status);
      return r.json();
    }).then(function (j) {
      if (!j || !j.ok) throw new Error("sin api");
      nube.servidor = true;
      nube.pdf = !!j.pdf;   // Docker sirve los PDF en /pdf/; Vercel no
      return enviar(true);
    }).catch(function () { avisarNube("local"); });
    // al salir de la pagina con un envio pendiente, se manda de inmediato
    window.addEventListener("pagehide", function () {
      if (!envioPendiente || !nube.servidor) return;
      clearTimeout(envioPendiente);
      envioPendiente = null;
      try {
        navigator.sendBeacon(API + "/api/progreso", new Blob([JSON.stringify({ datos: JSON.parse(crudo()) })], { type: "application/json" }));
      } catch (e) { /* nada */ }
    });
  }
  function hoy() {
    var d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function vacio() { return { pasos: [], retos: {}, dias: [], ultima: null, notas: {} }; }
  function actualizar(id, fn) {
    var db = leer();
    var p = db[id] || vacio();
    if (!p.notas) p.notas = {};
    fn(p);
    p.mod = Date.now();
    db[id] = p;
    guardar(db);
    return p;
  }
  function mezclar(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)), t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
    return a;
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
  }
  function val(x) { return typeof x === "function" ? x() : x; }
  // Lee una clave propia: evita que ids como "constructor" devuelvan lo heredado de Object.prototype.
  function propio(o, k) { return o && Object.prototype.hasOwnProperty.call(o, k) ? o[k] : undefined; }

  var B = window.Biblioteca = {};
  B.mezclar = mezclar;
  B.nube = nube;
  B.hoy = hoy;
  B.INTERVALOS = [1, 3, 7, 14, 30];

  /* ---------------- progreso ---------------- */
  B.todoProgreso = leer;
  B.progreso = function (id) { var p = leer()[id] || vacio(); if (!p.notas) p.notas = {}; return p; };

  B.estadoRepaso = function (p) {
    if (!p || !p.ultima) return null;
    var n = (p.dias || []).length;
    var iv = B.INTERVALOS[Math.min(Math.max(n - 1, 0), B.INTERVALOS.length - 1)];
    var pasados = Math.round((Date.parse(hoy()) - Date.parse(p.ultima)) / 86400000);
    return { toca: pasados >= iv, pasados: pasados, intervalo: iv, sesiones: n };
  };

  B.dominioDe = function (p) {
    if (!p || !p.total) return 0;
    var n = 0;
    for (var k in p.retos) if (p.retos[k] && p.retos[k].ok) n++;
    return Math.min(1, n / p.total);
  };

  B.nota = function (id, clave, valor) {
    if (arguments.length < 3) return B.progreso(id).notas[clave] || "";
    actualizar(id, function (p) { p.notas[clave] = valor; });
    return valor;
  };

  B.concepto = function (cfg) {
    var id = cfg.id, oyentes = [];
    actualizar(id, function (p) {
      p.total = cfg.retos.length;
      p.totalPasos = cfg.pasos || 0;
      p.vista = hoy();
    });
    function avisar() { oyentes.forEach(function (f) { f(); }); }
    return {
      id: id,
      pasos: function () { return B.progreso(id).pasos; },
      pasoHecho: function (i) {
        actualizar(id, function (p) { if (p.pasos.indexOf(i) < 0) p.pasos.push(i); });
        avisar();
      },
      reto: function (rid, ok) {
        actualizar(id, function (p) {
          var r = propio(p.retos, rid) || { intentos: 0, ok: false, primera: null };
          r.intentos++;
          if (r.primera === null) r.primera = !!ok;
          if (ok) r.ok = true;
          p.retos[rid] = r;
          var d = hoy();
          if (p.dias.indexOf(d) < 0) p.dias.push(d);
          p.ultima = d;
        });
        avisar();
      },
      retoOk: function (rid) { var r = propio(B.progreso(id).retos, rid); return !!(r && r.ok); },
      dominio: function () {
        var p = B.progreso(id), n = 0;
        cfg.retos.forEach(function (r) { var x = propio(p.retos, r); if (x && x.ok) n++; });
        return cfg.retos.length ? n / cfg.retos.length : 0;
      },
      alCambiar: function (fn) { oyentes.push(fn); fn(); }
    };
  };

  B.medidor = function (el, concepto) {
    el.classList.add("meter");
    el.innerHTML = '<span>dominio</span><span class="track"><span class="fill"></span></span><b>0%</b>';
    concepto.alCambiar(function () {
      var d = concepto.dominio();
      el.querySelector(".fill").style.width = (d * 100).toFixed(1) + "%";
      el.querySelector("b").textContent = Math.round(d * 100) + "%";
    });
  };

  /* ---------------- tema ---------------- */
  var tema = "auto";
  try { tema = localStorage.getItem(KEY_TEMA) || "auto"; } catch (e) { tema = "auto"; }
  function aplicarTema(t) {
    var r = document.documentElement;
    if (t === "claro") r.setAttribute("data-theme", "light");
    else if (t === "oscuro") r.setAttribute("data-theme", "dark");
    else r.removeAttribute("data-theme");
  }
  aplicarTema(tema);
  B.botonTema = function (btn) {
    var nombres = { auto: "Tema: auto", claro: "Tema: claro", oscuro: "Tema: oscuro" };
    btn.textContent = nombres[tema];
    btn.addEventListener("click", function () {
      tema = tema === "auto" ? "claro" : tema === "claro" ? "oscuro" : "auto";
      try { localStorage.setItem(KEY_TEMA, tema); } catch (e) { /* nada */ }
      aplicarTema(tema);
      btn.textContent = nombres[tema];
    });
  };

  /* ---------------- formulas ---------------- */
  B.texStr = function (src, display) {
    if (window.katex) {
      try { return window.katex.renderToString(src, { displayMode: !!display, throwOnError: false }); } catch (e) { /* cae al texto */ }
    }
    return '<code>' + esc(src) + '</code>';
  };
  B.tex = function (root) {
    var els = (root || document).querySelectorAll("[data-tex]");
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      el.innerHTML = B.texStr(el.getAttribute("data-tex"), el.hasAttribute("data-display"));
    }
  };
  // "$...$" dentro de un texto se convierte en formula en linea
  B.conTex = function (html) {
    return String(html).replace(/\$([^$]+)\$/g, function (_, t) { return B.texStr(t, false); });
  };

  /* ---------------- recorrido paso a paso ---------------- */
  B.pasos = function (root, cfg) {
    var secciones = [].slice.call(root.querySelectorAll(".paso"));
    var n = secciones.length, actual = 0, hechos = {};
    cfg.concepto.pasos().forEach(function (i) { hechos[i] = true; });
    var rail = root.querySelector(".rail");
    var botones = [];

    secciones.forEach(function (s, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.innerHTML = '<span class="n">' + (i + 1) + '</span><span class="t">' + esc(s.getAttribute("data-titulo")) + '</span>';
      b.addEventListener("click", function () { ir(i, true); });
      rail.appendChild(b);
      botones.push(b);

      var nav = document.createElement("div");
      nav.className = "paso-nav";
      nav.innerHTML = '<button type="button" class="ant"' + (i === 0 ? " disabled" : "") + '>Anterior</button>' +
        '<span class="cuenta">Paso ' + (i + 1) + ' de ' + n + '</span>' +
        '<span class="bloqueado">Resuelve el chequeo para seguir</span>' +
        '<button type="button" class="primary sig">' + (i === n - 1 ? "Ir a los retos" : "Siguiente") + '</button>';
      s.appendChild(nav);
      nav.querySelector(".ant").addEventListener("click", function () { ir(i - 1, true); });
      nav.querySelector(".sig").addEventListener("click", function () {
        if (i === n - 1) { if (cfg.alTerminar) cfg.alTerminar(); }
        else ir(i + 1, true);
      });
    });

    function accesible(i) { return i === 0 || !!hechos[i - 1] || !!hechos[i]; }
    function pintar() {
      botones.forEach(function (b, i) {
        b.classList.toggle("hecho", !!hechos[i]);
        b.classList.toggle("actual", i === actual);
        b.disabled = !accesible(i);
        b.setAttribute("aria-current", i === actual ? "step" : "false");
      });
      secciones.forEach(function (s, i) {
        var sig = s.querySelector(".sig");
        sig.disabled = !hechos[i];
        s.querySelector(".bloqueado").style.display = hechos[i] ? "none" : "";
      });
      var b = botones[actual];
      if (b && b.scrollIntoView && rail.scrollWidth > rail.clientWidth) {
        rail.scrollLeft = b.offsetLeft - rail.clientWidth / 2 + b.clientWidth / 2;
      }
    }
    function ir(i, desplazar) {
      if (i < 0 || i >= n || !accesible(i)) return;
      actual = i;
      secciones.forEach(function (s, k) { s.classList.toggle("activo", k === i); });
      pintar();
      if (cfg.alEntrar) cfg.alEntrar(i);
      if (desplazar) {
        var top = root.getBoundingClientRect().top;
        if (top < 0 || top > window.innerHeight * 0.6) root.scrollIntoView({ block: "start" });
      }
    }
    function completar(i) {
      if (!hechos[i]) {
        hechos[i] = true;
        cfg.concepto.pasoHecho(i);
        secciones[i].querySelector(".sig").classList.add("listo");
      }
      pintar();
    }
    var inicio = 0;
    while (inicio < n - 1 && hechos[inicio]) inicio++;
    ir(cfg.inicio != null ? cfg.inicio : 0, false);
    return { ir: ir, completar: completar, actual: function () { return actual; }, hecho: function (i) { return !!hechos[i]; }, primeroPendiente: inicio };
  };

  /* ---------------- reto: opcion multiple ---------------- */
  // cfg: pregunta, opciones[], correcta, explicacion, pistas[] (por opcion), revelarTras, reintentable, alResolver(ok, primera)
  B.opcionMultiple = function (el, cfg) {
    var fallos = 0, hecho = false;
    var orden = cfg.opciones.map(function (_, i) { return i; });
    if (cfg.mezclar) orden = mezclar(orden);
    el.innerHTML = (cfg.pregunta ? '<p class="q">' + B.conTex(val(cfg.pregunta)) + '</p>' : "") +
      '<div class="opts"></div><div class="fb" aria-live="polite"></div>';
    var opts = el.querySelector(".opts"), fb = el.querySelector(".fb");
    orden.forEach(function (i) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "opt";
      b.innerHTML = B.conTex(cfg.opciones[i]);
      b.setAttribute("data-i", i);
      opts.appendChild(b);
    });
    function bloquear() { [].forEach.call(opts.children, function (c) { c.disabled = true; }); }
    function cerrar(ok) {
      hecho = true;
      bloquear();
      if (cfg.reintentable) {
        var r = document.createElement("button");
        r.type = "button";
        r.className = "reintentar ghost";
        r.textContent = "Intentar de nuevo";
        r.addEventListener("click", function () { B.opcionMultiple(el, cfg); });
        el.appendChild(r);
      }
      if (cfg.alResolver) cfg.alResolver(ok, ok && fallos === 0);
    }
    opts.addEventListener("click", function (e) {
      var b = e.target.closest(".opt");
      if (!b || hecho || b.classList.contains("mal")) return;
      var i = +b.getAttribute("data-i");
      var pista = cfg.pistas && cfg.pistas[i];
      if (i === cfg.correcta) {
        b.classList.add("ok");
        fb.innerHTML = '<span class="si">Correcto.</span> ' + B.conTex(val(cfg.explicacion) || "");
        cerrar(true);
      } else {
        fallos++;
        b.classList.add("mal");
        if (fallos >= (cfg.revelarTras || 2)) {
          opts.querySelector('[data-i="' + cfg.correcta + '"]').classList.add("ok");
          fb.innerHTML = '<span class="no">La respuesta es la marcada en verde.</span> ' + B.conTex(val(cfg.explicacion) || "");
          cerrar(false);
        } else {
          fb.innerHTML = '<span class="no">Todavía no.</span> ' + B.conTex(pista || "Piénsalo otra vez antes de elegir: ¿qué pasa con los signos?");
        }
      }
    });
    return { reiniciar: function () { B.opcionMultiple(el, cfg); } };
  };

  /* ---------------- reto: respuesta numerica ---------------- */
  // cfg: pregunta (texto o funcion), respuesta (numero o funcion), tolerancia, pistas[] (texto o funcion),
  //      explicacion, diagnostico(v, r) -> texto, reintentable, alResolver(ok, primera)
  function aNumero(s) {
    s = String(s).trim().replace(/−/g, "-").replace(/\s+/g, "").replace(",", ".");
    if (s === "") return NaN;
    if (/^-?\d+(\.\d+)?\/-?\d+(\.\d+)?$/.test(s)) { var a = s.split("/"); return +a[0] / +a[1]; }
    return Number(s);
  }
  B.aNumero = aNumero;
  B.numerico = function (el, cfg) {
    var fallos = 0, nPista = 0, hecho = false;
    var hayPistas = cfg.pistas && cfg.pistas.length;
    el.innerHTML = '<p class="q"></p><div class="num-row">' +
      '<input class="num" inputmode="decimal" autocomplete="off" aria-label="Tu respuesta" placeholder="tu respuesta">' +
      '<button type="button" class="primary comprobar">Comprobar</button>' +
      (hayPistas ? '<button type="button" class="pedir">Pista</button>' : "") +
      '<button type="button" class="ver ghost" hidden>Ver solución</button>' +
      '</div><div class="pistas"></div><div class="fb" aria-live="polite"></div>';
    var q = el.querySelector(".q"), inp = el.querySelector("input"), fb = el.querySelector(".fb");
    var pistas = el.querySelector(".pistas"), ver = el.querySelector(".ver"), pedir = el.querySelector(".pedir");
    function refrescar() { if (!hecho) q.innerHTML = B.conTex(val(cfg.pregunta)); }
    refrescar();
    function cerrar(ok) {
      hecho = true;
      inp.disabled = true;
      el.querySelector(".comprobar").disabled = true;
      if (pedir) pedir.disabled = true;
      ver.hidden = true;
      if (cfg.reintentable) {
        var r = document.createElement("button");
        r.type = "button";
        r.className = "reintentar ghost";
        r.textContent = cfg.textoReintentar || "Otro ejercicio";
        r.addEventListener("click", function () { if (cfg.antesDeReintentar) cfg.antesDeReintentar(); B.numerico(el, cfg); });
        el.appendChild(r);
      }
      if (cfg.alResolver) cfg.alResolver(ok, ok && fallos === 0 && nPista === 0);
    }
    function comprobar() {
      if (hecho) return;
      var v = aNumero(inp.value);
      if (isNaN(v)) { fb.innerHTML = "Escribe un número. Puedes usar coma, punto o una fracción como 3/2."; return; }
      var r = val(cfg.respuesta), tol = cfg.tolerancia != null ? cfg.tolerancia : 0.01;
      if (Math.abs(v - r) <= tol + 1e-9) {
        inp.classList.remove("mal");
        inp.classList.add("ok");
        fb.innerHTML = '<span class="si">Correcto.</span> ' + B.conTex(val(cfg.explicacion) || "");
        cerrar(true);
        return;
      }
      fallos++;
      inp.classList.add("mal");
      var msg = cfg.diagnostico ? cfg.diagnostico(v, r) : null;
      if (!msg && r !== 0 && v !== 0 && (v > 0) !== (r > 0)) msg = "El signo no coincide. ¿Qué lado domina?";
      if (!msg) msg = "No da. Revisa la cuenta paso por paso.";
      fb.innerHTML = '<span class="no">Todavía no.</span> ' + B.conTex(msg);
      if (fallos >= 3) ver.hidden = false;
    }
    el.querySelector(".comprobar").addEventListener("click", comprobar);
    inp.addEventListener("keydown", function (e) { if (e.key === "Enter") comprobar(); });
    inp.addEventListener("input", function () { inp.classList.remove("mal"); });
    if (pedir) pedir.addEventListener("click", function () {
      if (nPista >= cfg.pistas.length) return;
      var d = document.createElement("div");
      d.className = "pista";
      d.innerHTML = '<b>Pista ' + (nPista + 1) + '.</b> ' + B.conTex(val(cfg.pistas[nPista]));
      pistas.appendChild(d);
      nPista++;
      if (nPista >= cfg.pistas.length) { pedir.disabled = true; ver.hidden = false; }
    });
    ver.addEventListener("click", function () {
      fb.innerHTML = '<span class="no">Solución.</span> ' + B.conTex(val(cfg.explicacion) || "");
      cerrar(false);
    });
    return { refrescar: refrescar, resuelto: function () { return hecho; } };
  };

  /* ---------------- reto: ordenar piezas de una formula ---------------- */
  // cfg: pregunta, piezas[] (tex, en orden correcto), distractores[] (tex), soluciones[[indices]], explicacion, alResolver
  B.ordenar = function (el, cfg) {
    var piezas = cfg.piezas.map(function (t, i) { return { id: "p" + i, tex: t }; })
      .concat((cfg.distractores || []).map(function (t, i) { return { id: "d" + i, tex: t }; }));
    piezas = mezclar(piezas);
    var porId = {};
    piezas.forEach(function (p) { porId[p.id] = p; });
    var elegidas = [], hecho = false, fallos = 0;
    el.innerHTML = (cfg.pregunta ? '<p class="q">' + B.conTex(cfg.pregunta) + '</p>' : "") +
      '<div class="slot-area" aria-label="Tu fórmula" aria-live="polite"></div>' +
      '<div class="banco"></div>' +
      '<div class="btn-row"><button type="button" class="primary comprobar">Comprobar</button>' +
      '<button type="button" class="borrar">Borrar todo</button></div>' +
      '<div class="fb" aria-live="polite"></div>';
    var slot = el.querySelector(".slot-area"), banco = el.querySelector(".banco"), fb = el.querySelector(".fb");
    piezas.forEach(function (p) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "chip";
      b.setAttribute("data-id", p.id);
      b.innerHTML = B.texStr(p.tex);
      banco.appendChild(b);
    });
    function pintar(marcas) {
      slot.innerHTML = elegidas.length ? "" : '<span class="ph">Toca las piezas en el orden en que se escribe la fórmula.</span>';
      elegidas.forEach(function (id, k) {
        var b = document.createElement("button");
        b.type = "button";
        b.className = "chip" + (marcas ? (k < marcas ? " bien" : " mal") : "");
        b.setAttribute("data-k", k);
        b.innerHTML = B.texStr(porId[id].tex);
        slot.appendChild(b);
      });
      [].forEach.call(banco.children, function (c) { c.classList.toggle("usado", elegidas.indexOf(c.getAttribute("data-id")) >= 0); });
    }
    pintar();
    banco.addEventListener("click", function (e) {
      var b = e.target.closest(".chip");
      if (!b || hecho) return;
      var id = b.getAttribute("data-id");
      if (elegidas.indexOf(id) >= 0) return;
      elegidas.push(id);
      fb.innerHTML = "";
      pintar();
    });
    slot.addEventListener("click", function (e) {
      var b = e.target.closest(".chip");
      if (!b || hecho) return;
      elegidas.splice(+b.getAttribute("data-k"), 1);
      pintar();
    });
    el.querySelector(".borrar").addEventListener("click", function () { if (!hecho) { elegidas = []; fb.innerHTML = ""; pintar(); } });
    el.querySelector(".comprobar").addEventListener("click", function () {
      if (hecho) return;
      var mejor = 0, exacta = false;
      cfg.soluciones.forEach(function (sol) {
        var ids = sol.map(function (i) { return "p" + i; }), k = 0;
        while (k < ids.length && elegidas[k] === ids[k]) k++;
        if (k === ids.length && elegidas.length === ids.length) exacta = true;
        mejor = Math.max(mejor, k);
      });
      if (exacta) {
        hecho = true;
        pintar(elegidas.length);
        fb.innerHTML = '<span class="si">Correcto.</span> ' + B.conTex(cfg.explicacion || "");
        var r = document.createElement("button");
        r.type = "button";
        r.className = "reintentar ghost";
        r.textContent = "Armarla de nuevo";
        r.addEventListener("click", function () { B.ordenar(el, cfg); });
        el.appendChild(r);
        if (cfg.alResolver) cfg.alResolver(true, fallos === 0);
        return;
      }
      fallos++;
      pintar(mejor);
      var intruso = elegidas.some(function (id) { return id.charAt(0) === "d"; });
      fb.innerHTML = '<span class="no">Todavía no.</span> ' +
        (mejor ? "Las primeras " + mejor + " piezas van bien (en verde). " : "Ya la primera pieza no va ahí. ") +
        (intruso ? "Ojo: usaste al menos una pieza que no pertenece a esta fórmula." : "Falta algo o el orden no es ese.");
      if (cfg.alResolver && fallos === 1) cfg.alResolver(false, false);
    });
  };

  /* ---------------- reto: cazar el error ---------------- */
  // cfg: variantes [{intro, lineas[] (tex), erronea, explicacion}], alResolver
  B.cazarError = function (el, cfg, indice) {
    var vi = indice == null ? Math.floor(Math.random() * cfg.variantes.length) : indice % cfg.variantes.length;
    var v = cfg.variantes[vi], fallos = 0, hecho = false;
    el.innerHTML = '<p class="q">' + B.conTex(v.intro) + '</p><div class="lineas"></div><div class="fb" aria-live="polite"></div>';
    var lineas = el.querySelector(".lineas"), fb = el.querySelector(".fb");
    v.lineas.forEach(function (t, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "linea";
      b.setAttribute("data-i", i);
      b.innerHTML = '<span class="ln">' + (i + 1) + '</span><span>' + B.texStr(t) + '</span>';
      lineas.appendChild(b);
    });
    function cerrar(ok) {
      hecho = true;
      var r = document.createElement("button");
      r.type = "button";
      r.className = "reintentar ghost";
      r.textContent = "Otro caso";
      r.addEventListener("click", function () { B.cazarError(el, cfg, vi + 1); });
      el.appendChild(r);
      if (cfg.alResolver) cfg.alResolver(ok, ok && fallos === 0);
    }
    lineas.addEventListener("click", function (e) {
      var b = e.target.closest(".linea");
      if (!b || hecho || b.classList.contains("limpia")) return;
      var i = +b.getAttribute("data-i");
      if (i === v.erronea) {
        b.classList.add("mal");
        fb.innerHTML = '<span class="si">Lo encontraste.</span> ' + B.conTex(v.explicacion);
        cerrar(true);
      } else {
        fallos++;
        b.classList.add("limpia");
        if (fallos >= 2) {
          lineas.querySelector('[data-i="' + v.erronea + '"]').classList.add("mal");
          fb.innerHTML = '<span class="no">El error estaba en la línea ' + (v.erronea + 1) + '.</span> ' + B.conTex(v.explicacion);
          cerrar(false);
        } else {
          fb.innerHTML = '<span class="no">Esa línea está bien.</span> Vuelve a hacer cada cuenta antes de tocar otra línea.';
        }
      }
    });
  };

  /* ---------------- tarjetas de memoria ---------------- */
  B.tarjetas = function (el, lista) {
    el.classList.add("tarjetas");
    el.innerHTML = "";
    lista.forEach(function (t) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "tarjeta";
      b.setAttribute("aria-pressed", "false");
      b.innerHTML = '<span class="cara frente"><small>Pregunta</small><span>' + B.conTex(t[0]) + '</span></span>' +
        '<span class="cara dorso"><small>Respuesta</small><span>' + B.conTex(t[1]) + '</span></span>';
      b.addEventListener("click", function () {
        var v = b.classList.toggle("volteada");
        b.setAttribute("aria-pressed", v ? "true" : "false");
      });
      el.appendChild(b);
    });
  };
  /* ---------------- citas a los libros ---------------- */
  // En el HTML, una cita se escribe asi (dentro de un parrafo o de un paso):
  //   <cite class="cita" data-fuente="raschka5" data-pag="12" data-pimp="146"
  //         data-seccion="Extracting the principal components step by step"
  //         data-que="La formula de la covarianza y el codigo con np.cov."
  //         data-cuando="Despues del paso 3"></cite>
  // data-pag es la pagina del archivo PDF (la que abre el visor); data-pimp, la impresa en el libro (opcional).
  // Diapositivas HTML (fuentes con tipo: "diapositivas"): data-pag es el numero de diapositiva que se ve en pantalla
  // y data-ancla el ancla de reveal.js sin "#/" (por ejemplo "popular-kernel-functions" o "5/9").
  // Documentos HTML de una sola pagina (tipo: "documento"): data-pag es el numero de seccion ("9.4") y data-ancla el id sin "#".
  // B.citas(root) convierte cada <cite> en un chip con un panel desplegable y un enlace al PDF en esa pagina.
  // B.lecturas(el) arma, al final de la pagina, la lista de todas las citas en el orden en que aparecen.
  function fuenteDe(id) { return (window.FUENTES || {})[id]; }
  function esDiapo(f) { return !!(f && f.tipo === "diapositivas"); }
  function esDoc(f) { return !!(f && f.tipo === "documento"); }
  function fragmento(f, pag, ancla) {
    if (esDiapo(f)) return ancla ? "#/" + ancla : "";
    if (esDoc(f)) return ancla ? "#" + encodeURIComponent(ancla) : "";
    return pag ? "#page=" + pag : "";
  }
  function urlPdf(f, pag, ancla) {
    var ruta = String(f.archivo).split("/").map(encodeURIComponent).join("/");
    return "file://" + ruta + fragmento(f, pag, ancla);
  }
  function lugar(d) {
    if (esDiapo(d.f)) return d.pag ? "diapositiva " + d.pag : "";
    if (esDoc(d.f)) return d.pag ? "sección " + d.pag : d.seccion ? "sección «" + d.seccion + "»" : "";
    if (d.pimp) return "p. " + d.pimp;
    return d.pag ? "p. " + d.pag + " del PDF" : "";
  }
  function datosCita(c) {
    var id = c.getAttribute("data-fuente"), f = fuenteDe(id);
    return {
      id: id, f: f, pag: c.getAttribute("data-pag") || "", pimp: c.getAttribute("data-pimp") || "", ancla: c.getAttribute("data-ancla") || "",
      seccion: c.getAttribute("data-seccion") || "", que: c.getAttribute("data-que") || "", cuando: c.getAttribute("data-cuando") || ""
    };
  }
  function etiqueta(d) {
    var t = d.f ? d.f.corto : d.id, l = lugar(d);
    return l ? t + ", " + l : t;
  }
  // en el servidor de produccion los PDF viven en /pdf/, con la misma ruta que tienen dentro de brain/
  function urlPdfServidor(f, pag, ancla) {
    var partes = String(f.archivo).split("/brain/");
    if (partes.length < 2) return null;
    return API + "/pdf/" + partes.slice(1).join("/brain/").split("/").map(encodeURIComponent).join("/") + fragmento(f, pag, ancla);
  }
  function textoAbrir(d) { return esDiapo(d.f) ? "Abrir esa diapositiva" : esDoc(d.f) ? "Abrir esa sección" : "Abrir el PDF en esa pagina"; }
  function abrirPdf(d, boton) {
    if (!d.f) return;
    var url = urlPdf(d.f, d.pag, d.ancla);
    if (location.protocol === "file:") { window.open(url, "_blank"); return; }
    var enServidor = nube.pdf && urlPdfServidor(d.f, d.pag, d.ancla);
    if (enServidor) { window.open(enServidor, "_blank", "noopener"); return; }
    // servido por http el navegador bloquea file://; se copia la ruta para abrirla a mano
    var txt = d.f.archivo + (lugar(d) ? "  (" + lugar(d) + ")" : "");
    function listo(ok) {
      boton.textContent = ok ? "Ruta copiada. Pégala en Finder o en el navegador." :
        nube.servidor ? "Los PDF no están en el servidor: ábrelo en tu Mac" + (lugar(d) ? ", " + lugar(d) + "." : ".") :
        "Abre la biblioteca con doble clic para que el enlace funcione.";
      setTimeout(function () { boton.textContent = textoAbrir(d); }, 2600);
    }
    try { navigator.clipboard.writeText(txt).then(function () { listo(true); }, function () { listo(false); }); } catch (e) { listo(false); }
  }
  B.citas = function (root) {
    var cs = (root || document).querySelectorAll("cite.cita");
    for (var i = 0; i < cs.length; i++) (function (c) {
      var d = datosCita(c);
      var chip = document.createElement("button");
      chip.type = "button";
      chip.className = "cita-chip";
      chip.setAttribute("aria-expanded", "false");
      chip.innerHTML = '<span class="ico" aria-hidden="true"></span>' + esc(etiqueta(d));
      chip.title = "Leer en el libro";
      var pop = document.createElement("span");
      pop.className = "cita-pop";
      pop.hidden = true;
      pop.innerHTML = (d.f ? '<b>' + esc(d.f.titulo) + '</b><small>' + esc(d.f.autor) + '</small>' : '<b>' + esc(d.id) + '</b>') +
        (d.seccion ? '<span class="sec">Seccion: ' + esc(d.seccion) + (esDiapo(d.f) || esDoc(d.f) ? (lugar(d) ? ', ' + esc(lugar(d)) : '') : (d.pimp ? ', p. ' + esc(d.pimp) : '') + (d.pag ? ' (p. ' + esc(d.pag) + ' del PDF)' : '')) + '</span>' : '') +
        (d.que ? '<span class="que">' + esc(d.que) + '</span>' : '') +
        (d.cuando ? '<span class="cuando">Mejor momento: ' + esc(d.cuando) + '</span>' : '') +
        '<button type="button" class="abrir">' + textoAbrir(d) + '</button>';
      pop.querySelector(".abrir").addEventListener("click", function (e) { e.stopPropagation(); abrirPdf(d, this); });
      chip.addEventListener("click", function (e) {
        e.stopPropagation();
        var ab = pop.hidden;
        [].forEach.call(document.querySelectorAll(".cita-pop"), function (x) { x.hidden = true; });
        [].forEach.call(document.querySelectorAll(".cita-chip"), function (x) { x.setAttribute("aria-expanded", "false"); });
        pop.hidden = !ab;
        chip.setAttribute("aria-expanded", ab ? "true" : "false");
      });
      c.textContent = "";
      c.appendChild(chip);
      c.appendChild(pop);
    })(cs[i]);
    if (!B._citasCerrar) {
      B._citasCerrar = true;
      document.addEventListener("click", function () {
        [].forEach.call(document.querySelectorAll(".cita-pop"), function (x) { x.hidden = true; });
        [].forEach.call(document.querySelectorAll(".cita-chip"), function (x) { x.setAttribute("aria-expanded", "false"); });
      });
    }
  };
  B.lecturas = function (el, root) {
    var cs = (root || document).querySelectorAll("cite.cita"), vistos = {}, porFuente = [], mapa = {}, todas = [];
    for (var i = 0; i < cs.length; i++) {
      var d = datosCita(cs[i]), k = d.id + "|" + d.pag + "|" + d.ancla;
      if (vistos[k]) continue;
      vistos[k] = 1;
      if (!mapa[d.id]) { mapa[d.id] = { f: d.f, id: d.id, items: [] }; porFuente.push(mapa[d.id]); }
      mapa[d.id].items.push(d);
    }
    if (!porFuente.length) { el.innerHTML = '<p class="vacio">Esta pagina todavia no tiene lecturas asociadas.</p>'; return; }
    el.innerHTML = porFuente.map(function (g) {
      return '<div class="lectura"><h3>' + esc(g.f ? g.f.titulo : g.id) + '</h3>' +
        (g.f ? '<p class="autor">' + esc(g.f.autor) + (g.f.nota ? ' &middot; ' + esc(g.f.nota) : '') + '</p>' : '') +
        '<ul>' + g.items.map(function (d) {
          todas.push(d);
          return '<li><b>' + esc(lugar(d) || 'sin pagina') + '</b>' +
            (d.seccion ? ' &middot; ' + esc(d.seccion) : '') +
            (d.que ? '<br><span class="que">' + esc(d.que) + '</span>' : '') +
            (d.cuando ? '<br><span class="cuando">Mejor momento: ' + esc(d.cuando) + '</span>' : '') +
            (d.f ? ' <a class="abrir-l" data-i="' + (todas.length - 1) + '" href="' + urlPdf(d.f, d.pag, d.ancla) + '" target="_blank" rel="noopener">abrir</a>' : '') +
            '</li>';
        }).join("") + '</ul></div>';
    }).join("");
    [].forEach.call(el.querySelectorAll(".abrir-l"), function (a) {
      a.addEventListener("click", function (e) {
        if (location.protocol === "file:") return;
        e.preventDefault();
        abrirPdf(todas[+a.getAttribute("data-i")], a);
      });
    });
  };
  /* ---------------- conexiones y donde te lo ensenaron ---------------- */
  // Llena #prereq y #siguen con los titulos del catalogo, y agrega la tarjeta "Donde te lo ensenaron"
  // dentro de .conexiones con lo que dice "aparece". Un concepto planeado se muestra sin enlace.
  function normTit(s) { return String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase(); }
  B.buscarConcepto = function (titulo) {
    var cat = window.CATALOGO || [], n = normTit(titulo);
    for (var i = 0; i < cat.length; i++) if (normTit(cat[i].titulo) === n) return cat[i];
    return null;
  };
  B.nombreUnidad = function (materia, ud) {
    var m = (window.MATERIAS || []).filter(function (x) { return x.codigo === materia; })[0];
    if (!m) return { materia: materia, unidad: "" };
    var u = (m.unidades || []).filter(function (x) { return x[0] === ud; })[0];
    return { materia: m.nombre, unidad: u ? u[1] : "" };
  };
  B.conexiones = function (id, root) {
    root = root || document;
    var cat = window.CATALOGO || [], yo = cat.filter(function (c) { return c.id === id; })[0];
    if (!yo) return;
    function pill(nombre) {
      var c = B.buscarConcepto(nombre);
      if (c && c.estado !== "planeado") {
        var a = document.createElement("a"); a.className = "pill"; a.href = "../" + c.archivo; a.textContent = nombre; return a;
      }
      var s = document.createElement("span");
      s.className = "pill " + (c ? "planeado" : "falta");
      s.textContent = nombre;
      if (c) s.title = c.resumen;
      return s;
    }
    var pre = root.querySelector("#prereq"), sig = root.querySelector("#siguen");
    if (pre) { pre.textContent = ""; (yo.prerequisitos || []).forEach(function (n) { pre.appendChild(pill(n)); }); }
    if (sig) { sig.textContent = ""; (yo.siguientes || []).forEach(function (n) { sig.appendChild(pill(n)); }); }
    var caja = root.querySelector(".conexiones");
    if (!caja || caja.querySelector(".aparece")) return;
    var card = document.createElement("div");
    card.className = "card aparece";
    var ap = yo.aparece || [];
    card.innerHTML = '<h3 class="mini-tit">Dónde te lo enseñaron</h3>' + (ap.length
      ? '<ul class="aparece-lista">' + ap.map(function (a) {
          var n = B.nombreUnidad(a.materia, a.ud);
          return '<li><b>' + esc(a.ud) + (n.unidad ? ' · ' + esc(n.unidad) : '') + '</b><br><span>' + esc(n.materia) + ' (' + esc(a.materia) + ')</span></li>';
        }).join("") + '</ul>'
      : '<p class="vacio">No aparece en las materias del máster: es un fundamento que viene de los libros.</p>');
    caja.appendChild(card);
  };

  /* ---------------- vida real: motor del codigo animado ---------------- */
  // root: la seccion que contiene los controles e ids fijos:
  //   #vrCode #vrNarra #vrVars #vrProg #vrPlay #vrAnt #vrSig #vrFin #vrReset #vrVel #vrLang #vrCopiar (y #vrFases opcional)
  // cfg:
  //   codigo:  { py: [[id, texto], ...], r: [[id, texto], ...] }  id null = linea sin evento (comentario, llave, vacia)
  //   eventos: [ {id, fase, ...datos}, ... ]   una foto del estado por cada linea ejecutada, en orden
  //   narrar:  function (e, ctx) -> html       que paso en esta linea
  //   vars:    function (e, ctx) -> [html]     chips de variables (opcional)
  //   visual:  function (e, anterior, ctx)     redibuja el panel visual (opcional)
  //   demora:  function (eSiguiente) -> ms     ritmo por tipo de linea (opcional)
  //   inicio:  html antes de empezar (opcional)
  // ctx: { lang(), ix(i) indice como lo escribe el lenguaje, num(v), esc(s) }
  B.fmt = function (v, d) {
    d = d == null ? 2 : d;
    var s = Math.abs(v).toFixed(d);
    if (+s === 0) return (0).toFixed(d);
    return (v < 0 ? "−" : "") + s;
  };
  B.vidaReal = function (root, cfg) {
    var q = function (sel) { return root.querySelector(sel); };
    var EV = cfg.eventos, CODIGO = cfg.codigo;
    var langs = Object.keys(CODIGO);
    var vr = { idx: -1, lang: cfg.langInicial || langs[0], vel: 1, play: false, t: null };
    function ix(v) { return vr.lang === "r" ? v + 1 : v; }
    function num(v) { return Number.isInteger(v) ? B.fmt(v, 0) : B.fmt(v); }
    var ctx = { lang: function () { return vr.lang; }, ix: ix, num: num, esc: esc, fmt: B.fmt };
    function resaltar(linea, lang) {
      var re = lang === "py"
        ? /(#.*$)|(\b(?:import|from|as|for|in|if|else|def|return|range|print|True|False|None|lambda)\b)|(\b\d+(?:\.\d+)?\b)/g
        : /(#.*$)|(\b(?:for|in|if|else|function|TRUE|FALSE|NULL|library)\b)|(\b\d+(?:\.\d+)?\b)/g;
      var out = "", ult = 0, m;
      while ((m = re.exec(linea))) {
        out += esc(linea.slice(ult, m.index)) + '<span class="' + (m[1] ? "c-com" : m[2] ? "c-kw" : "c-num") + '">' + esc(m[0]) + '</span>';
        ult = re.lastIndex;
      }
      return out + esc(linea.slice(ult));
    }
    function pintarCodigo() {
      q("#vrCode").innerHTML = CODIGO[vr.lang].map(function (l, i) {
        return '<span class="ln" data-id="' + (l[0] || "") + '"><span class="g">' + (i + 1) + '</span>' + resaltar(l[1], vr.lang) + '</span>';
      }).join("");
    }
    function pintar(anterior) {
      var e = vr.idx >= 0 ? EV[vr.idx] : null;
      [].forEach.call(q("#vrCode").querySelectorAll(".ln"), function (l) { l.classList.toggle("on", !!e && l.getAttribute("data-id") === e.id); });
      q("#vrNarra").innerHTML = e ? cfg.narrar(e, ctx) : (cfg.inicio || "Dale a <b>Reproducir</b> o a <b>Paso</b> para ejecutar el programa línea por línea.");
      q("#vrProg").textContent = "línea " + (e ? (vr.idx + 1) : 0) + " de " + EV.length;
      if (q("#vrVars")) q("#vrVars").innerHTML = (cfg.vars ? cfg.vars(e, ctx) : []).join("");
      var fases = q("#vrFases");
      if (fases) [].forEach.call(fases.children, function (s) {
        var fz = +s.getAttribute("data-f"), act = e ? e.fase : 0;
        s.classList.toggle("actual", fz === act && !(e && e.fin));
        s.classList.toggle("hecha", fz < act || !!(e && e.fin));
      });
      if (cfg.visual) cfg.visual(e, anterior, ctx);
    }
    function ir(i) {
      var ant = vr.idx >= 0 ? EV[vr.idx] : null;
      vr.idx = Math.max(-1, Math.min(EV.length - 1, i));
      pintar(ant);
    }
    function demora() {
      var e = EV[vr.idx + 1], base = cfg.demora ? cfg.demora(e) : (e ? 700 : 600);
      return Math.max(60, base / vr.vel);
    }
    function tic() {
      vr.t = null;
      if (!vr.play) return;
      if (vr.idx >= EV.length - 1) { parar(); return; }
      ir(vr.idx + 1);
      vr.t = setTimeout(tic, demora());
    }
    function reproducir() {
      if (vr.idx >= EV.length - 1) ir(-1);
      vr.play = true;
      q("#vrPlay").textContent = "Pausa";
      clearTimeout(vr.t);
      vr.t = setTimeout(tic, 150);
    }
    function parar() { vr.play = false; q("#vrPlay").textContent = "Reproducir"; clearTimeout(vr.t); vr.t = null; }
    q("#vrPlay").addEventListener("click", function () { vr.play ? parar() : reproducir(); });
    q("#vrSig").addEventListener("click", function () { parar(); ir(vr.idx + 1); });
    q("#vrAnt").addEventListener("click", function () { parar(); ir(vr.idx - 1); });
    q("#vrFin").addEventListener("click", function () { parar(); ir(EV.length - 1); });
    q("#vrReset").addEventListener("click", function () { parar(); ir(-1); });
    var vel = q("#vrVel");
    if (vel && !vel.children.length) [0.5, 1, 2, 4, 8].forEach(function (s) {
      var b = document.createElement("button");
      b.type = "button";
      b.textContent = s + "x";
      b.setAttribute("aria-pressed", s === 1 ? "true" : "false");
      b.addEventListener("click", function () {
        vr.vel = s;
        [].forEach.call(vel.children, function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
      });
      vel.appendChild(b);
    });
    var lb = q("#vrLang");
    if (lb) lb.addEventListener("click", function (ev) {
      var b = ev.target.closest("button");
      if (!b || !CODIGO[b.getAttribute("data-lang")]) return;
      vr.lang = b.getAttribute("data-lang");
      [].forEach.call(lb.children, function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
      pintarCodigo();
      pintar();
    });
    var cp = q("#vrCopiar");
    if (cp) cp.addEventListener("click", function () {
      var btn = this, txt = CODIGO[vr.lang].map(function (l) { return l[1]; }).join("\n") + "\n";
      function listo(ok) { btn.textContent = ok ? "Copiado" : "No se pudo copiar"; setTimeout(function () { btn.textContent = "Copiar código"; }, 1600); }
      try { navigator.clipboard.writeText(txt).then(function () { listo(true); }, function () { listo(false); }); } catch (e) { listo(false); }
    });
    pintarCodigo();
    pintar();
    return { ir: ir, reproducir: reproducir, parar: parar, repintar: function () { pintarCodigo(); pintar(); }, idx: function () { return vr.idx; }, lang: function () { return vr.lang; } };
  };
})();
