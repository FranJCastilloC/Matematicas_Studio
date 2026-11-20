# Especificación: Pipeline: el preprocesado dentro del modelo (sklearn-pipeline)

- Ruta: `scikit-learn` (grupo Programación con datos), orden 3. Tanda 10.
- Archivo: `biblioteca/conceptos/sklearn-pipeline.html`
- Área: Programación con datos. Fuente del catálogo: "Raschka cap. 6".
- Prerrequisitos: ["fit, transform y predict: la interfaz de scikit-learn", "Partición de datos: train, test y fuga de datos"]
  (los dos están `planeado` al escribir esto: salen sin enlace hasta que se construyan).
- Siguientes: [] (lista vacía en el catálogo).
- Aparece: [{ materia: "SM142002", ud: "UD3" }].
- Resumen del catálogo: "Encadenar el escalado y el modelo en un solo objeto evita que el test se cuele en el entrenamiento."

**Material oficial.** La UD3 de SM142002 (scikit-learn, TensorFlow y Git) **no está publicada** en la carpeta de la materia
(`brain/fuentes/sm142002-programacion.md`, líneas 46 y 376): la página lo dice con naturalidad ("la unidad de scikit-learn de Programación todavía
no está publicada; esto es lo que dicen el libro y las otras materias"). Lo que sí hay:
- Raschka cap. 6 (`raschka6`): `make_pipeline`, cómo funciona el `Pipeline` por dentro (Figure 6.1), k-fold, `cross_val_score(estimator=pipe_lr, ...)`
  y los nombres `logisticregression__C` / `svc__C`. **El capítulo no habla de fuga de datos ni de `ColumnTransformer`** (comprobado con `pdftotext`
  sobre las 34 páginas: no aparecen "leak" ni "ColumnTransformer"). Pasa el pipeline a `cross_val_score` sin decir que eso es lo que impide la fuga:
  la página lo explica igual y aclara que el libro no lo dice.
- SM142003 UD1 (`fe1`): diap. 82 (orden de los pasos), 83 (fuga de información: estimar medias y desvíos en cada split), 84 (`recipe` + `prep` + `bake`;
  caret lo hace dentro de cada fold), 85 (blueprint), 20 (imputar dentro de la CV). Es el equivalente en R de esta página.
- SM142003 UD3 (`knn3`, `knn3real`): diap. 13 (por qué escalar en kNN), 15 (la misma transformación en train y test), 30 (`recipe` + `step_normalize`
  + `vfold_cv` en tidymodels); caso real, secciones 7 (receta) y 8.2 (validación cruzada con la receta dentro del workflow).

**Foco y límites.** Esta página es la MECÁNICA: qué aprende cada paso con `fit`, por qué ese aprendizaje tiene que hacerse dentro de cada pliegue,
cómo el `Pipeline` lo garantiza, `ColumnTransformer` para preparar columnas distintas, y cómo se nombran los pasos. NO repite:
- qué es un z-score ni min-max (enlazar "Estandarización y normalización", que está `listo`);
- cómo funciona kNN (enlazar "kNN y regiones de decisión") ni la validación cruzada como estimador (enlazar "Validación cruzada", `listo`);
- la búsqueda de hiperparámetros (solo se muestra el nombre `kneighborsclassifier__n_neighbors`; enlazar "Ajuste de hiperparámetros y búsqueda en rejilla",
  `planeado`, sin enlace);
- la versión completa en tidymodels (enlazar "Un flujo de modelado reproducible en R", `planeado`, tanda 10).
Sugerencia para la sesión principal (no la cambia el constructor): agregar "Un flujo de modelado reproducible en R" y "Ajuste de hiperparámetros y
búsqueda en rejilla" a `siguientes` de `sklearn-pipeline`, para que Conexiones no salga vacía.

## Datos de toda la página (inventados, se dice en la página)

Diez estudiantes. `horas` de estudio por semana y `dist`, la distancia de su casa a la universidad en **metros**; `aprobo` es 1 si aprobó.
Están pensados para que la distancia, sin escalar, aplaste a las horas (metros contra horas) y para que un pliegue tenga a los dos que viven más lejos.
La columna `turno` solo entra en el paso 6.

| fila (py / R) | horas | dist (m) | turno | aprobo |
|---|---|---|---|---|
| 0 / 1 | 10 | 5500 | mañana | 1 |
| 1 / 2 | 7 | 2500 | tarde | 1 |
| 2 / 3 | 9 | 2000 | tarde | 1 |
| 3 / 4 | 1 | 3000 | noche | 0 |
| 4 / 5 | 2 | 5500 | mañana | 0 |
| 5 / 6 | 3 | 6000 | tarde | 0 |
| 6 / 7 | 7 | 1000 | mañana | 1 |
| 7 / 8 | 5 | 1500 | mañana | 1 |
| 8 / 9 | 1 | 1500 | tarde | 0 |
| 9 / 10 | 1 | 2000 | tarde | 0 |

Validación cruzada de **5 pliegues seguidos sin barajar** (`KFold(5)`): el pliegue f deja como prueba las filas 2f y 2f+1 (Python) o 2f−1 y 2f (R).
Modelo: kNN con **k = 1** (un vecino: sin empates; comprobado que en ningún pliegue hay dos distancias mínimas iguales).

Cuentas verificadas (Python 3.13, NumPy 2.1.3, pandas 2.2.3, scikit-learn 1.6.1; R 4.6.1 con caret 7.0.1 y recipes 1.4.0):
- Toda la tabla: media (4.6, 3050); desviación con n (ddof 0, la de `StandardScaler`) (3.29, 1795.13); con n − 1 (la de R) (3.47, 1892.24).
- **Pliegue 3** (prueba = filas 4 y 5 en Python, 5 y 6 en R: los que viven a 5500 y 6000 m), el ejemplo de los pasos 1 a 3:
  media de entrenamiento (5.125, **2375**) frente a (4.6, **3050**) con los diez; desviación de entrenamiento (3.48, 1316.96) frente a (3.29, 1795.13).
  z del test con lo del train: (−0.90, 2.37) y (−0.61, 2.75). Con la escala de toda la tabla: (−0.79, 1.37) y (−0.49, 1.64).
- Accuracy por pliegue de la validación cruzada:

| versión | pliegues | media |
|---|---|---|
| sin escalar (`KNeighborsClassifier` sobre metros y horas) | 0.5, 0, 0, 0, 0 | **0.1** |
| escalar antes de partir (fuga) | 1, 1, 1, 1, 1 | **1.0** |
| pipeline (escalar dentro de cada pliegue) | 1, 1, 0.5, 1, 1 | **0.9** |

Lo único que cambia entre la fuga y el pipeline es el pliegue 3: el estudiante de la fila 5 (py) / 6 (R), 3 h y 6000 m, no aprobó. Con el pipeline, la desviación
de `dist` se aprende sin los dos que viven lejos (1317 m), la distancia pesa más y su vecino es la fila 0 (10 h, 5500 m, aprobó): falla. Con la fuga, la
desviación ya "sabe" que hay gente a 6 km (1795 m), la distancia pesa menos y su vecino es la fila 3 (1 h, 3000 m, no aprobó): acierta. **La fuga acertó
porque había visto el examen.**

Tabla de estado por pliegue (para el escenario y para Vida real). `desv` en Python es con n (ddof 0) y en R con n − 1: no son iguales, pero los vecinos sí
(ver Riesgos).

| pliegue | prueba py / R | media (horas, dist) | desv py (ddof 0) | desv R (n − 1) | Zp py | vecino py: pos. en entreno → fila | acierto |
|---|---|---|---|---|---|---|---|
| 1 | [0, 1] / 1 2 | 3.625, 2812.5 | 2.87, 1784.26 | 3.07, 1907.46 | (2.22, 1.51), (1.18, −0.18) | 0 → 2; 0 → 2 | 1, 1 → 1.0 |
| 2 | [2, 3] / 3 4 | 4.5, 3187.5 | 3.08, 1967.51 | 3.30, 2103.36 | (1.46, −0.60), (−1.14, −0.10) | 1 → 1; 7 → 9 | 1, 1 → 1.0 |
| 3 | [4, 5] / 5 6 | 5.125, 2375 | 3.48, 1316.96 | 3.72, 1407.89 | (−0.90, 2.37), (−0.61, 2.75) | 3 → 3; 0 → 0 | 1, 0 → 0.5 |
| 4 | [6, 7] / 7 8 | 4.25, 3500 | 3.56, 1732.05 | 3.81, 1851.64 | (0.77, −1.44), (0.21, −1.15) | 2 → 2; 1 → 1 | 1, 1 → 1.0 |
| 5 | [8, 9] / 9 10 | 5.5, 3375 | 3.08, 1866.65 | 3.30, 1995.53 | (−1.46, −1.00), (−1.46, −0.74) | 3 → 3; 3 → 3 | 1, 1 → 1.0 |

`vecino` es la posición dentro de `entreno` (Python desde 0, R desde 1 con `which.min`); la "fila" es la fila de la tabla (en R, sumar 1).

## Imagen central

**La cadena con memoria.** Un `Pipeline` dibujado como una cinta con dos cajas: **Escalador** (su memoria: μ y σ de cada columna) → **kNN**
(su memoria: los puntos de entrenamiento). Al lado, la tabla de los diez estudiantes, cada fila con un punto de color según su papel en el pliegue
actual: `--j` entrenamiento, `--accent` prueba.

- **Lo que aprende cada caja se ve como fichas.** Cuando corre `fit`, de cada fila que alimenta la memoria del escalador sale una ficha pequeña que
  entra en la caja; la caja muestra μ y σ en números vivos. Si una fila de prueba alimenta la memoria, su ficha entra con borde `--bad` y la caja se
  marca "FUGA: esta memoria vio el test". Es la imagen que hay que llevarse: **la fuga es una ficha del test dentro de una memoria**.
- **Debajo, el plano del kNN** (eje x: horas en z; eje y: distancia en z) con los ocho puntos de entrenamiento y los dos de prueba; una línea une cada
  punto de prueba con su vecino. El plano se redibuja con la escala que aprendió la memoria actual: con fuga o sin fuga, los dos puntos de prueba del
  pliegue 3 se mueven (de y ≈ 2.4-2.8 a y ≈ 1.4-1.6) y el vecino de uno cambia.
- **Controles (todo con botones, nada de arrastrar):** selector de pliegue 1 a 5; interruptor **"Escalar antes de partir (fuga)" / "Pipeline"**;
  interruptor "sin escalar" (pasos 1-2); botón "fit" y botón "predict" que animan el recorrido de los datos por la cinta (en `fit` las fichas bajan
  por las dos cajas con `fit_transform` y `fit`; en `predict` solo pasan, con `transform` y `predict`, sin dejar fichas).
- **Marcador de la validación cruzada:** cinco casillas, una por pliegue, con su accuracy, y la media. Con fuga: 1, 1, 1, 1, 1 → 1.0; con pipeline:
  1, 1, 0.5, 1, 1 → 0.9; sin escalar: 0.5, 0, 0, 0, 0 → 0.1. Los valores aparecen solo después de resolver el chequeo que los pide.

Modos por paso: 1) recta de la distancia con la media aprendida, sin cajas ni símbolos; 2) plano sin escalar y escalado (toda la tabla, holdout fijo);
3) cinta con una caja (Escalador) y el pliegue 3 como holdout; 4) los cinco pliegues, el interruptor fuga / pipeline y el marcador; 5) cinta completa con
`fit` y `predict` animados y el estudiante nuevo; 6) la cinta se abre en dos ramas (`ColumnTransformer`: numéricas → Escalador, `turno` → One-hot)
que se juntan antes del kNN; 7) las cajas muestran su nombre (`standardscaler`, `kneighborsclassifier`) y el parámetro con doble guion bajo, y al lado
la receta de R (`recipe` → `prep` → `bake`) como la misma cinta.

