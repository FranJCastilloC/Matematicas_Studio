# Especificacion: Gramática de gráficos (gramatica-graficos)

- Ruta: `tidyverse` (grupo Programación con datos), orden 6, tanda 9; también en `matplotlib`, orden 2 (`tambien: [{ unidad: "matplotlib", orden: 2 }]`)
- Archivo: `biblioteca/conceptos/gramatica-graficos.html`
- Prerrequisitos: ["El pipe: verbos encadenados"]
- Siguientes: []
- Aparece: [{ materia: "SM142002", ud: "UD5" }, { materia: "SM142002", ud: "UD6" }]
- Resumen del catálogo: "Un gráfico como capas: datos, estética, geometría y escala."
- Fuente declarada: Programación y entorno de trabajo (SM142002), UD1, UD4 y UD5
- Nota: "El pipe: verbos encadenados" también es de la tanda 9; si no está listo cuando se integre, sale sin enlace (lo hace el núcleo).
  La página puede mencionar "Anatomía de una figura" y "Elegir el gráfico según la pregunta" en el texto (son de la misma tanda), pero
  las conexiones salen solo del catálogo.

## Imagen central

**El gráfico de transparencias.** El escenario es un gráfico de ggplot2 dibujado en SVG, armado como una pila de láminas transparentes.
A la derecha (debajo a 375 px) hay una **columna de capas**, una fila por componente de la gramática, cada una con su interruptor y la
línea de código que la agrega:

| capa | código | qué pinta |
|---|---|---|
| datos | `ggplot(datos, ...)` | la tabla de 8 filas, en miniatura al lado del gráfico |
| estética | `aes(x = horas, y = nota)` | los ejes con sus escalas (el "lienzo") |
| geometría 1 | `+ geom_point(size = 3)` | los 8 puntos |
| estética de color | `+ aes(color = grupo)` | colorea los puntos y agrega la leyenda |
| geometría 2 | `+ geom_smooth(method = "lm", se = FALSE)` | una recta por grupo |
| escala | `+ scale_y_continuous(limits = c(0, 10))` | el eje y pasa a ir de 0 a 10 |
| facetas | `+ facet_wrap(~ grupo)` | parte el gráfico en dos paneles |
| etiquetas | `+ labs(...)` | título y nombres de los ejes |
| tema | `+ theme_minimal()` | cambia el fondo gris por blanco |

Apagar una capa la quita y el gráfico se redibuja con los números reales de esa combinación (ver la tabla de estados). Cuando una capa
depende de otra (la recta sin puntos sí se puede; el color sin ninguna geometría no pinta nada), el interruptor lo muestra.

Otros controles según el paso:
- **Ranuras de estética** (paso 2 y 4): tres botones-ranura `x`, `y`, `color` y fichas con las columnas `horas`, `nota`, `grupo`. Se toca una
  ficha y luego una ranura (dos toques, sin arrastrar). Ejemplo: `grupo` en `color` colorea; `grupo` en `x` lo vuelve un eje de categorías.
- **Selector de geometría** (paso 3): puntos, línea (`geom_line`), recta ajustada (`geom_smooth`).
- **Casilla "límite superior"** (paso 5): 8, 9, 10, 12, 15 o 20, con la tabla real de rangos y cortes.
- **Selector de coordenadas** (paso 7): cartesianas, `coord_flip()`, `coord_polar(theta = "y")`.
- **Vista doble** (paso 8): el mismo gráfico con su código en ggplot2 y en matplotlib, lado a lado (uno debajo del otro a 375 px), con
  cada capa de ggplot unida por color a las líneas de Python que hacen lo mismo a mano.

Modos por paso: `capas`, `lienzo`, `geometria`, `color`, `escala`, `facetas`, `coordenadas`, `paralelo`.

Datos (inventados, declarados como tales): horas de estudio y nota de 8 estudiantes en dos grupos.

| horas | 1 | 2 | 3 | 4 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|---|---|
| nota | 3 | 5 | 6 | 8 | 2 | 3 | 5 | 6 |
| grupo | A | A | A | A | B | B | B | B |

Cuentas limpias: recta del grupo A `nota = 1.5 + 1.6 · horas`; grupo B `nota = −0.9 + 1.4 · horas`; todos juntos `nota = 1.75 + 1 · horas`
(verificado con `lm` en R y `np.polyfit` en Python).

Aspecto de ggplot2 4.0.3 que el SVG debe imitar: tema gris por defecto (panel `#EBEBEB`, rejilla blanca, sin borde); colores por defecto
de dos grupos `#F8766D` (A) y `#00BFC4` (B); con `theme_minimal()`, sin fondo y rejilla gris clara; leyenda a la derecha con título
`grupo`; en las facetas, una tira con el nombre del panel arriba (gris `#D9D9D9` con el tema por defecto, sin fondo con `theme_minimal`).

## Hipotesis inicial

"Tienes una tabla con las horas que estudiaron 8 personas, la nota que sacaron y su grupo. Quieres un gráfico donde cada persona sea un
punto, los grupos tengan colores distintos y cada grupo tenga su recta. Antes de ver código: ¿qué decisiones tienes que tomar para
dibujarlo? Haz una lista, en el orden en que las tomarías."
Se muestra de nuevo en el paso 8, cuando se comparan las decisiones de ggplot2 con las de matplotlib.

## Pasos (8)

### Paso 1. Un gráfico es una pila de láminas
- Idea: un gráfico se puede pensar como láminas transparentes apiladas: una con los ejes, otra con los puntos, otra con las rectas, otra
  con los títulos. Cada lámina se agrega o se quita sin rehacer las demás. Sin código.
- Escenario: modo `capas`. El gráfico final (sin facetas) con la columna de interruptores, pero rotulados en palabras: "ejes",
  "puntos", "rectas", "colores", "títulos". Antes del chequeo, el interruptor de "puntos" está bloqueado.
- Chequeo (predicción sin símbolos, opción múltiple): "Si quitas la lámina de los puntos y dejas todo lo demás, ¿qué ves?"
  Correcta: "los ejes, las dos rectas de colores y los títulos: las rectas no necesitan que los puntos estén dibujados, se calculan con
  la tabla". Después de responder, el interruptor se desbloquea y Francisco lo comprueba.
  Distractores: "nada, porque sin puntos no hay rectas" (la recta sale de los datos, no del dibujo de los puntos); "solo los ejes" (cada
  lámina es independiente); "los puntos en gris" (quitar no es descolorear).
