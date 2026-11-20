# Especificacion: Anatomía de una figura (anatomia-figura)

- Ruta: `matplotlib` (grupo Programación con datos), orden 1, tanda 9
- Archivo: `biblioteca/conceptos/anatomia-figura.html`
- Prerrequisitos: [] (ninguno)
- Siguientes: ["Elegir el gráfico según la pregunta"]
- Aparece: [{ materia: "SM142002", ud: "UD2" }]
- Resumen del catálogo: "Una figura contiene ejes, y cada eje contiene lo que dibujas; entender la jerarquía evita los gráficos rotos."
- Fuente declarada: Hoja de referencia de Matplotlib y cuadernos de SM142002
- Nota para quien construye: UD2 (Matplotlib) no está publicada en la carpeta de la materia. Lo único oficial es la hoja de referencia de
  Matplotlib (registrada como `hojamatplotlib`), dos líneas de la teoría de UD1 (`prog1` p.10-11) y los cuadernos de clase de UD1
  (`UAX_20251105`, celdas 85-109, sin chip). La página lo dice con naturalidad.

## Imagen central

**La figura desarmable.** El escenario es una réplica en SVG de la figura que matplotlib produce con los datos del recorrido (ver "Vida
real"): una Figure de 640 × 480 (viewBox `0 0 640 480`, se escala al ancho disponible) con un Axes, dos líneas, título, etiquetas,
leyenda y rejilla. Cada pieza es un elemento SVG propio con un `data-pieza`, y se dibuja en el orden real de la jerarquía:
Figure (rectángulo de fondo) > Axes (rectángulo del área de dibujo) > dentro del Axes: spines, ticks, etiquetas de tick, rejilla,
líneas, leyenda, título; las etiquetas de eje van fuera del área pero pertenecen al Axes.

Lo que se manipula:
- **Tocar una pieza**: se ilumina (contorno `--accent`), y debajo del SVG una ficha dice su nombre en inglés y en español
  ("Spine: borde del Axes"), a qué objeto pertenece ("pertenece a: Axes > Figure") y la línea de código que la crea o la cambia
  (`ax.spines["top"].set_visible(False)`). Como las piezas finas (ticks, spines) son difíciles de tocar a 375 px, además hay una
  **lista de botones** con los nombres de las piezas que ilumina la misma pieza: nada depende de arrastrar ni de puntería.
- **Casillas de capas** (Figure, Axes, spines, ticks, etiquetas de tick, rejilla, líneas, leyenda, título, etiquetas de eje): apagan
  y encienden cada capa.
- **Deslizador "ventas de la Tienda B en el mes 6"** (enteros de 0 a 12, valor inicial 7): mueve el último punto de la línea naranja y
  el eje y se reajusta solo, con los números de la tabla del paso 4.
- **Botones de distribución** (paso 5 en adelante): `1 × 1`, `1 × 2`, `2 × 1`, `2 × 2`. La Figure se divide en esa cantidad de Axes;
  cada Axes muestra su índice como lo escribe Python (`axs[0]`, `axs[1, 0]`). En R se muestra el orden de llenado de `par(mfrow)`.
- **Marcador "Axes actual"** (pasos 6 y 7): un pequeño rótulo `--accent` "actual" sobre el Axes que `plt.gca()` devolvería. Unos botones
  ejecutan instrucciones (`ax1.plot(...)`, `plt.title("Tienda A")`, `plt.figure()`) y el rótulo se mueve o no según corresponda.

Modos por paso: `piezas` (paso 1), `nombres` (paso 2), `codigo` (paso 3), `limites` (paso 4), `rejilla` (paso 5), `actual` (paso 6),
`pandas` (paso 7).

Geometría real (para que el SVG coincida con matplotlib 3.10.0, verificada en esta máquina):
- Figure: 6.4 × 4.8 pulgadas a 100 dpi = 640 × 480 px. Axes por defecto en `[0.125, 0.11, 0.775, 0.77]` de la Figure, es decir
  x de 80 a 576 px y, medido desde arriba, y de 57.6 a 427.2 px (matplotlib mide desde abajo: y0 = 52.8, alto 369.6).
- Conversión de datos a píxeles con los límites finales: `px = 80 + (x − 0.75) / 5.5 · 496`, `py = 427.2 − (y − 0.65) / 7.7 · 369.6`.
- Colores por defecto: Tienda A `#1f77b4` (C0), Tienda B `#ff7f0e` (C1).
- Leyenda con `loc="best"`: matplotlib la pone arriba a la izquierda (caja de unos 60 × 46 px con esquina inferior izquierda en
  (86.9, 369.4) medido desde abajo, es decir y de 64.5 a 110.6 desde arriba).
- Ticks: x en 1, 2, 3, 4, 5, 6; y en 1 a 8. Cuatro spines: `left`, `right`, `bottom`, `top`.

## Hipotesis inicial

"Ves un gráfico terminado: dos líneas, un título arriba, una caja con los nombres de las líneas y números en los bordes. Si tuvieras que
dictarle a alguien cómo armarlo desde cero, ¿en qué orden pondrías las piezas? ¿El título es del dibujo o de la hoja entera? ¿Y si en la
misma hoja hubiera dos dibujos? Escríbelo como te salga, aunque esté mal."
Se muestra de nuevo en el paso 6 (`#citaHipo`), justo después del destacado.

## Pasos (7)

### Paso 1. Una hoja, unos cuadros y lo que va dentro
- Idea: un gráfico son cajas dentro de cajas. La hoja (Figure) contiene uno o más cuadros de dibujo (Axes), y cada cuadro tiene sus
  propios bordes, números, líneas y leyenda. Sin código ni nombres técnicos todavía.
- Escenario: modo `piezas`. Una Figure con **dos** Axes lado a lado (los datos de la Tienda A a la izquierda y los de la B a la derecha),
  la de la derecha con su leyenda. Todo en gris neutro, sin rótulos. Tras responder, la hoja, los cuadros y las piezas se separan en
  tres franjas de color (hoja, cuadros, contenido) como un despiece.
- Chequeo (predicción sin símbolos, opción múltiple): "En esta imagen, ¿cuántos cuadros de dibujo hay, contando cada zona que tiene sus
  propios bordes y sus propios números en los lados?"
  Correcta: **2**. La caja de nombres (la leyenda) vive dentro de un cuadro, no es un cuadro aparte.
  Distractores: "3" (cuenta la leyenda como un cuadro: no tiene ejes ni números propios); "1" (piensa que la hoja entera es un solo
  dibujo: cada cuadro tiene sus propios números); "4" (cuenta cada línea: las líneas están dentro de un cuadro).
- Cita: prog1 p.10 (la teoría de UD1 presenta Matplotlib y Seaborn en dos párrafos; sigue en p.11).

### Paso 2. Cada pieza tiene nombre
- Idea: las piezas tienen nombres fijos y una jerarquía. `Figure` > `Axes` > (`Axis` x e y con sus `ticks` y `tick labels`, `spines`,
  `Line2D`, `Legend`, título, rejilla). Ojo con los nombres: `Axes` (el cuadro entero) no es `Axis` (uno de sus dos ejes).
- Escenario: modo `nombres`. La figura de un solo Axes (la de la vida real). Francisco toca piezas o usa la lista de botones; cada toque
  muestra la ficha (nombre, a quién pertenece, línea de código).
- Chequeo (elección con explicación): se iluminan tres piezas marcadas A, B y C: A = spine superior, B = una línea de la rejilla
  horizontal en y = 4, C = el tick mayor de x = 3 (la rayita corta bajo el eje). "Empareja cada letra con su nombre."
  Correcta: A spine, B rejilla (grid), C tick mayor.
  Errores típicos y su explicación: confundir spine con rejilla ("el spine es el borde del Axes y hay solo cuatro; la rejilla nace en
  cada tick y cruza el área"); confundir tick con etiqueta de tick ("el tick es la rayita; el número de al lado es su etiqueta").
- Profundizar: "¿Dónde se pone la leyenda?" `ax.legend()` usa `loc="best"` y busca el rincón que menos tapa; la hoja trae una tabla de
  posiciones (`upper left`, `center right`...) y `bbox_to_anchor` para sacarla del Axes.
- Citas: hojamatplotlib p.1 (Anatomy of a figure); hojamatplotlib p.2 (Legend placement y "How do I... hide top spine?").

### Paso 3. Dos nombres para dos cajas: `fig, ax = plt.subplots()`
- Idea: el código del inicio rápido crea las dos cajas de una vez y te da un nombre para cada una: `fig` es la hoja y `ax` es el cuadro.
  Desde ahí, todo lo que dibujas se lo pides al cuadro: `ax.plot(...)`, `ax.set_title(...)`. `ax` es un objeto y `plot` es uno de sus
  métodos (la misma notación de punto que `palabra.upper()`).
- Escenario: modo `codigo`. A la izquierda del SVG (debajo, a 375 px) el programa de la vida real con 9 líneas; tocar una línea ilumina la
  pieza que crea. Antes de responder el chequeo, el área del Axes se muestra tapada con un velo "?".
- Chequeo (predicción antes de tocar, opción múltiple): "Ejecutas solo `fig, ax = plt.subplots()`, sin ningún `ax.plot`. ¿Qué hay en la
  figura?"
  Correcta: "un cuadro vacío con bordes y ejes que van de 0 a 1, con números 0.0, 0.2, ..., 1.0" (verificado: `get_xlim()` = (0.0, 1.0),
  ticks 0.0, 0.2, 0.4, 0.6, 0.8, 1.0).
  Distractores: "nada, una hoja en blanco" (eso es `plt.figure()` sin Axes); "un error, porque no hay datos" (crear el Axes no necesita
  datos); "una línea en 0" (nadie pidió una línea).
- Profundizar: "¿Y en R?" En R base no hay objetos `fig` y `ax`: `png()` abre el dispositivo (la hoja) y es `plot()` el que crea la región
  de dibujo (el cuadro) y además dibuja la primera serie. `par(mfrow = c(1, 2))` divide la hoja en dos regiones. La UD6 usa gráficos de R
  base justamente porque son rápidos.
- Citas: hojamatplotlib p.1 (Quick start); thinpython PDF 200 (Rectangles: un objeto que contiene otro objeto, Figure 15-2, la misma idea
  que una Figure que contiene un Axes); eda6 p.13 (R base frente a ggplot2 para gráficos exploratorios rápidos).

### Paso 4. Los límites los deciden los datos (DESTACADO con predicción)
- Idea: si no fijas los límites, matplotlib mira todo lo que hay dibujado, toma el mínimo y el máximo, y agrega un margen del 5 % del
  rango a cada lado. Luego elige ticks "redondos" y solo dibuja los que caen dentro. Por eso el eje casi nunca empieza en cero.
- Escenario: modo `limites`. Deslizador "Tienda B, mes 6" (0 a 12, inicial 7). Al lado del SVG, la cuenta en vivo:
  `rango = máx − mín`, `margen = 0.05 · rango`, `límites = (mín − margen, máx + margen)`. Las barras de margen se pintan en `--accent`
  translúcido arriba y abajo del área de datos. Los valores del límite inferior se ocultan hasta resolver el chequeo.
- Tabla real del deslizador (matplotlib 3.10.0; los otros datos fijos: A = 2, 4, 5, 4, 6, 8; B = 1, 3, 3, 5, 7, v):

  | v | ylim | ticks dibujados |
  |---|---|---|
  | 0 | −0.4 a 8.4 | 0, 1, ..., 8 |
  | 1 a 8 | 0.65 a 8.35 | 1, 2, ..., 8 |
  | 9 | 0.6 a 9.4 | 1, 2, ..., 9 |
  | 10 | 0.55 a 10.45 | 2, 4, 6, 8, 10 |
  | 11 | 0.5 a 11.5 | 2, 4, 6, 8, 10 |
  | 12 | 0.45 a 12.55 | 2, 4, 6, 8, 10, 12 |

  Observación que la página debe hacer notar: entre 1 y 8 el eje no se mueve, porque solo importan el mínimo y el máximo de todo lo
  dibujado. A partir de 10 el paso de los ticks salta de 1 a 2 (el localizador automático no quiere más de unos 9 ticks).
- `.destacado` (la confusión natural): "¿Por qué el eje y no empieza en 0, si son ventas?" Predicción: Francisco elige "porque
  matplotlib se equivocó", "porque empieza un poco antes del dato más chico" o "porque redondea al entero más cercano". Respuesta: la
  segunda. Con los datos iniciales el mínimo es 1 y el máximo 8; el rango es 7 y el margen 0.35, así que el eje va de 0.65 a 8.35. Para
  líneas está bien; para barras sería engañoso, y por eso matplotlib hace que las barras sí empiecen en 0 (se ve en "Elegir el gráfico
  según la pregunta").
- Chequeo (cálculo con datos en vivo, numérico): "Con el valor que dejaste en el deslizador, ¿dónde empieza el eje y?" Respuesta según v
  (tabla de arriba; con el inicial, 0.65). Tolerancia 0.01.
  Pistas: 1) "¿Cuál es el valor más chico de las dos líneas?"; 2) "El margen es el 5 % de máx − mín"; 3) la cuenta completa.
  Errores típicos: responder el mínimo sin margen (1); responder 0; aplicar el 5 % al máximo (8 · 0.05 = 0.4 y 1 − 0.4 = 0.6).
