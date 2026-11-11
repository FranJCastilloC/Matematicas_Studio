# Brief común para construir una página de concepto (lo leen los agentes que construyen páginas)

Vas a crear UN solo archivo: `biblioteca/conceptos/<id>.html`. El `id`, el título exacto, la ruta, los prerrequisitos y
el campo `aparece` ya están en `biblioteca/catalogo.js` como concepto `planeado`: léelo, no lo cambies. No toques ningún otro
archivo (ni nucleo.js, ni estilo.css, ni catalogo.js, ni fuentes.js, ni index.html, ni covarianza.html): la sesión principal
pasa el concepto a `listo` y agrega fuentes después. No uses el navegador: la verificación visual la hace la sesión principal.
Tú verificas con `python3 nucleo/verificar.py conceptos/<id>.html` (desde `biblioteca/`) hasta que diga OK, y corres el código
de Python y R con `python3` y `Rscript` para que los números que muestra la página sean reales.

## La esencia que no se negocia
- Español neutro, tuteo, segunda persona hacia Francisco. Nada de voseo ni regionalismos ("acá", "dar vuelta", "agarrar").
- Una **imagen central** manipulable alrededor de la cual gira todo el concepto. Francisco necesita VER.
- **De lo más plano a lo más complejo.** El paso 1 no usa fórmulas ni símbolos: es una situación concreta que se toca y se
  predice. La notación entra a partir del paso 3, cuando Francisco ya vio la idea. El último paso es el más técnico y conecta
  con la versión del libro o del máster.
- Cada paso construye una sola idea, termina con un **chequeo** que desbloquea el siguiente, y el primero pide una
  predicción antes de mostrar nada. Las respuestas que pide un chequeo no se muestran en el escenario hasta resolverlo.
- Fórmulas con números vivos. Trampas y contraejemplos a propósito. Lo profundo en `details.profundizar`.
- Sin emojis en ningún lado. Sin placeholders `{{}}`.
- Datos pequeños y limpios (las cuentas dan redondas), inventados y declarados como tales, salvo que se indique un dataset real.
- Es una biblioteca de matemática: si el concepto se usa en un modelo o en una materia, se menciona para atar, pero la página
  explica la matemática.

## Estructura obligatoria (copia la de `conceptos/covarianza.html`, que es el modelo; léela entera antes de empezar)
1. `topbar` con marca, `subnav` (Paso a paso, Vida real, Retos, Memoria, Lecturas, Conexiones), `#medidor`, `#btnTema`.
2. `hero`: eyebrow con área y fuente, h1, lede, caja `.hook` con textarea de hipótesis guardada con `B.nota(id, "hipotesis")`
   y citada de nuevo más adelante con `#citaHipo`.
3. Parte 1 `#recorrido`: `.rail` + `.recorrido` con `.pasos-col` (5 a 8 `section.paso.card` con `data-titulo`) y `aside.escenario.card`
   (el visual, un SVG o tabla, que cambia de modo por paso). Cada paso con `.check` y `.cuerpo`. Usa `B.pasos(...)` con `alEntrar`.
   Cuando haya una confusión natural del concepto, un `.destacado` con predicción (ver el de covarianza).
4. Parte 2 `#vidareal`: EXACTAMENTE el mismo markup de controles de covarianza (`#vrPred`, `.vr-barra` con `#vrPlay #vrAnt #vrSig #vrFin #vrReset #vrVel #vrProg`,
   `.vr-grid` con `.vr-codigo` (`#vrLang` con botones data-lang="py" y "r", `#vrCopiar`, `#vrCode`, `#vrNarra`, `#vrVars`) y `.vr-visual`
   (opcional `#vrFases`, más lo que tu visual necesite)). El motor es `B.vidaReal(root, {codigo, eventos, narrar, vars, visual, demora})`:
   lee su cabecera en `nucleo/nucleo.js`. Tú defines `CODIGO` (py y r, con id semántico por línea compartido entre lenguajes),
   precalculas `EV` (una foto del estado por línea ejecutada) y escribes `narrar`, `vars` y `visual`.
   El código se escribe con bucles explícitos para que se vea el algoritmo y termina comparando con la función de la librería.
   Lo que muestra la página debe ser idéntico, carácter por carácter, a lo que corriste. Índices como los escribe cada lenguaje (`ctx.ix`).
   Un chequeo `#vrPred` de predicción antes de reproducir, y dos o tres "trampas reales" de las librerías como retos (ids `codigo1`, `codigo2`, `codigo3`).
   Cierra con `p.vr-nota` (la versión de una línea con la librería) y un `details.profundizar` si hay una forma vectorizada.
   Si el concepto es de fundamentos y no tiene una función de librería natural, el código verifica la cuenta con una herramienta
   estándar (`math`, `fractions`, `numpy`, `sympy` si está instalado) y lo dice.
