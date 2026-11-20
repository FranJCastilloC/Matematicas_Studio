# Especificación: Entrenar con Keras: épocas, lotes y curvas (keras-entrenamiento)

- Ruta: `keras` (grupo Programación con datos), orden 2. Tanda 10.
- Archivo: `biblioteca/conceptos/keras-entrenamiento.html`
- Área: Programación con datos. Fuente del catálogo: "ISLR2 lab 10.9; la materia (UD3) no trae material en la carpeta".
- Prerrequisitos: "Una red con Keras: modelo secuencial y funcional" (planeado, misma tanda: sale sin enlace hasta que exista),
  "Descenso de gradiente estocástico" (listo).
- Siguientes: ninguno en el catálogo (lista vacía).
- Aparece: SM142002 UD3.
- Resumen del catálogo: "Qué hacen una época y un lote, y cómo leer las curvas de pérdida de entrenamiento y validación."

**Foco y límites.** Esta página es la MECÁNICA del entrenamiento: cómo `fit` reparte los datos en lotes, cuántos pasos hace por época,
qué número imprime Keras como `loss` y como `val_loss`, cómo se leen las dos curvas y cómo funciona la parada temprana (`EarlyStopping`).
NO repite:
- la regla del gradiente estocástico ni por qué el ruido ayuda: eso es "Descenso de gradiente estocástico" (prerrequisito; se enlaza por título en el paso 3);
- qué es el sobreajuste en general, sesgo y varianza: "Sobreajuste" y "Sesgo y varianza de un modelo" (se enlazan por título en el paso 5);
- dropout por dentro: "Dropout y batch normalization" (se enlaza en el destacado);
- cómo se arma el modelo (`Sequential`, `Input`, `Dense`, formas): "Una red con Keras: modelo secuencial y funcional" (prerrequisito).
Sugerencia para la sesión principal (no la cambia el constructor): agregar "Entrenar con Keras: épocas, lotes y curvas" a `siguientes` de
"Sobreajuste" o de "Validación cruzada" si se quiere el enlace automático en Conexiones; y considerar "Momentum, RMSProp y Adam" como
siguiente de esta página.

**Material oficial.** SM142002 UD3 (scikit-learn, TensorFlow, Git) **no está publicada** en la carpeta de la materia (mapa
`sm142002-programacion.md`, líneas 46 y 376): la página lo dice con naturalidad. Lo que sí hay en el máster está en SM142004: UD4 (`dl4`, `dl4diapo`,
`lstm4`: learning rate en prosa, tamaño del lote como hiperparámetro, sin definir época ni mini-lote) y UD5 (`cnn5diapo` p.38-39: el `compile` y el `fit`
de Keras con `batch_size=128`, `nb_epoch=4`). UD6 (aprendizaje por refuerzo) no trata épocas, lotes ni curvas de validación: no se cita.
La explicación completa viene de ISLR2 (lab 10.9 y sección 10.7) y de Raschka cap. 11.

**Librerías en esta máquina.** Python 3.13.5, NumPy 2.1.3, R 4.6.1, scikit-learn 1.6.1. **TensorFlow/Keras NO están instalados** (`import tensorflow`
y `import keras` dan `ModuleNotFoundError`), y el paquete `keras` de R tampoco (`library(keras)` falla). No se instalaron. Por eso:
- el código de Vida real escribe el entrenamiento a mano con bucles (NumPy y R base), que es justo lo que `fit` hace por dentro, y se corrió en los dos lenguajes;
- las líneas de Keras (`model.fit(...)`, `EarlyStopping`) aparecen en el texto, en `p.vr-nota` y en la memoria, **marcadas en la página como
  "no se pudo correr en esta máquina"**; los números que se dicen de ellas ("Keras imprimiría...") se calcularon con NumPy imitando la regla de Keras
  y se presentan así ("calculado imitando a Keras"), nunca como salida real de Keras.

## Datos de toda la página (inventados, se dice en la página)

Diez estudiantes de un grupo de práctica: horas de estudio `x` y nota de un mini-examen `y`. Ese grupo tuvo un corrector **generoso**.
Cuatro estudiantes de otro grupo, con un corrector normal, son la **validación**. El modelo es una recta por el origen, `nota = w · horas`,
con un solo peso `w` (sin sesgo, para que todo se vea en una dimensión). Empieza en `w = 0`.

| conjunto | x (horas) | y (nota) |
|---|---|---|
| entrenamiento (en este orden) | 1, 2, 1, 2, 1, 2, 1, 2, 2, 2 | 3, 5, 2, 5, 2, 5, 3, 5, 4, 6 |
| validación | 1, 2, 1, 2 | 3, 4, 1, 4 |

Cuentas limpias (todas verificadas con NumPy):
- Pérdida = error cuadrático medio (MSE). Media de $x^2$ = 2.8, media de $xy$ = 7, media de $y^2$ = 17.8 en entrenamiento; 2.5, 5 y 10.5 en validación.
- **Dos parábolas exactas**: $L_{\text{train}}(w) = 0.3 + 2.8\,(w - 2.5)^2$ y $L_{\text{val}}(w) = 0.5 + 2.5\,(w - 2)^2$.
  Mínimo de entrenamiento en $w = 2.5$ (pérdida 0.3); mínimo de validación en $w = 2$ (pérdida 0.5). Comprobado: en $w = 0$, 17.8 y 10.5;
  en $w = 2$, 1.0 y 0.5; en $w = 2.5$, 0.3 y 1.125; en $w = 2.2152$, 0.5271 y 0.6158 (fórmula y media directa coinciden).
- Con lotes de 4 en orden fijo, los lotes son las filas 1-4, 5-8 y 9-10. **Los tres lotes tienen el mismo mínimo, 2.5**
  (lote 1: $\sum xy = 25$, $\sum x^2 = 10$; lote 2: 25 y 10; lote 3: 20 y 8), así que el descenso por lotes llega a 2.5 sin ruido de orden: la curva
  de entrenamiento baja siempre, y la de validación baja hasta que `w` cruza 2 y después sube. Eso es el sobreajuste de esta página:
  `w` sigue al corrector generoso, una rareza del grupo de entrenamiento que no se repite en datos nuevos.
- Hiperparámetros del recorrido: tasa 0.05, lote 4, paciencia 2, hasta 10 épocas.

Los 12 pasos de gradiente de las 4 épocas (verificados; `grad` = media de $2x(wx - y)$ en el lote, `perd_lote` = MSE del lote antes del paso):

| época | lote (filas) | w antes | perd_lote | grad | w después |
|---|---|---|---|---|---|
| 1 | 1-4 | 0 | 15.75 | −12.5 | 0.625 |
| 1 | 5-8 | 0.625 | 8.9141 | −9.375 | 1.0938 (exacto 1.09375) |
| 1 | 9-10 | 1.0938 | 8.9102 | −11.25 | 1.6562 (exacto 1.65625) |
| 2 | 1-4 | 1.6562 | 1.9048 | −4.2188 | 1.8672 |
| 2 | 5-8 | 1.8672 | 1.1261 | −3.1641 | 2.0254 |
| 2 | 9-10 | 2.0254 | 1.9010 | −3.7969 | 2.2152 |
| 3 | 1-4 | 2.2152 | 0.3277 | −1.4238 | 2.2864 |
| 3 | 5-8 | 2.2864 | 0.2390 | −1.0679 | 2.3398 |
| 3 | 9-10 | 2.3398 | 1.1026 | −1.2814 | 2.4039 |
| 4 | 1-4 | 2.4039 | 0.1481 | −0.4805 | 2.4279 |
| 4 | 5-8 | 2.4279 | 0.1380 | −0.3604 | 2.4459 |
| 4 | 9-10 | 2.4459 | 1.0117 | −0.4325 | 2.4676 |

Fin de cada época (lo que imprime el código de Vida real):

| época | w | pérdida de entrenamiento (con el w del final) | pérdida de validación | `loss` que imprimiría Keras (calculado imitando a Keras) |
|---|---|---|---|---|
| 1 | 1.6562 | 2.2934 | 0.7954 | 11.6477 |
| 2 | 2.2152 | 0.5271 | **0.6158** (la mejor) | 1.5926 |
| 3 | 2.4039 | 0.3259 | 0.9078 | 0.4472 |
| 4 | 2.4676 | 0.3029 | 1.0465 | 0.3168 |

Sin parada temprana seguiría: época 5 w 2.4891 (0.3003 / 1.0979), 6: 2.4963 (0.3 / 1.1158), 7: 2.4988 (0.3 / 1.1219), 8: 2.4996 (0.3 / 1.1239),
9: 2.4999 (0.3 / 1.1246), 10: 2.5 (0.3 / 1.1249). Con paciencia 2: la época 3 no mejora (1 sin mejora), la 4 tampoco (2) → se detiene al final de la
época 4 y restaura el `w` de la época 2, 2.2152.