- Profundizar: "¿Y R?" R base usa un margen del 4 %: con los mismos datos `par("usr")` da 0.80 6.20 0.72 8.28 (verificado) y dibuja los
  ticks 1 a 8. ggplot2 usa 5 %, como matplotlib. Para quitar el margen: `ax.margins(0)` en matplotlib, `xaxs = "i"` en R.
- Citas: hojamatplotlib p.1 (Tick locators: `AutoLocator`, `MaxNLocator`; y Quick reminder: `ax.set_[xy]lim`).

### Paso 5. Varios Axes en una Figure: `plt.subplots(filas, columnas)`
- Idea: `fig, axs = plt.subplots(2, 2)` crea una hoja con cuatro cuadros y te los da en un arreglo; cada cuadro se pide por fila y columna
  contando desde 0 (`axs[1, 0]` es la segunda fila, primera columna). Cada Axes tiene sus propios límites, salvo que pidas `sharey=True`.
  Si hay una sola fila o una sola columna, el arreglo es plano: `plt.subplots(1, 3)` da `axs[0]`, `axs[1]`, `axs[2]` (forma `(3,)`,
  verificado).
- Escenario: modo `rejilla`. Botones `1 × 1`, `1 × 2`, `2 × 1`, `2 × 2`. Cada Axes muestra su índice al tocarlo. Un interruptor "R" cambia
  los rótulos por el orden de llenado de `par(mfrow = c(2, 2))`: 1, 2 arriba; 3, 4 abajo (llena por filas).
