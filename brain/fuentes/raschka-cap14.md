# Mapa de citas: Raschka, Liu y Mirjalili, cap. 14 "Classifying Images with Deep Convolutional Neural Networks"

Archivo: `/Users/franciscocastillo/brain/02-Biblioteca/Machine-Learning/PyTorch-Scikit-Learn/Cap14 - Classifying Images with Deep Convolutional Neural Networks.pdf` (48 páginas PDF).
Correspondencia verificada: página impresa = página PDF + 450, es decir, PDF N = impresa − 450. Comprobado en el encabezado de PDF 2 = p. 452,
PDF 3 = p. 453, PDF 10 = p. 460, PDF 30 = p. 480, PDF 47 = p. 497, PDF 48 = p. 498. La PDF 1 no lleva número impreso (abre el capítulo con un "14");
por el desfase le corresponde la 451. Cada página se leyó con `pdftotext -layout`; las fórmulas de las pp. 454-455, 458, 459, 466, 471 y 477 y las
figuras 14.3, 14.4, 14.5, 14.6, 14.7, 14.8, 14.9, 14.11 y 14.12 se revisaron además como imagen, porque `pdftotext` rompe los glifos matemáticos.
Edición: Machine Learning with PyTorch and Scikit-Learn (Packt, 2022). Datos del capítulo: ejemplos de juguete para convolución 1D y 2D y para
pooling; MNIST (28×28, gris) para la primera CNN; CelebA (218×178 RGB, recortadas a 64×64) para clasificar sonrisas.
Notación del capítulo: el subíndice da el tamaño (A_{n1×n2}), los corchetes indexan (A[i, j]) y ∗ es la convolución (no el `*` de Python).

