# Especificación: Un flujo de modelado reproducible en R (flujo-modelado-r)

- Ruta: `modelado-r` (grupo Programación con datos), orden 2. Tanda 10.
- Archivo: `biblioteca/conceptos/flujo-modelado-r.html`
- Área: Programación con datos. Fuente del catálogo: "SM142003 UD0 (diap. 48 a 50), ISLR2 labs 5.3 y 6.5".
- Prerrequisitos: "Partición de datos: train, test y fuga de datos" (planeado, tanda 2: sale sin enlace), "Fórmulas y modelos en R: lm, glm y predict"
  (tanda 10, se construye en paralelo).
- Siguientes: ninguno (lista vacía).
- Aparece: SM142003 UD0.
- Resumen del catálogo: "Semilla, partición, validación y métrica en el orden correcto, con tidymodels como versión moderna."

**Foco y límites.** Esta página es la MECÁNICA del flujo en código: qué hace `set.seed`, cómo se parte con `sample` y con `initial_split`, por qué
se ajusta solo con entrenamiento, cómo se predice y se mide (RMSE en regresión, accuracy en clasificación) y por qué el resultado sale igual cada vez.
NO explica la teoría de la validación cruzada (ya está en "Validación cruzada"), ni las fórmulas de las métricas en profundidad ("Métricas de error: MAE,
MSE, RMSE y R2", "Matriz de confusión, precisión, recall y F1"), ni el muestreo estratificado ("Muestreo estratificado y desbalance de clases", planeado),
ni el generador pseudoaleatorio por dentro. Se enlazan por título exacto donde corresponde (pasos 5 y 6 y destacado).
Sugerencia para la sesión principal (no la aplica quien construye): agregar "Validación cruzada" a `siguientes` de `flujo-modelado-r`, si se quiere el
enlace automático en Conexiones.

**Material oficial.** El flujo completo en R no está escrito en ninguna unidad del máster: la UD0 de SM142003 lo describe en palabras (diap. 17 a 22,
42, 46) y nombra tidymodels sin código (diap. 48 a 50); ISLR2 lo hace con R base (`set.seed`, `sample`, `lm(subset = train)`, `predict`, `mean`) en los labs
5.3.1, 4.7.2 y 6.5.1, y no usa tidymodels ni caret (0 apariciones en el libro). Las fórmulas de RMSE y accuracy están en SM142004 (UD1 y UD2).
La página lo dice con naturalidad: "lo que sigue une piezas que el material da por separado".

## Datos de toda la página (inventados, se dice en la página)

Diez compañeros: horas de estudio y nota del examen (0 a 10).

| horas | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| nota | 2 | 4 | 5 | 3 | 6 | 4 | 7 | 8 | 7 | 9 |
| aprueba (nota ≥ 5) | 0 | 0 | 1 | 0 | 1 | 0 | 1 | 1 | 1 | 1 |

R: `horas <- 1:10`, `nota <- c(2, 4, 5, 3, 6, 4, 7, 8, 7, 9)`, `datos <- data.frame(horas, nota)`. El número de fila coincide con las horas
(la fila 3 es el compañero que estudió 3 horas): eso hace que los índices de `sample` se lean directo en el gráfico.

**Semilla principal: 123** (la que usa la UD0, diap. 22, y la UD4 de SM142002, p.11). Todo verificado en R 4.6.1:
- `set.seed(123); sample(10, 3)` → `3 10 2` (prueba). Entrenamiento: horas 1, 4, 5, 6, 7, 8, 9.
- `lm(nota ~ horas, data = datos[-prueba, ])` → **b0 = 1, b1 = 0.75** (exactos). RMSE de entrenamiento = **1** exacto.
- Predicciones de prueba: horas 3 → 3.25 (real 5, error 1.75); horas 10 → 8.5 (real 9, error 0.5); horas 2 → 2.5 (real 4, error 1.5).
  Cuadrados 3.0625 + 0.25 + 2.25 = 5.5625; MSE = 5.5625 / 3 = 1.854167; **RMSE de prueba = 1.361678**.
- Ajuste con los 10 (fuga): b0 = 1.8666667, b1 = 0.6606061; RMSE sobre las mismas 3 filas de prueba = **0.8686281** (más bajo: optimista).

**Tabla de semillas** (para el selector del escenario; `sample(10)` es la baraja completa, sus tres primeros coinciden con `sample(10, 3)` en las 12
semillas, verificado; b0, b1 y RMSE con `lm` sobre las 7 restantes):

| semilla | `sample(10)` | prueba = `sample(10, 3)` | b0 | b1 | RMSE prueba | RMSE entreno |
|---|---|---|---|---|---|---|
| 1 | 9 4 7 1 2 5 3 10 6 8 | 9 4 7 | 2.0692 | 0.6719 | 1.2088 | 0.9873 |
| 2 | 5 6 9 1 10 7 4 8 3 2 | 5 6 9 | 1.7521 | 0.7353 | 1.5149 | 0.8409 |
| 3 | 5 7 4 2 3 8 9 6 10 1 | 5 7 4 | 2.0790 | 0.6268 | 1.0677 | 1.0127 |
| 4 | 8 3 9 7 4 10 2 1 6 5 | 8 3 9 | 1.4286 | 0.7143 | 1.0817 | 1.0302 |
| 5 | 2 9 7 3 1 6 5 10 4 8 | 2 9 7 | 1.3351 | 0.7474 | 0.9459 | 1.0996 |
| 6 | 5 8 4 9 3 1 2 7 6 10 | 5 8 4 | 2.1357 | 0.6066 | 1.1768 | 0.9704 |
| 7 | 10 3 7 4 2 6 5 9 8 1 | 10 3 7 | 1.6841 | 0.6346 | 1.1102 | 1.0633 |
| 8 | 4 7 2 9 10 8 3 5 1 6 | 4 7 2 | 1.9196 | 0.6563 | 1.0348 | 1.0208 |
| 9 | 5 6 3 8 7 4 10 9 2 1 | 5 6 3 | 1.5115 | 0.7176 | 1.4020 | 0.8354 |
| 10 | 9 7 8 6 3 2 10 5 4 1 | 9 7 8 | 1.8404 | 0.6489 | 0.7706 | 1.1218 |
| 42 | 1 5 10 8 2 4 6 9 7 3 | 1 5 10 | 2.3185 | 0.5582 | 0.9609 | 1.1158 |
| 123 | 3 10 2 8 6 9 1 7 5 4 | 3 10 2 | 1.0000 | 0.7500 | 1.3617 | 1.0000 |

El escenario puede calcular b0, b1 y RMSE en JavaScript con mínimos cuadrados cerrados ($b_1 = S_{xy}/S_{xx}$, $b_0 = \bar y - b_1 \bar x$): da lo mismo que
`lm`. Lo que NO se puede calcular en JS es la baraja de R: se guarda la columna `sample(10)` tal cual.

**Las 120 particiones posibles** (`combn(10, 3)`, todas, verificado): RMSE de prueba mínimo 0.6504 (prueba 7, 9, 10), máximo 2.1828 (prueba 1, 4, 6),
mediana 1.2188, media 1.2342, percentiles 10 y 90: 0.8757 y 1.6280. 33 de 120 dan más que 1.3617.

**La misma semilla 123 en tres funciones** (verificado):
- R `sample(10, 3)` → prueba 3, 10, 2.
- R `rsample::initial_split(datos, prop = 0.7)` → baraja con la misma `sample(10)` = `3 10 2 8 6 9 1 7 5 4`, toma los **7 primeros para entrenamiento**
  (`training(...)$horas` = 3 10 2 8 6 9 1) y deja los **3 últimos para prueba** (`testing(...)$horas` = 4 5 7). Con `linear_reg() |> fit(...)`:
  b0 = 2.08 (2.0790), b1 = 0.627 (0.6268), predicciones 4.586397, 5.213235, 6.466912 para horas 4, 5, 7; `rmse()` → 1.07 (1.0677, igual a la semilla 3 de
  `sample`, que elige el mismo trío).
- Python `train_test_split(horas, nota, test_size=3, random_state=123)` → prueba horas 5, 1, 8 (en ese orden); entrenamiento 6, 9, 4, 2, 7, 10, 3.
  `LinearRegression`: intercepto 2.09375, pendiente 0.59375; RMSE de prueba 0.9466566717488801. `np.random.seed(123); np.random.choice(10, 3, replace=False)`
  → `[4 0 7]` (el mismo trío: `train_test_split` usa el generador antiguo de NumPy); `np.random.default_rng(123).choice(10, size=3, replace=False)` → `[5 6 0]`.

**Clasificación (paso 6), semilla 123, mismo entrenamiento**: `glm(aprueba ~ horas, family = binomial, data = datos[-prueba, ])` → b0 = −6.342247,
b1 = 1.167721 (el entrenamiento no es separable: horas 5 aprueba y horas 6 no, así que `glm` no da avisos). Probabilidades de prueba: horas 3 → 0.0552483,
horas 10 → 0.9952030, horas 2 → 0.0178664. Clases con umbral 0.5: 0, 1, 0. Reales: 1, 1, 0. **Accuracy = 2/3 = 0.6666667** (falla el de 3 horas, que
aprobó con 5). Accuracy de entrenamiento 5/7 = 0.7142857 (probabilidades 0.0056, 0.1582, 0.3767, 0.6602, 0.8620, 0.9526, 0.9847 para horas 1, 4, 5, 6, 7, 8, 9).
Sin `type = "response"`, `predict` da log-odds: −2.839085, 5.334961, −4.006805.

Versiones en esta máquina: R 4.6.1, rsample 1.3.2, tidymodels 1.5.0, yardstick 1.4.0, parsnip 1.6.1; Python 3.13, NumPy 2.1.3, pandas 2.2.3,
**scikit-learn 1.6.1 (instalado: todo el código Python de la página se corrió)**. TensorFlow no está instalado y no hace falta en esta página.

## Imagen central

**Una baraja que reparte a diez compañeros en dos mesas, y una línea de cinco estaciones que no se puede desordenar.**

- **La baraja** (arriba): diez fichas numeradas (las horas) en el orden de `sample(10)` para la semilla elegida. Un rótulo "semilla: 123" con un
  selector (1 a 10, 42, 123) y un botón "sin semilla" (elige una semilla oculta al azar de la lista y muestra "semilla: ?"). Con `sample(10, 3)` las
  **tres primeras** fichas bajan a la mesa de prueba; con `initial_split` (paso 7) las **siete primeras** van a entrenamiento y las tres últimas a prueba.
  Un interruptor de tres posiciones (paso 7): `sample` (R), `initial_split` (R), `train_test_split` (Python, con su propio trío 5, 1, 8 guardado aparte:
  en Python no se muestra baraja porque no es la de R).
- **El plano** (centro): horas en x (0 a 11), nota en y (0 a 10). Entrenamiento con puntos llenos en `--j`; prueba con puntos huecos en `--k`. La recta
  ajustada se dibuja SOLO con los puntos de entrenamiento. En la prueba, segmentos verticales punteados en `--neg` entre el punto real y la recta (los errores).
  Un interruptor "ajustar con todos" (paso 4 y retos) recalcula la recta con los 10 puntos y pinta los puntos de prueba con un halo `--bad`: la fuga.
- **La línea de estaciones** (abajo): cinco cajas en fila, Semilla → Partir → Ajustar → Predecir → Medir, cada una con la línea de R que la hace
  (`set.seed(123)`, `prueba <- sample(10, 3)`, `lm(..., data = datos[-prueba, ])`, `predict(...)`, `sqrt(mean(...))`). Se encienden de a una por paso.
  Botón "Correr todo otra vez": anima las cinco estaciones y deja el resultado al lado del anterior en una **pizarra de corridas** (lista de las últimas 5
  corridas: semilla, trío de prueba, RMSE). Con semilla fija las filas salen idénticas; con "sin semilla" cambian. Esa pizarra es lo que hace visible "el
  mismo resultado cada vez".
- **Medidor de RMSE** a la derecha del plano: una barra con el RMSE de prueba y una marca fina con el RMSE de entrenamiento.
- Modo clasificación (paso 6): el eje y pasa a "aprueba" (0 o 1), los puntos se colorean por clase, se dibuja la curva logística de `glm` (coeficientes
  de arriba, fijos con la semilla 123; el selector de semilla se desactiva en este paso) y una línea horizontal en 0.5. Cada punto de prueba lleva un
  rótulo "acierta" (`--ok`) o "falla" (`--bad`) solo después del chequeo.
- Todo se toca con botones; nada depende de arrastrar.

Modos por paso: `corridas` (1), `baraja` (2), `mesas` (3), `ajuste` (4), `medir` (5), `clasificar` (6), `tres-funciones` (7).

## Hipótesis inicial

"Tu compañero y tú corren el mismo programa con los mismos datos: separa a tres estudiantes para examinar al modelo y entrena con el resto. Él obtiene un
error de 1.21 y tú de 1.51. ¿Alguno se equivocó? ¿Qué tendrían que hacer para obtener lo mismo? ¿Y cuál de los dos números es el 'verdadero'?"
Se muestra de nuevo en el destacado del paso 5 (`#citaHipo`), cuando aparece que ningún RMSE de una sola partición es "el verdadero".
(1.21 y 1.51 son las semillas 1 y 2 de la tabla.)

## Pasos (7)

### Paso 1. La misma receta, dos resultados
- Idea: separar a quién se examina es un sorteo. Si el sorteo cambia, cambia el examen y cambia la nota del modelo. Sin código ni símbolos.
- Escenario: modo `corridas`. Los diez compañeros como fichas con sus horas y nota, y el botón "Repartir al azar" que aparece SOLO después del chequeo.
  Cada clic elige una semilla oculta (de la tabla) y anota en la pizarra el trío de prueba y el error. Dos o tres clics bastan para ver que cambia.
- Chequeo (predicción antes de tocar, sin símbolos): "Corres dos veces seguidas el mismo programa, con los mismos datos, y en cada corrida el programa
  elige al azar a 3 de los 10 para examinar al modelo. ¿Qué error obtienes?"
  - Correcta: "Probablemente uno distinto cada vez: cambian los tres examinados, cambia la recta y cambia el error."
  - "El mismo, porque los datos y el código son iguales": el código incluye un sorteo; sin fijarlo, el sorteo cambia.
  - "Siempre el mismo trío, porque el azar de la computadora es fijo": es fijo solo si se lo pides (paso 2).
  - "El programa da error": nada falla; simplemente reparte distinto.
- Texto: cita intro3 diap. 18 `#/data-splitting` (el objetivo es la generalización: medir con datos que el modelo no vio). Cierre: "para que tu compañero obtenga tu número, el sorteo tiene que ser repetible".

### Paso 2. La semilla: un sorteo que se puede repetir (trampa)
- Idea: la computadora no tira dados: calcula una sucesión de números que parecen al azar a partir de un número inicial, la **semilla**. `set.seed(123)`
  pone la sucesión en su punto de partida; desde ahí, cada llamada que usa azar consume números. Misma semilla + mismas llamadas en el mismo orden = mismo resultado.
- Notación entra aquí. Escenario: modo `baraja`. Selector de semilla; la baraja de diez fichas en el orden de `sample(10)`. Botón "set.seed + sample(10, 3)":
  resalta las tres primeras.
- Salidas reales: `set.seed(123); sample(10, 3)` → `3 10 2`. Repetir `set.seed(123); sample(10, 3)` → `3 10 2` otra vez.
- **Trampa marcada**: una sola semilla no congela todas las llamadas. `set.seed(123); sample(10, 3); sample(10, 3)` → `3 10 2` y luego `2 6 3`: la segunda
  llamada sigue la sucesión. El script entero sí se repite igual cada vez que lo corres de arriba abajo; lo que no se repite es la segunda llamada respecto de la primera.
  Ojo para quien construye: `2 6 3` NO son las fichas 4 a 6 de la baraja (8 6 9): `sample` sin reemplazo consume la sucesión de otra forma. No dibujar la
  segunda llamada como "las tres siguientes de la baraja"; mostrarla como un resultado nuevo.
- Chequeo (predicción antes de tocar): "Escribes `set.seed(123)` una vez y luego `sample(10, 3)` dos veces seguidas. ¿Las dos llamadas dan los mismos tres números?"
  - Correcta: "No: la primera da 3 10 2 y la segunda otra cosa; la semilla fija el comienzo, no cada llamada."
  - "Sí, la semilla fija todas las llamadas": es la confusión que la trampa muestra.
  - "No, y además la próxima vez que corra el script la primera también cambiará": la primera se repite siempre que la semilla vaya antes.
  - "Depende de la computadora": en la misma versión de R, no.
- Citas: prog4html `pedirle-ayuda-a-r` (`set.seed(42)` antes de `runif`; con una sola semilla antes de tres llamadas solo el primer vector se repite: es la
  misma trampa en el material de clase); prog4 p.11 (`set.seed(123)` y `runif(20, 10, 50)`: las matrices del texto se reproducen idénticas); islr2 PDF 56
  (impresa 45, `set.seed(1303)` para repetir resultados, "se usa en todos los labs").
- Errata para decir con naturalidad: prog4 p.8 imprime `rnorm(10)` y `runif(10)` **sin semilla**, así que tus números no coincidirán con los del texto;
  el propio documento sí la pone en p.11.
- `details.profundizar` "¿La semilla es la misma en todas las versiones de R?": no siempre. Desde R 3.6.0 `sample` cambió de método; con el antiguo,
  `set.seed(123, sample.kind = "Rounding"); sample(10, 3)` → `3 8 4` (verificado, R avisa que es un muestreo sesgado). Por eso ISLR2 advierte que con
  versiones nuevas los resultados de los labs pueden no coincidir (islr2 PDF 24, impresa 13). Reproducible significa: misma semilla, mismas llamadas,
  misma versión.

### Paso 3. Partir: dos mesas
- Idea: con los índices sorteados se arman dos tablas: prueba `datos[prueba, ]` (3 filas) y entrenamiento `datos[-prueba, ]` (7 filas). El signo menos
  en R significa "todas menos estas". 7 y 3 es el 70/30 de la UD0.
- Escenario: modo `mesas`. Las fichas bajan a dos mesas; la tabla de entrenamiento y la de prueba se muestran con sus filas.
- Chequeo (cálculo con datos en vivo, con la semilla elegida en el selector; por defecto 123): "Con `prueba <- sample(10, 3)` = 3 10 2, ¿qué horas tiene
  `datos[-prueba, ]`?" Elección: "1 4 5 6 7 8 9" (correcta) / "3 10 2" (eso es la prueba) / "1 2 3 4 5 6 7" (no son las 7 primeras) / "error: no se pueden
  usar números negativos como índice" (en R sí: excluyen). La respuesta correcta se recalcula si Francisco cambió la semilla.
- Citas: intro3 diap. 19 `#/5/4` (entrenamiento para todo el desarrollo, prueba una sola vez; regla de oro); intro3 diap. 20 `#/5/5` (70/30 u 80/20);
  islr2 PDF 224 (impresa 213, 5.3.1: `set.seed(1)`, `train <- sample(392, 196)` y `lm(..., subset = train)`: la misma idea con la mitad para cada lado).
- Errata para decir con naturalidad: la diap. 20 dice que más de 80 % en entrenamiento arriesga sobreajuste; la proporción no sobreajusta, lo que pierdes con
  una prueba chica es precisión al medir.
- Nota: ISLR guarda los índices de entrenamiento (`train`) y la página guarda los de prueba (`prueba`). Las dos formas valen; lo importante es que el otro
  conjunto se obtenga con el signo menos (`-train` en el libro).

### Paso 4. Ajustar solo con entrenamiento (trampa)
- Idea: el modelo aprende únicamente de la mesa de entrenamiento: `lm(nota ~ horas, data = datos[-prueba, ])`. Los tres de prueba no existen para él.
- Escenario: modo `ajuste`. La recta sale de los 7 puntos llenos; los 3 huecos quedan en gris claro. Fórmula viva: $\hat y = b_0 + b_1 \cdot \text{horas}$ con
  b0 = 1 y b1 = 0.75 (semilla 123), recalculada al cambiar la semilla.
- **Trampa marcada (fuga de datos)**: interruptor "ajustar con todos". La recta pasa a b0 = 1.8667, b1 = 0.6606 y el RMSE de prueba baja de 1.3617 a
  0.8686: parece mejor, pero el modelo ya había visto esas notas. Es el reto `codigo2`.
- Chequeo (cálculo con datos en vivo): "Con la recta del entrenamiento, ¿qué nota predice para el compañero de 10 horas?" Con semilla 123: 8.5
  (1 + 0.75 · 10). Pista para 9: "ese es el valor real; la pregunta es qué dice la recta". Pista para 8.47: "esa es la recta ajustada con todos (fuga)".
- Citas: intro3 diap. 17 `#/a-strategic-approach` ("gastar" bien los datos y evitar la fuga); islr2 PDF 224 (impresa 213, `subset = train`).
- Enlace por título a "Fórmulas y modelos en R: lm, glm y predict" (qué hace `lm` con la fórmula) y a "Partición de datos: train, test y fuga de datos".

### Paso 5. Predecir y medir (destacado)
- Idea: `predict(ajuste, datos[prueba, ])` da las notas que el modelo predice para los tres de prueba; el RMSE resume sus errores en las mismas unidades que
  la nota: $\text{RMSE} = \sqrt{\tfrac{1}{n}\sum (y_i - \hat y_i)^2}$.
- Escenario: modo `medir`. Segmentos de error en `--neg`; tabla viva horas, real, predicha, error, error². Fórmula viva:
  $\sqrt{\tfrac{1.75^2 + 0.5^2 + 1.5^2}{3}} = \sqrt{\tfrac{5.5625}{3}} = 1.36$. El medidor con la marca de entrenamiento (1.00).
  Los valores de la tabla y el RMSE aparecen después del chequeo.
- Chequeo (cálculo con datos en vivo): "Los errores de prueba son 1.75, 0.5 y 1.5. ¿Cuánto vale el RMSE?" Correcta 1.36 (tolerancia 0.01).
  Pistas para errores típicos: 1.25 → "promediaste los errores sin elevarlos al cuadrado (y sin raíz)" (es `mean(errores)`, verificado: 1.25);
  1.85 → "ese es el MSE: falta la raíz"; 0.75 → "dividiste entre 10 filas, no entre las 3 de prueba" (√(5.5625/10) = 0.7458).
  Si Francisco cambió la semilla, el chequeo usa los errores en vivo.
- Citas: intro3 diap. 42 `#/regression-models` (MSE, RMSE en las unidades de y, MAE, R²); rl1 p.22 (fórmulas de MAE, MSE y RMSE con $\epsilon_i = Y_i - \hat Y_i$);
  islr2 PDF 224 (impresa 213, `mean((mpg - predict(lm.fit, Auto))[-train]^2)`: el MSE de validación en una línea, sin raíz).
- Enlace por título a "Métricas de error: MAE, MSE, RMSE y R2".

**Destacado con predicción (la confusión natural): "Si cambio la semilla, ¿cuál RMSE es el verdadero?"**
- Predicción: "Cambias `set.seed(123)` por `set.seed(42)` sin tocar nada más. El RMSE de prueba..." Opciones: "cambia, y ninguno de los dos es 'el verdadero'"
  (correcta) / "sigue en 1.36: el modelo es el mismo" / "baja siempre, porque 42 es mejor semilla" / "da error".
- Después: el selector de semilla queda libre y la pizarra muestra las 12 semillas de la tabla (de 0.77 a 1.51). Un botón "ver las 120 particiones"
  dibuja un histograma de puntos de los 120 RMSE posibles (mínimo 0.65, mediana 1.22, máximo 2.18; marca en 1.36).
- Explicación: un RMSE de una sola partición depende de quién cayó en prueba. La semilla no lo hace más verdadero: lo hace **repetible**, para que tú y tu
  compañero discutan el mismo número. Para estimar el error sin depender de un solo sorteo se promedia sobre varias particiones: "Validación cruzada" (enlace por título).
- Muestra de nuevo la hipótesis (`#citaHipo`).
- Citas: islr2 PDF 225 (impresa 214, `set.seed(2)` repite el lab con otra partición y los ECM cambian); islr2 PDF 211 (impresa 200, 5.1.1, Figura 5.2:
  diez particiones distintas, diez curvas de error distintas; la sección empieza en PDF 209 / p.198); intro3 diap. 25 `#/resampling-methods` (el enfoque de un conjunto de validación tiene alta variabilidad).
- Moraleja: "Fija la semilla para poder repetir; cambia de partición (o usa validación cruzada) para saber cuánto confiar".

### Paso 6. Clasificar y contar aciertos
- Idea: el mismo flujo sirve para una clase. Nueva columna `aprueba <- as.integer(nota >= 5)`; se ajusta `glm(aprueba ~ horas, family = binomial,
  data = datos[-prueba, ])`; `predict(..., type = "response")` da probabilidades; con umbral 0.5 se vuelven clases; la accuracy es la proporción de aciertos:
  `mean(clase == datos$aprueba[prueba])`.
- Escenario: modo `clasificar` (semilla fija en 123). Curva logística y línea en 0.5. Tabla viva: horas, probabilidad, clase predicha, real.
- Código del paso (verificado; se muestra en el texto, no en Vida real):
  ```
  datos$aprueba <- as.integer(datos$nota >= 5)
  modelo <- glm(aprueba ~ horas, family = binomial, data = datos[-prueba, ])
  prob <- predict(modelo, newdata = datos[prueba, ], type = "response")
  clase <- ifelse(prob > 0.5, 1, 0)
  mean(clase == datos$aprueba[prueba])
  ```
  Salidas: `prob` → `0.0552483 0.9952030 0.0178664` (nombres 3, 10, 2); `clase` → `0 1 0`; accuracy → `0.6666667`.
  `table(clase, real = datos$aprueba[prueba])` → fila 0: 1 y 1; fila 1: 0 y 1.
- Chequeo (cálculo con datos en vivo): "Clases predichas 0, 1, 0; reales 1, 1, 0. ¿Cuál es la accuracy?" Correcta 2/3 ≈ 0.67. Pista para 1/3:
  "cuenta los que coinciden, no los que fallan"; para 0.71: "esa es la accuracy de entrenamiento (5 de 7)".
- Trampa breve en el texto: el compañero de 3 horas aprobó con un 5 y el modelo le da 0.055: con 7 datos, una nota justo en el borde se equivoca.
  Y la accuracy de prueba (0.67) es menor que la de entrenamiento (0.71), como pasó con el RMSE.
- `details.profundizar` "¿Y si olvido `type = \"response\"`?": `predict` devuelve log-odds (−2.84, 5.33, −4.01). Aquí el umbral 0.5 sobre log-odds da las mismas
  clases por casualidad, pero equivale a un umbral de probabilidad de 0.62; con otros datos cambia la respuesta.
- Citas: islr2 PDF 186 y 187 (impresas 175-176: entrenar con `Year < 2005`, predecir 2005, `table(glm.pred, Direction.2005)` y `mean(glm.pred == Direction.2005)`:
  exactamente este flujo con datos reales); rl2 p.14 (Accuracy $(TP+TN)/Total$ y las otras métricas); intro3 diap. 46 `#/7/6` (accuracy 150/165 = 0.91 con la
  matriz de la Figure 19).
- Enlace por título a "Matriz de confusión, precisión, recall y F1" y "Regresión logística".

### Paso 7. El mismo flujo con tidymodels (y por qué la misma semilla reparte distinto)
- Idea (el paso más técnico): tidymodels pone nombre a cada estación: `rsample::initial_split` (partir), `training()` y `testing()` (las mesas),
  `parsnip::linear_reg() |> fit()` (ajustar), `predict()` (predecir) y `yardstick::rmse()` (medir). Es la versión moderna que nombra la UD0.
- Código del paso (verificado; se muestra en el texto):
  ```
  library(tidymodels)
  set.seed(123)
  particion <- initial_split(datos, prop = 0.7)
  ajuste_tm <- linear_reg() |> fit(nota ~ horas, data = training(particion))
  res <- testing(particion) |> bind_cols(predict(ajuste_tm, testing(particion)))
  rmse(res, truth = nota, estimate = .pred)
  ```
  Salidas: `res` → horas 4, 5, 7; notas 3, 6, 7; `.pred` 4.586397, 5.213235, 6.466912. `rmse` → `standard 1.07`. `tidy(ajuste_tm)` → intercepto 2.08, horas 0.627.
- Escenario: modo `tres-funciones`. Interruptor `sample` / `initial_split` / `train_test_split` con semilla 123: la baraja `3 10 2 8 6 9 1 7 5 4` es la misma
  para las dos de R; `sample(10, 3)` toma las 3 primeras para prueba, `initial_split` toma las 7 primeras para entrenamiento y deja las 3 últimas (7, 5, 4)
  para prueba. Python elige 5, 1, 8 con su propio generador.
- Chequeo (predicción antes de tocar el interruptor): "Con `set.seed(123)`, `initial_split(datos, prop = 0.7)`, ¿qué horas quedan en prueba?"
  - Correcta: "4, 5 y 7: las tres últimas de la misma baraja".
  - "3, 10 y 2, como con `sample`": misma semilla, pero `initial_split` usa la baraja al revés (primero llena entrenamiento).
  - "1, 2 y 3": `testing()` renumera las filas del resultado a 1, 2, 3; las horas son 4, 5, 7 (trampa real: si miras `rownames` te engañas; verificado).
  - "No se puede saber": con la semilla sí se puede, y siempre da lo mismo.
- Texto: lo que se repite es el flujo con su semilla y su función, no "la semilla 123" en abstracto. Si cambias `sample` por `initial_split`, o R por Python,
  cambia el reparto aunque el número sea el mismo.
- Citas: intro3 diap. 48 `#/8` (caret como estándar clásico, tidymodels como sucesor); intro3 diap. 50 `#/8/2` (rsample, parsnip, recipes, workflows, tune,
  yardstick, broom, dials); intro3 diap. 22 `#/5/7` (muestreo aleatorio simple con `set.seed(123)`, el mismo número de esta página).
- Aclaración que la página dice: ISLR2 no usa tidymodels (todo es R base); la guía de SM142002 promete tidymodels en la UD5, pero el PDF y el HTML de la UD5
  no lo mencionan. La UD0 lo nombra sin código: el bloque de arriba es la traducción.
- `details.profundizar` "¿Y `workflow()`?": en tidymodels se puede envolver modelo y preprocesado en un `workflow()`; aquí no hay preprocesado, así que
  `fit` directo basta. Se enlaza por título a "Pipeline: el preprocesado dentro del modelo" (planeado, sin enlace).

## Vida real (Python y R)

R 4.6.1 con yardstick 1.4.0; Python 3.13 con NumPy 2.1.3 y scikit-learn 1.6.1. Algoritmo: el flujo entero, con la predicción y el RMSE escritos a mano en
un bucle sobre la prueba, cerrando contra la función de la librería (`yardstick::rmse_vec`, `sklearn.metrics.root_mean_squared_error`) y comprobando que
la partición se repite. El texto sin el prefijo `id: ` es exactamente lo que se ejecutó. Las líneas con id `-` no tienen evento.

### Python

```
import: import numpy as np
-: from sklearn.linear_model import LinearRegression
-: from sklearn.metrics import root_mean_squared_error
-: from sklearn.model_selection import train_test_split
datos: horas = np.arange(1, 11).reshape(-1, 1)
nota: nota = np.array([2, 4, 5, 3, 6, 4, 7, 8, 7, 9])     # inventado
partir: X_ent, X_pru, y_ent, y_pru = train_test_split(horas, nota, test_size=3, random_state=123)
ajustar: ajuste = LinearRegression().fit(X_ent, y_ent)
suma0: suma = 0
fori: for i in range(len(y_pru)):
pred:     pred = ajuste.intercept_ + ajuste.coef_[0] * X_pru[i, 0]
err:     suma = suma + (y_pru[i] - pred) ** 2
rmse: rmse = np.sqrt(suma / len(y_pru))
imp: print(rmse)
lib: print(root_mean_squared_error(y_pru, ajuste.predict(X_pru)))
repite: print(np.array_equal(X_pru, train_test_split(horas, nota, test_size=3, random_state=123)[1]))
```

Salida real:
```
0.9466566717488801
0.9466566717488801
True
```

### R

```
datos: horas <- 1:10
nota: nota <- c(2, 4, 5, 3, 6, 4, 7, 8, 7, 9)     # inventado
tabla: datos <- data.frame(horas, nota)
semilla: set.seed(123)
partir: prueba <- sample(10, 3)
ajustar: ajuste <- lm(nota ~ horas, data = datos[-prueba, ])
suma0: suma <- 0
fori: for (i in prueba) {
pred:   pred <- sum(coef(ajuste) * c(1, datos$horas[i]))
err:   suma <- suma + (datos$nota[i] - pred)^2
-: }
rmse: rmse <- sqrt(suma / length(prueba))
imp: print(rmse)
lib: print(yardstick::rmse_vec(datos$nota[prueba], predict(ajuste, datos[prueba, ])))
repite: set.seed(123); print(identical(prueba, sample(10, 3)))
```

Salida real:
```
[1] 1.361678
[1] 1.361678
[1] TRUE
```

Comprobado: quitando el prefijo `id: ` (y `-: `), los dos bloques son idénticos carácter por carácter a los archivos que se ejecutaron. Copiar respetando
los espacios de alineación del comentario `# inventado`. `pred` se calcula con los coeficientes (`sum(coef(ajuste) * c(1, x))`) y no con `predict` dentro
del bucle a propósito: así no arrastra el nombre de la fila y `print(rmse)` sale limpio (con `predict`, R imprimiría el nombre `3` encima del número).

### Eventos

Una sola lista `EV` (la misma para los dos lenguajes) con **los datos de cada lenguaje dentro del evento** (`e.py` y `e.r`), porque la partición es distinta:
`import` (solo Python), `datos`, `nota`, `tabla` (solo R), `semilla` (solo R), `partir`, `ajustar`, `suma0`, 3 vueltas de `fori` + `pred` + `err`,
`rmse`, `imp`, `lib`, `repite`: 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 9 + 1 + 1 + 1 + 1 = **21 eventos**.
- `import` en R: "Esta línea solo existe en Python: R trae `lm`, `sample` y `set.seed` sin cargar nada (yardstick se llama con `::` al final)."
- `tabla` en Python: "En Python no hace falta armar una tabla: `horas` y `nota` van separados a `train_test_split`."
- `semilla` en Python: "En Python la semilla va dentro de la partición: `random_state=123`." (Mismo patrón que la línea solo de Python en `na-nan`.)
- El motor recibe `ctx.lang()`: `narrar`, `vars` y `visual` leen `e[ctx.lang()]`.

### Foto de estado por línea ejecutada

R (semilla 123, prueba 3 10 2, b0 = 1, b1 = 0.75):

| Evento | i | horas | real | pred | error | suma | Visual |
|---|---|---|---|---|---|---|---|
| datos, nota, tabla | | | | | | | los 10 puntos en el plano |
| semilla | | | | | | | la baraja aparece: 3 10 2 8 6 9 1 7 5 4 |
| partir | | | | | | | las 3 primeras fichas bajan a prueba (huecos `--k`) |
| ajustar | | | | | | | recta de los 7 de entrenamiento, b0 = 1, b1 = 0.75 |
| suma0 | | | | | | 0 | caja acumuladora |
| fori/pred/err | 3 | 3 | 5 | 3.25 | 1.75 | 3.0625 | segmento de error en horas 3 |
| fori/pred/err | 10 | 10 | 9 | 8.5 | 0.5 | 3.3125 | |
| fori/pred/err | 2 | 2 | 4 | 2.5 | 1.5 | 5.5625 | |
| rmse, imp | | | | | | 5.5625 | √(5.5625 / 3) = 1.361678; medidor |
| lib | | | | | | | `rmse_vec` da lo mismo: 1.361678 |
| repite | | | | | | | la baraja se rehace y sale igual: TRUE |

Python (`random_state=123`, prueba en el orden 5, 1, 8; entrenamiento 6, 9, 4, 2, 7, 10, 3; intercepto 2.09375, pendiente 0.59375):

| Evento | i | horas | real | pred | error | suma |
|---|---|---|---|---|---|---|
| fori/pred/err | 0 | 5 | 6 | 5.0625 | 0.9375 | 0.87890625 |
| fori/pred/err | 1 | 1 | 2 | 2.6875 | −0.6875 | 1.3515625 |
| fori/pred/err | 2 | 8 | 8 | 6.84375 | 1.15625 | 2.6884765625 |
| rmse, imp | | | | | | √(2.6884765625 / 3) = 0.9466566717488801 |

**Índices**: en R, `i` recorre los VALORES de `prueba` (3, 10, 2: son números de fila, no posiciones), así que se muestran tal cual, sin `ctx.ix`. En Python
`i` es la posición dentro de la prueba (0, 1, 2). La narración de `fori` lo dice: "En R, `for (i in prueba)` toma directamente los números de fila 3, 10 y 2.
En Python, `i` cuenta posiciones 0, 1, 2 dentro de `X_pru`."
Narración de `partir` en Python: "Misma semilla 123 que en R, pero otro generador: `train_test_split` elige las horas 5, 1 y 8. Por eso el RMSE de Python
(0.95) no es el de R (1.36): no es un error, es otra partición."

### Predicción antes de reproducir (`#vrPred`)

"En R, ¿cuántas veces se ejecuta la línea `suma <- suma + (datos$nota[i] - pred)^2`?" Respuesta **3** (una por cada fila de prueba). Distractores: 10
(las filas de `datos`), 7 (las de entrenamiento), 1. Pista: "el bucle recorre `prueba`, no `datos`".

### Trampas reales (retos `codigo1` a `codigo3`)

**codigo1: misma semilla, otra función, otro reparto (R).**
```
datos <- data.frame(horas = 1:10, nota = c(2, 4, 5, 3, 6, 4, 7, 8, 7, 9))
set.seed(123)
print(sample(10, 3))
set.seed(123)
print(rsample::testing(rsample::initial_split(datos, prop = 0.7))$horas)
```
Salida real:
```
[1]  3 10  2
[1] 4 5 7
```
Pregunta: "¿Por qué salen tríos distintos con la misma semilla?" Correcta: "las dos barajan igual (3 10 2 8 6 9 1 7 5 4), pero `sample(10, 3)` se queda con las 3
primeras para prueba e `initial_split` usa las 7 primeras para entrenamiento y deja las 3 últimas". Distractores: "`initial_split` ignora `set.seed`" (no:
con la semilla siempre da 4 5 7); "rsample usa otro generador" (usa el de R, la misma baraja); "`prop = 0.7` redondea mal" (deja exactamente 7 y 3).