- Chequeo (elección con explicación): "Con `fig, axs = plt.subplots(2, 2)`, ¿qué cuadro es `axs[1, 0]`?" (los índices están ocultos hasta
  responder).
  Correcta: abajo a la izquierda. Distractores: "arriba a la derecha" (lee columna antes que fila); "abajo a la derecha" (cuenta desde 1);
  "arriba a la izquierda" (cree que el 1 es la primera fila).
- Profundizar: "Ajustar los espacios": `fig.tight_layout()` y `plt.subplots_adjust(left, right, top, bottom, hspace, wspace)`; la hoja
  dibuja qué mide cada uno.
- Citas: hojamatplotlib p.1 (Subplots layout: `plt.subplots(3, 3)`, `gridspec`, `inset_axes`); hojamatplotlib p.2 (Axes adjustments:
  `subplots_adjust` y qué mide cada margen).

### Paso 6. `plt.*` dibuja en "el Axes actual" (TRAMPA)
- Idea: además de `ax.algo(...)`, matplotlib tiene atajos `plt.algo(...)` que no preguntan dónde: actúan sobre la Figure actual
  (`plt.gcf()`) y el Axes actual (`plt.gca()`). Con un solo Axes da igual; con varios, el actual es el último creado o el último que
  usaste con `plt`, no el que estás pensando.
- Escenario: modo `actual`. Distribución `1 × 2` y el rótulo "actual". Botones que ejecutan, en orden, las líneas del reto `codigo1`:
  `fig, (ax1, ax2) = plt.subplots(1, 2)` (el rótulo queda en `ax2`), `ax1.plot(meses, a)` (el rótulo NO se mueve),
  `ax2.plot(meses, b)`, `plt.title("Tienda A")` (el título aparece sobre `ax2`).
- Chequeo (predicción antes de tocar, opción múltiple): "¿Sobre qué cuadro queda el título 'Tienda A'?"
  Correcta: "sobre el de la derecha (`ax2`), porque es el Axes actual: el último que creó `plt.subplots`. Usar `ax1` con su método no lo
  vuelve actual." Salida real: `'' 'Tienda A'`.
  Distractores: "sobre el de la izquierda, porque fue el primero que dibujé" (`ax1.plot` no cambia el actual); "sobre los dos"
  (`plt.title` toca un solo Axes; para toda la hoja existe `fig.suptitle`); "da error, porque hay dos Axes" (no lo da: falla en silencio).
  Es el reto `codigo1`. Después se muestra la hipótesis inicial (`#citaHipo`).
