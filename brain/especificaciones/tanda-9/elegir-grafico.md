# Especificacion: Elegir el gráfico según la pregunta (elegir-grafico)

- Ruta: `matplotlib` (grupo Programación con datos), orden 3, tanda 9
- Archivo: `biblioteca/conceptos/elegir-grafico.html`
- Prerrequisitos: ["Anatomía de una figura", "Histograma y densidad"]
- Siguientes: []
- Aparece: [{ materia: "SM142002", ud: "UD2" }, { materia: "SM142002", ud: "UD6" }]
- Resumen del catálogo: "Distribución, relación o comparación: cada pregunta pide un gráfico distinto."
- Fuente declarada: Programación UD5 (EDA I) y UD6, cuadernos de SM142002
- Páginas ya construidas en las que se apoya (no repetirlas, enlazarlas en el texto): `histograma-densidad.html` ("Histograma y densidad":
  60 esperas, ancho de barra, densidad; sus trampas reales ya cubren el histograma por defecto de R y el ancho de banda) y
  `percentiles-iqr.html` ("Percentiles, cuartiles y box plot": 11 tiempos de entrega, cuartiles, vallas, cómo se arma la caja). Esta
  página NO vuelve a explicar cómo se construye un histograma ni una caja: dice para qué pregunta sirven y manda a esas páginas.
  También se menciona "Correlación de Pearson" (ya construida) en el paso de la dispersión.

## Imagen central

**El tablero de preguntas.** El escenario tiene arriba una fila de cuatro **tarjetas-pregunta** y debajo un **lienzo** SVG de un solo
gráfico grande:
- "¿Cómo se reparten los precios?" (distribución)
- "¿Precio y unidades vendidas van juntos?" (relación)
- "¿Qué categoría tiene más productos?" (comparación)
- "¿Cómo cambian las ventas mes a mes?" (evolución)

Y una fila de cinco **botones de gráfico**: histograma, caja, dispersión, barras, línea (más "pastel" desde el paso 7). Francisco elige una
pregunta y un gráfico, y el lienzo dibuja ESE gráfico con ESOS datos, aunque la combinación sea mala: barras de los 12 precios uno al lado
del otro, una línea que une categorías, un pastel de precios. Un rótulo debajo dice qué se puede leer en el dibujo ("se lee: el orden de
los productos en la tabla, no la forma de los precios"). Así la idea se ve: el mismo dato, mal elegido el gráfico, no contesta.

Controles según el paso:
- **Deslizador "dónde empieza el eje y"** (paso 6): 0, 100, 200, 250, 280, 300 (solo esos valores; ticks verificados abajo). Las barras de
  categorías se recortan y aparece la "proporción aparente" junto a la real.
- **Botón "otro surtido"** (paso 2): genera 12 precios nuevos al azar (enteros de 5 a 79 que nunca caen en 20, 40 ni 60, para no tocar la
  trampa de los bordes que ya está en la página del histograma).
- **Botón "desordenar"** (paso 5): baraja las filas de la tabla de meses y la línea hace zigzag.
- **Interruptor "ordenar porciones"** (paso 7): el pastel de 8 porciones se vuelve barras ordenadas.

Modos por paso: `preguntas`, `distribucion`, `relacion`, `comparacion`, `evolucion`, `truncado`, `pastel`.

Datos (inventados salvo los conteos, que son reales del cuaderno de clase):
- precios de 12 productos: 12, 15, 18, 25, 27, 31, 33, 36, 38, 45, 52, 71
- unidades vendidas de esos mismos 12 productos: 40, 38, 35, 30, 28, 26, 22, 25, 20, 15, 12, 5
- productos por categoría (reales, `UAX_20251105` celda 104, `value_counts()` sobre 1000 productos): Clothing 356, Home Goods 335,
  Electronics 309
- ventas por mes (miles): meses 1 a 6, ventas 20, 24, 23, 28, 31, 35
- gastos de un hogar en 8 rubros (porcentaje, suma 100), en el orden del pastel: Comida 15, Ocio 13, Vivienda 16, Ropa 11, Transporte 14,
  Otros 9, Salud 12, Educación 10

Cuentas limpias verificadas: histograma con bordes 0, 20, 40, 60, 80 da 3, 6, 2, 1 (Python y R); correlación de Pearson entre precio y
unidades −0.981 (`np.corrcoef`); la barra más alta mide 356 y la más baja 309 (356 / 309 = 1.15).

## Hipotesis inicial

"Tienes datos de una tienda y te hacen cuatro preguntas: cómo se reparten los precios, si los productos caros se venden menos, qué
categoría tiene más productos y cómo cambiaron las ventas en el semestre. ¿Harías el mismo tipo de gráfico para las cuatro? Si no,
¿qué dibujarías para cada una y por qué?"
Se muestra de nuevo en el paso 7, junto a la tabla de decisión.

## Pasos (7)

### Paso 1. Primero la pregunta, después el dibujo
- Idea: un gráfico es una respuesta. Antes de elegir, hay que saber qué se pregunta: cómo se reparte UNA variable, si DOS variables se
  mueven juntas, cómo se COMPARAN grupos o cómo algo CAMBIA en el tiempo. Sin nombres de gráficos todavía.
- Escenario: modo `preguntas`. Cuatro miniaturas sin rótulos (un histograma, una dispersión, unas barras, una línea) dibujadas con los
  datos de arriba, en orden mezclado, y la pregunta "¿Qué categoría tiene más productos?" resaltada.
- Chequeo (predicción sin símbolos, opción múltiple sobre las miniaturas): "¿Cuál de los cuatro dibujos contesta esa pregunta de un
  vistazo?" Correcta: el de tres rectángulos de distinta altura (barras). Distractores con explicación: el de muchos puntos ("cada
  punto es un producto con dos números: sirve para ver si dos cosas van juntas"); el de la línea que sube ("muestra un cambio en el
  tiempo"); el de los rectángulos pegados ("son cantidades de productos por rango de precio: muestran cómo se reparte un número, no
  categorías").
- Citas: eda6 p.3 (el EDA existe para responder preguntas: los datos tienen que ser "adecuados para responder nuestras preguntas");
  hojamatplotlib p.1 ("Ten simple rules": la 2, "Identify your message").

### Paso 2. Una variable: ¿cómo se reparte? (histograma o caja)
- Idea: cuando la pregunta es sobre UNA variable numérica, se agrupan los valores en intervalos y se cuenta (histograma) o se resumen con
  sus cuartiles (caja). La forma, el centro, la dispersión y los raros se ven ahí. Cómo se construye cada uno ya lo viste en "Histograma y
  densidad" y en "Percentiles, cuartiles y box plot": aquí solo se elige.
- Escenario: modo `distribucion`. Los 12 precios como puntos sobre una recta numérica y, encima, el histograma con bordes 0, 20, 40, 60, 80.
  Un botón alterna histograma y caja (la caja se dibuja con los cuartiles que calcule la página con el método de la página de percentiles;
  si no se quiere recalcular, mostrar solo el histograma y enlazar). Botón "otro surtido". Las alturas se ocultan hasta resolver.
- Chequeo (cálculo con datos en vivo, numérico): "¿Qué altura tiene la barra de 20 a 40?" Respuesta con los datos iniciales: 6 (25, 27, 31,
  33, 36, 38). Con "otro surtido", la que toque. Pistas: 1) "cuenta los puntos entre 20 y 40"; 2) los puntos de ese tramo se iluminan.