La columna "Keras" es la media de las `perd_lote` de la época **ponderada por el tamaño del lote** (por ejemplo época 1: (15.75·4 + 8.9141·4 + 8.9102·2) / 10
= 11.6477), que es como Keras acumula el `loss` que muestra durante la época: cada lote se mide con el `w` que tenía **antes** de su paso. No se pudo
comprobar con Keras en esta máquina; la página lo presenta como "lo que Keras imprimiría según su regla", no como salida real.

Tabla de referencia para el escenario y el reto "construir" (tasa, lote, paciencia → época en que se detiene, mejor época, `w` restaurado y su pérdida
de validación; máximo 10 épocas; verificada con NumPy):

| tasa | lote | paciencia 1 | paciencia 2 | paciencia 3 | w restaurado | val restaurada |
|---|---|---|---|---|---|---|
| 0.025 | 1 | para en 2, mejor 1 | 3, 1 | 4, 1 | 1.9875 | 0.5004 |
| 0.025 | 2 | 3, 2 | 4, 2 | 5, 2 | 1.9507 | 0.5061 |
| 0.025 | 4 | 4, 3 | 5, 3 | 6, 3 | 1.9255 | 0.5139 |
| 0.025 | 5 | 6, 5 | 7, 5 | 8, 5 | 1.9526 | 0.5056 |
| 0.025 | 10 | no para (10), mejor 10 | igual | igual | 1.9467 | 0.5071 |
| 0.05 | 1 | 2, 1 | 3, 1 | 4, 1 | 2.507 | 1.1426 |
| 0.05 | 2 | 2, 1 | 3, 1 | 4, 1 | 2.027 | 0.5018 |
| 0.05 | 4 | 3, 2 | **4, 2** | 5, 2 | **2.2152** | **0.6158** |
| 0.05 | 5 | 3, 2 | 4, 2 | 5, 2 | 1.8426 | 0.5619 |
| 0.05 | 10 | 6, 5 | 7, 5 | 8, 5 | 2.0163 | 0.5007 |
| 0.1 | 1 | 2, 1 | 3, 1 | 4, 1 | 2.8206 | 2.1834 |
| 0.1 | 2 | 2, 1 | 3, 1 | 4, 1 | 2.4725 | 1.0581 |
| 0.1 | 4 | 2, 1 | 3, 1 | 4, 1 | 2.375 | 0.8516 |
| 0.1 | 5 | 2, 1 | 3, 1 | 4, 1 | 2.0656 | 0.5108 |
| 0.1 | 10 | 3, 2 | 4, 2 | 5, 2 | 2.016 | 0.5006 |
| 0.01 | 1 | 4, 3 | 5, 3 | 6, 3 | 2.0689 | 0.5119 |
| 0.01 | 2 | 7, 6 | 8, 6 | 9, 6 | 2.0575 | 0.5083 |
| 0.01 | 4 | 10, 9 | 10, 9 | 10, 9 | 2.0311 | 0.5024 |
| 0.01 | 5 | no para, mejor 10 | igual | igual | 1.7126 | 0.7065 |
| 0.01 | 10 | no para, mejor 10 | igual | igual | 1.0951 | 2.5473 |

Lote 1 con tasa 0.05 en orden fijo termina en 2.5862 (no en 2.5): cada estudiante empuja hacia su propio $y/x$ y el último del orden pesa más. Es la razón de
`shuffle=True` (paso 4, profundizar). Lote 10 (todo el conjunto, un paso por época), tasa 0.05: w 0.7, 1.204, 1.5669, 1.8282, 2.0163, 2.1517, 2.2492...
(validación 4.725, 2.084, 0.969, 0.5738, **0.5007**, 0.5575, 0.6553).

El escenario recalcula todo esto en JavaScript con el mismo algoritmo (orden fijo, gradiente medio del lote, último lote más chico). La tabla sirve para
comprobar que el JavaScript da lo mismo.

## Imagen central

**Una bola que baja por una parábola mientras otra parábola, la de validación, mira desde al lado; y debajo, la sombra de ese viaje: las dos curvas por época.**

Tres paneles que se encienden por capas (en móvil, uno debajo de otro; todo se maneja con botones, nada depende de arrastrar):

1. **Mazo de tarjetas** (arriba): las 10 tarjetas de entrenamiento (`1 h → 3`, `2 h → 5`, ...) en fila, en su orden. Un selector de **tamaño de lote**
   (1, 2, 4, 5, 10) las agrupa con marcos de color: con 4 salen tres marcos (4, 4 y 2 tarjetas; el último marco más chico y rotulado "lote incompleto").
   El lote que se está usando se ilumina en `--accent`. Las 4 tarjetas de validación van aparte, en un mazo gris con candado: **nunca entran a un lote**.
   Un contador fijo: `época 1 · paso 2 de 3 · actualizaciones: 5`.
2. **Las parábolas** (centro): eje horizontal `w` de 0 a 3. La parábola de entrenamiento $L_{\text{train}}(w)$ en `--j` y, cuando se enciende, la de
   validación $L_{\text{val}}(w)$ en `--k`. Una **bola** sobre la parábola de entrenamiento marca el `w` actual. Cada paso (un lote) la mueve: se
   dibuja una flecha de `w` antes a `w` después con el rótulo `− tasa · grad`. Modo "parábola del lote": con un lote elegido, se dibuja en gris su propia
   parábola (lotes 1 y 2: $0.125 + 2.5(w-2.5)^2$ cada uno, verificado con perd_lote 0.1481 en w = 2.4039; lote 3, con solo dos tarjetas de 2 horas: $1 + 4(w-2.5)^2$, más empinada; las tres con el mínimo en 2.5). Marcas verticales finas en `w = 2` (mínimo de validación) y
   `w = 2.5` (mínimo de entrenamiento), rotuladas solo cuando el paso lo permite.
3. **Las curvas por época** (abajo): eje x = época (1 a 10), eje y = pérdida. Al terminar cada época se agrega un punto a la curva de entrenamiento
   (`--j`) y a la de validación (`--k`). Interruptor "qué entrenamiento mostrar": **con el w del final de la época** (lo que calcula el código de Vida real)
   o **como lo imprime Keras** (promedio de los lotes durante la época). Marcador de la **mejor época** (estrella `--accent`) y contador de paciencia
   ("sin mejora: 1 de 2").

Controles (barra de botones grandes): `Un paso (un lote)`, `Una época`, `Entrenar hasta el final`, `Reiniciar w = 0`; selectores tamaño de lote
(1, 2, 4, 5, 10), tasa (0.01, 0.025, 0.05, 0.1), paciencia (apagada, 1, 2, 3), épocas máximas (10); casillas "barajar cada época" (paso 4,
profundizar; usa una semilla fija y lo dice) y "restaurar los mejores pesos" (paso 6).

Una **recta en la nube de puntos** (pequeña, a la derecha de las tarjetas en escritorio, encima en móvil): los 10 puntos de entrenamiento rellenos, los 4
de validación huecos, y la recta `nota = w · horas` que gira con `w`. Es el único panel del paso 1 junto con las tarjetas.

Modos por paso: 1) `tarjetas` (tarjetas + recta, sin parábolas ni números de pérdida); 2) `conteo` (marcos de lotes y contador de pasos por época y
actualizaciones, con el selector de lote); 3) `paso` (parábola de entrenamiento y la bola; un paso a la vez con la fórmula viva); 4) `lote` (selector de
lote, comparación de recorridos de la bola en una época); 5) `curvas` (se enciende la parábola de validación y el panel de curvas); 6) `parada`
(paciencia, mejor época, restaurar); 7) `fit` (los tres paneles a la vez, con el código de `fit` al lado y cada argumento enlazado a su panel:
`batch_size` ilumina los marcos, `epochs` el eje de épocas, `validation_data` el mazo gris, `callbacks` la estrella).

## Hipótesis inicial

"Entrenas una red y la pérdida de entrenamiento baja en cada época, sin falta. ¿Eso quiere decir que el modelo es cada vez mejor con datos que nunca vio?
Si pudieras mirar solo un número durante el entrenamiento para decidir cuándo parar, ¿cuál mirarías y en qué momento pararías?"

Se vuelve a mostrar en el paso 6 (`#citaHipo`), cuando la parada temprana responde la pregunta.

## Pasos (7)

### Paso 1. Repasar los datos por partes
- Idea: entrenar no es mirar todos los datos una vez y listo. El modelo mira un **puñado** de ejemplos (un lote), corrige la recta un poco (un paso) y
  pasa al siguiente puñado. Cuando ya vio todas las tarjetas una vez, terminó una **vuelta** (una época). Sin fórmulas ni símbolos.
- Escenario: modo `tarjetas`. Las 10 tarjetas en fila y la recta, que empieza plana (`w = 0`: nota 0 para todos). Botón "ver un puñado de 4": se iluminan
  4 tarjetas y la recta gira un poco hacia ellas. Disponible SOLO después del chequeo.
