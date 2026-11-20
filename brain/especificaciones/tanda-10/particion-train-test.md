# Especificación: Partición de datos: train, test y fuga de datos (particion-train-test)

- Ruta: `decision-evaluacion`, orden 10; también `scikit-learn`, orden 2. En el catálogo figura con `tanda: 2` (esta especificación se escribió en la carpeta de la tanda 10, por encargo).
- Área: Aprendizaje automático. Fuente del catálogo: "SM142003 UD0 (diap. 18 a 21), Raschka cap. 6".
- Prerrequisitos: "Sesgo y varianza de un modelo".
- Siguientes: "Pipeline: el preprocesado dentro del modelo", "Un flujo de modelado reproducible en R", "Muestreo estratificado y desbalance de clases", "Ajuste de hiperparámetros y búsqueda en rejilla".
- Aparece: SM142003 UD0.
- Resumen del catálogo: "Por qué el test se usa una sola vez, y cómo se cuela información del test al entrenamiento."

**Foco y límites.** Esta página es la del **muro**: por qué se separa un trozo de los datos antes de mirar nada, cuánto se separa, cómo se baraja
(semilla), cuándo estratificar, por qué el test se mira una sola vez, y qué es la fuga de datos (con su caso más común, normalizar antes de partir,
y uno grave, elegir variables con todos los datos). NO desarrolla:
- la validación cruzada ni el bootstrap (página "Validación cruzada", que ya tiene un paso "Fuga de información": aquí se enlaza por título);
- el desbalance y el remuestreo (down/up-sampling, SMOTE): "Muestreo estratificado y desbalance de clases" (aquí solo la idea de estratificar);
- la fórmula del z-score y min-max: "Estandarización y normalización" (paso "Train y test"); aquí se usa la fórmula, no se explica de nuevo;
- el objeto `Pipeline` de scikit-learn y `recipes`/`tidymodels`: "Pipeline: el preprocesado dentro del modelo" y "Un flujo de modelado reproducible en R"
  (aquí se nombran en el paso 7 como "la herramienta que hace esto solo").

## Datos de toda la página (inventados, se dice en la página)

Diez estudiantes con las horas de estudio de la semana y si aprobaron el parcial. La lista viene **ordenada por horas** (como suele venir un
archivo exportado de una planilla), y eso importa en el paso 3.

| fila (py / R) | nombre | horas | aprobó |
|---|---|---|---|
| 0 / 1 | Ana | 2 | no |
| 1 / 2 | Beto | 4 | no |
| 2 / 3 | Cris | 4 | sí |
| 3 / 4 | Dani | 4 | no |
| 4 / 5 | Eva | 5 | no |
| 5 / 6 | Fede | 5 | sí |
| 6 / 7 | Gabi | 7 | sí |
| 7 / 8 | Hugo | 7 | no |
| 8 / 9 | Iván | 9 | sí |
| 9 / 10 | Julia | 13 | sí |

5 aprobados y 5 suspensos (50 %). Partición por defecto: 80/20 con la semilla **1673**, que deja en el test a **Hugo y Julia** en Python
(`np.random.RandomState(1673).permutation(10)` → `[7 9 0 4 1 3 6 8 2 5]`; `train_test_split(..., test_size=0.2, random_state=1673)` da el mismo test)
y también en R (`set.seed(1673); sample(10)` → `10 8 6 4 3 5 2 7 9 1`). La semilla se buscó a propósito para que los dos lenguajes coincidan:
de 20 000 semillas probadas, solo 11 lo logran (1673 es la primera). La página lo dice: es parte de la lección del paso 3.

Cuentas limpias (todas verificadas con NumPy, scikit-learn 1.6.1 y R 4.6.1):
- Entrenamiento (8): 2, 4, 4, 4, 5, 5, 7, 9 → suma 40, **media 5**, suma de cuadrados 32, **desviación 2** (dividiendo entre n = 8, como `StandardScaler`).
  Con n − 1 (como `sd` y `scale` de R): 2.13809.
- Los diez juntos: suma 60, **media 6**, suma de cuadrados 90, **desviación 3**.
- z del test con la media y la desviación del entrenamiento (lo correcto): Hugo (7 − 5)/2 = **1**, Julia (13 − 5)/2 = **4**.
- z del test con la media y la desviación de los diez (la fuga): Hugo (7 − 6)/3 = **0.333**, Julia (13 − 6)/3 = **2.333**.
- z del entrenamiento, correcto: Ana −1.5, Beto, Cris y Dani −0.5, Eva y Fede 0, Gabi 1, Iván 2. Con la fuga: Ana −1.333, Beto, Cris y Dani −0.667,
  Eva y Fede −0.333, Gabi 0.333, Iván 1. **Cambian también los z del entrenamiento**, aunque ningún dato del entrenamiento cambió.
- Sin barajar (las dos últimas filas al test): test Iván 9 y Julia 13 (media 11, los dos aprobados); entrenamiento 2, 4, 4, 4, 5, 5, 7, 7 (media 4.75).

## Imagen central

**Una fila de diez fichas con un muro movible, y una caja de "lo que aprende el modelo" con tubos que muestran de qué fichas bebe.**

- Diez fichas (nombre, horas, una marca sí/no en `--pos` / `--neg`) en una fila (dos filas de cinco en móvil).
- Un **muro** vertical que separa el entrenamiento (izquierda, fondo `--j`) del test (derecha, fondo `--k`, con un candado). El muro se mueve con
  botones 50/50, 60/40, 70/30, **80/20**, 90/10 (nada de arrastrar obligatorio; arrastrar puede ser un extra).
- Botón **Barajar** con un campo **semilla** (por defecto 1673) y un interruptor **"sin barajar"**. Barajar anima las fichas a su nuevo lugar. La página
  baraja con su propio generador en JS (no puede imitar el de NumPy ni el de R); para las semillas 1673 y 42 usa las particiones verificadas de la tabla
  de abajo y lo dice en una nota pequeña ("tu navegador baraja con su propio generador; 1673 y 42 reproducen lo que hacen Python y R").
- Interruptor **estratificar**: al encenderlo, las fichas se agrupan por color antes de repartir y el test recibe la misma proporción de sí y no.
- Arriba, la **caja del modelo** con lo que se aprende de los datos: media, desviación (y más adelante "variables elegidas"). Unos **tubos** salen de
  las fichas que alimentan la caja. Interruptor **"normalizar antes de partir"**: con él apagado, los tubos salen solo de las fichas de entrenamiento;
  encendido, también salen tubos del lado del test y **atraviesan el muro** (el tubo que cruza el muro se dibuja en `--bad`, con un pequeño goteo animado).