- Profundizar: "¿Histograma o caja?" La caja resume en cinco números y sirve para comparar muchas distribuciones lado a lado (la celda 109
  del cuaderno compara el precio de tres categorías así); el histograma muestra la forma (dos picos, colas). Con pocos datos, mejor ver los
  puntos mismos.
- Citas: eda6 p.13 (histogramas en R base: `hist(airquality$Temp)` y `breaks = 25`); eda6 p.16 (`boxplot(mpg ~ cyl)`: una caja por grupo);
  eda5 p.28 (histograma en ggplot2 con las 30 barras por defecto); eda5 p.31 (`geom_boxplot` por cilindros).

### Paso 3. Dos variables numéricas: ¿van juntas? (dispersión)
- Idea: para ver si dos variables se mueven juntas, cada fila tiene que ser un punto con sus DOS números. La dispersión conserva la pareja;
  dos histogramas separados la pierden.
- Escenario: modo `relacion`. La dispersión de precio (x) y unidades (y). Un botón "separar" convierte la nube en dos histogramas, uno de
  precios y otro de unidades, y las parejas se deshacen con una animación.
- Chequeo (elección con explicación): "¿Cuál de estos gráficos NO sirve para saber si los productos caros se venden menos?"
  Correcta: "un histograma de precios y otro de unidades, uno al lado del otro": cada uno muestra cómo se reparte su variable, pero no qué
  precio va con qué unidades. Distractores: "la dispersión con precio en x y unidades en y" (es la correcta para esta pregunta); "la misma
  dispersión con los ejes cambiados" (sigue mostrando las parejas); "la dispersión con cada punto coloreado por categoría" (agrega
  información, no la quita).
- Nota: con estos datos la nube baja casi en línea recta (Pearson −0.98, verificado); el número se mide en "Correlación de Pearson".
- Citas: eda5doc ancla `gráficos-de-dispersión` (dispersión con recta de regresión por grupo de fumadores); eda6doc ancla
  `gráficos-masivos-cruzados` (`ggpairs` pone dispersiones entre pares de variables numéricas).

### Paso 4. Categorías: ¿cuál tiene más? (barras desde cero)
- Idea: para comparar cantidades entre categorías, barras. El ojo compara **largos**, y un largo solo es honesto si empieza en cero. Por
  eso matplotlib hace que las barras arranquen en 0 aunque el resto de los gráficos tenga margen (con estos datos el eje va de 0 a 373.8,
  verificado), y por eso en una línea no hace falta el cero (de 19.25 a 35.75).
- Escenario: modo `comparacion`. Barras con los conteos reales de la clase: Clothing 356, Home Goods 335, Electronics 309. Las alturas
  numéricas están ocultas hasta resolver.
- Chequeo (cálculo con datos en vivo, numérico): "¿Cuántas veces más alta es la barra de Clothing que la de Electronics?" Respuesta 1.15
  (356 / 309 = 1.152; tolerancia 0.01). Pistas: 1) "divide las dos alturas"; 2) "356 entre 309". Error típico: responder la diferencia
  (47).
- Profundizar: "¿En qué orden van las barras?" pandas `value_counts()` las da de mayor a menor (así salen en el cuaderno); en R,
  `barplot(table(x))` las ordena alfabéticamente (Clothing, Electronics, Home Goods) y ggplot2 también. Para comparar, ordenar por altura
  ayuda.
- Citas: eda6 p.16 (`barplot(table(mtcars$cyl))`, barras por conteos); eda6 p.17 (barras por proporciones con `prop.table`); eda5doc ancla
  `datos-agregados-y-desagregados` (con la tabla ya contada se usa `stat = "identity"`; con datos crudos, ggplot2 cuenta solo).

### Paso 5. El tiempo: ¿cómo cambia? (línea, en orden)
- Idea: cuando el eje x es tiempo, la línea une cada momento con el siguiente y deja ver la tendencia. La línea une los puntos **en el
  orden de las filas**, no en el orden del eje: si la tabla está desordenada, la línea hace zigzag. Por eso el cuaderno de clase ordena
  las órdenes por fecha (celda 89, `sort_values(by='OrderDate')`) antes de acumular y dibujar.
