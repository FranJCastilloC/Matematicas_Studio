# Especificación: fit, transform y predict: la interfaz de scikit-learn (sklearn-api)

- Ruta: `scikit-learn` (grupo Programación con datos), orden 1. Tanda 10.
- Archivo: `biblioteca/conceptos/sklearn-api.html`
- Área: Programación con datos. Fuente del catálogo: "Raschka cap. 3; la materia (UD3) no trae material en la carpeta".
- Prerrequisitos: ["Estandarización y normalización"] (`estandarizacion`, listo).
- Siguientes: ["Pipeline: el preprocesado dentro del modelo"] (`sklearn-pipeline`, planeado, tanda 10).
- Aparece: [{ materia: "SM142002", ud: "UD3" }].
- Resumen del catálogo: "Todos los modelos de scikit-learn se usan igual: ajustar con fit y luego transformar o predecir."
- Nota para quien construye: la UD3 de SM142002 (scikit-learn, TensorFlow, Git) **no está publicada** en la carpeta de la materia
  (`brain/fuentes/sm142002-programacion.md`, líneas 46 y 376). La página lo dice con naturalidad ("tu materia todavía no publicó la unidad;
  mientras tanto, esto es lo que vas a ver") y se apoya en Raschka (caps. 3, 4 y 6) y en lo que SM142003 ya te enseñó con R
  (`prep()` / `bake()` en la UD1 y `class::knn` y tidymodels en la UD3 de kNN).

**Sugerencias para la sesión principal (el constructor no las aplica):**
1. Registrar en `biblioteca/fuentes.js` la fuente **`raschka4`** (no existe todavía) y guardar `brain/fuentes/raschka-cap4.md` con las páginas
   verificadas de la sección "Citas" de abajo:
   ```
   raschka4: {
     corto: "Raschka cap. 4",
     titulo: "Machine Learning with PyTorch and Scikit-Learn, cap. 4: Building Good Training Datasets – Data Preprocessing",
     autor: "Raschka, Liu y Mirjalili",
     archivo: "/Users/franciscocastillo/brain/02-Biblioteca/Machine-Learning/PyTorch-Scikit-Learn/Cap04 - Building Good Training Datasets – Data Preprocessing.pdf",
     nota: "Faltantes, la interfaz fit/transform de scikit-learn, categóricas, escalado y selección de variables. Página PDF = impresa − 104."
   }
   ```
   (34 páginas PDF; desfase verificado con `pdftotext -layout` en PDF 4 = p. 108, PDF 5 = 109, PDF 6 = 110, PDF 9 = 113, PDF 16 = 120, PDF 17 = 121,
   PDF 18 = 122.)
2. Considerar "Partición de datos: train, test y fuga de datos" (`particion-train-test`, planeado, que ya está en la ruta `scikit-learn` como orden 2)
   en `siguientes` de `sklearn-api`: el paso 4 la anuncia.

## Foco y límites

Esta página es el **contrato** de scikit-learn: un objeto se crea con sus opciones, `fit` aprende de los datos de entrenamiento y lo guarda
dentro del objeto (atributos con guion bajo final: `mean_`, `scale_`, `centroids_`), y después `transform` o `predict` aplican lo guardado a
datos nuevos sin volver a aprender. Roles: **transformador** (`fit` + `transform`), **predictor** (`fit(X, y)` + `predict`), y el atajo
`fit_transform`. La trampa central: volver a ajustar con los datos de prueba.

No explica:
- la matemática de la estandarización (eso está en "Estandarización y normalización"; aquí se usa la fórmula, no se deriva);
- cómo partir los datos ni la fuga de datos en general (validación cruzada, fuga en los folds): eso es "Partición de datos: train, test y fuga de datos";
- cómo encadenar pasos en un solo objeto: eso es "Pipeline: el preprocesado dentro del modelo" (paso 7 lo anuncia por su título exacto);
- el algoritmo kNN (está en las páginas de kNN de la ruta de clasificación; aquí solo se usa su `fit` como ejemplo de "aprender = guardar").

## Datos de toda la página (inventados, se dice en la página)

Ocho alumnos de entrenamiento y dos nuevos. Una sola variable para que todo se dibuje en una recta.

| alumno | horas de estudio (`x_train`) | aprobó (`y_train`) |
|---|---|---|
| 1 | 2 | 0 |
| 2 | 4 | 0 |
| 3 | 4 | 0 |
| 4 | 4 | 0 |
| 5 | 5 | 1 |
| 6 | 5 | 1 |
| 7 | 7 | 1 |
| 8 | 9 | 1 |

Alumnos nuevos (`x_test`): Eva con **6** horas y Fede con **10** horas. Respuesta verdadera para los retos que la usan: los dos aprobaron (`[1, 1]`).

Cuentas limpias (todas verificadas con NumPy 2.1.3, scikit-learn 1.6.1 y R 4.6.1):
- `fit` del escalador con el train: media 5, varianza 4, **desviación 2** (dividiendo entre n = 8, como `StandardScaler`). `n_samples_seen_` = 8.
- `transform` del train: z = −1.5, −0.5, −0.5, −0.5, 0, 0, 1, 2.
- `transform` del test con lo aprendido del train: Eva 0.5, Fede 2.5. `inverse_transform([[0.5]])` → `[[6.]]`.
- Predictor: `NearestCentroid` (centro más cercano). `fit` con z y las etiquetas: centro de la clase 0 = −0.75 (media de −1.5, −0.5, −0.5, −0.5),
  centro de la clase 1 = 0.75 (media de 0, 0, 1, 2). Frontera en z = 0, es decir x = 5. Con empate exacto (x = 5) sklearn elige la clase 0
  (`predict` de 5, 4.9, 5.1 → `[0 0 1]`); el código de la vida real usa `<=` para coincidir.
- `predict` del test bien hecho: `[1 1]` (los dos aprueban).
- **La trampa**: `fit_transform` sobre el test [6, 10] aprende media 8 y desviación 2; Eva pasa a z = −1 y Fede a z = 1; `predict` → `[0 1]`:
  Eva, que estudió más que la media del curso, sale reprobada. Además el objeto queda con `mean_ = [8.]`: perdió lo que sabía del train.
- Ajustar con todo junto (train + test, 10 valores): media 5.6, desviación 2.33238076; Eva z = 0.17149859, Fede 1.88648444; `predict` → `[1 1]`.
  Aquí no cambia la predicción, pero los números del test ya dependen del test: es la fuga silenciosa.
- `MinMaxScaler` con el train: mínimo 2, máximo 9; Eva 0.57142857, Fede **1.14285714** (fuera de [0, 1], el aviso de la diap. 15 de kNN).
- `KNeighborsClassifier(n_neighbors=3)` con los mismos z: `predict` del test → `[1 1]`; `score(X_test, [1, 1])` → `1.0`.
- R: `scale(x_train)` usa n − 1: centro 5, escala **2.13809**; el 9 queda en 1.8708 (no 2). `recipes::step_normalize` también usa n − 1:
  `bake` del test → 0.4677072 y 2.3385359; `tidy` muestra mean 5 y sd 2.14. `scale(x_test)` (aprende del test, n − 1) → −0.7071068 y 0.7071068.
  `scale(x_test, center = 5, scale = 2)` → 0.5 y 2.5.

## Imagen central

**La máquina con libreta.** El escenario tiene tres zonas, una encima de otra (en móvil se apilan igual):

1. **El objeto** (una tarjeta con forma de máquina): arriba su nombre y sus opciones (`StandardScaler()`; más adelante `NearestCentroid()`),
   en el medio una **libreta** con renglones vacíos (`mean_ = ?`, `scale_ = ?`, `n_samples_seen_ = ?`; para el predictor, `centroids_ = ?`,
   `classes_ = ?`), y abajo tres **ranuras-botón**: `fit`, `transform` y `predict` (`fit_transform` aparece desde el paso 3).
   Los botones grandes ejecutan la llamada; nada depende de arrastrar.
   - `fit(X_train)`: los ocho puntos del train viajan de la recta a la máquina, la libreta se llena (renglones en `--accent` un instante) y la máquina
     devuelve **la misma máquina** (un rótulo "devuelve: el mismo objeto").
   - `transform(X)`: los puntos entran, la máquina **lee** la libreta (renglones iluminados, sin cambiar) y salen en la segunda recta.
   - `fit` con otros datos **borra y reescribe** la libreta (animación de tachado).
   - Llamar `transform` o `predict` con la libreta vacía hace que la máquina "escupa" una tarjeta roja con el error real (`NotFittedError`).
2. **Dos rectas numéricas alineadas**: arriba la de horas (x de 0 a 11), abajo la de z (de −3 a 3). Los puntos del train en `--j`, los del test
   (Eva y Fede) en `--k` con su nombre. Una flecha fina une cada punto con su z. Cuando la libreta está llena, las dos rectas quedan **enganchadas**:
   la marca de la media del train (x = 5) cae justo sobre z = 0 y cada 2 horas es una unidad de z (regla visible).
3. **Interruptor "¿con qué datos haces fit?"**: `train` (por defecto), `test`, `todo junto`. Cambia lo que entra a `fit` y, por lo tanto, la libreta,
   el enganche de las rectas y dónde caen Eva y Fede. En modo `predict` se ven además los dos centros (−0.75 y 0.75) como triángulos en `--neg`
   (clase 0, reprobó) y `--pos` (clase 1, aprobó), la frontera vertical en z = 0 y el color de cada predicción.

Controles extra: un **deslizador "horas del alumno nuevo"** (0 a 12, paso 0.5) que mueve un tercer punto de test (paso 3 en adelante) y muestra su z
viva con la fórmula $z = \frac{x - 5}{2}$; y botones "Vaciar la libreta" y "Volver al inicio".

Modos por paso: `libreta` (1), `fit` (2), `transform` (3), `fuga` (4), `predict` (5), `contrato` (6), `r` (7).

## Hipótesis inicial

"Un profesor quiere decir, de cada alumno, si estudió más o menos que lo normal. Primero mira las horas de su curso de este año y anota algo
en una libreta. El año que viene llega un alumno nuevo. ¿Qué crees que debería anotar el profesor la primera vez? Cuando llega el nuevo,
¿lo compara con lo anotado o vuelve a mirar a alguien más? ¿Y si llegan dos nuevos a la vez?"
Se muestra de nuevo en el destacado del paso 4 (`#citaHipo`).

## Pasos (7)

### Paso 1. Una libreta que se llena una sola vez
- Idea: hay dos momentos distintos. **Aprender** (mirar el curso y anotar la media y cuánto se separan los alumnos de ella) y **aplicar**
  (describir a cualquiera usando lo anotado). Aprender pasa una vez; aplicar, todas las veces que quieras. Sin código ni símbolos.
- Escenario: modo `libreta`. La recta de horas con los ocho alumnos y la libreta en blanco, con dos renglones en palabras ("lo normal: __",
  "separación típica: __"). Tras el chequeo, la libreta se llena con "5 horas" y "2 horas" y aparece Eva (6 horas) con el rótulo
  "medio paso por encima de lo normal".
- Chequeo (predicción antes de ver nada, opción múltiple): "El profesor anotó: lo normal son 5 horas y la separación típica son 2 horas.
  Llega Eva, que estudió 6 horas. ¿Cómo la describe?"
  - Correcta: "Medio paso por encima de lo normal: está 1 hora arriba, y un paso son 2 horas."
  - "Justo en lo normal, porque es la única nueva": si mira solo a Eva, cualquier alumno nuevo sería 'lo normal'. Lo normal sale del curso, no de ella.
  - "Un paso por encima, porque 6 es más que 5": está arriba, pero un paso son 2 horas, no 1.
  - "No puede decirlo hasta ver a más alumnos nuevos": ya tiene lo que necesita en la libreta; no hace falta esperar a nadie.
- Texto de cierre: en scikit-learn, aprender se llama `fit` y aplicar se llama `transform` (o `predict`). Todo lo demás de la página es esta idea.

### Paso 2. fit aprende y lo guarda en el objeto
- Idea (entra la notación): un objeto de scikit-learn se crea vacío (`sc = StandardScaler()`), `sc.fit(X_train)` calcula la media y la desviación
  del train y las **guarda dentro del objeto** como atributos con guion bajo final: `sc.mean_` → `[5.]`, `sc.scale_` → `[2.]`, `sc.var_` → `[4.]`,
  `sc.n_samples_seen_` → `8`. El guion bajo final es la convención: "esto lo aprendió `fit`". Lo que va entre paréntesis al crear el objeto son
  opciones (`sc.get_params()` → `{'copy': True, 'with_mean': True, 'with_std': True}`), no cosas aprendidas.
- `fit` devuelve el mismo objeto (`sc.fit(X_train) is sc` → `True`): por eso se puede encadenar `StandardScaler().fit(X_train).transform(X_test)`.
- Escenario: modo `fit`. Botón `fit(X_train)`: los puntos viajan a la máquina y la libreta se llena. Antes, el renglón `mean_` dice "no existe todavía"
  (`hasattr(StandardScaler(), "mean_")` → `False`).
- Chequeo (predicción antes de tocar): "Creas `sc = StandardScaler()` y, sin hacer `fit`, escribes `sc.transform([[6], [10]])`. ¿Qué pasa?"
  - Correcta: "Un error: el objeto todavía no aprendió nada." Salida real:
    `NotFittedError: This StandardScaler instance is not fitted yet. Call 'fit' with appropriate arguments before using this estimator.`
    Después de responder, la máquina escupe esa tarjeta roja.
  - "Devuelve los mismos números, 6 y 10": scikit-learn no inventa una media; sin libreta no hay transformación.
  - "Los escala con su propia media (8)": eso sería aprender del test; `transform` nunca aprende.
  - "Devuelve ceros": no hay valor por defecto para la media.
- Cita raschka4 PDF 5 (p. 109): "Understanding the scikit-learn estimator API": `fit` aprende los parámetros del entrenamiento y `transform` los usa;
  los datos a transformar deben tener el mismo número de columnas.

### Paso 3. transform aplica, y fit_transform es un atajo
- Idea: `sc.transform(X)` aplica $z = \frac{x - \text{mean\_}}{\text{scale\_}}$ con lo guardado, sin cambiar la libreta. Con el train: −1.5, −0.5, −0.5,
  −0.5, 0, 0, 1, 2. Con el test: Eva 0.5, Fede 2.5. `fit_transform(X_train)` hace las dos cosas de una vez y da exactamente lo mismo que
  `fit(X_train)` seguido de `transform(X_train)` (`np.array_equal` → `True`). `inverse_transform` deshace el camino: `[[0.5]]` → `[[6.]]`.
- Escenario: modo `transform`. Las dos rectas enganchadas; el deslizador del alumno nuevo mueve un punto y la fórmula viva
  $z = \frac{x - 5}{2}$ muestra sus números. La libreta se ilumina en cada `transform` pero no cambia (un contador "veces que cambió la libreta: 1").
- Chequeo (cálculo con datos en vivo): "Con la libreta del train, ¿qué z le da `sc.transform` al alumno del deslizador?" Con el valor inicial del
  deslizador (9 horas): **2**. Respuesta numérica, tolerancia 0.01. Pista para el error típico 0.5 o 4.5: "primero restas la media (5), después divides
  entre la desviación (2)".
- Citas: raschka4 PDF 9 (p. 113): `fit_transform` "is just a shortcut for calling fit and transform separately" y `inverse_transform`
  (con `LabelEncoder`); raschka4 PDF 6 (p. 110), Figure 4.2: un transformador ajustado con el train transforma el train y también el test.
- `details.profundizar` "¿Por qué `transform` devuelve una tabla de una columna?": scikit-learn siempre trabaja con X de forma (n filas, p columnas);
  `sc.transform([[0.5]])` devuelve `[[6.]]`, no `6`. El paso 6 vuelve sobre esto.

### Paso 4. La trampa: volver a hacer fit con el test (destacado)
- Idea: con datos nuevos se usa **solo** `transform`. Si escribes `fit_transform(X_test)`, el objeto aprende del test: la libreta se borra y se
  reescribe con la media del test.
- Escenario: modo `fuga`. El interruptor "¿con qué datos haces fit?" pasa a estar activo. Con `test`, la recta z se desengancha: la media del test
  (8) cae en z = 0, Eva salta de 0.5 a −1 y Fede de 2.5 a 1. Con `todo junto`, media 5.6 y desviación 2.33: Eva 0.17, Fede 1.89 (la predicción no cambia,
  pero el test ya metió la mano en la libreta).
- Chequeo (predicción antes de tocar el interruptor): "Escribes `sc.fit_transform(X_test)` con Eva (6) y Fede (10). ¿Qué z le toca a Eva?"
  - Correcta: −1. El objeto aprendió media 8 y desviación 2 del propio test: (6 − 8) / 2 = −1.
  - 0.5: es lo que da `transform` con la libreta del train; `fit_transform` la reescribió.
  - 0: confunde con "la media del test es 0"; la media del test pasa a ser 0, pero Eva no es la media.
  - "Un error": scikit-learn no se queja, y por eso la trampa es peligrosa.

**Destacado con predicción (la confusión natural): "Si escalo el test con su propia media, ¿no queda incluso mejor escalado?"**
- Predicción: "El modelo del paso 5 dice 'aprobó' a la derecha de z = 0. Con `fit_transform(X_test)`, ¿qué predice para Eva, que estudió 6 horas
  (más que la media del curso)?" Opciones: aprobó / **reprobó** (correcta) / depende del azar / error.
- Explicación: el modelo aprendió que la frontera está en z = 0 **medida con la regla del train** (5 horas). Si el test se mide con otra regla, el mismo
  número z significa otra cantidad de horas: el z = −1 de Eva equivale a 3 horas en la regla del train. Salida real: `predict` → `[0 1]` en lugar de `[1 1]`.
  Es como cambiar de unidad a mitad de camino: el modelo y los datos ya no hablan el mismo idioma.
- Y con un solo alumno nuevo sería todavía peor: un test de un solo valor tiene desviación 0 y no se puede escalar con su propia regla.
- Muestra de nuevo la hipótesis (`#citaHipo`): "¿lo compara con lo anotado o vuelve a mirar a alguien más?"
- Moraleja: `fit` (o `fit_transform`) solo con el train; con todo lo demás, `transform` o `predict`.
- Citas: raschka4 PDF 18 (p. 122): el libro insiste en ajustar `StandardScaler` una sola vez, con el train, y reusar esos parámetros con el test y con
  cualquier dato nuevo (en el chip, parafrasear; no copiar la frase); raschka3 PDF 4 (p. 56): el primer ejemplo del libro,
  `sc.fit(X_train)` y luego `transform` de train y test; knn3 diapositiva 15 de 32 (`#/4/7`): "Apply the same scaling to training and test data" y el
  aviso de min-max fuera de rango.
- **Inconsistencia del material para decir con naturalidad**: en las diapositivas de kNN, la diapositiva 23 (`#/5/6`) normaliza las 569 biopsias
  (`wbcd_n <- as.data.frame(lapply(wbcd[2:31], normalize))`) y la 24 (`#/5/7`) recién después parte en train (469) y test (100): el mínimo y el máximo
  salieron de todos los datos, test incluido. Es justo el modo `todo junto` del interruptor. La diapositiva 30 (tidymodels) lo hace bien: la receta se
  estima solo con el train. Verificado leyendo el HTML.
- `details.profundizar` "¿Y min-max?": `MinMaxScaler` aprende `data_min_` = 2 y `data_max_` = 9; Fede (10 horas) queda en 1.142857, fuera de [0, 1].
  No es un error: es la señal honesta de que Fede está fuera de lo que el train vio. Si reajustas con el test para "arreglarlo", lo escondes.
- Enlace por título a "Partición de datos: train, test y fuga de datos" (la fuga en general, la validación cruzada).

### Paso 5. predict: el modelo también tiene libreta
- Idea: un modelo (clasificador o regresor) cumple el mismo contrato, con una diferencia: `fit(X, y)` recibe también las respuestas, y en lugar de
  `transform` tiene `predict(X)`, que recibe solo X. `NearestCentroid` aprende un centro por clase (`centroids_` → `[-0.75, 0.75]`, `classes_` → `[0 1]`)
  y `predict` asigna cada punto a la clase del centro más cercano. Predicción del test: `[1 1]`. `score(X, y)` predice y compara (accuracy).
- Escenario: modo `predict`. Segunda máquina, `NearestCentroid()`, con su libreta. Botón `fit(Z_train, y_train)`: los puntos de cada clase se juntan en su
  centro (triángulos). Botón `predict(Z_test)`: Eva y Fede se colorean. La frontera z = 0 aparece después del chequeo.
- Chequeo (cálculo con datos en vivo): "Con los centros −0.75 y 0.75, ¿qué predice el modelo para el alumno del deslizador?" (respuesta: aprobó / reprobó,
  calculada en vivo con la regla `<=` del código; con el valor inicial, 9 horas, z = 2 → aprobó). Pista: "mide la distancia de su z a cada centro".
  Si el deslizador está en 5 horas, la respuesta correcta es "reprobó" y la explicación dice que es un empate exacto que sklearn resuelve hacia la primera clase.
- Ejemplo kNN (en el texto, conecta con la materia): para `KNeighborsClassifier`, `fit` **solo guarda** los datos de entrenamiento (aprendizaje perezoso)
  y todo el trabajo ocurre en `predict`. Con k = 3 y los mismos z, `predict` → `[1 1]`, `score` → `1.0`. En R, `class::knn(train, test, cl, k)` hace las dos
  cosas en una sola llamada: no hay objeto con libreta.
- Citas: raschka4 PDF 6 (p. 110), Figure 4.3: el predictor recibe etiquetas en `fit` y predice datos sin etiqueta con `predict`; raschka3 PDF 46-47
  (pp. 98-99): kNN es perezoso, memoriza el entrenamiento; knn3 diapositiva 25 de 32 (`#/training-a-model-on-the-data`): "training simply stores the scaled
  numeric predictors and the training labels"; raschka3 PDF 5 (p. 57): `accuracy_score` y el método `score`.
- **Errata del material para decir con naturalidad**: en los casos básico y particular de kNN (`knn3basico` sección 7, `#evaluación-del-modelo`) se entrena
  y se evalúa con los mismos 50 puntos; con k = 1 daría 100 % siempre, y llaman "precisión" a la accuracy. Es predecir sobre lo que el modelo ya guardó.

### Paso 6. Un contrato para todos (y X siempre es una tabla)
- Idea: todos los objetos de scikit-learn siguen el mismo contrato, y por eso se pueden cambiar uno por otro sin reescribir el resto.
  Tabla de roles (el escenario la muestra como fichas que se tocan):
  - Transformadores (`fit` + `transform`): `StandardScaler`, `MinMaxScaler`, `SimpleImputer` (aprende la media de cada columna para rellenar),
    `OneHotEncoder` (aprende las categorías), `PCA` (aprende los componentes).
  - Predictores (`fit(X, y)` + `predict`): `NearestCentroid`, `KNeighborsClassifier`, `LogisticRegression`, `LinearRegression`.
  - Todos son **estimadores**: todo lo que tiene `fit` es un estimador en scikit-learn.
- **Trampa marcada (la forma de X)**: `fit` espera una tabla de forma (n, p), aunque haya una sola columna. Con la lista plana:
  `StandardScaler().fit([2, 4, 4, 4, 5, 5, 7, 9])` → `ValueError: Expected 2D array, got 1D array instead:` (salida real completa en el reto `codigo3`).
  `reshape(-1, 1)` da (8, 1): ocho filas, una columna. `reshape(1, -1)` daría (1, 8): una fila con ocho columnas, otra cosa. Y la cantidad de columnas debe
  coincidir entre `fit` y `transform`: `sc.transform(np.array([[6, 1]]))` → `ValueError: X has 2 features, but StandardScaler is expecting 1 features as input.`
  `y` en cambio es un vector plano. Sin `y`, un predictor no aprende: `NearestCentroid().fit(X)` →
  `TypeError: NearestCentroid.fit() missing 1 required positional argument: 'y'`.
- Escenario: modo `contrato`. Cada ficha se arrastra o se toca para ponerla en la máquina, y la máquina cambia sus ranuras (las de un transformador no
  tienen `predict`; las de un predictor no tienen `transform`). Debajo, un visor de forma: `[6, 10]` como fila suelta, `(2, 1)` como columna, `(1, 2)` como fila.
- Chequeo (elección con explicación): "Tienes las horas de Eva y Fede en `np.array([6, 10])`. ¿Cuál de estas formas le pasas a `sc.transform`?"
  - Correcta: `np.array([6, 10]).reshape(-1, 1)`, forma (2, 1): dos alumnos, una columna.
  - `reshape(1, -1)`, forma (1, 2): un alumno con dos columnas; el escalador espera 1 columna y da el `ValueError` de arriba.
  - La lista `[6, 10]` tal cual: `Expected 2D array, got 1D array instead`.
  - `np.array([[6, 10]])`: es lo mismo que (1, 2).
- Cita raschka4 PDF 4 (p. 108): `SimpleImputer(strategy='mean')`, `imr.fit(df.values)` y después `imr.transform(df.values)`: el mismo contrato en otro
  transformador. (El ejemplo del libro hace `fit` y `transform` sobre la misma tabla, sin partir; aquí no importa porque solo muestra la mecánica.)
- `details.profundizar` "¿Hay objetos con transform y predict a la vez?": sí; `KMeans` tiene los dos y `PCA` tiene `transform` e `inverse_transform`. Lo que
  define el rol es qué métodos tiene, no su nombre.

### Paso 7. El mismo contrato en R (y la diferencia de n − 1)
- Idea (el paso más técnico): R no tiene un único objeto con libreta, pero las dos ideas están. En tidymodels, `recipe()` + `step_normalize()` describen
  la transformación; `prep(rec, training = train)` **aprende** (estima media y sd con el train) y `bake(rec_prep, new_data = test)` **aplica**: son `fit` y
  `transform`. Los modelos usan `fit()` y `predict()` (`parsnip`); en R base, `lm()` aprende y `predict(mod, newdata = ...)` aplica
  (`lm(nota ~ horas)` con horas 2, 4, 6, 8 y nota 3, 5, 7, 9 → `predict` de 5 y 10 da 6 y 11, verificado).
- **La diferencia que sorprende**: `scale()` y `step_normalize()` dividen entre la sd con n − 1: con el train, sd = 2.13809, no 2. Por eso
  `bake` del test da 0.4677072 y 2.3385359, no 0.5 y 2.5. `StandardScaler` divide entre n (como `np.std`). Las dos son estandarizaciones correctas; solo no
  esperes los mismos decimales en Python y en R. Enlace por título a "Estandarización y normalización" (el porqué de n − 1).
- Y la trampa del paso 4 en R base: `scale(x_test)` aprende del test (−0.7071068 y 0.7071068); lo correcto es
  `scale(x_test, center = media_train, scale = desv_train)`.
- Escenario: modo `r`. La máquina se parte en dos tarjetas: "receta" (`prep` llena la libreta con mean 5 y sd 2.14) y "horno" (`bake` la lee). Un interruptor
  `n` / `n − 1` mueve la regla de la recta z y muestra los dos resultados de Eva (0.5 frente a 0.4677).
- Chequeo (cálculo): "Con `step_normalize`, la sd del train es 2.13809. ¿Qué z le da `bake` a Eva (6 horas)?" Correcta: 0.4677 (tolerancia 0.001).
  Pista para 0.5: "R divide entre n − 1 = 7, no entre 8".
- Citas: fe1 diapositiva 84 de 91 (`#/putting-the-process-together`): `prep()` estima, `bake()` aplica; fe1 diapositiva 83 de 91 (`#/data-leakage`): estimar
  medias y desvíos dentro de cada split de entrenamiento; fe1 diapositiva 85 de 91 (`#/9/5`): el blueprint completo con `prep(training = ames_train)` y `bake`
  en train y test; knn3real sección 7 (`#preprocesamiento-de-datos-feature-engineering`): la receta del caso de diabetes con `step_normalize` "obligatorio para KNN".
- Cierre que anuncia el siguiente concepto: si tienes que acordarte de hacer `fit` del escalador con el train, `transform` del test y `predict` con el modelo, en
  ese orden y sin equivocarte de datos, conviene meter todo en un solo objeto: "Pipeline: el preprocesado dentro del modelo" (enlace por título).
  Cita raschka6 PDF 1 (p. 171): un pipeline reusa los parámetros aprendidos en el entrenamiento para transformar datos nuevos.

## Vida real (Python y R)

Python 3.13 con NumPy 2.1.3 y scikit-learn 1.6.1; R 4.6.1 (con `recipes`, `tidymodels`, `class` y `caret` instalados). **scikit-learn sí está instalado
en esta máquina** y todo el código de abajo se ejecutó tal cual. Mismos datos que el recorrido.

Algoritmo: hacer a mano lo que hacen `StandardScaler` y `NearestCentroid` (fit del escalador, transform del train, fit del modelo, transform del test y
predict) y cerrar contra la librería. El texto sin el prefijo `id: ` es exactamente lo que se ejecutó. Las líneas con id `-` no tienen evento.

### Python

```
import: import numpy as np
-: from sklearn.preprocessing import StandardScaler
-: from sklearn.neighbors import NearestCentroid
datos: x_train = [2, 4, 4, 4, 5, 5, 7, 9]       # horas de estudio (inventado)
etiq: y_train = [0, 0, 0, 0, 1, 1, 1, 1]       # 1 = aprobó
test: x_test = [6, 10]                         # dos alumnos nuevos
media: media = sum(x_train) / len(x_train)      # fit: aprende la media...
s0: suma2 = 0
for1: for x in x_train:
acum:     suma2 = suma2 + (x - media) ** 2
desv: desv = (suma2 / len(x_train)) ** 0.5     # ...y la desviación
z0: z_train = []
for2: for x in x_train:
zapp:     z_train.append((x - media) / desv)   # transform del train
cent0: cent = {}
forc: for clase in [0, 1]:
zs:     zs = [z_train[i] for i in range(len(z_train)) if y_train[i] == clase]
centc:     cent[clase] = sum(zs) / len(zs)      # fit del modelo: un centro por clase
fort: for x in x_test:
zt:     z = (x - media) / desv               # transform del test con lo del train
pred:     pred = 0 if abs(z - cent[0]) <= abs(z - cent[1]) else 1
imp:     print(x, z, pred)                    # predict
libX: X_train = np.array(x_train).reshape(-1, 1)
-: X_test = np.array(x_test).reshape(-1, 1)
libfit: sc = StandardScaler().fit(X_train)
libpar: print(sc.mean_, sc.scale_)
libmod: modelo = NearestCentroid().fit(sc.transform(X_train), y_train)
lib: print(modelo.predict(sc.transform(X_test)))
```

Salida real:
```
6 0.5 1
10 2.5 1
[5.] [2.]
[1 1]
```

### R

```
datos: x_train <- c(2, 4, 4, 4, 5, 5, 7, 9)       # horas de estudio (inventado)
etiq: y_train <- c(0, 0, 0, 0, 1, 1, 1, 1)       # 1 = aprobó
test: x_test <- c(6, 10)                         # dos alumnos nuevos
media: media <- sum(x_train) / length(x_train)    # fit: aprende la media...
s0: suma2 <- 0
for1: for (x in x_train) {
acum:   suma2 <- suma2 + (x - media)^2
-: }
desv: desv <- sqrt(suma2 / length(x_train))      # ...y la desviación
z0: z_train <- c()
for2: for (x in x_train) {
zapp:   z_train <- c(z_train, (x - media) / desv)  # transform del train
-: }
cent0: cent <- c()
forc: for (clase in c(0, 1)) {
zs:   zs <- z_train[y_train == clase]
centc:   cent[clase + 1] <- sum(zs) / length(zs)  # fit del modelo: un centro por clase
-: }
fort: for (x in x_test) {
zt:   z <- (x - media) / desv                  # transform del test con lo del train
pred:   pred <- if (abs(z - cent[1]) <= abs(z - cent[2])) 0 else 1
imp:   print(c(x, z, pred))                     # predict
-: }
lib: print(as.vector(scale(x_test, center = media, scale = desv)))
```

Salida real:
```
[1] 6.0 0.5 1.0
[1] 10.0  2.5  1.0
[1] 0.5 2.5
```

Los archivos ejecutados quedaron en `/private/tmp/claude-501/-Users-franciscocastillo-Desktop-Math-Videos/b800ca9b-4b76-4beb-b07f-3d1c9bed329d/scratchpad/code/vida.py`
y `.../scratchpad/code/vida.R` (temporales: pueden borrarse); el constructor debe volver a correr el código que pegue en la
página (los dos bloques, copiados quitando el prefijo `id: ` o `-: `, respetando los espacios de alineación de los comentarios) y comprobar que la salida
coincide carácter por carácter.

**Ids solo de Python**: `import`, `libX`, `libfit`, `libpar`, `libmod`. En R se narran con "Esta línea solo existe en Python: ..." (mismo patrón que
`na-nan.html`). La última línea de R (`lib`) comparte id con la última de Python: las dos son "la comparación con la librería". En R la librería no tiene un
objeto con libreta: `scale()` recibe a mano el centro y la escala aprendidos (en R, `scale(x_test)` solo aprendería del test; ver el reto `codigo2`).

Índices: el diccionario `cent` de Python usa las claves 0 y 1 (son clases, no posiciones); en R `cent[clase + 1]` porque los vectores empiezan en 1.
La narración de `centc` lo dice: "En R la clase 0 vive en `cent[1]`: los vectores de R empiezan en 1". En `zs` la comprensión de listas de Python recorre
con `i` desde 0 (`ctx.ix`); en R es una máscara lógica `y_train == clase`.

Eventos (una sola lista `EV`): `import`, `datos`, `etiq`, `test`, `media`, `s0`, 8 × (`for1` + `acum`), `desv`, `z0`, 8 × (`for2` + `zapp`), `cent0`,
2 × (`forc` + `zs` + `centc`), 2 × (`fort` + `zt` + `pred` + `imp`), `libX`, `libfit`, `libpar`, `libmod`, `lib`:
1 + 5 + 16 + 2 + 16 + 1 + 6 + 8 + 5 = **60 eventos**. Si el constructor prefiere menos, puede agrupar la vuelta de `for1` y `acum` en un evento por vuelta
(no cambia el código mostrado).

### Foto de estado por línea ejecutada

| Evento | Estado | Visual |
|---|---|---|
| datos, etiq, test | x_train, y_train, x_test | la recta de horas con los 8 puntos (`--j`) y Eva y Fede (`--k`); libreta vacía |
| media | media = 5.0 | la marca de 5 en la recta; renglón `mean_` de la libreta se llena |
| s0, for1/acum × 8 | suma2: 9, 10, 11, 12, 12, 12, 16, 32 (x = 2, 4, 4, 4, 5, 5, 7, 9) | un cuadrado de lado (x − 5) por cada punto, que se apila en la barra de `suma2` |
| desv | desv = 2.0 (raíz de 32 / 8 = 4) | renglón `scale_`; la recta z se engancha (5 ↔ 0, cada 2 horas = 1) |
| z0, for2/zapp × 8 | z_train: −1.5, −0.5, −0.5, −0.5, 0.0, 0.0, 1.0, 2.0 | cada punto baja a la recta z; la libreta se ilumina pero no cambia |
| cent0, forc/zs/centc (clase 0) | zs = [−1.5, −0.5, −0.5, −0.5]; cent[0] = −0.75 | los cuatro puntos de la clase 0 se juntan en el triángulo `--neg` |
| forc/zs/centc (clase 1) | zs = [0.0, 0.0, 1.0, 2.0]; cent[1] = 0.75 | triángulo `--pos` en 0.75; aparece la frontera en 0 |
| fort/zt/pred/imp (Eva) | x = 6, z = 0.5, distancias 1.25 y 0.25 → pred = 1 | Eva baja a 0.5 usando la libreta del train; flecha al centro más cercano; imprime `6 0.5 1` |
| fort/zt/pred/imp (Fede) | x = 10, z = 2.5, distancias 3.25 y 1.75 → pred = 1 | imprime `10 2.5 1` (R: `[1] 10.0  2.5  1.0`) |
| libX | X_train forma (8, 1), X_test (2, 1) | la fila de 8 números se vuelve una columna |
| libfit, libpar | `sc.mean_` [5.], `sc.scale_` [2.] | la libreta de la máquina de sklearn, igual a la nuestra |
| libmod | centroids_ [−0.75, 0.75] | segunda máquina con sus centros |
| lib | Python `[1 1]`; R `[1] 0.5 2.5` | marca de verificación: coincide con lo hecho a mano |

En `suma2` los valores son `float` en Python (9.0, 10.0, ...) porque `media` es `float`; la tabla de variables los muestra como los imprime cada lenguaje.

### Predicción antes de reproducir (`#vrPred`)

"¿Cuántas veces se ejecuta la línea `z = (x - media) / desv` (la de `transform` del test)? ¿Y cuántas veces cambia `media` después de calcularla?"
Respuesta: **2 veces y 0 cambios** (un `transform` por alumno nuevo; la libreta no se toca). Distractores: "2 y 2" (cree que `transform` recalcula la media),
"10 y 0" (cuenta también los del train: esos van por la línea `zapp`), "8 y 1". Pista: "la línea está en el `for` del test".

### Trampas reales (retos `codigo1` a `codigo3`)

**codigo1: `fit_transform` en el test reescribe la libreta (Python).**
```
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import NearestCentroid
X_train = np.array([2, 4, 4, 4, 5, 5, 7, 9]).reshape(-1, 1)
y_train = [0, 0, 0, 0, 1, 1, 1, 1]
X_test = np.array([6, 10]).reshape(-1, 1)
sc = StandardScaler()
modelo = NearestCentroid().fit(sc.fit_transform(X_train), y_train)
print(modelo.predict(sc.transform(X_test)))
print(modelo.predict(sc.fit_transform(X_test)))   # ajusta otra vez, con el test
print(sc.mean_, sc.scale_)
```
Salida real:
```
[1 1]
[0 1]
[8.] [2.]
```
Pregunta: "¿Por qué la segunda predicción reprueba a Eva y qué quedó en `sc`?" Correcta: `fit_transform` volvió a aprender con el test (media 8), Eva pasó a
z = −1, y el objeto perdió la media del train: cualquier `transform` posterior ya usa 8. Distractores: "el modelo cambió sus centros" (el modelo no se tocó: solo
el escalador); "`fit_transform` redondea distinto" (da los mismos z que `fit` + `transform` con los mismos datos); "hay un error de azar" (no hay azar:
`StandardScaler` y `NearestCentroid` son deterministas).

**codigo2: `scale()` de R no da lo mismo que `StandardScaler` (R).**
```
x_train <- c(2, 4, 4, 4, 5, 5, 7, 9)
z <- scale(x_train)
print(attr(z, "scaled:center"))
print(attr(z, "scaled:scale"))
print(round(z[8, 1], 4))
print(sqrt(mean((x_train - mean(x_train))^2)))
```
Salida real:
```
[1] 5
[1] 2.13809
[1] 1.8708
[1] 2
```
Par en Python (verificado): `StandardScaler().fit(X_train).scale_` → `[2.]`; `np.std(X_train)` → `2.0`; `np.std(X_train, ddof=1)` → `2.138089935299395`;
`sc.transform([[9]])` → `[[2.]]`.
Pregunta: "¿Por qué el 9 queda en 1.8708 en R y en 2 en Python?" Correcta: `scale()` divide entre la sd con n − 1 (2.13809); `StandardScaler` entre n (2).
Distractores: "R centra con la mediana" (el centro es 5, la media); "Python redondea" (2 es exacto); "uno de los dos está mal" (los dos estandarizan; usan
convenciones distintas). Además: `scale()` devuelve una matriz con la libreta pegada como atributos (`scaled:center`, `scaled:scale`): la idea de `fit` está ahí,
escondida. Y `scale(x_test)` sin argumentos vuelve a aprender del test (−0.7071068 y 0.7071068, verificado).

**codigo3: una lista plana no es una tabla (Python).**
```
from sklearn.preprocessing import StandardScaler
x_train = [2, 4, 4, 4, 5, 5, 7, 9]
sc = StandardScaler().fit(x_train)
```
Salida real (las tres últimas líneas del error):
```
ValueError: Expected 2D array, got 1D array instead:
array=[2. 4. 4. 4. 5. 5. 7. 9.].
Reshape your data either using array.reshape(-1, 1) if your data has a single feature or array.reshape(1, -1) if it contains a single sample.
```
Pregunta: "¿Qué arreglo es el correcto para ocho alumnos con una variable?" Correcta: `np.array(x_train).reshape(-1, 1)` (ocho filas, una columna).
Distractores: `reshape(1, -1)` ("eso es un alumno con ocho variables; el escalador aprendería ocho medias de un solo valor"); `[x_train]` (lo mismo que
`reshape(1, -1)`); "pasar `y_train` también" (un transformador no necesita etiquetas).

`p.vr-nota`: la versión de una línea, `NearestCentroid().fit(StandardScaler().fit_transform(X_train), y_train)`, sirve para el train; para el test siempre
`sc.transform(X_test)` con el mismo `sc`. En R con tidymodels: `prep(recipe(~ horas, data = train) |> step_normalize(horas), training = train)` y
`bake(..., new_data = test)` (da 0.4677072 y 2.3385359 por el n − 1).
`details.profundizar` "La forma vectorizada": `media = np.mean(x)`, `desv = np.std(x)` (ddof 0, como sklearn) y `(np.array(x_test) - media) / desv` →
`[0.5 2.5]`; en R, `(x_test - mean(x_train)) / sqrt(mean((x_train - mean(x_train))^2))` → `0.5 2.5`.

## Retos (11)

RETOS = ["ojo", "construir", "mano", "error", "prop1", "prop2", "prop3", "codigo1", "codigo2", "codigo3", "formula"]

1. **ojo** (ojo clínico, 8 rondas al azar, aprueba con 7 de 8): se muestra una línea de código (con `sc` ya ajustado al train salvo que se diga) y
   Francisco decide sin ejecutar: **"aprende (cambia la libreta)"**, **"solo aplica"** o **"da error"**. Banco verificado:
   - Python, aprende: `sc.fit(X_train)`; `sc.fit_transform(X_train)` (aprende y aplica); `sc.fit_transform(X_test)` (aprende del test: la trampa);
     `modelo.fit(Z_train, y_train)`; `StandardScaler().fit(np.vstack([X_train, X_test]))` (aprende de todo junto).
   - Python, solo aplica: `sc.transform(X_test)`; `modelo.predict(Z_test)`; `modelo.score(Z_test, y_test)`; `sc.inverse_transform([[0.5]])`; `sc.get_params()`.
   - Python, error: `StandardScaler().transform(X_test)` (NotFittedError); `sc.fit([2, 4, 4, 4, 5, 5, 7, 9])` (lista plana, ValueError);
     `NearestCentroid().fit(Z_train)` (falta `y`, TypeError); `sc.transform(np.array([[6, 1]]))` (2 columnas, ValueError).
   - R, aprende: `prep(rec, training = train)`; `lm(nota ~ horas, data = train)`; `scale(x_test)` (aprende del test); `class::knn(train, test, cl, k = 3)`
     (aprende y predice en una sola llamada: cuenta como "aprende").
   - R, solo aplica: `bake(rec_prep, new_data = test)`; `predict(mod, newdata = test)`; `scale(x_test, center = 5, scale = 2)`.
   La explicación de cada ronda dice la regla: "¿el método empieza con `fit` o es `prep`, `lm`, `scale` sin argumentos? Entonces aprende".
2. **construir** (manipular el visual hasta cumplir): con el interruptor "¿con qué datos haces fit?" y los botones de las dos máquinas, lograr en orden:
   (a) la libreta del escalador con `mean_` = 5 y `scale_` = 2; (b) el modelo con centros −0.75 y 0.75; (c) Eva y Fede predichos como "aprobó"
   (`[1 1]`). Ok al cumplir las tres. Si Francisco hace `fit` con el test en cualquier momento, el escenario muestra que la libreta pasó a 8 y 2,
   que Eva queda en −1, y el reto sigue abierto (no se marca como fallo) hasta que vuelva a ajustar con el train.
3. **mano** (a mano, datos al azar, pistas escalonadas, reintentable): se genera un train de forma μ + σ · patrón, con μ entero entre 3 y 12,
   σ ∈ {1, 2, 3} y un patrón al azar entre P1 = [−1, −1, 1, 1], P2 = [−2, 0, 0, 0, 0, 0, 0, 2] y P3 = [−1.5, −0.5, −0.5, −0.5, 0, 0, 1, 2] (este solo con σ = 2,
   para que los valores sean enteros). Los tres patrones tienen media 0 y desviación 1 dividiendo entre n (verificar en el generador). Más un alumno nuevo
   x_nuevo = μ + σ · t con t ∈ {−2, −1.5, −1, −0.5, 0.5, 1, 1.5, 2, 2.5}.
   Pide: (1) `mean_`; (2) `scale_` (dividiendo entre n, como sklearn); (3) el z de x_nuevo con `transform`. Tolerancia 0.01.
   Pistas: 1) "suma y divide entre cuántos son"; 2) "promedio de los cuadrados de las distancias a la media, y la raíz"; 3) primera parte resuelta con números.
   Al acertar, una línea: "si hubieras hecho `fit_transform` con el alumno nuevo solo, su z sería 0 sin importar cuántas horas estudió (o un error por
   desviación 0)".
