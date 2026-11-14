# Mapa de citas: Raschka, Liu y Mirjalili, cap. 11 "Implementing a Multilayer Artificial Neural Network from Scratch"

Archivo: `/Users/franciscocastillo/brain/02-Biblioteca/Machine-Learning/PyTorch-Scikit-Learn/Cap11 - Implementing a Multilayer Artificial Neural Network from Scratch.pdf` (34 páginas PDF).
Correspondencia verificada: página impresa = página PDF + 334, es decir, PDF N = impresa − 334. Comprobado en las 33 páginas con número en la cabecera
(PDF 2 = p. 336, PDF 17 = p. 351, PDF 34 = p. 368). La PDF 1 no lleva número impreso (abre el capítulo con un "11"); por el desfase le corresponde la 335.
Cada página se leyó con `pdftotext -layout`; las fórmulas de las pp. 338, 339, 340, 341, 361, 365 y 366 se revisaron además como imagen, porque
`pdftotext` rompe los glifos matemáticos.
Edición: Machine Learning with PyTorch and Scikit-Learn (Packt, 2022). Datos del capítulo: MNIST con `fetch_openml('mnist_784')`, 70 000 imágenes de
28 × 28 = 784 píxeles, escaladas a [−1, 1]; partición 55 000 / 5 000 / 10 000 (entrenamiento, validación, prueba). Red 784-50-10, sigmoide en la capa
oculta y en la salida, pérdida MSE sobre one-hot, mini-lotes de 100, 50 épocas, tasa 0.1.

Convención de dimensiones (distinta de Nield): cada **fila** de X es un ejemplo (n × m); W^(h) es d × m (d neuronas ocultas, m entradas) y se usa
transpuesta: Z^(h) = X^(in) W^(h)T + b^(h), de n × d. W^(out) es t × d (t salidas); Z^(out) = A^(h) W^(out)T + b^(out), de n × t.

