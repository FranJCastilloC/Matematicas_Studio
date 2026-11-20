# Especificación: Una red con Keras: modelo secuencial y funcional (keras-secuencial-funcional)

- Ruta: `keras`, orden 1. Tanda 10. Sin `tambien`.
- Área: Programación con datos. Fuente del catálogo: "ISLR2 lab 10.9 (keras desde R); la materia (UD3) no trae material en la carpeta".
- Prerrequisitos: "Red multicapa y propagación hacia adelante".
- Siguientes: "Entrenar con Keras: épocas, lotes y curvas" (planeado, tanda 10: sale sin enlace hasta que se construya).
- Aparece: SM142002 UD3.
- Resumen del catálogo: "Apilar capas una tras otra o conectarlas como un grafo, y qué forma tiene cada tensor."

**Foco y límites.** Esta página es la MECÁNICA de declarar una red en Keras: qué es una capa `Dense` vista desde fuera (n números entran,
m salen), cómo se apilan (`Sequential`) o se conectan como grafo (API funcional), qué forma tiene cada tensor (el `None` del lote),
cuántos parámetros tiene cada capa (pesos + sesgos) y qué hace `compile` (elegir pérdida, optimizador y métricas, sin tocar los pesos).
NO explica la propagación hacia adelante con fórmulas por neurona (eso es "Red multicapa y propagación hacia adelante", que usa la MISMA red
4-10-3 con 83 parámetros: se enlaza por título en el paso 1), ni qué hacen `fit`, las épocas y los lotes en el entrenamiento (eso es
"Entrenar con Keras: épocas, lotes y curvas", siguiente de la ruta: se nombra en el paso 5), ni retropropagación, ni dropout por dentro
("Dropout y batch normalization"). Las activaciones solo se nombran.

**Material oficial: SM142002 UD3 (scikit-learn, TensorFlow, Git) NO está publicada.** El mapa `brain/fuentes/sm142002-programacion.md`
dice que la carpeta no tiene UD2 ni UD3 y que la guía las da como "aún no publicadas"; la UD1 (prog1, p.11) solo nombra TensorFlow y PyTorch
en una lista. La página lo dice en el hero con naturalidad ("la unidad de la materia donde esto se enseña todavía no tiene material; aquí se
usa el de la UD4 y UD5 de SM142004, donde ya usaste Keras, y el laboratorio 10.9 de ISLR2, que lo hace desde R").

**Librerías en esta máquina (comprobado con `python3 -c` y `Rscript`).** NO están instalados TensorFlow, `keras` (Python), ni los paquetes de R
`keras`, `keras3` o `tensorflow`. scikit-learn 1.6.1 sí está (no se usa). Por eso:
- La Vida real se escribe con NumPy y R base: reproduce a mano lo que hace `model.summary()` (forma y parámetros por capa) y lo que hace una
  capa `Dense` con un lote (`A @ W + b`). Eso sí se corrió y sus salidas son reales.
- El código Keras (Python `keras` 3 y R `keras3`) va en `p.vr-nota` y en un `details.profundizar` con la etiqueta visible
  **"no se pudo ejecutar en esta máquina: Keras no está instalado"**. Las cifras que se le atribuyen (50, 33, 83; `(None, 10)`) salen de la
  fórmula verificada con NumPy y de los `summary` reales impresos en el material (ISLR2 p.447, UD4 diapositiva 47), no de una ejecución.
  Nunca se escribe "salida real" junto al código Keras.

**Datos de toda la página** (inventados, se dice en la página). La misma flor de "Red multicapa y propagación hacia adelante":
4 medidas de entrada (largo y ancho de sépalo y pétalo), una capa oculta de 10 neuronas ReLU, 3 especies de salida con softmax.
Un lote de 5 flores para las formas. Para la API funcional se agrega una segunda entrada inventada: 2 datos de color (tono y brillo).

Cuentas limpias (todas verificadas con Python 3.13 / NumPy 2.1.3):
- 4-10-3: capa 1 = 4·10 + 10 = **50**; capa 2 = 10·3 + 3 = **33**; total **83**.
- Variantes del escenario: 4-10-1 = 50 + 11 = **61**; 4-8-8-3 = 40 + 72 + 27 = **139**; 3-4-4-2 (la red dibujada en la UD4) = 16 + 20 + 10 = **46**.
- Funcional de dos entradas: rama medidas `Dense(8)` = 4·8 + 8 = **40**; rama color `Dense(4)` = 2·4 + 4 = **12**; `Concatenate` = **0**, forma (None, 12);
  salida `Dense(3)` = 12·3 + 3 = **39**; total **91**. Formas con un lote de 5: (5, 8), (5, 4), (5, 12), (5, 3) (corrido con NumPy).
- Lote de 5 por la 4-10-3: (5, 4) → (5, 10) → (5, 3). Con pesos todos 0.1 y sesgos 0: la oculta vale 0.4 en cada casilla; la salida 0.39999999999999997
  (se muestra redondeado a 0.4).
- Material (recalculado, todo cuadra): ISLR2 MNIST 784-256-128-10: 200 960 + 32 896 + 1 290 = **235 146**; regresión logística 784-10: **7 850**.
  UD5 diapositiva 33: 3072·100 + 100 = 307 300 y 100·60 + 60 = 6 060. UD5 diapositiva 38: 401 920 + 262 656 + 5 130 = **669 706**.
  UD4 diapositiva 47, generador 32-128-256-512-11: 4 224, 33 024, 131 584, 5 643.

## Imagen central

**Una pila de capas con su `summary` vivo al lado: cada capa es una caja que convierte una fila de n casillas en una fila de m casillas,
y los cables que la cruzan SON sus pesos.**

- Columna izquierda: la pila vertical. Arriba la caja `Input` con su fila de 4 casillas (color `--j`). Cada `Dense(m)` se dibuja como una franja con
  dos filas de puntos (las n entradas arriba, las m neuronas abajo) y todos los cables entre ellas (finos, `--j`); cada neurona de abajo lleva un
  puntito de sesgo (`--k`). Si n·m pasa de 120 cables, la franja se comprime a un rectángulo rayado con el rótulo "n × m cables" (para MNIST).
- Entre caja y caja viaja el **tensor**: un rectángulo de (lote × n) casillas. Con el interruptor "lote" en `None` se dibuja como una columna de
  filas difuminadas con la etiqueta `None`; con el deslizador de lote (1 a 8, por defecto 5) se ven las 5 filas (una por flor).
- Columna derecha: la tabla `summary` alineada con la pila, tres columnas `Layer (type)`, `Output Shape`, `Param #`, y abajo `Total params`.
  Las celdas de `Param #` se tapan con `?` mientras el chequeo del paso las pide.
- Controles (todo con botones, nada depende de arrastrar): `+` / `−` neuronas en cada `Dense`; "agregar capa Dense", "agregar Dropout",
  "quitar capa"; selector de activación por capa (relu, softmax, ninguna: no cambia la cuenta); interruptor **Secuencial | Funcional**.
- Modo funcional: la pila se abre en un grafo: dos cajas `Input` (medidas 4, color 2), una rama `Dense(8)` y otra `Dense(4)`, una caja
  `Concatenate` donde los dos rectángulos se pegan de lado (8 + 4 = 12 columnas) y la salida `Dense(3)`. La tabla `summary` agrega la columna
  `Connected to`.
- Una pestaña pequeña "Keras / PyTorch" (solo paso 7) gira la matriz de pesos de la capa 1: `kernel` (4, 10) frente a `weight` (10, 4).

Modos por paso: 1) una sola caja 4 → 3 sin rótulos ni tabla; 2) pila 4-10-3 con la tabla sin `Param #`; 3) tensores con lote; 4) tabla completa
con fórmula viva y capas sin parámetros (Dropout, Activation); 5) panel `compile` (tres selectores) bajo la pila; 6) grafo funcional;
7) comparación Keras R / Python / PyTorch y la matriz girada.