- Nota: el cuaderno de clase `UAX_20251105` usa siempre el estilo `plt.*` (celdas 91-107) y con un solo Axes por figura funciona; la celda
  91 muestra la salida `<Figure size 640x480 with 1 Axes>`: matplotlib creó la hoja y el cuadro sin que nadie los pidiera.
- Citas: hojamatplotlib p.1 (Quick reminder: `plt.gcf()`, `plt.gca()`, `fig.suptitle`).

### Paso 7. Cuando otra librería crea su propia figura
- Idea (lo más técnico): pandas y seaborn dibujan con matplotlib; algunas de sus funciones crean su propia Figure si no les pasas un Axes.
  Entonces `plt.figure(figsize=...)` antes de llamarlas deja una hoja vacía y el gráfico sale en otra, del tamaño por defecto. La solución
  es crear `fig, ax` tú y pasar `ax=ax`.
- Escenario: modo `pandas`. Dos hojas en miniatura: "Figura 1, 12 × 6" vacía y "Figura 2, 6.4 × 4.8" con tres cajas de precios; el rótulo
  "actual" salta a la Figura 2 cuando corre `productos.boxplot(...)`. Al lado, la celda 109 del cuaderno de clase, que mostró justamente
  `<Figure size 1200x600 with 0 Axes>` y `<Figure size 640x480 with 1 Axes>`, y cuyo título quedó encimado con el que pone pandas
  ("Boxplot grouped by Category"). Un botón "arreglar" cambia el código por la versión con `ax=ax` y queda una sola hoja de 12 × 6.
- Chequeo (elección con explicación): "En la celda 109 se pidió `plt.figure(figsize=(12, 6))` y luego `productos.boxplot(column=..., by=...)`.
  ¿Por qué el gráfico salió del tamaño por defecto?"
  Correcta: "`boxplot(by=...)` de pandas creó una Figure nueva; la de 12 × 6 quedó vacía". Distractores: "porque `figsize` se escribe en
  centímetros" (son pulgadas y no es el problema); "porque falta `plt.show()`" (mostrar no cambia el tamaño); "porque el boxplot no admite
  tamaños" (sí, si le das el Axes de una figura que ya tiene ese tamaño). Es el reto `codigo3`.
- Citas: hojamatplotlib p.2 ("How do I... resize a figure?", "save a figure?", "clear a figure/an axes?").

## Vida real (Python y R)

Mismos datos que el recorrido: ventas inventadas de dos tiendas en seis meses. El código construye la figura pieza a pieza; la animación
pinta en el SVG la pieza que agrega cada línea. Se cierra contra la forma idiomática corta: el estilo `plt.*` en Python (`plt.plot` dos
veces) y `matplot` en R, y se comprueba que dan los mismos límites.

### Python (verificado, Python 3.13, matplotlib 3.10.0, backend Agg)

| id | línea |
|---|---|
| imp | `import matplotlib` |
| imp | `matplotlib.use("Agg")` |
| imp | `import matplotlib.pyplot as plt` |
| (vacía) | |
| datos | `meses = [1, 2, 3, 4, 5, 6]` |
| datos | `a = [2, 4, 5, 4, 6, 8]` |
| datos | `b = [1, 3, 3, 5, 7, 7]` |
| (vacía) | |
| figura | `fig, ax = plt.subplots()` |
| linea_a | `ax.plot(meses, a, label="Tienda A")` |
| linea_b | `ax.plot(meses, b, label="Tienda B")` |
| titulo | `ax.set_title("Ventas por mes")` |
| etiq_x | `ax.set_xlabel("Mes")` |
| etiq_y | `ax.set_ylabel("Ventas (miles)")` |
| leyenda | `ax.legend()` |
| rejilla | `ax.grid(True)` |
| (vacía) | |
| contar | `print(len(fig.axes), len(ax.lines))` |
| limites | `print(*ax.get_xlim(), *ax.get_ylim())` |
| ticks | `print(*ax.get_yticks())` |
| guardar | `fig.savefig("ventas.png")` |
| (vacía) | |
| atajo_fig | `plt.figure()` |
| atajo_a | `plt.plot(meses, a)` |
| atajo_b | `plt.plot(meses, b)` |
| compara | `print(plt.ylim() == ax.get_ylim(), plt.gca() is ax)` |

```python
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt

meses = [1, 2, 3, 4, 5, 6]
a = [2, 4, 5, 4, 6, 8]
b = [1, 3, 3, 5, 7, 7]

fig, ax = plt.subplots()
ax.plot(meses, a, label="Tienda A")
ax.plot(meses, b, label="Tienda B")
ax.set_title("Ventas por mes")
ax.set_xlabel("Mes")
ax.set_ylabel("Ventas (miles)")
ax.legend()
ax.grid(True)

print(len(fig.axes), len(ax.lines))
print(*ax.get_xlim(), *ax.get_ylim())
print(*ax.get_yticks())
fig.savefig("ventas.png")

plt.figure()
plt.plot(meses, a)
plt.plot(meses, b)
print(plt.ylim() == ax.get_ylim(), plt.gca() is ax)
```
Salida real:
```
1 2
0.75 6.25 0.6499999999999999 8.35
0.0 1.0 2.0 3.0 4.0 5.0 6.0 7.0 8.0 9.0
True False
```
(El `0.6499999999999999` es real: 1 − 0.35 en coma flotante. La página lo comenta en una línea, sin redondearlo.)

### R (verificado, R 4.6.1, gráficos base)