- Escenario: modo `evolucion`. La línea de ventas por mes, de 20 a 35. Botón "desordenar": las filas pasan al orden 3, 1, 6, 2, 5, 4 y la
  línea se dibuja uniendo en ese orden (zigzag). El dibujo desordenado se muestra solo después de responder.
- Chequeo (predicción antes de tocar, opción múltiple): "La tabla trae los meses en el orden 3, 1, 6, 2, 5, 4 (con sus ventas). Haces
  `ax.plot(meses, ventas)`. ¿Qué sale?" Correcta: "una línea que va y vuelve, uniendo los puntos en el orden de la tabla" (verificado:
  `get_xdata()` devuelve 3 1 6 2 5 4). Distractores: "la misma línea que antes, porque matplotlib ordena el eje x" (no ordena); "solo los
  puntos, sin línea" (la línea se dibuja igual); "un error porque los meses no están ordenados" (no hay error, por eso engaña).
  Es el reto `codigo3`.
- Nota sobre el cuaderno: la celda 97 dibuja la media mensual con **barras** de ancho 20 días (`plt.bar(..., width=20)`); con 1 a 2 datos
  por mes, una línea (celda 96, la misma serie) cuenta mejor la evolución. La página lo comenta como ejemplo de elección, no como error.
- Citas: hojamatplotlib p.1 (Basic plots: `plot`, `scatter`, `bar`, `hist`, `pie`, con sus argumentos).

### Paso 6. El gráfico que engaña: el eje truncado (TRAMPA)
- Idea: una barra que no empieza en cero miente sobre el largo. Con el eje y desde 300, la barra de Clothing (356) mide 56 y la de
  Electronics (309) mide 9: se ve 6.2 veces más alta cuando en realidad tiene un 15 % más. Las líneas pueden no empezar en cero; las barras
  no.
- Escenario: modo `truncado`. Deslizador "dónde empieza el eje y" con estos valores y ticks reales de matplotlib (`ax.set_ylim(s, 360)`):

  | s | ticks dibujados | proporción aparente (356 − s) / (309 − s) |
  |---|---|---|
  | 0 | 0, 50, ..., 350 | 1.15 |
  | 100 | 100, 150, ..., 350 | 1.22 |
  | 200 | 200, 220, ..., 360 | 1.43 |
  | 250 | 260, 280, ..., 360 | 1.80 |
  | 280 | 280, 290, ..., 360 | 2.62 |
  | 300 | 300, 310, ..., 360 | 6.22 |

  La proporción real (1.15) queda fija al lado. La aparente se oculta hasta resolver el chequeo.
- Chequeo (cálculo con datos en vivo, numérico): "Con el eje desde el valor que elegiste, ¿cuántas veces más alta SE VE la barra de
  Clothing que la de Electronics?" Respuesta: (356 − s) / (309 − s) con el s del deslizador (si deja 0, 1.15; se sugiere probar con 300:
  6.22). Pistas: 1) "el largo visible es la altura menos el inicio del eje"; 2) "para 300: 56 y 9".
- En R es peor (verificado mirando el PNG): `barplot(conteos, ylim = c(300, 360))` dibuja las barras por debajo del eje, fuera del área,
  porque `barplot` usa `xpd = TRUE` por defecto. Es el reto `codigo1`.
- Citas: hojamatplotlib p.1 ("Ten simple rules", la 7: "Do not mislead the reader"; y la 5: "Do not trust the defaults").

### Paso 7. Las partes de un todo: ¿pastel o barras? (DESTACADO con predicción)
- Idea (lo más técnico): el pastel compara **ángulos**, y el ojo es malo para eso cuando las porciones se parecen o son muchas. Barras
  ordenadas contestan lo mismo mejor. Elegir el gráfico es elegir qué tiene que comparar el ojo: posición sobre una escala común (lo más
  fácil), largo, ángulo, área o color (lo más difícil). Esta escala viene de la investigación sobre percepción (Cleveland y McGill) y NO
  está en el material de la materia: la página lo dice.
- Escenario: modo `pastel`. Primero el pastel de los 8 rubros del hogar, en el orden de la lista (Comida 15, Ocio 13, Vivienda 16, Ropa 11,
  Transporte 14, Otros 9, Salud 12, Educación 10), sin porcentajes. Cada porcentaje ocupa 3.6 grados por punto (Vivienda 57.6°, Comida
  54°, Transporte 50.4°, Ocio 46.8°, Salud 43.2°, Ropa 39.6°, Educación 36°, Otros 32.4°). El interruptor "ordenar porciones" lo convierte
  en barras horizontales ordenadas de mayor a menor.
- `.destacado` (la confusión natural): "¿El pastel no es justamente el gráfico de las partes de un todo?" Predicción: "En el pastel,
  ¿qué rubro es más grande: Transporte u Ocio?" Opciones: Transporte, Ocio, iguales. Respuesta: Transporte (14 frente a 13). Casi nadie lo
  ve en el pastel; en las barras ordenadas se ve sin esfuerzo. El pastel sirve cuando son dos o tres porciones muy distintas; con muchas o
  parecidas, barras. Después se muestra la hipótesis inicial (`#citaHipo`) y la tabla de decisión:

  | la pregunta es sobre... | gráfico | página donde se profundiza |
  |---|---|---|
  | cómo se reparte una variable numérica | histograma, densidad o caja | Histograma y densidad; Percentiles, cuartiles y box plot |
  | si dos variables numéricas van juntas | dispersión | Correlación de Pearson |
  | comparar cantidades entre categorías | barras desde cero, ordenadas | (esta página) |
  | cómo cambia algo en el tiempo | línea, con el tiempo ordenado | (esta página) |
  | partes de un todo con 2 o 3 porciones | pastel o barra apilada | (esta página) |

