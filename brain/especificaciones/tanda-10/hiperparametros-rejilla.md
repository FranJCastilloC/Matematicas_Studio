# Especificación: Ajuste de hiperparámetros y búsqueda en rejilla (hiperparametros-rejilla)

- Ruta: `decision-evaluacion`, orden 12; también `scikit-learn`, orden 4. En el catálogo figura con `tanda: 2` (esta especificación vive en `tanda-10/` porque se pidió en esa tanda).
- Área: Aprendizaje automático. Fuente del catálogo: "SM142003 UD0 (diap. 38 y 39), ISLR2 lab 6.5".
- Prerrequisitos: "Validación cruzada", "Partición de datos: train, test y fuga de datos".
- Siguientes: ninguno en el catálogo (lista vacía).
- Aparece: SM142003 UD0.
- Resumen del catálogo: "Hiperparámetros frente a parámetros: probar combinaciones con validación cruzada y quedarse con la mejor."

**Foco y límites.** La página de "Validación cruzada" ya explica los bloques, el promedio y la dispersión, y en su paso 6 ("Elegir
hiperparámetros") mueve un solo deslizador de k con kNN de regresión; en su paso 7 solo NOMBRA la validación anidada. Esta página no repite
la mecánica de los bloques: parte de ella y se ocupa de lo que viene después:
1. qué es un hiperparámetro y en qué se distingue de un parámetro;
2. la rejilla: dos perillas a la vez, una validación cruzada por celda, quedarse con la mejor y reentrenar (`refit`);
3. el costo: la explosión combinatoria (celdas × bloques × repeticiones + 1) y la búsqueda al azar como alternativa;
4. la escala logarítmica de C y γ y la trampa del mejor en el borde;
5. el optimismo del ganador (la mejor puntuación de la rejilla promete de más);
6. la validación anidada como medida honesta del procedimiento completo.
No explica la SVM ni kNN por dentro (se enlazan por título: "kNN" y la página de SVM que exista) ni la fuga por preprocesar antes de partir
(es de "Partición de datos: train, test y fuga de datos" y de "Pipeline: el preprocesado dentro del modelo"; aquí solo se menciona con una frase
en el reto `codigo` del pipeline si se usa, ver Riesgos).

## Datos de toda la página (inventados, se dice en la página)

Doce alumnos con dos notas de 0 a 10: **tareas** (x₁) y **prácticas** (x₂). La clase dice si aprobó el examen final (1) o no (0). La regla de fondo
es "aprueba si tareas + prácticas > 10", con una sola excepción a propósito: **el alumno 10** (Python; 11 en R), con (0.6, 7.9), suma 8.5 y aprobó
(es el "ruido" que hace que k = 1 sobreajuste). Las coordenadas tienen un decimal para que no haya empates de distancia (comprobado: ningún empate
entre el k-ésimo y el (k+1)-ésimo vecino en ninguna vuelta, para k = 1, 3, 5, 7 con los dos tipos de distancia, ni con los 12 de entrenamiento,
ni para los 6 alumnos nuevos).

| i (Py) | i (R) | tareas | prácticas | aprobó | bloque (Py / R) |
|---|---|---|---|---|---|
| 0 | 1 | 6.8 | 5.8 | 1 | 0 / 1 |
| 1 | 2 | 1.8 | 4.9 | 0 | 1 / 2 |
| 2 | 3 | 0.6 | 6.7 | 0 | 2 / 3 |
| 3 | 4 | 3.3 | 9.6 | 1 | 0 / 1 |
| 4 | 5 | 4.0 | 0.5 | 0 | 1 / 2 |
| 5 | 6 | 0.1 | 3.3 | 0 | 2 / 3 |
| 6 | 7 | 3.1 | 10.0 | 1 | 0 / 1 |
| 7 | 8 | 7.8 | 3.7 | 1 | 1 / 2 |
| 8 | 9 | 1.8 | 1.2 | 0 | 2 / 3 |
| 9 | 10 | 1.2 | 7.4 | 0 | 0 / 1 |
| 10 | 11 | 0.6 | 7.9 | 1 | 1 / 2 |
| 11 | 12 | 3.9 | 6.9 | 1 | 2 / 3 |

Seis aprobados y seis no. **Bloques fijos** (no al azar, para que Python y R den lo mismo): el alumno i va al bloque `i % 3` (Python) o
`rep(1:3, 4)` (R). Cada bloque tiene 4 alumnos; se entrena con 8.

**Seis alumnos nuevos** (el "examen final" que se usa una sola vez, pasos 6 y reto `codigo1`), en medios puntos, siguiendo la regla sin excepción:
(8.0, 1.0) → 0; (1.5, 9.0) → 1; (8.0, 3.0) → 1; (3.5, 1.0) → 0; (1.5, 0.5) → 0; (6.0, 6.0) → 1.

**El modelo** es kNN de clasificación con voto por mayoría (k impar, dos clases: nunca hay empate de votos) y dos hiperparámetros:
- `k` ∈ {1, 3, 5} (en el paso 1 también 7);
- la distancia `p`: p = 1 es la distancia "en cuadras" (Manhattan, |Δx₁| + |Δx₂|) y p = 2 la de "línea recta" (euclídea). En scikit-learn es el
  argumento `p` de `KNeighborsClassifier` (Minkowski); en la UD3 es `dist_power` de tidymodels.

### Números verificados (Python 3.13, NumPy 2.1.3, scikit-learn 1.6.1; R 4.6.1, caret)

**La rejilla 3 × 2 con 3 bloques** (aciertos por bloque, de 4 cada uno; media = aciertos / 12):

| k \ p | p = 1 (cuadras) | p = 2 (recta) |
|---|---|---|
| 1 | 3, 3, 2 → 8/12 = 0.667 | 3, 3, 3 → 9/12 = 0.75 |
| 3 | 4, 3, 4 → **11/12 = 0.917** | 4, 3, 3 → 10/12 = 0.833 |
| 5 | 1, 3, 3 → 7/12 = 0.583 | 1, 4, 3 → 8/12 = 0.667 |

Ganadora única: k = 3, p = 1 (0.917). `GridSearchCV` con `PredefinedSplit(bloque)` da `{'n_neighbors': 3, 'p': 1} 0.917` (igual).

**Aciertos sobre los mismos 12 de entrenamiento** (sin validación): k = 1 → 12/12 con las dos distancias; k = 3 y k = 5 → 11/12 con las dos.

**Barrido del paso 1** (solo p = 2): validación cruzada k = 1 → 9/12, k = 3 → 10/12, k = 5 → 8/12, k = 7 → 5/12 (con 8 de entrenamiento, k = 7 casi
vota la mayoría). Entrenamiento: k = 1 → 12/12, k = 3, 5, 7 → 11/12. Con p = 1: CV 8, 11, 7, 4 de 12; entrenamiento 12, 11, 11, 10 de 12.

**Los 6 alumnos nuevos con el ganador reentrenado con los 12** (k = 3, p = 1): predice [1 1 1 0 0 1] frente a [0 1 1 0 0 1]: 5/6 = **0.833**.
Falla el primero, (8.0, 1.0), porque sus vecinos más cercanos incluyen a (7.8, 3.7), que aprobó.

**Etiquetas al azar (el destacado del paso 6)**: con las mismas 12 posiciones y las 924 formas de repartir 6 aprobados y 6 no (todas, sin muestreo):
- media de la mejor de las 6 celdas: **0.538**; media de una celda cualquiera: 0.424 (por celda: 0.455, 0.455, 0.424, 0.424, 0.392, 0.392 en el orden
  (1,1), (1,2), (3,1), (3,2), (5,1), (5,2));
- la mejor celda llega a 0.75 o más en **130 de 924 (14.1 %)**; la celda fija (3, 1) sola, en **32 de 924 (3.5 %)**;
- distribución de los aciertos de la mejor celda (de 12): 1→2, 2→14, 3→30, 4→96, 5→122, 6→206, 7→198, 8→126, 9→78, 10→48, 11→4.
  Cuatro repartos sin ningún patrón alcanzan 11/12, lo mismo que la ganadora real.

**Validación anidada** (bloques externos = los 3 de siempre; dentro, los 8 de entrenamiento en su orden se reparten en 4 sub-bloques de 2 con
`[0, 1, 2, 3] * 2`; desempate: la primera celda en el orden (1,1), (1,2), (3,1), (3,2), (5,1), (5,2)):

| bloque externo (Py) | puntuaciones internas (6 celdas, en ese orden) | elegida | aciertos en el bloque externo |
|---|---|---|---|
| 0 | 0.5, 0.5, 0.5, 0.5, 0.625, 0.625 | k = 5, p = 1 | 1 de 4 |
| 1 | 0.875, 0.875, 0.625, 0.875, 0.5, 0.375 | k = 1, p = 1 | 3 de 4 |
| 2 | 0.75, 0.75, 0.25, 0.625, 0.375, 0.5 | k = 1, p = 1 | 2 de 4 |

Estimación anidada: 6/12 = **0.5**, frente al 0.917 de la rejilla. Comprobado con scikit-learn:
`cross_validate(GridSearchCV(KNeighborsClassifier(), rejilla, cv=PredefinedSplit(np.array([0, 1, 2, 3] * 2))), X, y, cv=PredefinedSplit(bloque))`
→ `test_score` = [0.25 0.75 0.5], media 0.5, y los mismos tres ganadores. Modelos entrenados: 3 × (6 × 4 + 1) = 75.

**SVM con kernel RBF sobre los mismos 12** (paso 5; `GridSearchCV(SVC(), ...)` con `PredefinedSplit(bloque)`, sin estandarizar: las dos notas ya están
en la misma escala). Aciertos de 12, filas C, columnas γ:

| C \ γ | 0.001 | 0.01 | 0.1 | 1 | 10 |
|---|---|---|---|---|---|
| 0.01 | 6 | 6 | 5 | 4 | 4 |
| 0.1 | 6 | 6 | 5 | 4 | 4 |
| 1 | 6 | 6 | **11** | 4 | 4 |
| 10 | **11** | 10 | 9 | 4 | 4 |
| 100 | 9 | 8 | 9 | 4 | 4 |
| 1000 | 10 | 8 | 9 | 4 | 4 |

30 celdas. Empate en la cima: (C = 1, γ = 0.1) y (C = 10, γ = 0.001), las dos 11/12. `best_params_` = `{'C': 1, 'gamma': 0.1}` (la primera en el orden
de `GridSearchCV`, que recorre C por fuera y γ por dentro); `(rank_test_score == 1).sum()` = 2. Con γ ≥ 1 todo cae a 4/12: cada punto solo se parece
a sí mismo. La diagonal de buenas celdas (C grande con γ chica, C mediano con γ mediana) es la forma típica de la RBF.
Entrenamiento: (C = 1000, γ = 10) acierta 12/12 sobre los mismos datos y 4/12 en validación cruzada.

**Conteos de modelos (verificados con un estimador que cuenta sus `fit`)**:
- Rejilla de Raschka p. 186: 8 valores de C con kernel lineal + 8 × 8 (C, γ) con RBF = **72** combinaciones (`len(ParameterGrid(...))`); con `cv=10`,
  **720** entrenamientos + 1 reentrenamiento = **721** (`refit=False` → 720).
- Anidada de Raschka pp. 192-193 (misma rejilla, `cv=2` dentro, `cv=5` fuera): 5 × (72 × 2 + 1) = **725**.
- UD3, diap. 30: k = 1, 3, ..., 51 son 26 valores; `vfold_cv(v = 10, repeats = 5)` son 50 remuestreos → 1300 entrenamientos (cuenta, no corrida: tidymodels
  con el motor `kknn` no está instalado aquí).
- UD3 caso real: `grid_regular(neighbors(c(3, 50)), levels = 10)` da k = 3 8 13 18 23 29 34 39 44 50 (corrido con `dials` en R 4.6.1) × 10 bloques = 100.
- `RandomizedSearchCV(n_iter=20, cv=10)` de Raschka p. 189: 20 × 10 = 200 (+ 1).

## Imagen central

**Un tablero de perillas: cada celda de la rejilla es un modelo que se entrena tantas veces como bloques, y se pinta con su puntuación.**

- A la izquierda, el **plano de los 12 alumnos** (x₁ tareas, x₂ prácticas; aprobados en `--pos`, no aprobados en `--neg`; el alumno 10 con un anillo
  que dice "excepción"). Encima, las **regiones de decisión** del kNN elegido (rejilla de píxeles tenues), y las líneas a los k vecinos del punto que se
  toque. Con p = 1 el "círculo" de vecinos se dibuja como un rombo; con p = 2, como un círculo (eso enseña la distancia sin fórmulas).
- A la derecha, el **tablero**: filas k, columnas p (en el paso 5, filas C y columnas γ en escala logarítmica). Cada celda empieza gris. Al tocarla
  se "corre": aparecen tres mini barras (una por bloque, 0 a 4 aciertos) que se encienden de a una, y la celda se pinta con la media en una escala de
  color de `--neg` (0) a `--pos` (1). La celda ganadora lleva un marco `--accent`.
- Debajo del tablero, el **contador de costo**: "celdas × bloques (+1 reentreno) = modelos entrenados", que sube a medida que se corren celdas.
- Un **termómetro del optimismo** (paso 6 en adelante): una barra con la mejor puntuación de la rejilla (0.917), la de los 6 alumnos nuevos (0.833)
  y la de la anidada (0.5).
- Todo se toca, nada depende de arrastrar: botones "correr celda", "correr toda la rejilla", "reentrenar con los 12", "examen final".

Modos por paso: 1) plano solo con un deslizador de k (p = 2) y los aciertos sobre los mismos datos ocultos hasta el chequeo; 2) el plano con
etiquetas sobre las piezas del modelo (las "perillas" y lo que aprende); 3) el tablero 3 × 2 vacío que se corre celda por celda; 4) el contador de costo
con deslizadores (valores por perilla, número de perillas, bloques, repeticiones) y la comparación rejilla frente a azar; 5) el tablero de la SVM, C × γ
en escala log, primero recortado; 6) el termómetro del optimismo y el simulador de etiquetas al azar; 7) la anidada: tres tableros chicos, uno por
bloque externo, cada uno con su ganador.