## Hipótesis inicial

"Vas a armar una red que recibe las 4 medidas de una flor y elige entre 3 especies, con una capa de 10 neuronas en medio. ¿Cuántos números
tiene que aprender esa red? Y si en vez de 150 flores tuvieras 15 000, ¿ese número cambia?"

Se vuelve a mostrar (`#citaHipo`) en el destacado del paso 4, cuando aparece que el número (83) no depende de cuántas flores hay.

## Pasos (7)

### Paso 1. Una capa es una caja con cables
- Idea: una capa densa recibe una fila de números y devuelve otra. Cada número de salida mira a TODOS los de entrada, con un cable propio
  (un peso) y una perilla propia (un sesgo). Lo que la red aprende son esos cables y perillas.
- Escenario: modo 1, sin símbolos. Una caja con 4 puntos arriba (las medidas) y 3 abajo (las especies). Los cables están ocultos hasta
  responder; al resolver se encienden de a uno (12) y luego los 3 sesgos.
- Chequeo (predicción antes de ver nada): "La caja convierte 4 medidas en 3 puntajes. Cada puntaje usa las 4 medidas con un ajuste propio para
  cada una, más un ajuste propio suyo. ¿Cuántos números ajustables tiene la caja?"
  - Correcta: 15 (4 × 3 = 12 cables, más 3 sesgos).
  - 12: olvidas el ajuste propio de cada salida (el sesgo).
  - 7: sumaste entradas y salidas (4 + 3); cada salida tiene su cable con CADA entrada.
  - 4: los ajustes no son de las entradas, son de los cables.
- Texto: enlace por título a "Red multicapa y propagación hacia adelante" ("allí calculaste lo que pasa dentro de la caja; aquí solo la declaras").
- Cita dl4 p.13: la neurona $a_i = g(w_i x_i + b_i)$ y la red 3-4-4-2. Errata para decir con naturalidad: a la fórmula le falta el sumatorio
  (la neurona suma TODAS sus entradas pesadas, $\sum_j w_{ij}x_j + b_i$), y el texto dice que el sesgo "garantiza que al menos un nodo por capa
  está activo": no, el sesgo desplaza el umbral.

### Paso 2. Apilar cajas: `Sequential`
- Idea: un modelo secuencial es una lista de capas; la salida de una es la entrada de la siguiente. Solo hay que decir cuántas neuronas tiene
  cada una; el número de entradas lo hereda de la capa de arriba.
- Notación entra aquí, como código. El escenario (modo 2) muestra la pila 4-10-3 y, al lado, el código que la declara (Keras 3, Python):
  ```
  modelo = keras.Sequential([
      keras.Input(shape=(4,)),
      layers.Dense(10, activation="relu"),
      layers.Dense(3, activation="softmax"),
  ])
  ```
  y la versión R del libro (ISLR2, paquete `keras`, sintaxis de 2023): `keras_model_sequential() %>% layer_dense(units = 10, activation = "relu", input_shape = 4) %>% layer_dense(units = 3, activation = "softmax")`.
  Cada línea del código se ilumina con su caja al pasar el cursor o tocarla.
- Chequeo (cálculo con datos en vivo; `+` / `−` en la capa oculta habilitados ANTES del chequeo, la columna `Param #` tapada):
  "¿Cuántos parámetros tiene la segunda capa `Dense`, la de salida?" Con 10 ocultas: 33 (10 × 3 + 3). Si Francisco cambió a h ocultas: 3h + 3.
  Pista para el error típico 30: "¿y el sesgo de cada especie?"; para 43 (4 + 10·3 + ... ): "esta capa no ve las 4 medidas, ve las h salidas de la capa de arriba".
- Citas: islr2 PDF 455 (p.444): `keras_model_sequential()`, `layer_dense(units = 50, activation = "relu", input_shape = ncol(x))`, `layer_dropout(rate = 0.4)`,
  `layer_dense(units = 1)` sobre Hitters, y el pipe `%>%` explicado ("pasa el término anterior como primer argumento"); dl4diapo p.22 (la red 3-4-4-2
  dibujada: Francisco cuenta 46 parámetros como ejercicio del texto).
- `details.profundizar` "¿Por qué `keras.Input` y no `input_shape`?": el material (UD5 diapositivas 33 y 38, ISLR2) pone `input_shape=` dentro de la
  primera capa; es la forma de Keras 2. Keras 3 recomienda empezar con `keras.Input(shape=...)` (en R `keras3`, `keras_model_sequential(input_shape = 4)`).
  Las dos dicen lo mismo: el tamaño de UNA muestra. No ejecutado aquí.

### Paso 3. La forma de cada tensor y el `None` (trampa)
- Idea: entre capa y capa viaja una tabla: una fila por muestra, una columna por número. Su forma es (lote, n). Keras no sabe de antemano cuántas
  filas vas a pasar, por eso escribe `None` en el lugar del lote: `(None, 10)` significa "cualquier número de flores, 10 números cada una".
- Escenario: modo 3. Deslizador de lote (1 a 8). Con 5 flores: (5, 4) → (5, 10) → (5, 3). La fórmula viva de una capa:
  $\underbrace{A}_{(5,\,4)}\;\underbrace{W}_{(4,\,10)} + \underbrace{b}_{(10)} = \underbrace{Z}_{(5,\,10)}$, con los números cambiando con el lote y las neuronas.