- Debajo, una **regla de z**: una recta numérica donde cada ficha cae en su z. Las del test con borde punteado. Al encender la fuga, todas las fichas
  se desplazan (las del entrenamiento también).
- Un **contador de miradas al test**: cada vez que Francisco pide "evaluar en el test", suma uno (paso 5).

Modos por paso: 1) fichas sin muro y un "memorizador"; 2) muro y botones de proporción; 3) barajar, semilla y "sin barajar"; 4) estratificar;
5) veinte modelos que adivinan y el contador de miradas; 6) caja del modelo con tubos y regla de z (la fuga); 7) quinientas columnas de ruido
(una tira de columnas grises) y la simulación de la selección de variables.

## Hipótesis inicial

"Un compañero te muestra su modelo: acierta el 100 % de los casos con los que lo entrenó. ¿Te alcanza para confiar en él? ¿Qué le pedirías
antes de creerle?"

Se vuelve a mostrar en el destacado del paso 6 (`#citaHipo`), cuando la fuga hace que el número se vea mejor de lo que es.

## Pasos (7)

### Paso 1. El examen que ya viste
- Idea: medir un modelo con los mismos datos con los que aprendió no dice nada. Un modelo que memoriza saca 100 % siempre.
- Escenario: modo 1, sin símbolos. Un **memorizador**: guarda la tabla de los ocho estudiantes que "estudia"; si le preguntas por uno que ya vio, copia
  su resultado; si es nuevo, copia el resultado del estudiante con las horas más parecidas. Francisco toca fichas para examinarlo.
- Chequeo (predicción antes de tocar, sin símbolos): "El memorizador estudió a ocho de los diez (todos menos Hugo y Julia). Lo examinas con esos
  mismos ocho. ¿Cuántos acierta?"
  - Correcta: "Los ocho: los tiene anotados." (100 %.)
  - "Seis o siete, nadie es perfecto": un memorizador no se equivoca en lo que copió.
  - "La mitad, adivina": solo adivina con los que no vio.
  - "No se puede saber sin probar": sí se puede: copia la respuesta guardada.
- Después del chequeo, se le pide examinar a Hugo y Julia: Hugo (7 horas) recibe el resultado de Gabi (7 horas, aprobó) y falla, porque Hugo no aprobó;
  Julia (13) recibe el de Iván (9, aprobó) y acierta. **1 de 2, 50 %**. El 100 % del entrenamiento no anunciaba nada de esto.
- Texto: es lo que en "Sesgo y varianza de un modelo" se llamó varianza alta: el modelo copia hasta el ruido (Hugo y Gabi estudiaron lo mismo y les fue distinto).
- Cita islr2 PDF 40 (impresa 29): el ECM de entrenamiento frente al de prueba, y por qué el de entrenamiento engaña.

### Paso 2. Un muro antes de mirar
- Idea: se aparta un trozo de los datos (el **test**) antes de hacer nada, y se usa solo al final. El resto (el **entrenamiento**) sirve para todo lo
  demás: explorar, preprocesar, elegir y ajustar.
- Escenario: modo 2, el muro y los botones de proporción. Contadores: tamaño del entrenamiento y del test.
- Proporciones habituales: 70/30 u 80/20 (UD0, diap. 20). Con pocos datos cada fila del test vale mucho: con 2 filas de test, la exactitud solo puede ser
  0 %, 50 % o 100 %; con 3 filas, 0, 33, 67 o 100 %. El escenario muestra los valores posibles de la exactitud según el tamaño del test.
- Chequeo (cálculo con datos en vivo): "Con los diez estudiantes y una partición 70/30, ¿cuántos quedan en el test?" Correcta: 3. Si Francisco movió el muro,
  la pregunta usa la proporción elegida (50/50 → 5; 60/40 → 4; 80/20 → 2; 90/10 → 1). Pista ante 7: "eso es el entrenamiento".
- Errata para decir con naturalidad (UD0, diap. 20): dice que más de 80 % en el entrenamiento arriesga **sobreajuste**. La proporción no sobreajusta a nadie:
  lo que se pierde con un test chico es la capacidad de **medir** bien (el número del test se vuelve muy ruidoso). Así lo plantea también HOML, la base de la unidad.
- `details.profundizar` "¿Y con millones de filas?": la diap. 21 dice que con n > 100 000 se puede usar un entrenamiento más chico por velocidad, y que con
  más columnas que filas (p ≥ n) hacen falta más muestras. Con millones, un 1 % de test ya son decenas de miles de filas.
- Citas: intro3 diap. 18 (`data-splitting`), diap. 19 (`5/4`: el test se usa una vez), diap. 20 (`5/5`: proporciones); islr2 PDF 209 (impresa 198):
  el enfoque del conjunto de validación, Figura 5.1 (la fila de observaciones partida en dos).

### Paso 3. Barajar con semilla (trampa)
- Idea: el muro se pone después de **barajar**, porque los archivos suelen venir ordenados. Y el barajado se fija con una **semilla** para que mañana
  salga la misma partición. La notación entra aquí: `set.seed(1673)` y `sample(10)` en R; `random_state=1673` en `train_test_split`.
- Escenario: modo 3. Interruptor "sin barajar" encendido al entrar.
- **Trampa marcada**: sin barajar, el test son las dos últimas filas: Iván (9) y Julia (13), los que más estudiaron. Media de horas del test 11, la del
  entrenamiento 4.75: el modelo aprende con un grupo y se examina con otro.
- Chequeo (cálculo con datos en vivo, antes de barajar): "Sin barajar, el test son las dos últimas filas. ¿Cuál es la media de horas del test?" Correcta: 11
  (con 80/20; si Francisco movió el muro, la media de las últimas filas que correspondan: 70/30 → (7 + 9 + 13)/3 = 9.67). Pista ante 6: "esa es la media de
  los diez; el test son solo las últimas".
- Después del chequeo: botón Barajar con la semilla 1673 → Hugo y Julia (las dos medias quedan 5 y 10). Volver a barajar con la misma semilla da
  **lo mismo**; con otra, otra partición.
- Segunda trampa (en el texto, verificada): **la misma semilla no da la misma partición en Python y en R**. Con 42, `train_test_split` deja en el test
  a Iván y Beto; `set.seed(42); sample(10)[1:2]` deja a Ana y Eva. Cada lenguaje tiene su generador. Y sin `random_state`, `train_test_split` parte distinto
  en cada ejecución (tres corridas dieron `[2, 7]`, `[2, 4]`, `[6, 4]` como índices de test).