| Tema | PDF | Impresa | Sección | Notas |
|---|---|---|---|---|
| Introducción y temas | 1 | 451 | apertura | convolución 1D y 2D, bloques de una CNN, CNN en PyTorch, data augmentation, clasificador de sonrisas; LeCun 1989 (dígitos manuscritos) |
| Corteza visual (recuadro) e historia | 2 | 452 | The building blocks of CNNs | Hubel y Wiesel 1959 (gato anestesiado); Turing 2019 a LeCun, Bengio y Hinton |
| CNN como extractor de rasgos, jerarquía de rasgos | 2 | 452 | Understanding CNNs and feature hierarchies | capas tempranas: rasgos de bajo nivel (bordes, manchas); capas finales (MLP) predicen; feature hierarchy |
| Mapa de rasgos y campo receptivo local | 3 | 453 | idem | Figure 14.1 (feature maps de una foto); **local receptive field**; **sparse connectivity** y **parameter sharing** reducen el número de pesos; capas conv + subsampling + FC |
| Pooling no tiene parámetros | 3 | 453 | idem | "subsampling layers, commonly known as pooling layers, do not have any learnable parameters"; conv y FC sí tienen pesos y sesgos |
| Notación (recuadro) | 4 | 454 | Performing discrete convolutions | A_{n1×n2}, A[i, j], ∗ = convolución |
| **Convolución 1D: definición** | 4 | 454 | Discrete convolutions in one dimension | y = x ∗ w → y[i] = Σ_{k=−∞}^{+∞} x[i − k] w[k]; x = entrada (señal), w = filtro o núcleo (kernel); dos rarezas: índices infinitos e índice negativo |
| Zero-padding | 5 | 455 | idem | relleno con ceros de tamaño p a cada lado; Figure 14.2: x = [3 2 1 7 1 2 5 4] con p = 2 → [0 0 3 2 1 7 1 2 5 4 0 0]; x^p tiene tamaño n + 2p |
| Fórmula práctica y giro del filtro | 5 | 455 | idem | y[i] = Σ_{k=0}^{m−1} x^p[i + m − k] w[k] (ver erratas: falta un −1); x y w se recorren en sentidos opuestos ⇒ equivale a **girar (rotar) w** y hacer producto punto x[i: i + m] · w^r como ventana deslizante |
| **Ejemplo numérico 1D con stride 2** | 6 | 456 | idem | Figure 14.3: x = [3 2 1 7 1 2 5 4], w = [1/2 3/4 1 1/4], w^r = [1/4 1 3/4 1/2], p = 0, s = 2: y[0] = 3·1/4 + 2·1 + 1·3/4 + 7·1/2 = 7; y[1] = 1·1/4 + 7·1 + 1·3/4 + 2·1/2 = 9; y[2] = 1·1/4 + 2·1 + 5·3/4 + 4·1/2 = 8 (verificado) |
| Stride | 6 | 456 | idem | el filtro girado se corre 2 celdas: stride s = 2; s positivo y menor que el tamaño de la entrada |
| **Correlación cruzada (recuadro)** | 6 | 456 | recuadro Cross-correlation | y = x ⋆ w → y[i] = Σ_{k=−∞}^{+∞} x[i + k] w[k]; misma dirección, sin girar el filtro; mismo padding y stride; **PyTorch y la mayoría de frameworks implementan correlación cruzada y la llaman convolución** |
| Por qué padding: bordes | 7 | 457 | Padding inputs to control the size of the output feature maps | n = 5, m = 3, p = 0: x[0] entra en 1 salida, x[1] en 2, x[2] en más; con p = 2 cada x[i] entra en 3 salidas |
| **Modos full, same, valid** | 7 | 457 | idem | full: p = m − 1 (salida más grande, rara en CNN); same: p se elige para que salida = entrada; valid: p = 0; Figure 14.4 (entrada 5, núcleo 3, stride 1, los tres modos); same es el más usado |
| Valid achica; reducir con pooling o stride 2 | 8 | 458 | idem | valid reduce mucho el volumen en redes profundas; recomendación: same en conv y achicar con pooling o conv con stride 2 (Springenberg et al. 2015, All Convolutional Net); full se usa en procesamiento de señales |
| **Tamaño de la salida** | 8 | 458 | Determining the size of the convolution output | o = ⌊(n + 2p − m)/s⌋ + 1; recuadro floor: ⌊1.77⌋ = 1 |
| Ejemplos de tamaño de salida | 8 | 458 | idem | n = 10, m = 5, p = 2, s = 1 → o = ⌊9/1⌋ + 1 = 10 (same); n = 10, m = 3, p = 2, s = 2 → o = ⌊11/2⌋ + 1 = 6 |
| conv1d ingenua en NumPy | 9 | 459 | idem | `conv1d(x, w, p=0, s=1)` con `w_rot = np.array(w[::-1])`, padding con `np.concatenate`; x = [1, 3, 2, 4, 5, 6, 1, 3], w = [1, 0, 3, 1, 2], p = 2, s = 1 → [5 14 16 26 24 34 19 22], igual a `np.convolve(x, w, mode='same')` (verificado); Dumoulin y Visin, guía de aritmética de convolución |
| **Convolución 2D: definición** | 9 | 459 | Performing a discrete convolution in 2D | X_{n1×n2}, W_{m1×m2}, m1 ≤ n1, m2 ≤ n2: Y[i, j] = Σ_{k1} Σ_{k2} X[i − k1, j − k2] W[k1, k2] |
| 2D se extiende por dimensión | 10 | 460 | idem | padding, giro y stride se aplican a cada dimensión por separado; Figure 14.5: entrada 8×8, núcleo 3×3, p = 1 → salida 8×8 |
| **Ejemplo numérico 2D con p = (1, 1), s = (2, 2)** | 10-11 | 460-461 | idem | Figure 14.6: X = [[2, 1, 2], [5, 0, 1], [1, 7, 3]], W = [[0.5, 0.7, 0.4], [0.3, 0.4, 0.1], [0.5, 1, 0.5]], X^padded 5×5; W^r = [[0.5, 1, 0.5], [0.1, 0.4, 0.3], [0.4, 0.7, 0.5]] |
| Giro 2D no es transpuesta; suma del producto elemento a elemento | 11 | 461 | idem | `W_rot = W[::-1, ::-1]` (giro de 180°, no transpuesta); ⊙ = producto elemento a elemento; Figure 14.7: Y = [[4.6, 1.6], [7.5, 2.9]] (2×2, verificado) |
| conv2d ingenua y SciPy | 11-12 | 461-462 | idem | `conv2d(X, W, p=(0, 0), s=(1, 1))`; X = [[1, 3, 2, 4], [5, 6, 1, 3], [1, 2, 0, 2], [3, 4, 3, 2]], W = [[1, 0, 3], [1, 2, 1], [0, 1, 1]], p = (1, 1), s = (1, 1) → [[11 25 32 13], [19 25 24 13], [13 28 25 17], [11 17 14 9]], igual a `scipy.signal.convolve2d(X, W, mode='same')` (verificado); ver erratas sobre el stride |
| Algoritmos eficientes (recuadro) | 12 | 462 | recuadro Efficient algorithms for computing convolution | PyTorch no gira el filtro; transformada de Fourier; núcleos 1×1, 3×3, 5×5; Winograd (Lavin y Gray 2015) |
| **Pooling: max y mean** | 13 | 463 | Subsampling layers | max-pooling y mean-pooling (average-pooling); P_{n1×n2} = tamaño del vecindario (pooling size); Figure 14.8: entrada 6×6, P_{3×3}, stride (3, 3): max = [[8, 5], [6, 3]], mean = [[3.78, 2.33], [3, 1.22]] (verificado: 34/9, 21/9, 27/9, 11/9) |
| Invariancia local del max-pooling | 13 | 463 | idem | dos matrices 6×6 distintas X₁ y X₂ dan el mismo max-pooling P_{2×2}: [[255, 125, 170], [255, 150, 150], [70, 200, 95]] (verificado); pooling reduce el tamaño, el cómputo y quizá el sobreajuste |
| Pooling con y sin solapamiento (recuadro) | 14 | 464 | recuadro Overlapping versus non-overlapping pooling | sin solapamiento: stride = tamaño del pooling, s = (n1, n2); solapado si stride < tamaño (AlexNet, Krizhevsky et al. 2012) |
| Conv con stride 2 en vez de pooling | 14 | 464 | idem | "conv con stride 2 = pooling con pesos aprendibles"; Springenberg et al. |
| De z = Wx + b a Z = W ∗ X + b | 14 | 464 | Putting everything together – implementing a CNN | en una CNN la multiplicación de matrices se reemplaza por convolución; A = σ(Z) |
| **Varios canales de entrada** | 14 | 464 | Working with multiple input or color channels | canales = matrices N1×N2; tensor de rango 3 X_{N1×N2×Cin}; RGB: Cin = 3; gris: Cin = 1 |
| Leer una imagen (recuadro) | 15 | 465 | recuadro Reading an image file | uint8 en [0, 255]; `read_image('example-image.png')` → `torch.Size([3, 252, 221])`, dtype uint8; torchvision usa **Tensor[channels, height, width]** |
| Convolución por canal y suma | 15-16 | 465-466 | idem | se convoluciona cada canal con su propio núcleo W[:, :, c] y se suman los resultados: Z^Conv = Σ_{c=1}^{Cin} W[:, :, c] ∗ X[:, :, c]; Z = Z^Conv + b; A = σ(Z) |
| **Varios canales de salida** | 16 | 466 | idem | núcleo de 4 dimensiones width × height × Cin × Cout; Z^Conv[:, :, k] = Σ_c W[:, :, c, k] ∗ X[:, :, c]; Z[:, :, k] = Z^Conv[:, :, k] + b[k]; A[:, :, k] = σ(Z[:, :, k]); Figure 14.9: Cin = 3, Cout = 5, núcleos m1 × m2, luego pooling |
| **Número de parámetros (recuadro)** | 17 | 467 | recuadro How many trainable parameters exist in the preceding example? | conv: m1 × m2 × 3 × 5 + 5 (5 sesgos, uno por mapa); con same la salida es n1 × n2 × 5; una capa FC equivalente necesitaría (n1 × n2 × 3) × (n1 × n2 × 5) = (n1 × n2)² × 3 × 5 pesos más n1 × n2 × 5 sesgos |
| Convolución 3D | 17 | 467 | idem | VoxNet (Maturana y Scherer 2015) |
| Capacidad y regularización | 17-18 | 467-468 | Regularizing an NN with L2 regularization and dropout | capacidad de la red; red grande + regularización; XOR necesita capa oculta |
| L2 en PyTorch | 18-19 | 468-469 | idem | `nn.BCELoss()`; `l2_lambda = 0.001`; penalización `l2_lambda * sum((p**2).sum() for p in layer.parameters())` sobre `nn.Conv2d(3, 5, kernel_size=5)` y `nn.Linear(10, 16)` |
| Weight decay vs L2 (recuadro) | 19 | 469 | recuadro Weight decay versus L2 regularization | `torch.optim.SGD(..., weight_decay=l2_lambda)`; equivalentes con SGD, no en general (Loshchilov y Hutter 2019, AdamW) |
| **Dropout: definición** | 19 | 469 | idem | Srivastava et al. 2014; en entrenamiento se apaga al azar una fracción de unidades ocultas con probabilidad p_drop (p_keep = 1 − p_drop); típico p = 0.5; obliga a una representación redundante |
| Dropout en entrenamiento vs inferencia, **inverse dropout** | 20 | 470 | idem | Figure 14.10 (p = 0.5); en inferencia todas activas; para igualar escalas se reescala; PyTorch escala durante el entrenamiento (duplica con p = 0.5): inverse dropout |
| Dropout como ensemble | 20-21 | 470-471 | idem | modelo distinto en cada minilote; M = 2^h modelos (h = número de unidades ocultas) con pesos compartidos |
| Media geométrica y factor 1/(1 − p) | 21 | 471 | idem | p_Ensemble = [Π_{j=1}^{M} p^{(i)}]^{1/M} (ver erratas); se aproxima escalando por 1/(1 − p); exacto para modelos lineales |
| **Funciones de pérdida para clasificación** | 21 | 471 | Loss functions for classification | sigmoide (binario) y softmax (multiclase) en la salida; sin ellas el modelo da **logits**; binary cross-entropy (una salida) y categorical cross-entropy (multiclase, etiquetas enteras como y = 2) |
| Tabla de pérdidas de PyTorch | 22 | 472 | idem | Figure 14.11: `BCELoss` (probabilidad, y_pred 0.69) o `BCEWithLogitsLoss` (logit 0.8); `NLLLoss` (y_pred 0.30, 0.15, 0.55) o `CrossEntropyLoss` (logits 1.5, 0.8, 2.1), y_true = 2; con logits es más estable numéricamente; `NLLLoss` recibe log-probabilidades |
| Código BCE | 22 | 472 | idem | logit 0.8, sigmoide 0.69, objetivo 1.0: BCE = 0.3711 con las dos funciones (verificado: −log σ(0.8) = 0.3711) |
| Código CCE | 23 | 473 | idem | logits [[1.5, 0.8, 2.1]], objetivo 2: CCE = 0.5996 con `CrossEntropyLoss(logits)` y con `NLLLoss(torch.log(probas))` (verificado: softmax = 0.301, 0.150, 0.549; −log 0.549 = 0.5996); ver erratas de las etiquetas impresas |
| Cross-entropy categórica para binario | 23 | 473 | idem | dos salidas con softmax en vez de una con sigmoide |
| **Arquitectura de la CNN para MNIST** | 23-24 | 473-474 | The multilayer CNN architecture | entrada 28×28 gris; Conv 5×5 con 32 mapas → P_{2×2} → Conv 5×5 con 64 mapas → P_{2×2} → FC 1024 → FC 10 softmax; Figure 14.12; tamaños: [b×28×28×1] → [b×28×28×32] → [b×14×14×32] → [b×14×14×64] → [b×7×7×64] → [b×1024] → [b×10] (escritos en orden NHWC, ver erratas) |
| Datos MNIST | 24-25 | 474-475 | Loading and preprocessing the data | `transforms.ToTensor()` (valores en [0, 1]); validación = primeros 10 000 de train, train = resto (50 000); `DataLoader` con `batch_size = 64` |
| nn.Conv2d, MaxPool2d, AvgPool2d, Dropout | 26 | 476 | Configuring CNN layers in PyTorch | `nn.Conv2d` pide canales de salida y tamaño de núcleo; stride por defecto 1; padding implícito |
| **Formato NCHW** | 26 | 476 | idem | N = imágenes del lote, C = canales, H y W = alto y ancho; `Conv2d` espera NCHW (TensorFlow usa NHWC); entrada de 4 dimensiones; `Dropout(p)` con `model.train()` / `model.eval()` |
| Construir la CNN | 27 | 477 | Constructing a CNN in PyTorch | `nn.Conv2d(in_channels=1, out_channels=32, kernel_size=5, padding=2)`, ReLU, `nn.MaxPool2d(kernel_size=2)`, `nn.Conv2d(32, 64, 5, padding=2)`, ReLU, MaxPool; se repite o = ⌊(n + 2p − m)/s⌋ + 1 y p = 2 da same con m = 5; MaxPool2d con stride por defecto = tamaño del núcleo, divide por 2 |
| Forma de salida y aplanado | 28 | 478 | idem | `torch.ones((4, 1, 28, 28))` → `torch.Size([4, 64, 7, 7])`; `nn.Flatten()` → `[4, 3136]` (= 64 × 7 × 7); `nn.Linear(3136, 1024)`, ReLU, `nn.Dropout(p=0.5)`, `nn.Linear(1024, 10)`; softmax ya está dentro de `CrossEntropyLoss`; `Adam(lr=0.001)` |
| Adam (recuadro) | 29 | 479 | recuadro The Adam optimizer | inspirado en RMSProp y AdaGrad; Kingma y Ba 2014 |
| Función train | 29-30 | 479-480 | idem | bucle por épocas con `model.train()` y `model.eval()` + `torch.no_grad()`; pérdida ponderada por tamaño de lote; exactitud con `argmax` |
| Resultados MNIST | 30-31 | 480-481 | idem | 20 épocas: época 1 0.9503/0.9802, época 9 0.9968/0.9892, época 20 0.9979/0.9907; Figure 14.13 (curvas); test 0.9914 (ver erratas); el cap. 13 daba ≈ 95 % con capas FC |
| Predicciones de 12 dígitos | 31-32 | 481-482 | idem | `img.unsqueeze(0).unsqueeze(1)` para formar [1, 1, 28, 28]; Figure 14.14, todas correctas |
| CelebA | 32-33 | 482-483 | Smile classification from face images using a CNN | 202 599 imágenes, 40 atributos binarios; se usan 16 000 de train; tamaños 162 770 / 19 867 / 19 962; recuadro de descarga alternativa |
| **Data augmentation** | 33-35 | 483-485 | Image transformation and data augmentation | recortar a una caja, voltear horizontal, contraste (factor 2), brillo (factor 1.3), recorte central al 70 % y reescalar a (218, 178); Figure 14.15 |
| Origen de coordenadas y transformaciones al azar | 36-37 | 486-487 | idem | caja x = 20, y = 50, 128×128; origen (0, 0) arriba a la izquierda; `RandomCrop([178, 178])`, `RandomHorizontalFlip()`, `resize` a 128×128; Figure 14.16 |
| Pipelines de entrenamiento y evaluación | 38-39 | 488-489 | idem | `get_smile = lambda attr: attr[31]`; train: RandomCrop 178, RandomHorizontalFlip, Resize 64×64, ToTensor; valid/test: CenterCrop 178, Resize 64×64; Figure 14.17 (cinco épocas); `img.permute(1, 2, 0)` para pasar de CHW a HWC al dibujar |
| Subconjuntos y loaders | 40 | 490 | idem | 16 000 train, 1 000 valid; `batch_size = 32` |
| **CNN para sonrisas** | 40-41 | 490-491 | Training a CNN smile classifier | entrada 3×64×64; cuatro conv 3×3 con padding 1 (same) a 32, 64, 128, 256 mapas; MaxPool 2×2 tras las tres primeras; Dropout(0.5) tras las dos primeras; `torch.ones((4, 3, 64, 64))` → `[4, 256, 8, 8]` |
| **Global average pooling** | 42-43 | 492-493 | idem | aplanar daría 8 × 8 × 256 = 16 384 entradas; GAP promedia cada mapa → 256; caso particular de average pooling con tamaño = mapa; Figure 14.18 (b×8×64×64 → b×8, o b×8×1×1 sin squeeze); `nn.AvgPool2d(kernel_size=8)` + `Flatten` → `[4, 256]`; `nn.Linear(256, 1)` + `nn.Sigmoid()` → `[4, 1]`; impresión del modelo completo |
| Pérdida y entrenamiento | 43-44 | 493-494 | idem | `nn.BCELoss()` (salida con sigmoide), Adam lr = 0.001; `pred = model(x_batch)[:, 0]`; acierto con `pred >= 0.5` |
| Resultados CelebA | 45-46 | 495-496 | idem | 30 épocas: 0.6286/0.6540, época 15 0.8544/0.8700, época 30 0.8739/0.8710; Figure 14.19; test 0.8446 |
| Probabilidades de sonrisa | 46-47 | 496-497 | idem | `pred * 100`; Figure 14.20 (10 ejemplos, todos correctos); con todo el train se superaría el 90 % |
| Summary | 47-48 | 497-498 | Summary | convolución 1D y 2D, pooling, CNN en MNIST y CelebA, data augmentation; siguiente: RNN |