- Chequeo (predicción antes de tocar, sin símbolos): "Tienes 10 tarjetas y el modelo las mira de 4 en 4, en orden. ¿Cuántas veces corrige la recta en una
  vuelta completa por las 10 tarjetas?"
  - Correcta: **3**. Dos puñados de 4 y uno de 2: el último puñado es más chico, pero cuenta igual.
  - 2: "las 2 que sobran no se pierden: forman un puñado más pequeño". (Es lo que hace el generador de Raschka, que sí descarta el último lote incompleto;
    Keras no lo descarta.)
  - 2.5: "no existe media corrección: el puñado de 2 es una corrección completa".
  - 10: "eso sería mirar de 1 en 1".
- Después del chequeo, se habilita "ver un puñado" y "dar la vuelta completa": la recta gira tres veces y termina en `w = 1.6562`.
- Cita raschka11 PDF 18 (impresa 352): `minibatch_generator` baraja y corta en trozos de 100 y **descarta el último incompleto** (con 55 000 da justo 550
  lotes, así que ahí no pierde nada). Texto: "Keras no descarta el último: lo usa aunque sea más chico".

### Paso 2. Época, lote y pasos por época (trampa)
- Idea: ponerle nombre. **Lote** (`batch_size`, $b$): cuántas filas mira por paso. **Paso**: una actualización del peso. **Época** (`epochs`): una pasada
  completa por las $n$ filas de entrenamiento. Pasos por época $= \lceil n / b \rceil$; actualizaciones totales $=$ épocas $\times \lceil n / b \rceil$.
  Tamaño del último lote: $n - b\,(\lceil n/b \rceil - 1)$.
- Notación entra aquí. Escenario: modo `conteo`. Selector de lote (1, 2, 4, 5, 10) y de épocas; los marcos de las tarjetas y la fórmula viva:
  $\lceil 10 / 4 \rceil = 3$ pasos, último lote de 2; con 4 épocas, 12 actualizaciones. (Con lote 1: 10 pasos; 2: 5; 5: 2; 10: 1.)
- **Trampa marcada**: dividir sin redondear hacia arriba. ISLR2 escribe "an epoch is 176/32 = 5.5 SGD steps" (Hitters, 176 filas, lotes de 32): es la
  cuenta "en equivalente de datos"; Keras en realidad hace **6** pasos, los cinco primeros de 32 y el último de 16 (176 − 5·32 = 16). Con MNIST:
  48 000 / 128 = 375 justos. El cuaderno DL03 de SM142004 UD4 muestra la barra de progreso de Keras `9/9` con 404 filas y lotes de 50
  ($\lceil 8.08 \rceil = 9$, último lote de 4) y `8/8` con 398 filas ($\lceil 7.96 \rceil = 8$, último de 48). Se nombra sin chip (el cuaderno no está
  registrado en `fuentes.js`).
- Chequeo (cálculo con datos en vivo, el selector de lote vale el que dejó Francisco; con el de inicio, lote 4): "Con este lote, ¿cuántas actualizaciones
  de `w` hace el entrenamiento en 4 épocas?" Con lote 4: **12**. Pistas por error típico: 8 ("redondeaste 2.5 hacia abajo: el último lote cuenta"),
  10 ("eso son 2.5 × 4"), 40 ("eso serían 10 épocas de 4 pasos, o 4 épocas de lote 1").
- Citas: islr2 PDF 456 (impresa 445): `fit(..., epochs = 1500, batch_size = 32, validation_data = ...)` y la cuenta 176/32 = 5.5;
  islr2 PDF 449 (impresa 438): "epochs ... counts the number of times an equivalent of the full training set has been processed" y 48 000 / 128 ≈ 375
  (cita nueva, ver "Citas").
- `details.profundizar` "¿Y si no pongo `batch_size`?": Keras usa 32 por defecto. Con 10 filas, eso es un solo paso por época (el lote entero): el
  recorrido es el de lote 10 del paso 4 (w = 0.7 al final de la época 1, frente a 1.6562 con lote 4).

### Paso 3. Un paso = un lote
- Idea: en cada paso, el gradiente se calcula **solo con las filas del lote** y `w` se mueve en contra: `w ← w − tasa · grad`, con
  $\text{grad} = \frac{1}{b}\sum_{i \in \text{lote}} 2x_i\,(w x_i - y_i)$, la derivada del MSE del lote. Es el descenso de gradiente estocástico del
  prerrequisito, ahora visto desde `fit` (enlace por título a "Descenso de gradiente estocástico": ahí está por qué el ruido ayuda; aquí no se repite).
- Escenario: modo `paso`. La parábola de entrenamiento con la bola en `w = 0`. Botón "un paso": la bola salta. Fórmula viva con los números del lote:
  $\text{grad} = \frac{2\cdot1(0-3) + 2\cdot2(0-5) + 2\cdot1(0-2) + 2\cdot2(0-5)}{4} = \frac{-6 - 20 - 4 - 20}{4} = -12.5$,
  $w = 0 - 0.05\cdot(-12.5) = 0.625$. Modo "parábola del lote": cada lote dibuja su propia parábola en gris; las tres tienen el mínimo en 2.5.
- Chequeo (cálculo, antes de pulsar el botón): "La bola está en `w = 0` y el primer lote es (1, 3), (2, 5), (1, 2), (2, 5). Con tasa 0.05, ¿dónde queda
  `w` después de este paso?" Correcta **0.625**. Pistas: −0.625 ("el paso va en contra del gradiente: menos por menos"), 12.5 ("ese es el gradiente;
  falta multiplicar por la tasa"), 0.3125 ("dividiste entre 8: la media es entre las 4 filas del lote").