- Chequeo (elección con explicación): el pastel real de la clase (celda 106: Clothing 35.6 %, Home Goods 33.5 %, Electronics 30.9 %).
  "¿Qué cambia si lo dibujas con barras?" Correcta: "se ve que las tres categorías son casi iguales y cuál es la mayor, porque las barras
  comparten la misma base". Distractores: "nada, el pastel ya muestra los porcentajes" (los porcentajes los escribe el texto, no el
  dibujo: tapa los números y prueba); "se pierde que suman 100 %" (una barra apilada lo conserva); "las barras exageran la diferencia" (solo
  si truncas el eje: paso 6).
  Además, la celda 106 del cuaderno tiene un error real que la página muestra: su etiqueta calcula el conteo con
  `int(p * sum(conteo_categorias) / 100)` y la porción de Electronics dice **"30.9% (308)"** aunque son 309 (lo muestra la imagen guardada
  del cuaderno y se reproduce en esta máquina). `int` corta los decimales y el porcentaje que matplotlib pasa vale un poquito menos que 30.9.
  Es el reto `codigo2`.
- Profundizar: "Que la máquina elija": `ggpairs()` (GGally) decide solo el gráfico de cada par según el tipo de variable: barras para
  categóricas, densidad para numéricas en la diagonal, dispersión entre dos numéricas. Es esta misma tabla de decisión, automatizada.
  Y en la gramática de gráficos, un pastel es una barra apilada en coordenadas polares ("Gramática de gráficos", paso 7).
- Citas: eda6doc ancla `gráficos-masivos-cruzados` (`ggpairs` autodetecta el gráfico según el tipo de variable); hojamatplotlib p.1
  (Basic plots: `pie(X, explode, labels, colors, radius)`); eda6 p.37 (conclusiones: los gráficos del EDA son de análisis, no de
  presentación).

## Vida real (Python y R)

Mismos datos que el recorrido. Una figura de 2 × 2 donde cada Axes responde una pregunta (continúa "Anatomía de una figura": un Axes por
pregunta). En Python se cierra comparando las alturas del histograma con `np.histogram` y mostrando los límites del eje y de las barras y de
la línea (las barras empiezan en 0, la línea no). En R se usan gráficos base con `par(mfrow = c(2, 2))` (como la UD6) y se cierra
comparando `hist` con `table(cut(...))`.

### Python (verificado, Python 3.13, NumPy 2.1.3, matplotlib 3.10.0)

| id | línea |
|---|---|
| imp | `import matplotlib` |
| imp | `matplotlib.use("Agg")` |
| imp | `import matplotlib.pyplot as plt` |
| imp | `import numpy as np` |
| (vacía) | |
| datos | `precios = [12, 15, 18, 25, 27, 31, 33, 36, 38, 45, 52, 71]` |
| datos | `unidades = [40, 38, 35, 30, 28, 26, 22, 25, 20, 15, 12, 5]` |
| datos | `categorias = ["Clothing", "Home Goods", "Electronics"]` |
| datos | `conteos = [356, 335, 309]` |
| datos | `meses = [1, 2, 3, 4, 5, 6]` |
| datos | `ventas = [20, 24, 23, 28, 31, 35]` |
| (vacía) | |
| figura | `fig, axs = plt.subplots(2, 2, figsize=(8, 6))` |
| distribucion | `n, bordes, barras = axs[0, 0].hist(precios, bins=[0, 20, 40, 60, 80])` |
| distribucion | `axs[0, 0].set_title("¿Cómo se reparten los precios?")` |
| relacion | `axs[0, 1].scatter(precios, unidades)` |
| relacion | `axs[0, 1].set_title("¿Precio y unidades van juntos?")` |
| comparacion | `axs[1, 0].bar(categorias, conteos)` |
| comparacion | `axs[1, 0].set_title("¿Qué categoría tiene más?")` |
| evolucion | `axs[1, 1].plot(meses, ventas, marker="o")` |
| evolucion | `axs[1, 1].set_title("¿Cómo cambian las ventas?")` |
| ajustar | `fig.tight_layout()` |
| guardar | `fig.savefig("cuatro.png")` |
| (vacía) | |
| conteo | `print(n)` |
| compara | `print(np.histogram(precios, bins=[0, 20, 40, 60, 80])[0])` |
| limites | `print(*axs[1, 0].get_ylim(), *axs[1, 1].get_ylim())` |

```python
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np

precios = [12, 15, 18, 25, 27, 31, 33, 36, 38, 45, 52, 71]
unidades = [40, 38, 35, 30, 28, 26, 22, 25, 20, 15, 12, 5]
categorias = ["Clothing", "Home Goods", "Electronics"]
conteos = [356, 335, 309]
meses = [1, 2, 3, 4, 5, 6]
ventas = [20, 24, 23, 28, 31, 35]

fig, axs = plt.subplots(2, 2, figsize=(8, 6))
n, bordes, barras = axs[0, 0].hist(precios, bins=[0, 20, 40, 60, 80])
axs[0, 0].set_title("¿Cómo se reparten los precios?")
axs[0, 1].scatter(precios, unidades)
axs[0, 1].set_title("¿Precio y unidades van juntos?")
axs[1, 0].bar(categorias, conteos)
axs[1, 0].set_title("¿Qué categoría tiene más?")
axs[1, 1].plot(meses, ventas, marker="o")
axs[1, 1].set_title("¿Cómo cambian las ventas?")
fig.tight_layout()
fig.savefig("cuatro.png")

print(n)
print(np.histogram(precios, bins=[0, 20, 40, 60, 80])[0])
print(*axs[1, 0].get_ylim(), *axs[1, 1].get_ylim())
```
Salida real:
```
[3. 6. 2. 1.]
[3 6 2 1]
0.0 373.8 19.25 35.75
```
(`hist` devuelve conteos con decimales, `3.`, porque son `float`; `np.histogram` los da enteros. Vale una línea de narración.)

### R (verificado, R 4.6.1, gráficos base)