4. **error** (cazar el error, 3 variantes del código de Vida real, una línea mal; Francisco toca la línea):
   - V1 (Python): la línea `zt` cambiada a `    z = (x - sum(x_test) / len(x_test)) / desv` (el comentario se quitó; así se ejecutó). Salida real:
     `6 -1.0 0`, `10 1.0 1`, `[5.] [2.]`, `[1 1]`. La comparación final con la librería delata el error: a mano sale `0` para Eva y sklearn dice `1`.
     Es la trampa del paso 4 escrita a mano: la media del test.
   - V2 (Python): la línea `acum` cambiada a `    suma2 = suma2 + (x - media)` (sin elevar al cuadrado). Salida real: `ZeroDivisionError: float division by zero`
     (en la línea `zapp`): las distancias a la media siempre suman 0, así que `desv` = 0.
   - V3 (R): la línea `centc` cambiada a `  cent[clase] <- sum(zs) / length(zs)  # fit del modelo: un centro por clase`. Salida real:
     `Error in if (abs(z - cent[1]) <= abs(z - cent[2])) 0 else 1 :` / `  missing value where TRUE/FALSE needed`. En R, `cent[0] <- ...` no guarda nada
     (la posición 0 no existe), el centro de la clase 1 cae en `cent[1]` y `cent[2]` queda `NA`.