- **Trampa marcada**: `input_shape` es la forma de UNA muestra, sin el lote. Si tus datos son una tabla de 150 × 4 y escribes `input_shape=(150, 4)`,
  Keras entiende que cada muestra es una tabla de 150 × 4: la salida de `Dense(10)` queda `(None, 150, 10)` (la capa se aplica fila por fila a la
  última dimensión) y los parámetros siguen siendo 50, así que el `summary` no te avisa. Verificado el comportamiento de la forma con NumPy
  (ver reto `codigo1`); en Keras no se pudo correr.
- Chequeo (predicción antes de mover el lote): "Pasas un lote de 32 flores por la red 4-10-3. ¿Qué forma tiene la salida de la capa oculta?"
  - Correcta: (32, 10).
  - (10, 32): la fila es la flor; las columnas son las neuronas.
  - (32, 4): esa es la entrada; la capa oculta entrega 10 números por flor.
  - (None, 10): eso es lo que escribe el `summary` ANTES de saber el lote; con 32 flores reales, el `None` vale 32.
- Citas: dl4 p.22 ("los bordes son tensores (arrays multidimensionales)" en TensorFlow); dl4diapo p.47 (dos `model.summary()` de una GAN donde la forma
  sale `(32, 128)` y no `(None, 128)`: el lote quedó fijado en 32 al declarar la entrada; ejemplo de un `None` que se volvió número);
  cnn5diapo p.33 (`Flatten(input_shape=(32, 32, 3))`: una muestra puede ser una imagen; `Flatten` la vuelve una fila de 3072 y no tiene parámetros).

### Paso 4. Parámetros = pesos + sesgos (destacado)
- Idea: cada `Dense` de n entradas y m neuronas tiene $n \cdot m$ pesos y $m$ sesgos: $\text{params} = n\,m + m = (n + 1)\,m$. El total es la suma por capa.
  Las capas que no tienen cables (Dropout, Flatten, Activation, Concatenate) tienen 0.
- Escenario: modo 4, tabla `summary` completa con la fórmula viva en cada fila: `dense_1 (None, 10) 4·10 + 10 = 50`. Botones "agregar Dropout" y
  "activación aparte" (`Dense(10)` + `Activation("relu")` como en UD5 diapositiva 38) muestran filas con 0.
- Chequeo (cálculo con datos en vivo): "Arma una red con dos capas ocultas de 8 neuronas (4-8-8-3). ¿Total de parámetros?" 139 (40 + 72 + 27).
  Si Francisco cambia las neuronas, la respuesta se recalcula. Pista para 136 (olvida los sesgos de la salida) o 120 (olvida todos): "cada neurona trae su sesgo".
- Citas: islr2 PDF 458 (p.447): el `summary(modelnn)` de MNIST, 200 960 + 0 + 32 896 + 0 + 1 290 = 235 146, con la frase del libro: la primera capa tiene
  (784 + 1) × 256 = 200 960 "parameters" porque cada capa incluye un sesgo; las capas `dropout` con 0. cnn5diapo p.38 (perceptrón multicapa
  `Dense(512, input_shape=(784,))`, `Activation`, `Dropout(0.2)`...: la diapositiva no da el total; aquí se calcula, 669 706).

**Destacado con predicción (la confusión natural): "¿Los parámetros crecen con los datos?"**
- Predicción: "Entrenas la red 4-10-3 con 150 flores y después con 15 000. ¿Cuántos parámetros tiene en cada caso?"
  Opciones: 83 y 83 (correcta) / 83 y 8 300 / 450 y 45 000 / depende del lote.
- Explicación: los parámetros son los cables, y los cables dependen solo de cuántas columnas entran y cuántas neuronas hay. Las filas (flores) pasan
  por los mismos cables una tras otra: por eso el lote es `None`. Lo que SÍ cambia los parámetros es el ancho de la entrada: con 784 píxeles
  en vez de 4 medidas, la primera capa de 10 neuronas pasa de 50 a 7 850 (la regresión logística de ISLR2 p.448, PDF 459).
- Muestra de nuevo la hipótesis.
- `details.profundizar` "¿Dónde está casi todo el peso de una red?": en la capa densa que recibe la entrada más ancha. En MNIST, 200 960 de 235 146
  (85 %) están en la primera capa. En la UD5, la CNN03 tiene 9 470 464 de 9 494 561 en una sola `Dense(512)` (dato del mapa de la UD5, cuaderno CNN03,
  nombrado sin chip).

### Paso 5. `compile`: elegir cómo se va a aprender (trampa)
- Idea: declarar la red no la entrena. `compile` le dice a Keras tres cosas: la pérdida (qué error medir), el optimizador (cómo mover los pesos)
  y las métricas (qué reportar). No toca los pesos ni cambia cuántos hay. El entrenamiento empieza con `fit`, que es la página siguiente
  ("Entrenar con Keras: épocas, lotes y curvas", nombrada por título).
- Escenario: modo 5. Bajo la pila, un panel con tres selectores: pérdida (`mse`, `categorical_crossentropy`, `sparse_categorical_crossentropy`,
  `binary_crossentropy`), optimizador (`sgd`, `rmsprop`, `adam`), métrica (`accuracy`, `mae`). Un semáforo compara la pérdida con la última capa:
  3 neuronas softmax + etiquetas one-hot → `categorical_crossentropy`; etiquetas enteras 0, 1, 2 → `sparse_categorical_crossentropy`; 1 neurona sin
  activación (regresión) → `mse`; 1 neurona sigmoide → `binary_crossentropy`. El contador `Total params` se queda en 83 al compilar (se anima para que se vea que no cambia).
- **Trampa marcada**: la pareja pérdida-etiquetas. Las etiquetas enteras (0, 1, 2) con `categorical_crossentropy` no encajan: esa pérdida espera
  filas one-hot de 3 columnas. O conviertes con `to_categorical` (lo hacen ISLR2 p.446 y UD5 diapositiva 37) o usas la versión `sparse_`. Keras se queja
  con un error de formas (no ejecutado aquí: no se copia el mensaje). La versión `sparse_` no aparece en el material; se explica igual.
- Chequeo (elección con explicación): "Tu red termina en `Dense(1)` sin activación y predice un precio. ¿Qué pérdida eliges en `compile`?"
  - Correcta: `mse` (o `mae`): es regresión; así lo hace ISLR2 con los salarios de Hitters.
  - `categorical_crossentropy`: es para elegir entre clases con softmax.
  - `binary_crossentropy`: para una neurona sigmoide que da una probabilidad.
  - `accuracy`: es una métrica, no una pérdida; no tiene derivada útil.