| id | línea |
|---|---|
| datos | `precios <- c(12, 15, 18, 25, 27, 31, 33, 36, 38, 45, 52, 71)` |
| datos | `unidades <- c(40, 38, 35, 30, 28, 26, 22, 25, 20, 15, 12, 5)` |
| datos | `categorias <- c("Clothing", "Home Goods", "Electronics")` |
| datos | `conteos <- c(356, 335, 309)` |
| datos | `meses <- c(1, 2, 3, 4, 5, 6)` |
| datos | `ventas <- c(20, 24, 23, 28, 31, 35)` |
| (vacía) | |
| figura | `png("cuatro.png", width = 800, height = 600)` |
| figura | `par(mfrow = c(2, 2))` |
| distribucion | `h <- hist(precios, breaks = c(0, 20, 40, 60, 80), main = "¿Cómo se reparten los precios?")` |
| relacion | `plot(precios, unidades, main = "¿Precio y unidades van juntos?")` |
| comparacion | `barplot(conteos, names.arg = categorias, main = "¿Qué categoría tiene más?")` |
| comparacion | `usr_barras <- par("usr")` |
| evolucion | `plot(meses, ventas, type = "o", main = "¿Cómo cambian las ventas?")` |
| evolucion | `usr_linea <- par("usr")` |
| guardar | `invisible(dev.off())` |
| (vacía) | |
| conteo | `print(h$counts)` |
| compara | `print(as.vector(table(cut(precios, breaks = c(0, 20, 40, 60, 80)))))` |
| limites | `print(c(usr_barras[3:4], usr_linea[3:4]))` |

```r
precios <- c(12, 15, 18, 25, 27, 31, 33, 36, 38, 45, 52, 71)
unidades <- c(40, 38, 35, 30, 28, 26, 22, 25, 20, 15, 12, 5)
categorias <- c("Clothing", "Home Goods", "Electronics")
conteos <- c(356, 335, 309)
meses <- c(1, 2, 3, 4, 5, 6)
ventas <- c(20, 24, 23, 28, 31, 35)

png("cuatro.png", width = 800, height = 600)
par(mfrow = c(2, 2))
h <- hist(precios, breaks = c(0, 20, 40, 60, 80), main = "¿Cómo se reparten los precios?")
plot(precios, unidades, main = "¿Precio y unidades van juntos?")
barplot(conteos, names.arg = categorias, main = "¿Qué categoría tiene más?")
usr_barras <- par("usr")
plot(meses, ventas, type = "o", main = "¿Cómo cambian las ventas?")
usr_linea <- par("usr")
invisible(dev.off())

print(h$counts)
print(as.vector(table(cut(precios, breaks = c(0, 20, 40, 60, 80)))))
print(c(usr_barras[3:4], usr_linea[3:4]))
```
Salida real:
```
[1] 3 6 2 1
[1] 3 6 2 1
[1]  -3.56 356.00  19.40  35.60
```
Detalle real de R: `barplot` pone el piso en −0.01 · 356 = −3.56 y el techo exactamente en la barra más alta (356), sin margen arriba
(usa `yaxs = "i"`); las barras empiezan en 0 igual que en matplotlib. `ajustar` solo existe en Python (en R los títulos van dentro de cada
llamada con `main =` y no hace falta reacomodar); en R los títulos están en la misma línea que el gráfico, por eso las líneas
`set_title` de Python comparten id con su gráfico.

### Foto de estado por línea ejecutada

Un solo `EV`. El visual es la figura de 2 × 2; cada evento enciende un Axes. Números para dibujar cada Axes (Python a la izquierda, R a la
derecha de cada celda):

| # | id | qué aparece | límites y ticks (Python / R) |
|---|---|---|---|
| 1 | imp | nada (solo Python) | - |
| 2 | datos | las seis listas en los chips | - |
| 3 | figura | hoja de 8 × 6 pulgadas con 4 Axes vacíos (Python); en R, hoja de 800 × 600 px dividida en 4 regiones vacías, todavía sin ejes | Python: cada Axes 0 a 1 |
| 4 | distribucion | histograma: barras 3, 6, 2, 1 sobre 0-20, 20-40, 40-60, 60-80; título | Py: x −4 a 84 (ticks 0, 20, 40, 60, 80), y 0 a 6.3 (0 a 6) / R: usr −3.2 83.2 −0.24 6.24, ticks x 0 a 80 de 20 en 20, y 0 a 6 |
| 5 | relacion | 12 puntos que bajan; título | Py: x 9.05 a 73.95 (20, 40, 60), y 3.25 a 41.75 (10, 20, 30, 40) / R: usr 9.64 73.36 3.6 41.4, ticks x 10 a 70 de 10 en 10, y 5 a 40 de 5 en 5 |
| 6 | comparacion | tres barras 356, 335, 309 con sus nombres; título | Py: barras en x = 0, 1, 2 (x −0.54 a 2.54), y 0 a 373.8 (0, 100, 200, 300) / R: centros 0.7, 1.9, 3.1, usr y −3.56 a 356, ticks 0 a 350 de 50 en 50 |
| 7 | evolucion | línea con marcadores de 20 a 35; título | Py: x 0.75 a 6.25 (1 a 6), y 19.25 a 35.75 (20, 22.5, ..., 35) / R: usr 0.8 6.2 19.4 35.6, ticks x 1 a 6, y 20, 25, 30, 35 |
| 8 | ajustar | Python reacomoda los márgenes para que los títulos no se pisen (solo Python) | - |
| 9 | guardar | se escribe `cuatro.png` | - |
| 10 | conteo | salida `[3. 6. 2. 1.]` / `[1] 3 6 2 1` | - |
| 11 | compara | salida `[3 6 2 1]` / `[1] 3 6 2 1`: la librería cuenta igual | - |
| 12 | limites | salida `0.0 373.8 19.25 35.75` / `[1]  -3.56 356.00  19.40  35.60`: las barras desde 0, la línea no | - |