## Hipótesis inicial

"Vas a medir qué tan bien predice un modelo con validación cruzada. Antes de empezar, estandarizas todas las columnas con la media y la desviación de
la tabla entera, y después partes en pliegues. ¿Crees que eso le da alguna ventaja injusta al modelo? ¿Por qué sí o por qué no?"

Se muestra otra vez (`#citaHipo`) en el destacado del paso 4.

## Pasos (7)

### Paso 1. La escala se aprende de los datos
- Idea (sin fórmulas ni código): para comparar horas con metros hay que ponerlas en la misma escala, y esa escala **se calcula con los datos**: la
  media y la dispersión de cada columna. Quien calcula la escala decide qué datos "ve".
- Escenario: modo 1. Una recta con las diez distancias como puntos; los dos del examen (5500 y 6000 m, pliegue 3) en `--accent`, los ocho de
  entrenamiento en `--j`. Una barra vertical marca la media. Un interruptor "contar a los del examen" aparece SOLO después del chequeo y mueve la barra
  de 2375 m a 3050 m.
- Chequeo (predicción antes de tocar, sin símbolos): "La distancia media de los 8 de entrenamiento es 2375 m. Si también cuentas a los 2 del examen
  (5500 y 6000 m), la media..."
  - Correcta: "sube (a 3050 m): los del examen tiran de ella". (30 500 / 10 = 3050, verificado.)
  - "No cambia: solo son 2 de 10": dos valores lejanos bastan para moverla 675 m.
  - "Baja": los dos viven más lejos que la media de los otros ocho.
  - "Depende de las horas": la media de la distancia solo usa distancias.
- Texto: si la escala se calcula con los del examen, el examen ya influyó en cómo se preparan los datos de entrenamiento. Eso tiene nombre: **fuga de datos**.
  Cita `raschka6` p. 5 / 175 (reusar el test para elegir el modelo lo vuelve parte del entrenamiento).

### Paso 2. Por qué hace falta escalar aquí
- Idea: kNN mide distancias; con metros y horas en la misma cuenta, una diferencia de 500 m pesa 500 veces más que una de 1 h. Sin escalar, el vecino
  más cercano es "el que vive más cerca", no "el que se parece".
- Escenario: modo 2. Plano horas contra distancia en unidades crudas (se ve casi una línea: todo depende del eje y) y, al tocar "escalar", el mismo plano
  en z. La validación cruzada sin escalar da 0.5, 0, 0, 0, 0 → **0.1** (peor que tirar una moneda: los vecinos por distancia tienen la etiqueta contraria).
- Chequeo (elegir con explicación): "Sin escalar, ¿qué columna decide quién es el vecino más cercano?" Correcta: "la distancia en metros: sus
  diferencias son de cientos o miles; las de horas, de 1 a 9". Pistas: "las horas, porque importan más para aprobar" → "importar para aprobar no es lo
  mismo que pesar en la cuenta de la distancia"; "las dos por igual" → "500 m frente a 1 h: compáralas en el plano".
- Enlace por título a "Estandarización y normalización" (qué es un z-score) y a "kNN y regiones de decisión".
- Cita: `knn3` diap. 13 `feature-scaling` (dulzor y crocancia de 1 a 10 frente a picante hasta 1 000 000: la distancia sería solo picante; el mismo
  fenómeno).

### Paso 3. fit en el entrenamiento, transform en los dos
- Idea: `fit` **aprende** (calcula μ y σ con el entrenamiento); `transform` **aplica** lo aprendido. Al test se le aplica la escala del entrenamiento,
  aunque sus z no queden centradas.
- Notación entra aquí: $z = \dfrac{x - \mu_{\text{train}}}{\sigma_{\text{train}}}$ con números vivos. Con el pliegue 3 como holdout:
  $\mu_{\text{train}} = 2375$, $\sigma_{\text{train}} = 1316.96$; para 6000 m: $z = \frac{6000 - 2375}{1316.96} = 2.75$.