5. **prop1** (opción múltiple, `mezclar: true`): "¿Qué guarda un `StandardScaler` después de `fit`?" Correcta: "la media y la desviación de cada columna del
   train (`mean_`, `scale_`), que usará en cada `transform`". Pistas: "los datos transformados" → "`fit` no devuelve datos: devuelve el mismo objeto";
   "una copia de X_train" → "eso hace `KNeighborsClassifier`, que es perezoso; el escalador solo guarda dos números por columna"; "nada, calcula todo en
   `transform`" → "entonces el test usaría su propia media: justo la trampa".
6. **prop2**: "¿Cuál de estas líneas es la correcta para el test?" Correcta: `X_test_std = sc.transform(X_test)`. Pistas: `sc.fit_transform(X_test)` →
   "reescribe la libreta con el test (paso 4)"; `StandardScaler().fit_transform(X_test)` → "un escalador nuevo que aprende solo del test: el mismo error con
   otro nombre"; `sc.fit(X_test).transform(X_train)` → "al revés: aprende del test y lo aplica al train".
7. **prop3**: "¿Qué diferencia hay entre `fit` de un transformador y `fit` de un predictor?" Correcta: "el predictor recibe también `y`, porque aprende a
   relacionar X con las respuestas; después usa `predict` en lugar de `transform`". Pistas: "ninguna" → "`NearestCentroid().fit(X)` sin `y` da TypeError";
   "el predictor no tiene `fit`, solo `predict`" → "sin `fit` no hay centros ni vecinos que usar"; "el transformador aprende de X y de y" → "`StandardScaler`
   ignora `y`: solo mira X".