Posiciones de los Axes en Python antes de `tight_layout` (fracciones de la figura, `[x0, y0, ancho, alto]`): `axs[0, 0]` [0.125, 0.53,
0.3523, 0.35], `axs[0, 1]` [0.5477, 0.53, 0.3523, 0.35], `axs[1, 0]` [0.125, 0.11, 0.3523, 0.35], `axs[1, 1]` [0.5477, 0.11, 0.3523, 0.35]
(verificadas). Después de `tight_layout` se reparten mejor; el SVG puede usar una rejilla 2 × 2 con márgenes propios.

Fases (`#vrFases`): 1 datos (1-2), 2 la hoja (3), 3 una pregunta por Axes (4-7), 4 guardar (8-9), 5 comprobar (10-12).

### Predicción antes de reproducir (`#vrPred`)
"Los cuatro gráficos tienen eje y. ¿Cuáles empiezan en 0 sin que nadie lo pida?" Opciones: los cuatro; solo las barras y el histograma;
solo las barras; ninguno. Correcta: "solo las barras y el histograma" (los dos son barras: el histograma va de 0 a 6.3 y las barras de 0 a
373.8; la dispersión empieza en 3.25 y la línea en 19.25). Distractores: "los cuatro" (los demás llevan margen del 5 % alrededor de los
datos); "solo las barras" (el histograma también dibuja barras); "ninguno".

### Trampas reales (retos `codigo1`..`codigo3`)

**codigo1: el eje truncado** (paso 6).
```python
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt

categorias = ["Clothing", "Home Goods", "Electronics"]
conteos = [356, 335, 309]
fig, ax = plt.subplots()
ax.bar(categorias, conteos)
ax.set_ylim(300, 360)
abajo, arriba = ax.get_ylim()
alturas = [c - abajo for c in conteos]
print(*alturas)
print(round(alturas[0] / alturas[2], 2), round(conteos[0] / conteos[2], 2))
```
Salida real: `56.0 35.0 9.0` y `6.22 1.15`.
En R: `barplot(conteos, names.arg = categorias, ylim = c(300, 360))` deja `par("usr")` en 0.064 3.736 300 360 con ticks 300 a 360 de 10 en
10, y las barras **se salen por debajo del eje** (verificado mirando el PNG); con `xpd = FALSE` se recortan. Pregunta: "¿Cuántas veces
más grande se ve Clothing y cuántas lo es?" Correcta: 6.22 y 1.15.

**codigo2: el pastel que cuenta 308** (celda 106 del cuaderno).
```python
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt

conteos = [356, 335, 309]
etiquetas = ["Clothing", "Home Goods", "Electronics"]
formato = lambda p: f"{p:.1f}% ({int(p * sum(conteos) / 100)})"
textos = plt.pie(conteos, labels=etiquetas, autopct=formato, startangle=140)[2]
print([t.get_text() for t in textos])
```
Salida real: `['35.6% (356)', '33.5% (335)', '30.9% (308)']`. La imagen guardada del cuaderno (celda 106) muestra el mismo "30.9% (308)".
Pregunta: "¿Por qué 308?" Correcta: "el porcentaje que matplotlib le pasa a la función vale un poquito menos que 30.9 en coma flotante, y
`int` corta los decimales en vez de redondear". Arreglo: `round(p * sum(conteos) / 100)`. Pista para "porque hay un producto repetido":
"suma los tres conteos de la tabla: dan 1000".
Con `round(...)` en lugar de `int(...)` la salida real es `['35.6% (356)', '33.5% (335)', '30.9% (309)']` (verificado).

**codigo3: la línea en el orden de las filas** (paso 5).
```python
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt

meses = [3, 1, 6, 2, 5, 4]
ventas = [23, 20, 35, 24, 31, 28]
fig, ax = plt.subplots()
linea, = ax.plot(meses, ventas)
print(*linea.get_xdata())
pares = sorted(zip(meses, ventas))
print(pares)
```
Salida real: `3 1 6 2 5 4` y `[(1, 20), (2, 24), (3, 23), (4, 28), (5, 31), (6, 35)]`.
En R: `o <- order(meses)`, `print(meses[o])`, `print(ventas[o])` da `[1] 1 2 3 4 5 6` y `[1] 20 24 23 28 31 35` (verificado);
`plot(meses, ventas, type = "l")` sin ordenar hace el mismo zigzag. Pregunta: "¿Qué hizo el cuaderno de clase para evitarlo?" Correcta:
"ordenar por fecha con `sort_values` antes de dibujar (celda 89)".

`p.vr-nota`: "Con pandas, el mismo tablero en cuatro líneas: `df['precio'].plot.hist()`, `df.plot.scatter(x='precio', y='unidades')`,
`s.plot.bar()`, `ventas.plot()`; en R con ggplot2, `geom_histogram`, `geom_point`, `geom_col` y `geom_line`." (Si la página muestra
salidas de esas líneas, correrlas antes; si no, solo nombrarlas.)
Sin profundizar vectorizado (no aplica).

## Retos (8 en la parte 3, más codigo1..3 y formula)