## Hipótesis inicial

"Tienes un modelo con dos perillas. Pruebas todas las combinaciones con validación cruzada y la mejor acierta 11 de cada 12. Cuando lleguen alumnos
nuevos, ¿crees que acertará 11 de cada 12, más o menos? ¿Por qué?"

Se vuelve a mostrar en el destacado del paso 6 (`#citaHipo`), cuando los 6 alumnos nuevos dan 0.833 y las etiquetas al azar llegan a 0.75.

## Pasos (7)

### Paso 1. Una perilla que no se aprende
- Idea: kNN tiene una perilla, k, que no sale de los datos: la eliges tú antes. Y si la eliges mirando cuánto acierta sobre los mismos datos con los
  que aprendió, siempre gana k = 1.
- Escenario: modo 1, sin fórmulas. El plano con los 12 alumnos y un deslizador k = 1, 3, 5, 7 (distancia en línea recta). Al moverlo cambian las
  regiones. El marcador "aciertos sobre estos 12" está tapado hasta el chequeo.
- Chequeo (predicción antes de tocar): "Con k = 1, le pides al modelo que clasifique a los mismos 12 alumnos con los que aprendió. ¿Cuántos acierta?"
  - Correcta: 12 de 12. Cada alumno es su propio vecino más cercano: se copia a sí mismo, también el alumno 10, la excepción.
  - 11 de 12: es lo que da k = 3; con k = 1 nadie se equivoca.
  - 6 de 12: eso sería adivinar.
  - "Depende de la distancia": con cualquier distancia, la distancia de un punto a sí mismo es 0.
- Después del chequeo se destapa la tabla del barrido (p = 2): entrenamiento 12, 11, 11, 11 frente a validación cruzada 9, 10, 8, 5 (de 12). La
  validación cruzada elige k = 3; el entrenamiento elegiría k = 1. La ventaja de k = 1 es aprenderse de memoria la excepción.