- Escenario: modo 3. La cinta con una sola caja, Escalador, con la memoria vacía. Botón `fit(X_train)`: entran 8 fichas, aparecen μ y σ.
  Botón `transform(X_test)`: los dos puntos de prueba pasan por la caja **sin dejar fichas** y salen con z de `dist` = 2.37 y 2.75.
  Los z de `dist` del entrenamiento van de (1000 − 2375)/1316.96 = −1.04 a (5500 − 2375)/1316.96 = 2.37: el 5500 del test cae en el mismo 2.37 que el
  5500 de la fila 0, y el 6000 da 2.75, por encima de todos. Mostrarlo así en una recta de z.
- Chequeo (cálculo con datos en vivo): "¿Cuánto vale la media de las z de `dist` de los dos estudiantes de prueba?" Correcta: (2.37 + 2.75)/2 = **2.56**
  (tolerancia ±0.02). Error típico que la pista nombra: 0 ("las z del entrenamiento tienen media 0; las del test no, porque se calcularon con la μ de otros").
- `details.profundizar` "¿Y si el test es una sola fila?": con la escala del entrenamiento todo funciona; si en vez de eso le haces `fit` al test, una fila
  sola tiene desviación 0 y queda en z = 0 (ver reto `codigo1`).
- Citas: `knn3` diap. 15 `4/7` (la misma transformación en train y test; min-max falla si los datos nuevos salen del rango: el 6000 de aquí);
  `raschka6` p. 1 / 171 (reusar los parámetros aprendidos en el entrenamiento para transformar datos nuevos: la razón del `Pipeline`).

### Paso 4. Dentro de la validación cruzada: un escalador por pliegue (destacado)
- Idea: en validación cruzada cada pliegue es un "examen" distinto, así que **cada pliegue necesita su propio fit** del escalador, con sus 8 filas.
  Escalar una sola vez antes de partir mete en la memoria las fichas de los 10, incluidas las del examen de cada pliegue.
- Escenario: modo 4. Selector de pliegue y el interruptor fuga / pipeline. En modo pipeline la caja Escalador cambia μ y σ al cambiar de pliegue
  (tabla de estado de arriba); en modo fuga siempre muestra (4.6, 3050) y dos fichas con borde `--bad`. Marcador de los cinco pliegues.
- Chequeo (cálculo con datos en vivo): "Con el pipeline, ¿cuál es la media de `dist` que aprende el escalador en el pliegue que tienes elegido?"
  Valores: 2812.5, 3187.5, 2375, 3500, 3375 (pliegues 1 a 5). Pista 1: "suma las 8 distancias que no son del examen"; pista 2: "y divide entre 8, no entre 10".
  Después del chequeo se encienden los dos marcadores: fuga 1.0, pipeline 0.9, y se resalta el pliegue 3 (el único que cambia) con la explicación de los datos
  (σ de `dist` 1317 frente a 1795; el vecino de la fila 5 pasa de la fila 0 a la fila 3).
- Citas: `raschka6` p. 6 / 176 (k-fold: k − 1 pliegues para entrenar, 1 para evaluar); `fe1` diap. 83 `data-leakage` (fuga de información: estimar medias y
  desvíos en cada split de entrenamiento, Figure 12).
- Enlace por título a "Validación cruzada".

**Destacado con predicción (la confusión natural): "Pero es solo una media... ¿de verdad importa?"**
- Aquí la diferencia es 1.0 frente a 0.9: un punto de diez. La fuga del escalado suele ser pequeña, y por eso se subestima. Con un paso que mira
  la **respuesta** `y`, la fuga es enorme.
- Predicción: "Tienes 40 filas con **1000 columnas de puro ruido** (números al azar) y etiquetas 0/1 que no tienen nada que ver con ellas. Antes de la
  validación cruzada eliges las 5 columnas que mejor separan las etiquetas (`SelectKBest`) usando las 40 filas, y después evalúas una regresión logística
  con 5 pliegues. ¿Qué accuracy esperas?" Opciones: "alrededor de 0.5: es ruido" / **"alrededor de 0.9"** (correcta) / "exactamente 0.5" / "1.0".
- Salidas reales (`destacado-ruido.py`, semilla 3): selección antes de partir → **0.9**; la misma selección dentro de un pipeline
  (`make_pipeline(SelectKBest(f_classif, k=5), LogisticRegression())`) → **0.475**. Repetido con 100 semillas: 0.845 de media con fuga, 0.5 con pipeline
  (el mínimo con fuga fue 0.625 y el máximo con pipeline 0.75): la fuga gana siempre. Con 1000 columnas, alguna separa las 40 etiquetas por casualidad,
  y si se eligió mirando las filas del examen, el examen sale bien.
- Moraleja: todo lo que aprende de los datos (media, desviación, la media para imputar, qué columnas elegir, las categorías del one-hot, el λ de Box-Cox)
  va dentro del pipeline. Lo que no aprende nada (pasar metros a km, `log1p`) puede ir fuera.
- Muestra de nuevo la hipótesis.
- Texto: el libro (Raschka cap. 6) pasa el pipeline a `cross_val_score` (p. 9-10 / 179-180) pero no menciona la fuga; las diapositivas de feature engineering
  de SM142003 sí (diap. 83) y piden imputar dentro de la validación cruzada (diap. 20).
- Citas: `raschka6` p. 9 / 179 (`cross_val_score(estimator=pipe_lr, X=X_train, y=y_train, cv=10)`: 0.950 +/- 0.014); `fe1` diap. 20 `4/6` (imputar con la
  media o la mediana **dentro** de la validación cruzada).
- `details.profundizar` "¿Por qué la media sola no hizo daño aquí?": para kNN restar una media no cambia ninguna distancia (se resta lo mismo a todos);
  lo que movió el vecino fue la desviación. Comprobado: cambiando solo la línea de la media a `X.mean(axis=0)` la validación cruzada sigue dando 0.9;
  cambiando solo la de la desviación a `X.std(axis=0)`, da 1.0. En un modelo lineal con regularización o en la imputación por la media, la media sí importa.

### Paso 5. El Pipeline: un solo objeto que no se puede usar mal (trampa)
- Idea: `make_pipeline(StandardScaler(), KNeighborsClassifier(n_neighbors=1))` encadena los pasos. `pipe.fit(X, y)` hace `fit_transform` en el escalador y
  `fit` en el kNN; `pipe.predict(X_nuevo)` hace solo `transform` y `predict`. Como `cross_val_score` llama a `fit` en cada pliegue, el pipeline se reajusta
  completo en cada uno: el bucle del paso 4 sin escribirlo.
- Escenario: modo 5. Botones `fit` y `predict` animando la cinta (fichas solo en `fit`). Estudiante nuevo: 1 h, 6000 m.
- Salidas reales: después de `pipe.fit(X, y)` con los diez, `pipe.named_steps["standardscaler"].mean_` → `[   4.6 3050. ]` y `scale_` →
  `[   3.29241553 1795.1323071 ]`; `pipe.predict(np.array([[6., 2000.]]))` → `[1]`.
- **Trampa marcada (la más común en código real)**: preparar a un estudiante nuevo con `StandardScaler().fit_transform(nuevo)` en vez de `esc.transform(nuevo)`.
  Una sola fila tiene desviación 0, `StandardScaler` la deja en z = (0, 0), "el estudiante promedio", y su vecino es siempre la fila 1 (7 h, 2500 m, aprobó):
  **todo estudiante nuevo sale aprobado**. Con (1 h, 6000 m): `transform` → `[0]`, `fit_transform` → `[1]` (reto `codigo1`, verificado). Con el pipeline esto
  no puede pasar: `pipe.predict` nunca vuelve a ajustar.