1. **`ojo-pregunta`**, ojo clínico (5 rondas, aprueba con 4). Generador: una pregunta al azar de un banco de 20, cada una con su tipo
   (ejemplos: "¿Cuál de las tres sucursales vendió más en marzo?" comparación; "¿Las notas de este examen tienen dos grupos?" distribución;
   "¿A más horas de sueño, mejor nota?" relación; "¿Cómo evolucionó la temperatura este mes?" evolución; "¿Qué parte del presupuesto es
   vivienda, si son 2 rubros?" partes). Opciones: histograma, dispersión, barras, línea, pastel. Las preguntas son inventadas, no
   copiadas de libros.
2. **`ojo-engana`**, ojo clínico (5 rondas). Generador: un gráfico de barras o de línea con datos al azar y, con probabilidad 1/2, un
   engaño (barras con eje desde un valor cercano al mínimo; línea con filas desordenadas; pastel con 7 u 8 porciones parecidas; barras
   desordenadas). Pregunta: "¿Este gráfico engaña? ¿Por qué?", opciones: no engaña, eje truncado, orden de las filas, demasiadas porciones.
3. **`construir-tablero`**, construir. Cuatro tarjetas-pregunta nuevas (sobre una tabla de estudiantes inventada: horas de estudio, nota,
   carrera, mes de inscripción) y la fila de botones de gráfico. Objetivo: asignar a cada pregunta el gráfico que la contesta; cada
   asignación dibuja el gráfico en el lienzo. Se cumple cuando las cuatro están bien y, en la de comparación, el eje empieza en 0 (hay un
   control "eje y desde" que Francisco debe dejar en 0).
4. **`mano-aparente`**, a mano (reintentable). Generador: dos conteos al azar entre 200 y 400 (el mayor al menos 5 % más grande) y un inicio
   de eje al azar por debajo del menor. "¿Cuántas veces más alta SE VE la barra mayor?" (2 decimales). Pistas: 1) "resta el inicio del eje a
   cada altura"; 2) "divide"; 3) la cuenta.
5. **`mano-histograma`**, a mano. Generador: 10 enteros al azar de 1 a 59 que no caen en 20 ni en 40, bordes 0, 20, 40, 60. "Escribe las tres
   alturas." Pistas: 1) "cuenta los de 0 a 19"; 2) los números de cada tramo se iluminan; 3) la solución. Al terminar, enlace a "Histograma
   y densidad" para la regla de los bordes.
6. **`cazar-grafico`**, cazar el error (3 variantes, marcar la línea mal):
   - a) Un programa que quiere "comparar cuántos productos hay por categoría" y escribe `ax.plot(categorias, conteos)`. Línea mal: `plot`
     (une categorías como si fueran tiempo); arreglo `ax.bar`.
   - b) Barras correctas pero con `ax.set_ylim(300, 360)` y el título "Clothing triplica a Electronics". Línea mal: `set_ylim`.
   - c) La etiqueta del pastel de la celda 106: `autopct=lambda p: f'{p:.1f}% ({int(p * sum(conteo_categorias) / 100)})'`. Línea mal: el
     `int(...)`; arreglo `round(...)`.
7. **`prop-pastel`**, propiedades (opción múltiple, `mezclar: true`, reintentable): "¿Cuándo es razonable un pastel?"
   Correcta: "cuando son partes de un todo, pocas porciones y bien distintas". Distractores y pistas: "siempre que los datos sumen 100 %"
   -> "los 8 rubros del hogar suman 100 y el pastel no deja comparar Transporte con Ocio"; "cuando hay muchas categorías, porque entran todas
   en el círculo" -> "más porciones, ángulos más parecidos: peor"; "para mostrar una evolución en el tiempo" -> "el pastel no tiene eje de
   tiempo; para eso, línea".
8. **`prop-cero`**, propiedades (opción múltiple, `mezclar: true`): "¿Qué gráfico tiene que empezar en cero para no engañar?"
   Correcta: "el de barras, porque se comparan largos". Distractores y pistas: "el de línea" -> "en una línea se comparan posiciones y
   pendientes; matplotlib la deja empezar en 19.25 y está bien"; "el de dispersión" -> "se miran formas de la nube, no largos"; "todos" ->
   "con la dispersión de precio y unidades, empezar en 0 no agrega nada".

Lecturas de inspiración (citar, no copiar): hoja de matplotlib p.1, "Ten simple rules" (las diez reglas, para diseñar las rondas de
`ojo-engana`); ejercicios del documento de la UD6 (`enunciados ejercicios st_hospital.R`: barras de `alignment` por `fuma`, dispersión
coloreada) como modelo de preguntas reales.

## Memoria

`B.ordenar` (armar la regla de decisión, de la pregunta al gráfico; cada pieza es una línea "pregunta -> gráfico" y se ordenan como en la
tabla del paso 7):
1. `una variable numérica, cómo se reparte -> histograma o caja`
2. `dos variables numéricas, si van juntas -> dispersión`
3. `categorías, cuál tiene más -> barras desde cero`
4. `tiempo, cómo cambia -> línea en orden`
5. `partes de un todo, 2 o 3 porciones -> pastel o barra apilada`
Distractores: `categorías, cuál tiene más -> línea`, `tiempo, cómo cambia -> pastel`, `dos variables, si van juntas -> dos histogramas`.
Se registra como reto `formula`.

Tarjetas (8):
1. ¿Qué va primero, el gráfico o la pregunta? -> La pregunta: distribución, relación, comparación, evolución o partes de un todo.
2. ¿Qué gráfico para ver cómo se reparte una variable? -> Histograma (forma) o caja (cinco números, buena para comparar grupos).
3. ¿Por qué dispersión y no dos histogramas para una relación? -> Porque la dispersión conserva la pareja de cada fila; los histogramas la pierden.
4. ¿Por qué las barras empiezan en cero? -> Porque el ojo compara largos; un eje truncado multiplica las diferencias (356 frente a 309 se ve 6.2 veces).
5. ¿Qué hace `ax.plot` con filas desordenadas? -> Une los puntos en el orden de las filas: zigzag. Ordena por tiempo antes.
6. ¿Cuándo sirve un pastel? -> Con 2 o 3 porciones bien distintas de un todo. Con muchas o parecidas, barras ordenadas.
7. ¿Qué compara mejor el ojo? -> Posiciones sobre una escala común y largos; peor ángulos, áreas y colores.
8. ¿Qué hace `ggpairs`? -> Elige solo el gráfico de cada par de variables según su tipo: barras, densidad o dispersión.