- Errata para decir con naturalidad (UD0, diap. 22): presenta el muestreo aleatorio simple como "ideal cuando los datos siguen una distribución normal".
  La normalidad no tiene nada que ver: lo que importa es el tamaño y el balance de la respuesta.
- Citas: intro3 diap. 22 (`5/7`: muestreo aleatorio simple y `set.seed(123)`); islr2 PDF 224 (impresa 213): `set.seed(1)` y `sample(392, 196)` parten Auto
  a la mitad, y con `set.seed(2)` los errores cambian; islr2 PDF 56 (impresa 45): `set.seed(1303)` para repetir resultados.

### Paso 4. Estratificar
- Idea: barajar al azar puede dejar el test con una proporción de clases muy distinta. Estratificar reparte **por separado** cada clase con la misma proporción.
- Escenario: modo 4, interruptor estratificar. Una barra al pie de cada lado con el porcentaje de "sí".
- Con la semilla 42 en R el test queda con Ana y Eva: **0 % de aprobados** en el test frente a 50 % en total (y 62.5 % en el entrenamiento, 5 de 8).
  Al azar, con 10 filas y un test de 2, la probabilidad de que el test tenga las dos de la misma clase es 20/45 = **44 %** (en 2 000 semillas de
  `train_test_split`, 43.75 %, verificado). Con `stratify=y`, la semilla 42 deja a Eva (no) y Julia (sí); la 1673, a Fede (sí) y Dani (no): siempre una y una.
- Chequeo (cálculo con datos en vivo): "Estratificas con 80/20. ¿Cuántos aprobados van al test?" Correcta: 1 (20 % de 5). Si cambió la proporción:
  70/30 → 1.5, que se redondea: las librerías reparten 3 filas como 2 y 1 (el chequeo acepta "1 o 2" y la página explica el redondeo). Pista ante 2:
  "eso sería un test todo de aprobados".
- Texto: en clasificación con clases raras es imprescindible; en regresión se estratifica por cuantiles de la respuesta (diap. 23, y así parte la UD1 a
  Ames: `initial_split(prop = 0.7, strata = "Sale_Price")`). El desbalance de verdad y qué hacer con él: "Muestreo estratificado y desbalance de clases" (enlace por título).
- Citas: intro3 diap. 23 (`5/8`: muestreo estratificado, attrition 16/84, `{rsample}`); raschka3 PDF 3 (impresa 55): `train_test_split(..., test_size=0.3,
  random_state=1, stratify=y)` y `np.bincount` para comprobar 50/35/15 por clase; raschka6 PDF 3 (impresa 173): la misma llamada con `test_size=0.20` en
  Breast Cancer Wisconsin.

### Paso 5. El test se mira una sola vez (trampa)
- Idea: si usas el test para **elegir** (entre modelos, hiperparámetros, variables), el test ya trabajó de entrenamiento y su número sale optimista. Para
  elegir se usa una parte del entrenamiento (validación) o la validación cruzada; el test, una vez, al final.
- Escenario: modo 5. Un test nuevo de 20 filas (casillas grises) y una fila de **20 modelos que adivinan tirando una moneda**. Botón "evaluar todos
  en el test": cada modelo muestra su exactitud y el mejor se marca. Botón "test nuevo": el ganador se evalúa en 20 filas que nadie miró. El contador de
  miradas al test sube. La simulación corre en JS en vivo, con su propio azar.
- Chequeo (predicción antes de tocar): "Veinte modelos que adivinan al azar. Te quedas con el que mejor sale en el test. ¿Qué exactitud muestra ese ganador, más o menos?"
  - Correcta: "Alrededor de 70 %, aunque todos adivinan." (Promedio del mejor de 20 en 20 000 repeticiones con NumPy: **70.6 %**; entre 60 % y 80 % en el 90 % de los casos.)
  - "50 %, son monedas": eso vale para uno solo elegido de antemano.
  - "100 %": no tantos; 20 modelos no alcanzan.
  - "No se puede saber": sí se puede: es el máximo de 20 tiradas.
- Después: el ganador en el test nuevo vuelve a ~50 %. Tabla (verificada, NumPy, 20 000 repeticiones): mejor de 1 → 50.0 %, de 5 → 63.0 %, de 20 → 70.6 %,
  de 100 → 77.3 %. **Cuantas más veces miras el test para elegir, más se infla.**
- Texto: es la "regla de oro" de la UD0 (diap. 19). Raschka lo dice así: reutilizar el test en la selección de modelos lo vuelve parte del entrenamiento.
  Enlaces por título a "Validación cruzada" y "Ajuste de hiperparámetros y búsqueda en rejilla".
- Citas: intro3 diap. 19 (`5/4`); raschka6 PDF 5 (impresa 175, el holdout y por qué no reusar el test) y PDF 6 (impresa 176, Figure 6.2: entrenamiento,
  validación y test).

### Paso 6. La fuga de datos: normalizar antes de partir (destacado)
- Idea: **fuga de datos** (data leakage) es cualquier información del test que llega al entrenamiento. La más común: calcular la media y la desviación
  para estandarizar con todos los datos y partir después. La regla: todo lo que se aprende de los datos (medias, desviaciones, λ de Box-Cox, categorías,
  imputaciones) se aprende **solo del entrenamiento** y se **aplica** al test.
- Escenario: modo 6, la caja del modelo con tubos y la regla de z. Fórmula viva: $z = \dfrac{x - \bar x_{\text{train}}}{s_{\text{train}}}$ con los números de la
  ficha que Francisco toque: $z_{\text{Hugo}} = \dfrac{7 - 5}{2} = 1$.
- Chequeo (cálculo con datos en vivo): "Con la media y la desviación del entrenamiento, ¿cuál es el z de Julia?" Correcta: 4. Pista ante 2.333: "usaste la
  media 6 y la desviación 3, que salen de los diez: incluyen a Julia". Si Francisco cambió la partición, el chequeo usa la media y la desviación de su entrenamiento.

**Destacado con predicción (la confusión natural del concepto): "Si normalizo antes de partir, ¿qué números cambian?"**
- Predicción: "Enciendes 'normalizar antes de partir'. ¿Qué z cambian?" Opciones: "solo los del test" / "solo los del entrenamiento" / **"todos"** (correcta) / "ninguno, son los mismos datos".
- Explicación: la media pasa de 5 a 6 y la desviación de 2 a 3 porque Hugo y Julia entraron en la cuenta. Entonces cambian los z del test (Hugo 1 → 0.333,
  Julia 4 → 2.333) **y los del entrenamiento** (Ana −1.5 → −1.333, Iván 2 → 1): el entrenamiento ya lleva la huella del test. Julia, que con las cuentas honestas
  está a 4 desviaciones (más lejos que cualquier dato que el modelo vio, cuyo máximo es 2), con la fuga parece estar a 2.333: la sorpresa se suaviza,
  porque el preprocesado ya sabía que Julia existía.