| id | línea |
|---|---|
| datos | `meses <- c(1, 2, 3, 4, 5, 6)` |
| datos | `a <- c(2, 4, 5, 4, 6, 8)` |
| datos | `b <- c(1, 3, 3, 5, 7, 7)` |
| (vacía) | |
| figura | `png("ventas.png")` |
| linea_a | `plot(meses, a, type = "l", col = "blue", ylim = range(c(a, b)), ann = FALSE)` |
| linea_b | `lines(meses, b, col = "orange")` |
| titulo | `title(main = "Ventas por mes")` |
| etiq_x | `title(xlab = "Mes")` |
| etiq_y | `title(ylab = "Ventas (miles)")` |
| leyenda | `legend("topleft", legend = c("Tienda A", "Tienda B"), col = c("blue", "orange"), lty = 1)` |
| rejilla | `grid()` |
| (vacía) | |
| limites | `usr <- par("usr")` |
| limites | `print(usr)` |
| ticks | `print(axTicks(2))` |
| guardar | `invisible(dev.off())` |
| (vacía) | |
| atajo_fig | `png("atajo.png")` |
| atajo_a | `matplot(meses, cbind(a, b), type = "l", lty = 1)` |
| compara | `print(isTRUE(all.equal(par("usr"), usr)))` |
| cerrar | `invisible(dev.off())` |

```r
meses <- c(1, 2, 3, 4, 5, 6)
a <- c(2, 4, 5, 4, 6, 8)
b <- c(1, 3, 3, 5, 7, 7)

png("ventas.png")
plot(meses, a, type = "l", col = "blue", ylim = range(c(a, b)), ann = FALSE)
lines(meses, b, col = "orange")
title(main = "Ventas por mes")
title(xlab = "Mes")
title(ylab = "Ventas (miles)")
legend("topleft", legend = c("Tienda A", "Tienda B"), col = c("blue", "orange"), lty = 1)
grid()

usr <- par("usr")
print(usr)
print(axTicks(2))
invisible(dev.off())

png("atajo.png")
matplot(meses, cbind(a, b), type = "l", lty = 1)
print(isTRUE(all.equal(par("usr"), usr)))
invisible(dev.off())
```
Salida real:
```
[1] 0.80 6.20 0.72 8.28
[1] 1 2 3 4 5 6 7 8
[1] TRUE
```

Líneas que existen en un solo lenguaje: `imp`, `contar` y `atajo_b` solo en Python; `cerrar` solo en R. En R, `ann = FALSE` le pide a `plot`
que no ponga títulos ni etiquetas automáticas, para poder agregarlos de a uno con `title()` (así cada pieza tiene su línea, como en
Python). `ylim = range(c(a, b))` hace a mano lo que matplotlib hace solo (ver `codigo2`). En R el archivo se escribe recién al cerrar el
dispositivo (`dev.off()`); en Python, en `savefig`.

### Foto de estado por línea ejecutada

Un solo `EV` en este orden. El visual pinta la figura con la geometría de matplotlib; en R usa los límites y ticks de R (columna R).

| # | id | Python: qué tiene la figura | R: qué tiene la figura |
|---|---|---|---|
| 1 | imp | nada; `plt` cargado | (sin línea) |
| 2 | datos | nada; `meses`, `a`, `b` | igual |
| 3 | figura | Figure 640 × 480 con un Axes vacío: x e y de 0 a 1, ticks 0.0, 0.2, ..., 1.0, cuatro spines | hoja en blanco de 480 × 480, **sin** región de dibujo |
| 4 | linea_a | línea azul `#1f77b4`; x de 0.75 a 6.25 (ticks 1 a 6), y de 1.7 a 8.3 (ticks 2 a 8) | aparece la región de dibujo con caja, ejes y la línea azul; usr 0.80 6.20 0.72 8.28; ticks x 1 a 6, y 1 a 8 |
| 5 | linea_b | línea naranja `#ff7f0e`; el eje y se reajusta: 0.65 a 8.35, ticks 1 a 8 | línea naranja; los límites no cambian (ya los fijó `ylim`) |
| 6 | titulo | título "Ventas por mes" sobre el Axes | igual |
| 7 | etiq_x | "Mes" bajo el eje x | igual |
| 8 | etiq_y | "Ventas (miles)" vertical a la izquierda | igual |
| 9 | leyenda | caja arriba a la izquierda (lugar elegido por `best`) | caja arriba a la izquierda (`"topleft"` explícito) |
| 10 | rejilla | líneas grises en cada tick mayor | líneas punteadas grises en los ticks |
| 11 | contar | salida `1 2` (1 Axes, 2 líneas) | (sin línea) |
| 12 | limites | salida `0.75 6.25 0.6499999999999999 8.35` | salida `[1] 0.80 6.20 0.72 8.28` |
| 13 | ticks | salida `0.0 1.0 ... 9.0`: el 0 y el 9 existen pero caen fuera y no se dibujan | salida `[1] 1 2 3 4 5 6 7 8` |
| 14 | guardar | se escribe `ventas.png` | se cierra el dispositivo y se escribe `ventas.png` |
| 15 | atajo_fig | aparece una Figura 2 en miniatura, vacía y sin Axes; el rótulo "actual" salta a ella | se abre `atajo.png` |
| 16 | atajo_a | `plt.plot` crea solo un Axes en la Figura 2 y dibuja A | `matplot` dibuja las dos series de una vez |
| 17 | atajo_b | segunda línea en la Figura 2 | (sin línea) |
| 18 | compara | salida `True False`: mismos límites, pero el Axes actual ya no es `ax` | salida `[1] TRUE` |
| 19 | cerrar | (sin línea) | se cierra `atajo.png` |

Fases (`#vrFases`): 1 preparar (eventos 1-2), 2 crear las cajas (3), 3 dibujar (4-5), 4 decorar (6-10), 5 inspeccionar y guardar (11-14),
6 el atajo (15-19).

### Predicción antes de reproducir (`#vrPred`)
"Cuando termine el programa, ¿cuántos Axes tendrá la primera figura y cuántas líneas tendrá ese Axes?" Respuesta: 1 y 2 (salida `1 2`).
Distractores: "2 Axes" (cree que cada `ax.plot` crea un cuadro); "3 líneas" (cuenta la leyenda o la rejilla como línea); "4 líneas" (cuenta
también las del atajo, que están en otra figura).