- Citas: islr2 PDF 456 (p.445): `compile(loss = "mse", optimizer = optimizer_rmsprop(), metrics = list("mean_absolute_error"))` y la frase del libro:
  `compile` no cambia el objeto de R, comunica la especificación a la instancia de Python; cnn5diapo p.39 (`optimizer='rmsprop'`,
  `loss='categorical_crossentropy'`, `batch_size=128`, `nb_epoch=4`).
- Errata para decir con naturalidad (UD5 diapositivas 38-39): falta importar `Dropout`, `nb_epoch` es el nombre de Keras 1 (hoy `epochs`),
  `keras.utils.np_utils` ya no existe y las comillas tipográficas (`'rmsprop’`) dan error de sintaxis al copiar.

### Paso 6. La API funcional: capas como funciones sobre tensores
- Idea: en la API funcional cada capa se LLAMA sobre un tensor y devuelve otro: `x = layers.Dense(10)(entrada)`. Así puedes tener dos entradas,
  ramas que se juntan o una capa que se usa dos veces: un grafo, no una fila. Para una pila simple, las dos APIs dan el mismo modelo (83 parámetros).
- Escenario: modo 6. Interruptor Secuencial | Funcional. Primero la 4-10-3 escrita funcional (mismo dibujo, misma tabla). Después el botón "agregar
  una segunda entrada" abre el grafo: `medidas` (4) → `Dense(8)`; `color` (2) → `Dense(4)`; `Concatenate` → (None, 12); `Dense(3)`.
  ```
  medidas = keras.Input(shape=(4,), name="medidas")
  color = keras.Input(shape=(2,), name="color")
  a = layers.Dense(8, activation="relu")(medidas)
  c = layers.Dense(4, activation="relu")(color)
  juntas = layers.Concatenate()([a, c])
  salida = layers.Dense(3, activation="softmax")(juntas)
  modelo = keras.Model(inputs=[medidas, color], outputs=salida)
  ```
  (no ejecutado aquí; las formas y los 91 parámetros se comprobaron con NumPy: (5, 8), (5, 4), (5, 12), (5, 3)).
- Chequeo (cálculo con datos en vivo; `+` / `−` en las dos ramas): "¿Qué forma sale de `Concatenate` y cuántos parámetros tiene la capa de salida?"
  Con 8 y 4: (None, 12) y 39. Error típico: (None, 8) y (None, 4) por separado ("Concatenate pega las columnas: 8 + 4"); 27 ("la salida ve las 12 columnas, no 8").
- Texto: la versión R con `keras3` (no ejecutada): `entrada <- keras_input(shape = 4)`, `salida <- entrada |> layer_dense(10, activation = "relu") |> layer_dense(3, activation = "softmax")`,
  `modelo <- keras_model(entrada, salida)`. El material no trae ningún modelo funcional (UD4, UD5 e ISLR2 usan solo secuenciales; el DL02 de la UD4 escribe una
  clase `tf.keras.Model` propia, que es la tercera forma: subclases). Se explica igual y se dice que no viene en el material.
- `details.profundizar` "¿Cuándo NO alcanza `Sequential`?": varias entradas o salidas, ramas que se juntan (como aquí), conexiones que saltan capas
  (residuales) o una capa compartida. Regla práctica: si dibujas tu red y hay un punto con dos flechas entrando o saliendo, es funcional.

### Paso 7. Lo que Keras guarda: `kernel` (n, m), y cómo lo escriben R y PyTorch (trampa)
- Idea (el paso más técnico): una `Dense` guarda su matriz de pesos como `kernel` de forma (entradas, salidas) = (4, 10) y su sesgo como un vector de 10;
  calcula `activación(A @ kernel + sesgo)`. PyTorch guarda la misma capa al revés: `nn.Linear(4, 10).weight` tiene forma (10, 4) y calcula `A @ W.T + b`.
  Mismos 50 números, otra orientación. En R (`keras3`) la capa es la misma de Python por debajo: R solo la llama.
- Escenario: modo 7, pestaña "Keras / PyTorch": la matriz de la capa 1 como rejilla 4 × 10 que gira a 10 × 4. Al lado, el mismo modelo en tres idiomas
  (ninguno ejecutado aquí): Keras Python, `keras3` en R y `nn.Sequential(nn.Linear(4, 10), nn.ReLU(), nn.Linear(10, 3))` en PyTorch.
- **Trampa marcada (R)**: los modelos de Keras en R se modifican en el lugar. ISLR2 p.446-447 escribe `modelnn <- keras_model_sequential()` y luego
  `modelnn %>% layer_dense(...)` SIN volver a asignar: funciona porque el objeto apunta a un modelo de Python. Pero si corres dos veces esa línea, la
  red queda con las capas repetidas. Es exactamente el fallo del cuaderno DL03 de la UD4 en Python (ver reto `codigo2`): una celda con `model.add`
  corrida dos veces deja ocho `Dense` y 622 parámetros. Regla: construye el modelo en una sola celda, desde cero.
- Chequeo (elección con explicación): "Copias los pesos de una `nn.Linear(4, 10)` de PyTorch a una `Dense(10)` de Keras con entrada 4. ¿Qué haces?"
  - Correcta: "trasponer: PyTorch guarda (10, 4) y Keras espera (4, 10)".
  - "Nada, son 40 pesos en los dos": el número coincide, la orientación no; sin trasponer, `A @ W` falla (reto `codigo3`).
  - "Agregar los 10 sesgos a la matriz": los sesgos van aparte en los dos.
  - "Cambiar `input_shape` a (10,)": cambiarías la red, no la copia.
- Citas: raschka13 PDF 9 (p.417): `nn.Sequential(nn.Linear(4, 16), nn.ReLU(), nn.Linear(16, 32), nn.ReLU())`, el mismo apilado en PyTorch;
  raschka12 PDF 28 (p.396): el MLP de Iris `nn.Linear(4, 16)` + sigmoide + `nn.Linear(16, 3)` (4 medidas, 3 especies, como aquí). Errata para decir
  con naturalidad (raschka12 pp. 396-397 y 402): el texto dice que ese modelo tiene "dos capas ocultas" (tiene una oculta y la de salida) y que usa
  softmax en la última capa (`activation='softmax'`, resto de la edición en Keras), pero el `forward` no la tiene: está bien porque
  `nn.CrossEntropyLoss` la aplica por dentro.