- Texto: los casos básico y particular de la UD3 miden la exactitud sobre los mismos puntos de entrenamiento, y por eso allí k = 1 da 100 % siempre
  (errata del material, dicha con naturalidad: es justo este paso). La regla de la UD3 k ≈ √n (diap. 26: √469 → 21) es un punto de partida, no una elección.
- Enlace por título a "Validación cruzada" (cómo se arman los bloques) y "kNN".

### Paso 2. Parámetros e hiperparámetros
- Idea: un **parámetro** lo calcula el algoritmo a partir de los datos al entrenar (los pesos de una regresión, los umbrales de un árbol). Un
  **hiperparámetro** lo fijas tú antes de entrenar y controla cómo aprende (k en kNN, C y γ en la SVM, λ en ridge, la profundidad máxima de un árbol).
  Regla práctica: si `fit` lo cambia, es parámetro; si se lo pasas al construir el modelo, es hiperparámetro.
- Notación entra aquí: el modelo es $\hat f_{\theta}$ con parámetros $\theta$ aprendidos; los hiperparámetros $h$ eligen la familia y la forma de
  aprender: $\theta = \text{fit}(\text{datos};\, h)$.
- Escenario: modo 2, una bandeja con 10 fichas para soltar en dos cajas (o tocar y elegir caja). Banco (todas verificables con la API):
  - Hiperparámetros: `n_neighbors` de kNN; `p` de kNN; `C` de SVC; `gamma` de SVC; `alpha` de Ridge (λ); `max_depth` de un árbol.
  - Parámetros: `coef_` de una regresión logística; el umbral de cada nodo de un árbol ya entrenado; `mean_` de `StandardScaler` (lo aprende el
    preprocesado con `fit`: es parámetro, aunque no sea "del modelo"); `support_vectors_` de una SVM.
  - Trampas fuera de las dos cajas (tercera caja "ni uno ni otro"): `cv=10` (es del procedimiento de evaluación, no del modelo); `random_state`.
- Chequeo (elegir con explicación): "kNN ya entrenado: ¿qué parámetros aprendió?"
  - Correcta: "Ninguno en sentido estricto: guarda los datos de entrenamiento y calcula todo al predecir (es perezoso); sus perillas, k y la distancia, son hiperparámetros."
  - "k": k no lo calcula `fit`; lo pasas tú.
  - "La distancia media entre los puntos": no se calcula nada al entrenar.
  - "Los pesos de cada variable": eso es de una regresión.
- Citas: intro3 diap. 38 (`#/hyperparameter-tuning`: se fijan antes de aprender, k en k-NN y el parámetro de complejidad en árboles); raschka6 PDF 15
  (p. 185: pesos aprendidos frente a parámetros de ajuste); islr2 PDF 289 (p. 278, `cv.glmnet` elige λ por validación cruzada: `bestlam <- cv.out$lambda.min`; es la
  "ISLR2 lab 6.5" que cita el catálogo).
- `details.profundizar` "¿Y los hiperparámetros del optimizador?": la tasa de aprendizaje o el número de épocas de una red también son
  hiperparámetros; se nombran sin desarrollar.

### Paso 3. La rejilla: dos perillas a la vez
- Idea: con dos perillas no basta un deslizador: se arma una **rejilla** con todas las combinaciones (3 valores de k × 2 distancias = 6 celdas), se
  corre una validación cruzada en cada celda y gana la de mayor media. Después se **reentrena** el ganador con los 12 alumnos: ese es el modelo que
  se usa (`refit=True`, el valor por defecto de `GridSearchCV`).
- Fórmula viva (números que cambian al correr celdas):
  $\text{CV}(k, p) = \frac{1}{3}\sum_{b=1}^{3} \text{acierto}_b(k, p)$ y $(\hat k, \hat p) = \arg\max_{(k,p)} \text{CV}(k, p)$.
  Ejemplo vivo: $\text{CV}(3, 1) = \frac{1}{3}\left(\frac{4}{4} + \frac{3}{4} + \frac{4}{4}\right) = 0.917$.
- Escenario: modo 3, tablero 3 × 2 en gris. Francisco toca cada celda; las tres mini barras se encienden y la celda se pinta. El marco de la ganadora
  aparece solo cuando las 6 celdas están corridas. Botón "reentrenar con los 12" (aparece al final): el plano muestra las regiones de k = 3, p = 1.
- Chequeo (cálculo con datos en vivo): la celda (k = 3, p = 2) se corre sola y muestra 4, 3 y 3 aciertos por bloque; "¿cuánto vale su media?"
  Respuesta 0.833 (10/12). Pista para 0.75: "son 10 aciertos de 12, no 9". Antes del chequeo esa celda no muestra su color ni su número.
- Citas: intro3 diap. 39 (`#/6/8`: un modelo por combinación evaluado con k-fold; la Figure 17 tiene 8 modelos y gana el 2); raschka6 PDF 16 (p. 186:
  `GridSearchCV` con `param_grid`, `cv=10`, `refit=True`; `best_score_` 0.9846, `best_params_` C = 100, γ = 0.001, rbf); raschka6 PDF 17 (p. 187:
  `best_estimator_` y por qué no hace falta reentrenar a mano con `refit=True`; prueba 0.974).
- `details.profundizar` "¿Promedio de bloques o aciertos totales?": `best_score_` es el promedio de las puntuaciones de cada bloque. Con bloques del
  mismo tamaño coincide con aciertos/12; con bloques de 5, 5 y 2 alumnos y aciertos 4, 5 y 0, el promedio de bloques es 0.6 y los aciertos totales
  9/12 = 0.75 (verificado con scikit-learn 1.6.1 y `PredefinedSplit([0,0,0,0,0,1,1,1,1,1,2,2])`, k = 3).

### Paso 4. La explosión combinatoria
- Idea: el costo de la rejilla se multiplica: (valores de la perilla 1) × (valores de la perilla 2) × ... × (bloques) × (repeticiones), más 1
  reentreno. Agregar una perilla con 8 valores multiplica el tiempo por 8. Por eso existe la **búsqueda al azar**: en vez de todas las celdas,
  sortea un número fijo de combinaciones (`RandomizedSearchCV`, `n_iter`).
- Fórmula viva: $\text{modelos} = \left(\prod_{j} n_j\right) \cdot B \cdot R + 1$.
- Escenario: modo 4, deslizadores: número de perillas (1 a 4), valores por perilla (2 a 10), bloques B (2 a 10), repeticiones R (1 a 5), y un
  interruptor `refit`. Un muro de cuadraditos (uno por modelo, agrupados de a 100 cuando pasan de 500) crece con los deslizadores. Tres botones
  precargan los ejemplos del material: "Raschka p. 186" (72 combinaciones, B = 10), "UD3 diap. 30" (26 valores, B = 10, R = 5), "UD3 caso real"
  (10 valores, B = 10).
- Chequeo (cálculo): "La rejilla de Raschka (p. 186) prueba 8 valores de C con kernel lineal y 8 × 8 de C y γ con RBF, con `cv=10` y `refit=True`.
  ¿Cuántos modelos entrena?" Respuesta **721**. Pistas: para 720 "falta el reentreno final del ganador"; para 640 + 1 o 641 "el kernel lineal también
  cuenta: 8 + 64 = 72 combinaciones"; para 73 "cada combinación se entrena una vez por bloque".
- Después del chequeo: la comparación rejilla frente a azar de Raschka (Figure 6.7): con 9 intentos, una rejilla 3 × 3 prueba solo 3 valores distintos
  de cada perilla; 9 sorteos prueban 9 valores distintos de cada una. Si solo una perilla importa, el azar la explora mejor.
- Citas: raschka6 PDF 17 (p. 187: idea de la búsqueda al azar y Figure 6.7); knn3 diap. 30 (`#/k-nn-using-the-tidymodels-modelling-framework`:
  k = 1, 3, ..., 51 con `vfold_cv(v = 10, repeats = 5)`); knn3real `aplicación-al-modelo-k-nearest-neighbors-knn` (`grid_regular(neighbors(c(3, 50)),
  levels = 10)` y mejor k = 29 con AUC 0.837).