**codigo2: ajustar con todos y medir en la prueba (fuga, R).**
```
datos <- data.frame(horas = 1:10, nota = c(2, 4, 5, 3, 6, 4, 7, 8, 7, 9))
set.seed(123)
prueba <- sample(10, 3)
bien <- lm(nota ~ horas, data = datos[-prueba, ])
mal <- lm(nota ~ horas, data = datos)          # vio la prueba al ajustar
rmse <- function(m) sqrt(mean((datos$nota[prueba] - predict(m, datos[prueba, ]))^2))
print(c(bien = rmse(bien), mal = rmse(mal)))
```
Salida real:
```
     bien       mal 
1.3616779 0.8686281 
```
(Impresión exacta verificada en R 4.6.1.) Pregunta: "¿Por qué `mal` da un error más bajo?" Correcta: "el modelo ya vio las notas de prueba al ajustarse:
el error es optimista y no mide cómo le irá con datos nuevos". Distractores: "con más datos el modelo es mejor, así que 0.87 es el número honesto";
"la diferencia es por la semilla" (la partición es la misma en las dos); "`lm` con `data = datos` ignora la prueba" (no: usa las 10 filas).

**codigo3: `LogisticRegression` de scikit-learn penaliza por defecto (Python).**
```
import numpy as np
from sklearn.linear_model import LogisticRegression
horas = np.array([1, 4, 5, 6, 7, 8, 9]).reshape(-1, 1)   # entrenamiento de R
aprueba = np.array([0, 0, 1, 0, 1, 1, 1])
por_defecto = LogisticRegression().fit(horas, aprueba)
sin_penalizar = LogisticRegression(penalty=None).fit(horas, aprueba)
print(por_defecto.intercept_, por_defecto.coef_)
print(sin_penalizar.intercept_, sin_penalizar.coef_)
```
Salida real (impresión exacta verificada con scikit-learn 1.6.1):
```
[-4.0600727] [[0.76640724]]
[-6.34212812] [[1.16769997]]
```
En R, `glm(aprueba ~ horas, family = binomial, data = datos[-prueba, ])` da −6.342247 y 1.167721. Pregunta: "¿Por qué el modelo de scikit-learn por defecto no
coincide con `glm`?" Correcta: "`LogisticRegression` agrega una penalización L2 (`C=1.0`) que encoge los coeficientes; sin penalizar coincide con `glm`".
Distractores: "porque Python parte los datos distinto" (aquí se le pasó el mismo entrenamiento); "porque `glm` usa otra fórmula de la sigmoide"; "por la
semilla" (`LogisticRegression` con `lbfgs` no usa azar). Las clases de prueba salen iguales (0, 1, 0) en los dos, pero las probabilidades no
(0.147, 0.974, 0.074 frente a 0.055, 0.995, 0.018).