| Tema | PDF | Impresa | Sección | Notas |
|---|---|---|---|---|
| Introducción | 1 | 335 | apertura | deep learning = entrenar redes con muchas capas; temas: redes multicapa, retropropagación desde cero, clasificar imágenes |
| Historia | 2 | 336 | Modeling complex functions with artificial neural networks | McCulloch y Pitts 1943; perceptrón de Rosenblatt en los 50; se perdió el interés porque no se sabía entrenar varias capas; retropropagación de Rumelhart, Hinton y Williams (Nature, 1986); inviernos de la IA |
| Repaso de Adaline | 3 | 337 | Single-layer neural network recap | Figure 11.1 (Adaline); regla w := w + Δw, b := b + Δb con Δwⱼ = −η ∂L/∂wⱼ y Δb = −η ∂L/∂b; paso en dirección opuesta al gradiente; pérdida MSE; tasa de aprendizaje η |
| Gradiente de la MSE en Adaline | 4 | 338 | idem | ∂L/∂wⱼ = ∂/∂wⱼ (1/n) Σᵢ (y⁽ⁱ⁾ − a⁽ⁱ⁾)² = −(2/n) Σᵢ (y⁽ⁱ⁾ − a⁽ⁱ⁾) xⱼ⁽ⁱ⁾; activación identidad σ(z) = z = a; z = Σⱼ wⱼxⱼ + b = wᵀx + b; umbral ŷ = 1 si z ≥ 0 |
| SGD y mini-lotes (repaso) | 4 | 338 | idem | SGD aproxima la pérdida con un ejemplo (online) o un subconjunto (mini-batch); actualiza más seguido; su ruido ayuda a escapar de mínimos locales en pérdidas no convexas; recuadro: Adaline se llama "de una capa" aunque tenga entrada y salida |
| Arquitectura MLP | 4-5 | 338-339 | Introducing the multilayer neural network architecture | MLP = red feedforward totalmente conectada; Figure 11.2 (p. 339): entrada x^(in), capa oculta a^(h) con pesos w^(h), salida a^(out) con w^(out), sesgos b^(h) y b^(out); más de una capa oculta = red profunda; "dos capas" sin contar la entrada |
| Gradiente que se desvanece (recuadro) | 5 | 339 | recuadro Adding additional hidden layers | número de capas y unidades como hiperparámetros; "los gradientes de la pérdida se vuelven cada vez más pequeños a medida que se agregan capas": vanishing gradient; por eso existen algoritmos especiales (deep learning) |
| Notación de índices | 6 | 340 | idem | a_i^(l) unidad i de la capa l; superíndices in, h, out; b^(h) tiene d elementos; w_{j,k}^(l+1) conecta la unidad k de la capa l con la j de la capa l + 1; W^(h) de d × m |
| One-hot y uno contra todos | 6 | 340 | idem | varias salidas generalizan OvA; Iris: 0 → [1, 0, 0], 1 → [0, 1, 0], 2 → [0, 0, 1] |
| Los tres pasos del aprendizaje | 6-7 | 340-341 | Activating a neural network via forward propagation | 1) propagar hacia adelante, 2) calcular la pérdida, 3) retropropagar, derivar respecto de cada peso y sesgo, actualizar; repetir por épocas; predecir con umbral |
| Una neurona oculta | 7 | 341 | idem | z₁^(h) = x₁^(in) w₁,₁^(h) + x₂^(in) w₁,₂^(h) + ... + xₘ^(in) w₁,ₘ^(h) (ver erratas: falta el sesgo); a₁^(h) = σ(z₁^(h)); la activación tiene que ser derivable; hace falta no linealidad |
| Sigmoide | 7 | 341 | idem | σ(z) = 1/(1 + e^(−z)); curva en S entre 0 y 1, corta el eje y en z = 0; Figure 11.3 (z de −8 a 8) |
| Feedforward y "perceptrón" | 8 | 342 | idem | feedforward = sin ciclos (contra las RNN); "multilayer perceptron" confunde: las neuronas son sigmoides, no perceptrones; cada neurona es como una regresión logística |
| Forma matricial y dimensiones | 8 | 342 | idem | z^(h) = x^(in) W^(h)T + b^(h): x de 1 × m, W^(h) de d × m, W^(h)T de m × d, z^(h) de 1 × d; para n ejemplos Z^(h) = X^(in) W^(h)T + b^(h), X de n × m, Z^(h) y A^(h) de n × d; Z^(out) = A^(h) W^(out)T + b^(out), W^(out) de t × d, Z^(out) y A^(out) de n × t; **la página que dice la dimensión de cada matriz** |
| MNIST: recursos y datos | 9 | 343 | Classifying handwritten digits | recuadro con lecturas sobre retropropagación (Goodfellow cap. 6, Bishop 2006, curso de Raschka); MNIST de LeCun et al. 1998; cuatro archivos, 60 000 + 10 000 |
| Carga y escala | 10 | 344 | Obtaining and preparing the MNIST dataset | `fetch_openml('mnist_784', version=1, return_X_y=True)`; X de (70000, 784), y de (70000,); `X = ((X / 255.) - .5) * 2` lleva a [−1, 1]: el gradiente es más estable |
| Ver los dígitos | 11-12 | 345-346 | idem | Figure 11.4 un dígito por clase (345); Figure 11.5 25 sietes distintos (346) |
| Partición | 12 | 346 | idem | `train_test_split(..., test_size=10000, random_state=123, stratify=y)` y luego `test_size=5000`: 55 000 / 5 000 / 10 000 |
| sigmoid e int_to_onehot | 13 | 347 | Implementing a multilayer perceptron | código en GitHub `rasbt/machine-learning-book`; `sigmoid(z)`; `int_to_onehot(y, num_labels)` con un bucle |
| NeuralNetMLP: __init__ y forward | 14 | 348 | idem | **inicialización**: `rng.normal(loc=0.0, scale=0.1, size=(num_hidden, num_features))`, sesgos `np.zeros`; lo mismo para la salida con `(num_classes, num_hidden)`; `forward`: `z_h = np.dot(x, self.weight_h.T) + self.bias_h`, `a_h = sigmoid(z_h)`, `z_out = np.dot(a_h, self.weight_out.T) + self.bias_out`; comentarios con las dimensiones [n_examples, n_hidden] y [n_examples, n_classes] |
| NeuralNetMLP: backward (salida) | 15 | 349 | idem | `d_loss__d_a_out = 2.*(a_out - y_onehot) / y.shape[0]`; `d_a_out__d_z_out = a_out * (1. - a_out)`; `delta_out` = producto elemento a elemento; `d_loss__dw_out = np.dot(delta_out.T, a_h)` de [n_classes, n_hidden]; `d_loss__db_out = np.sum(delta_out, axis=0)` |
| NeuralNetMLP: backward (oculta) | 16 | 350 | idem | `d_loss__a_h = np.dot(delta_out, self.weight_out)` de [n_examples, n_hidden]; `d_a_h__d_z_h = a_h * (1. - a_h)`; `d_loss__d_w_h = np.dot((d_loss__a_h * d_a_h__d_z_h).T, x)` de [n_hidden, n_features]; sesgo con `np.sum(..., axis=0)`; la pérdida es la MSE de Adaline; la entropía cruzada multiclase vendrá después; API forward/backward parecida a PyTorch |
| Instanciar 784-50-10 | 17 | 351 | idem | `NeuralNetMLP(num_features=28*28, num_hidden=50, num_classes=10)`; sigmoide en oculta y salida; Figure 11.6 (arquitectura) |
| Generador de mini-lotes | 18 | 352 | Coding the neural network training loop | `num_epochs = 50`, `minibatch_size = 100`; `minibatch_generator` baraja índices con `np.random.shuffle` y corta en trozos de 100 (descarta el último incompleto); prueba: (100, 784) y (100,) |
| MSE y exactitud iniciales | 19 | 353 | idem | `mse_loss` = `np.mean((onehot_targets - probas)**2)`; `accuracy`; sin entrenar: MSE de validación 0.3 y exactitud 9.4 %, lo esperable al azar con 10 clases; clase predicha con `np.argmax(probas, axis=1)` |
| MSE y exactitud por mini-lotes | 20 | 354 | idem | `compute_mse_and_acc` recorre mini-lotes para ahorrar memoria; da 0.3 y 9.4 %; diferencia de redondeo 0.27 contra 0.28 (ver erratas) |
| Bucle de entrenamiento | 20-21 | 354-355 | idem | `train(model, X_train, y_train, X_valid, y_valid, num_epochs, learning_rate=0.1)`: por época, por mini-lote: forward, backward, `model.weight_h -= learning_rate * d_loss__d_w_h` (y los otros tres); registro por época |
| Regla de actualización y corrida | 22 | 356 | idem | wⱼ := wⱼ − η ∂L/∂wⱼ; `np.random.seed(123)`, 50 épocas, tasa 0.1; época 1: MSE 0.05, 76.17 % / 76.02 %; época 50: MSE 0.01, 95.59 % / 94.74 %; comparar entrenamiento y validación; parar temprano |
| Curvas | 23-24 | 357-358 | Evaluating the neural network performance | Figure 11.7 MSE por época (357): baja fuerte en las primeras 10; Figure 11.8 exactitudes (358): se separan desde la época 25, sobreajuste leve; recuadro: L2 y dropout (cap. 14); prueba 94.51 % (358) |
| Más trucos | 24-25 | 358-359 | idem | número de unidades, tasa; en el cap. 14: tasas adaptativas, optimizadores basados en SGD más sofisticados, batch normalization, dropout (359); conexiones residuales, schedulers, pérdidas auxiliares (359) |
| Dígitos mal clasificados | 25-26 | 359-360 | idem | código con los primeros 25 errores de 1000 de prueba (359); Figure 11.9 (360): sietes con raya horizontal, ejemplos 19 y 20 |
| La pérdida MSE con t salidas | 26-27 | 360-361 | Computing the loss function | MSE porque deriva más fácil; la entropía cruzada multiclase es más común (360); ejemplo a^(out) = [0.1, 0.9, ..., 0.3] contra one-hot (361); L(W, b) = (1/n) Σᵢ (1/t) Σⱼ (yⱼ^[i] − aⱼ^(out)[i])² (361) |
| W como tensor | 27-28 | 361-362 | idem | W reúne W^(h) y W^(out); Figure 11.10 (361): "tensor tridimensional" (capas × filas × columnas); en general W^(h) y W^(out) no tienen la misma forma (362) |
| Retropropagación: idea | 28 | 362 | Developing your understanding of backpropagation | Rumelhart et al. 1986; Schmidhuber "Who invented backpropagation?"; forma eficiente de calcular derivadas parciales de una pérdida no convexa; la superficie tiene "muchos baches" (mínimos locales) |
| Regla de la cadena | 28 | 362 | idem | d/dx[f(g(x))] = (df/dg)(dg/dx); composición de cinco funciones F(x) = f(g(h(u(v(x))))): dF/dx = (df/dg)(dg/dh)(dh/du)(du/dv)(dv/dx) |
| Diferenciación automática, modo inverso | 29 | 363 | idem | Baydin y Pearlmutter 2014; modo hacia adelante y hacia atrás; retropropagación = modo inverso; de derecha a izquierda: matriz por vector, más barato que matriz por matriz (jacobianos); recuadro con repaso de cálculo (apéndice D de Raschka) |
| Las cuatro ecuaciones de forward | 29 | 363 | Training neural networks via backpropagation | Z^(h) = X^(in) W^(h)T + b^(h); A^(h) = σ(Z^(h)); Z^(out) = A^(h) W^(out)T + b^(out); A^(out) = σ(Z^(out)) |
| Forward y backward en dibujo | 30 | 364 | idem | Figure 11.11 (2 entradas, 3 ocultas, 2 salidas, flechas hacia adelante); Figure 11.12 (camino de vuelta en negrita); ∂L/∂w₁,₁^(out) = (∂L/∂a₁^(out))(∂a₁^(out)/∂z₁^(out))(∂z₁^(out)/∂w₁,₁^(out)); se omite el promedio sobre el mini-lote |
| Las tres derivadas de un peso de salida | 31 | 365 | idem | ∂L/∂a₁^(out) = 2(a₁^(out) − y); derivada de la sigmoide = a₁^(out)(1 − a₁^(out)) (ver erratas); ∂z₁^(out)/∂w₁,₁^(out) = a₁^(h); juntas: 2(a₁^(out) − y) · a₁^(out)(1 − a₁^(out)) · a₁^(h); actualización w := w − η ∂L/∂w; el código vectorizado al lado |
| δ^(out) y peso oculto con dos caminos | 32 | 366 | idem | δ₁^(out) = (∂L/∂a₁^(out))(∂a₁^(out)/∂z₁^(out)), se reutiliza; Figure 11.13: w₁,₁^(h) llega a las dos salidas, **regla de la cadena multivariable: suma de dos caminos**; fórmula expandida con z y versión con δ₁^(out) + δ₂^(out) (ver erratas) |
| Derivada de la sigmoide oculta | 33 | 367 | idem | ∂a₁^(h)/∂z₁^(h) = a₁^(h)(1 − a₁^(h)); el resto "queda como ejercicio" |
| Convergencia, online contra mini-lote | 33 | 367 | About convergence in neural networks | online k = 1; mini-lote 1 < k < n aprovecha la vectorización; analogía de la encuesta electoral |
| Mínimos locales | 33 | 367 | idem | Figure 11.14: superficie de pérdida con mínimos locales para un solo peso; tasa alta escapa de mínimos locales pero puede pasarse del global; arrancar al azar da una solución "desesperadamente equivocada" |
| Cierre: PyTorch y MLPClassifier | 34 | 368 | A few last words about the neural network implementation | PyTorch (septiembre de 2016), GPU; scikit-learn `MLPClassifier`; recomiendan PyTorch para redes multicapa |
| Summary | 34 | 368 | Summary | del Adaline de una capa a la red multicapa; retropropagación desmitificada |