8. **codigo1**, 9. **codigo2**, 10. **codigo3**: ver Vida real.
11. **formula**: la parte de memoria (`B.ordenar`), registrada con `C.reto("formula", ok)`.

## Memoria

**B.ordenar** (el orden correcto del flujo completo, una pieza por línea):
1. `sc = StandardScaler()`
2. `Z_train = sc.fit_transform(X_train)`
3. `modelo = NearestCentroid().fit(Z_train, y_train)`
4. `Z_test = sc.transform(X_test)`
5. `print(modelo.predict(Z_test))`

Resultado: `[1 1]`. Distractores: `Z_test = sc.fit_transform(X_test)` (la trampa: aprende del test), `modelo.fit(Z_test, y_test)` (entrenar con el test),
`modelo.predict(Z_train, y_train)` (`predict` no recibe `y`). El orden se verifica: pieza 1 antes que 2, 2 antes que 3 y 4, 4 antes que 5 (3 y 4 pueden
intercambiarse; el constructor acepta los dos órdenes).

**Tarjetas (8):**
1. ¿Qué hace `fit`? → Aprende de los datos de entrenamiento y lo guarda dentro del objeto (atributos con `_` final). Devuelve el mismo objeto.
2. ¿Qué hace `transform`? → Aplica lo aprendido a cualquier dato, sin volver a aprender. Con el train de la página: $z = (x - 5)/2$.
3. ¿Y `fit_transform`? → El atajo de `fit` + `transform` con los mismos datos. Solo para el train.
4. ¿Qué pasa si haces `fit_transform` con el test? → El objeto reaprende con el test: Eva pasa de 0.5 a −1 y el modelo la reprueba (`[0 1]`).
5. ¿Qué diferencia hay entre `transform` y `predict`? → `transform` devuelve datos cambiados (transformador); `predict` devuelve respuestas (predictor, que en
   `fit` recibió `y`).