- `details.profundizar` "Más allá del azar": Raschka nombra la reducción a la mitad sucesiva (`HalvingRandomSearchCV`, PDF 19-20, p. 189-190: muchos
  candidatos con pocos datos, se descarta la mitad peor y se repite) y la optimización bayesiana (hyperopt). Solo se nombran.

### Paso 5. Escala logarítmica y el borde de la rejilla (trampa)
- Idea: C y γ de la SVM se mueven en órdenes de magnitud (0.001 a 1000): la rejilla se arma en potencias de 10, y el tablero se dibuja en escala log.
  La trampa: si la mejor celda queda en el **borde**, el óptimo puede estar fuera de lo que exploraste: hay que ampliar en esa dirección.
- Qué significan (una línea cada uno, sin teoría de SVM): C grande castiga cada error de entrenamiento (margen angosto, riesgo de sobreajuste);
  γ grande hace que cada punto solo influya a su alrededor (fronteras muy retorcidas). Enlace por título a la página de SVM.
- Escenario: modo 5. Empieza con la rejilla **recortada** C ∈ {10, 100, 1000}, γ ∈ {0.001, 0.01, 0.1}: valores 11, 10, 9 / 9, 8, 9 / 10, 8, 9 (de 12).
  La mejor, (C = 10, γ = 0.001), está en la esquina. Botones "agregar C más chico", "agregar γ más grande", etc. Al ampliar a la rejilla completa 6 × 5
  aparece la diagonal y el empate con (C = 1, γ = 0.1).
- Chequeo (elegir con explicación, antes de ampliar): "La mejor celda de la rejilla recortada está en la esquina C = 10, γ = 0.001. ¿Qué haces?"
  - Correcta: "Amplío la rejilla hacia C más chico y γ más chico (y reviso la otra esquina): el óptimo puede estar afuera."
  - "Me quedo con ella: es la mejor": es la mejor de lo que probaste, no necesariamente de lo posible.
  - "Pruebo valores entre 10 y 100": refinar por dentro no explora lo que está del otro lado del borde.
  - "Cambio de modelo": antes de cambiar, termina de explorar este.
- Después del chequeo, al ampliar: (C = 1, γ = 0.1) también da 11/12. Empate: `GridSearchCV` se queda con la primera en su orden (reto `codigo2`).
- **Erratas del material para decir con naturalidad**: en la UD2 (diap. 44) el C elegido es 0.001, el borde inferior de la rejilla
  C = 10^(−3..3): el mejor podría estar más abajo. En la misma unidad, C tiene dos sentidos opuestos: en las diapositivas 14 y 15 es un presupuesto
  (C = 0 es margen duro) y desde la 20 y en todo el código es un costo (C grande es margen duro). Aquí C es siempre el costo, como en `SVC` y `kernlab`.
- Citas: svm3 diap. 27 (`#/7/2`: C bajo = margen ancho, C alto = angosto; γ alto sobreajusta, bajo subajusta); svm3 diap. 44 (`#/9/11`: grilla
  C = 10^(−3..3) con `metric = "ROC"` y `bestTune` C = 0.001); islr2 PDF 405 (p. 394: `tune(svm, ranges = list(cost = ..., gamma = ...))` con el kernel
  radial y validación cruzada de 10 bloques: la búsqueda en rejilla de R con `e1071`; la versión de una sola perilla, `cost`, está en PDF 401-402, p. 390-391).
- `details.profundizar` "¿Por qué muestrear en escala log?": Raschka (PDF 18, p. 188) usa `scipy.stats.loguniform(0.0001, 1000.0)` en la búsqueda al azar:
  la misma cantidad de sorteos en cada década. Con una uniforme entre 0.0001 y 1000, casi todos los sorteos caerían entre 100 y 1000.

### Paso 6. El optimismo del ganador (destacado)
- Idea: la puntuación de la celda ganadora no es una medida limpia: es el **máximo** de 6 promedios con ruido, y el máximo de cosas ruidosas tiende a
  salir alto por suerte. Para saber cuánto acierta de verdad hace falta un dato que no participó en la elección: el examen final (los 6 alumnos nuevos)
  o la validación anidada (paso 7).
- Escenario: modo 6, termómetro del optimismo. Botón "examen final": el modelo reentrenado (k = 3, p = 1) clasifica a los 6 nuevos.
- Chequeo (cálculo con datos en vivo): el escenario muestra las 6 predicciones [1 1 1 0 0 1] junto a las etiquetas reales [0 1 1 0 0 1]. "¿Qué
  exactitud tiene en el examen final?" Respuesta 5/6 = 0.833. Antes del chequeo no se muestra el número ni se marcan los errores.

**Destacado con predicción (la confusión natural del concepto): "Si la rejilla dijo 0.917, ¿por qué no creerle?"**
- Predicción: "Imagina que las etiquetas fueran al azar: 6 aprobados repartidos sin ningún patrón, nada que aprender. Corres la misma rejilla de 6 celdas.
  ¿Con qué frecuencia la mejor celda llega a 0.75 o más?" Opciones: "Nunca: no hay nada que aprender" / "Alrededor de 3 de cada 100" / **"Alrededor de
  14 de cada 100"** (correcta) / "La mitad de las veces".
- Explicación con el simulador: un botón "repartir al azar" y otro "los 924 repartos". De los 924 repartos posibles, la mejor celda llega a 0.75 o más en
  130 (14.1 %); una sola celda fija, (3, 1), en 32 (3.5 %). Elegir la mejor de 6 multiplica por 4 las veces que la suerte parece talento. Cuatro repartos
  sin patrón llegan a 11/12, como la ganadora real. La media de la mejor celda es 0.538; la de una celda cualquiera, 0.424.
- Moraleja: `best_score_` sirve para **elegir**, no para **reportar**. Lo que se reporta es el examen final usado una sola vez (0.833 aquí) o la anidada.
  Con más celdas el optimismo crece.
- Muestra de nuevo la hipótesis.
- `details.profundizar` "¿Por qué con etiquetas al azar sale menos de 0.5?": con 6 y 6, al sacar un bloque de validación con más aprobados, en el
  entrenamiento quedan más no aprobados, y kNN (sobre todo con k grande, que vota casi la mayoría) tiende a predecir la clase contraria a la que sobra en
  validación. Por eso la media por celda baja con k: 0.455 (k = 1), 0.424 (k = 3), 0.392 (k = 5).
- Enlace por título a "Partición de datos: train, test y fuga de datos" (el test se usa una sola vez).

### Paso 7. Validación anidada: medir el procedimiento
- Idea (el paso más técnico): si la elección es parte del modelo, hay que validarla también. **Bucle externo**: parte los datos en bloques para medir.
  **Bucle interno**: dentro de cada entrenamiento externo, corre la rejilla completa con su propia validación cruzada y elige. El ganador interno se
  reentrena con el entrenamiento externo y se evalúa en el bloque externo, que no vio nada de la elección. Se promedia.
- Lo que mide no es "el modelo k = 3, p = 1", sino el **procedimiento** "elegir con esta rejilla y entrenar". Cada bloque externo puede elegir otra
  cosa: aquí (5, 1), (1, 1) y (1, 1).
- Escenario: modo 7, tres tableros chicos (uno por bloque externo) con sus 6 celdas internas pintadas, el ganador marcado y el resultado externo debajo
  (1/4, 3/4, 2/4). El termómetro agrega la anidada: 0.5.
- Chequeo (elegir con explicación): "Cada bloque externo eligió su propio (k, p) y la media externa es 0.5. ¿Qué número reportas como lo que esperas
  de este procedimiento con datos nuevos?"
  - Correcta: "0.5, la media de los bloques externos: es la única medida en la que ningún dato evaluado participó en la elección."
  - "0.917": es el máximo de la rejilla, optimista (paso 6).
  - "0.75, el mejor bloque externo": elegir el mejor bloque repite el error del ganador.
  - "Ninguno: como cada bloque eligió distinto, la anidada no sirve": que elijan distinto es información: con 8 alumnos, elegir es casi una lotería.
- Texto: con tan pocos datos, la anidada da 0.5 y dice algo verdadero: con 8 alumnos de entrenamiento y sub-bloques de 2, la rejilla interna no puede
  distinguir bien las celdas. Con los 569 casos de Raschka la anidada (0.974 ± 0.015) queda cerca del grid search (0.985).