- Cita prog1 p.11: la UD1 de la materia solo nombra TensorFlow y PyTorch en la lista de herramientas; la UD3, donde se enseñan, no está publicada.

## Vida real (Python y R)

Python 3.13 con NumPy 2.1.3; R 4.6.1 base. **Keras no está instalado (ni en Python ni en R): este código NO llama a Keras**; reproduce a mano lo que
`model.summary()` imprime (forma y parámetros por capa) y lo que hace cada `Dense` con un lote, y cierra comparando la cuenta de la fórmula con el
tamaño real de las matrices construidas (`W.size + b.size` / `length(W) + length(b)`), que es lo que hace `count_params()`. La página lo dice
en una línea encima del código. El texto sin el prefijo `id: ` es exactamente lo que se ejecutó (archivos en el scratchpad de esta sesión,
`keras/vr.py` y `keras/vr.R`). Las líneas con id `-` no tienen evento.

### Python

```
import: import numpy as np
datos: tamanos = [4, 10, 3]                  # entrada, oculta, salida (inventado)
total0: total = 0
fork: for k in range(1, len(tamanos)):
nin:     n_in = tamanos[k - 1]
nout:     n_out = tamanos[k]
param:     p = n_in * n_out + n_out          # pesos + sesgos
suma:     total = total + p
fila:     print(f"dense_{k}  (None, {n_out})  {p}")
imptot: print("Total params:", total)
lote: X = np.ones((5, 4))                   # un lote de 5 flores
a0: A = X
np0: n_param = 0
fork2: for k in range(1, len(tamanos)):
W:     W = np.full((tamanos[k - 1], tamanos[k]), 0.1)
b:     b = np.zeros(tamanos[k])
dense:     A = A @ W + b                     # lo que hace Dense (sin activación)
cuenta:     n_param = n_param + W.size + b.size
forma:     print(A.shape)
compara: print(n_param == total)
```

Salida real:
```
dense_1  (None, 10)  50
dense_2  (None, 3)  33
Total params: 83
(5, 10)
(5, 3)
True
```

### R

```
datos: tamanos <- c(4, 10, 3)                # entrada, oculta, salida (inventado)
total0: total <- 0
fork: for (k in 2:length(tamanos)) {
nin:   n_in <- tamanos[k - 1]
nout:   n_out <- tamanos[k]
param:   p <- n_in * n_out + n_out           # pesos + sesgos
suma:   total <- total + p
fila:   cat(sprintf("dense_%d  (None, %d)  %d\n", k - 1, n_out, p))
-: }
imptot: cat(sprintf("Total params: %d\n", total))
lote: X <- matrix(1, nrow = 5, ncol = 4)    # un lote de 5 flores
a0: A <- X
np0: n_param <- 0
fork2: for (k in 2:length(tamanos)) {
W:   W <- matrix(0.1, nrow = tamanos[k - 1], ncol = tamanos[k])
b:   b <- rep(0, tamanos[k])
dense:   A <- sweep(A %*% W, 2, b, "+")      # lo que hace Dense (sin activación)
cuenta:   n_param <- n_param + length(W) + length(b)
forma:   print(dim(A))
-: }
compara: print(n_param == total)
```

Salida real:
```
dense_1  (None, 10)  50
dense_2  (None, 3)  33
Total params: 83
[1]  5 10
[1] 5 3
[1] TRUE
```

Comprobado: quitando el prefijo `id: ` (y `-: `) de cada línea, los dos bloques son idénticos a los archivos ejecutados. Copiar respetando los espacios de alineación de los comentarios.

Índices: en Python `k` vale 1 y 2 (`range(1, 3)`) y `tamanos[k - 1]` es la capa de arriba; en R `k` vale 2 y 3 (`2:length(tamanos)`) y el rótulo
imprime `k - 1`. Los dos imprimen `dense_1` y `dense_2` (los nombres los pone Keras, no el índice del lenguaje). Narrar con `ctx.ix` la diferencia:
"en Python la vuelta 1 lee `tamanos[0]` y `tamanos[1]`; en R la vuelta `k = 2` lee `tamanos[1]` y `tamanos[2]`".

Eventos (una sola lista `EV`): `import` (solo Python), `datos`, `total0`, 2 vueltas de `fork`+`nin`+`nout`+`param`+`suma`+`fila`, `imptot`, `lote`, `a0`,
`np0`, 2 vueltas de `fork2`+`W`+`b`+`dense`+`cuenta`+`forma`, `compara`: 1 + 2 + 12 + 1 + 3 + 12 + 1 = **32 eventos**. En R, `import` se narra
"Esta línea solo existe en Python: R hace matrices sin cargar nada".

### Foto de estado por línea ejecutada

| Evento | k (py / R) | n_in | n_out | p | total | A (forma) | n_param | Visual |
|---|---|---|---|---|---|---|---|---|
| datos | | | | | | | | la pila 4-10-3 vacía, sin tabla |
| total0 | | | | | 0 | | | la fila `Total params` aparece en 0 |
| vuelta 1 (nin, nout, param, suma, fila) | 1 / 2 | 4 | 10 | 50 | 50 | | | la franja 4 → 10 se enciende, cables y sesgos cuentan 40 + 10; la fila `dense_1 (None, 10) 50` se escribe |
| vuelta 2 | 2 / 3 | 10 | 3 | 33 | 83 | | | franja 10 → 3: 30 + 3; fila `dense_2 (None, 3) 33` |
| imptot | | | | | 83 | | | `Total params: 83` |
| lote, a0 | | | | | | (5, 4) | | entra el rectángulo de 5 flores × 4 medidas, todo en 1 |
| np0 | | | | | | | 0 | |
| vuelta 1 (W, b, dense, cuenta, forma) | 1 / 2 | | | | | (5, 10) | 50 | rejilla W 4 × 10 de 0.1, b de 10 ceros; el rectángulo pasa a 5 × 10, cada casilla 0.4 (4 × 1 × 0.1) |
| vuelta 2 | 2 / 3 | | | | | (5, 3) | 83 | W 10 × 3; casillas 0.4 (10 × 0.4 × 0.1; NumPy da 0.39999999999999997, se muestra 0.4) |
| compara | | | | | 83 | | 83 | `True` / `[1] TRUE`: la fórmula y las matrices reales coinciden |

Narración de `param`: "pesos (`n_in * n_out` cables) más sesgos (uno por neurona)". De `dense`: "cada flor (fila) pasa por la misma matriz: el lote no cambia `W`".
En R, `sweep(..., 2, b, "+")` suma el sesgo a cada columna; en NumPy lo hace la difusión (broadcasting) sin decirlo.