6. ¿Por qué `Expected 2D array, got 1D array`? → X siempre es una tabla (n filas, p columnas). Una sola variable: `reshape(-1, 1)`.
7. ¿Cuál es el `fit` / `transform` de R? → `prep()` aprende y `bake()` aplica (recipes); modelos: `fit()` / `predict()`, o `lm()` y `predict(newdata =)`.
8. ¿Por qué R y Python no dan el mismo z? → `scale()` y `step_normalize` dividen entre la sd con n − 1 (2.138); `StandardScaler` entre n (2).

## Citas (14)

| id de fuente | página PDF o ancla | página impresa | sección | qué hay | cuándo leerla |
|---|---|---|---|---|---|
| raschka4 | 5 | 109 | Understanding the scikit-learn estimator API | `fit` aprende parámetros del train, `transform` los usa; mismo número de columnas | Paso 2 |
| raschka4 | 9 | 113 | Encoding class labels | `fit_transform` como atajo de `fit` y `transform`; `inverse_transform` | Paso 3 |
| raschka4 | 6 | 110 | Understanding the scikit-learn estimator API | Figure 4.2 (transformador ajustado con el train que transforma train y test) y Figure 4.3 (predictor con `fit(X, y)` y `predict`) | Pasos 3 y 5 |
| raschka4 | 18 | 122 | Bringing features onto the same scale | ajustar `StandardScaler` una sola vez, con el train, y reusar sus parámetros con el test y cualquier dato nuevo | Destacado del paso 4 |
| raschka4 | 16 | 120 | Bringing features onto the same scale | `MinMaxScaler`: `fit_transform(X_train)` y `transform(X_test)`; la fórmula de min-max (la de `StandardScaler` y su código siguen en la PDF 17, p. 121) | Profundizar del paso 4 |
| raschka3 | 4 | 56 | First steps with scikit-learn | el primer `StandardScaler` del libro: `fit` en train, `transform` en train y test, y después `Perceptron` | Paso 4 |
| knn3 | 15, `#/4/7` | | 3.3.3 Practical considerations | la misma escala en train y test; min-max falla si los datos nuevos salen del rango | Paso 4 |
| raschka3 | 46 | 98 | K-nearest neighbors – a lazy learning algorithm | kNN memoriza el entrenamiento en lugar de aprender una función (sigue en PDF 47, p. 99) | Paso 5 |
| knn3 | 25, `#/training-a-model-on-the-data` | | 4.4 Training a model on the data | en kNN "entrenar" es guardar los predictores escalados y las etiquetas; `class::knn` | Paso 5 |
| raschka3 | 5 | 57 | Classification error versus accuracy | `accuracy_score` y el método `score` de los clasificadores | Paso 5, al terminar |
| raschka4 | 4 | 108 | Imputing missing values | `SimpleImputer`: `fit` y después `transform`, el contrato en otro transformador | Paso 6 |
| fe1 | 84, `#/putting-the-process-together` | | 8.4 Juntar el proceso | `recipe()` + `step_*()`; `prep()` estima, `bake()` aplica | Paso 7 |
| fe1 | 83, `#/data-leakage` | | 8.3 Fuga de información | estimar medias y desvíos dentro de cada split de entrenamiento (Figure 12) | Paso 7 (y, si cabe, destacado del paso 4) |
| raschka6 | 1 | 171 | Streamlining workflows with pipelines | el pipeline reusa los parámetros aprendidos en el entrenamiento para transformar datos nuevos | Paso 7, cierre |