`p.vr-nota`: en R, `yardstick::rmse_vec(real, predicho)`; en Python, `root_mean_squared_error(y_pru, ajuste.predict(X_pru))` (scikit-learn 1.4 o posterior;
antes era `mean_squared_error(..., squared=False)`).
`details.profundizar` "La forma vectorizada": `sqrt(mean((datos$nota[prueba] - predict(ajuste, datos[prueba, ]))^2))` en R y
`np.sqrt(np.mean((y_pru - ajuste.predict(X_pru)) ** 2))` en Python: el bucle entero en una línea (R verificado: 1.361678).

## Retos (11)

RETOS = ["ojo", "construir", "mano", "error", "prop1", "prop2", "prop3", "codigo1", "codigo2", "codigo3", "formula"]

1. **ojo** (ojo clínico, 8 rondas al azar, aprueba con 6 de 8): se muestra un fragmento; la pregunta fija es "Corres el script completo dos veces.
   ¿Imprime lo mismo?" Respuestas: "siempre lo mismo" / "puede cambiar". Banco (verificado donde hay número):
   - `set.seed(123); print(sample(10, 3))` → siempre (3 10 2).
   - `print(sample(10, 3))` → puede cambiar.
   - `print(sample(10, 3)); set.seed(123)` → puede cambiar (la semilla llega tarde; la variante V2 de "error" dio 1.26, 1.32 y 1.53 en tres corridas).
   - `set.seed(123); runif(1); print(sample(10, 3))` → siempre (otro trío que 3 10 2, pero el mismo cada vez).
   - `train_test_split(X, y, test_size=3, random_state=123)` → siempre.
   - `train_test_split(X, y, test_size=3)` → puede cambiar.
   - `np.random.seed(123); rng = np.random.default_rng(); rng.choice(10, 3, replace=False)` → puede cambiar (verificado: dio `[6 8 5]` y luego `[0 9 6]`;
     `default_rng()` sin argumento no lee la semilla global).
   - `rng = np.random.default_rng(123); rng.choice(10, size=3, replace=False)` → siempre (`[5 6 0]`).
   - `set.seed(123); initial_split(datos, prop = 0.7)` → siempre.
   - `lm(nota ~ horas, data = datos)` → siempre (no hay azar en mínimos cuadrados).
   La explicación de cada ronda nombra la regla: "¿hay azar? ¿la semilla va antes? ¿el generador la lee?".