- Después del chequeo, los dos pasos siguientes con sus números: −9.375 → 1.09375 y −11.25 → 1.65625 (el lote de 2 filas también da un paso completo).
- Citas: raschka11 PDF 4 (impresa 338): SGD aproxima la pérdida con un ejemplo o un mini-lote y actualiza más seguido; raschka11 PDF 22 (impresa 356):
  la regla $w_j := w_j - \eta\,\partial L/\partial w_j$ y la corrida de 50 épocas; dl4 p.18: el learning rate en prosa ("el gradiente de error se
  multiplica por el learning rate"), sin mini-lotes ni épocas: el material de la unidad no los define.

### Paso 4. El tamaño del lote cambia el viaje (trampa)
- Idea: con la misma tasa, lotes chicos dan **muchos pasos ruidosos** por época; lotes grandes, **pocos pasos estables**. Ninguno es "el correcto": es un
  hiperparámetro (la UD4 lo pone en la lista de buenas prácticas).
- Escenario: modo `lote`. Selector de lote; botón "una época" desde `w = 0`; las huellas de la bola quedan dibujadas para comparar.
  Fin de la época 1 (tasa 0.05): lote 1 → 2.507; lote 2 → 2.027; lote 4 → 1.6562; lote 5 → 1.2164; lote 10 → 0.7.
- Chequeo (predicción antes de tocar): "Misma tasa, una sola época desde `w = 0`. ¿Con qué tamaño de lote llega `w` más lejos?"
  - Correcta: **lote 1**: 10 pasos en la época (llega a 2.507, ya pasado el mínimo de entrenamiento).
  - Lote 10: "usa todos los datos, pero da un solo paso: 0.7".
  - "Da igual, todos ven los mismos datos": "ven lo mismo, pero se mueven distinto número de veces".
  - Lote 4: "es el del recorrido; llega a 1.6562, menos que con lotes más chicos".
- **Trampa marcada**: más pasos no es siempre mejor. Con lote 1 en orden fijo, `w` termina en **2.5862**, no en 2.5: cada tarjeta empuja hacia su propia
  razón $y/x$ y la última del orden tira más. Con lote 4 los tres lotes tienen el mismo mínimo y la bola llega a 2.5 justo.
- Citas: dl4 p.43 (tamaño del lote entre las buenas prácticas, junto a la tasa de aprendizaje); lstm4 p.51 (la misma lista en las diapositivas: "batch size").
- `details.profundizar` "¿Para qué sirve `shuffle=True`?": Keras baraja las filas de entrenamiento al empezar cada época (es el valor por defecto). Así ningún
  estudiante es siempre "el último" y el sesgo del orden fijo se promedia. Por eso dos entrenamientos dan resultados un poco distintos; ISLR2 lo avisa en
  la p. 446 (PDF 457): "Due to the use of SGD, the results vary slightly with each fit". La casilla "barajar cada época" del escenario lo muestra con semilla fija.
  En esta página el código usa orden fijo para que Python y R den los mismos números.

### Paso 5. Dos curvas: entrenamiento y validación (destacado)
- Idea: al final de cada época se mide la pérdida en dos conjuntos: el de **entrenamiento** (con el que se calculan los pasos) y el de **validación**
  (que el modelo nunca usa para moverse). Mientras las dos bajan, el modelo aprende algo que sirve; cuando la de validación sube y la de entrenamiento sigue
  bajando, el modelo está aprendiendo rarezas del entrenamiento: **sobreajuste** (enlace por título a "Sobreajuste").
- Escenario: modo `curvas`. Se enciende la parábola de validación y el panel de curvas. Antes del chequeo solo se ve la curva de entrenamiento
  (2.2934, 0.5271, 0.3259, 0.3029: baja siempre); la de validación está tapada.
- Chequeo (predicción antes de destapar): "La pérdida de entrenamiento baja en las 4 épocas. ¿Qué hace la de validación?"
  - Correcta: **baja y después sube** (0.7954, 0.6158, 0.9078, 1.0465): la bola cruzó `w = 2`, el fondo de la parábola de validación, persiguiendo el 2.5
    del corrector generoso.
  - "Baja siempre, igual que la de entrenamiento": "las dos parábolas no tienen el mínimo en el mismo lugar".
  - "Sube siempre": "en la época 2 todavía mejora".
  - "Se queda igual": "la validación no entrena, pero sí cambia: se mide con el `w` nuevo de cada época".
- Texto: la imagen de las dos parábolas explica la forma en U de la curva de validación. En redes grandes no hay dos parábolas en una dimensión, pero la
  lectura es la misma.
- Citas: raschka11 PDF 23 (impresa 357): Figure 11.7, la pérdida de entrenamiento por época baja fuerte en las primeras 10; raschka11 PDF 24 (impresa 358):
  Figure 11.8, exactitud de entrenamiento y validación que se separan desde la época 25 (sobreajuste leve); islr2 PDF 448 (impresa 437): Figure 10.18, error de
  entrenamiento y validación por época en MNIST (cita nueva); raschka6 PDF 11 (impresa 181): Figure 6.4, cómo se lee una brecha grande entre entrenamiento
  y validación (ojo: ahí el eje x es el tamaño de la muestra, no la época; la lectura de la brecha es la misma).
- Texto (sin chip): en SM142004 UD5, el cuaderno CNN03 termina con exactitud 0.98 en entrenamiento y 0.518 en validación, y el propio cuaderno lo llama
  sobreajuste; parte viene del desbalance (1000 gatos y 168 perros en entrenamiento).

**Destacado con predicción (la confusión natural): "¿Por qué en la época 1 la validación sale mucho MÁS BAJA que el entrenamiento?"**
- Situación: Keras imprime en la época 1 `loss: 11.6477 - val_loss: 0.7954` (números calculados imitando la regla de Keras; no se pudo correr Keras aquí).
  Parece que el modelo va mejor en datos que nunca vio.
- Predicción: "¿Por qué el `loss` de entrenamiento de la época 1 es tan alto?" Opciones: "porque Keras promedia las pérdidas de los lotes **mientras** `w`
  todavía se movía" (correcta) / "porque la validación es más fácil" / "porque el modelo sobreajusta desde la época 1" / "es un error de Keras".
- Explicación: el `loss` que muestra Keras es el promedio de las pérdidas de cada lote medidas **antes** de su paso: 15.75 (con `w = 0`), 8.9141
  (`w = 0.625`) y 8.9102 (`w = 1.0938`), ponderadas por el tamaño (4, 4 y 2): 11.6477. La validación se mide una sola vez, al final, con `w = 1.6562`.
  Con ese mismo `w`, la pérdida de entrenamiento es 2.2934. Para comparar de igual a igual, las dos curvas tienen que medirse con el mismo `w`
  (el interruptor del panel de curvas lo muestra). En las primeras épocas la curva de Keras va "media época atrasada".
- Segunda razón, en redes con dropout: durante el entrenamiento Keras apaga neuronas al azar y la pérdida de entrenamiento sale peor; en la validación no
  apaga ninguna. Enlace por título a "Dropout y batch normalization". Cita cnn5diapo p.38: el `Dropout(0.2)` de la UD5, con el comentario de que evita
  "memorizing or overfitting".
- `details.profundizar` "¿Cómo sé qué número estoy mirando?": `history.history["loss"]` es el promedio durante la época; `model.evaluate(x, y)` mide con los
  pesos finales. Si quieres la curva de entrenamiento "justa", llama a `evaluate` al final de cada época (o pasa los datos de entrenamiento también como
  validación), a costa de más tiempo.

### Paso 6. Parar a tiempo: la paciencia (trampa)
- Idea: si la validación deja de mejorar, seguir entrenando solo acerca el modelo a las rarezas del entrenamiento. **Parada temprana**: guardar el mejor
  `w` visto en validación; contar cuántas épocas seguidas pasan sin mejorarlo; si el contador llega a la **paciencia**, parar y volver al mejor `w`.
  En Keras: `keras.callbacks.EarlyStopping(monitor="val_loss", patience=2, restore_best_weights=True)`.
- Escenario: modo `parada`. Estrella en la mejor época, contador "sin mejora: k de 2", y al parar, la bola vuelve a la posición de la estrella con una flecha
  ("restaurar"). Muestra de nuevo la hipótesis (`#citaHipo`).
- Chequeo (cálculo con las curvas del paso 5; paciencia 2): "¿Al final de qué época se detiene el entrenamiento y con qué `w` se queda?"
  Correcta: **se detiene al final de la época 4 y se queda con `w = 2.2152`** (el de la época 2). Opciones con pista:
  - "época 2, w = 2.2152": "en la época 2 todavía no sabe que es la mejor: necesita ver 2 épocas sin mejora";
  - "época 4, w = 2.4676": "eso es sin restaurar los mejores pesos";
  - "época 3, w = 2.2152": "con paciencia 2 hacen falta dos épocas sin mejora: la 3 y la 4";
  - "época 10, w = 2.5": "eso es sin parada temprana".
- **Trampa marcada**: en Keras `restore_best_weights` vale `False` por defecto. Con el `EarlyStopping` "de fábrica" (y `patience=2`) el entrenamiento
  para en la época 4 pero el modelo queda con el `w` de la época 4, 2.4676 (validación 1.0465), no con el mejor, 2.2152 (0.6158). Y `patience` vale 0
  por defecto: para en la primera época que no mejora.
- Citas: islr2 PDF 449 (impresa 438): "the value of the validation objective actually starts to increase by 30 epochs, so early stopping can also be used
  as an additional form of regularization" (cita nueva); raschka11 PDF 22 (impresa 356): al terminar compara entrenamiento y validación y sugiere parar antes.
- `details.profundizar` "¿Por qué parar temprano regulariza?": la bola empieza en `w = 0`; parar antes la deja más cerca del inicio, como si una penalización
  la empujara hacia 0 (la idea de ridge). Aquí, parar en la época 2 deja `w = 2.2152` entre 0 y 2.5. ISLR2 lo dice en la misma página: el descenso por
  gradiente "naturalmente impone su propia forma de regularización aproximadamente cuadrática" (p. 437, PDF 448).

### Paso 7. El `fit` de Keras, argumento por argumento (el más técnico)
- Idea: todo lo anterior es una sola llamada. Cada argumento de `fit` es una pieza del escenario:
  ```
  hist = modelo.fit(x, y, epochs=10, batch_size=4, shuffle=False,
                    validation_data=(xv, yv), callbacks=[parada])
  ```
  `epochs` (vueltas máximas), `batch_size` (marcos de las tarjetas; 32 si no se pone), `shuffle` (barajar cada época; `True` por defecto),
  `validation_data` (el mazo gris) o `validation_split=0.2` (aparta **las últimas** filas antes de barajar; ver el reto `codigo2`), `callbacks`
  (la estrella y la paciencia). Devuelve un `History`: `hist.history["loss"]` y `hist.history["val_loss"]` son las dos curvas.
  En R (keras/keras3, ISLR2): `history <- modelo %>% fit(x, y, epochs = 10, batch_size = 4, validation_data = list(xv, yv))` y `plot(history)`.
  **Ni TensorFlow ni el paquete keras de R están instalados en esta máquina: este código no se corrió.** La página lo dice al lado del bloque.
- Escenario: modo `fit`. El bloque de código con cada argumento como botón que ilumina su panel.
- Chequeo (elección con explicación): "Corres `modelo.fit(x, y, epochs=2, ...)` y después, en la misma sesión, otra vez `modelo.fit(x, y, epochs=2, ...)`.
  ¿Desde dónde empieza la segunda llamada?"
  - Correcta: **desde los pesos que dejó la primera**: es como entrenar 4 épocas (w 2.2152 tras la primera, 2.4676 tras la segunda, igual que 4 seguidas;
    verificado con el bucle en R, reto `codigo3`). ISLR2 lo avisa: "if you run the fit() command a second time ... the fitting process will pick up where
    it left off".
  - "Desde cero: `fit` reinicia los pesos": "no; para empezar de cero hay que volver a crear el modelo (o recargar los pesos iniciales)".
  - "Da error porque el modelo ya está entrenado": "Keras no se queja".
  - "Hace 2 épocas más, pero desde w = 0": "mismo error que la primera opción".
- Mismo fenómeno en el material (sin chip): en el cuaderno DL03 de SM142004 UD4, una celda "equivalente" se ejecutó además de la primera sobre el mismo
  `model`, y el modelo quedó con las capas duplicadas (ocho `Dense` en el `summary`): los objetos de Keras recuerdan lo que ya les hiciste.
- **Errata del material, para decir con naturalidad**: cnn5diapo p.39 escribe `nb_epoch=4`, que es el nombre de Keras 1; hoy es `epochs`. La misma
  diapositiva usa comillas tipográficas (`'rmsprop’`) que dan error de sintaxis si se copian.
- Citas: cnn5diapo p.39 (`compile` con `rmsprop` y `categorical_crossentropy`, `fit` con `batch_size=128`, `nb_epoch=4`, `evaluate` con `batch_size=32`);
  islr2 PDF 456 (impresa 445): `validation_data` "not used in the fitting, but can be used to track the progress" y el aviso de que un segundo `fit`
  continúa; islr2 PDF 459 (impresa 448): `validation_split = 0.2` sobre 60 000 → 48 000 de entrenamiento, lotes de 128, 375 pasos por época, `plot(history)`.
- Matiz de ISLR2 para decir con naturalidad: en 10.9.1 (p. 445) pasan **los datos de prueba** como `validation_data` "para ver el error de prueba a medida
  que avanzan las épocas". Para mirar está bien; si con esa curva decidieras cuándo parar, la prueba dejaría de ser una prueba (ya la usaste para elegir).
  Lo correcto es separar validación y prueba, como hacen ellos en 10.9.2 con `validation_split`.

## Vida real (Python y R)

Python 3.13.5 con NumPy 2.1.3; R 4.6.1 (R base). Mismos datos y mismos hiperparámetros que el recorrido. El algoritmo es lo que `fit` hace por dentro con
`EarlyStopping(patience=2, restore_best_weights=True)`, escrito con bucles: por época, por lote; al final de la época, las dos pérdidas, la mejor
validación y el contador de paciencia; al final, restaurar el mejor `w`. Cierra imprimiendo los pasos por época con `ceil`, el número que Keras pone en su
barra de progreso (`3/3`). La comparación "con la librería" (Keras) no se pudo correr: va en `p.vr-nota`, marcada como no ejecutada.

El texto sin el prefijo `id: ` es exactamente lo que se ejecutó (archivos `entrenar.py` y `entrenar.R`; comprobado con `diff`). Las líneas con id `-` no
tienen evento. Copiar respetando los espacios de alineación de los comentarios.

### Python

```
import: import numpy as np
datx: x = np.array([1, 2, 1, 2, 1, 2, 1, 2, 2, 2])    # horas (inventado)
daty: y = np.array([3, 5, 2, 5, 2, 5, 3, 5, 4, 6])    # nota (inventado)
valx: xv = np.array([1, 2, 1, 2])                     # validación
valy: yv = np.array([3, 4, 1, 4])
hiper: w, tasa, lote, paciencia = 0.0, 0.05, 4, 2
estado: mejor, mejor_w, sin_mejora = np.inf, w, 0
fore: for epoca in range(1, 11):
forl:     for ini in range(0, len(x), lote):
fin:         fin = min(ini + lote, len(x))
xb:         xb = x[ini:fin]
yb:         yb = y[ini:fin]
grad:         grad = np.mean(2 * xb * (w * xb - yb))
paso:         w = w - tasa * grad
perd:     perd = np.mean((w * x - y) ** 2)
perdv:     perd_val = np.mean((w * xv - yv) ** 2)
imp:     print(epoca, round(w, 4), round(perd, 4), round(perd_val, 4))
si:     if perd_val < mejor:
mejora:         mejor, mejor_w, sin_mejora = perd_val, w, 0
-:     else:
cuenta:         sin_mejora = sin_mejora + 1
para:     if sin_mejora == paciencia:
-:         break
restaura: w = mejor_w
final: print("pasos por época:", int(np.ceil(len(x) / lote)), "w final:", round(w, 4))
```

Salida real:
```
1 1.6562 2.2934 0.7954
2 2.2152 0.5271 0.6158
3 2.4039 0.3259 0.9078
4 2.4676 0.3029 1.0465
pasos por época: 3 w final: 2.2152
```

### R

```
datx: x <- c(1, 2, 1, 2, 1, 2, 1, 2, 2, 2)    # horas (inventado)
daty: y <- c(3, 5, 2, 5, 2, 5, 3, 5, 4, 6)    # nota (inventado)
valx: xv <- c(1, 2, 1, 2)                     # validación
valy: yv <- c(3, 4, 1, 4)
hiper: w <- 0; tasa <- 0.05; lote <- 4; paciencia <- 2
estado: mejor <- Inf; mejor_w <- w; sin_mejora <- 0
fore: for (epoca in 1:10) {
forl:   for (ini in seq(1, length(x), by = lote)) {
fin:     fin <- min(ini + lote - 1, length(x))
xb:     xb <- x[ini:fin]
yb:     yb <- y[ini:fin]
grad:     grad <- mean(2 * xb * (w * xb - yb))
paso:     w <- w - tasa * grad
-:   }
perd:   perd <- mean((w * x - y)^2)
perdv:   perd_val <- mean((w * xv - yv)^2)
imp:   cat(epoca, round(w, 4), round(perd, 4), round(perd_val, 4), "\n")
si:   if (perd_val < mejor) {
mejora:     mejor <- perd_val; mejor_w <- w; sin_mejora <- 0
-:   } else {
cuenta:     sin_mejora <- sin_mejora + 1
-:   }
para:   if (sin_mejora == paciencia) break
-: }
restaura: w <- mejor_w
final: cat("pasos por época:", ceiling(length(x) / lote), "w final:", round(w, 4), "\n")
```

Salida real (cada línea de `cat` termina con un espacio antes del salto, invisible; en la página se puede mostrar sin él):
```
1 1.6562 2.2934 0.7954
2 2.2152 0.5271 0.6158
3 2.4039 0.3259 0.9078
4 2.4676 0.3029 1.0465
pasos por época: 3 w final: 2.2152
```

Los dos lenguajes dan los mismos números.

### Eventos (una sola lista `EV`, la misma para los dos lenguajes)

- Inicio: `import` (solo Python; en R se narra "Esta línea solo existe en Python: R trae los vectores y `mean` sin cargar nada"), `datx`, `daty`,
  `valx`, `valy`, `hiper`, `estado` = 7.
- Cada época: `fore`, luego 3 vueltas de `forl` + `fin` + `xb` + `yb` + `grad` + `paso` (18), luego `perd`, `perdv`, `imp`, `si`, y `mejora` (épocas 1 y 2)
  o `cuenta` (épocas 3 y 4), y `para`. Épocas 1 y 2: 1 + 18 + 4 + 1 + 1 = 25 cada una; épocas 3 y 4: 25 cada una (`cuenta` reemplaza a `mejora`).
  En la época 4, `para` dispara el `break`.
- Fin: `restaura`, `final` = 2.
- Total: 7 + 4 · 25 + 2 = **109 eventos**. La velocidad por defecto conviene más rápida que en covarianza; "ir al final" es importante.

### Foto de estado por línea ejecutada

| Evento | época | ini / fin (py) | ini / fin (R) | lote | grad | w | perd | perd_val | mejor | sin_mejora | Visual |
|---|---|---|---|---|---|---|---|---|---|---|---|
| datx…valy | | | | | | | | | | | mazo de 10 tarjetas y mazo gris de 4 |
| hiper, estado | | | | | | 0 | | | inf / `Inf` | 0 | bola en `w = 0`; contador de paciencia vacío |
| fore | 1 | | | | | 0 | | | | | eje de épocas: se abre la 1 |
| forl/fin/xb/yb | 1 | 0 / 4 | 1 / 4 | (1,3),(2,5),(1,2),(2,5) | | 0 | | | | | marco del lote 1 iluminado |
| grad, paso | 1 | | | | −12.5 | 0.625 | | | | | flecha 0 → 0.625 en la parábola |
| … lote 2 | 1 | 4 / 8 | 5 / 8 | (1,2),(2,5),(1,3),(2,5) | −9.375 | 1.0938 | | | | | |
| … lote 3 | 1 | 8 / 10 | 9 / 10 | (2,4),(2,6) | −11.25 | 1.6562 | | | | | marco más chico, "lote incompleto" |
| perd, perdv, imp | 1 | | | | | 1.6562 | 2.2934 | 0.7954 | | | puntos de la época 1 en las dos curvas |
| si, mejora | 1 | | | | | | | | 0.7954 | 0 | estrella en la época 1 |
| para | 1 | | | | | | | | | 0 | "0 de 2": sigue |
| época 2 (lotes) | 2 | igual | igual | | −4.2188, −3.1641, −3.7969 | 1.8672, 2.0254, 2.2152 | | | | | la bola cruza `w = 2` en el segundo paso |
| perd…mejora | 2 | | | | | 2.2152 | 0.5271 | 0.6158 | 0.6158 | 0 | la estrella pasa a la época 2 |
| época 3 (lotes) | 3 | | | | −1.4238, −1.0679, −1.2814 | 2.2864, 2.3398, 2.4039 | | | | | |
| perd…cuenta | 3 | | | | | 2.4039 | 0.3259 | 0.9078 | 0.6158 | 1 | la curva de validación sube; "1 de 2" |
| época 4 (lotes) | 4 | | | | −0.4805, −0.3604, −0.4325 | 2.4279, 2.4459, 2.4676 | | | | | |
| perd…cuenta, para | 4 | | | | | 2.4676 | 0.3029 | 1.0465 | 0.6158 | 2 | "2 de 2": `break` |
| restaura | | | | | | 2.2152 | | | | | la bola vuelve a la estrella |
| final | | | | | | 2.2152 | | | | | rótulo "pasos por época: 3" junto a los marcos |

Índices con `ctx.ix`: en Python `ini` vale 0, 4, 8 y `fin` 4, 8, 10 (el corte `x[ini:fin]` no incluye `fin`); en R `ini` vale 1, 5, 9 y `fin` 4, 8, 10
(el rango `ini:fin` sí lo incluye). Narración de `fin`: "el último lote se corta en la fila 10: por eso tiene 2 filas y no 4". Narración de `perd`:
"esta pérdida usa el `w` del final de la época; Keras imprime otra (ver destacado del paso 5)". Narración de `para`: "con paciencia 2, dos épocas
seguidas sin mejorar bastan para parar".

### Predicción antes de reproducir (`#vrPred`)

"¿Cuántas veces se ejecuta la línea `w = w - tasa * grad`?" Respuesta **12** (4 épocas × 3 lotes; el entrenamiento para en la época 4).
Distractores: 10 (las épocas máximas del `for`), 8 (4 épocas × 2 lotes: olvidar el lote incompleto), 40 (10 épocas × 4), 30 (10 épocas × 3, sin la parada).
Pista: "cuenta en qué época se detiene y cuántos lotes hay por época".

### Trampas reales (retos `codigo1` a `codigo3`)

Como Keras no está instalado, cada trampa se muestra con la línea de Keras (no ejecutada, marcada así) y una imitación pequeña en NumPy o R base que sí se
corrió y reproduce la regla de Keras.

**codigo1: `restore_best_weights=False` por defecto (Keras).**
Línea de Keras (no ejecutada): `parada = keras.callbacks.EarlyStopping(monitor="val_loss", patience=2)`.
Imitación ejecutada (Python):
```
import numpy as np
val = [0.7954, 0.6158, 0.9078, 1.0465]       # val_loss de cada época
pesos = [1.6562, 2.2152, 2.4039, 2.4676]     # w al final de cada época
mejor = int(np.argmin(val))
print("época con menor val_loss:", mejor + 1)
print("restore_best_weights=False:", pesos[-1])
print("restore_best_weights=True: ", pesos[mejor])
```
Salida real:
```
época con menor val_loss: 2
restore_best_weights=False: 2.4676
restore_best_weights=True:  2.2152
```
Pregunta: "Usaste `EarlyStopping(patience=2)` y el entrenamiento paró en la época 4. ¿Con qué `w` quedó el modelo?" Correcta: 2.4676, el de la última
época: sin `restore_best_weights=True`, Keras para pero no vuelve atrás. Distractores con pista: "2.2152" ("eso pasa solo si lo pides"); "2.5" ("eso es sin
parar"); "0, porque reinicia" ("parar no borra nada").

**codigo2: `validation_split` aparta las ÚLTIMAS filas, antes de barajar (Keras).**
Línea de Keras (no ejecutada): `modelo.fit(x, y, epochs=10, validation_split=0.2)`.
Imitación ejecutada (Python), con las 10 filas **ordenadas por horas**:
```
import numpy as np
x = np.array([1, 1, 1, 1, 2, 2, 2, 2, 2, 2])   # filas ordenadas por horas
corte = int(len(x) * (1 - 0.2))              # validation_split=0.2
print(corte)
print(x[:corte], x[corte:])
```
Salida real:
```
8
[1 1 1 1 2 2 2 2] [2 2]
```
Par en R (ejecutado):
```
x <- c(1, 1, 1, 1, 2, 2, 2, 2, 2, 2)   # filas ordenadas por horas
corte <- floor(length(x) * (1 - 0.2))  # validation_split = 0.2
print(corte)
print(x[(corte + 1):length(x)])
```
Salida real: `[1] 8` y `[1] 2 2`.
Pregunta: "¿Qué estudiantes quedan en la validación?" Correcta: los dos últimos, ambos de 2 horas: ningún estudiante de 1 hora se usa para validar. Keras
toma la validación del final de los datos tal como los pasas y recién después baraja lo que queda. Si los datos vienen ordenados (por fecha, por clase, por
horas), la validación no se parece al resto. Arreglo: barajar antes de `fit` o pasar `validation_data` explícito. Distractores: "dos al azar" ("el barajado
llega después del corte"); "los dos primeros" ("es el final, no el principio"); "el 20 % de cada grupo" ("no estratifica").
(La regla "las últimas filas, antes de barajar" está en la documentación de `fit`; no se pudo comprobar con Keras aquí.)

**codigo3: un segundo `fit` continúa desde donde quedó (Keras; ISLR2 p. 445).**
Imitación ejecutada (R):
```
x <- c(1, 2, 1, 2, 1, 2, 1, 2, 2, 2)
y <- c(3, 5, 2, 5, 2, 5, 3, 5, 4, 6)
entrenar <- function(w, epocas, tasa = 0.05, lote = 4) {
  for (epoca in 1:epocas) {
    for (ini in seq(1, length(x), by = lote)) {
      fin <- min(ini + lote - 1, length(x))
      w <- w - tasa * mean(2 * x[ini:fin] * (w * x[ini:fin] - y[ini:fin]))
    }
  }
  w
}
w <- entrenar(0, 2)
print(round(w, 4))
w <- entrenar(w, 2)       # como llamar fit() otra vez
print(round(w, 4))
print(round(entrenar(0, 4), 4))
```
Salida real:
```
[1] 2.2152
[1] 2.4676
[1] 2.4676
```
Pregunta: "¿Por qué la segunda llamada da lo mismo que entrenar 4 épocas seguidas?" Correcta: el modelo guarda sus pesos; la segunda llamada empieza en
2.2152, no en 0. En Keras, para empezar de cero hay que crear el modelo otra vez. Cita islr2 PDF 456 (impresa 445). Distractores: "por casualidad"; "porque
`fit` duplica las épocas"; "porque R guarda el historial".

`p.vr-nota` (marcada "no se pudo correr en esta máquina: TensorFlow no está instalado"):
```
parada = keras.callbacks.EarlyStopping(monitor="val_loss", patience=2, restore_best_weights=True)
hist = modelo.fit(x, y, epochs=10, batch_size=4, shuffle=False, validation_data=(xv, yv), callbacks=[parada])
```
con `modelo` = una `Dense(1, use_bias=False, kernel_initializer="zeros")`, `SGD(learning_rate=0.05)` y `loss="mse"`. Según la regla de Keras, debería dar
`val_loss` ≈ 0.7954, 0.6158, 0.9078, 1.0465 y quedarse con w ≈ 2.2152 (en `float32` pueden cambiar los últimos decimales); `loss` ≈ 11.6477, 1.5926,
0.4472, 0.3168 (la media durante la época). Decirlo como "esperado", no como verificado.

`details.profundizar` "La forma vectorizada": no hay una versión de una línea del bucle de épocas (cada paso depende del anterior). Lo que sí se vectoriza es
el lote: `np.mean(2 * xb * (w * xb - yb))` ya calcula el gradiente de las 4 filas a la vez, que es lo que hace la GPU con lotes grandes. Por eso un lote
grande es más rápido **por época** aunque dé menos pasos.

## Retos (12)

RETOS = ["ojo", "construir", "mano", "paciencia", "error", "prop1", "prop2", "prop3", "codigo1", "codigo2", "codigo3", "formula"]

1. **ojo** (ojo clínico, 8 rondas al azar, aprueba con 7 de 8): se dibujan dos curvas por época (entrenamiento en `--j`, validación en `--k`), generadas
   al azar en JavaScript según uno de cuatro patrones, con ruido pequeño; Francisco elige sin calcular:
   - **"sigue aprendiendo: entrena más"** (las dos bajan hasta el final);
   - **"sobreajuste: para antes"** (la de entrenamiento baja, la de validación baja y sube; el mínimo de validación entre la época 3 y la 7);
   - **"tasa demasiado alta"** (las dos oscilan o suben desde el principio);
   - **"no aprende: el modelo es muy simple o la tasa es muy baja"** (las dos casi planas y altas, cerca la una de la otra).
   La explicación de cada ronda nombra la regla ("lo que importa es la de validación; la brecha entre las dos crece"). Incluir en el banco la curva real de
   la página con lote 4 (sobreajuste, mejor época 2) y la de lote 10 (sigue aprendiendo hasta la época 5).
2. **construir** (manipular el escenario hasta cumplir; todos se pueden lograr, ver la tabla de referencia):
   (a) exactamente **5 pasos por época** (lote 2);
   (b) que la parada temprana **detenga el entrenamiento antes de la época 10 y restaure una validación menor que 0.51** (por ejemplo lote 10 con tasa 0.05:
   para en 7, restaura 0.5007; o lote 2 con tasa 0.05: para en 3, restaura 0.5018; o tasa 0.025 con lote 1: 0.5004);
   (c) un entrenamiento en el que la mejor época sea **la 1** y aun así se detenga (por ejemplo tasa 0.1 con cualquier lote menor que 10).
   Ok al cumplir las tres. Si Francisco apaga "restaurar los mejores pesos", (b) no se cumple aunque pare a tiempo y el escenario dice por qué.
3. **mano** (a mano, datos al azar, pistas escalonadas, reintentable): $n$ al azar entre 50 y 1000 (que no sea múltiplo del lote), lote de {16, 32, 64, 128},
   épocas de {5, 10, 20}. Pide: (1) pasos por época $\lceil n/b \rceil$; (2) tamaño del último lote $n - b(\lceil n/b \rceil - 1)$; (3) actualizaciones
   totales. Ejemplos verificados: $n = 176, b = 32$ → 6, 16, con 1500 épocas 9000; $n = 404, b = 50$ → 9, 4; $n = 398, b = 50$ → 8, 48; $n = 48\,000, b = 128$
   → 375, 128 (exacto). Pistas: 1) "divide y redondea hacia arriba"; 2) "lo que sobra después de los lotes llenos"; 3) primera parte resuelta con números.