- Conteo: aquí 3 × (6 × 4 + 1) = 75 modelos; la anidada de Raschka, 5 × (72 × 2 + 1) = 725 (verificado).
- **Errata para decir con naturalidad**: Raschka (p. 192) llama "5×2 cross-validation" a una anidada con 5 bloques externos y 2 internos; en la
  literatura (Dietterich) "5×2 cv" suele ser otra cosa: 5 repeticiones de una validación cruzada de 2 bloques. La página de "Validación cruzada" ya lo
  avisa en una nota; aquí se repite en una línea.
- Citas: raschka6 PDF 22 (p. 192: bucle externo e interno, Figure 6.8; el código sigue en la p. 193 con SVM 0.974 ± 0.015 frente a árbol 0.934 ± 0.016,
  para elegir entre algoritmos).
- `details.profundizar` "¿Y el modelo final?": la anidada no produce un modelo: mide. El modelo que se usa sale de correr la rejilla una vez más con
  todos los datos de entrenamiento (paso 3).

## Vida real (Python y R)

Python 3.13 con NumPy 2.1.3 y scikit-learn 1.6.1; R 4.6.1 con caret. **Las dos librerías se pudieron correr en esta máquina** (scikit-learn 1.6.1 está
instalado). Lo que NO se pudo correr: tidymodels con el motor `kknn` (el paquete `kknn` no está instalado), así que `dist_power = tune()` de la UD3 queda
como texto.

Algoritmo: la rejilla a mano, con tres bucles (k, distancia, bloque) y un kNN escrito con sus propias manos, y al final la librería. Mismos datos que el
recorrido. El texto sin el prefijo `id: ` es exactamente lo que se ejecutó. Las líneas con id `-` no tienen evento.

### Python

```
imp: import numpy as np
datos: X = np.array([[6.8, 5.8], [1.8, 4.9], [0.6, 6.7], [3.3, 9.6],
-:               [4.0, 0.5], [0.1, 3.3], [3.1, 10.0], [7.8, 3.7],
-:               [1.8, 1.2], [1.2, 7.4], [0.6, 7.9], [3.9, 6.9]])
etiq: y = np.array([1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1])   # inventados
bloque: bloque = np.array([0, 1, 2] * 4)                     # 3 bloques fijos
def: def knn(Xtr, ytr, x, k, p):
-:     d = (np.abs(Xtr - x) ** p).sum(axis=1) ** (1 / p)
-:     vecinos = np.argsort(d)[:k]
-:     return int(ytr[vecinos].mean() > 0.5)
ini: mejor, mejor_kp = -1, None
fork: for k in [1, 3, 5]:
forp:     for p in [1, 2]:
cero:         aciertos = 0
forb:         for b in range(3):
pred:             pred = [knn(X[bloque != b], y[bloque != b], x, k, p) for x in X[bloque == b]]
suma:             aciertos += np.sum(pred == y[bloque == b])
media:         media = aciertos / 12
muestra:         print(k, p, round(media, 3))
si:         if media > mejor:
upd:             mejor, mejor_kp = media, (k, p)
fin: print("rejilla a mano:", mejor_kp, round(mejor, 3))
lib0: from sklearn.model_selection import GridSearchCV, PredefinedSplit
-: from sklearn.neighbors import KNeighborsClassifier
ctrl: cv = PredefinedSplit(bloque)                         # los mismos 3 bloques
rej: rejilla = {"n_neighbors": [1, 3, 5], "p": [1, 2]}
gs: gs = GridSearchCV(KNeighborsClassifier(), rejilla, cv=cv).fit(X, y)
lib: print("GridSearchCV:", gs.best_params_, round(gs.best_score_, 3))
```

Salida real:
```
1 1 0.667
1 2 0.75
3 1 0.917
3 2 0.833
5 1 0.583
5 2 0.667
rejilla a mano: (3, 1) 0.917
GridSearchCV: {'n_neighbors': 3, 'p': 1} 0.917
```

### R

```
datos: X <- matrix(c(6.8, 5.8, 1.8, 4.9, 0.6, 6.7, 3.3, 9.6,
-:               4.0, 0.5, 0.1, 3.3, 3.1, 10.0, 7.8, 3.7,
-:               1.8, 1.2, 1.2, 7.4, 0.6, 7.9, 3.9, 6.9), ncol = 2, byrow = TRUE)
etiq: y <- c(1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1)   # inventados
bloque: bloque <- rep(1:3, 4)                        # 3 bloques fijos
def: knn_a_mano <- function(Xtr, ytr, x, k, p) {
-:   d <- rowSums(abs(sweep(Xtr, 2, x)) ^ p) ^ (1 / p)
-:   vecinos <- order(d)[1:k]
-:   as.integer(mean(ytr[vecinos]) > 0.5)
-: }
ini: mejor <- -1; mejor_kp <- NULL
fork: for (k in c(1, 3, 5)) {
forp:   for (p in c(1, 2)) {
cero:     aciertos <- 0
forb:     for (b in 1:3) {
pred:       pred <- apply(X[bloque == b, ], 1, function(x) knn_a_mano(X[bloque != b, ], y[bloque != b], x, k, p))
suma:       aciertos <- aciertos + sum(pred == y[bloque == b])
-:     }
media:     media <- aciertos / 12
muestra:     cat(k, p, round(media, 3), fill = TRUE)
si:     if (media > mejor) {
upd:       mejor <- media; mejor_kp <- c(k, p)
-:     }
-:   }
-: }
fin: cat("rejilla a mano:", mejor_kp, round(mejor, 3), fill = TRUE)
lib0: suppressPackageStartupMessages(library(caret))
ctrl: ctrl <- trainControl(method = "cv", index = lapply(1:3, function(b) which(bloque != b)))
rej: rejilla <- data.frame(k = c(1, 3, 5))                # caret no tiene p para knn
gs: fit <- train(data.frame(X), factor(y), method = "knn", tuneGrid = rejilla, trControl = ctrl)
lib: print(fit$results[, c("k", "Accuracy")])
```

Salida real:
```
1 1 0.667
1 2 0.75
3 1 0.917
3 2 0.833
5 1 0.583
5 2 0.667
rejilla a mano: 3 1 0.917
  k  Accuracy
1 1 0.7500000
2 3 0.8333333
3 5 0.6666667
```

Comprobado: quitando el prefijo `id: ` (y `-: `), los dos bloques son idénticos carácter por carácter a los archivos que se ejecutaron
(`vida.py` y `vida.R` en el scratchpad de esta sesión). Copiar respetando los espacios de alineación de los comentarios. `cat(..., fill = TRUE)` se usa
para que R no deje un espacio al final de la línea. La tabla de caret coincide con la columna p = 2 de la rejilla a mano (0.75, 0.833, 0.667):
caret, con `method = "knn"` (`knn3`), solo usa la distancia euclídea y no deja ajustar p (ver reto `codigo3`).

Eventos (una sola lista `EV`, la misma para los dos lenguajes, en el orden de ejecución):
`imp` (solo Python), `datos`, `etiq`, `bloque`, `def`, `ini`; después, por cada una de las 6 celdas en el orden (1,1), (1,2), (3,1), (3,2), (5,1), (5,2):
`fork` (solo al empezar cada k: 3 veces en total), `forp`, `cero`, 3 × (`forb`, `pred`, `suma`), `media`, `muestra`, `si` y `upd` cuando mejora
(3 veces: en (1,1), (1,2) y (3,1)); al final `fin`, `lib0`, `ctrl`, `rej`, `gs`, `lib`.
Total: 1 + 5 + 3 + 6 × (1 + 1 + 9 + 1 + 1 + 1) + 3 + 6 = **102 eventos**. Es largo: la página arranca con velocidad alta y el botón "ir al final" visible.
`imp` solo existe en Python: en R se narra "Esta línea solo existe en Python: R trae `matrix`, `order` y `apply` sin cargar nada."

### Foto de estado por línea ejecutada