- Matiz honesto: con un escalado la fuga suele mover poco la exactitud final. El problema es que ya no puedes saber cuánto: el test dejó de ser "datos que
  el modelo nunca vio". Y otras fugas son enormes (paso 7).
- Muestra de nuevo la hipótesis.
- Citas: fe1 diap. 83 (`data-leakage`: estimar medias y desvíos en cada partición de entrenamiento, Figure 12); fe1 diap. 47 (`standardisation`:
  `step_normalize` se estima en `prep()` y se aplica en `bake()`); raschka3 PDF 4 (impresa 56): `sc.fit(X_train)` y después `transform` en entrenamiento y en
  prueba; raschka6 PDF 1 (impresa 171): el pipeline reutiliza los parámetros aprendidos en el entrenamiento para transformar datos nuevos.
- Errata para decir con naturalidad (ISLR2, laboratorio de Caravan, PDF 194 = impresa 183): `standardized.X <- scale(Caravan[, -86])` estandariza las 5 822
  filas y **después** separa `test <- 1:1000`. Es exactamente esta fuga (pequeña aquí, con 5 822 filas), y además el test son las primeras mil filas, sin barajar.
  Cita islr2 PDF 194.
- `details.profundizar` "¿Y la desviación con n o con n − 1?": `StandardScaler` divide entre n (desviación 2); `scale` y `sd` de R dividen entre n − 1
  (2.13809). No es una fuga, pero cambia los z: Hugo 0.935 en vez de 1. Lo importante es usar la misma regla para entrenamiento y test (reto `codigo2`).

### Paso 7. Fugas grandes: elegir variables mirando todo
- Idea (el paso más técnico): hay fugas que convierten ruido en un modelo "bueno". Ejemplo clásico: 40 filas, 500 columnas de **puro ruido** y una
  etiqueta al azar (20 y 20). Si eliges las 5 columnas más correlacionadas con la etiqueta **usando las 40 filas** y después partes 30/10, el test sale muy
  por encima del 50 %. Si eliges las columnas **solo con el entrenamiento**, el test vuelve a ~50 %.
- Escenario: modo 7, una tira de 500 columnas grises; las 5 elegidas se encienden. Dos botones: "elegir con todo" y "elegir con el entrenamiento"; cada uno
  corre la simulación (en JS) y suma un punto a un histograma de exactitudes del test. Botón "100 veces".
- Números de referencia (verificados en Python con NumPy, 2 000 repeticiones, clasificador por centroide más cercano con las 5 columnas):
  eligiendo con todo, exactitud media en el test **82.9 %** (mediana 80 %, del 5 % al 95 %: 60 % a 100 %); eligiendo solo con el entrenamiento, **49.1 %**
  (20 % a 70 %). Las columnas no tienen nada que ver con la etiqueta: el 83 % es pura fuga. El JS dará números parecidos, no idénticos.
- Chequeo (predicción antes de correr): "Las 500 columnas son ruido. Eliges las 5 mejores con las 40 filas y después mides en el test. ¿Qué exactitud esperas?"
  - Correcta: "Bastante más de 50 %: la elección ya vio el test." 
  - "50 %, es ruido": es lo que da si eliges solo con el entrenamiento.
  - "100 % siempre": a veces llega, pero en promedio ronda el 80 %.
  - "Menos de 50 %": no hay razón para que salga peor que el azar.
- Otras fugas del material, nombradas con su cita: el **target encoding** usa la respuesta para codificar una categoría (fe1 diap. 77, `7/27`); la UD1 avisa
  que la preselección de variables se hace antes del entrenamiento final para evitar fuga (diap. 33, `5/6`).
- Errata para decir con naturalidad (UD1, diap. 79): `step_center`, `step_scale` y `step_pca(all_numeric())` sin `-all_outcomes()` meten `Sale_Price` (la
  respuesta) en el PCA: una fuga del target. Las diapositivas 85 y 86 sí la excluyen.
- Cierre: la herramienta que evita todo esto de forma automática es meter el preprocesado dentro del modelo, para que se aprenda solo con el entrenamiento
  (y dentro de cada vuelta de la validación cruzada): enlace por título a "Pipeline: el preprocesado dentro del modelo" y "Un flujo de modelado reproducible en R".
  En R, la UD1 lo hace con `recipe()` → `prep(training = ...)` → `bake()` (diap. 84, `putting-the-process-together`).
- Nota: el material oficial de SM142002 sobre scikit-learn no está publicado; lo de scikit-learn sale de Raschka y de la documentación, verificado en 1.6.1.

## Vida real (Python y R)

Python 3.13 con NumPy 2.1.3 y scikit-learn 1.6.1 (instalado en esta máquina: el código se corrió entero); R 4.6.1 (R base; `rsample` y `recipes`
están instalados, pero aquí no se usan). Mismos datos que el recorrido. Algoritmo: barajar con semilla, partir 80/20, calcular la media y la desviación
**solo con el entrenamiento** con bucles explícitos, estandarizar el test con ellas, y cerrar contra la librería (`train_test_split` + `StandardScaler`;
en R, `scale` con esos parámetros y la comparación con `sd`, que divide entre n − 1).
El texto sin el prefijo `id: ` es exactamente lo que se ejecutó (archivos comparados con `diff`). Las líneas con id `-` no tienen evento.

### Python

```
import: import numpy as np
-: from sklearn.model_selection import train_test_split
-: from sklearn.preprocessing import StandardScaler
nombres: nombres = ["Ana", "Beto", "Cris", "Dani", "Eva", "Fede", "Gabi", "Hugo", "Iván", "Julia"]
horas: horas = np.array([2, 4, 4, 4, 5, 5, 7, 7, 9, 13])  # inventado
semilla: rng = np.random.RandomState(1673)
orden: orden = rng.permutation(10)
test: test = np.sort(orden[:2])
train: train = np.sort(orden[2:])
suma0: suma = 0
fort: for i in train:
suma:     suma = suma + horas[i]
media: media = suma / len(train)
cuad0: cuadrados = 0
fort2: for i in train:
cuad:     cuadrados = cuadrados + (horas[i] - media) ** 2
desv: desv = (cuadrados / len(train)) ** 0.5
forte: for i in test:
imp:     print(nombres[i], (horas[i] - media) / desv)
lib1: X_tr, X_te = train_test_split(horas.reshape(-1, 1), test_size=0.2, random_state=1673)
lib2: esc = StandardScaler().fit(X_tr)
lib3: print(esc.mean_, esc.scale_)
lib4: print(esc.transform(X_te).ravel())
```

