# Mapa de citas: Nield, cap. 7 "Neural Networks"

Archivo: `/Users/franciscocastillo/brain/02-Biblioteca/Matematicas/Essential-Math/07 Cap 7 Neural Networks.pdf` (38 páginas PDF, sin números impresos: versión early release, igual que el cap. 6; ninguna página trae número al pie, confirmado en el texto extraído de las 38). Citar por página del PDF y por "Example 7-N" o "Figure 7-N". Todas las páginas se leyeron con `pdftotext -layout`; las figuras 7-5 (PDF 9) y 7-10 (PDF 23) y la Table 7-1 (PDF 15) se revisaron además como imagen. Las páginas PDF 20 y 24 tienen las matrices desordenadas en el texto extraído; los números se tomaron de la Figure 7-10 y se recalcularon con python3.

Ejemplo central: elegir letra clara (1) u oscura (0) según el color de fondo RGB. Red 3-3-1: capa oculta de 3 neuronas con ReLU, salida de 1 neurona con logística. Pesos y sesgos con `np.random.rand` (uniformes en [0, 1)), sin semilla: los resultados varían en cada corrida. Datos en https://tinyurl.com/y2qmhfsr (512 colores con salida 0 y 833 con salida 1, según la pág. 25; no verificado, no se descargó).

Convención de dimensiones (distinta de Raschka): cada **fila** de la matriz de pesos es una neurona; la entrada X va como **columna** (3 × n, por eso `X_test.transpose()`). Z1 = W_hidden X + B_hidden, con W_hidden de 3 × 3, B_hidden de 3 × 1, W_output de 1 × 3, B_output de 1 × 1.