4. **paciencia** (a mano, datos al azar, reintentable): una lista de 8 pérdidas de validación al azar (con un mínimo claro y empates evitados) y una paciencia
   de {1, 2, 3}. Pide: (1) la época en que se detiene (o "no se detiene"); (2) la época cuyos pesos se restauran. Regla exacta que debe usar el JavaScript
   (la del código de Vida real, igual a Keras con `min_delta = 0`): mejora si `val < mejor` estricto; si no, `sin_mejora + 1`; para cuando `sin_mejora ==
   paciencia`. Ejemplo fijo para la primera vez: 0.90, 0.71, 0.64, 0.66, 0.62, 0.65, 0.69, 0.70 con paciencia 2 → mejoras en 1, 2, 3, 5; sin mejora en 4 (1),
   en 5 se reinicia, 6 (1), 7 (2) → **para en la 7 y restaura la 5**. Con paciencia 1 → para en la 4 y restaura la 3. Pista para el error típico (decir 5 y 5):
   "la época 5 es la mejor, pero eso solo se sabe después de ver dos épocas peores".
5. **error** (cazar el error, 3 variantes del código de Vida real, una línea mal; salidas reales):
   - V1 (Python): `for ini in range(0, len(x) - lote, lote):` en lugar de `range(0, len(x), lote)`. Salida real:
     ```
     1 1.0938 5.8371 2.5532
     2 1.709 2.052 0.7117
     3 2.0551 0.8543 0.5076
     4 2.2497 0.4754 0.6559
     5 2.3592 0.3555 0.8226
     pasos por época: 3 w final: 2.0551
     ```
     `range(0, 6, 4)` da solo 0 y 4: el último lote (filas 9 y 10) **nunca se usa**, y la última línea sigue diciendo "3 pasos" aunque se dieron 2.
   - V2 (R): `fin <- ini + lote - 1` sin el `min`. Salida real:
     ```
     1 NA NA NA
     Error in if (perd_val < mejor) { : missing value where TRUE/FALSE needed
     Execution halted
     ```
     En el tercer lote `ini:fin` es `9:12` y `x[11]`, `x[12]` no existen: dan `NA`, y el `NA` contagia el gradiente, el `w` y la pérdida (ver "NA y NaN").
   - V3 (Python): `if perd < mejor:` y `mejor, mejor_w, sin_mejora = perd, w, 0` (vigila la pérdida de **entrenamiento**). Salida real: diez líneas, de
     `1 1.6562 2.2934 0.7954` a `10 2.5 0.3 1.1249`, y `pasos por época: 3 w final: 2.5`. Nunca para: la de entrenamiento siempre mejora; la parada
     temprana tiene que mirar la validación (`monitor="val_loss"`).