Observaciones para citar:
- Toda la convolución 1D con números está en las pp. 454-459 (PDF 4-9): definición p. 454, padding y fórmula práctica p. 455, ejemplo con stride 2 y
  correlación cruzada p. 456, modos de padding p. 457, tamaño de salida p. 458, código p. 459.
- La convolución 2D está en las pp. 459-462: definición p. 459, ejemplo con giro p. 460, resultado Y = [[4.6, 1.6], [7.5, 2.9]] en la Figure 14.7 (p. 461),
  código y comparación con SciPy pp. 461-462.
- La correlación cruzada contra convolución tiene dos lugares: el recuadro de la p. 456 (definición y "PyTorch la llama convolución") y el recuadro de
  la p. 462 ("the filter matrix is actually not rotated in most tools like PyTorch").
- Varios canales: entrada p. 464, suma por canal p. 465-466, salida con Cout y Figure 14.9 p. 466, conteo de parámetros p. 467.
- Los tensores de imagen: CHW de torchvision p. 465, NCHW de `Conv2d` p. 476, `torch.ones((4, 1, 28, 28))` p. 478, `(4, 3, 64, 64)` p. 491,
  `permute(1, 2, 0)` p. 489.
- Las cuentas de parámetros de la CNN de MNIST no están en el libro. Calculadas aquí: conv1 5·5·1·32 + 32 = 832; conv2 5·5·32·64 + 64 = 51 264;
  fc1 3136·1024 + 1024 = 3 212 288; fc2 1024·10 + 10 = 10 250. Casi todos los parámetros están en la primera capa densa.