- Chequeo (predicción antes de tocar): "Llamas a `pipe.predict(X_test)`. ¿Qué hace el escalador con `X_test`?"
  - Correcta: "solo `transform`, con la μ y la σ que aprendió en `fit`".
  - "`fit_transform`: se ajusta al test y lo transforma": eso es justo la trampa; `predict` nunca ajusta.
  - "Nada: el escalador solo actúa en `fit`": también transforma en `predict`; si no, el kNN recibiría metros.
  - "`fit` con el test y con el train juntos": nadie junta nada; la memoria es la del último `fit`.
- Citas: `raschka6` p. 3 / 173 (`make_pipeline(StandardScaler(), PCA(n_components=2), LogisticRegression())`, test accuracy 0.956; transformadores con
  fit/transform y un estimador final con fit/predict); `raschka6` p. 4 / 174 (qué hace `fit` y qué hace `predict` en cada paso; la Figure 6.1 está en la p. 5 / 175).
- Errata para decir con naturalidad: en el ejemplo ROC del mismo capítulo (p. 28 / 198) el pipeline deja `PCA(n_components=2)` con solo dos columnas: el PCA
  solo rota, no reduce. No es un error de cálculo, pero confunde si se lee como "reducción".

### Paso 6. ColumnTransformer: cada columna con su preparación (trampa)
- Idea: las columnas numéricas se escalan y las de texto se convierten en columnas 0/1 (one-hot). `ColumnTransformer` aplica a cada grupo su transformador
  y junta el resultado; va como primer paso del pipeline. El one-hot también **aprende** (qué categorías existen), así que también va dentro.
- Escenario: modo 6. La cinta se abre en dos ramas: `num` (horas, dist → StandardScaler) y `cat` (turno → OneHotEncoder), y se junta en 5 columnas:
  `['num__horas' 'num__dist' 'cat__turno_mañana' 'cat__turno_noche' 'cat__turno_tarde']` (salida real de `get_feature_names_out()` con los diez).
  La fila 3 (turno noche) queda `[[-1.093 -0.028  0.     1.     0.   ]]`.