6. **prop1** (opción múltiple, `mezclar: true`, reintentable): "¿Qué es una época?" Correcta: "una pasada completa por todas las filas de entrenamiento,
   en $\lceil n/b \rceil$ pasos". Pistas: "un paso de gradiente" → "eso es un paso; una época tiene varios"; "un lote" → "el lote es el puñado de filas de
   cada paso"; "una pasada por entrenamiento y validación" → "la validación no se recorre para aprender, solo se mide"; "lo que tarda la pérdida en bajar a
   la mitad" → "es una unidad de conteo, no de calidad".
7. **prop2**: "En la época 1 Keras imprime `loss: 11.65 - val_loss: 0.80`. ¿Qué concluyes?" Correcta: "nada raro: el `loss` es el promedio durante la época,
   con pesos que todavía cambiaban; la validación se mide al final". Pistas: "el modelo generaliza mejor de lo que aprende" → "con el mismo `w` final, la de
   entrenamiento es 2.29"; "hay fuga de datos" → "la validación nunca entró a un lote"; "sobreajuste" → "el sobreajuste es al revés: validación peor que
   entrenamiento, y creciendo".
8. **prop3**: "¿Qué hace `EarlyStopping(monitor="val_loss", patience=3)` si la mejor `val_loss` fue en la época 6?" Correcta: "entrena las épocas 7, 8 y 9;
   si ninguna mejora, para al final de la 9". Pistas: "para en la 6" → "en la 6 todavía no sabe que es la mejor"; "para en la 9 y deja los pesos de la 6" →
   "solo con `restore_best_weights=True`"; "para cuando la pérdida de entrenamiento sube" → "mira la que le dices en `monitor`".