### Predicción antes de reproducir (`#vrPred`)

"¿Cuántas veces se ejecuta la línea `p = n_in * n_out + n_out`?" Respuesta **2** (una por capa `Dense`, no por neurona ni por flor).
Distractores: 3 (los tamaños de la lista: la entrada no es una capa con pesos), 13 (las neuronas), 5 (las flores del lote). Pista: "el `for` empieza en la segunda posición".

### Trampas reales (retos `codigo1` a `codigo3`)

**codigo1: `input_shape` con el lote adentro.** Keras no se pudo correr; la forma se reproduce con NumPy (la `Dense` de Keras multiplica por el
`kernel` sobre la última dimensión, igual que `@`):
```
import numpy as np
X = np.ones((1, 150, 4))              # input_shape=(150, 4): 150 flores como UNA muestra
W = np.full((4, 10), 0.1)
b = np.zeros(10)
print((X @ W + b).shape)
print(W.size + b.size)
```
Salida real:
```
(1, 150, 10)
50
```
Pregunta: "Escribiste `Dense(10, input_shape=(150, 4))` porque tu tabla tiene 150 filas. ¿Qué pasó?" Correcta: Keras cree que cada muestra es
una tabla de 150 × 4; la salida es (None, 150, 10) y el `summary` sigue diciendo 50 parámetros, así que no avisa. Lo correcto: `input_shape=(4,)`.
Distractores: "da error porque 150 no es 4" (no da error: hay un eje de más y la capa lo recorre); "tiene 150 veces más parámetros" (los pesos se comparten
entre las 150 filas); "el lote pasa a ser 150" (el lote sigue siendo `None`, por delante).

**codigo2: la celda corrida dos veces (cuaderno DL03 de la UD4).** El cuaderno agrega `Dense(10)`, `Dense(10)`, `Dense(10)`, `Dense(1)` sobre 13 variables
(Boston Housing) y corre la celda "equivalente" sobre el MISMO modelo:
```
tamanos = [13, 10, 10, 10, 1, 10, 10, 10, 1]   # la celda se corrió dos veces
total = 0
for k in range(1, len(tamanos)):
    p = tamanos[k - 1] * tamanos[k] + tamanos[k]
    total = total + p
    print(p, end=" ")
print()
print(total)
```
Salida real (la última línea impresa lleva un espacio al final antes del salto):
```
140 110 110 11 20 110 110 11 
622
```
Coincide con el `summary` guardado en el cuaderno (mapa de la UD4: ocho `Dense`, total 622). Pregunta: "¿Por qué la quinta capa tiene 20 parámetros?"
Correcta: recibe la salida de 1 neurona (la `Dense(1)` de la primera pasada): 1 × 10 + 10. Distractores: "es un error de imprenta" (es real, sale del cuaderno);
"porque la entrada vuelve a tener 13 variables" (serían 140); "porque Dropout suma parámetros" (no hay Dropout y tendría 0). Moraleja: en Python y en R
el modelo se modifica en el lugar; se construye en una sola celda.

**codigo3: la matriz al revés (PyTorch → Keras).**
```
import numpy as np
X = np.ones((5, 4))
W = np.full((10, 4), 0.1)             # orientación de PyTorch: (salidas, entradas)
print((X @ W.T).shape)
print((X @ W).shape)
```
Salida real:
```
(5, 10)
Traceback (most recent call last):
  ...
ValueError: matmul: Input operand 1 has a mismatch in its core dimension 0, with gufunc signature (n?,k),(k,m?)->(n?,m?) (size 10 is different from 4)
```
Par en R (verificado):
```
X <- matrix(1, nrow = 5, ncol = 4)
W <- matrix(0.1, nrow = 10, ncol = 4)
print(dim(X %*% t(W)))
print(dim(X %*% W))
```
Salida real:
```
[1]  5 10
Error in X %*% W : non-conformable arguments
Calls: print
Execution halted
```
Pregunta: "¿Por qué la segunda línea falla si W tiene los 40 pesos correctos?" Correcta: para multiplicar, las columnas de X (4) tienen que coincidir con
las filas de W; PyTorch guarda (10, 4) y Keras (4, 10): hay que trasponer. Distractores: "faltan los sesgos" (no intervienen en la forma); "el lote de 5 es
demasiado chico" (el lote no toca W); "W debería ser (5, 10)" (W no depende del lote).

`p.vr-nota` (con la etiqueta "no ejecutado: Keras no está instalado en esta máquina"): en Keras, todo lo anterior es
`modelo.summary()` y `modelo.count_params()` (Python) o `summary(modelo)` y `count_params(modelo)` (R, `keras3`). Con la 4-10-3 deberían dar 50, 33 y 83
(por la fórmula y por el `summary` de ISLR2 p.447 que usa la misma regla).

`details.profundizar` "La misma red en Keras, en los dos lenguajes" (no ejecutado):
```
import keras
from keras import layers
modelo = keras.Sequential([
    keras.Input(shape=(4,)),
    layers.Dense(10, activation="relu"),
    layers.Dense(3, activation="softmax"),
])
modelo.compile(optimizer="adam", loss="categorical_crossentropy", metrics=["accuracy"])
modelo.summary()
```
```
library(keras3)
modelo <- keras_model_sequential(input_shape = 4) |>
  layer_dense(units = 10, activation = "relu") |>
  layer_dense(units = 3, activation = "softmax")
modelo |> compile(optimizer = "adam", loss = "categorical_crossentropy", metrics = "accuracy")
summary(modelo)
```
Nota en la página: ISLR2 (2023) usa el paquete `keras` y `%>%`; hoy el paquete de R es `keras3` y el pipe nativo `|>` funciona igual.

## Retos (12)

RETOS = ["ojo", "construir", "mano", "formas", "error", "prop1", "prop2", "prop3", "codigo1", "codigo2", "codigo3", "formula"]

1. **ojo** (ojo clínico, 5 rondas al azar, aprueba con 4 de 5): dos capas lado a lado, cada una "n entradas → m neuronas" con n y m al azar
   (n entre 2 y 800, m entre 1 y 512); Francisco decide SIN calcular cuál tiene más parámetros (o "iguales"). Generar pares donde la intuición
   engaña la mitad de las veces: p. ej. 784 → 10 (7 850) contra 50 → 100 (5 100); 10 → 50 (550) contra 50 → 10 (510); 4 → 10 (50) contra 9 → 5 (50, iguales).
   La explicación de cada ronda dice la cuenta: $(n + 1)\,m$ y "manda la entrada más ancha".