- **Trampa marcada**: "noche" aparece solo en la fila 3 (py), que cae en el examen del pliegue 2. El one-hot de ese pliegue aprendió solo "mañana" y "tarde";
  al transformar el test encuentra "noche" y falla. `cross_val_score` **no se detiene**: pone `nan` en ese pliegue y avisa con un `UserWarning`
  ("Scoring failed. The score on this train-test partition for these parameters will be set to nan. Details: ... ValueError: Found unknown categories
  ['noche'] in column 0 during transform"). Salida: `[ 1. nan  0.  1.  1.]`, y la media de eso es `nan`. Con `handle_unknown="ignore"` la categoría nueva
  queda en ceros: `[1. 1. 0. 1. 1.]`, media 0.8 (reto `codigo3`).
- Chequeo (predicción antes de tocar): "En el pliegue 2, el estudiante de turno noche está en el examen. ¿Qué pasa al evaluar?"
  - Correcta: "ese pliegue sale `nan`, con un aviso, y la validación sigue".
  - "Se detiene con un error": el error ocurre dentro, pero `cross_val_score` lo captura (`error_score=np.nan` por defecto).
  - "Lo codifica como mañana": el one-hot no adivina.
  - "Nada, porque el one-hot no aprende": sí aprende: guarda las categorías que vio en `fit`.
- Texto: la página dice que `ColumnTransformer` no aparece en Raschka cap. 6 ni en el material publicado; en R, la receta hace lo mismo con selectores
  (`step_normalize(all_numeric_predictors())`, `step_dummy(all_nominal_predictors())`) y `step_novel()` resuelve las categorías nuevas.
- Citas: `fe1` diap. 82 `sequential-steps` (orden de los pasos: quitar varianza cero, imputar, asimetría, estandarizar, PCA, dummies); `fe1` diap. 60 `7/10`
  (`step_novel()` para categorías nuevas).

### Paso 7. Nombres de los pasos y la misma idea en R
- Idea (el paso más técnico): `make_pipeline` nombra cada paso con el nombre de su clase en minúsculas (`standardscaler`, `kneighborsclassifier`); para tocar
  un parámetro de un paso se escribe `paso__parametro` con **doble guion bajo**: `pipe.set_params(kneighborsclassifier__n_neighbors=3)`. Así lo usa la búsqueda
  en rejilla. Con `ColumnTransformer` se encadenan: `columntransformer__cat__handle_unknown`.
- Salidas reales: `pipe.steps` → `[('standardscaler', StandardScaler()), ('kneighborsclassifier', KNeighborsClassifier(n_neighbors=1))]`; validación cruzada
  (`KFold(5)`) con k = 1, 3, 5: **0.9, 0.8, 0.5**.
- R: la receta es el pipeline. `recipe(aprobo ~ horas + dist, data = entreno) |> step_normalize(all_numeric_predictors())`; `prep` = `fit` (estima μ y σ con
  `entreno`), `bake` = `transform`. Con el pliegue 3 (`receta.R`): `tidy(ajustada, number = 1)` da medias 5.12 y 2375 y desviaciones 3.72 y 1408 (R usa n − 1);
  `bake` del test da `-0.840  2.22` y `-0.571  2.57`. En un `workflow` con `fit_resamples` o en `caret::train(preProcess = c("center", "scale"))` el prep se
  repite dentro de cada pliegue, igual que el pipeline.
- Escenario: modo 7. Las cajas con su nombre y una caja de texto donde se arma `kneighborsclassifier__n_neighbors` tocando piezas; al lado, la cinta de R
  con `recipe → prep → bake → modelo`.
- Chequeo (elegir con explicación): "¿Cómo le pides al pipeline que use 3 vecinos?"
  - Correcta: `pipe.set_params(kneighborsclassifier__n_neighbors=3)`.
  - `pipe.set_params(n_neighbors=3)`: el pipeline no sabe de qué paso hablas. Error real en 1.6.1: `ValueError: Invalid parameter 'n_neighbors' for estimator
    Pipeline(...). Valid parameters are: ['memory', 'steps', 'transform_input', 'verbose'].`
  - `pipe.set_params(kneighborsclassifier_n_neighbors=3)`: un solo guion bajo no separa paso y parámetro (mismo `ValueError`, con `'kneighborsclassifier_n_neighbors'`).
  - `pipe.n_neighbors = 3`: crea un atributo suelto que nadie lee (verificado: `pipe[-1].n_neighbors` sigue en 1).
- Citas: `raschka6` p. 15 / 185 (explica por qué se escribe `'logisticregression__C'`: para llegar al objeto dentro del pipeline); `raschka6` p. 16 / 186
  (`param_grid` con `svc__C` y `svc__gamma`); `fe1` diap. 84 `putting-the-process-together` (`recipe` + `step_*`, `prep` estima, `bake` aplica; caret lo
  hace dentro de cada fold); `knn3` diap. 30 `k-nn-using-the-tidymodels-modelling-framework` (`recipe` con `step_normalize`, `vfold_cv`, `tune`);
  `knn3real` sección 7 `preprocesamiento-de-datos-feature-engineering` (`step_normalize` "obligatorio para KNN" dentro de la receta).
- Errata para decir con naturalidad: en `fe1` diap. 79, `step_center/step_scale/step_pca(all_numeric())` no excluye la respuesta: `Sale_Price` entra al PCA
  (fuga del target, la peor de todas). Las diap. 85 y 86 sí la excluyen con `-all_outcomes()`.
- Enlaces por título: "Ajuste de hiperparámetros y búsqueda en rejilla" y "Un flujo de modelado reproducible en R".

## Vida real (Python y R)

Python 3.13 con NumPy 2.1.3 y scikit-learn 1.6.1; R 4.6.1 con caret 7.0.1. Los dos programas están guardados, tal como se ejecutaron, en
`brain/especificaciones/tanda-10/codigo-sklearn-pipeline/vida-real.py` y `vida-real.R`. **Copiar desde esos archivos**, no desde aquí, para no perder
espacios; el texto de abajo es el mismo con el id delante.

Algoritmo: la validación cruzada de 5 pliegues **con el escalado dentro de cada pliegue**, escrita a mano (μ y σ del `entreno`, transformar los dos lados,
1 vecino), y al final la librería hace lo mismo: `cross_val_score` con un pipeline en Python, `caret::train` con `preProcess` en R (que preprocesa dentro de
cada remuestreo). Los cinco números coinciden.

### Python

```
imp: import numpy as np
imp: from sklearn.pipeline import make_pipeline
imp: from sklearn.preprocessing import StandardScaler
imp: from sklearn.neighbors import KNeighborsClassifier
imp: from sklearn.model_selection import KFold, cross_val_score
datos1: horas = np.array([10, 7, 9, 1, 2, 3, 7, 5, 1, 1])
datos2: dist = np.array([5500, 2500, 2000, 3000, 5500, 6000, 1000, 1500, 1500, 2000])  # metros
matriz: X = np.column_stack([horas, dist]).astype(float)
etiq: y = np.array([1, 1, 1, 0, 0, 0, 1, 1, 0, 0])       # inventado: 1 = aprobó
ac0: aciertos = []
forf: for f in range(5):
prueba:     prueba = [2 * f, 2 * f + 1]
entreno:     entreno = [i for i in range(10) if i not in prueba]
media:     media = X[entreno].mean(axis=0)           # fit: solo con su train
desv:     desv = X[entreno].std(axis=0)
ze:     Ze = (X[entreno] - media) / desv          # transform del train
zp:     Zp = (X[prueba] - media) / desv           # transform del test, con lo del train
bien0:     bien = 0
fori:     for i in range(2):
d2:         d2 = ((Ze - Zp[i]) ** 2).sum(axis=1)
vecino:         vecino = d2.argmin()
si:         if y[entreno][vecino] == y[prueba][i]:
suma:             bien = bien + 1
guarda:     aciertos.append(bien / 2)
imp1: print(aciertos)
imp2: print(np.mean(aciertos))
pipe: pipe = make_pipeline(StandardScaler(), KNeighborsClassifier(n_neighbors=1))
lib: print(cross_val_score(pipe, X, y, cv=KFold(5)))
```

Salida real:
```
[1.0, 1.0, 0.5, 1.0, 1.0]
0.9
[1.  1.  0.5 1.  1. ]
```

### R

```
datos1: horas <- c(10, 7, 9, 1, 2, 3, 7, 5, 1, 1)
datos2: dist <- c(5500, 2500, 2000, 3000, 5500, 6000, 1000, 1500, 1500, 2000)  # metros
matriz: X <- cbind(horas, dist)
etiq: y <- c(1, 1, 1, 0, 0, 0, 1, 1, 0, 0)       # inventado: 1 = aprobó
ac0: aciertos <- c()
forf: for (f in 1:5) {
prueba:   prueba <- c(2 * f - 1, 2 * f)
entreno:   entreno <- setdiff(1:10, prueba)
media:   media <- colMeans(X[entreno, ])           # fit: solo con su train
desv:   desv <- apply(X[entreno, ], 2, sd)
ze:   Ze <- scale(X[entreno, ], media, desv)    # transform del train
zp:   Zp <- scale(X[prueba, ], media, desv)     # transform del test, con lo del train
bien0:   bien <- 0
fori:   for (i in 1:2) {
d2:     d2 <- colSums((t(Ze) - Zp[i, ])^2)
vecino:     vecino <- which.min(d2)
si:     if (y[entreno][vecino] == y[prueba][i]) {
suma:       bien <- bien + 1
-:     }
-:   }
guarda:   aciertos <- c(aciertos, bien / 2)
-: }
imp1: print(aciertos)
imp2: print(mean(aciertos))
pipe: suppressMessages(library(caret))
pipe: datos <- data.frame(horas, dist, aprobo = factor(y))
pipe: folds <- lapply(1:5, function(f) setdiff(1:10, c(2 * f - 1, 2 * f)))
pipe: ctrl <- trainControl(method = "cv", index = folds)
pipe: modelo <- suppressWarnings(train(aprobo ~ ., data = datos, method = "knn",
pipe:                 tuneGrid = data.frame(k = 1),
pipe:                 preProcess = c("center", "scale"), trControl = ctrl))
lib: print(modelo$resample$Accuracy)
```

Salida real:
```
[1] 1.0 1.0 0.5 1.0 1.0
[1] 0.9
[1] 1.0 1.0 0.5 1.0 1.0
```

Notas del código R (para narrar):
- `scale(x, media, desv)` con centro y escala dados es el `transform`: no recalcula nada. Sin esos argumentos (`scale(x)`) haría `fit_transform` sobre lo que reciba.
- `suppressWarnings` tapa un aviso real y sin importancia: `There were missing values in resampled performance measures.` Es el Kappa, que no se puede
  calcular en los pliegues cuyo test tiene una sola clase (pliegues 1, 3 y 5, por ejemplo). La accuracy no se ve afectada. Decirlo en la página.
- `index = folds` fija los mismos cinco pliegues que el bucle (caret, por defecto, sortea los suyos).
- Las varias líneas con id `pipe` se iluminan juntas (el motor resalta todas las líneas con el id del evento).

### Eventos

Una sola lista `EV` para los dos lenguajes:
`imp` (1) + `datos1`, `datos2`, `matriz`, `etiq`, `ac0` (5) + por cada pliegue `forf`, `prueba`, `entreno`, `media`, `desv`, `ze`, `zp`, `bien0` (8 × 5 = 40)
+ por cada punto de prueba `fori`, `d2`, `vecino`, `si` (4 × 10 = 40) + `suma` en los 9 aciertos (todos menos el segundo punto del pliegue 3) + `guarda` (5)
+ `imp1`, `imp2`, `pipe`, `lib` (4) = **104 eventos**. Usar `#vrFases` con siete fases (Datos, Pliegue 1 ... Pliegue 5, Librería) para saltar.
`imp` solo existe en Python: en R se narra "En R no hace falta importar nada para el bucle; caret se carga al final, para comparar."

Foto de estado por evento (los números están en la tabla de estado por pliegue):
- `prueba`, `entreno`: índices como los escribe cada lenguaje (`ctx.ix`): pliegue 1 → `[0, 1]` y los otros 8 en Python; `1 2` y `3 ... 10` en R.
- `media`, `desv`: la caja Escalador recibe 8 fichas (`--j`), ninguna de prueba; chips con μ y σ. **σ distinta por lenguaje** (py ddof 0, R n − 1): mostrar la
  de cada uno y narrar en el pliegue 1 "R divide entre n − 1 y Python entre n; los vecinos no cambian porque las dos columnas se encogen en la misma proporción".
- `ze`, `zp`: el plano z se redibuja; los dos puntos de prueba en `--accent`.
- `d2`, `vecino`: una línea del punto de prueba a su vecino; `vecino` es la posición en `entreno` (py 0, R 1 en el pliegue 1).
- `si`, `suma`: el punto se pinta `--ok` o `--bad`. El fallo (pliegue 3, segundo punto: 3 h y 6000 m, vecino la fila 0 de py / 1 de R, que aprobó) se narra con
  la explicación de la σ.
- `guarda`: casilla del marcador con 1.0, 1.0, 0.5, 1.0, 1.0.
- `imp1`, `imp2`: lista y 0.9.
- `pipe`, `lib`: la cinta del pipeline se ilumina; los cinco números de la librería caen encima de los del bucle y coinciden.

### Predicción antes de reproducir (`#vrPred`)

"¿Cuántas veces se ejecuta la línea `media = X[entreno].mean(axis=0)`?" Respuesta **5**: una por pliegue; el escalador se vuelve a ajustar cada vez.
Distractores: 1 ("una sola vez, como cuando se escala antes de partir": esa es la fuga), 10 (las veces que corre el `for` de los puntos de prueba), 8 (las filas de
entrenamiento). Pista: "la línea está dentro del `for f`, fuera del `for i`".

### Trampas reales (retos `codigo1` a `codigo3`)

Los tres programas están en `codigo-sklearn-pipeline/` tal como se ejecutaron.

**codigo1: `fit_transform` a un estudiante nuevo (Python).** `codigo1.py`:
```
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
X = np.array([[10, 5500], [7, 2500], [9, 2000], [1, 3000], [2, 5500],
              [3, 6000], [7, 1000], [5, 1500], [1, 1500], [1, 2000]], dtype=float)
y = np.array([1, 1, 1, 0, 0, 0, 1, 1, 0, 0])
esc = StandardScaler().fit(X)
knn = KNeighborsClassifier(n_neighbors=1).fit(esc.transform(X), y)
nuevo = np.array([[1.0, 6000.0]])                   # 1 hora, 6 km
print(knn.predict(esc.transform(nuevo)))
print(knn.predict(StandardScaler().fit_transform(nuevo)))
```
Salida real:
```
[0]
[1]
```
Pregunta: "¿Por qué la segunda predicción dice que aprueba?" Correcta: "`fit_transform` vuelve a ajustar con una sola fila: su media es ella misma y su
desviación 0, así que queda en (0, 0), el estudiante promedio, cuyo vecino aprobó. Pasa con cualquier estudiante nuevo." (Verificado: `StandardScaler().fit_transform([[9.0, 1000.0]])`
→ `[[0. 0.]]`; el vecino de (0, 0) en la escala de toda la tabla es la fila 1.) Distractores: "kNN con k = 1 es inestable" (con `transform` acierta);
"el estudiante está fuera del rango" (6000 m es el máximo, pero `transform` lo maneja); "falta escalar `y`" (las etiquetas no se escalan).