Observaciones para citar:
- Las dimensiones de cada matriz, en una sola página: p. 342 (PDF 8). En el código, los comentarios de la p. 348 (forward) y 349-350 (backward).
- La retropropagación con fórmulas está en las pp. 363-367; el código, en las 349-350. La p. 365 es la mejor para "un peso de salida" y la 366 para "un peso oculto suma varios caminos".
- La inicialización que usa el capítulo es normal con desviación 0.1 y sesgos en cero (p. 348). La discusión de por qué (Xavier) está en el cap. 13, p. 414.
- La pérdida es MSE en todo el capítulo; la entropía cruzada solo se nombra (pp. 350, 360). Está explicada en el cap. 14, pp. 471-473.

## Erratas e inconsistencias

- **p. 365 (PDF 31)**: la sigmoide aparece como 1/(1 + e^(z₁^(out))) en toda la línea de la derivada; falta el signo menos: 1/(1 + e^(−z)). El resultado final a(1 − a) sí es correcto. Revisado como imagen.
- **p. 366 (PDF 32)**: la fórmula expandida del peso oculto escribe el lado izquierdo como ∂L/∂w₁,₁^(out); es ∂L/∂w₁,₁^(h) (así lo dicen la Figure 11.13 y la fórmula siguiente).
- **p. 361 (PDF 27)**: dice que la imagen tiene etiqueta 2, pero el one-hot que muestra es [0, 1, ..., 0] y la activación más alta (0.9) está en la segunda posición: eso es la clase 1 con etiquetas desde 0 (como el Iris de la p. 340). Para la clase 2 el 1 iría en la tercera posición.
- **p. 361 (PDF 27)**: la derivada se escribe "∂/∂w_{j,l}^(l) = L(W, b)"; debería ser ∂L(W, b)/∂w_{j,k}^(l).
- **p. 354 (PDF 20), `compute_mse_and_acc`**: `mse = mse/i` divide por el índice del último mini-lote (49 con 50 lotes), no por el número de lotes (`i + 1`). Explica la "pequeña diferencia de redondeo" 0.27 contra 0.28 que menciona el texto: 50/49 ≈ 1.02. La exactitud sí se calcula bien.
- **p. 341 (PDF 7)**: z₁^(h) = x₁w₁,₁ + ... + xₘw₁,ₘ sin el sesgo b₁^(h); la forma matricial de la p. 342 sí lo incluye.
- **p. 349 (PDF 15) frente a p. 353 y 361**: el gradiente usa 2(a − y)/n, pero la pérdida que se reporta (`np.mean` sobre n × t valores, y la fórmula de la p. 361) también divide por t = 10. El gradiente que se aplica es t veces el de esa pérdida; equivale a multiplicar la tasa de aprendizaje por 10. No cambia el método, solo la escala.
- **p. 342 (PDF 8)**: dice "multiplicamos la transpuesta de W^(out) por A^(h)", pero el orden es A^(h) W^(out)T.
- **p. 356 (PDF 22)**: dice que se registran pérdidas y exactitudes "en entrenamiento y prueba"; el código usa validación.
- **p. 367 (PDF 33)**: "However, we can update the weights much faster than in regular gradient descent" contradice el "However"; quiere decir "además".
- Matiz: p. 361 llama "tensor tridimensional" a W, pero W^(h) y W^(out) tienen formas distintas (lo reconoce en la p. 362); no se pueden apilar en un solo arreglo.
- No se ejecutó el código (descarga MNIST); las cifras de entrenamiento no se reprodujeron.