2. **construir** (manipular el selector de semilla, el interruptor de función y "ajustar con todos"), tres objetivos con `sample(10, 3)`:
   (a) una partición donde el compañero de 10 horas quede en prueba (semillas 7, 42 o 123);
   (b) un RMSE de prueba menor que 1 sin activar la fuga (semillas 5, 10 o 42: 0.9459, 0.7706, 0.9609);
   (c) con `sample`, la semilla que deja en prueba los mismos tres que `initial_split` con 123 (semilla 3: 5 7 4).
   Ok al cumplir las tres. Si activa "ajustar con todos" en (b), el reto no la cuenta y lo dice: "eso es fuga".
3. **mano** (a mano, datos al azar, pistas escalonadas, reintentable): una recta $\hat y = b_0 + b_1 x$ con b0 ∈ {1, 2} y b1 ∈ {0.5, 1}, y tres compañeros de
   prueba con horas al azar (1 a 10) y nota = predicción + error, con errores al azar en {−2, −1, 1, 2}. Pide: (1) las tres predicciones; (2) el MSE;
   (3) el RMSE (2 decimales, tolerancia 0.01). Pistas: 1) "predicción = b0 + b1 · horas"; 2) "eleva cada error al cuadrado, suma y divide entre 3";
   3) primera parte resuelta con números. Segunda parte del reto (en la misma tarjeta): 5 clases predichas y 5 reales al azar (0 o 1), "¿cuál es la accuracy?".