**codigo2: `cv=5` no es `KFold(5)` (Python).** `codigo2.py`:
```
import numpy as np
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import KFold, cross_val_score
X = np.array([[10, 5500], [7, 2500], [9, 2000], [1, 3000], [2, 5500],
              [3, 6000], [7, 1000], [5, 1500], [1, 1500], [1, 2000]], dtype=float)
y = np.array([1, 1, 1, 0, 0, 0, 1, 1, 0, 0])
pipe = make_pipeline(StandardScaler(), KNeighborsClassifier(n_neighbors=1))
print(cross_val_score(pipe, X, y, cv=KFold(5)).mean())
print(cross_val_score(pipe, X, y, cv=5).mean())
```
Salida real:
```
0.9
1.0
```
Pregunta: "Mismo pipeline, mismos datos. ¿Por qué cambia?" Correcta: "con un clasificador, `cv=5` usa `StratifiedKFold(5)`, que arma otros pliegues (cada uno con
un 0 y un 1: test [0 3], [1 4], [2 5], [6 8], [7 9]); con 10 filas, cambiar los pliegues cambia el número". Distractores: "`cv=5` baraja al azar" (no baraja: es
determinista); "uno de los dos tiene fuga" (los dos usan el pipeline); "`KFold` usa 4 pliegues" (son 5). Cita `raschka6` p. 8 / 178 (k-fold estratificado conserva la
proporción de clases). Moraleja: con pocos datos, el número de la validación cruzada es ruidoso; compara versiones con los mismos pliegues.

**codigo3: la categoría que el pliegue no vio (Python).** `codigo3.py`:
```
import numpy as np
import pandas as pd
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import KFold, cross_val_score
df = pd.DataFrame({"horas": [10, 7, 9, 1, 2, 3, 7, 5, 1, 1],
                   "dist": [5500, 2500, 2000, 3000, 5500, 6000, 1000, 1500, 1500, 2000],
                   "turno": ["mañana", "tarde", "tarde", "noche", "mañana",
                             "tarde", "mañana", "mañana", "tarde", "tarde"]})
y = np.array([1, 1, 1, 0, 0, 0, 1, 1, 0, 0])
prep = ColumnTransformer([("num", StandardScaler(), ["horas", "dist"]),
                          ("cat", OneHotEncoder(), ["turno"])])
pipe = make_pipeline(prep, KNeighborsClassifier(n_neighbors=1))
print(cross_val_score(pipe, df, y, cv=KFold(5)))
pipe.set_params(columntransformer__cat__handle_unknown="ignore")
print(cross_val_score(pipe, df, y, cv=KFold(5)))
```
Salida real (stdout; el aviso va a stderr):
```
[ 1. nan  0.  1.  1.]
[1. 1. 0. 1. 1.]
```
Aviso real, primera línea (a stderr): `UserWarning: Scoring failed. The score on this train-test partition for these parameters will be set to nan. Details:`
seguido del traceback que termina en `ValueError: Found unknown categories ['noche'] in column 0 during transform`.
Pregunta: "¿Qué pasó en el segundo pliegue?" Correcta: "el one-hot de ese pliegue no vio 'noche' en su entrenamiento y falló al transformar el test;
`cross_val_score` lo convirtió en `nan` y siguió". Distractores: "el kNN no acepta texto" (el texto ya llegó convertido a 0/1 en los otros pliegues); "`noche` está
mal escrito" (está bien escrito: solo aparece una vez); "la fuga lo arregló" (aquí no hay fuga: es justamente lo honesto). Nota: el pliegue 3 da 0 con `turno`
incluido (antes 0.5): la columna nueva cambia las distancias; no es parte de la pregunta.

`p.vr-nota`: la versión de una línea es `cross_val_score(make_pipeline(StandardScaler(), KNeighborsClassifier(n_neighbors=1)), X, y, cv=KFold(5))` en Python y
`train(..., preProcess = c("center", "scale"))` (o un `workflow` con receta y `fit_resamples`) en R.
`details.profundizar` "La misma receta en R, paso por paso" (`receta.R`, verificado):
```
suppressMessages(library(recipes))
datos <- data.frame(horas = c(10, 7, 9, 1, 2, 3, 7, 5, 1, 1),
                    dist = c(5500, 2500, 2000, 3000, 5500, 6000, 1000, 1500, 1500, 2000),
                    aprobo = factor(c(1, 1, 1, 0, 0, 0, 1, 1, 0, 0)))
entreno <- datos[-c(5, 6), ]
prueba <- datos[c(5, 6), ]
receta <- recipe(aprobo ~ horas + dist, data = entreno) |>
  step_normalize(all_numeric_predictors())
ajustada <- prep(receta, training = entreno)
print(tidy(ajustada, number = 1))
print(bake(ajustada, new_data = prueba))
```
Salida real:
```
# A tibble: 4 × 4
  terms statistic   value id             
  <chr> <chr>       <dbl> <chr>          
1 horas mean         5.12 normalize_OofVU
2 dist  mean      2375    normalize_OofVU
3 horas sd           3.72 normalize_OofVU
4 dist  sd        1408.   normalize_OofVU
# A tibble: 2 × 3
   horas  dist aprobo
   <dbl> <dbl> <fct> 
1 -0.840  2.22 0     
2 -0.571  2.57 0     
```
Ojo: el sufijo del `id` (`normalize_OofVU`) es aleatorio y cambia en cada ejecución; la página puede mostrarlo tal cual con una nota, o quitar esa columna
con `[, 1:3]` (si se cambia, volver a correrlo).

## Retos (11)

RETOS = ["ojo", "construir", "mano", "error", "prop1", "prop2", "prop3", "codigo1", "codigo2", "codigo3", "formula"]