Salida real:
```
Hugo 1.0
Julia 4.0
[5.] [2.]
[1. 4.]
```

### R

```
nombres: nombres <- c("Ana", "Beto", "Cris", "Dani", "Eva", "Fede", "Gabi", "Hugo", "Iván", "Julia")
horas: horas <- c(2, 4, 4, 4, 5, 5, 7, 7, 9, 13)  # inventado
semilla: set.seed(1673)
orden: orden <- sample(10)
test: test <- sort(orden[1:2])
train: train <- sort(orden[3:10])
suma0: suma <- 0
fort: for (i in train) {
suma:   suma <- suma + horas[i]
-: }
media: media <- suma / length(train)
cuad0: cuadrados <- 0
fort2: for (i in train) {
cuad:   cuadrados <- cuadrados + (horas[i] - media)^2
-: }
desv: desv <- sqrt(cuadrados / length(train))
forte: for (i in test) {
imp:   cat(nombres[i], (horas[i] - media) / desv, fill = TRUE)
-: }
lib3: print(c(mean(horas[train]), sd(horas[train])))  # sd divide entre n - 1
lib4: print(scale(horas[test], center = media, scale = desv)[, 1])
```

Salida real:
```
Hugo 1
Julia 4
[1] 5.00000 2.13809
[1] 1 4
```

Ojo con la salida de R: `cat(..., fill = TRUE)` no deja espacio al final de la línea (con `"\n"` como último argumento quedaba `Hugo 1 ` con espacio;
por eso se usa `fill = TRUE`). Los dos bloques se copian respetando los dos espacios antes de cada `#`.

Eventos (una sola lista `EV`): `import`, `nombres`, `horas`, `semilla`, `orden`, `test`, `train`, `suma0`, 8 vueltas de `fort` + `suma`, `media`, `cuad0`,
8 vueltas de `fort2` + `cuad`, `desv`, 2 vueltas de `forte` + `imp`, `lib1`, `lib2`, `lib3`, `lib4`:
7 + 1 + 16 + 1 + 1 + 16 + 1 + 4 + 4 = **51 eventos**.
`import`, `lib1` y `lib2` solo existen en Python; en R se narran: "Esta línea solo existe en Python: R trae `sample`, `sort` y `scale` sin cargar nada"
y "R base no tiene un `train_test_split`: la partición ya la hiciste a mano con `sample` (en `tidymodels` sería `rsample::initial_split`)".
`semilla` en Python crea un generador con la semilla; en R fija la semilla del generador global. `orden` en Python: `[7 9 0 4 1 3 6 8 2 5]`;
en R: `10 8 6 4 3 5 2 7 9 1` (distinto orden, pero con los mismos dos primeros, Hugo y Julia: por eso se eligió 1673).

### Foto de estado por línea ejecutada

| Evento | i (py / R) | horas[i] | suma | media | cuadrados | desv | Visual |
|---|---|---|---|---|---|---|---|
| nombres, horas | | | | | | | las diez fichas en fila, ordenadas por horas |
| semilla, orden | | | | | | | las fichas se barajan; muestra `orden` en cada lenguaje |
| test, train | | | | | | | baja el muro: Hugo y Julia al test (candado); `test` = `[7 9]` / `8 10`; `train` = `[0 1 2 3 4 5 6 8]` / `1 2 3 4 5 6 7 9` |
| suma0 | | | 0 | | | | caja "suma" vacía; tubos apagados |
| fort/suma | 0 / 1 | 2 | 2 | | | | se enciende el tubo de Ana a la caja |
| fort/suma | 1 / 2 | 4 | 6 | | | | Beto |
| fort/suma | 2 / 3 | 4 | 10 | | | | Cris |
| fort/suma | 3 / 4 | 4 | 14 | | | | Dani |
| fort/suma | 4 / 5 | 5 | 19 | | | | Eva |
| fort/suma | 5 / 6 | 5 | 24 | | | | Fede |
| fort/suma | 6 / 7 | 7 | 31 | | | | Gabi |
| fort/suma | 8 / 9 | 9 | 40 | | | | Iván (se salta Hugo, que está detrás del muro: el índice pasa de 6 a 8 / de 7 a 9) |
| media | | | 40 | 5 | | | 40 / 8 = 5 (el divisor es 8, no 10) |
| cuad0 | | | | 5 | 0 | | |
| fort2/cuad | 0 / 1 | 2 | | 5 | 9 | | cuadrado de lado 3 |
| fort2/cuad | 1 / 2 | 4 | | 5 | 10 | | |
| fort2/cuad | 2 / 3 | 4 | | 5 | 11 | | |
| fort2/cuad | 3 / 4 | 4 | | 5 | 12 | | |
| fort2/cuad | 4 / 5 | 5 | | 5 | 12 | | aporta 0 |
| fort2/cuad | 5 / 6 | 5 | | 5 | 12 | | aporta 0 |
| fort2/cuad | 6 / 7 | 7 | | 5 | 16 | | |
| fort2/cuad | 8 / 9 | 9 | | 5 | 32 | | |
| desv | | | | 5 | 32 | 2 | √(32 / 8) = 2 |
| forte/imp | 7 / 8 | 7 | | 5 | | 2 | Hugo cruza el muro hacia la caja **en sentido contrario**: el test recibe los parámetros, no los da. Imprime `Hugo 1.0` / `Hugo 1` |
| forte/imp | 9 / 10 | 13 | | 5 | | 2 | Julia → `Julia 4.0` / `Julia 4` |
| lib1 | | | | | | | (solo Python) `train_test_split` hace el mismo barajado: X_te = Hugo y Julia |
| lib2 | | | | | | | (solo Python) `fit` solo con `X_tr` |
| lib3 | | | | | | | Python: `[5.] [2.]`, igual a lo calculado. R: `5.00000 2.13809`: la media coincide, la desviación no (n − 1) |
| lib4 | | | | | | | `[1. 4.]` / `1 4`: coincide con el bucle |

En Python `suma` pasa a `np.int64` (2, 6, ..., 40) y `media` a `np.float64` 5.0; `print` muestra `1.0` y `4.0`. Índices con `ctx.ix`.
Narración de `media`: "Se divide entre `len(train)` (8), no entre 10: Hugo y Julia no cuentan". Narración de `forte`: "El test no aporta nada a la
media: solo la recibe".

### Predicción antes de reproducir (`#vrPred`)