Citas de reserva (si el constructor quiere cambiar alguna, todas verificadas en sus mapas): fe1 diapositiva 85 (`#/9/5`, blueprint con `prep(training = ames_train)`
y `bake` en train y test); knn3real sección 7 (`#preprocesamiento-de-datos-feature-engineering`, `step_normalize` "obligatorio para KNN"); raschka3 PDF 48-49
(pp. 100-101, `KNeighborsClassifier(n_neighbors=5, p=2, metric='minkowski')`); raschka6 PDF 4-5 (pp. 174-175, qué hace `fit` y `predict` dentro de un pipeline,
Figure 6.1: mejor dejarla para la página de Pipeline); knn3basico sección 7 (`#evaluación-del-modelo`, la evaluación sobre el train).

Verificado por mí: raschka4 PDF 4, 5, 6, 9, 16, 17 y 18 (texto leído con `pdftotext -layout`, una página a la vez; el encabezado de cada página trae la
impresa: 108, 109, 110, 113, 120, 121, 122). raschka3 y raschka6 según sus mapas (`brain/fuentes/raschka-cap3.md`, `raschka-cap6.md`). knn3 diapositivas 15,
23, 24 y 25: texto leído del HTML (`ud3-knn.html`), coincide con el mapa. fe1 diapositivas 83 y 84 según `brain/fuentes/sm142003-ud1-fe.md`.
`data-pag` = PDF; raschka3: impresa = PDF + 52; raschka4: impresa = PDF + 104; raschka6: impresa = PDF + 170. Para las diapositivas, `data-pag` = número
de diapositiva y `data-ancla` = el ancla sin `#/`.