4. **error** (cazar el error, 3 variantes del código R de Vida real, una línea mal; salidas reales):
   - V1: `ajuste <- lm(nota ~ horas, data = datos)`. Salida: `[1] 0.8686281`, `[1] 0.8686281`, `[1] TRUE`. Todo "coincide" y por eso engaña: es fuga.
   - V2: `set.seed(123)` movido debajo de `prueba <- sample(10, 3)`. Salida distinta en cada corrida (tres corridas: 1.260045, 1.317284, 1.530235) y la última
     línea `FALSE`. La semilla llegó tarde.
   - V3: `suma <- suma + (datos$nota[i] - pred)` (sin `^2`). Salida: `[1] 1.118034`, `[1] 1.361678`, `[1] TRUE`: el bucle y la librería ya no coinciden
     (los errores positivos y negativos se compensarían; aquí los tres son positivos y suman 3.75).
5. **prop1** (opción múltiple, `mezclar: true`, reintentable): "¿Qué hace exactamente `set.seed(123)`?" Correcta: "pone la sucesión pseudoaleatoria en un punto
   de partida fijo; cada llamada con azar consume números desde ahí". Pistas: "elige qué filas van a prueba" → "no elige nada: `sample` elige, la semilla solo
   hace repetible la elección"; "hace que todas las llamadas den lo mismo" → "la segunda `sample(10, 3)` da 2 6 3, no 3 10 2"; "mejora el modelo" → "el modelo no
   cambia de calidad: cambia qué datos le tocan".