"¿Cuántas veces se ejecuta la línea `suma = suma + horas[i]`?" Respuesta **8** (las filas de entrenamiento). Distractores: 10 (todas las filas),
2 (el test), 40 (el valor final de `suma`). Pista: "el bucle recorre `train`, no `horas`".

### Trampas reales (retos `codigo1` a `codigo3`)

**codigo1: ajustar el escalado antes de partir (Python).**
```
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
horas = np.array([2, 4, 4, 4, 5, 5, 7, 7, 9, 13]).reshape(-1, 1)
esc = StandardScaler().fit(horas)  # se ajusta con los 10: fuga
X_tr, X_te = train_test_split(horas, test_size=0.2, random_state=1673)
print(esc.mean_, esc.scale_)
print(esc.transform(X_te).ravel())
bien = StandardScaler().fit(X_tr)
print(bien.transform(X_te).ravel())
```
Salida real:
```
[6.] [3.]
[0.33333333 2.33333333]
[1. 4.]
```
Pregunta: "¿Por qué el test sale con z distintos en la segunda y la tercera línea?" Correcta: "El primer escalado aprendió la media y la desviación con
los diez, Hugo y Julia incluidos: el test se coló en el preprocesado." Distractores: "`train_test_split` baraja distinto cada vez" (no: `random_state` fijo);
"`StandardScaler` usa n − 1" (no: usa n, por eso da 2 y 3 exactos); "el orden de las líneas no importa porque los datos son los mismos" (importa: el `fit` decide con qué datos se aprende).

**codigo2: `scale` y `sd` de R dividen entre n − 1 (R).**
```
horas <- c(2, 4, 4, 4, 5, 5, 7, 7, 9, 13)
train <- c(1, 2, 3, 4, 5, 6, 7, 9)
z <- scale(horas[train])
print(attr(z, "scaled:scale"))
print(sqrt(mean((horas[train] - 5)^2)))
print((horas[c(8, 10)] - 5) / attr(z, "scaled:scale"))
```
Salida real:
```
[1] 2.13809
[1] 2
[1] 0.9354143 3.7416574
```
Pregunta: "Python te dio z = 1 para Hugo y R 0.935. ¿Quién se equivoca?" Correcta: "Ninguno: `StandardScaler` divide entre n (desviación 2) y `scale` entre
n − 1 (2.13809). Lo que no puede pasar es mezclar las dos reglas entre entrenamiento y test." En NumPy: `np.std(x)` → 2.0 y `np.std(x, ddof=1)` → 2.138089935299395
(verificado). Distractores: "R tiene un error de redondeo"; "R incluye el test en la cuenta" (no: `horas[train]`); "Python usa la mediana".
Enlaza con el `ddof` de "Covarianza" y con "Estandarización y normalización".

**codigo3: la misma semilla no da la misma partición (Python y R).**
```
from sklearn.model_selection import train_test_split
nombres = ["Ana", "Beto", "Cris", "Dani", "Eva", "Fede", "Gabi", "Hugo", "Iván", "Julia"]
entreno, prueba = train_test_split(nombres, test_size=0.2, random_state=42)
print(prueba)
```
```
nombres <- c("Ana", "Beto", "Cris", "Dani", "Eva", "Fede", "Gabi", "Hugo", "Iván", "Julia")
set.seed(42)
prueba <- nombres[sample(10)[1:2]]
print(prueba)
```
Salidas reales: `['Iván', 'Beto']` y `[1] "Ana" "Eva"`.
Pregunta: "¿Por qué con la misma semilla salen estudiantes distintos?" Correcta: "Cada lenguaje tiene su propio generador de números al azar: la semilla
fija la secuencia dentro de un lenguaje, no entre lenguajes." Distractores: "Python cuenta desde 0" (la diferencia no es de un lugar; son otros estudiantes);
"42 no es una semilla válida en R"; "`train_test_split` no baraja" (sí baraja por defecto, `shuffle=True`). Nota: con R el test (Ana y Eva) tiene 0 % de aprobados: enlaza con el paso 4.

`p.vr-nota`: en Python, `X_tr, X_te = train_test_split(X, test_size=0.2, random_state=1673, stratify=y)` y `StandardScaler().fit(X_tr)`;
en R con tidymodels, `initial_split(datos, prop = 0.8, strata = y)` y `recipe(...) |> step_normalize(...) |> prep(training = ...)`
(se nombra, no se corre en la página; sale en "Un flujo de modelado reproducible en R").
`details.profundizar` "La forma vectorizada": `media = horas[train].mean()` y `desv = horas[train].std()` en NumPy (std con n por defecto: 2.0);
en R, `mean(horas[train])` y `sqrt(mean((horas[train] - media)^2))` (2). La máscara de índices `train` hace el trabajo del bucle.

## Retos (11)

RETOS = ["ojo", "construir", "mano", "error", "prop1", "prop2", "prop3", "codigo1", "codigo2", "codigo3", "formula"]

1. **ojo** (ojo clínico, 8 rondas al azar, aprueba con 7 de 8): se describe un procedimiento en una línea y Francisco decide **"hay fuga"** o **"no hay fuga"**.
   Banco (con su explicación):
   - Hay fuga: "estandarizas con `scale(X)` y después partes"; "rellenas los faltantes con la media de toda la columna y después partes"; "eliges las 10
     variables más correlacionadas con y usando todas las filas"; "pruebas 30 valores de k y te quedas con el que mejor sale en el test"; "codificas cada
     barrio con el precio medio de sus casas usando todos los datos" (target encoding); "una columna `fecha_de_baja` para predecir si un cliente se va"
     (la columna existe solo porque ya se fue); "las fotos del mismo paciente quedan unas en entrenamiento y otras en test"; "haces PCA con todas las columnas, la respuesta incluida".
   - No hay fuga: "partes, ajustas `StandardScaler` con `X_train` y transformas `X_test`"; "eliges k con validación cruzada dentro del entrenamiento y evalúas
     una vez en el test"; "fijas `random_state=1` para repetir la partición"; "estratificas por la clase al partir" (usar y para repartir no la filtra al modelo);
     "cambias la semilla y vuelves a partir antes de entrenar nada"; "un `Pipeline` con el escalado y el modelo dentro de `cross_val_score`".
2. **construir** (manipular el visual hasta cumplir): partiendo de los diez estudiantes, lograr con los botones un estado que cumpla a la vez:
   (a) test de 3 filas (70/30); (b) el test con al menos un aprobado y al menos un suspenso; (c) la caja del modelo sin ningún tubo que cruce el muro;
   (d) la media del entrenamiento entre 4.5 y 5.5. Ok al cumplir las cuatro. La página comprueba las cuatro en vivo y marca cada una.