## No aparece

Perceptrón de Rosenblatt explicado (solo se nombra, p. 336) y el problema XOR (está en el cap. 13, p. 419); tanh, ReLU y softmax (están en el cap. 12, pp. 400-406); entropía cruzada con fórmula; el término δ^(h) y la fórmula general de la retropropagación por capas en forma matricial (solo el caso de un peso, pp. 365-367); gradiente que explota; momentum, RMSProp, Adam; inicialización Xavier o He; broadcasting (el sesgo se suma por broadcasting en `np.dot(x, W.T) + b`, p. 348, sin decirlo).

## Caps. 12 y 13 del mismo libro (solo lo útil para estos conceptos)

Archivos en la misma carpeta: `Cap12 - Parallelizing Neural Network Training with PyTorch.pdf` (40 páginas PDF) y `Cap13 - Going Deeper – The Mechanics of PyTorch.pdf` (42 páginas PDF).
Correspondencias verificadas en todas las páginas con número: cap. 12, impresa = PDF + 368 (PDF 2 = p. 370, PDF 38 = p. 406); cap. 13, impresa = PDF + 408 (PDF 3 = p. 411, PDF 31 = p. 439).
Leídos con `pdftotext -layout`; la Figure 12.11 y la p. 392 se revisaron como imagen. Libro escrito para PyTorch 1.9.0 (cap. 12, p. 372). PyTorch no está instalado en esta máquina: el código no se ejecutó.