6. **prop2**: "Tu RMSE de entrenamiento es 1.00 y el de prueba 1.36. ¿Qué dice eso?" Correcta: "lo normal: el modelo se ajustó a los datos que vio y le va un
   poco peor con los que no vio; el de prueba es el que estima el error con datos nuevos". Pistas: "el modelo está mal ajustado" → "una diferencia pequeña es lo
   esperado; mira también la escala de la nota"; "hay que reportar el de entrenamiento porque es más bajo" → "ese es el optimista"; "la semilla está mal" → "otra
   semilla cambia el número, no su sentido".
7. **prop3**: "Cambiaste la semilla y el RMSE de prueba bajó de 1.36 a 0.96. ¿Qué concluyes?" Correcta: "nada sobre el modelo: es otra partición. Para comparar
   modelos, usa la misma partición o validación cruzada". Pistas: "que la semilla 42 es mejor" → "no hay semillas mejores; 120 particiones dan de 0.65 a 2.18";
   "que el modelo aprendió más" → "el modelo es el mismo tipo, con otros 7 datos"; "que hay que buscar la semilla con menor error" → "eso es elegir con la prueba:
   rompe la regla de oro (UD0, diap. 19)".
8. **codigo1**, 9. **codigo2**, 10. **codigo3**: ver Vida real.
11. **formula**: la parte de memoria (`B.ordenar`), registrada con `C.reto("formula", ok)`.