9. **codigo1**, 10. **codigo2**, 11. **codigo3**: ver Vida real.
12. **formula**: la parte de memoria (`B.ordenar`), registrada con `C.reto("formula", ok)`.

## Memoria

**B.ordenar** (la llamada a `fit` con parada temprana), piezas en orden:
1. `modelo.fit(`
2. `x, y,`
3. `epochs=10,`
4. `batch_size=4,`
5. `validation_data=(xv, yv),`
6. `callbacks=[parada]`
7. `)`

Resultado: `modelo.fit(x, y, epochs=10, batch_size=4, validation_data=(xv, yv), callbacks=[parada])`, con `parada = EarlyStopping(monitor="val_loss",
patience=2, restore_best_weights=True)` mostrado arriba como contexto. Distractores: `nb_epoch=10` (Keras 1, la diapositiva de la UD5), `steps=3` (los pasos
los calcula Keras), `validation_data=(x, y)` (validar con los mismos datos de entrenamiento no detecta nada), `batch=4` (el argumento se llama `batch_size`).

**Tarjetas (8):**
1. ¿Qué es un lote? → El puñado de filas con el que se calcula **un** paso de gradiente (`batch_size`; 32 si no lo pones).
2. ¿Qué es una época? → Una pasada completa por las $n$ filas de entrenamiento: $\lceil n/b \rceil$ pasos.
3. 176 filas, lotes de 32: ¿cuántos pasos por época? → 6 (cinco de 32 y uno de 16). ISLR2 escribe 5.5 porque cuenta "equivalentes de datos".
4. ¿Por qué el `loss` de la época 1 sale mayor que el `val_loss`? → Keras promedia los lotes mientras los pesos cambian; la validación se mide al final.
   Con dropout, además, el entrenamiento se mide con neuronas apagadas.
5. Entrenamiento baja y validación sube: ¿qué pasa? → Sobreajuste: el modelo aprende rarezas del entrenamiento. Para en la mejor época de validación.
6. ¿Qué hace la paciencia? → Cuántas épocas seguidas sin mejorar la validación se toleran antes de parar.
7. `EarlyStopping(patience=2)` paró: ¿con qué pesos quedó? → Con los de la última época, salvo que pongas `restore_best_weights=True`.
8. Llamo a `fit` dos veces: ¿empieza de cero? → No: continúa desde los pesos que dejó la primera. Para empezar de cero, crea el modelo otra vez.

## Citas (14)