3. **mano** (a mano, datos al azar, pistas escalonadas, reintentable): 6 valores enteros entre 1 y 12, de los que 4 son entrenamiento y 2 test (marcados).
   Pide: (1) la media del entrenamiento; (2) la desviación con n; (3) el z del primer valor de test (2 decimales). Generar hasta que la media sea
   entera y la desviación también (ejemplos válidos: 2, 2, 6, 6 → media 4, desviación 2; 1, 3, 3, 5 → media 3, cuadrados 8, desviación √2: no vale;
   3, 3, 9, 9 → media 6, desviación 3). Basta con generar al azar y descartar hasta que las dos sean enteras. Pistas: 1) "solo las cuatro de entrenamiento";
   2) "promedio de los cuadrados de las distancias a la media, y la raíz"; 3) primera parte resuelta con números. Error típico que nombra la pista: usar los seis valores.
4. **error** (cazar el error, 3 variantes del código de Vida real, una línea mal):
   - V1 (Python): `for i in range(10):` en el primer bucle en lugar de `for i in train:`. Efecto: suma 60, `media = 60 / 8 = 7.5` (diez sumandos, ocho de
     divisor, y el test ya metido en la media: una fuga dentro del bucle). Cuadrados 82, desviación √(82/8) = 3.2016. Salida real de las líneas `imp`:
     `Hugo -0.15617376188860607` y `Julia 1.7179113807746667` (verificado).
   - V2 (R): `media <- suma / 10` en lugar de `/ length(train)`. Media 4, cuadrados 40, desviación √5 = 2.236. Salida real: `Hugo 1.341641` y `Julia 4.024922` (verificado).
   - V3 (Python): `esc = StandardScaler().fit(horas.reshape(-1, 1))` en lugar de `fit(X_tr)`. Salida: `[6.] [3.]` y `[0.33333333 2.33333333]` (la fuga del paso 6).
5. **prop1** (opción múltiple, `mezclar: true`): "¿Para qué sirve el test?" Correcta: "Para estimar, una sola vez al final, cómo le irá al modelo con datos
   nuevos". Pistas: "para elegir el mejor modelo" → "eso es la validación; si eliges con el test, se infla (paso 5)"; "para entrenar con más datos" → "el test
   no entra en el entrenamiento"; "para ajustar el escalado" → "el escalado se ajusta con el entrenamiento (paso 6)".
6. **prop2**: "¿Qué hace una semilla?" Correcta: "Fija la secuencia de azar para que la misma partición se repita en ese lenguaje". Pistas: "hace la partición
   más aleatoria" → "no cambia la calidad del azar; lo hace repetible"; "garantiza la misma partición en Python y en R" → "cada lenguaje tiene su generador (reto `codigo3`)";
   "mejora la exactitud" → "elegir la semilla que da mejor test es otra forma de mirar el test".
7. **prop3**: "¿Cuándo es más importante estratificar?" Correcta: "Cuando una clase es rara o el conjunto es chico". Pistas: "cuando los datos son normales"
   → "la normalidad no tiene que ver (errata de la diap. 22)"; "nunca, el azar ya reparte bien" → "con 10 filas y test de 2, el 44 % de las veces el test queda de una sola clase";
   "solo en regresión" → "en regresión se estratifica por cuantiles, pero donde más importa es en clasificación desbalanceada".
8. **codigo1**, 9. **codigo2**, 10. **codigo3**: ver Vida real.
11. **formula**: la parte de memoria (`B.ordenar`), registrada con `C.reto("formula", ok)`.

## Memoria

**B.ordenar** (el orden correcto del flujo; piezas en orden):
1. Barajar con semilla
2. Partir en entrenamiento y test (estratificando si hace falta)
3. Ajustar el preprocesado con el entrenamiento (`fit`)
4. Transformar entrenamiento y test con esos parámetros (`transform`)
5. Elegir y entrenar el modelo con el entrenamiento (validación cruzada)
6. Evaluar en el test, una sola vez

Distractores: "Estandarizar con todos los datos", "Elegir el modelo con mejor exactitud en el test", "Elegir variables correlacionadas con y usando todas las filas".

**Tarjetas (8):**
1. ¿Por qué no mido con los datos de entrenamiento? → Porque un modelo que memoriza saca 100 % ahí y no dice nada de datos nuevos.
2. ¿70/30 u 80/20? → Cualquiera; con pocos datos el test chico mide mal. La proporción no causa sobreajuste.
3. ¿Para qué barajar? → Los archivos vienen ordenados; sin barajar, el test son "los últimos" (aquí, los que más estudiaron).
4. ¿Qué hace la semilla? → Repite la misma partición en el mismo lenguaje. Python y R no coinciden con la misma semilla.
5. ¿Qué es estratificar? → Repartir cada clase por separado para que el test tenga la misma proporción que el total.
6. ¿Cuántas veces miro el test? → Una, al final. El mejor de 20 modelos al azar sale ~70 % si eliges con el test.
7. ¿Qué es la fuga de datos? → Información del test que llega al entrenamiento: escalar, imputar o elegir variables con todos los datos.
8. ¿Cómo se evita? → `fit` con el entrenamiento, `transform` en los dos; o el preprocesado dentro del modelo (Pipeline, recipes).

## Citas (14)