## Memoria

**B.ordenar** (el flujo en R, en orden; cada pieza es una línea):
1. `set.seed(123)`
2. `prueba <- sample(10, 3)`
3. `ajuste <- lm(nota ~ horas, data = datos[-prueba, ])`
4. `pred <- predict(ajuste, datos[prueba, ])`
5. `sqrt(mean((datos$nota[prueba] - pred)^2))`

Resultado verificado: `1.361678`. Distractores: `ajuste <- lm(nota ~ horas, data = datos)` (fuga), `mean(datos$nota[prueba] - pred)` (sin cuadrado ni raíz:
da 1.25, verificado), `pred <- predict(ajuste, datos[-prueba, ])` (predice el entrenamiento).

**Tarjetas (8):**
1. ¿Qué fija `set.seed(123)`? → El punto de partida del azar. Mismas llamadas en el mismo orden dan lo mismo; la segunda llamada no repite a la primera.
2. ¿Dónde va la semilla? → Antes de la primera línea que usa azar (`sample`, `initial_split`, `runif`). Después no sirve.
3. ¿Qué significa `datos[-prueba, ]`? → Todas las filas menos las de `prueba`: el entrenamiento.
4. ¿Con qué datos se ajusta el modelo? → Solo con entrenamiento. Si ve la prueba, el error sale optimista (fuga): 0.87 en vez de 1.36.
5. RMSE → $\sqrt{\tfrac1n\sum(y_i - \hat y_i)^2}$ sobre la prueba, en las unidades de y. En R: `yardstick::rmse_vec`; en Python: `root_mean_squared_error`.
6. Accuracy → Proporción de aciertos: `mean(clase == real)`. Con probabilidades, primero `type = "response"` y un umbral.
7. ¿Por qué `initial_split` con 123 no da lo mismo que `sample(10, 3)` con 123? → Misma baraja, distinto uso: `initial_split` llena primero el entrenamiento.
8. ¿La semilla hace el error "verdadero"? → No: lo hace repetible. Para saber cuánto confiar, varias particiones (validación cruzada).

## Citas (16 candidatas; la página usa hasta 14)