- Cita: eda5doc `gráficos-con-ggplot2` (la "gramática de capas" con la imagen de seis capas: espacio, variables, geom, segunda geom,
  etiquetas, tema).

### Paso 2. Datos más estética: el lienzo
- Idea: `ggplot(datos, aes(x = horas, y = nota))` todavía no dibuja nada, pero ya decidió los ejes: dice qué tabla usar y qué columna va a
  cada eje. Eso es una **estética**: una correspondencia entre una columna y una propiedad visual (posición x, posición y, color, forma).
  Con solo eso, ggplot2 ya conoce los rangos: x de 0.8 a 5.2, y de 1.7 a 8.3, cortes x 1 a 5 y cortes y 2, 4, 6, 8 (verificado).
- Escenario: modo `lienzo`. Solo el panel gris con ejes y rejilla; las ranuras `x`, `y`, `color` con fichas. Si Francisco pone `nota`
  en `x` y `horas` en `y`, el lienzo se gira (x de 1.7 a 8.3).
- Chequeo (predicción antes de tocar, opción múltiple): "Corres solo `ggplot(datos, aes(x = horas, y = nota))`. ¿Qué aparece?"
  Correcta: "un panel con los ejes horas y nota ya numerados, sin ningún punto". Distractores: "un panel totalmente vacío, sin números"
  (la estética ya fijó las escalas); "los puntos, porque ya dijiste x e y" (falta decir con qué geometría); "un error por falta de
  geometría" (no hay error: la teoría de UD5 lo muestra en la p.19).
- Errata que la página menciona: la p.19 de la teoría de UD5 escribe el esqueleto como `ggplot(data = <DATOS>, mapeo = aes(<MAPEO>))`. El
  argumento real se llama `mapping`; si alguien escribe `mapeo =`, ggplot2 4.0.3 avisa
  "Arguments in `...` must be used. Problematic argument: mapeo = aes(x = horas, y = nota). Did you misspell an argument name?" y al
  agregar `geom_point()` falla con "`geom_point()` requires the following missing aesthetics: x and y" (verificado). Se usa en
  `cazar-gramatica` c.
- Citas: eda5 p.19 (la estructura mínima: datos, geometría y estética; el lienzo de `mpg`); eda5 p.20 ("Necesitamos una geometría o capa").

### Paso 3. La geometría decide qué forma toma cada fila
- Idea: con las mismas estéticas, la geometría decide el dibujo. `geom_point()` pone una marca por fila; `geom_line()` une las filas
  ordenadas por x; `geom_smooth(method = "lm")` no dibuja filas sino una recta calculada con todas ellas. Se pueden apilar varias
  geometrías, y todas heredan el `aes` del lienzo.
- Escenario: modo `geometria`. Selector puntos / línea / recta. Con "línea" se ve el zigzag real: `geom_line` une (1,3), (2,5), (2,2),
  (3,6), (3,3), (4,8), (4,5), (5,6) en ese orden (verificado con `layer_data`), porque todavía no sabe que hay dos grupos. Con "recta" se ve
  una sola recta de (1, 2.75) a (5, 6.75): `nota = 1.75 + 1 · horas` con los 8 puntos juntos.
- Chequeo (cálculo con datos en vivo, numérico): "Con la recta de todos los datos, `nota = 1.75 + 1 · horas`, ¿qué nota predice para 3.5
  horas?" Respuesta: 5.25. Pistas: 1) "reemplaza horas por 3.5"; 2) "1.75 + 3.5". La ordenada de la recta en x = 3.5 se oculta hasta resolver.
- Profundizar: "¿Por qué la línea hace zigzag?" `geom_line` agrupa por las estéticas discretas; sin `color = grupo` (o `group = grupo`)
  hay un solo grupo y une todo por orden de x. Cuando se agrega el color en el paso 4, se separa sola en dos líneas.
- Citas: eda5 p.20 (`+ geom_point()`); eda5doc `gráficos-básicos` (`geom_point() + geom_smooth(method = lm)` explicado línea por línea).

### Paso 4. Mapear o fijar: `aes(color = grupo)` frente a `color = "red"` (TRAMPA y DESTACADO)
- Idea: dentro de `aes()` se escribe una **columna** y ggplot2 inventa los colores y la leyenda (mapear). Fuera de `aes()`, como argumento de
  la geometría, se escribe un **valor** y todos los puntos quedan iguales (fijar). Al agregar `aes(color = grupo)`, la recta también se
  separa: ahora hay una por grupo (A: 3.1 a 7.9 entre x = 1 y 4; B: 1.9 a 6.1 entre x = 2 y 5).
- Escenario: modo `color`. Tres botones: `aes(color = grupo)` (salmón y turquesa, leyenda "grupo" con A y B),
  `geom_point(color = "red")` (8 puntos rojos, sin leyenda), `geom_point(aes(color = "red"))` (8 puntos **salmón** `#F8766D`, con una
  leyenda titulada "colour" y una sola entrada "red"). El tercer resultado queda tapado hasta resolver el destacado.
- `.destacado` (la confusión natural): "Escribes `geom_point(aes(color = "red"))`. ¿De qué color salen los puntos?" Predicción: "rojos",
  "salmón con una leyenda que dice red" o "error". Respuesta: salmón (`#F8766D`, verificado con `layer_data`). Dentro de `aes()`, `"red"`
  no es un color: es un valor de datos, una columna constante con la palabra "red"; ggplot2 le asigna el primer color de su paleta y lo
  pone en la leyenda. Captura real de ggplot2 4.0.3: leyenda con título "colour" y la entrada "red". Es el reto `codigo1`.
- Chequeo (elección con explicación): "Quieres que los puntos del grupo A y del B tengan colores distintos y que todos tengan borde
  negro. ¿Qué escribes?" Correcta: `geom_point(aes(fill = grupo), color = "black", shape = 21)` (lo que depende de los datos va dentro de
  `aes`, lo fijo va afuera). Distractores: `geom_point(aes(fill = grupo, color = "black"), shape = 21)` (el negro dentro de `aes` se
  vuelve una categoría y sale de otro color); `geom_point(fill = grupo, color = "black", shape = 21)` (fuera de `aes`, `grupo` no es una
  columna: da error de objeto no encontrado); `geom_point(color = grupo)` (mismo problema).
  Nota: la teoría de UD5 usa exactamente esta combinación en p.24-25 (`color = factor(cyl)` dentro de `aes` y `shape = 21, size = 4`
  fuera).