1. **ojo** (ojo clínico, 8 rondas al azar, aprueba con 7 de 8): se muestra un fragmento de código y Francisco decide sin ejecutar **"fuga"** o **"sin fuga"**.
   Banco (la explicación de cada ronda dice qué aprende el paso y con qué filas):
   - `X = StandardScaler().fit_transform(X)` y después `cross_val_score(knn, X, y, cv=5)` → fuga (μ y σ con todas las filas).
   - `cross_val_score(make_pipeline(StandardScaler(), knn), X, y, cv=5)` → sin fuga.
   - `esc.fit(X_train)`; `knn.fit(esc.transform(X_train), y_train)`; `knn.score(esc.transform(X_test), y_test)` → sin fuga.
   - `esc.fit(X)` y después `train_test_split(...)` → fuga.
   - `X = SelectKBest(k=5).fit_transform(X, y)` antes de `cross_val_score` → fuga (y además mira `y`: la peor).
   - `df["edad"] = df["edad"].fillna(df["edad"].mean())` antes de partir → fuga (la media para imputar incluye el test).
   - `X[:, 1] = X[:, 1] / 1000` (metros a km) antes de partir → sin fuga (no aprende nada de los datos: dividir entre 1000 es igual para cualquiera).
   - `X = np.log1p(X)` antes de partir → sin fuga (transformación fija).
   - R: `datos$dist <- scale(datos$dist)` y después `vfold_cv(datos, v = 5)` → fuga.
   - R: `workflow() |> add_recipe(receta) |> add_model(modelo)` con `fit_resamples(..., resamples = pliegues)` → sin fuga.
   - R: `prep(receta, training = datos)` con todos los datos y después partir → fuga.
   - `make_pipeline(StandardScaler(), knn).fit(X_train, y_train).predict(X_test)` → sin fuga.
2. **construir** (manipular el escenario hasta cumplir): partiendo de una cinta vacía y una bandeja de bloques (StandardScaler, OneHotEncoder, ColumnTransformer,
   KNeighborsClassifier, SelectKBest) que se ponen tocando, lograr:
   (a) un pipeline que deje la validación cruzada de `horas` y `dist` en **0.9** sin fuga (Escalador → kNN con k = 1, interruptor en "pipeline");
   (b) con `turno` incluido, que **ningún pliegue salga `nan`** (ColumnTransformer con one-hot y `handle_unknown="ignore"`: marcador 1, 1, 0, 1, 1 → 0.8);
   (c) poner el interruptor en "fuga" y encontrar el **único pliegue** cuyo número cambia (tocar el pliegue 3).
   Ok al cumplir las tres. Si arma kNN antes del Escalador, el escenario dice "el kNN recibiría metros: el escalador va primero".
3. **mano** (a mano, datos al azar, pistas escalonadas, reintentable): se generan 5 distancias de entrenamiento en múltiplos de 500 entre 500 y 6000 y una de prueba.
   Pide: (1) la media de entrenamiento; (2) la media que saldría si también contaras la de prueba (la fuga); (3) la z de la prueba usando la media y la desviación
   (ddof 0) del entrenamiento, redondeada a 2 decimales (tolerancia ±0.01; si la cuenta de la desviación es larga, la página la da hecha y pide solo la z).
   Pistas: 1) "suma las 5 y divide entre 5"; 2) "para la fuga son 6 valores"; 3) primera parte resuelta con números.
4. **error** (cazar el error, 3 variantes del código de Vida real, una línea mal; salidas reales):
   - V1 (Python): `desv = X.std(axis=0)` en lugar de `X[entreno].std(axis=0)`. Salida: `[1.0, 1.0, 1.0, 1.0, 1.0]` y `1.0`. La desviación vio el test:
     sube a 1.0 (la fuga del paso 4). Bonus en la explicación: si el error estuviera solo en la media (`media = X.mean(axis=0)`), la salida seguiría en 0.9
     (restar una media no cambia distancias): por eso esta fuga se esconde.
   - V2 (Python): `Zp = (X[prueba] - X[prueba].mean(axis=0)) / X[prueba].std(axis=0)` (ajusta la escala con el propio test). Salida: un
     `RuntimeWarning: invalid value encountered in divide` y `[0.0, 1.0, 0.5, 0.5, 0.0]`, `0.4`. Con dos filas de test, cada z es ±1, y en el pliegue 5 las dos
     tienen 1 hora: desviación 0, división entre 0, `nan`.
   - V3 (R): `desv <- apply(X, 2, sd)` en lugar de `apply(X[entreno, ], 2, sd)`. Salida: `[1] 1 1 1 1 1` y `[1] 1`.
5. **prop1** (opción múltiple, `mezclar: true`, reintentable): "¿Qué hace `pipe.fit(X_train, y_train)` con un `make_pipeline(StandardScaler(), KNeighborsClassifier())`?"
   Correcta: "`fit_transform` en el escalador con `X_train` y `fit` en el kNN con lo transformado". Pistas: "`fit` en los dos con `X_train` crudo" → "el kNN tiene que
   recibir los datos ya escalados"; "`transform` en el escalador y `fit` en el kNN" → "sin `fit` el escalador no tiene μ ni σ que aplicar"; "`fit_transform` en los dos"
   → "el kNN es el último paso: estima, no transforma".
6. **prop2**: "¿Cuál de estos pasos puede ir FUERA del pipeline sin fuga?" Correcta: "pasar la distancia de metros a kilómetros". Pistas: "imputar con la mediana" → "la mediana
   se calcula con los datos"; "elegir las 10 columnas más correlacionadas con `y`" → "mira la respuesta: la fuga más grave"; "el one-hot de una columna de texto" → "aprende
   qué categorías existen (paso 6)".
7. **prop3**: "¿Cómo se llama el parámetro `C` del paso `LogisticRegression` dentro de un `make_pipeline`?" Correcta: `logisticregression__C`. Pistas: `C` → "el pipeline no
   sabe de qué paso hablas"; `LogisticRegression__C` → "`make_pipeline` usa el nombre en minúsculas"; `logisticregression_C` → "son dos guiones bajos". (Raschka p. 15 / 185.)
8. **codigo1**, 9. **codigo2**, 10. **codigo3**: ver Vida real.
11. **formula**: la parte de memoria (`B.ordenar`), registrada con `C.reto("formula", ok)`.

## Memoria

**B.ordenar** (la línea que evalúa sin fuga), piezas en orden:
1. `cross_val_score(`
2. `make_pipeline(`
3. `StandardScaler(),`
4. `KNeighborsClassifier(n_neighbors=1)`
5. `),`
6. `X, y, cv=KFold(5))`

Resultado: `cross_val_score(make_pipeline(StandardScaler(), KNeighborsClassifier(n_neighbors=1)), X, y, cv=KFold(5))` → `[1.  1.  0.5 1.  1. ]`.
Distractores: `StandardScaler().fit_transform(X),` (la fuga), `.fit_transform(X_test)` (la trampa del paso 5), `n_neighbors__k=1` (nombre inventado).

**Tarjetas (8):**
1. ¿Qué aprende `StandardScaler` en `fit`? → La media y la desviación de cada columna (`mean_`, `scale_`), con las filas que le pases.
2. ¿Qué es la fuga de datos? → Que algo calculado con el test (una media, una selección de columnas) entre en el entrenamiento. La evaluación sale optimista.
3. ¿Por qué no escalar antes de la validación cruzada? → Porque cada pliegue es un examen distinto y su escala tiene que salir solo de sus filas de entrenamiento.
4. ¿Qué hace `pipe.predict`? → Pasa los datos por `transform` en cada paso y `predict` en el último. Nunca vuelve a ajustar.
5. ¿Qué pasa con `StandardScaler().fit_transform` de una sola fila nueva? → Queda en ceros: la fila es su propia media y su desviación es 0. Usa `transform`.
6. ¿Para qué sirve `ColumnTransformer`? → Para dar a cada grupo de columnas su preparación (escalar números, one-hot a textos) y juntarlas antes del modelo.
7. ¿Cómo se nombra un parámetro dentro del pipeline? → `paso__parametro`, con doble guion bajo: `kneighborsclassifier__n_neighbors`.
8. ¿Cuál es el pipeline de R? → La receta: `recipe` + `step_*`; `prep` es el `fit` y `bake` el `transform`. En un `workflow` o en `caret::train` se ajusta dentro de cada pliegue.

## Citas (14)