## Búsqueda rápida por concepto

| Concepto | Mejores páginas impresas (PDF) | Qué citar |
|---|---|---|
| Convolución discreta 1D | 454-456 (4-6), 459 (9) | definición p. 454; padding y giro p. 455; ejemplo x = [3 2 1 7 1 2 5 4] con stride 2 → [7, 9, 8] p. 456; código y `np.convolve` p. 459 |
| Convolución discreta 2D | 459-462 (9-12) | definición p. 459; Figures 14.5-14.6 p. 460; giro `W[::-1, ::-1]` y Y = [[4.6, 1.6], [7.5, 2.9]] p. 461; código y `convolve2d` p. 462 |
| Tamaño de la salida | 458 (8), 477 (27) | o = ⌊(n + 2p − m)/s⌋ + 1 con los ejemplos 10 y 6 (p. 458); same con m = 5, p = 2 en PyTorch (p. 477) |
| Correlación cruzada contra convolución (giro del núcleo) | 455-456 (5-6), 461-462 (11-12) | giro en p. 455; recuadro con y[i] = Σ x[i + k] w[k] y "PyTorch implementa correlación" p. 456; giro 2D no es transpuesta p. 461; "not rotated in most tools like PyTorch" p. 462 |
| Padding (full, same, valid) | 455 (5), 457-458 (7-8) | zero-padding Figure 14.2 p. 455; tres modos, p = m − 1, Figure 14.4 p. 457; desventajas de valid y full p. 458 |
| Stride | 456 (6), 458 (8), 464 (14) | primer stride s = 2 p. 456; en la fórmula p. 458; conv con stride 2 en vez de pooling p. 464 |
| Pooling (max, average) | 453 (3), 463-464 (13-14), 477 (27), 492 (42) | sin parámetros p. 453; Figure 14.8 y X₁, X₂ con el mismo max-pooling p. 463; solapamiento p. 464; MaxPool2d divide por 2 p. 477; global average pooling p. 492 |
| Varios canales de entrada y salida | 464-466 (14-16) | Cin, RGB = 3 p. 464; suma por canal p. 465-466; Cout y Figure 14.9 p. 466 |
| Número de parámetros | 453 (3), 467 (17) | parameter sharing y sparse connectivity p. 453; m1 × m2 × 3 × 5 + 5 contra (n1 × n2)² × 3 × 5 p. 467 |
| Dropout | 469-471 (19-21), 476 (26), 478 (28) | definición p. 469; inverse dropout y Figure 14.10 p. 470; ensemble y 1/(1 − p) p. 471; train/eval p. 476; `nn.Dropout(p=0.5)` p. 478 |
| Batch normalization | no aparece | el capítulo no la trata |
| Regularización L2 y weight decay | 468-469 (18-19) | penalización a mano p. 468; `weight_decay` p. 469 |
| Funciones de pérdida | 471-473 (21-23), 478 (28), 493 (43) | logits contra probabilidades p. 471; Figure 14.11 y BCE 0.3711 p. 472; CCE 0.5996 p. 473; `CrossEntropyLoss` p. 478; `BCELoss` con sigmoide p. 493 |
| Tensores de imágenes (N×C×H×W) | 465 (15), 476 (26), 478 (28), 491 (41) | Tensor[channels, height, width] p. 465; formato NCHW p. 476; `(4, 1, 28, 28)` → `[4, 64, 7, 7]` → `[4, 3136]` p. 478; `(4, 3, 64, 64)` → `[4, 256, 8, 8]` p. 491 |
| Data augmentation | 483-489 (33-39) | transformaciones deterministas p. 484-485; al azar p. 486-487; pipelines p. 488 |