**Fuente pendiente de registro**: `raschka4` (ver sugerencias al principio). Si la sesión principal no la registra, las cinco citas de raschka4 se reemplazan por
las de reserva y el texto de los pasos 2, 3 y 6 nombra el capítulo 4 sin chip.

## Erratas e inconsistencias del material

- **knn3, diapositivas 23 y 24**: normaliza las 569 biopsias con min-max y después parte en train y test: el mínimo y el máximo incluyen el test. Es el modo
  `todo junto` del paso 4. La diapositiva 15 dice "apply the same scaling", que se entiende bien solo si significa "los mismos parámetros"; y la 30
  (tidymodels) lo hace bien. Se dice en el destacado del paso 4.
- **knn3basico y knn3particular**: entrenan y evalúan con los mismos puntos y llaman "precisión" a la accuracy (del mapa `sm142003-ud3-knn.md`). Paso 5.
- **raschka4 p. 109 vs p. 110**: en la p. 109 llama "estimators" a los transformadores ("The two essential methods of those estimators are fit and transform")
  y en la p. 110 reserva "estimators" para los clasificadores. En scikit-learn, todo objeto con `fit` es un estimador; los dos roles son transformador y predictor.
  Decirlo en el paso 6.
- **raschka4 p. 108**: el ejemplo de `SimpleImputer` hace `fit` y `transform` sobre la misma tabla, sin partir; está bien para mostrar la mecánica, pero no es el
  flujo con train y test. Paso 6.