5. Parte 3 `#retos`: 6 a 12 retos variados: ojo clínico (rondas al azar, aprueba con 4 de 5), construir (manipular el visual hasta cumplir
   objetivos), a mano (datos al azar, pistas escalonadas, reintentable), cazar el error (3 variantes), propiedades (opción múltiple con pista
   distinta por respuesta equivocada, `mezclar: true`, reintentable). Cada `article.reto` con `.reto-head` y `span.estado[data-reto=id]`.
6. Parte 4 `#memoria`: `B.ordenar` de la fórmula con distractores y `B.tarjetas` (6 a 8 tarjetas).
7. Parte 5 `#lecturas` con `.lecturas-intro` y `<div class="lecturas" id="lecturasLista">`.
8. Parte 6 `#conexiones`: el mismo markup de covarianza (`div.conexiones` con las dos tarjetas `#prereq` y `#siguen`) y al final del
   script `B.conexiones("<id>");`. El núcleo llena los prerrequisitos y siguientes desde el catálogo (los planeados salen sin enlace)
   y agrega sola la tarjeta "Dónde te lo enseñaron" con las materias y unidades de `aparece`.
9. `p.pie` con la nota sobre los datos.
Scripts al final, en este orden: KaTeX (cdnjs 0.16.9), `../catalogo.js`, `../fuentes.js`, `../nucleo/nucleo.js`, y tu script inline.
Al inicio del script: `var C = B.concepto({ id, retos: RETOS, pasos: N }); B.medidor($("medidor"), C); B.botonTema($("btnTema")); B.tex(); B.citas(); B.lecturas($("lecturasLista"));`
Registra TODOS los ids de retos (incluidos codigo1..3) en RETOS y marca cada uno con `C.reto(id, ok)`.

## Citas a los libros (central)
Francisco quiere, mientras entiende aquí, poder ir al libro a leer la versión técnica y decir "ahora sí lo entiendo".
Dentro de los pasos, donde corresponde, agrega citas así (se vuelven chips con un panel y un enlace al PDF en esa página):
  <cite class="cita" data-fuente="raschka5" data-pag="5" data-pimp="143" data-seccion="Extracting the principal components step by step"
        data-que="Qué va a encontrar ahí, en una o dos frases concretas." data-cuando="Al terminar este paso"></cite>
- `data-fuente` es un id de `biblioteca/fuentes.js` (léelo: ahí están todas las fuentes registradas). Si tu especificación pide una
  fuente que todavía no está en `fuentes.js`, la sesión principal te pasa su id y la agrega antes de integrar la página.
- `data-pag` es la página del archivo PDF (la que abre el visor), `data-pimp` la impresa en el libro si es distinta. Los mapas de citas
  con páginas verificadas están en `brain/fuentes/*.md` del proyecto y en tu especificación: usa SOLO páginas que estén ahí. No inventes
  páginas. Si una fuente no cubre el tema, no la cites. `verificar.py` comprueba que el PDF exista y que la página no pase del final.
- Entre 6 y 14 citas por página, repartidas entre los pasos, el destacado y la vida real. Cada una dice qué hay y cuándo leerla.
- Si el material del máster tiene un error o una inconsistencia en ese tema (las erratas conocidas están en `brain/fuentes/*.md`),
  dilo en la página con naturalidad: es parte de entender.
- Si algo que explicas no aparece en el material oficial, explícalo igual y aclara que no viene en el material de la unidad.

## Al terminar, reporta en pocas líneas
Ruta del archivo, número de pasos, ids de retos, resultado de `verificar.py`, la salida real de tu código en Python y en R,
las fuentes citadas con sus páginas, y cualquier cosa que no pudiste hacer.