2. **construir** (manipular la pila hasta cumplir; entrada 4 fija): (a) salida (None, 3) y total exactamente 83 (una oculta de 10);
   (b) salida (None, 1) y total 61 (4-10-1); (c) dos ocultas y total entre 100 y 150 con salida 3 (p. ej. 4-8-8-3 = 139). Ok al cumplir las tres.
   Si agrega un Dropout, la tabla muestra 0 y el total no cambia (refuerza el paso 4).
3. **mano** (a mano, datos al azar, pistas escalonadas, reintentable): una red de entrada n (entre 2 y 20) y dos capas de tamaños al azar (entre 2 y 16) y
   salida entre 1 y 5. Pide los parámetros de cada capa y el total. Pistas: 1) "cables = entradas × neuronas"; 2) "más un sesgo por neurona";
   3) la primera capa resuelta con números.
4. **formas** (a mano de formas): lote B al azar (8 a 128), entrada n, capas al azar; pide la forma de la salida de cada capa con el lote concreto y
   cómo la escribe el `summary` (con `None`). Ej.: B = 32, 4-10-3 → (32, 10), (32, 3); `summary`: (None, 10), (None, 3). Pista para (10, 32): "las filas son muestras".
5. **error** (cazar el error, 3 variantes de una tabla `summary` escrita a mano con una fila mal):
   - V1: red 784-256-128-10 con `dense_1 ... 200704` (olvidó los 256 sesgos; lo correcto 200 960).
   - V2: red 4-10-3 con `dropout (None, 10) 10` (Dropout no tiene parámetros; total correcto 83, la tabla dice 93).
   - V3: funcional de dos entradas con `concatenate (None, 8)` (pega columnas: (None, 12); la salida entonces tendría 27 en vez de 39).
6. **prop1** (opción múltiple, `mezclar: true`): "¿Qué significa `None` en `(None, 10)`?" Correcta: "el número de muestras del lote, que Keras todavía no conoce".
   Pistas: "que la capa no tiene sesgos" → "el sesgo está en `Param #`, no en la forma"; "que la capa no tiene activación" → "la activación no aparece en la forma";
   "un error de la red" → "es lo normal: cualquier lote sirve".
7. **prop2**: "¿Qué cambia `compile`?" Correcta: "elige la pérdida, el optimizador y las métricas; los pesos y su número no cambian".
   Pistas: "inicializa los pesos al azar" → "los pesos ya existen cuando la capa conoce su entrada"; "entrena una época" → "eso es `fit`";
   "agrega la capa de salida" → "las capas se declaran antes".
8. **prop3**: "¿Cuándo necesitas la API funcional en vez de `Sequential`?" Correcta: "cuando el modelo tiene más de una entrada o salida, o ramas que se juntan".
   Pistas: "cuando tiene más de 3 capas" → "`Sequential` apila las que quieras"; "cuando usas softmax" → "la activación no depende de la API";
   "cuando la red es muy grande" → "el tamaño no importa; importa la forma del grafo".
9. **codigo1**, 10. **codigo2**, 11. **codigo3**: ver Vida real.
12. **formula**: la parte de memoria (`B.ordenar`), registrada con `C.reto("formula", ok)`.

## Memoria

**B.ordenar** (la red 4-10-3 en Keras, Python), piezas en orden:
1. `modelo = keras.Sequential([`
2. `keras.Input(shape=(4,)),`
3. `layers.Dense(10, activation="relu"),`
4. `layers.Dense(3, activation="softmax"),`
5. `])`

Distractores: `keras.Input(shape=(150, 4)),` (el lote no va en la forma), `layers.Dense(4, activation="relu"),` (la entrada no se declara como Dense),
`layers.Dropout(10),` (Dropout recibe una proporción, no neuronas). Al resolver se muestra la tabla: 50, 33, total 83.

**Tarjetas (8):**
1. ¿Cuántos parámetros tiene `Dense(m)` con n entradas? → $n\,m + m = (n + 1)\,m$: un peso por cable y un sesgo por neurona.
2. ¿Qué es `None` en `(None, 10)`? → El lote: cualquier número de muestras. Cada una sale con 10 números.
3. ¿Qué va en `input_shape` / `keras.Input(shape=...)`? → La forma de UNA muestra, sin el lote: `(4,)` para 4 medidas, `(28, 28)` para una imagen.
4. ¿Cuántos parámetros tienen Dropout, Flatten, Activation y Concatenate? → 0: no tienen cables.
5. ¿Los parámetros crecen con el número de datos? → No: dependen del ancho de la entrada y de las neuronas, no de las filas.
6. ¿Qué hace `compile`? → Elige pérdida, optimizador y métricas. No entrena (eso es `fit`) ni cambia los pesos.
7. `Sequential` frente a funcional → Sequential: una fila de capas. Funcional: capas llamadas sobre tensores, `keras.Model(inputs, outputs)`; permite ramas y varias entradas.
8. Pesos de Keras frente a PyTorch → Keras `kernel` (entradas, salidas) y `A @ W + b`; PyTorch `weight` (salidas, entradas) y `A @ W.T + b`.

## Citas (12)

| id de fuente | página PDF | página impresa | sección | qué hay | cuándo leerla |
|---|---|---|---|---|---|
| dl4 | 13 | 13 | Multilayer feed-forward | neurona $a_i = g(w_i x_i + b_i)$ (sin sumatorio, errata), "forward propagation", red 3-4-4-2 | Paso 1 |
| dl4diapo | 22 | 22 | Multilayer feed-forward | la red 3-4-4-2 dibujada (Input, Hidden 1, Hidden 2, Output): cuenta sus 46 parámetros | Paso 2 |
| islr2 | 455 | 444 | 10.9.1 A Single Layer Network on the Hitters Data | `keras_model_sequential()`, `layer_dense(units = 50, activation = "relu", input_shape = ncol(x))`, `layer_dropout`, el pipe `%>%` | Paso 2 |
| dl4 | 22 | 22 | Tema 6: TensorFlow | "los bordes son tensores (arrays multidimensionales)"; grafos de flujo de datos | Paso 3 |
| dl4diapo | 47 | 47 | GAN | dos `model.summary()` con el lote fijo en 32: `(32, 128)` en vez de `(None, 128)`; parámetros 4224, 33024... | Pasos 3 y 4 |
| cnn5diapo | 33 | 33 | Keras: red densa sobre 32×32×3 | `Sequential`, `Flatten(input_shape=(32, 32, 3))`, `Dense(100)`, `Activation('relu')`, `Dense(60)` | Paso 3 |
| islr2 | 458 | 447 | 10.9.2 A Multilayer Network on the MNIST Digit Data | `summary(modelnn)`: 200 960, 0, 32 896, 0, 1 290; total 235 146; "(784 + 1) × 256" | Paso 4 |
| cnn5diapo | 38 | 38 | Keras: perceptrón multicapa con dropout y softmax | `Dense(512, input_shape=(784,))`, ReLU, `Dropout(0.2)`, `Dense(10)`, softmax (sin total; aquí 669 706) | Paso 4, destacado |
| islr2 | 456 | 445 | 10.9.1 (compile y fit) | `compile(loss = "mse", optimizer = optimizer_rmsprop(), ...)`; `compile` no cambia el objeto de R; épocas y lote 32 | Paso 5 |
| cnn5diapo | 39 | 39 | Keras: compilar, entrenar, evaluar | `rmsprop`, `categorical_crossentropy`, `batch_size=128`, `nb_epoch=4` (Keras 1) | Paso 5 |
| raschka13 | 9 | 417 | nn.Sequential, init, L1 y L2 | `nn.Sequential(nn.Linear(4, 16), nn.ReLU(), nn.Linear(16, 32), nn.ReLU())` | Paso 7 |
| raschka12 | 28 | 396 | MLP para Iris con Adam | `nn.Linear(4, 16)`, sigmoide, `nn.Linear(16, 3)`: 4 medidas, 3 especies | Paso 7 |