- Citas: eda5 p.21 (`color = class` dentro de `aes`); eda5 p.23 (`size = 3` fuera de `aes`, `shape = factor(cyl)` dentro); eda5doc
  `paletas` (`scale_color_manual` y compañía, para cambiar los colores mapeados).

### Paso 5. La escala traduce datos en posiciones y colores
- Idea: cada estética tiene una escala que decide el rango, los cortes y las etiquetas (y la paleta, en el caso del color). Por defecto
  ggplot2 agrega un 5 % a cada lado. `scale_y_continuous(limits = c(0, 10))` fija el rango de datos en 0 a 10, y el panel queda de −0.5 a
  10.5 con cortes 0, 2.5, 5, 7.5, 10 (verificado).
- Escenario: modo `escala`. Casilla "límite superior" con estos valores reales (límite inferior 0; ggplot2 4.0.3):

  | límite superior L | rango del panel | cortes |
  |---|---|---|
  | 8 | −0.4 a 8.4 | 0, 2, 4, 6, 8 |
  | 9 | −0.45 a 9.45 | 0, 2.5, 5, 7.5 |
  | 10 | −0.5 a 10.5 | 0, 2.5, 5, 7.5, 10 |
  | 12 | −0.6 a 12.6 | 0, 2.5, 5, 7.5, 10, 12.5 |
  | 15 | −0.75 a 15.75 | 0, 5, 10, 15 |
  | 20 | −1 a 21 | 0, 5, 10, 15, 20 |

  La cuenta en vivo: `rango = (0 − 0.05 · L, L + 0.05 · L)`. Con L = 12 el corte 12.5 queda fuera de los límites de datos pero dentro del
  panel ampliado, y se dibuja.
- Chequeo (cálculo con datos en vivo, numérico): "Con el límite que elegiste, ¿dónde termina el panel por arriba?" Respuesta: 1.05 · L
  (10.5 con el inicial). Errores típicos: responder L (olvida la expansión); 1.1 · L (aplica el 5 % dos veces).
- Profundizar: "Recortar no es acercar": `scale_y_continuous(limits = c(3, 10))` **borra** los datos fuera del rango antes de calcular, y la
  recta del grupo B se recalcula sin el punto (2, 2): pasa a ir de 3.17 a 6.17 con el aviso real
  "Removed 1 row containing non-finite outside the scale range (`stat_smooth()`)". `coord_cartesian(ylim = c(3, 10))` solo acerca la
  cámara y la recta sigue yendo de 1.9 a 6.1 (verificado). Es el reto `codigo2`.
- Citas: eda5doc `paletas` (escalas de color: `scale_color_manual`, `scale_fill_manual`, `scale_color_brewer`, `scale_color_gradient`);
  eda5doc `etiquetas-título-y-leyenda`.

### Paso 6. Facetas: el mismo gráfico partido por una columna
- Idea: `facet_wrap(~ grupo)` repite el gráfico una vez por cada valor de la columna, con las mismas escalas en todos los paneles para que
  se puedan comparar. Es agrupar (como `group_by` del pipe) pero en el dibujo.
- Escenario: modo `facetas`. Con la capa de facetas encendida: dos paneles, A y B, x de 0.8 a 5.2 en los dos (aunque A solo tiene horas 1
  a 4 y B horas 2 a 5), y de −0.5 a 10.5. Un selector cambia la fórmula: `~ grupo`, `~ horas`, `grupo ~ .`, `. ~ grupo`.
- Chequeo (predicción antes de tocar, numérico): "¿Cuántos paneles da `facet_wrap(~ horas)`?" Respuesta: 5 (horas toma los valores 1, 2,
  3, 4 y 5; verificado). Pistas: "un panel por cada valor distinto", "cuenta los valores distintos de horas, no las filas".
- Nota sobre el material: la teoría de UD5 usa `facet_grid(class ~ cyl)` (p.27): filas por `class`, columnas por `cyl`. El documento de
  la UD5 (`faceting`) llama "en vertical" a `facet_grid(. ~ smoker)`, que pone los paneles uno al lado del otro (las divisiones son
  verticales, los paneles quedan en fila); la página lo aclara para que no confunda.
- Citas: eda5 p.26-27 (filtrar dentro del `ggplot` con el pipe y `facet_grid(class ~ cyl)`); eda5doc `faceting` (`facet_grid(.~smoker)`,
  `facet_grid(smoker ~ .)`, `facet_grid(sex ~ smoker)`, `facet_wrap`).

### Paso 7. Coordenadas, etiquetas y tema
- Idea: las coordenadas deciden cómo se colocan las posiciones en el plano. `coord_flip()` cambia los ejes de lugar; `coord_polar(theta =
  "y")` enrolla el eje y en un círculo: una barra apilada se vuelve un gráfico de pastel. Las etiquetas (`labs`) y el tema (`theme_minimal`)
  no tocan los datos: solo la presentación.
- Escenario: modo `coordenadas`. Con datos de barras: la nota media por grupo, A = 5.5 y B = 4.0 (`stat_summary(fun = mean, geom =
  "bar")`, verificado). Selector cartesianas / `coord_flip()` / `coord_polar(theta = "y")`. Con `coord_flip()` las barras quedan acostadas
  y el eje numérico, ahora horizontal, va de −0.275 a 5.775 (verificado).
  Para el modo polar se usan los conteos reales de categorías de los cuadernos de clase (Clothing 356, Home Goods 335, Electronics 309)
  como barra apilada de altura 1000: en ggplot2 las categorías se ordenan alfabéticamente y quedan apiladas así (verificado con
  `layer_data`): Clothing 644 a 1000 (`#F8766D`), Electronics 335 a 644 (`#00BA38`), Home Goods 0 a 335 (`#619CFF`). En polar, cada tramo
  es una porción.
- Chequeo (elección con explicación): "En la gramática, un gráfico de pastel es..." Correcta: "una barra apilada en coordenadas
  polares". Distractores: "una geometría propia, `geom_pie`" (ggplot2 no la tiene); "un histograma redondo" (el histograma cuenta valores de
  una variable numérica); "un gráfico de dispersión con ángulos" (los puntos no son porciones).
- Citas: eda5 p.32 (`labs(title, subtitle, caption)`, `xlab`, `ylab`); eda5doc `gráficos-básicos` (`theme_classic()` y la idea de cambiar
  el tema al final).