| id de fuente | página PDF o ancla | página impresa | sección | qué hay | cuándo leerla |
|---|---|---|---|---|---|
| intro3 | 18, ancla `data-splitting` | | 4.3 Data splitting | el objetivo es la generalización: medir con datos que el modelo no vio | Paso 1 |
| prog4html | ancla `pedirle-ayuda-a-r` | | Pedirle ayuda a R | `set.seed(42)` antes de `runif`; con una sola semilla antes de tres llamadas solo el primer vector se repite | Paso 2 |
| prog4 | 11 | 11 | Matrices | `set.seed(123)` y `runif(20, 10, 50)`: las matrices del texto se reproducen idénticas (y p.8 sin semilla no) | Paso 2 |
| islr2 | 56 | 45 | 2.3.1 Basic Commands | `set.seed(1303)` para repetir resultados; se usa en todos los labs | Paso 2 |
| intro3 | 19, ancla `5/4` | | Train vs test | entrenamiento para todo el desarrollo, prueba una sola vez: la regla de oro | Paso 3 |
| intro3 | 20, ancla `5/5` | | Proporciones | 70/30 u 80/20 (ver errata) | Paso 3 |
| islr2 | 224 | 213 | 5.3.1 The Validation Set Approach | `set.seed(1)`, `sample(392, 196)`, `lm(..., subset = train)` y el MSE con `mean((mpg - predict(...))[-train]^2)` | Pasos 3, 4 y 5 |
| intro3 | 17, ancla `a-strategic-approach` | | 4.2 A strategic approach | "gastar" bien los datos; evitar la fuga | Paso 4 |
| rl1 | 22 | 22 | Métricas | fórmulas de MAE, MSE y RMSE con $\epsilon_i = Y_i - \hat Y_i$ | Paso 5 |
| intro3 | 42, ancla `regression-models` | | 6.1 Regression models | MSE, RMSE (mismas unidades que y), MAE, R² | Paso 5 |
| islr2 | 225 | 214 | 5.3.1 | `set.seed(2)`: otra partición, otros ECM | Destacado del paso 5 |
| islr2 | 211 | 200 | 5.1.1 The Validation Set Approach | Figura 5.2: diez particiones, diez curvas de error | Destacado del paso 5 |
| islr2 | 186 | 175 | 4.7.2 Logistic Regression | entrenar con `Year < 2005`, predecir 2005, `table` y `mean(glm.pred == Direction.2005)` (sigue en PDF 187 / p.176) | Paso 6 |
| rl2 | 14 | 14 | Métricas | Accuracy $(TP+TN)/Total$, precisión, recall, especificidad, F1 | Paso 6 |
| intro3 | 48, ancla `8` | | 7 Putting it all together in R | caret como clásico, tidymodels como sucesor | Paso 7 |
| intro3 | 50, ancla `8/2` | | Paquetes de tidymodels | rsample, parsnip, recipes, workflows, tune, yardstick, broom, dials | Paso 7 |

Son 16 filas: quien construye elige **hasta 14** chips. Prioridad para recortar si hace falta: dejar islr2 56 y la diap. 20 solo en el texto (sin chip).
Opcionales que también están verificados en los mapas: intro3 diap. 22 ancla `5/7` (`set.seed(123)` en el muestreo aleatorio simple; buen sitio: paso 7 o
paso 2), intro3 diap. 25 ancla `resampling-methods` (alta variabilidad del conjunto de validación; destacado), intro3 diap. 46 ancla `7/6` (accuracy 150/165;
paso 6), islr2 PDF 283 / p.272 (6.5.1 Choosing Among Models: validación con `sample(c(TRUE, FALSE), ...)` y `predict` escrito a mano), islr2 PDF 24 / p.13
(aviso de que con versiones nuevas los resultados de los labs pueden no coincidir; profundizar del paso 2).

Formato de las citas: `intro3` es `tipo: "diapositivas"`: `data-pag` = número de diapositiva y `data-ancla` = ancla sin `#/` (la diap. 48 se enlaza con `8`
porque su id es larguísimo; ver `brain/fuentes/sm142003-ud0-intro.md`). `prog4html` es `tipo: "documento"`: `data-ancla` = id de sección. `islr2`: `data-pag`
= PDF, `data-pimp` = impresa (PDF = impresa + 11). `prog4`, `rl1` y `rl2`: PDF = impresa.

Verificado por mí: islr2 PDF 186-187 y 224-225 con `pdftotext` (`train <- (Year < 2005)`, `table(glm.pred, Direction.2005)`, `mean(glm.pred == Direction.2005)`;
`set.seed(1)`, `train <- sample(392, 196)`, `lm(mpg ~ horsepower, data = Auto, subset = train)`, y en la 225 `set.seed(2)`). El resto, de los mapas
`brain/fuentes/sm142003-ud0-intro.md`, `islr2-r.md`, `sm142004-ud1.md`, `sm142004-ud2.md` y `sm142002-programacion.md`.

## Erratas e inconsistencias del material (decirlas con naturalidad)

- **intro3 diap. 20**: más de 80 % en entrenamiento "arriesga sobreajuste". La proporción no sobreajusta; con una prueba chica lo que se pierde es precisión al medir (paso 3).
- **intro3 diap. 22**: el muestreo aleatorio simple sería "ideal cuando los datos siguen una distribución normal"; la normalidad no es el criterio, lo es el tamaño
  y el balance de y (paso 7 o 2, si se cita esa diapositiva).
- **prog4 p.8**: `rnorm(10)` y `runif(10)` impresos sin semilla: no se pueden reproducir (paso 2).
- **Guía de SM142002**: promete tidymodels en la UD5; el PDF y el HTML de la UD5 no lo mencionan (paso 7).
- **ISLR2**: no es errata, pero no usa tidymodels ni caret (paso 7); y avisa en la p.13 (PDF 24) que con versiones nuevas de R los números de los labs pueden
  no coincidir (el cambio de `sample` en R 3.6.0 es un ejemplo: `sample.kind = "Rounding"` da 3 8 4 con la semilla 123).
- **sm142004 UD1 (rl1) p.13**: define el error como predicción menos real; p.22 usa $\epsilon_i = Y_i - \hat Y_i$. Para el RMSE da igual (se eleva al cuadrado),
  pero la página usa real menos predicho, como p.22.

## Riesgos y notas para quien construye

- **La partición de Python no es la de R** aunque la semilla sea 123: es el corazón del paso 7 y de la Vida real. Nunca escribir "igual que en R" sobre el reparto.
  Los eventos guardan los datos de cada lenguaje por separado (`e.r`, `e.py`).
- `testing(particion)` devuelve las filas renumeradas (1, 2, 3): leer siempre la columna `horas`, nunca `rownames`. (Así me engañé al verificar: con
  `rownames` parecía que la prueba era 1, 2, 3.)
- La segunda `sample(10, 3)` tras `set.seed(123)` da `2 6 3`, que NO son posiciones 4 a 6 de la baraja `sample(10)`. No dibujarla así.
- En R, `for (i in prueba)` recorre números de fila (3, 10, 2): no usar `ctx.ix` para esos valores. En Python `i` es 0, 1, 2.
- `predict` en R devuelve un vector con nombres de fila; por eso la Vida real calcula `pred` con `sum(coef(ajuste) * c(1, x))`.
- El paso 6 fija la semilla en 123 (la curva logística está precalculada). No ofrecer otras semillas en ese modo: con algunas el entrenamiento queda separable y
  `glm` avisa ("fitted probabilities numerically 0 or 1").
- `root_mean_squared_error` existe desde scikit-learn 1.4 (aquí 1.6.1). En versiones viejas, `mean_squared_error(..., squared=False)`; decirlo en la nota.
- Los cinco bloques de código (Vida real en los dos lenguajes, `codigo1`, `codigo2`, `codigo3`) se corrieron tal cual están escritos; las salidas son las copiadas.
- Los mensajes de R salen en inglés en esta máquina: `set.seed(123, sample.kind = "Rounding")` avisa `non-uniform 'Rounding' sampler used`. Copiar tal cual si se muestra.
- No meter teoría de validación cruzada ni de métricas: enlazar "Validación cruzada", "Métricas de error: MAE, MSE, RMSE y R2" y "Matriz de confusión, precisión,
  recall y F1" por título exacto.