### Trampas reales (retos `codigo1`..`codigo3`)

**codigo1: `plt.title` cae en el último Axes** (es el chequeo del paso 6).
```python
fig, (ax1, ax2) = plt.subplots(1, 2)
ax1.plot(meses, a)
ax2.plot(meses, b)
plt.title("Tienda A")
print(repr(ax1.get_title()), repr(ax2.get_title()))
```
Salida real: `'' 'Tienda A'`. Arreglo: `ax1.set_title("Tienda A")`.
En R pasa lo mismo: con `par(mfrow = c(1, 2))`, `plot(meses, a, type = "l")`, `plot(meses, b, type = "l")` y `title("Tienda A")`, el título
queda sobre el gráfico de la derecha (verificado mirando el PNG): `title()` siempre anota la última región dibujada.

**codigo2: R base no reajusta el eje al agregar líneas.**
```r
png("t2.png")
plot(meses, a, type = "l")
lines(meses, b, col = "orange")
print(par("usr"))
print(min(b) < par("usr")[3])
invisible(dev.off())
```
Salida real: `[1] 0.80 6.20 1.76 8.24` y `[1] TRUE`: el eje y lo fijó `plot()` con los datos de A (2 a 8); el 1 de la Tienda B queda
fuera y la línea naranja sale cortada. En matplotlib, el segundo `ax.plot` reajusta los límites (de 1.7-8.3 pasa a 0.65-8.35).
Pregunta: "¿Por qué en R se corta la línea y en matplotlib no?" Correcta: "`plot()` fija los límites una vez; `lines()` solo agrega
encima. matplotlib recalcula los límites con todo lo dibujado". Distractor "porque R no admite valores menores que 2" con pista: "prueba
`ylim = range(c(a, b))`: el 1 aparece".

**codigo3: la figura vacía de la celda 109** (es el chequeo del paso 7). Datos inventados, misma estructura que el cuaderno:
```python
import pandas as pd

productos = pd.DataFrame({"precio": [10, 12, 15, 20, 30, 35, 40, 60],
                          "categoria": ["Ropa"] * 4 + ["Hogar"] * 4})
plt.figure(figsize=(12, 6))
productos.boxplot(column="precio", by="categoria", grid=False)
plt.title("Precio por categoría")
print(plt.get_fignums())
print([len(plt.figure(n).axes) for n in plt.get_fignums()])
print(plt.figure(2).get_size_inches())
print(repr(plt.figure(2)._suptitle.get_text()))
```
Salida real:
```
[1, 2]
[0, 1]
[6.4 4.8]
'Boxplot grouped by categoria'
```
Arreglo (verificado, deja una sola figura con un Axes): `fig, ax = plt.subplots(figsize=(12, 6))` y
`productos.boxplot(column="precio", by="categoria", grid=False, ax=ax)`. Nota: `_suptitle` es un atributo interno; la página puede
omitir esa línea de inspección y decir solo que pandas agrega el título de hoja "Boxplot grouped by categoria". Si la omite, debe
quitarla también del código mostrado (el código mostrado debe ser idéntico al que se corrió).
En R no hay un equivalente directo; la página dice que el problema es propio de las librerías que envuelven a matplotlib.

`p.vr-nota`: "En una línea, sin nombrar las cajas: `plt.plot(meses, a); plt.plot(meses, b)` en Python y `matplot(meses, cbind(a, b), type = "l")`
en R. Sirve con un solo cuadro; con varios, nombra cada Axes."
Sin profundizar vectorizado (no aplica). En su lugar un `details.profundizar` "Recorrer las piezas de verdad": `fig.get_children()` y
`ax.get_children()` listan los objetos (Rectangle, Line2D, Spine, XAxis, YAxis, Text, Legend). Si el constructor muestra la lista con
nombres, debe correrlo antes y pegar la salida real.

## Retos (8 en la parte 3, más codigo1..3 y formula)

1. **`ojo-pieza`**, ojo clínico (5 rondas, aprueba con 4). Generador: una figura de 1 o 2 Axes con datos al azar (5 enteros de 0 a 20 por
   línea, 1 o 2 líneas), y una pieza iluminada elegida al azar entre spine, tick mayor, etiqueta de tick, línea de rejilla, Line2D, leyenda,
   título del Axes, título de la Figure (`suptitle`), etiqueta de eje, Axes completo. Pregunta: "¿Qué pieza es?", cuatro opciones.
2. **`ojo-quien`**, ojo clínico (5 rondas). Generador: una línea de código al azar de esta lista: `ax.set_xlim(0, 10)`, `fig.suptitle("Ventas")`,
   `plt.title("Ventas")`, `fig.savefig("a.png")`, `ax.legend()`, `plt.xlabel("Mes")`, `fig.tight_layout()`, `ax.grid(True)`,
   `plt.ylim(0, 5)`. Pregunta: "¿Sobre qué actúa?", opciones: "la Figure", "un Axes con nombre", "el Axes actual (el que diga `plt.gca()`)".
   Respuestas: `fig.*` = la Figure; `ax.*` = un Axes con nombre; `plt.title`, `plt.xlabel`, `plt.ylim` = el Axes actual.
3. **`construir-hoja`**, construir. Francisco parte de una hoja vacía y toca botones de código que se aplican al Axes que tenga seleccionado
   (cada botón agrega su línea a un panel de código generado). Objetivos (cada uno se marca al cumplirse):
   a) la figura tiene 2 Axes lado a lado (`plt.subplots(1, 2)`);
   b) el de la izquierda tiene título "Tienda A" y el de la derecha "Tienda B";
   c) los dos comparten el eje y (`sharey=True`) y van de 0 a 10;
   d) solo el de la derecha tiene leyenda;
   e) ninguno tiene el spine de arriba ni el de la derecha.
   El panel final debe parecerse a un programa real con `axs[0].set_title(...)`, `ax.spines["top"].set_visible(False)`, etc.