| Tema | pág. PDF | Notas |
|---|---|---|
| Introducción: qué es una red neuronal | 1 | "regresión multicapa" con capas de pesos, sesgos y funciones no lineales; deep learning = varias capas ocultas; cada nodo es una función lineal pasada por una función de activación; se entrena con descenso de gradiente estocástico como la regresión lineal del cap. 5; ImageNet 2011-2015 (96.4 %) |
| Cuándo usar redes neuronales | 1-2 | datos estructurados (tablas): mejor regresión lineal, logística o árboles con boosting; redes para problemas perceptuales (imágenes, audio, texto); el capítulo se limita a 1-2 capas ocultas (2) |
| Recuadros: variantes y "overkill" | 2 | CNN para imágenes, LSTM para series, RNN para texto a voz; aquí una logística bastaría, se usa la red para entender la técnica |
| Ejemplo: letra clara u oscura | 2-4 | Figure 7-1 (3); RGB de 0 a 255, naranja oscuro (255,140,0), rosa (255,192,203) (3); recuadro RGB: cada píxel de una imagen son tres números (4); "mystery math" (4) |
| La salida es una probabilidad | 5-6 | Figure 7-2 (5): tres entradas, una salida entre 0 y 1; Figure 7-3 (6): rosa (255,192,203) da .89 > 0.5, letra clara |
| Capa oculta y capa de salida | 7-8 | Figure 7-4 (7): pesos y sesgos por nodo; cada nodo es una función lineal con pendientes wᵢ e intercepto bᵢ (8); pesos w₁ a w₉ entre entrada y oculta, w₁₀ a w₁₂ entre oculta y salida, sesgos b₁ a b₄ |
| La salida escrita completa (sin activaciones) | 8 | output = w₁₀(x₁w₁ + x₂w₂ + x₃w₃ + b₁) + w₁₁(x₁w₄ + x₂w₅ + x₃w₆ + b₂) + w₁₂(x₁w₇ + x₂w₈ + x₃w₉ + b₃) + b₄; "es una regresión como la lineal o la logística, pero con muchos más parámetros"; anuncia retropropagación y regla de la cadena |
| Funciones de activación: por qué | 8-9 | no lineal, "transforma o comprime" la suma ponderada; sin activaciones las capas ocultas "no rinden más que una regresión lineal" (8); Figure 7-5 (9): ReLU en la capa oculta, logística en la salida, sobre el diagrama con w₁ ... w₁₂ |
| ReLU | 9-11 | pone en 0 lo negativo y deja igual lo positivo (9-10); Example 7-1 `Max(0, x)` con SymPy (10); Figure 7-6 (11); "rectified linear unit"; popular por rapidez y porque mitiga el gradiente que se desvanece (11) |
| Gradiente que se desvanece (definición) | 11 | "las pendientes de las derivadas parciales se vuelven tan pequeñas que se acercan a 0 antes de tiempo y frenan el entrenamiento"; es la única mención con definición |
| Logística (sigmoide) en la salida | 12-13 | la capa de salida vuelve interpretable el resultado; la logística del cap. 6 "actúa como una capa de la red" (12); umbral .5 (12); Example 7-2 `1 / (1 + exp(-x))` (12); Figure 7-7 (13); "salida activada" y la metáfora de la sinapsis (13) |
| Table 7-1 Common Activation Functions | 14-16 | tabla partida: encabezado y fila Linear en la 15, el resto en la 16. Linear (salida, poco usada); Logistic (salida, entre 0 y 1, binaria); tanh (oculta, entre −1 y 1, "centra" los datos con media cerca de 0); ReLU (oculta, más rápida que sigmoide y tanh, mitiga el gradiente que se desvanece, barata); Leaky ReLU (oculta, multiplica los negativos por .01, "variante controvertida"); Softmax (salida, las salidas suman 1.0, multiclase). Sin fórmulas ni derivadas |
| Varias clases y softmax | 16-17 | cualquier función puede ser activación (16); la red modela una sola clase (clara sí o no); para dígitos 0-9, 10 nodos de salida y softmax (16); Figure 7-8 (17): píxeles como entradas, dos capas ocultas, 10 salidas; MNIST en el Apéndice A (17) |
| Recuadro: qué activación usar | 18 | ReLU en capas ocultas, logística en la salida, softmax si hay varias clases |
| Propagación hacia adelante en NumPy | 18-19 | Example 7-3 (18-19): datos /255, `train_test_split(test_size=1/3)`, `w_hidden = np.random.rand(3, 3)`, `w_output = np.random.rand(1, 3)`, `b_hidden = np.random.rand(3, 1)`, `b_output = np.random.rand(1, 1)`, `relu`, `logistic`, `forward_prop(X)` devuelve Z1, A1, Z2, A2; exactitud con umbral .5 (19) |
| Matrices de pesos y sesgos | 19-21 | Example 7-4 (19); pesos al azar entre 0 y 1; W_hidden de una corrida: filas (0.034535, 0.5185636, 0.81485028), (0.3329199, 0.53873853, 0.96359003), (0.19808306, 0.45422182, 0.36618893); W_output = (0.82652072, 0.30781539, 0.93095565) (19); **cada nodo es una fila; tantas filas como nodos; cada columna un peso**; un sesgo por nodo: B_hidden de 3 × 1 = (0.41379442, 0.81666079, 0.07511252), B_output = 0.58018555 (20); Figure 7-9 (21): las matrices sobre el diagrama |
| forward_prop paso a paso | 22 | Example 7-5; Z = salida sin activar, A = salida activada, "1" y "2" son las capas; Z1 = W_hidden X + B_hidden: cada fila de W por el vector X, más los sesgos |
| Cuenta con números: Z1 | 23 | Figure 7-10: W_hidden X = (0.946755221909086, 1.33805678888247, 0.644441873391768); Z1 = (1.36054964190909, 2.15471757888247, 0.719554393391768) (ver erratas: la X usada no es un color) |
| Cuenta con números: A1, Z2, A2 | 24 | A1 = ReLU(Z1) no cambia nada porque todo es positivo; Z2 = W_output A1 + B_output = [2.45765...] + [0.58018555] = [3.03783...]; A2 = logistic(3.0378364795204) = 0.954254478103241 (ver erratas) |
| Exactitud sin entrenar | 25 | Example 7-6; con pesos al azar da entre 55 % y 67 %, "como lanzar una moneda"; recuadro de datos desbalanceados: 512 con 0 y 833 con 1 (el 62 % es 1, eso explica que el azar pase del 50 %); usar matriz de confusión |
| Retropropagación: el problema | 25-26 | los pesos y sesgos están "enredados"; hace falta la regla de la cadena del cap. 1 (25); anidación "como una cebolla" que se desenreda desde la salida (26) |
| Costo y cadena de funciones | 26 | C = (A2 − Y)² por predicción; A2 = sigmoid(Z2); Z2 = W2 A1 + B2; A1 = ReLU(Z1); Z1 = W1 X + B1; dC/dW2 = (dZ2/dW2)(dA2/dZ2)(dC/dA2) |
| Las tres derivadas de W2 | 27 | Example 7-7: dC/dA2 = 2A2 − 2y con SymPy; Example 7-8: dA2/dZ2 = e^(−Z2)/(1 + e^(−Z2))²; Example 7-9: dZ2/dW2 = A1 (ver erratas) |
| dC/dW2 armado | 28 | dC/dw2 = (A1)(e^(−Z2)/(1 + e^(−Z2))²)(2A2 − 2y); recuadro "Don't get lost in the math"; Example 7-10 empieza: dZ2/dA1 = W2, dZ2/dW2 = A1 |
| Todas las derivadas parciales | 28-29 | Example 7-10 completo: dZ2/dB2 = 1, dA1/dZ1 = (Z1 > 0), dZ1/dW1 = X, dZ1/dB1 = 1 (29); derivada de ReLU a mano: SymPy no deriva en la esquina, se declara pendiente 1 para positivos y 0 para negativos (29) |
| Las cuatro cadenas | 29 | dC/dW2 = (A1)(σ')(2A2 − 2y); dC/dB2 = (1)(σ')(2A2 − 2y); dC/dW1 = (2A2 − 2y)(σ')(W2)(Z1 > 0)(X); dC/dB1 = (2A2 − 2y)(σ')(W2)(Z1 > 0)(1), con σ' = e^(−Z2)/(1 + e^(−Z2))² |
| Recuadro: diferenciación automática | 30 | desenredar derivadas es tedioso; JAX (Google), "casi idéntico a NumPy"; video https://youtu.be/wG_nF1awSSY |
| Descenso de gradiente estocástico | 30 | un registro por iteración; batch y mini-batch "se usan comúnmente" pero no se implementan aquí |
| Red completa entrenada | 30-32 | Example 7-11: L = 0.05 con comentarios sobre tasa muy chica o muy grande (30); `d_relu = lambda x: x > 0`, `d_logistic = np.exp(-x) / (1 + np.exp(-x)) ** 2`, `backward_prop` con productos matriciales y transpuestas (31); 100 000 iteraciones, `np.random.choice(n, 1)` (31); actualización `w_hidden -= L * dW1` etc. (32) |
| Resultado y lectura del código | 32 | 97 % a 99 % de exactitud en prueba; backward_prop "distribuye el error hacia atrás"; se transponen matrices "para que coincidan las dimensiones" |
| Shell interactivo | 32-33 | Example 7-12 `predict_probability(r, g, b)` y `predict_font_shade` (ver erratas: etiquetas invertidas) |
| Cierre y videos | 33 | "lo que PyTorch y Tensorflow hacen por detrás"; poner breakpoints; recuadro 3Blue1Brown: https://youtu.be/Ilg3gGewQ5U y https://youtu.be/tIeHLnjs5U8 |
| Scikit-learn: MLPClassifier | 33-34 | "multi-layer perceptron classifier", salida logística por defecto (33); Example 7-13 `MLPClassifier(solver='sgd', hidden_layer_sizes=(3, ), activation='relu', max_iter=100_000, learning_rate_init=.05)`, `coefs_` e `intercepts_` (34); 99.3 % en prueba (34) |
| Limitaciones: sobreajuste y deriva de datos | 34-35 | demasiado flexibles, sobreajustan (34); cita de Andrew Ng sobre radiología en Stanford (35); autos autónomos: la red solo "pone etiquetas", el resto son reglas (35) |
| Juegos y mundos cerrados | 35-37 | simulaciones con datos ilimitados; cita de François Chollet (36); "solo hace lo que se programó para hacer" (37) |
| Recuadro "Is an AI winter coming?" | 37 | inviernos de la IA desde los 60; usar la herramienta adecuada |
| Conclusiones | 38 | resumen; recomienda 3Blue1Brown, StatQuest, The Art of the Problem, Géron y Chollet |
| Ejercicio | 38 | red para los datos de retención de empleados del cap. 6 (https://tinyurl.com/y6r7qjrp), con exactitud y matriz de confusión; respuestas en el Apéndice B |

Observaciones para citar:
- La imagen de "cada neurona es una fila de la matriz" está en las págs. 19-21 (Example 7-4 y Figure 7-9); la multiplicación con números, en la Figure 7-10 (pág. 23) y la pág. 24.
- La retropropagación completa con regla de la cadena está en las págs. 26-29; el código que la ejecuta, en las 30-32.
- La red de Nield es para una sola muestra a la vez (X de 3 × 1). No hay versión por lotes del backward.
- Es una buena página para "red multicapa y propagación hacia adelante" en versión mínima (3-3-1) y para contrastar con Raschka (784-50-10, filas = ejemplos).

## Erratas e inconsistencias

- **Pág. 31, `backward_prop` (Example 7-11): el gradiente de la capa oculta está mal.** `dC_dA1` sale de 1 × 3; `dC_dA1 @ dA1_dZ1` (1 × 3 por 3 × 1) suma las tres neuronas en un solo número, y `@ dZ1_dW1.T` lo convierte en 1 × 3. Ese 1 × 3 se resta a `w_hidden` (3 × 3) por broadcasting: **las tres neuronas ocultas reciben la misma actualización**, y `dC_dB1` es 1 × 1 en vez de 3 × 1. Comprobado con python3 contra diferencias finitas: el gradiente correcto es `dZ1 = (w_output.T @ dZ2) * d_relu(Z1)`, `dW1 = dZ1 @ X.T`, `dB1 = dZ1`; el del libro no coincide (por ejemplo, la fila de una neurona con Z1 < 0 debería ser 0 y el libro le da un valor distinto de 0). Las de la capa de salida (`dC_dW2`, `dC_dB2`) sí están bien. La red igual aprende en este problema fácil, lo que oculta el error. Las fórmulas escalares de la pág. 29 son correctas; el fallo está al pasarlas a matrices.
- **Pág. 23, Figure 7-10**: el vector X que multiplica a W_hidden es (0.82652072, 0.30781539, 0.93095565), que son los **pesos de W_output**, no un color (por 255 daría 210.76, 78.49, 237.39, que no son enteros). La cuenta en sí es correcta: W_hidden X + B_hidden = (1.36054964, 2.15471758, 0.71955439), recalculado.
- **Pág. 24**: W_output A1 = 2.45765093, no 2.45765202842636, y Z2 = 3.03783648, no 3.03783757842636 (error de transcripción). La línea siguiente usa el valor correcto, 3.0378364795204, y A2 = 0.954254478103241 sí es correcto. Recalculado con python3.
- **Pág. 24**: "need a light (1) or dark (1) font"; oscuro es 0.
- **Págs. 32-33, Example 7-12**: `predict_font_shade` devuelve "DARK" si la probabilidad es > .5, pero la salida 1 significa letra clara (págs. 2, 12). Las etiquetas están invertidas.
- **Pág. 27**: el resultado del Example 7-9 está escrito dZ2/dW1 = A1; es dZ2/dW2. En la pág. 29 las fórmulas escriben "DA2" con D mayúscula en lugar de dA2.
- **Pág. 26**: llama a Y "la predicción" ("A2 minus the prediction Y"); Y es el valor real, A2 la predicción.
- **Pág. 8 y 30**: "backpropogation", "propogation" (también en títulos de sección); el término es backpropagation.
- Matiz (no errata): usa costo cuadrático (A2 − Y)² con salida sigmoide, no la entropía cruzada. Funciona, pero con sigmoide saturada el gradiente se achica; la entropía cruzada cancela ese factor. El capítulo no lo comenta.
- Matiz: dA2/dZ2 aparece como e^(−Z2)/(1 + e^(−Z2))²; es lo mismo que σ(Z2)(1 − σ(Z2)), forma que el libro no menciona.
- Matiz: `np.random.rand` inicializa todos los pesos positivos en [0, 1); por eso A1 = ReLU(Z1) "no tiene impacto" en el ejemplo (pág. 24). No se discute la inicialización.
- Verificados sin error: W_hidden X = (0.946755, 1.338057, 0.644442), Z1, A2 = 0.9542545, las derivadas simbólicas de los Examples 7-7 a 7-10.

## No aparece

Perceptrón (solo el nombre en "multi-layer perceptron", pág. 33) y el problema XOR; fórmulas de tanh, softmax y Leaky ReLU (solo descritas en la Table 7-1); derivadas de tanh y softmax; σ'(z) = σ(z)(1 − σ(z)); entropía cruzada como pérdida; mini-lotes implementados (solo se nombran, pág. 30); épocas; momentum, RMSProp y Adam; inicialización de pesos (Xavier, He) y por qué no inicializar todo igual; tensores; gradiente que explota; regla delta o notación δ; versión vectorizada por lotes del backward.

## Búsqueda rápida por concepto

| Concepto | Páginas PDF |
|---|---|
| Neurona (nodo = función lineal + activación) | 1, 7-8, 13 |
| Perceptrón y XOR | no aparece (solo `MLPClassifier`, 33) |
| Funciones de activación (panorama) | 8-9, Table 7-1 en 15-16, 18 |
| Sigmoide (logística) | 12-13; derivada 27 (Example 7-8) y 31 (`d_logistic`) |
| tanh | 16 (Table 7-1, sin fórmula) |
| ReLU y su derivada | 9-11; derivada 29 y 31 (`d_relu`) |
| Softmax | 16-17 |
| Red multicapa (estructura) | 7-8, 16-17 (Figure 7-8) |
| Propagación hacia adelante, forma matricial y dimensiones | 18-24 (Examples 7-3 a 7-5, Figures 7-9 y 7-10) |
| Retropropagación (regla de la cadena capa por capa) | 25-29, código 31-32 |
| Gradiente que se desvanece | 11, 16 |
| Descenso de gradiente estocástico | 1, 8, 30-32 |
| Mini-lotes | 30 (solo mención) |
| Momentum, RMSProp, Adam | no aparece |
| Tensores | no aparece (solo matrices NumPy) |
| Inicialización de pesos | 18-19 (al azar en [0, 1), sin discusión) |
| Funciones de pérdida: MSE | 26 (C = (A2 − Y)²) |
| Funciones de pérdida: entropía cruzada | no aparece |
| Diferenciación automática | 30 (recuadro JAX) |
| Scikit-learn MLPClassifier | 33-34 |