| Celda (k, p) | bloque (Py / R) | aciertos del bloque | `aciertos` acumulado | `media` | `mejor` / `mejor_kp` tras `si` |
|---|---|---|---|---|---|
| (1, 1) | 0/1, 1/2, 2/3 | 3, 3, 2 | 3, 6, 8 | 0.667 | 0.667 / (1, 1) |
| (1, 2) | | 3, 3, 3 | 3, 6, 9 | 0.75 | 0.75 / (1, 2) |
| (3, 1) | | 4, 3, 4 | 4, 7, 11 | 0.917 | 0.917 / (3, 1) |
| (3, 2) | | 4, 3, 3 | 4, 7, 10 | 0.833 | sin cambio |
| (5, 1) | | 1, 3, 3 | 1, 4, 7 | 0.583 | sin cambio |
| (5, 2) | | 1, 4, 3 | 1, 5, 8 | 0.667 | sin cambio |

Visual de Vida real: el tablero 3 × 2 a la derecha; en `pred` se resalta el bloque de validación (4 alumnos con contorno `--accent`) en un plano
chico y se dibujan sus predicciones (aciertos en `--ok`, fallos en `--bad`); en `suma` sube la mini barra del bloque; en `media` se pinta la celda;
en `upd` se mueve el marco de la ganadora. En `gs` el tablero entero parpadea una vez ("la librería hace lo mismo"); en `lib` aparece el resultado
debajo. Índices con `ctx.ix`: el bloque se muestra como 0, 1, 2 en Python y 1, 2, 3 en R.

Qué alumnos van a validación en cada bloque (Python): bloque 0 → 0, 3, 6, 9; bloque 1 → 1, 4, 7, 10; bloque 2 → 2, 5, 8, 11 (en R, +1).
Las predicciones de cada alumno las calcula la página en JS con el mismo kNN (sin empates de distancia: verificado); deben reproducir los aciertos
de la tabla.

### Predicción antes de reproducir (`#vrPred`)

"¿Cuántas veces se ejecuta la línea `pred = ...` (la que predice un bloque entero)?" Respuesta **18** (6 celdas × 3 bloques).
Distractores: 6 (las celdas), 3 (los bloques), 72 (las veces que se llama a `knn`: 6 celdas × 12 alumnos). Pista: "la línea está dentro de los tres
bucles, pero predice 4 alumnos de una vez".

### Trampas reales (retos `codigo1` a `codigo3`)

**codigo1: `best_score_` no es el examen final (Python).**
```
import numpy as np
from sklearn.model_selection import GridSearchCV, PredefinedSplit
from sklearn.neighbors import KNeighborsClassifier
# X, y y bloque: los de Vida real
rejilla = {"n_neighbors": [1, 3, 5], "p": [1, 2]}
gs = GridSearchCV(KNeighborsClassifier(), rejilla, cv=PredefinedSplit(bloque)).fit(X, y)
T = np.array([[8.0, 1.0], [1.5, 9.0], [8.0, 3.0], [3.5, 1.0], [1.5, 0.5], [6.0, 6.0]])
yT = np.array([0, 1, 1, 0, 0, 1])                    # 6 alumnos nuevos
print(round(gs.best_score_, 3))
print(round(gs.score(T, yT), 3))
```
Salida real:
```
0.917
0.833
```
Pregunta: "¿Por qué el segundo número es más bajo?" Correcta: "`best_score_` es el máximo de 6 medias de validación cruzada y salió alto en parte por
suerte; `gs.score` usa el ganador reentrenado con los 12 sobre alumnos que no participaron en la elección." Distractores: "`gs.score` usa el modelo
sin reentrenar" (con `refit=True` usa `best_estimator_`, reentrenado); "el examen tiene un error de datos" (no: el alumno (8.0, 1.0) está cerca de
(7.8, 3.7), que aprobó); "`best_score_` se mide sobre el entrenamiento" (se mide en los bloques de validación, pero es el máximo).

**codigo2: empate en la cima (Python).**
```
import numpy as np
from sklearn.model_selection import GridSearchCV, PredefinedSplit
from sklearn.svm import SVC
# X, y y bloque: los de Vida real
rejilla = {"C": [0.01, 0.1, 1, 10, 100, 1000], "gamma": [0.001, 0.01, 0.1, 1, 10]}
gs = GridSearchCV(SVC(), rejilla, cv=PredefinedSplit(bloque)).fit(X, y)
print(gs.best_params_, round(gs.best_score_, 3))
print((gs.cv_results_["rank_test_score"] == 1).sum())
```
Salida real:
```
{'C': 1, 'gamma': 0.1} 0.917
2
```
Pregunta: "Hay dos celdas con rango 1. ¿Por qué `best_params_` dice C = 1, γ = 0.1 y no C = 10, γ = 0.001?" Correcta: "Ante un empate, `GridSearchCV` se
queda con la primera combinación en su orden de recorrido (C por fuera, γ por dentro, de menor a mayor), no con la "más simple" ni con la de mayor C."
Distractores: "porque C = 1 es más chico y regulariza más" (no hay ningún criterio de simplicidad); "porque γ = 0.1 tiene mejor puntuación con más
decimales" (las dos son 11/12 exactos); "es al azar" (es determinista). Moraleja: mira `cv_results_`, no solo `best_params_`.

**codigo3: `tuneLength` elige los valores por ti (R).**
```
suppressPackageStartupMessages(library(caret))
# X, y y bloque: los de Vida real
ctrl <- trainControl(method = "cv", index = lapply(1:3, function(b) which(bloque != b)))
fit <- train(data.frame(X), factor(y), method = "knn", tuneLength = 3, trControl = ctrl)
print(fit$results$k)
print(fit$bestTune)
```
Salida real (más tres avisos `k = 9 exceeds number 8 of patterns`, uno por bloque):
```
[1] 5 7 9
  k
1 5
```
Pregunta: "La rejilla a mano dice que el mejor k con distancia euclídea es 3. ¿Por qué caret elige 5?" Correcta: "`tuneLength = 3` arma por su cuenta
3 valores, k = 5, 7 y 9: el 3 nunca se probó, y k = 9 ni siquiera cabe con 8 alumnos de entrenamiento." Distractores: "caret usa otra distancia" (usa la
euclídea, como p = 2); "caret desempata hacia k grande" (no hubo empate: el 3 no estaba); "los bloques son otros" (se pasaron con `index`, son los mismos).
Relación con el material: en la UD2, diap. 53, un comentario dice `tuneLength = 10 # 10 random values of C and sigma`, pero sin `search = "random"`
caret arma una rejilla, no valores al azar (errata del mapa). Y si se intenta `tuneGrid = expand.grid(k = c(1, 3, 5), p = c(1, 2))`, caret responde
`The tuning parameter grid should have columns k` (verificado): `knn` solo tiene esa perilla (`getModelInfo("knn")` lista solo `k`).

`p.vr-nota`: en Python, `GridSearchCV(KNeighborsClassifier(), {"n_neighbors": [1, 3, 5], "p": [1, 2]}, cv=...)`; en R base, `e1071::tune()` (ISLR2 9.6) o
caret con `tuneGrid`; en tidymodels, `tune_grid` con `grid_regular` (UD3).
`details.profundizar` "Con un pipeline, los nombres llevan prefijo": dentro de `make_pipeline(StandardScaler(), KNeighborsClassifier())`, la rejilla
`{"n_neighbors": [1, 3, 5]}` falla con `ValueError` (`Invalid parameter 'n_neighbors'`, verificado) y hay que escribir
`{"kneighborsclassifier__n_neighbors": [1, 3, 5]}` (da `{'kneighborsclassifier__n_neighbors': 3} 0.917`). Es el `svc__C` de Raschka (p. 186). Meter el
escalado en el pipeline hace que se aprenda dentro de cada bloque (la fuga, en "Pipeline: el preprocesado dentro del modelo").

## Retos (12)

RETOS = ["ojo", "construir", "mano", "mano2", "error", "prop1", "prop2", "prop3", "codigo1", "codigo2", "codigo3", "formula"]