| Tema | Cap. | PDF | Impresa | Notas |
|---|---|---|---|---|
| Crear tensores | 12 | 5-6 | 373-374 | `torch.tensor`, `torch.from_numpy` (shape=(3,), dtype int32); `torch.ones(2, 3).shape` = torch.Size([2, 3]); `torch.rand(2,3)` |
| Tipo y forma de un tensor | 12 | 6 | 374 | `.to(torch.int64)`; rango = número de dimensiones; `torch.transpose(t, 0, 1)` (3, 5) → (5, 3); `reshape` 30 → (5, 6); `torch.squeeze(t, 2)` (1, 2, 1, 4, 1) → (1, 2, 4, 1) |
| Operaciones con tensores | 12 | 7-8 | 375-376 | `torch.multiply` elemento a elemento; `torch.mean(t1, axis=0)`; `torch.matmul(t1, torch.transpose(t2, 0, 1))` da 5 × 5 y t1ᵀ t2 da 2 × 2 (forma del producto según qué se transpone); `torch.linalg.norm(t1, ord=2, dim=1)` |
| Split, stack, cat | 12 | 8-9 | 376-377 | `torch.chunk`, `torch.split`, `torch.cat` (3 + 2 → 5), `torch.stack(axis=1)` (dos de 3 → 3 × 2) |
| Lotes con DataLoader | 12 | 10-11 | 378-379 | se usa "batch" por "mini-batch" para seguir a PyTorch (378); `DataLoader(t, batch_size=3, drop_last=False)` (379) |
| Barajar, lotes y épocas | 12 | 12-13 | 380-381 | `DataLoader(..., batch_size=2, shuffle=True)`: baraja sin romper el par x-y; iterar por épocas |
| SGD a mano con autograd | 12 | 23-25 | 391-393 | regresión lineal de juguete, `batch_size = 1` (391); `weight.requires_grad_()`, `loss.backward()`, `weight -= weight.grad * learning_rate`, `grad.zero_()` (392; ver erratas); pérdidas que oscilan por época y parámetros 2.6698, 4.8796 (393) |
| SGD con torch.optim | 12 | 26-27 | 394-395 | `nn.MSELoss(reduction='mean')`, `nn.Linear(1, 1)`, `torch.optim.SGD(model.parameters(), lr=learning_rate)` (394); los cinco pasos: predecir, pérdida, `backward()`, `optimizer.step()`, `optimizer.zero_grad()` (395) |
| MLP para Iris con Adam | 12 | 28-30 | 396-398 | `nn.Linear(4, 16)`, sigmoide, `nn.Linear(16, 3)` (396); `nn.CrossEntropyLoss()` y `torch.optim.Adam(..., lr=0.001)`; recuadro: Adam "se explica en el cap. 14" (397); 98 % en prueba (398) |
| Por qué no activaciones lineales; saturación de la sigmoide | 12 | 32 | 400 | cualquier función derivable sirve; suma de lineales es lineal; con entrada muy negativa la sigmoide da casi 0 y aprende lento; por eso tanh en capas ocultas |
| Logística con números | 12 | 32-33 | 400-401 | z = wᵀx con x₀ = 1 como sesgo; X = [1, 1.4, 2.5], w = [0.4, 0.3, 0.5] → P(y=1\|x) = 0.888 (401) |
| Varias logísticas no suman 1 | 12 | 33-34 | 401-402 | W de 3 × 4, A = [1, 0.1, 0.4, 0.6]: Z = [1.78, 0.76, 1.65], logísticas [0.856, 0.681, 0.839]: no son probabilidades de 3 clases (402); argmax da 0 |
| Softmax | 12 | 34-35 | 402-403 | "forma suave del argmax"; p(z) = e^(zᵢ)/Σⱼ e^(zⱼ); `softmax(Z)` = [0.4467, 0.1611, 0.3922], suma 1 (402); `torch.softmax(..., dim=0)` (403) |
| tanh | 12 | 35-37 | 403-405 | σ_tanh(z) = 2σ_logistic(2z) − 1 = (e^z − e^(−z))/(e^z + e^(−z)); rango (−1, 1) mejora la convergencia (Bishop 1995) (403); Figure 12.10 compara tanh y logística (404); `np.tanh`, `torch.tanh`, `scipy.special.expit`, `torch.sigmoid` (404-405) |
| Gradiente que se desvanece y ReLU | 12 | 37 | 405 | z₁ = 20 y z₂ = 25 dan tanh 1.0 y 1.0: la derivada se achica con z grande; ReLU σ(z) = max(0, z); derivada 1 para entradas positivas; "resuelve" el gradiente que se desvanece (ver erratas); `torch.relu` |
| Tabla de activaciones | 12 | 38 | 406 | Figure 12.11: lineal, escalón (Heaviside), signo, lineal a trozos, logística, tanh, ReLU, con ecuación, ejemplo de uso y gráfica. Sin derivadas |
| Grafo de cómputo | 13 | 2-4 | 410-412 | grafo acíclico dirigido; z = 2 × (a − b) + c, Figure 13.1 (411); `compute_z` con entradas de rango 0, 1 y 2 (412) |
| Tensores con requires_grad | 13 | 4-5 | 412-413 | solo flotantes y complejos pueden requerir gradiente (412); `requires_grad_()` en el lugar (413) |
| Inicialización: romper la simetría y Xavier | 13 | 5-6 | 413-414 | pesos al azar para romper la simetría, si no la red no supera a una de una capa (413); `nn.init.xavier_normal_` sobre un tensor 2 × 3 (413); recuadro Xavier (Glorot): equilibrar la varianza de los gradientes entre capas; uniforme en ±√6/√(n_in + n_out); normal con σ = √2/√(n_in + n_out) (414); Glorot y Bengio 2010 |
| Gradiente con autograd | 13 | 7-8 | 415-416 | z = wx + b, pérdida (y − z)²; w = 1.0, b = 0.5, x = 1.4, y = 2.1: dL/dw = −0.56, dL/db = −0.4 (verificados); ∂L/∂w = 2x(wx + b − y) (416) |
| Diferenciación automática | 13 | 8 | 416 | y = f(g(h(x))) en pasos u₀ ... u₃; acumulación hacia adelante y hacia atrás; PyTorch usa la inversa, más eficiente para retropropagar |
| nn.Sequential, init, L1 y L2 | 13 | 9-10 | 417-418 | `nn.Sequential(Linear(4,16), ReLU, Linear(16,32), ReLU)`; L2 con `weight_decay` del optimizador (417); `nn.init.xavier_uniform_`, penalización L1 a mano (418) |
| Elegir pérdida y optimizador | 13 | 10 | 418 | SGD y Adam son los más usados; MSE para regresión; familia de entropía cruzada para clasificación (cap. 14); `nn.BCELoss()` con `torch.optim.SGD(lr=0.001)` |
| XOR: datos | 13 | 11-12 | 419-420 | 200 puntos uniformes en [−1, 1)²; y = 0 si x₀ × x₁ < 0, si no 1 (versión continua del XOR, no los 4 puntos); 100 de entrenamiento y 100 de validación (419); Figure 13.2 (420) |
| XOR: modelo lineal falla | 13 | 12-14 | 420-422 | `nn.Linear(2, 1)` + sigmoide = regresión logística (420); `BCELoss`, SGD lr = 0.001, lotes de 2, 200 épocas (421); Figure 13.3: frontera lineal, pérdida alta y exactitud baja (422) |
| Teorema de aproximación universal; ancho contra profundidad | 13 | 14-15 | 422-423 | una capa oculta con suficientes unidades aproxima funciones continuas (422); más profundo = menos parámetros para igual capacidad, pero propenso al gradiente que se desvanece y al que explota (423) |
| XOR resuelto | 13 | 15 | 423 | 2-4-4-1 con ReLU y sigmoide, SGD lr = 0.015; Figure 13.4: 100 % en entrenamiento y 95 % en validación |
| XOR con nn.Module y frontera | 13 | 16-18 | 424-426 | `nn.ModuleList`; frontera de decisión con mlxtend |
| Capa propia con Xavier | 13 | 18-22 | 426-430 | `NoisyLinear` con `nn.init.xavier_uniform_(self.w)` (427); no mejora en XOR (430) |
| Regresión MPG con SGD | 13 | 27 | 435 | 9-8-4-1 con ReLU, `nn.MSELoss()`, `torch.optim.SGD(lr=0.001)` |
| MNIST con Adam | 13 | 30-31 | 438-439 | Flatten, 784-32-16-10 con ReLU (438); `nn.CrossEntropyLoss()`, `torch.optim.Adam(lr=0.001)`, 20 épocas, 0.9813 en la época 19 (439; ver erratas); "Adam se verá en el cap. 14" (439) |