## Citas (13)

| id de fuente | pág. PDF (o ancla) | pág. impresa | sección | qué hay | cuándo leerla |
|---|---|---|---|---|---|
| eda6 | 3 | 3 | 1. Introducción | el EDA sirve para que los datos sean "adecuados para responder nuestras preguntas" | Paso 1 |
| hojamatplotlib | 1 | 1 | Ten simple rules | las diez reglas: identificar el mensaje (2), no confiar en los valores por defecto (5), no engañar al lector (7) | Pasos 1 y 6 |
| eda6 | 13 | 13 | Variabilidad de una variable | gráficos exploratorios frente a gráficos de presentación (cita a Peng); `hist(airquality$Temp)` y `breaks = 25` | Paso 2 |
| eda6 | 16 | 16 | Diagramas de caja y gráficos de barras | `boxplot(mpg ~ cyl)` y `barplot(table(mtcars$cyl))` | Pasos 2 y 4 |
| eda6 | 17 | 17 | Gráficos de barras por proporciones | `barplot(prop.table(table(mtcars$cyl)))` | Paso 4 |
| eda5 | 28 | 28 | Un histograma (ggplot2) | `geom_histogram()` con las 30 barras por defecto | Paso 2 |
| eda5 | 31 | 31 | Un boxplot (ggplot2) | `geom_boxplot()` con `x = factor(cyl)`; la caja de 5 cilindros sale plana por falta de datos | Profundizar del paso 2 |
| eda5doc | ancla `gráficos-de-dispersión` | - | Gráficos de dispersión | dispersión de `insurance` con recta por grupo | Paso 3 |
| eda6doc | ancla `gráficos-masivos-cruzados` | - | Gráficos masivos cruzados | `ggpairs()` autodetecta el gráfico de cada variable y de cada par | Pasos 3 y 7 |
| eda5doc | ancla `datos-agregados-y-desagregados` | - | Datos agregados y desagregados | conteos por región (324, 325, 364, 325) y por qué cambia la forma de hacer barras | Paso 4 |
| hojamatplotlib | 1 | 1 | Basic plots | `plot`, `scatter`, `bar`, `hist`, `pie`, `boxplot` y sus argumentos | Pasos 5 y 7 |
| eda6 | 37 | 37 | 6. Conclusiones | el análisis gráfico del EDA es de análisis interno, no de presentación de resultados | Paso 7 |
| hojamatplotlib | 2 | 2 | How do I ... | rotar las etiquetas de los ticks (`tick_params(axis="x", rotation=90)`), útil con nombres de categoría largos | Reto `construir-tablero` |

Verificado: eda6 p.3, 13, 16, 17 y 37 con `pdftotext -layout`; eda5 p.28 y 31 con `pdftotext`; hojamatplotlib p.1 ("Ten simple rules" con
las diez reglas, "Basic plots" con `hist`, `pie`, `bar[h]`, `scatter`, `plot`, `boxplot`) y p.2 ("How do I ... rotate tick labels")
con `pdftotext`. Anclas: eda5doc `gráficos-de-dispersión` y `datos-agregados-y-desagregados` (grep de `id=` en `Unidad 5 - EDA I.html`),
eda6doc `gráficos-masivos-cruzados` (grep en `Unidad 6 - EDA II.html`).

Sin chip (no registrado; se nombra en el texto con su celda): cuaderno `UAX_20251105.ipynb` de UD1:
- celda 89: `ordenes.sort_values(by='OrderDate')` antes de dibujar (paso 5, `codigo3`);
- celdas 96 y 97: la misma media mensual como línea y como barras de ancho 20 (paso 5);
- celdas 99-103: dispersión de `UnitPrice` frente a `UnitsInStock`, con `alpha=0.3` y luego por categoría (paso 3);
- celda 104: `value_counts()` con Clothing 356, Home Goods 335, Electronics 309 (pasos 4, 6 y 7);
- celdas 105 y 106: el pastel de tres porciones casi iguales; en la 106 la etiqueta "30.9% (308)" (paso 7, `codigo2`);
- celda 107: histograma de `UnitPrice` con `bins=40`; celda 109: caja de `UnitPrice` por categoría (paso 2).

## Riesgos y notas para quien construye

- UD2 (donde iría matplotlib) no está publicada; el material de "qué gráfico elegir" es escaso: la hoja de matplotlib (reglas), la UD6
  (gráficos de R base por tipo) y los cuadernos. La jerarquía de percepción (posición, largo, ángulo, área, color) no viene en el material:
  decirlo.
- No repetir las páginas de histograma y de percentiles: los datos de esta página evitan a propósito valores en los bordes de los
  intervalos (la trampa de bordes abiertos y cerrados ya está en "Histograma y densidad").
- Los conteos 356, 335 y 309 son reales del cuaderno; el resto de los datos es inventado. La página lo declara.
- `codigo2` depende de la coma flotante de matplotlib 3.10.0 en esta máquina y coincide con la imagen guardada del cuaderno; no
  "corregir" la salida.
- Las barras de R con `ylim` truncado se salen del área (`xpd = TRUE` por defecto): si el SVG lo reproduce, debe dibujarlas por debajo del
  eje como en el PNG real, no recortarlas.
- En R, `barplot` ordena por la posición del vector (aquí el orden dado); `barplot(table(x))` ordenaría alfabéticamente. No confundir en el
  texto.
- El motor usa un solo `EV`: `imp` y `ajustar` existen solo en Python; en R esos eventos no iluminan línea y la narración lo explica.
- Los títulos con "¿" y tildes se escriben bien en los dos lenguajes (UTF-8); en R el dispositivo `png` de esta máquina los dibuja sin
  problema (verificado al correr).
- El deslizador del paso 6 solo admite los seis valores de la tabla (ticks verificados).