1. **ojo** (ojo clínico, 5 rondas al azar, aprueba con 4 de 5): se muestra una pieza de un modelo y Francisco decide sin buscar: **parámetro**,
   **hiperparámetro** o **ninguno de los dos** (del procedimiento). Banco: `n_neighbors` (hiper), `p` de kNN (hiper), `C` de SVC (hiper), `gamma`
   (hiper), `alpha` de Ridge (hiper), `max_depth` (hiper), `n_estimators` de un bosque (hiper), `coef_` de LogisticRegression (parámetro),
   `intercept_` (parámetro), `support_vectors_` (parámetro), `mean_` de StandardScaler (parámetro, del preprocesado), `cluster_centers_` de KMeans
   (parámetro), `cv=10` (ninguno), `scoring="accuracy"` (ninguno), `n_iter` de RandomizedSearchCV (ninguno). Explicación por ronda: "lo calcula
   `fit`" / "se lo pasas al construir" / "es de cómo evalúas o buscas".
2. **construir** (manipular el tablero de la SVM): partiendo de la rejilla recortada (C ∈ {10, 100, 1000}, γ ∈ {0.001, 0.01, 0.1}), agregar filas y
   columnas con los botones hasta cumplir: (a) que la mejor celda no quede en el borde; (b) encontrar las dos celdas con 11/12; (c) gastar como mucho
   90 entrenamientos (30 celdas × 3 bloques; el contador lo muestra). Ok al cumplir las tres. Con la rejilla completa la ganadora (C = 1, γ = 0.1) es
   interior.
3. **mano** (a mano, datos al azar, pistas escalonadas, reintentable): "¿cuántos modelos entrena?" Generar 2 o 3 perillas con 2 a 6 valores cada una,
   B ∈ {3, 5, 10}, R ∈ {1, 2, 3}, `refit` sí o no; y en la mitad de las rondas, anidada con B_ext ∈ {3, 5} y B_int ∈ {2, 3}. Fórmulas:
   simple $\prod n_j \cdot B \cdot R + [\text{refit}]$; anidada $B_{ext} \cdot (\prod n_j \cdot B_{int} + 1)$. Pistas: 1) "cuenta primero las celdas";
   2) "cada celda se entrena una vez por bloque y por repetición"; 3) la primera multiplicación hecha.
4. **mano2** (a mano, reintentable): bloques de tamaños distintos (3 bloques con tamaños al azar entre 2 y 6, aciertos al azar). Pide la puntuación
   que reporta `GridSearchCV` (promedio de las exactitudes de cada bloque) y la exactitud con aciertos totales. Ejemplo fijo para la explicación:
   tamaños 5, 5, 2 y aciertos 4, 5, 0 → 0.6 frente a 0.75 (verificado con scikit-learn). Pista: "`best_score_` promedia bloques, no alumnos".
5. **error** (cazar el error, 3 variantes del código de Vida real, una línea mal):
   - V1 (Python): `pred = [knn(X, y, x, k, p) for x in X[bloque == b]]` (entrena con TODOS, también con el bloque que evalúa). Salida real:
     `1 1 1.0`, `1 2 1.0`, `3 1 0.917`, `3 2 0.917`, `5 1 0.917`, `5 2 0.917`, `rejilla a mano: (1, 1) 1.0`. Es el error del paso 1: gana k = 1.
   - V2 (Python): `aciertos = 0` movido antes de `for k` (fuera de los bucles). Salida real: `1 1 0.667`, `1 2 1.417`, `3 1 2.333`, `3 2 3.167`, `5 1 3.75`,
     `5 2 4.417`, `rejilla a mano: (5, 2) 4.417`. Los aciertos se acumulan entre celdas; la última siempre gana y la "exactitud" pasa de 1.
   - V3 (R): `vecinos <- order(-d)[1:k]` (los más lejanos). Salida real: `1 1 0.417`, `1 2 0.083`, `3 1 0.25`, `3 2 0.167`, `5 1 0.25`, `5 2 0.25`,
     `rejilla a mano: 1 1 0.417`.
6. **prop1** (opción múltiple, `mezclar: true`): "¿Qué distingue a un hiperparámetro de un parámetro?" Correcta: "El hiperparámetro se fija antes de
   entrenar y controla cómo aprende el modelo; el parámetro lo calcula el entrenamiento a partir de los datos." Pistas: "El hiperparámetro es más
   importante" → "los dos importan; la diferencia es quién los fija"; "Los hiperparámetros son los que tienen nombre en griego" → "λ es hiperparámetro y
   β es parámetro: el nombre no decide"; "El parámetro se elige con validación cruzada" → "eso se hace con los hiperparámetros; los parámetros los
   calcula `fit`".
7. **prop2**: "¿Por qué `best_score_` suele salir más alto que la exactitud en datos nuevos?" Correcta: "Porque es el máximo de varias medias con ruido:
   la celda ganadora ganó en parte por suerte." Pistas: "Porque se mide sobre el entrenamiento" → "se mide en validación; el problema es elegir el
   máximo"; "Porque `refit` cambia el modelo" → "reentrenar con más datos suele ayudar, no perjudicar"; "No suele pasar" → "con etiquetas al azar, la
   mejor de 6 celdas llegó a 0.75 en el 14 % de los repartos".
8. **prop3**: "¿Qué mide la validación anidada?" Correcta: "El rendimiento esperado del procedimiento completo: buscar con la rejilla y entrenar al
   ganador." Pistas: "El rendimiento del mejor (k, p)" → "cada bloque externo puede elegir otro (k, p)"; "Elige los hiperparámetros finales" → "mide;
   el modelo final sale de una rejilla con todo el entrenamiento"; "Lo mismo que la validación cruzada simple, pero más rápido" → "es mucho más cara:
   725 modelos en el ejemplo de Raschka".
9. **codigo1**, 10. **codigo2**, 11. **codigo3**: ver Vida real.
12. **formula**: la parte de memoria (`B.ordenar`), registrada con `C.reto("formula", ok)`.

## Memoria

**B.ordenar** (la búsqueda en rejilla en scikit-learn), piezas en orden:
1. `gs = GridSearchCV(`
2. `KNeighborsClassifier(),`
3. `{"n_neighbors": [1, 3, 5], "p": [1, 2]},`
4. `cv=5)`
5. `gs.fit(X_train, y_train)`
6. `gs.best_params_`

Distractores: `gs.fit(X_test, y_test)` (el test no se toca para elegir), `gs.best_score_ # informe final` (optimista: se usa para elegir, no para
reportar), `{"k": [1, 3, 5]}` (el argumento se llama `n_neighbors`).

**Tarjetas (8):**
1. ¿Parámetro o hiperparámetro? → Parámetro: lo calcula `fit` (pesos, umbrales). Hiperparámetro: lo fijas tú antes (k, C, γ, λ, profundidad).
2. ¿Por qué no elegir k mirando el entrenamiento? → Porque k = 1 acierta siempre el 100 % sobre los mismos datos: cada punto es su propio vecino.
3. ¿Qué hace `GridSearchCV`? → Una validación cruzada por cada combinación de la rejilla, elige la de mayor media y (con `refit=True`) reentrena el ganador con todo el entrenamiento.
4. ¿Cuántos modelos entrena una rejilla? → (producto de los valores de cada perilla) × bloques × repeticiones, más 1 si reentrena. Raschka p. 186: 72 × 10 + 1 = 721.
5. ¿Por qué C y γ en potencias de 10? → Se mueven en órdenes de magnitud; una rejilla lineal gastaría casi todo en valores grandes.
6. ¿Qué haces si el mejor queda en el borde? → Ampliar la rejilla en esa dirección: el óptimo puede estar afuera (UD2, diap. 44: C = 0.001 era el borde).
7. ¿Por qué `best_score_` es optimista? → Es el máximo de varias medias con ruido. Con etiquetas al azar, la mejor de 6 celdas llegó a 0.75 en el 14 % de los repartos.
8. ¿Qué es la validación anidada? → Un bucle externo mide y uno interno elige; estima el procedimiento completo (aquí 0.5 frente al 0.917 de la rejilla).

## Citas (14)