### Paso 8. Lo que ggplot2 hace por ti: el mismo gráfico en matplotlib
- Idea (lo más técnico): matplotlib no tiene gramática; tiene objetos (Figure, Axes) a los que les pides cosas. El mismo gráfico exige
  escribir a mano lo que ggplot2 decide solo: la paleta (`colores = {...}`), un `for` por grupo, separar las filas de cada grupo, ajustar la
  recta con `np.polyfit`, crear los paneles **antes** de dibujar (`plt.subplots(1, 2, sharey=True)`), poner el título de cada panel y la
  leyenda. En ggplot2 las facetas se agregan al final; en matplotlib se deciden al principio.
- Escenario: modo `paralelo`. Los dos códigos de la vida real con colores por capa; tocar una capa de ggplot ilumina sus líneas en Python.
  Debajo, los números que coinciden: pendientes 1.6 y 1.4, ordenadas 1.5 y −0.9, y el eje x de 0.8 a 5.2 en los dos (los dos usan 5 % de
  margen). Lo que difiere: con `set_ylim(0, 10)` matplotlib no agrega margen (0 a 10, ticks 0, 2, ..., 10) y ggplot2 sí (−0.5 a 10.5,
  cortes 0, 2.5, ..., 10).
- Chequeo (elección con explicación, varias correctas): "¿Cuáles de estas cosas tuviste que escribir tú en matplotlib y ggplot2 hizo
  sola?" Correctas: elegir los colores; separar las filas de cada grupo; calcular la recta de cada grupo; crear un panel por grupo.
  Incorrecta: "leer la tabla de datos" (los dos la reciben). Se muestra la hipótesis inicial (`#citaHipo`) para comparar su lista con la
  de la gramática.
- Nota: el cuaderno de clase `UAX_20251105` hace exactamente esto en la celda 103: un `for categoria in category:` con una lista de
  colores y un contador `indice += 1`, un `plt.scatter` por categoría y `plt.legend(title='Categoría')`.
- Citas: hojamatplotlib p.1 (Quick start y Subplots layout); eda5 p.33 (conclusiones: ggplot2 "se basa en una gramática de los gráficos").

## Vida real (Python y R)

Mismos datos que el recorrido. En R, cada línea agrega una capa con `g <- g + ...` (para que cada capa sea una línea ejecutada); se cierra
comparando contra la forma idiomática de una sola expresión con `+` encadenados (`identical` de los datos de la capa). En Python se
construye lo mismo a mano con matplotlib y bucles explícitos; se cierra con las pendientes, que coinciden con `lm` de R.

### R (verificado, R 4.6.1, ggplot2 4.0.3)

| id | línea |
|---|---|
| imp | `library(ggplot2)` |
| (vacía) | |
| datos | `datos <- data.frame(` |
| datos | `  horas = c(1, 2, 3, 4, 2, 3, 4, 5),` |
| datos | `  nota = c(3, 5, 6, 8, 2, 3, 5, 6),` |
| datos | `  grupo = c("A", "A", "A", "A", "B", "B", "B", "B")` |
| datos | `)` |
| (vacía) | |
| lienzo | `g <- ggplot(datos, aes(x = horas, y = nota))` |
| puntos | `g <- g + geom_point(size = 3)` |
| color | `g <- g + aes(color = grupo)` |
| recta | `g <- g + geom_smooth(method = "lm", se = FALSE)` |
| escala | `g <- g + scale_y_continuous(limits = c(0, 10))` |
| facetas | `g <- g + facet_wrap(~ grupo)` |
| etiquetas | `g <- g + labs(title = "Horas de estudio y nota", x = "Horas", y = "Nota")` |
| tema | `g <- g + theme_minimal()` |
| guardar | `ggsave("notas.png", g, width = 6, height = 4)` |
| (vacía) | |
| contar | `print(length(g$layers))` |
| compara | `print(coef(lm(nota ~ horas, data = datos, subset = grupo == "A")))` |
| compara | `print(coef(lm(nota ~ horas, data = datos, subset = grupo == "B")))` |
| (vacía) | |
| compara | `g2 <- ggplot(datos, aes(horas, nota, color = grupo)) +` |
| compara | `  geom_point(size = 3) +` |
| compara | `  geom_smooth(method = "lm", se = FALSE) +` |
| compara | `  scale_y_continuous(limits = c(0, 10)) +` |
| compara | `  facet_wrap(~ grupo) +` |
| compara | `  labs(title = "Horas de estudio y nota", x = "Horas", y = "Nota") +` |
| compara | `  theme_minimal()` |
| compara | `print(identical(layer_data(g, 2), layer_data(g2, 2)))` |

```r
library(ggplot2)

datos <- data.frame(
  horas = c(1, 2, 3, 4, 2, 3, 4, 5),
  nota = c(3, 5, 6, 8, 2, 3, 5, 6),
  grupo = c("A", "A", "A", "A", "B", "B", "B", "B")
)

g <- ggplot(datos, aes(x = horas, y = nota))
g <- g + geom_point(size = 3)
g <- g + aes(color = grupo)
g <- g + geom_smooth(method = "lm", se = FALSE)
g <- g + scale_y_continuous(limits = c(0, 10))
g <- g + facet_wrap(~ grupo)
g <- g + labs(title = "Horas de estudio y nota", x = "Horas", y = "Nota")
g <- g + theme_minimal()
ggsave("notas.png", g, width = 6, height = 4)

print(length(g$layers))
print(coef(lm(nota ~ horas, data = datos, subset = grupo == "A")))
print(coef(lm(nota ~ horas, data = datos, subset = grupo == "B")))

g2 <- ggplot(datos, aes(horas, nota, color = grupo)) +
  geom_point(size = 3) +
  geom_smooth(method = "lm", se = FALSE) +
  scale_y_continuous(limits = c(0, 10)) +
  facet_wrap(~ grupo) +
  labs(title = "Horas de estudio y nota", x = "Horas", y = "Nota") +
  theme_minimal()
print(identical(layer_data(g, 2), layer_data(g2, 2)))
```
Salida real (Rscript; los mensajes de `geom_smooth` salen por la salida de errores, en inglés):
```
`geom_smooth()` using formula = 'y ~ x'
[1] 2
(Intercept)       horas 
        1.5         1.6 
(Intercept)       horas 
       -0.9         1.4 
`geom_smooth()` using formula = 'y ~ x'
`geom_smooth()` using formula = 'y ~ x'
[1] TRUE
```
El primer mensaje lo produce `ggsave` (es cuando de verdad se calcula la recta: hasta ahí `g` era solo una receta); los otros dos, cada
`layer_data`. Vale la pena narrarlo: **ggplot2 no dibuja nada mientras sumas capas**; todo se calcula al imprimir o guardar.

### Python (verificado, Python 3.13, NumPy 2.1.3, matplotlib 3.10.0)