| id de fuente | página PDF / diapositiva | página impresa o ancla | sección | qué hay | cuándo leerla |
|---|---|---|---|---|---|
| raschka6 | 5 | 175 | The holdout method | reusar el test para elegir el modelo lo vuelve parte del entrenamiento | Paso 1 |
| knn3 | 13 | `feature-scaling` | 3.3.1 Feature scaling | dulzor y crocancia (1-10) frente a picante (hasta 1 000 000): sin escalar, la distancia es solo picante | Paso 2 |
| knn3 | 15 | `4/7` | 3.3.3 Consideraciones prácticas | la misma transformación en train y test; min-max falla si los datos nuevos salen del rango | Paso 3 |
| raschka6 | 1 | 171 | Streamlining workflows with pipelines | reusar los parámetros aprendidos en el entrenamiento para transformar datos nuevos; la clase `Pipeline` | Paso 3, al terminar |
| raschka6 | 6 | 176 | K-fold cross-validation | k − 1 pliegues para entrenar, 1 para evaluar; k modelos | Paso 4 |
| fe1 | 83 | `data-leakage` | 8.3 Data leakage | usar información de fuera del fold de entrenamiento; estimar medias y desvíos en cada split (Figure 12) | Paso 4 |
| fe1 | 20 | `4/6` | 3.4.1 Imputación estadística | media o mediana; imputar dentro de la validación cruzada | Destacado del paso 4 |
| raschka6 | 9 | 179 | Stratified k-fold / cross_val_score | `cross_val_score(estimator=pipe_lr, ..., cv=10)`: 0.950 +/- 0.014; el pipeline va entero a la validación | Destacado del paso 4 y reto `codigo2` (estratificado: p. 8 / 178) |
| raschka6 | 3 | 173 | Combining transformers and estimators in a pipeline | `make_pipeline(StandardScaler(), PCA(n_components=2), LogisticRegression())`, test 0.956 | Paso 5 |
| raschka6 | 4 | 174 | idem | qué hace `fit` y qué hace `predict` en cada paso (Figure 6.1 en la p. 5 / 175) | Paso 5, al terminar |
| raschka6 | 15 | 185 | Addressing over- and underfitting with validation curves | por qué se escribe `'logisticregression__C'`: para llegar al paso dentro del pipeline | Paso 7 y reto `prop3` |
| fe1 | 84 | `putting-the-process-together` | 8.4 Putting the process together | `recipe` + `step_*`, `prep` estima, `bake` aplica; caret lo hace dentro de cada fold | Paso 7 |
| knn3 | 30 | `k-nn-using-the-tidymodels-modelling-framework` | 4.6 k-NN con tidymodels | receta con `step_zv` y `step_normalize`, `vfold_cv(v = 10, repeats = 5)`, `tune` (script sin salida) | Paso 7 |
| knn3real | 7 | `preprocesamiento-de-datos-feature-engineering` | 7 Preprocesamiento | receta del caso de diabetes con `step_normalize` ("obligatorio para KNN") dentro del workflow | Paso 7, al terminar |

Son 14 (el máximo). Alternativas si el constructor quiere cambiar alguna (también verificadas en los mapas): `knn3` diap. 14 `4/6` (min-max y z-score con fórmula, paso 2),
`raschka6` p. 8 / 178 (k-fold estratificado, para `codigo2`), `raschka6` p. 16 / 186 (`param_grid` con `svc__C`), `fe1` diap. 82 `sequential-steps` (orden de los pasos,
paso 6), `fe1` diap. 60 `7/10` (`step_novel()`, paso 6).

Formato de cita: `raschka6` lleva `data-pag` = PDF y `data-pimp` = impresa (impresa = PDF + 170). `knn3` y `fe1` son diapositivas: `data-pag` = número de diapositiva,
`data-ancla` = ancla sin `#/`. `knn3real` es documento: `data-pag` = número de sección y `data-ancla` = id de la sección (sin `#`), como en las páginas que ya lo citan.

Verificado por mí: `raschka6` PDF 4-5 leídas con `pdftotext` (texto de `make_pipeline`, test 0.956, fit y predict por dentro, Figure 6.1 en la 5); la explicación
de `'logisticregression__C'` está en la **PDF 15** (el código con `param_name` está en la 14; el mapa da "13-14" para las curvas de validación y "15" para la lectura:
citar 15 para el nombre); `svc__C` en la PDF 16; el capítulo entero no contiene "leak" ni "ColumnTransformer". El resto, según los mapas
`brain/fuentes/raschka-cap6.md`, `sm142003-ud3-knn.md` y `sm142003-ud1-fe.md` (verificados por quien los escribió).

## Erratas e inconsistencias del material (para decir con naturalidad)

- **Raschka cap. 6**: usa el pipeline dentro de `cross_val_score` y de `GridSearchCV` sin explicar que eso evita la fuga; tampoco presenta `ColumnTransformer`.
  No es un error, es una ausencia: la página lo cuenta.
- **Raschka p. 198 (PDF 28)**: pipeline con `PCA(n_components=2)` sobre dos columnas: solo rota (paso 5).
- **SM142003 UD1 diap. 79**: `step_pca(all_numeric())` sin `-all_outcomes()` mete `Sale_Price` en el PCA: fuga del target (paso 7). La diap. 46 hace lo mismo con
  `step_YeoJohnson(all_numeric())`. Las diap. 85 y 86 lo corrigen.
- **SM142003 UD3 diap. 23-24** (no se cita, solo se menciona si sirve): la normalización min-max se aplica a las 569 filas con `lapply(wbcd[2:31], normalize)` **antes**
  de partir en 469/100: es exactamente la fuga de esta página (pequeña, pero fuga). La versión tidymodels de la diap. 30 la corrige con la receta. Comprobado en el
  mapa: diap. 23 normaliza, diap. 24 parte. Se puede citar `knn3` diap. 23 `5/6` para mostrarlo.
- **SM142003 UD3 caso real**: la importancia por permutación se calcula sobre el train, no sobre el test (no afecta a esta página).

## Riesgos y notas para quien construye

- **Desviación con n o con n − 1**: `StandardScaler` y `X.std()` usan n (ddof 0); `sd()`, `scale()`, `step_normalize` y `preProcess` de R usan n − 1. Las z cambian
  (pliegue 3: Python 2.37 / 2.75; R 2.22 / 2.57) pero los vecinos y la accuracy no, porque las dos columnas se dividen por el mismo factor √(n/(n − 1)).
  Mostrar en cada lenguaje sus propios números; nunca mezclar.
- El ejemplo es pequeño a propósito: con 10 filas, cambiar los pliegues (reto `codigo2`) o agregar una columna (`turno`) mueve el número. No vender el 0.9 como "la
  verdad": la verdad es que la fuga dio 1.0 por ver el examen.
- `cross_val_score` con un clasificador y `cv=5` usa `StratifiedKFold`; en toda la página se usa `KFold(5)` explícito para que los pliegues sean los de la tabla.
- `KFold(5)` sin `shuffle` toma bloques seguidos; los datos están en el orden de la tabla y no se reordenan.
- Los errores de `set_params` del paso 7 se corrieron en scikit-learn 1.6.1; el mensaje completo repite el pipeline entero: mostrar solo la primera y la última parte.
- La 2.ª opción del paso 1 dice "675 m": 3050 − 2375 = 675.
- El aviso de caret (`missing values in resampled performance measures`) es por el Kappa: decirlo en la narración de la línea `pipe` en R.
- El destacado usa `destacado-ruido.py` (semilla 3): no está en Vida real; es una cifra que se muestra. No hay versión en R de ese experimento (no hace falta).
- No meter `GridSearchCV` completo: solo el nombre del parámetro. Eso es de "Ajuste de hiperparámetros y búsqueda en rejilla".
- Índices: `prueba` y `vecino` con `ctx.ix`; las filas de la tabla se muestran como "fila 5 (py) / 6 (R)".
- Español neutro, tuteo, sin emojis. Datos inventados y declarados en el pie.