## Lo que el capítulo no trae

- **Batch normalization no aparece** en este capítulo (no hay `BatchNorm2d` ni la palabra "normalization" aplicada a capas).
- No da la fórmula del padding same: solo dice que p "se calcula según el tamaño del filtro" (p. 457). Para stride 1 y m impar es p = (m − 1)/2
  (el ejemplo m = 5, p = 2 de la p. 458 y la p. 477 lo ilustran).
- La fórmula del tamaño de salida solo se da en 1D (p. 458); para 2D se dice que todo se extiende "a ambas dimensiones de forma independiente" (p. 460).
- No da fórmula del tamaño de salida del pooling: solo que 2×2 con stride 2 divide por la mitad (p. 477).
- No hay `nn.Conv1d` en PyTorch ni dilatación; la convolución 1D se muestra solo con NumPy.
- El libro no comprueba con `nn.Conv2d` que PyTorch hace correlación cruzada: lo afirma (pp. 456 y 462).
- El dropout no tiene ejemplo numérico de activaciones antes y después del escalado.
- No muestra la fórmula de la entropía cruzada (binaria ni categórica); solo los nombres de las clases de `torch.nn` y sus valores.

## Erratas e inconsistencias

- **p. 455 (PDF 5)**: la fórmula práctica dice y[i] = Σ_{k=0}^{m−1} x^p[i + m − k] w[k]. Tiene un desfase de uno: con k = 0 toma x^p[i + m], que
  queda fuera de la ventana x[i: i + m] que el mismo texto usa a continuación. Lo coherente con el producto punto x[i: i + m] · w^r (y con el código
  de la p. 459) es x^p[i + m − 1 − k]. Comprobado: el código `conv1d` reproduce `np.convolve`, y suma Σⱼ x[i + j] w[m − 1 − j].