| id | línea |
|---|---|
| imp | `import matplotlib` |
| imp | `matplotlib.use("Agg")` |
| imp | `import matplotlib.pyplot as plt` |
| imp | `import numpy as np` |
| (vacía) | |
| datos | `horas = [1, 2, 3, 4, 2, 3, 4, 5]` |
| datos | `nota = [3, 5, 6, 8, 2, 3, 5, 6]` |
| datos | `grupo = ["A", "A", "A", "A", "B", "B", "B", "B"]` |
| color | `colores = {"A": "#F8766D", "B": "#00BFC4"}` |
| (vacía) | |
| lienzo | `fig, axs = plt.subplots(1, 2, sharex=True, sharey=True)` |
| facetas | `for i, g in enumerate(["A", "B"]):` |
| facetas | `    xs = [h for h, gr in zip(horas, grupo) if gr == g]` |
| facetas | `    ys = [n for n, gr in zip(nota, grupo) if gr == g]` |
| puntos | `    axs[i].scatter(xs, ys, color=colores[g])` |
| recta | `    m, c = np.polyfit(xs, ys, 1)` |
| recta | `    axs[i].plot([min(xs), max(xs)], [m * min(xs) + c, m * max(xs) + c], color=colores[g])` |
| facetas | `    axs[i].set_title(g)` |
| recta | `    print(g, round(m, 2), round(c, 2))` |
| escala | `axs[0].set_ylim(0, 10)` |
| etiquetas | `fig.suptitle("Horas de estudio y nota")` |
| etiquetas | `fig.supxlabel("Horas")` |
| etiquetas | `axs[0].set_ylabel("Nota")` |
| tema | `for ax in axs:` |
| tema | `    ax.grid(True)` |
| guardar | `fig.savefig("notas.png")` |
| (vacía) | |
| contar | `print(len(fig.axes), *axs[1].get_xlim(), *axs[1].get_ylim())` |

```python
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np

horas = [1, 2, 3, 4, 2, 3, 4, 5]
nota = [3, 5, 6, 8, 2, 3, 5, 6]
grupo = ["A", "A", "A", "A", "B", "B", "B", "B"]
colores = {"A": "#F8766D", "B": "#00BFC4"}

fig, axs = plt.subplots(1, 2, sharex=True, sharey=True)
for i, g in enumerate(["A", "B"]):
    xs = [h for h, gr in zip(horas, grupo) if gr == g]
    ys = [n for n, gr in zip(nota, grupo) if gr == g]
    axs[i].scatter(xs, ys, color=colores[g])
    m, c = np.polyfit(xs, ys, 1)
    axs[i].plot([min(xs), max(xs)], [m * min(xs) + c, m * max(xs) + c], color=colores[g])
    axs[i].set_title(g)
    print(g, round(m, 2), round(c, 2))
axs[0].set_ylim(0, 10)
fig.suptitle("Horas de estudio y nota")
fig.supxlabel("Horas")
axs[0].set_ylabel("Nota")
for ax in axs:
    ax.grid(True)
fig.savefig("notas.png")

print(len(fig.axes), *axs[1].get_xlim(), *axs[1].get_ylim())
```
Salida real:
```
A 1.6 1.5
B 1.4 -0.9
2 0.8 5.2 0.0 10.0
```

### Orden de eventos (un solo `EV`, por etapas de la gramática)