| id de fuente | página PDF | página impresa | sección | qué hay | cuándo leerla |
|---|---|---|---|---|---|
| raschka11 | 18 | 352 | Coding the neural network training loop | `num_epochs = 50`, `minibatch_size = 100`; `minibatch_generator` baraja y corta en trozos de 100, descartando el último incompleto | Paso 1 |
| islr2 | 456 | 445 | 10.9.1 A Single Layer Network on the Hitters Data | `fit` con `epochs = 1500`, `batch_size = 32`, `validation_data`; "an epoch is 176/32 = 5.5 SGD steps"; un segundo `fit` continúa | Pasos 2 y 7, reto `codigo3` |
| islr2 | 449 | 438 | 10.7.2 Regularization and Stochastic Gradient Descent | definición de época, 48 000/128 ≈ 375 pasos por época, validación del 20 % para decidir cuándo parar, early stopping como regularización | Pasos 2 y 6 |
| raschka11 | 4 | 338 | Single-layer neural network recap | SGD con un ejemplo o un mini-lote; actualiza más seguido y su ruido ayuda | Paso 3 |
| raschka11 | 22 | 356 | Coding the neural network training loop | regla $w_j := w_j - \eta\,\partial L/\partial w_j$; corrida de 50 épocas; comparar entrenamiento y validación y parar antes | Pasos 3 y 6 |
| dl4 | 18 | 18 | Hiperparámetros | el learning rate en prosa; AdaGrad y ADAM; el material no define mini-lote ni época | Paso 3 |
| dl4 | 43 | 43 | Tema 12: limitaciones y buenas prácticas | tamaño del lote y tasa de aprendizaje como cosas que hay que ajustar | Paso 4 |
| lstm4 | 51 | 51 | Limitaciones y buenas prácticas | la misma lista en diapositivas, con "batch size" | Paso 4 |
| raschka11 | 23 | 357 | Evaluating the neural network performance | Figure 11.7: la pérdida de entrenamiento por época | Paso 5 |
| raschka11 | 24 | 358 | Evaluating the neural network performance | Figure 11.8: exactitud de entrenamiento y validación que se separan desde la época 25 | Paso 5 |
| islr2 | 448 | 437 | 10.7.2 Regularization and Stochastic Gradient Descent | Figure 10.18: error de entrenamiento y validación por época en MNIST; el SGD como regularización | Paso 5 y profundizar del paso 6 |
| raschka6 | 11 | 181 | Diagnosing bias and variance problems with learning curves | Figure 6.4: cómo se lee la brecha entre entrenamiento y validación (eje x = tamaño de muestra) | Paso 5, al terminar |
| cnn5diapo | 38 | 38 | Keras: perceptrón multicapa con dropout | `Dropout(0.2)` "contra memorizing or overfitting" | Destacado del paso 5 |
| cnn5diapo | 39 | 39 | Keras: compilar, entrenar, evaluar | `batch_size=128`, `nb_epoch=4` (nombre de Keras 1), `evaluate` con `batch_size=32` | Paso 7 |

Equivalencias: islr2 impresa = PDF − 11; raschka11 PDF = impresa − 334; raschka6 PDF = impresa − 170; dl4, lstm4 y cnn5diapo PDF = impresa.

**Qué está en los mapas y qué verifiqué ahora.**
- En los mapas (`brain/fuentes/`): raschka11 PDF 4, 18, 22, 23, 24 (`raschka-cap11.md`); raschka6 PDF 11 (`raschka-cap6.md`); dl4 p.18 y 43, lstm4 p.51
  (`sm142004-ud4.md`); cnn5diapo p.38 y 39 (`sm142004-ud5.md`); islr2 PDF 456 y 459 caen dentro de los rangos mapeados del lab 10.9.1 (PDF 454-457) y
  10.9.2 (PDF 457-460) en `islr2-r.md`; el contenido concreto (176/32 = 5.5, `validation_data` con la prueba, el aviso del segundo `fit`, `validation_split
  = 0.2`, 375) lo verifiqué leyendo esas páginas con `pdftotext`.
- **Citas nuevas, verificadas por mí con `pdftotext` pero que NO están en `islr2-r.md`** (el mapa no cubre la teoría del cap. 10): islr2 PDF 448 (impresa
  437, Figure 10.18) y PDF 449 (impresa 438, épocas, 375 y early stopping). **La sesión principal debe agregarlas al mapa** (sección del cap. 10, con
  "10.7.2 Regularization and Stochastic Gradient Descent") antes de construir. Si no se agregan, quitar esas dos citas: quedan 12, dentro del rango.
  También verifiqué PDF 445 (impresa 434, "Slow Learning ... stopped when overfitting is detected") y PDF 447 (impresa 436, "minibatch"); no se usan.
- La errata de `nb_epoch` y las comillas tipográficas de cnn5diapo p.38-39 está en `sm142004-ud5.md` (erratas). La errata del cuaderno DL03 (capas duplicadas)
  y los `9/9` y `8/8` están en `sm142004-ud4.md` (cuadernos y erratas). CNN03 (0.98 frente a 0.518, 1000 gatos y 168 perros) en `sm142004-ud5.md`.

**Sin chip** (no registrados en `fuentes.js`): cuadernos DL03 de SM142004 UD4 (`9/9`, `8/8`, capas duplicadas) y CNN03 de UD5 (sobreajuste). Se nombran en
el texto.

## Erratas e inconsistencias del material (para decir con naturalidad)

- **cnn5diapo p.39**: `nb_epoch=4` es el argumento de Keras 1 (hoy `epochs`); falta importar `Dropout` (p.33 solo importa `Dense, Activation, Flatten`);
  `keras.utils.np_utils` ya no existe; comillas tipográficas (`'rmsprop’`) que dan error de sintaxis al copiar (mapa `sm142004-ud5.md`).
- **islr2 p.445 (PDF 456)**: "an epoch is 176/32 = 5.5 SGD steps": como cuenta de datos está bien, pero Keras da 6 pasos, el último de 16 filas. Y usa los
  datos de prueba como `validation_data` (para mirar está bien; para decidir cuándo parar, no).
- **raschka11 p.352 (PDF 18)**: no es una errata, es una diferencia: su generador descarta el último lote incompleto; Keras no.
- **raschka11 p.354 (PDF 20)**: `compute_mse_and_acc` divide entre el índice del último lote (49) y no entre el número de lotes (50): explica el 0.27 contra
  0.28 del texto (mapa `raschka-cap11.md`). Solo mencionarlo si se habla de "promediar pérdidas por lotes" en el destacado del paso 5; es el mismo tema
  (cómo se promedian las pérdidas de los lotes).
- **dl4 p.18-19**: el material de la UD4 no define época ni mini-lote (solo learning rate en prosa) y dice que el dropout acelera el entrenamiento (al revés:
  lo hace más lento, porque cada paso entrena una subred).
- **Cuaderno DL03 (UD4)**: celdas ejecutadas dos veces sobre el mismo `model` (capas duplicadas): el mismo fenómeno que el segundo `fit` que continúa.
- **CNN03 (UD5)**: el comentario dice "2000 images = batch_size * steps", pero 50 pasos × 20 = 1000 (mapa `sm142004-ud5.md`): buen ejemplo para el reto
  `mano` (pasos × lote = filas vistas por época).
- **SM142002 UD3** (TensorFlow, scikit-learn, Git) no está publicada: la página lo dice y explica igual.

## Riesgos y notas para quien construye

- **No hay Keras en esta máquina.** Toda línea de Keras en la página va marcada "no se pudo correr aquí". Los números "de Keras" (11.6477, etc.) se presentan
  como "según la regla de Keras", nunca como salida copiada.
- **Dos pérdidas de entrenamiento distintas**: la del código (con el `w` del final de la época: 2.2934, 0.5271, 0.3259, 0.3029) y la que imprime Keras
  (promedio durante la época: 11.6477, 1.5926, 0.4472, 0.3168). El panel de curvas tiene el interruptor; por defecto, la del código (coincide con Vida real).
- **Paciencia, regla exacta**: mejora solo si es estrictamente menor; `sin_mejora` se reinicia a 0 al mejorar; para cuando `sin_mejora == paciencia`. Con
  paciencia 2: para al final de la época 4. El escenario, el reto `paciencia` y Vida real deben usar la misma regla.
- **Índices**: Python `ini` 0, 4, 8 con `fin` exclusivo; R `ini` 1, 5, 9 con `fin` inclusivo. En los dos, `fin` vale 4, 8, 10.
- **R `cat`** deja un espacio antes del salto de línea; Python no. Si la página muestra la salida, puede omitirlo; el código no cambia.
- `round(np.float64, 4)` en NumPy 2.1.3 imprime `2.2152` con `print` (no `np.float64(2.2152)`), porque `print` usa `str`. No cambiar a f-strings sin volver a correr.
- **Orden fijo a propósito**: el código no baraja (Keras sí por defecto) para que Python y R coincidan. La página lo dice en el paso 4 y en la nota de Vida real.
- **Datos**: las dos parábolas son exactas ($0.3 + 2.8(w-2.5)^2$ y $0.5 + 2.5(w-2)^2$); el JavaScript puede dibujarlas con la fórmula y calcular los
  puntos con el bucle: tienen que coincidir.
- Los errores de R salen en inglés en esta máquina (`missing value where TRUE/FALSE needed`): copiar tal cual.
- No meter la teoría del SGD (ruido, convergencia), ni el dropout por dentro, ni sesgo y varianza: enlazar por título "Descenso de gradiente estocástico",
  "Dropout y batch normalization", "Sobreajuste" y "Sesgo y varianza de un modelo".