4. **`mano-limites`**, a mano (reintentable). Generador: 5 enteros al azar entre 0 y 40 (con al menos 10 de rango). "Dibujas solo esta
   línea con `ax.plot`. ¿Entre qué valores va el eje y?" Dos casillas (mínimo y máximo, tolerancia 0.01).
   Pistas: 1) "Busca el mínimo y el máximo"; 2) "El margen es 0.05 · (máx − mín) a cada lado"; 3) la cuenta con los números.
   Un interruptor "versión R" pide el 4 % en lugar del 5 %.
5. **`mano-indice`**, a mano. Generador: `plt.subplots(f, c)` con f y c al azar entre 1 y 3 (sin el 1 × 1) y un Axes marcado. "Escribe cómo lo
   pides en Python." Respuestas: `axs[i, j]` si f > 1 y c > 1; `axs[k]` si f = 1 o c = 1 (el arreglo es plano). Pistas: 1) "fila y
   columna, desde 0"; 2) "si hay una sola fila o una sola columna, el arreglo tiene una sola dimensión"; 3) la respuesta.
6. **`cazar-figura`**, cazar el error (3 variantes, marcar la línea mal):
   - a) `fig, ax = plt.subplots()`, `plt.figure(figsize=(8, 4))`, `ax.plot([1, 2, 3], [2, 4, 3])`, `plt.savefig("a.png")`. El archivo sale
     en blanco: `plt.savefig` guarda la figura actual, que es la nueva y vacía (verificado: figuras `[1, 2]`, la actual con 0 Axes y la
     línea en la figura 1). Línea mal: `plt.figure(figsize=(8, 4))` (o el `plt.savefig`); arreglo `fig.savefig("a.png")` y el tamaño en
     `plt.subplots(figsize=(8, 4))`.
   - b) `fig, axs = plt.subplots(1, 2)` y luego `axs.plot(meses, a)`. Error real:
     `AttributeError: 'numpy.ndarray' object has no attribute 'plot'`. Línea mal: `axs.plot`; arreglo `axs[0].plot(...)`.
   - c) `plt.figure(figsize=(12, 6))` seguido de `productos.boxplot(column="precio", by="categoria")` (la celda 109). Línea mal:
     `plt.figure(...)`; arreglo `fig, ax = plt.subplots(figsize=(12, 6))` y `ax=ax`.
7. **`prop-jerarquia`**, propiedades (opción múltiple, `mezclar: true`, reintentable): "¿Qué afirmación es cierta?"
   Correcta: "Una Figure puede tener varios Axes, y cada Axes pertenece a una sola Figure."
   Distractores y pistas: "Un Axes es uno de los ejes, el x o el y" -> "ese es el Axis; el Axes es el cuadro entero, con dos Axis";
   "La leyenda pertenece a la Figure" -> "`ax.legend()` la pone dentro del Axes; `fig.legend()` existe, pero es otra cosa";
   "`plt.plot` siempre crea una Figure nueva" -> "reutiliza la actual; solo crea una si no hay ninguna".
8. **`prop-reajuste`**, propiedades (opción múltiple, `mezclar: true`): "Dibujas `ax.plot([1, 2, 3], [10, 20, 30])` y después
   `ax.plot([1, 2, 3], [100, 200, 300])` en el mismo Axes. ¿Qué pasa con el eje y?"
   Correcta: "se reajusta para mostrar las dos líneas". Distractores y pistas: "queda fijo por la primera línea y la segunda sale cortada"
   -> "eso pasa en R base con `plot` y `lines`, no en matplotlib"; "se crea un segundo eje y a la derecha" -> "eso solo pasa si lo pides
   con `ax.twinx()`"; "da error porque las escalas no coinciden" -> "matplotlib no compara escalas: junta todo".

Lecturas de inspiración (citar, no copiar): hoja de matplotlib p.2, la lista "How do I..." (ocultar el spine de arriba, rotar etiquetas,
quitar ticks) como fuente de ideas para el reto `construir-hoja`.

## Memoria

`B.ordenar` (armar la figura mínima con nombre para cada caja; piezas en orden):
1. `import matplotlib.pyplot as plt`
2. `fig, ax = plt.subplots()`
3. `ax.plot(meses, a, label="Tienda A")`
4. `ax.set_title("Ventas por mes")`
5. `ax.legend()`
6. `fig.savefig("ventas.png")`
Distractores: `ax = plt.subplots()`, `fig.plot(meses, a)`, `plt.title("Ventas por mes", ax)`.
Se registra como reto `formula`.

Tarjetas (8):
1. ¿Qué es una Figure? -> La hoja entera: el contenedor de todo. Tiene tamaño (6.4 × 4.8 pulgadas por defecto) y uno o más Axes.
2. ¿Qué es un Axes? -> Un cuadro de dibujo dentro de la Figure, con sus dos ejes, sus límites, sus líneas, su título y su leyenda.
3. ¿Axes o Axis? -> Axes es el cuadro entero; Axis es uno de sus dos ejes (x o y), con sus ticks y etiquetas.
4. ¿Qué es un spine? -> Uno de los cuatro bordes del Axes (left, right, bottom, top). Se pueden ocultar de a uno.
5. ¿Qué devuelve `plt.subplots(2, 2)`? -> Una Figure y un arreglo de 2 × 2 Axes; `axs[1, 0]` es la segunda fila, primera columna.
6. ¿Sobre qué actúa `plt.title`? -> Sobre el Axes actual (`plt.gca()`), que es el último creado o usado con `plt`, no necesariamente el que piensas.
7. ¿Cómo elige matplotlib los límites? -> Mínimo y máximo de todo lo dibujado, más un margen del 5 % del rango a cada lado (R base usa 4 %).
8. ¿Por qué `plt.figure(figsize=...)` a veces deja una hoja vacía? -> Porque la función que dibuja (por ejemplo `df.boxplot(by=...)`) crea su propia Figure; pásale `ax=ax`.