Los dos programas no se ejecutan en el mismo orden (Python decide los paneles y los colores al principio y repite el cuerpo del `for` dos
veces). Como el motor usa una sola lista de eventos, los eventos siguen las **etapas de la gramática**, una foto por etapa; en Python cada
evento ilumina todas las líneas con ese id, y la narración dice cuándo esa línea corre de verdad ("en Python esto corre dos veces, una por
grupo, dentro del `for`"; "en Python los colores ya estaban decididos desde la línea `colores = ...`"). El visual pinta el estado de ggplot2
en los dos lenguajes; en Python, los chips de variables muestran lo que existe en ese momento (`xs`, `ys`, `m`, `c` del último grupo).

| # | id | estado del gráfico (ggplot2) | Python (qué corre y qué imprime) |
|---|---|---|---|
| 1 | imp | nada | se cargan matplotlib y NumPy |
| 2 | datos | tabla de 8 filas | listas `horas`, `nota`, `grupo` |
| 3 | lienzo | panel gris, x 0.8 a 5.2 (cortes 1 a 5), y 1.7 a 8.3 (cortes 2, 4, 6, 8), ejes "horas" y "nota" | se crean 2 Axes vacíos (0 a 1) |
| 4 | puntos | 8 puntos negros, tamaño 3; rangos iguales | dos `scatter`, ya con color (Python no puede dibujar sin elegir uno) |
| 5 | color | puntos salmón (A) y turquesa (B); leyenda "grupo" a la derecha | la paleta del diccionario `colores` |
| 6 | recta | dos rectas: A de (1, 3.1) a (4, 7.9), B de (2, 1.9) a (5, 6.1); el eje y pasa a 1.595 a 8.305 (cortes 2, 4, 6, 8) | `polyfit` y `plot` por grupo; imprime `A 1.6 1.5` y `B 1.4 -0.9` |
| 7 | escala | y de −0.5 a 10.5, cortes 0, 2.5, 5, 7.5, 10 | `set_ylim(0, 10)`: y de 0 a 10 exacto, ticks 0, 2, ..., 10 (compartido) |
| 8 | facetas | dos paneles A y B con tira de título; mismas escalas en los dos | el `for` y `set_title`: en Python los paneles existían desde el evento 3 |
| 9 | etiquetas | título "Horas de estudio y nota"; ejes "Horas" y "Nota" | `suptitle`, `supxlabel`, `set_ylabel` |
| 10 | tema | fondo blanco y rejilla gris clara (`theme_minimal`) | rejilla en los dos Axes |
| 11 | guardar | se calcula y escribe `notas.png`; mensaje `` `geom_smooth()` using formula = 'y ~ x' `` | `savefig` |
| 12 | contar | salida `[1] 2` (dos capas: puntos y recta; la escala, las facetas, las etiquetas y el tema no son capas) | salida `2 0.8 5.2 0.0 10.0` |
| 13 | compara | salidas de `coef` (1.5, 1.6 y −0.9, 1.4), dos mensajes de `geom_smooth` y `[1] TRUE` | (sin línea; las pendientes ya salieron en el evento 6 y coinciden) |

Fases (`#vrFases`): 1 datos (1-2), 2 lienzo y geometrías (3-6), 3 escala y facetas (7-8), 4 presentación (9-10), 5 guardar y comprobar
(11-13).

### Predicción antes de reproducir (`#vrPred`)
"El programa de R suma ocho cosas con `+` (dos geometrías, una estética extra, una escala, facetas, etiquetas y tema). ¿Qué número imprime
`length(g$layers)`?" Respuesta: 2. Solo las geometrías (con su estadística) son capas; lo demás modifica el gráfico pero no agrega láminas
de datos. Distractores: 8 (cuenta cada `+`), 9 (cuenta también el `ggplot` inicial), 3 (cuenta la estética de color como capa).

### Trampas reales (retos `codigo1`..`codigo3`)

Archivo de prueba común (R):
```r
library(ggplot2)
datos <- data.frame(horas = c(1, 2, 3, 4, 2, 3, 4, 5), nota = c(3, 5, 6, 8, 2, 3, 5, 6), grupo = c("A", "A", "A", "A", "B", "B", "B", "B"))
```

**codigo1: el color dentro de `aes()`** (es el destacado del paso 4).
```r
p1 <- ggplot(datos, aes(horas, nota)) + geom_point(aes(color = "red"))
p2 <- ggplot(datos, aes(horas, nota)) + geom_point(color = "red")
print(unique(layer_data(p1)$colour))
print(unique(layer_data(p2)$colour))
```
Salida real: `[1] "#F8766D"` y `[1] "red"`. Pregunta: "¿Por qué `p1` no es rojo?" Correcta: "dentro de `aes()` 'red' es un dato, una
categoría, y ggplot2 le da el primer color de su paleta". Pista para "porque ggplot2 no conoce el nombre red": "`p2` usa el mismo nombre y
sale rojo". El paralelo en Python (verificado): `ax.scatter(horas, nota, c=grupo)` falla con
`ValueError: 'c' argument must be a color, a sequence of colors, or a sequence of numbers, not ['A', 'A', 'A', 'A', 'B', 'B', 'B', 'B']`:
matplotlib no mapea categorías a colores; hay que hacerlo a mano.

**codigo2: `limits` borra datos, `coord_cartesian` solo acerca.**
```r
p3 <- ggplot(datos, aes(horas, nota, color = grupo)) + geom_smooth(method = "lm", se = FALSE) + scale_y_continuous(limits = c(3, 10))
p4 <- ggplot(datos, aes(horas, nota, color = grupo)) + geom_smooth(method = "lm", se = FALSE) + coord_cartesian(ylim = c(3, 10))
d3 <- layer_data(p3)
d4 <- layer_data(p4)
print(range(d3$y[d3$group == 2]))
print(range(d4$y[d4$group == 2]))
```
Salida real:
```
`geom_smooth()` using formula = 'y ~ x'
Warning message:
Removed 1 row containing non-finite outside the scale range (`stat_smooth()`). 
`geom_smooth()` using formula = 'y ~ x'
[1] 3.166667 6.166667
[1] 1.9 6.1
```
Pregunta: "¿Por qué cambió la recta del grupo B?" Correcta: "con `limits` el punto (2, 2) queda fuera, se convierte en NA y la recta se
calcula sin él". En matplotlib, `set_ylim` siempre se comporta como `coord_cartesian`: solo cambia la vista.

**codigo3: `stat = "identity"` suma, no promedia** (errata del documento de UD5, sección `la-gráfica-de-barras`).
```r
p5 <- ggplot(datos, aes(grupo, nota)) + geom_bar(stat = "identity")
p6 <- ggplot(datos, aes(grupo, nota)) + stat_summary(fun = mean, geom = "bar")
print(tapply(layer_data(p5)$ymax, layer_data(p5)$x, max))
print(layer_data(p6)$y)
```
Salida real:
```
 1  2 
22 16 
[1] 5.5 4.0
```
Con datos crudos (una fila por persona), `geom_bar(stat = "identity")` apila un rectángulo por fila: la barra mide la **suma** (A: 3 + 5
+ 6 + 8 = 22). El documento de UD5 rotula así un gráfico como "Media de gastos"; lo correcto es `stat_summary(fun = mean, geom = "bar")`
o resumir antes con `group_by` y `summarise`. Paralelo en Python (verificado):
```python
fig, ax = plt.subplots()
barras = ax.bar(grupo, nota)
print(len(barras), *[b.get_height() for b in barras])
print(*ax.get_ylim())
```
Salida real: `8 3 5 6 8 2 3 5 6` y `0.0 8.4`: matplotlib dibuja 8 barras **encimadas**, y lo que se ve es la más alta de cada grupo (8 y 6).
Tres programas, tres alturas: suma 22 y 16, máximo 8 y 6, media 5.5 y 4.0.

`p.vr-nota`: "En una sola expresión: `ggplot(datos, aes(horas, nota, color = grupo)) + geom_point() + geom_smooth(method = "lm") +
facet_wrap(~ grupo)`. En Python, seaborn trae algo parecido (`sns.lmplot(..., hue=..., col=...)`), pero no viene en el material de la materia."
(Si se nombra seaborn, no mostrar salida: no se corrió.)
Sin profundizar vectorizado. En su lugar un `details.profundizar` "La receta no es el dibujo": `g` es un objeto que guarda las capas; se
puede inspeccionar con `g$layers` o `class(g)` y solo se dibuja al imprimir o guardar. Si se muestran salidas, correrlas antes.

## Retos (8 en la parte 3, más codigo1..3 y formula)

1. **`ojo-capa`**, ojo clínico (5 rondas, aprueba con 4). Generador: dos gráficos SVG casi iguales construidos con los datos del recorrido
   y una diferencia al azar entre: una capa de más (`geom_smooth`), color mapeado frente a fijo, facetas, escala con `limits = c(0, 10)`,
   tema gris frente a minimal, `coord_flip`. Pregunta: "¿Qué línea de código separa el gráfico A del B?", cuatro opciones de código.
2. **`ojo-dentro`**, ojo clínico (5 rondas). Generador: un gráfico con puntos y una de estas líneas al azar: `geom_point(color = "blue")`,
   `geom_point(aes(color = "blue"))`, `geom_point(aes(color = grupo))`, `geom_point(size = 4)`, `geom_point(aes(size = nota))`. Se muestra
   el gráfico y se pregunta "¿Tiene leyenda?" y "¿De qué depende el color/tamaño: de los datos o de nada?". Respuestas: hay leyenda solo
   cuando hay algo dentro de `aes()` más allá de x e y.
3. **`construir-capas`**, construir. Francisco arma el gráfico con botones de capa (en cualquier orden, cada botón agrega su línea
   `g <- g + ...` a un panel de código). Objetivos: a) puntos coloreados por grupo con leyenda; b) una recta por grupo; c) eje y de 0 a 10;
   d) un panel por grupo; e) título "Horas de estudio y nota". Bonus: lograrlo con exactamente 2 capas (`length(g$layers)` = 2).
   Las capas trampa disponibles (`geom_point(aes(color = "red"))`, `scale_y_continuous(limits = c(3, 10))`) hacen fallar un objetivo y el
   panel dice cuál.
4. **`mano-rango`**, a mano (reintentable). Generador: una lista de 5 a 8 enteros al azar entre 0 y 50 (columna y) sin `limits`.
   "¿Entre qué valores va el panel en y?" Dos casillas (tolerancia 0.01). Respuesta: mín − 0.05 · (máx − mín) y máx + 0.05 · (máx − mín).
   Pistas: 1) "busca mínimo y máximo"; 2) "el 5 % del rango, a cada lado"; 3) la cuenta.
5. **`mano-recta`**, a mano. Generador: 4 puntos al azar sobre una recta entera (`y = a + b·x`, a y b enteros de −3 a 3, x de 1 a 4) más un
   desvío de ±1 en dos de ellos con suma cero, para que la pendiente de `lm` siga siendo limpia; se calcula la recta con mínimos cuadrados
   en JavaScript y se redondea a 2 decimales. "¿Qué valor da la recta de `geom_smooth(method = "lm")` en x = 2.5?" (el centro: la media
   de y). Pistas: 1) "la recta de mínimos cuadrados siempre pasa por el punto medio (media de x, media de y)"; 2) "la media de x es 2.5"; 3)
   la media de y. Antes de publicar el reto, comprobar 3 casos del generador contra `lm` en R.
6. **`cazar-gramatica`**, cazar el error (3 variantes, marcar la línea mal):
   - a) `ggplot(datos, aes(horas, nota)) + geom_point(aes(color = "red"))` en un programa cuyo comentario dice "todos los puntos en rojo".
     Línea mal: el `aes(color = "red")`.
   - b) `ggplot(datos, aes(grupo, nota)) + geom_bar(stat = "identity") + labs(y = "Nota media")`. Las barras suman (22 y 16), no promedian.
     Línea mal: `geom_bar(stat = "identity")`; arreglo `stat_summary(fun = mean, geom = "bar")`.
   - c) `ggplot(data = datos, mapeo = aes(x = horas, y = nota)) + geom_point()`, copiado del esqueleto de la p.19 de la teoría de UD5.
     Error real: "`geom_point()` requires the following missing aesthetics: x and y". Línea mal: `mapeo =`; arreglo `mapping =` (o sin
     nombre, `aes(...)` como segundo argumento).
7. **`prop-capas`**, propiedades (opción múltiple, `mezclar: true`, reintentable): "¿Qué afirmación es cierta sobre `+` en ggplot2?"
   Correcta: "cada `+` agrega o modifica una parte de la receta, y nada se dibuja hasta imprimir o guardar el gráfico".
   Distractores y pistas: "cada `+` dibuja encima del gráfico anterior, como en matplotlib" -> "el mensaje de `geom_smooth` sale recién en
   `ggsave`: hasta ahí no se calculó nada"; "el orden de los `+` no importa nunca" -> "entre geometrías sí: la que se agrega después se
   dibuja encima"; "`+` y `|>` son lo mismo" -> "`|>` pasa datos de un verbo al siguiente; `+` suma partes a un gráfico".
8. **`prop-facetas`**, propiedades (opción múltiple, `mezclar: true`): "Haces `facet_wrap(~ grupo)` y el grupo A solo tiene horas de 1 a 4.
   ¿Hasta dónde llega el eje x del panel A?"
   Correcta: "hasta 5.2, igual que el B: las facetas comparten escalas por defecto". Distractores y pistas: "hasta 4.15" -> "eso sería con
   `scales = "free_x"`"; "hasta 4" -> "ggplot2 agrega un 5 % de margen"; "depende del tema" -> "el tema no toca las escalas".

Lecturas de inspiración (citar, no copiar): los ejercicios de ggplot2 de UD5 (`ejercicios ggplot2.pdf`, histograma de `Bwt`, boxplot por
sexo, barras con un color por categoría) para diseñar variantes del reto `construir-capas`.

## Memoria

`B.ordenar` (armar la receta en el orden de la gramática; piezas en orden):
1. `ggplot(datos, aes(x = horas, y = nota, color = grupo)) +`
2. `  geom_point(size = 3) +`
3. `  geom_smooth(method = "lm", se = FALSE) +`
4. `  scale_y_continuous(limits = c(0, 10)) +`
5. `  facet_wrap(~ grupo) +`
6. `  labs(title = "Horas de estudio y nota") +`
7. `  theme_minimal()`
Distractores: `  geom_point(aes(color = "red")) +`, `ggplot(datos) |> geom_point()`, `  facet_wrap(grupo) +`.
Se registra como reto `formula`. Nota: el orden entre 4, 5, 6 y 7 no cambia el resultado; el componente acepta cualquier orden de esas
cuatro piezas siempre que 1 vaya primero, 2 y 3 sigan, y no entre ningún distractor (si `B.ordenar` no admite órdenes alternativos,
fijar este orden y decir en el enunciado "en el orden de la gramática").

Tarjetas (8):
1. ¿Qué es una estética (`aes`)? -> La correspondencia entre una columna de los datos y una propiedad visual: posición x o y, color, forma, tamaño.
2. ¿Qué es una geometría? -> La forma que toma cada fila o cada resumen: punto, línea, barra, caja, recta ajustada.
3. ¿Mapear o fijar? -> Dentro de `aes()` va una columna (ggplot2 elige colores y pone leyenda); fuera, un valor fijo para todos.
4. ¿Qué hace una escala? -> Traduce datos a posiciones o colores: rango, cortes, etiquetas, paleta. Agrega un 5 % de margen por defecto.
5. ¿`limits` o `coord_cartesian`? -> `limits` borra los datos de fuera y recalcula; `coord_cartesian` solo acerca la vista.
6. ¿Qué hacen las facetas? -> Repiten el gráfico una vez por valor de una columna, con escalas compartidas.
7. ¿Qué es un pastel en la gramática? -> Una barra apilada en coordenadas polares (`coord_polar(theta = "y")`).
8. ¿Qué hace ggplot2 por ti que en matplotlib escribes a mano? -> Elegir colores, separar los grupos, ajustar la recta por grupo, crear los paneles y la leyenda.

## Citas (13)

| id de fuente | pág. PDF (o ancla) | pág. impresa | sección | qué hay | cuándo leerla |
|---|---|---|---|---|---|
| eda5doc | ancla `gráficos-con-ggplot2` | - | Gráficos con ggplot2 | la "gramática de capas" y la imagen de un gráfico de dispersión armado en seis capas | Paso 1 |
| eda5 | 19 | 19 | 5. Introducción a la visualización con ggplot2 | estructura mínima: datos, geometría y estética; `ggplot(mpg, aes(x = displ, y = hwy))` dibuja el lienzo (ver errata `mapeo`) | Paso 2 |
| eda5 | 20 | 20 | (sigue) | "Necesitamos una geometría o capa": `+ geom_point()` | Pasos 2 y 3 |
| eda5doc | ancla `gráficos-básicos` | - | Gráficos básicos | `geom_point() + geom_smooth(method = lm) + xlab + ylab + theme_classic()` explicado línea por línea, con la sugerencia de correrlo agregando una línea cada vez | Paso 3 |
| eda5 | 21 | 21 | (sigue) | `color = class` dentro de `aes()`: color mapeado a una variable | Paso 4 |
| eda5 | 23 | 23 | (sigue) | `shape = factor(cyl)` dentro de `aes()` y `size = 3` fuera, en la geometría | Paso 4 |
| eda5doc | ancla `paletas` | - | Paletas | `scale_color_manual`, `scale_fill_manual`, `scale_color_brewer`, gradientes | Paso 5 |
| eda5 | 27 | 27 | (sigue) | `facet_grid(class ~ cyl)` sobre `mpg` filtrado con el pipe (p.26) | Paso 6 |
| eda5doc | ancla `faceting` | - | Faceting | `facet_grid(. ~ smoker)`, `facet_grid(smoker ~ .)`, `facet_grid(sex ~ smoker)` y `facet_wrap` | Paso 6 |
| eda5 | 32 | 32 | (sigue) | `labs(title, subtitle, caption)`, `xlab`, `ylab` | Paso 7 |
| eda5doc | ancla `la-gráfica-de-barras` | - | La gráfica de barras | `stat = "identity"` con datos agregados frente al conteo automático con datos crudos; el último ejemplo rotula como media lo que es una suma | `codigo3` y `cazar-gramatica` b |
| eda5 | 33 | 33 | 6. Conclusiones | ggplot2 "se basa en una gramática de los gráficos" que hace sistemático agregar elementos | Paso 8 |
| hojamatplotlib | 1 | 1 | Quick start y Subplots layout | `fig, ax = plt.subplots()` y `plt.subplots(3, 3)`: en matplotlib los paneles se crean al principio | Paso 8 |

Verificado: eda5 p.18-33 leídas con `pdftotext` (p.19 esqueleto con `mapeo`, p.20 `geom_point`, p.21 `color = class`, p.23 `shape` y
`size = 3`, p.26-27 filtro y `facet_grid(class ~ cyl)`, p.32 `labs`, p.33 conclusiones). Anclas de eda5doc comprobadas con grep de
`id="..."` en `UD5. R/Unidad 5 - EDA I.html`: `gráficos-con-ggplot2`, `gráficos-básicos`, `paletas`, `faceting`,
`la-gráfica-de-barras`, `etiquetas-título-y-leyenda`, `datos-agregados-y-desagregados`. hojamatplotlib p.1 con `pdftotext -raw`.

Sin chip (no registrado; se nombra en el texto con su celda o archivo):
- Cuaderno `UAX_20251105.ipynb` de UD1, celda 103: el `for categoria in category:` con lista de colores, `indice += 1` y un `plt.scatter`
  por categoría (paso 8).
- `UD5. R/ejercicios ggplot2.pdf` (eda5ej, no registrado): seis ejercicios con `cats` y `mtcars`; solo como inspiración para retos.

## Riesgos y notas para quien construye

- El material oficial no tiene la teoría de la gramática (capas, estadísticas, escalas, coordenadas): solo el esqueleto de p.19 y la palabra
  "gramática" en p.5, p.33 y en el HTML. La página lo dice: estadísticas (`stat`), escalas y coordenadas se explican aquí sin material
  oficial detrás, salvo los ejemplos de barras y paletas del HTML.
- Erratas del material que la página menciona: `mapeo =` en el esqueleto de p.19 (el argumento es `mapping`); `install.packages(ggplot2)`
  sin comillas en p.18 falla (`object 'ggplot2' not found`, según el mapa de citas); `stat = "identity"` presentado como media en
  `la-gráfica-de-barras`; "en vertical" para `facet_grid(. ~ smoker)` en `faceting` (es ambiguo); `stat(density)` está obsoleto desde
  ggplot2 3.4.0 (`after_stat(density)`), en `histogramas`.
- ggplot2 4.0.3 cambió cosas visibles respecto del material: la leyenda de `aes(color = "red")` se titula "colour" (en versiones viejas
  salía el texto `"red"`); `g$labels` puede venir vacío antes de construir el gráfico (las etiquetas se resuelven al construir).
- Los mensajes de R salen en inglés y por la salida de errores (`geom_smooth() using formula = 'y ~ x'`, "Removed 1 row..."): mostrarlos
  tal cual y traducirlos al lado.
- El `EV` va por etapas, no por línea física (ver "Orden de eventos"). En Python el evento `recta` ilumina tres líneas (incluido el
  `print` dentro del bucle) y su salida aparece completa en ese evento; la narración aclara que salen una por vuelta del `for`.
- La comparación Python/R: pendientes y ordenadas coinciden exactamente (1.6 y 1.5, 1.4 y −0.9). Los límites del eje y NO coinciden a
  propósito (0 a 10 en matplotlib, −0.5 a 10.5 en ggplot2): la página lo muestra como diferencia, no como error.
- Los colores `#F8766D`, `#00BFC4` (2 grupos) y `#F8766D`, `#00BA38`, `#619CFF` (3 grupos) son los de la paleta por defecto de ggplot2;
  en modo oscuro conservarlos (son datos del gráfico) pero el fondo del panel gris debe usar un token del tema para no deslumbrar.
- La escala del paso 5 solo debe ofrecer los valores de la tabla (8, 9, 10, 12, 15, 20): los cortes salen de la tabla verificada, no de un
  algoritmo inventado en JavaScript.