| id de fuente | página PDF o diapositiva / ancla | página impresa | sección | qué hay | cuándo leerla |
|---|---|---|---|---|---|
| intro3 | diap. 38, `hyperparameter-tuning` | | 5.4 Hyperparameter tuning | se fijan antes de aprender (k en k-NN, complejidad en árboles), distintos de los parámetros | Paso 2 |
| raschka6 | 15 | 185 | Fine-tuning machine learning models via grid search | parámetros (pesos aprendidos) frente a hiperparámetros (regularización, profundidad) | Paso 2 |
| islr2 | 289 | 278 | 6.5.2 Ridge Regression and the Lasso | `cv.glmnet` elige λ por validación cruzada (`bestlam <- cv.out$lambda.min`): un hiperparámetro de regresión | Paso 2, al terminar |
| intro3 | diap. 39, `6/8` | | Búsqueda en rejilla | un modelo por combinación evaluado con k-fold; Figure 17 con 8 modelos | Paso 3 |
| raschka6 | 16 | 186 | Tuning hyperparameters via grid search | `GridSearchCV` con la rejilla lineal + RBF, `cv=10`, `refit=True`; `best_score_` 0.9846, C = 100, γ = 0.001 | Pasos 3 y 4 |
| raschka6 | 17 | 187 | idem y randomized search | `best_estimator_` y `refit`; prueba 0.974; Figure 6.7 (rejilla frente a azar) | Pasos 3 y 4 |
| knn3 | diap. 30, `k-nn-using-the-tidymodels-modelling-framework` | | 4.6 k-NN con tidymodels | k = 1, 3, ..., 51 con `vfold_cv(v = 10, repeats = 5)`, `select_best("roc_auc")`; `dist_power = tune()` opcional | Paso 4 |
| knn3real | `aplicación-al-modelo-k-nearest-neighbors-knn` | | 8.3 Aplicación al modelo kNN | `grid_regular(neighbors(c(3, 50)), levels = 10)`, `tune_grid`; mejor k = 29 (AUC CV 0.837) | Paso 4 |
| svm3 | diap. 27, `7/2` | | C como costo y γ | C bajo = margen ancho, alto = angosto; γ alto sobreajusta, bajo subajusta | Paso 5 |
| svm3 | diap. 44, `9/11` | | Código del caso 1 con CV | grilla C = 10^(−3..3), `metric = "ROC"`; `bestTune` C = 0.001, en el borde | Paso 5 (trampa del borde) |
| raschka6 | 18 | 188 | Randomized search: loguniform | `loguniform(0.0001, 1000.0)`: igual número de sorteos por década | Paso 5, profundizar |
| islr2 | 405 | 394 | 9.6.2 Support Vector Machine | `tune(svm, ranges = list(cost, gamma))` con 10 bloques sobre el kernel radial; `best.model` evaluado en el test | Paso 5 y `p.vr-nota` |
| raschka6 | 22 | 192 | Algorithm selection with nested cross-validation | bucle externo e interno, Figure 6.8; código y resultados en la p. 193 | Paso 7 |
| svm3 | diap. 53, `9/20` | | SVM RBF con sigest | `tuneLength = 10` con un comentario que dice "random" (es una rejilla); bestTune σ = 0.0105, C = 4 | Reto `codigo3` |

Para las diapositivas (`tipo: "diapositivas"`): `data-pag` = número de diapositiva y `data-ancla` = el ancla de reveal sin `#/` (columna 2).
Para `knn3real` (`tipo: "documento"`): `data-ancla` = el id de la sección (sin `#`), con tildes tal cual.
`data-pag` de los PDF: raschka6 PDF = impresa − 170; islr2 PDF = impresa + 11.

Todas las páginas y anclas salen de los mapas `brain/fuentes/raschka-cap6.md`, `sm142003-ud0-intro.md`, `sm142003-ud2-svm.md`, `sm142003-ud3-knn.md`
e `islr2-r.md`. Verificado por mí con `pdftotext`: raschka6 PDF 16 (rejilla de 72 combinaciones, `best_score_` 0.9846, `best_params_`), PDF 17
(`refit`, 0.974, Figure 6.7), PDF 22-23 (anidada, "5×2", 0.974 ± 0.015 y 0.934 ± 0.016). islr2 PDF 289 (`cv.glmnet`,
`bestlam <- cv.out$lambda.min`, impresa 278), PDF 401-402 (`tune()` con `cost`, 10 bloques por defecto, `best.model`) y PDF 405 (`tune()` con `cost` y
`gamma`): el mapa `islr2-r.md` da los rangos 286-289 y 403-405; la página exacta se fijó leyendo cada una con `pdftotext`.

## Erratas e inconsistencias del material (decirlas con naturalidad en la página)

- **UD3, casos básico y particular**: miden la exactitud sobre los mismos puntos de entrenamiento: k = 1 da 100 % siempre (paso 1). Además llaman
  "precisión" a la exactitud.
- **UD2, diap. 44**: el C elegido (0.001) es el borde inferior de la rejilla; el óptimo podría estar fuera (paso 5).
- **UD2, C con dos sentidos**: presupuesto en las diap. 14-15 (C = 0 es margen duro), costo desde la 20 y en todo el código (C grande es margen duro) (paso 5).
- **UD2, diap. 53**: el comentario `# 10 random values of C and sigma` no corresponde: sin `search = "random"`, caret arma una rejilla (reto `codigo3`).
- **Raschka p. 192**: llama "5×2 cross-validation" a la anidada de 5 externos y 2 internos; en la literatura 5×2 cv es otra cosa (paso 7).
- **Raschka p. 185**: el pie de la Figure 6.6 dice que la curva es de la SVM, pero es de la regresión logística (`logisticregression__C`). Solo si se cita esa figura.
- **Raschka p. 191**: compara el 98.2 % de `HalvingRandomSearchCV` con la búsqueda al azar, cuya exactitud de prueba nunca se calcula (solo si se
  menciona en el profundizar del paso 4).
- No es errata, pero conviene decirlo: Raschka (p. 187) reentrena a mano con `clf.fit(X_train, y_train)` y en el párrafo siguiente aclara que con
  `refit=True` no hace falta.

## Riesgos y notas para quien construye

- **Bloques fijos, no al azar**: `PredefinedSplit(bloque)` en Python y `index = lapply(1:3, function(b) which(bloque != b))` en caret. Con `cv=3` de
  scikit-learn los bloques serían consecutivos (0-3, 4-7, 8-11) y los números cambiarían. En la página JS, usar `i % 3`.
- **kNN en JS**: distancia de Minkowski con p = 1 o 2, ordenar por distancia (sin empates en estos datos: verificado para k = 1, 3, 5, 7, con 8 y con
  12 de entrenamiento, y para los 6 nuevos) y votar por mayoría (k impar). Las predicciones tienen que reproducir la tabla de aciertos por bloque.
- **Simulador de etiquetas al azar (paso 6)**: recorrer las 924 combinaciones de 6 aprobados es rápido en JS (924 × 6 celdas × 12 predicciones).
  Las posiciones de los empates de distancia no dependen de las etiquetas, así que tampoco hay empates. Resultados a reproducir: 130 de 924 con la mejor
  ≥ 0.75; 32 de 924 con la celda (3, 1) ≥ 0.75; medias 0.538 y 0.424.
- **Anidada (paso 7)**: sub-bloques internos `[0, 1, 2, 3] * 2` sobre los 8 de entrenamiento en su orden original; desempate por la primera celda
  (`np.argmax`, igual que `GridSearchCV`). Resultados: (5, 1) con 1/4, (1, 1) con 3/4, (1, 1) con 2/4.
- **Tablero SVM (paso 5)**: los 30 valores son precalculados con scikit-learn (no se reimplementa la SVM en JS). Copiarlos de la tabla de arriba (aciertos
  de 12).
- **Los dos C**: en toda la página C es el costo de `SVC`/`kernlab`. Si se cita la UD2, avisar la inconsistencia una vez.
- Los avisos de R salen en inglés (`k = 9 exceeds number 8 of patterns`, `The tuning parameter grid should have columns k`). Copiar tal cual.
- `round(media, 3)` en Python 3.13 con NumPy 2.1.3 imprime `0.667` (sin `np.float64(...)`) porque se imprime el número suelto; `mejor_kp` es una tupla de
  enteros de Python. No cambiar a f-strings sin volver a correr.
- La catalogación dice `tanda: 2`; esta especificación se escribió en `tanda-10/`. No cambia nada para el constructor.