- **p. 461-462 (PDF 11-12)**: el bucle de `conv2d` usa `range(0, int((n_pad - m)/s) + 1, s)`: divide por el stride en el límite **y además** avanza
  de a s. Con s = 1 no se nota (el ejemplo de la p. 462 sale bien), pero con el ejemplo de la Figure 14.6 (p = (1, 1), s = (2, 2)) la función devuelve
  [[4.6]] (1×1) en vez del Y 2×2 = [[4.6, 1.6], [7.5, 2.9]] de la Figure 14.7 (comprobado). La `conv1d` de la p. 459 sí está bien
  (`range(0, n_pad - m + 1, s)`). Lo correcto es `range(0, n_pad - m + 1, s)` en las dos dimensiones.
- **p. 471 (PDF 21)**: la media geométrica escribe Π_{j=1}^{M} p^{(i)}: el índice del producto (j) no coincide con el del factor (i). Es Π_{i=1}^{M} p^{(i)}.
- **p. 473 (PDF 23)**: en el código de la entropía cruzada categórica las etiquetas de las salidas están cruzadas: el `print` de `'CCE (w Logits)'`
  muestra "CCE (w Probas): 0.5996" y viceversa. No cambia el número (ambas dan 0.5996).
- **pp. 473-474 (PDF 23-24)**: la entrada se describe como batchsize×28×28×1 y todas las dimensiones de la lista en orden NHWC (canales al final),
  pero PyTorch usa NCHW, como dice el propio libro en la p. 476 y como muestra el código de la p. 478 (`(4, 1, 28, 28)` → `[4, 64, 7, 7]`).
  Es un resto de la edición con TensorFlow. Lo mismo en la p. 466: el núcleo se escribe width × height × Cin × Cout, mientras que el peso de
  `nn.Conv2d` tiene forma Cout × Cin × H × W.
- **p. 477 (PDF 27)**: "We obtain p = 2 in order to achieve o = i": la entrada se llamó n en la fórmula; debe decir o = n.
- **p. 481 (PDF 31)**: imprime `Test accuracy: 0.9914` y en la línea siguiente dice "The CNN model achieves an accuracy of 99.07 percent".
  0.9907 es la exactitud de validación de la época 20 (p. 480), no la de test.
- **p. 478 (PDF 28)**: "sofmax" por "softmax"; **p. 484 (PDF 34)**: el título de la figura en el código dice "Adjust constrast"; **p. 483 (PDF 33)**:
  la salida dice "Validation: 19867" aunque el `print` escribe "Validation set:". Detalles sin consecuencia.
- **p. 466 (PDF 16)**: el primer bloque dice "a bias value b" y luego suma b_C; es el mismo sesgo con otro nombre.
- **Versiones**: PyTorch no está instalado en esta máquina, así que los resultados de entrenamiento (pp. 480, 481, 495, 496) y las formas de
  `torch` no se comprobaron. Sí se comprobaron con NumPy y SciPy todos los ejemplos numéricos de convolución, pooling y pérdidas.