Opcional (13.ª): prog1 p.11 (= impresa), "Python en la ciencia de datos": TensorFlow y PyTorch solo nombrados en la UD1; la UD3 no está publicada. Paso 7.
Opcional (14.ª): islr2 PDF 457 (p.446): `modelnn <- keras_model_sequential()` y luego `modelnn %>% layer_dense(...)` sin reasignar (modificación en el lugar). Paso 7.

Todas las páginas salen de los mapas verificados: `sm142004-ud4.md` (dl4 = A, PDF = impresa; dl4diapo = B, PDF = impresa), `sm142004-ud5.md`
(cnn5diapo = B, número de diapositiva = página del PDF), `islr2-r.md` (PDF = impresa + 11; tabla 10.9, PDF 454-469), `raschka-cap11.md` (sección
"Caps. 12 y 13": cap. 12 impresa = PDF + 368; cap. 13 impresa = PDF + 408) y `sm142002-programacion.md` (prog1, PDF = impresa).
Además leí con `pdftotext` las PDF 455-459 de ISLR2: el código de `keras_model_sequential`, `compile`, `summary` (235 146, "(784 + 1) × 256 = 200,960")
y la regresión logística de 7 850 están donde se dice.

**Sin chip (cuadernos, no registrados como fuente).** Se nombran en el texto con su nombre: UD4 `DL03 - multilayer perceptron - Keras.ipynb` (la celda
corrida dos veces, ocho `Dense`, 622; reto `codigo2`) y `DL02 - multilayer perceptron - Tensorflow.ipynb` (la red como subclase de `tf.keras.Model`,
784-128-256-10); UD5 `CNN01` (`Dense(10, input_shape=(784,))` + `Dense(10)`: 7 960) y `CNN03` (9 470 464 de 9 494 561 en una `Dense`);
UD4 `LSTM - Demo 4/5` (`input_shape=(5, 10)` sin el lote, salida `(3, 1)`). Datos tomados del mapa de la UD4 y la UD5 (no se releyeron los cuadernos).

## Erratas del material (decirlas con naturalidad donde se indica)

- dl4 p.13 (y dl4diapo p.21): $a_i = g(w_i x_i + b_i)$ sin sumatorio; y "el sesgo b garantiza que al menos un nodo por capa está activo" (no: desplaza el umbral). Paso 1.
- cnn5diapo p.38-39: falta importar `Dropout`; `nb_epoch` (Keras 1, hoy `epochs`); `keras.utils.np_utils` ya no existe; comillas tipográficas. Paso 5.
- Cuaderno DL03 (UD4): celda corrida dos veces sobre el mismo modelo → ocho `Dense`, 622 parámetros; además dice "32 neuronas" con `Dense(10)` y
  "two hidden layer" con tres. Reto `codigo2`.
- raschka12 pp. 396-397 y 402: "dos capas ocultas" (es una) y softmax en la última capa que el `forward` no tiene. Paso 7.
- ISLR2 p.443-447: el lab usa el paquete `keras` de R (hoy `keras3`) y `input_shape` dentro de `layer_dense`; el propio libro avisa (p.443) que hay
  una versión con `torch` en su sitio web. Paso 2, en el `details`.
- dl4diapo p.47: las formas salen con el lote fijo (32) porque la entrada se declaró con `batch_size`; no es un error, pero choca con el `None`
  de todos los demás `summary`. Paso 3.
- SM142002: la UD3 (scikit-learn, TensorFlow, Git) no está publicada; la página lo dice en el hero y en el paso 7.

## Riesgos y notas para quien construye

- **No inventar salidas de Keras.** Ninguna línea de la página puede decir "salida real" de `model.summary()`: Keras no se corrió. Las cifras salen de la
  fórmula (verificada con NumPy y R) y de los `summary` impresos en ISLR2 p.447 y en la UD4 diapositiva 47. El formato exacto del `summary` de Keras 3
  (bordes, columnas) puede diferir del de ISLR2 (Keras 2): el escenario dibuja una tabla genérica con las tres columnas, sin copiar bordes.
- La `Dense` de Keras con entrada de más de 2 dimensiones opera sobre el último eje (por eso `codigo1` da (None, 150, 10) y 50 parámetros). Se
  reprodujo con NumPy `@`; en Keras no se ejecutó.
- `nn.Linear(4, 10).weight` tiene forma (10, 4) en PyTorch: documentado (y coherente con `A @ W.T + b`), no ejecutado (PyTorch no está instalado).
- El R de Vida real usa `sweep(A %*% W, 2, b, "+")` para sumar el sesgo por columna: R no hace difusión de un vector sobre columnas de una matriz
  como NumPy (`A %*% W + b` reciclaría `b` por columnas, mal). Si alguien lo "simplifica", el resultado cambia en silencio cuando b no es constante.
- Salida de `codigo2`: `print(p, end=" ")` deja un espacio antes del salto de línea; copiar tal cual.
- El escenario no debe mostrar `Param #` ni las formas que pide cada chequeo antes de resolverlo (pasos 2, 3, 4 y 6).
- Usar la misma red 4-10-3 que "Red multicapa y propagación hacia adelante" (83 parámetros) para que Francisco la reconozca.
- Avisos y errores de R salen en inglés en esta máquina (`non-conformable arguments`). Copiar tal cual.