Fuera de los caps. 12 y 13, pero es donde ellos remiten (cap. 14, `Cap14 - Classifying Images with Deep Convolutional Neural Networks.pdf`, impresa = PDF + 450, verificado en todas las páginas):

| Tema | Cap. | PDF | Impresa | Notas |
|---|---|---|---|---|
| Pérdidas para clasificación | 14 | 21-23 | 471-473 | sigmoide o softmax en la salida dan probabilidades; sin ellas, logits (471); entropía cruzada binaria y categórica; Figure 14.11 (472); mejor pasar logits por estabilidad numérica: `BCEWithLogitsLoss`, `CrossEntropyLoss`, `NLLLoss` (472); ejemplos: logit 0.8 con objetivo 1 da BCE 0.3711; logits [1.5, 0.8, 2.1] con objetivo 2 dan CCE 0.5996 (472-473, ambos verificados) |
| Recuadro Adam | 14 | 29 | 479 | robusto para problemas no convexos; inspirado en RMSProp y AdaGrad; tamaño de paso a partir de promedios móviles de los momentos del gradiente; Kingma y Ba 2014. Sin fórmulas |

Erratas en los caps. 12 y 13:
- **Cap. 12, p. 392 (PDF 24)**: en el SGD a mano, `with torch.no_grad():` está al nivel de la época, fuera del bucle de lotes (revisado como imagen). `loss.backward()` acumula gradientes de los 10 lotes y se actualiza una sola vez por época: es descenso de gradiente con la suma de gradientes, no estocástico. Además `loss_fn(pred, y_batch.long())` convierte los objetivos a enteros (1.3 → 1, 6.3 → 6...). La versión con `torch.optim` de la p. 395 está bien.
- **Cap. 12, pp. 396-397 y 402**: dice que el modelo de Iris tiene "dos capas ocultas" (tiene una oculta y la de salida) y que usa softmax en la última capa (`activation='softmax'`, p. 402, resto de la versión en Keras); el `forward` no tiene softmax. Está bien que no lo tenga porque `nn.CrossEntropyLoss` aplica log-softmax por dentro, pero el texto lo dice al revés. Lo explica el cap. 14, p. 473.
- **Cap. 12, p. 400**: atribuye el aprendizaje lento de la sigmoide a salidas cercanas a 0 con entradas negativas; el problema es la derivada cercana a 0, que ocurre en los dos extremos (también cerca de 1).
- **Cap. 12, p. 405**: dice que ReLU "resuelve" el gradiente que se desvanece; solo lo evita para entradas positivas: para negativas la derivada es 0 (neuronas "muertas"). La tabla de la Figure 12.11 deja ReLU sin definir en z = 0.
- **Cap. 13, p. 413**: habla de "un operador init de clase GlorotNormal" (resto de TensorFlow); en PyTorch es la función `nn.init.xavier_normal_`.
- **Cap. 13, p. 439**: dice que el modelo llegó a 96.3 % en entrenamiento, pero la salida impresa de la época 19 es 0.9813. El cap. 14, p. 473, dice "alrededor de 95.6 %" para el mismo modelo en prueba.
- Verificados: 0.888 (p. 401), Z = [1.78, 0.76, 1.65] y las salidas logísticas y softmax (pp. 401-402), tanh(20) = 1.0 exacto en float64 (p. 405), dL/dw = −0.56 y dL/db = −0.4 (p. 416), las fórmulas de Xavier (p. 414).