| id de fuente | página PDF o diapositiva / ancla | página impresa | sección | qué hay | cuándo leerla |
|---|---|---|---|---|---|
| islr2 | 40 | 29 | 2.2.1 Measuring the Quality of Fit | ECM de entrenamiento (2.5) frente al de prueba (2.6), Figura 2.9 | Paso 1 |
| intro3 | diap. 18, `data-splitting` | | 4.3 Data splitting | el objetivo es generalizar: predecir bien Y futuros | Paso 2 |
| intro3 | diap. 19, `5/4` | | Train vs test | el test se usa una sola vez; regla de oro | Pasos 2 y 5 |
| intro3 | diap. 20, `5/5` | | Proporciones | 70/30 u 80/20 (con la errata del sobreajuste) | Paso 2 |
| islr2 | 209 | 198 | 5.1.1 The Validation Set Approach | por qué apartar observaciones; Figura 5.1 (y 5.2 en la PDF 211, p. 200) | Paso 2, al terminar |
| intro3 | diap. 22, `5/7` | | 4.3.1 Simple random sampling | muestreo aleatorio simple y `set.seed(123)` (con la errata de la normalidad) | Paso 3 |
| islr2 | 224 | 213 | 5.3.1 The Validation Set Approach (lab) | `set.seed(1)`, `sample(392, 196)`; con `set.seed(2)` cambia el resultado | Paso 3 |
| intro3 | diap. 23, `5/8` | | 4.3.2 Stratified sampling | estratificar en clasificación y por cuantiles en regresión; `{rsample}` | Paso 4 |
| raschka3 | 3 | 55 | First steps with scikit-learn | `train_test_split(test_size=0.3, random_state=1, stratify=y)` y `np.bincount` | Paso 4 |
| raschka6 | 5 | 175 | The holdout method | reutilizar el test para elegir lo vuelve entrenamiento (la PDF 6, p. 176, tiene la Figure 6.2) | Paso 5 |
| fe1 | diap. 83, `data-leakage` | | 8.3 Data leakage | estimar medias y desvíos dentro de cada partición de entrenamiento; Figure 12 | Paso 6 y destacado |
| raschka3 | 4 | 56 | idem | `sc.fit(X_train)` y `transform` en entrenamiento y prueba | Paso 6 |
| islr2 | 194 | 183 | 4.7.6 KNN (Caravan) | `scale(Caravan[, -86])` antes de separar `test <- 1:1000` (la fuga, como errata) | Destacado del paso 6 |
| fe1 | diap. 79, `8/1` | | PCA en la receta | `step_pca(all_numeric())` con la respuesta dentro (errata: fuga del target) | Paso 7 |

Extras si caben (no pasar de 14 en la página; si se agregan, quitar alguna): fe1 diap. 47 `standardisation` (prep/bake, paso 6); fe1 diap. 77 `7/27`
(fuga del target encoding, paso 7); fe1 diap. 84 `putting-the-process-together` (recipe, prep, bake; paso 7); raschka6 PDF 1 (p. 171, el pipeline reutiliza
parámetros; paso 6); raschka6 PDF 3 (p. 173, `train_test_split(test_size=0.20, stratify=y, random_state=1)`; paso 4); intro3 diap. 17 `a-strategic-approach`
(nombra la fuga de datos; paso 6); intro3 diap. 21 `5/6` (n > 100 000 y p ≥ n; profundizar del paso 2); fe1 diap. 33 `5/6` (preselección antes del entrenamiento final, paso 7).

`data-pag`: islr2 = PDF (impresa = PDF − 11); raschka3 impresa = PDF + 52; raschka6 impresa = PDF + 170. Diapositivas (`intro3`, `fe1`, `tipo: "diapositivas"`):
`data-pag` = número de diapositiva y `data-ancla` sin `#/`. En la UD0 no usar `#/references` (id duplicado). Todas las páginas y anclas salen de
`brain/fuentes/sm142003-ud0-intro.md`, `sm142003-ud1-fe.md`, `raschka-cap3.md`, `raschka-cap6.md` e `islr2-r.md`; además se comprobó con `pdftotext`
la PDF 194 de ISLR2 (las líneas `standardized.X <- scale(Caravan[, -86])` y `test <- 1:1000`), la 209 (5.1 Cross-Validation) y la 224 (`set.seed (1)`, `sample (392, 196)`).

**No se cita OpenIntro**: su mapa (`openintro.md`) cubre los caps. 3 a 9; los principios de muestreo del cap. 1 no están mapeados. Si se quiere,
mapear antes el cap. 1 (1.3 Sampling principles and strategies) y agregarlo al paso 3 o 4.

## Erratas del material para decir en la página

- UD0 diap. 20: "más de 80 % en entrenamiento arriesga sobreajuste" → la proporción no sobreajusta; un test chico mide mal (paso 2).
- UD0 diap. 22: el muestreo aleatorio simple "ideal cuando los datos son normales" → la normalidad no es el criterio (paso 3).
- ISLR2 PDF 194 (impresa 183): estandariza Caravan entero y después separa el test, que además son las primeras 1 000 filas sin barajar (paso 6).
- UD1 diap. 79: `step_pca(all_numeric())` sin `-all_outcomes()`: la respuesta entra en el PCA (paso 7).
- Raschka cap. 6, p. 192 (PDF 22): "5×2 cross-validation" para la anidada 5 externos × 2 internos; si se nombra la validación anidada, avisar (opcional).

## Riesgos y notas para quien construye

- **La semilla 1673 es la que hace coincidir a Python y R** (Hugo y Julia al test en los dos). No cambiarla. `train_test_split(..., random_state=1673)`
  da el mismo test porque internamente usa `RandomState(1673).permutation` y toma los primeros `n_test` (verificado: `X_te` = `[[7], [13]]`).
- El barajado en el navegador usa un generador propio (por ejemplo mulberry32): para semillas que no sean 1673 o 42 la partición será otra que la de
  Python o R. Decirlo en la nota del escenario. Para 1673 y 42 usar las particiones fijas: 1673 → test Hugo y Julia (los dos lenguajes); 42 → Python
  Iván y Beto, R Ana y Eva; 42 estratificado (sklearn) → Eva y Julia; 1673 estratificado (sklearn) → Fede y Dani.
- `StandardScaler` divide entre n; `scale` y `sd` de R entre n − 1. En el recorrido, todos los z usan n (desviación 2 y 3), como scikit-learn. Decirlo una vez en el paso 6.
- La fórmula del z no se explica de nuevo: enlace por título a "Estandarización y normalización".
- La página "Estandarización y normalización" dice que la fuga "no aparece en los PDF de la UD1"; sí aparece (diap. 83, `data-leakage`). Sugerencia para la
  sesión principal: corregir esa frase (no lo hace quien construye esta página).
- Las simulaciones de los pasos 5 y 7 corren en JS; los números de referencia de Python (70.6 % y 82.9 % frente a 49.1 %) van en el texto como "en 2 000 / 20 000
  repeticiones con NumPy". No prometer que el JS dé exactamente lo mismo.
- Paso 7, detalles de la simulación de referencia: n = 40 (20 y 20), p = 500 columnas normales estándar, se eligen las 5 de mayor |correlación| con y,
  partición 30/10 al azar (sin estratificar), clasificador por centroide más cercano (media de cada clase en las 5 columnas, distancia euclídea).
  `np.random.default_rng(2026)`, 2 000 repeticiones de cada versión.
- Paso 5, referencia: cada modelo acierta cada fila con probabilidad 0.5, test de 20 filas, `np.random.default_rng(0)`, 20 000 repeticiones.
- Los acentos: `"Iván"` en el código de los dos lenguajes; R 4.6.1 en esta máquina lo imprime bien (UTF-8).
- Los números de las variantes V1 a V3 del reto `error` ya se corrieron; si se cambia una variante, volver a correrla.