## Citas (12)

| id de fuente | pág. PDF | pág. impresa | sección | qué hay | cuándo leerla |
|---|---|---|---|---|---|
| hojamatplotlib | 1 | 1 | Anatomy of a figure | el dibujo con cada pieza rotulada: Figure, Axes, spine, major y minor tick, tick label, grid, legend, title, axis label, line, markers | Paso 2 |
| hojamatplotlib | 1 | 1 | Quick start | las seis líneas mínimas: `import`, `fig, ax = plt.subplots()`, `ax.plot`, `fig.savefig`, `plt.show()` | Paso 3 |
| hojamatplotlib | 1 | 1 | Tick locators y Quick reminder | `AutoLocator`, `MaxNLocator`, `MultipleLocator`; `ax.set_[xy]lim`, `ax.set_[xy]ticks` | Paso 4 |
| hojamatplotlib | 1 | 1 | Subplots layout | `plt.subplots(3, 3)`, `gridspec`, `inset_axes` | Paso 5 |
| hojamatplotlib | 1 | 1 | Quick reminder | `plt.gcf()`, `plt.gca()`, `fig.suptitle`, `fig.tight_layout()` | Paso 6 |
| hojamatplotlib | 2 | 2 | Axes adjustments | `plt.subplots_adjust` con el dibujo de qué mide cada margen (left, right, top, bottom, hspace, wspace) | Profundizar del paso 5 |
| hojamatplotlib | 2 | 2 | Legend placement | posiciones de la leyenda por nombre y con `bbox_to_anchor` | Profundizar del paso 2 |
| hojamatplotlib | 2 | 2 | How do I ... | ocultar el spine de arriba, cambiar el tamaño, guardar, limpiar una figura o un Axes, quitar ticks | Paso 7 y reto `construir-hoja` |
| prog1 | 10 | 10 | Python en la ciencia de datos | Matplotlib y Seaborn en la teoría de UD1 (dos párrafos que siguen en p.11) | Paso 1 |
| thinpython | 200 | 179 | Cap. 15: Rectangles | un objeto que contiene otro objeto (`box.corner.x`), Figure 15-2: la misma idea que una Figure que contiene un Axes | Paso 3 |
| thinpython | 204 | 183 | Cap. 15: Debugging | `AttributeError` al pedir un atributo que el objeto no tiene, como `axs.plot` sobre un arreglo | Reto `cazar-figura` b |
| eda6 | 13 | 13 | Variabilidad de una variable | la UD6 usa gráficos de R base porque son rápidos para explorar; gráficos exploratorios frente a gráficos de presentación | Profundizar del paso 3 |

Verificado: hojamatplotlib tiene 2 páginas, PDF = impresa; p.1 contiene "Quick start", "Anatomy of a figure", "Subplots layout",
"Tick locators", "Quick reminder" (con `plt.gcf(), plt.gca()`); p.2 contiene "Axes adjustments", "Legend placement" y la lista
"How do I ..." (`ax.spines['top'].set_visible(False)`, resize, save, clear). prog1 p.10-11 y eda6 p.13 leídas con `pdftotext`.
thinpython 200 y 204 según `brain/fuentes/think-python.md`.

Sin chip (no registrado; se nombra en el texto con su celda): cuaderno `UAX_20251105.ipynb` de UD1:
- celda 85: `import matplotlib.pyplot as plt`;
- celda 91: `plt.plot(...)` con salida guardada `<Figure size 640x480 with 1 Axes>` (paso 6);
- celda 92: `plt.figure(figsize=(10, 6))` y siete instrucciones `plt.*` sobre un solo Axes (paso 6);
- celda 109: `plt.figure(figsize=(12, 6))` + `productos.boxplot(column='UnitPrice', by='Category', grid=False)`; salidas guardadas
  `<Figure size 1200x600 with 0 Axes>` y `<Figure size 640x480 with 1 Axes>`; la imagen guardada muestra el título de pandas
  "Boxplot grouped by Category" encimado con el de `plt.title` (paso 7 y `codigo3`).

## Riesgos y notas para quien construye

- UD2 no está publicada: decirlo. La página se apoya en la hoja de referencia y en los cuadernos de UD1.
- La hoja de matplotlib es la versión 3.9.4 y en esta máquina corre 3.10.0; para todo lo de esta página no hay diferencias.
- `get_yticks()` devuelve ticks fuera de los límites (0 y 9): son reales y la página debe explicar que no se dibujan. No filtrarlos en la
  salida mostrada.
- El SVG debe usar exactamente la geometría de arriba; si se escala, escalar todo junto (viewBox). A 375 px la figura mide unos 340 px de
  ancho: los rótulos de tick quedan a unos 6 px de alto, por eso la lista de botones de piezas es obligatoria.
- R base y matplotlib no tienen la misma anatomía: en R no hay objeto Axes; la "región de dibujo" nace con `plot()`. El visual en modo R
  debe mostrar la hoja vacía en el evento 3 y la región completa recién en el evento 4.
- Los mensajes de error de Python y R salen en inglés en esta máquina; mostrarlos tal cual y traducirlos al lado.
- El motor usa un solo `EV` para los dos lenguajes: en los eventos sin línea en el lenguaje elegido (`imp`, `contar`, `atajo_b` en R;
  `cerrar` en Python) no se ilumina ninguna línea y la narración lo dice ("en R esto no tiene línea propia porque...").
- El deslizador del paso 4 solo debe usar los valores de la tabla (0 a 12): los ticks salen de esa tabla verificada, no de una regla
  inventada en JavaScript.
- `matplotlib.use("Agg")` solo hace falta para correr sin ventana; la página lo explica en una línea (en un cuaderno no se escribe).