No aparece en los caps. 12 y 13: broadcasting por nombre (se usa sin explicarlo); momentum y RMSProp (solo el nombre RMSProp, cap. 14, p. 479); fórmulas de Adam; derivadas de tanh, softmax o ReLU escritas; inicialización He; Leaky ReLU.

## Búsqueda rápida por concepto

| Concepto | Mejores páginas (impresas) |
|---|---|
| Neurona | cap. 11: 337-338 (Adaline), 341 (una neurona oculta), 342 (cada neurona como una logística) |
| Perceptrón y XOR | cap. 11: 336 (historia), 342 (por qué "perceptrón multicapa" confunde); XOR: cap. 13, 419-426 |
| Funciones de activación (panorama) | cap. 12: 400, 406 (Figure 12.11) |
| Sigmoide y su derivada | cap. 11: 341 (fórmula y Figure 11.3), 365 (derivada a(1 − a)), 367 (oculta); cap. 12: 400-401 |
| tanh | cap. 12: 403-405 |
| ReLU | cap. 12: 405; cap. 13: 417, 423 (en uso) |
| Softmax | cap. 12: 401-403; cap. 14: 471-473 (con la pérdida) |
| Red multicapa | cap. 11: 338-340 (Figure 11.2), 351 (784-50-10) |
| Propagación hacia adelante, forma matricial y dimensiones | cap. 11: 342 (todas las dimensiones), 348 (código comentado), 363 (las cuatro ecuaciones), 364 (Figure 11.11) |
| Retropropagación (regla de la cadena capa por capa) | cap. 11: 349-350 (código), 362-363 (regla de la cadena y modo inverso), 364-367 (un peso de salida, un peso oculto con dos caminos) |
| Gradiente que se desvanece | cap. 11: 339 (recuadro); cap. 12: 400, 405; cap. 13: 423 (y el que explota) |
| Descenso estocástico y mini-lotes | cap. 11: 338, 352 (generador), 354-356 (bucle), 367 (online contra mini-lote); cap. 12: 378-381 (DataLoader), 392-395 (SGD a mano y con `torch.optim`) |
| Momentum, RMSProp y Adam | cap. 12: 397 (Adam en uso); cap. 13: 418, 438-439; cap. 14: 479 (recuadro, sin fórmulas). Momentum no aparece |
| Tensores (forma, operaciones) | cap. 12: 373-377; cap. 13: 410-413 (rango, requires_grad); cap. 11: 361-362 (W como "tensor") |
| Inicialización de pesos | cap. 11: 348 (normal σ = 0.1, sesgos en 0), 367 (al azar); cap. 13: 413-414 (simetría y Xavier), 418, 427 |
| Funciones de pérdida: MSE | cap. 11: 338, 353, 360-361; cap. 12: 392, 394 |
| Funciones de pérdida: entropía cruzada | cap. 11: 350, 360 (solo nombre); cap. 12: 397; cap. 13: 418, 421 (BCE); cap. 14: 471-473 |
| Diferenciación automática | cap. 11: 363; cap. 13: 415-416 |