- **raschka4 p. 121 frente a R**: la Table 4.1 estandariza con `ex.std()` (dividiendo entre n, como `StandardScaler`); `scale()` y `step_normalize` de R usan n − 1.
  No es un error del libro, pero explica por qué los decimales no coinciden con lo que ves en R (paso 7 y `codigo2`).
- **Material oficial ausente**: la UD3 de SM142002 (scikit-learn) no está publicada; nada de esta página sale de esa unidad. Se dice en el hero.

## Riesgos y notas para quien construye

- **NearestCentroid y no kNN como modelo principal**: con kNN y la trampa del paso 4, Eva (z = −1) quedaría a la misma distancia de cuatro puntos del train
  (empate); `NearestCentroid` no tiene empates salvo en x = 5 exacto, y da una frontera visible. kNN aparece como ejemplo de "fit = guardar".
- **Empate en x = 5**: sklearn da la clase 0; el código usa `<=` para coincidir. Si el deslizador permite 5 horas, el chequeo del paso 5 lo resuelve en vivo con esa
  regla y lo explica.
- **`fit_transform(X_test)` reescribe el objeto**: después del reto `codigo1`, `sc.mean_` es 8. Si el escenario reutiliza el mismo objeto, debe mostrarlo.
- **Python y R no dan los mismos z con las librerías** (n frente a n − 1). Nunca escribir "igual que `scale()`" sin aclararlo. En la vida real, el R a mano divide
  entre n a propósito para coincidir con sklearn, y la comparación final usa `scale()` con centro y escala dados.
- Los errores de Python y R salen en inglés en esta máquina; copiarlos tal cual.
- No meter validación cruzada ni Pipeline: enlazar "Partición de datos: train, test y fuga de datos" y "Pipeline: el preprocesado dentro del modelo" por título.
- Español neutro y tuteo; sin emojis.
