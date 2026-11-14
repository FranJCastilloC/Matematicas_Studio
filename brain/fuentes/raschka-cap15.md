# Mapa de citas: Raschka, Liu y Mirjalili, cap. 15 "Modeling Sequential Data Using Recurrent Neural Networks"

Archivo: `/Users/franciscocastillo/brain/02-Biblioteca/Machine-Learning/PyTorch-Scikit-Learn/Cap15 - Modeling Sequential Data Using Recurrent Neural Networks.pdf` (40 páginas PDF).
Correspondencia verificada: página impresa = página PDF + 498, es decir, PDF N = impresa − 498. Comprobado en el encabezado de PDF 2 = p. 500,
PDF 20 = p. 518, PDF 39 = p. 537, PDF 40 = p. 538. La PDF 1 no lleva número impreso (abre el capítulo con un "15"); por el desfase le corresponde
la 499. Cada página se leyó con `pdftotext -layout`; las ecuaciones de las pp. 505, 506, 511-512 y las figuras 15.1, 15.2, 15.5, 15.6, 15.8 y 15.9
se revisaron además como imagen, porque `pdftotext` rompe los glifos matemáticos.
Edición: Machine Learning with PyTorch and Scikit-Learn (Packt, 2022). Datos del capítulo: una secuencia de juguete de 3 pasos con 5 rasgos para
el forward manual de `nn.RNN`; IMDb (25 000 + 25 000 reseñas, vía torchtext 0.10.0) para análisis de sentimiento con LSTM; *The Mysterious Island*
de Julio Verne (Project Gutenberg, 1 112 350 caracteres, 80 distintos) para el modelo de lenguaje por caracteres.

| Tema | PDF | Impresa | Sección | Notas |
|---|---|---|---|---|
| Introducción y temas | 1 | 499 | apertura | datos secuenciales, RNN, LSTM, TBPTT, RNN multicapa en PyTorch, IMDb, modelo de lenguaje por caracteres, "gradient clipping to avoid exploding gradients" (ver lo que no trae) |
| **Datos secuenciales: el orden importa** | 2 | 500 | Modeling sequential data – order matters | el supuesto IID hace irrelevante el orden (Iris); en secuencias no (precio de una acción) |
| Secuencia vs serie de tiempo | 2 | 500 | Sequential data versus time series data | serie de tiempo = secuencia con dimensión temporal (acciones, voz); texto y ADN son secuencias pero no series de tiempo |
| Notación de secuencias | 2-3 | 500-501 | Representing sequences | ⟨x⁽¹⁾, x⁽²⁾, ..., x⁽ᵀ⁾⟩, superíndice = orden, longitud T; Figure 15.1 (x⁽¹⁾ ... x⁽⁶⁾ e y⁽¹⁾ ... y⁽⁶⁾ sobre el eje del tiempo) |
| MLP y CNN no tienen memoria | 3 | 501 | idem | asumen ejemplos independientes; la RNN recuerda información pasada |
| Categorías de modelado | 3-4 | 501-502 | The different categories of sequence modeling | Figure 15.2 (Karpathy 2015): many-to-one (sentimiento), one-to-many (descripción de imágenes), many-to-many sincronizado (clasificar cada cuadro de un video) y con retraso (traducción) |
| Flujo de datos en una RNN | 4-5 | 502-503 | Understanding the dataflow in RNNs | Figure 15.3 (feedforward vs RNN con lazo); la capa oculta recibe la entrada actual y la oculta del paso anterior; recurrent edge |
| Tipo de salida (recuadro) | 5 | 503 | recuadro Determining the type of output from an RNN | devolver la secuencia ⟨o⁽⁰⁾, ..., o⁽ᵀ⁾⟩ (many-to-many) o solo o⁽ᵀ⁾ (many-to-one) (ver erratas sobre los índices) |
| RNN de una y dos capas | 5-6 | 503-504 | idem | "single-layer RNN" = una capa oculta; Figure 15.4 (una y dos capas, plegada y desplegada) |
| **Estado oculto: inicialización y capas** | 6 | 504 | idem | cada unidad oculta recibe la preactivación de la entrada y la activación de la misma capa en t − 1; en t = 0 el oculto se inicia en ceros o valores pequeños; capa 1: h₁⁽ᵗ⁾ desde x⁽ᵗ⁾ y h₁⁽ᵗ⁻¹⁾; capa 2: h₂⁽ᵗ⁾ desde o₁⁽ᵗ⁾ y h₂⁽ᵗ⁻¹⁾ |
| **Matrices de pesos compartidas en el tiempo** | 6 | 504 | Computing activations in an RNN | W_xh (entrada → oculta), W_hh (arista recurrente), W_ho (oculta → salida); no dependen de t; Figure 15.5 (plegada y desplegada, W_h = [W_xh; W_hh]) |
| **Ecuaciones de la RNN** | 7 | 505 | idem | z_h⁽ᵗ⁾ = W_xh x⁽ᵗ⁾ + W_hh h⁽ᵗ⁻¹⁾ + b_h; h⁽ᵗ⁾ = σ_h(z_h⁽ᵗ⁾); forma concatenada h⁽ᵗ⁾ = σ_h([W_xh; W_hh] [x⁽ᵗ⁾; h⁽ᵗ⁻¹⁾] + b_h); salida o⁽ᵗ⁾ = σ_o(W_ho h⁽ᵗ⁾ + b_o) |
| **Dimensiones en la figura** | 7 | 505 | idem | Figure 15.6, dos formulaciones: x⁽ᵗ⁾ con 4 unidades, h con 5, o con 3; W_xh 5×4, W_hh 5×5, b_h 5; W_h = [W_xh; W_hh] 5×9 (bloques lado a lado) por el vector apilado de 9; el texto no escribe las dimensiones, hay que leerlas de los cuadritos (ver erratas) |
| **BPTT (recuadro)** | 8 | 506 | recuadro Training RNNs using backpropagation through time | Werbos 1990; L = Σ_{t=1}^{T} L⁽ᵗ⁾; ∂L⁽ᵗ⁾/∂W_hh = ∂L⁽ᵗ⁾/∂o⁽ᵗ⁾ × ∂o⁽ᵗ⁾/∂h⁽ᵗ⁾ × (Σ_{k=1}^{t} ∂h⁽ᵗ⁾/∂h⁽ᵏ⁾ × ∂h⁽ᵏ⁾/∂W_hh); ∂h⁽ᵗ⁾/∂h⁽ᵏ⁾ = Π_{i=k+1}^{t} ∂h⁽ⁱ⁾/∂h⁽ⁱ⁻¹⁾ |
| Recurrencia oculta vs de salida | 8-9 | 506-507 | Hidden recurrence versus output recurrence | Figure 15.7: hidden-to-hidden (W_hh), output-to-hidden (W_oh), output-to-output (W_oo); a veces W_rec |
| **nn.RNN: formas de los pesos** | 10 | 508 | idem | `nn.RNN(input_size=5, hidden_size=2, num_layers=1, batch_first=True)`; `weight_ih_l0` [2, 5], `weight_hh_l0` [2, 2], `bias_ih_l0` [2], `bias_hh_l0` [2] (PyTorch usa dos sesgos); entrada (batch_size, sequence_length, 5) con `batch_first=True` |
| **Forward manual contra nn.RNN** | 10-11 | 508-509 | idem | x_seq = [[1]*5, [2]*5, [3]*5] reformada a (1, 3, 5); bucle `ht = xt @ w_xh.T + b_xh`, `ot = tanh(ht + prev_h @ w_hh.T + b_hh)`, prev_h = 0 en t = 0; salidas: t0 [−0.3519801, 0.52525216], t1 [−0.68424344, 0.76074266], t2 [−0.8649416, 0.90466356], iguales a `output[:, t]`; tanh es la activación por defecto |
| **Gradiente que se desvanece y que explota** | 11-12 | 509-510 | The challenges of learning long-range interactions | el factor multiplicativo ∂h⁽ᵗ⁾/∂h⁽ᵏ⁾ tiene t − k multiplicaciones ⇒ factor w^{t−k}; \|w\| < 1 se desvanece, \|w\| > 1 explota cuando t − k es grande (dependencias largas); "solución ingenua" \|w\| = 1; Figure 15.8: una sola unidad oculta con w = 0.99, 1.01 y 1; Pascanu, Mikolov y Bengio 2012 |
| **Tres soluciones: recorte, TBPTT, LSTM** | 12 | 510 | idem | gradient clipping: umbral y se asigna ese valor a los gradientes que lo superan; TBPTT: solo retropropagar los últimos pasos (ejemplo: 20 de 100); ambas resuelven la explosión pero la truncación limita el flujo; LSTM (Hochreiter y Schmidhuber 1997) maneja ambas con celdas de memoria |
| **LSTM: celda de memoria** | 13 | 511 | Long short-term memory cells | la celda reemplaza la capa oculta; arista recurrente con w = 1 deseable; cell state; Figure 15.9 (estructura con σ, tanh, ⊙ y ⊕, pesos W_hf W_xf b_f, W_hi W_xi b_i, W_hc W_xc b_c, W_ho W_xo b_o); C⁽ᵗ⁻¹⁾ pasa a C⁽ᵗ⁾ sin multiplicarse por un peso |
| **Compuerta de olvido** | 13-14 | 511-512 | idem | f_t = σ(W_xf x⁽ᵗ⁾ + W_hf h⁽ᵗ⁻¹⁾ + b_f); no estaba en la LSTM original, la agregaron Gers, Schmidhuber y Cummins (2000) |
| **Compuerta de entrada, candidato, celda** | 14 | 512 | idem | i_t = σ(W_xi x⁽ᵗ⁾ + W_hi h⁽ᵗ⁻¹⁾ + b_i); C̃_t = tanh(W_xc x⁽ᵗ⁾ + W_hc h⁽ᵗ⁻¹⁾ + b_c); **C⁽ᵗ⁾ = (C⁽ᵗ⁻¹⁾ ⊙ f_t) ⊕ (i_t ⊙ C̃_t)** |
| **Compuerta de salida y estado oculto** | 14 | 512 | idem | o_t = σ(W_xo x⁽ᵗ⁾ + W_ho h⁽ᵗ⁻¹⁾ + b_o); h⁽ᵗ⁾ = o_t ⊙ tanh(C⁽ᵗ⁾) |
| GRU (recuadro) | 14 | 512 | recuadro Other advanced RNN models | variantes de LSTM (Jozefowicz et al. 2015); GRU (2014) más simple y eficiente, comparable en música polifónica (Chung et al. 2014); **sin ecuaciones** |
| Proyectos en PyTorch | 15 | 513 | Implementing RNNs for sequence modeling in PyTorch | sentimiento (many-to-one) y modelo de lenguaje (many-to-many) |
| IMDb y particiones | 15-16 | 513-514 | Preparing the movie review data | torchtext 0.10.0; 25 000 por conjunto; `random_split` 20 000 / 5 000 |
| Tokens y vocabulario | 16-17 | 514-515 | idem | `tokenizer` del cap. 8; `Counter`; vocabulario 69 023; `vocab` de torchtext con `<pad>` = 0 y `<unk>` = 1; ['this', 'is', 'an', 'example'] → [11, 7, 35, 457] |
| **Relleno a la misma longitud** | 18-19 | 516-517 | idem | `collate_batch` con `nn.utils.rnn.pad_sequence(batch_first=True)`; longitudes [165, 86, 218, 145] → `text_batch.shape` = [4, 218]; etiquetas [1, 1, 1, 0]; loaders con `batch_size = 32` |
| **Embeddings** | 19-21 | 517-519 | Embedding layers for sentence encoding | one-hot daría 10⁴-10⁵ rasgos dispersos (maldición de la dimensión); embedding_dim ≪ n_words; Figure 15.10; matriz (n + 2) × embedding_dim |
| **Formas del tensor de secuencias** | 21 | 519 | idem | `nn.Embedding(num_embeddings=10, embedding_dim=3, padding_idx=0)`; entrada [[1, 2, 4, 5], [4, 3, 2, 0]] de forma batchsize × input_length; salida **batchsize × input_length × embedding_dim** (2 × 4 × 3); el relleno 0 da [0, 0, 0] y no recibe gradiente |
| RNN, LSTM, GRU en torch.nn | 22-23 | 520-521 | Building an RNN model | lista RNN, LSTM, GRU (Cho et al. 2014); clase con `nn.RNN(input_size, hidden_size, num_layers=2, batch_first=True)` y `hidden[-1, :, :]` (estado final de la última capa); `RNN(64, 32)` con `torch.randn(5, 3, 64)` → 5 salidas |
| Modelo LSTM para sentimiento | 23-24 | 521-522 | Building an RNN model for the sentiment analysis task | Embedding(69025, 20, padding_idx=0) → `pack_padded_sequence(..., enforce_sorted=False, batch_first=True)` → `nn.LSTM(20, 64, batch_first=True)` devuelve `out, (hidden, cell)` → Linear 64 → ReLU → Linear 1 → Sigmoid |
| Entrenamiento y evaluación | 24-25 | 522-523 | idem | `BCELoss`, Adam lr = 0.001, 10 épocas: 0.5843/0.6240 ... 0.9839/0.8596 (máximo de validación 0.8654 en la época 7); test 0.8512 |
| LSTM bidireccional | 26-27 | 524-525 | More on the bidirectional RNN | `bidirectional=True`; se concatenan `hidden[-2]` y `hidden[-1]` → `Linear(128, 64)`; otras fusiones: suma, producto, promedio; con `nn.RNN` simple sobre secuencias largas la pérdida ni siquiera baja (gradientes que se desvanecen o explotan) |
| Modelo de lenguaje por caracteres | 27-28 | 525-526 | Project two – character-level language modeling in PyTorch | Sutskever, Martens y Hinton 2011; Figure 15.11 (EOS) |
| Texto y codificación | 28-30 | 526-528 | Preprocessing the dataset | 1 112 350 caracteres, 80 únicos; `char2int`, `char_array`; Figure 15.12 ("Hello", "world"); 'THE MYSTERIOUS' → [44 32 29 1 37 48 43 44 29 42 33 39 45 43 1]; [33 43 36 25 38 28] → 'ISLAND' |
| Predecir el siguiente carácter como clasificación | 30-31 | 528-529 | idem | Figure 15.13 ("Deep Learn" → "i"); 80 clases; Figure 15.14 (generación iterativa); longitud 40 como compromiso |
| **x e y desplazados en uno** | 31-32 | 529-530 | idem | trozos de 41: x = índices [0..39], y = [1..40]; `TextDataset`; ejemplo 'THE MYSTERIOUS ISLAND ***...Produced b' → 'HE MYSTERIOUS ISLAND ***...Produced by' |
| Modelo LSTM de caracteres | 33-34 | 531-532 | Building a character-level RNN model | Embedding(80, 256) → `nn.LSTM(256, 512, batch_first=True)` → Linear(512, 80); `forward(x, hidden, cell)` con `unsqueeze(1)` (un carácter por llamada: secuencia de largo 1); `init_hidden`: ceros de forma (1, batch_size, 512) = (num_layers, lote, oculto); salida = logits |
| Entrenamiento por carácter | 34-35 | 532-533 | idem | `CrossEntropyLoss`, Adam lr = 0.005; 10 000 "épocas" de un solo lote de 64; bucle `for c in range(seq_length)` acumulando la pérdida y un único `loss.backward()` (BPTT sobre los 40 pasos); pérdida 1.9689 → 1.0047 |
| Muestreo con Categorical | 35-36 | 533-534 | Evaluation phase – generating new text passages | logits [1, 1, 1] → [0.333, 0.333, 0.333]; [1, 1, 3] → [0.1065, 0.1065, 0.7870] (verificado) con 10 muestras impresas |
| sample() y autorregresión | 36-38 | 534-536 | idem | se pasa la cadena inicial carácter a carácter para calentar el estado; luego se genera de a uno; "autoregression"; texto de ejemplo desde 'The island' |
| **Temperatura (factor α)** | 38-39 | 536-537 | idem | logits × α antes de softmax: α = 0.5 → [0.2119, 0.2119, 0.5761], α = 0.1 → [0.3104, 0.3104, 0.3792] (verificado); α = 2.0 da texto más predecible, α = 0.5 más aleatorio; compromiso novedad/corrección |
| Summary | 39-40 | 537-538 | Summary | RNN, límites con dependencias largas, LSTM con compuertas; siguiente: atención y transformers |

Observaciones para citar:
- Las ecuaciones de la RNN están todas en la p. 505 (PDF 7), con la Figure 15.6 como única fuente de las dimensiones (x 4, h 5, o 3).
  La comprobación numérica con `nn.RNN` (formas de los pesos y tres pasos de tiempo) está en las pp. 508-509.
- BPTT y el factor multiplicativo: recuadro de la p. 506 (fórmulas) y pp. 509-510 (w^{t−k}, Figure 15.8 con w = 0.99 y 1.01, tres soluciones).
  Cuentas útiles que el libro no hace: 0.99¹⁰⁰ ≈ 0.366, 1.01¹⁰⁰ ≈ 2.705, 0.99²⁰ ≈ 0.818, 1.01²⁰ ≈ 1.220.
- LSTM: pp. 511-512, con las seis ecuaciones en la p. 512 (y f_t en la 511).
- Tensores de secuencias: (batch_size, sequence_length, features) con `batch_first=True` en la p. 508; relleno a [4, 218] en la p. 517;
  embedding batchsize × input_length × embedding_dim en la p. 519; estado oculto (num_layers, lote, oculto) en las pp. 520 y 531.
- Recuentos de parámetros que el libro no da (calculados aquí, PyTorch con dos sesgos por compuerta): `LSTM(20, 64)` = 4 · (64·20 + 64·64 + 2·64)
  = 22 016; `LSTM(256, 512)` = 1 576 960; `Embedding(69025, 20)` = 1 380 500; `nn.RNN(5, 2)` del ejemplo = 2·5 + 2·2 + 2 + 2 = 18.

## Lo que el capítulo no trae

- **Recorte del gradiente sin código**: la lista de temas de la p. 499 promete "Using gradient clipping to avoid exploding gradients", pero en todo
  el capítulo solo hay una frase (p. 510). No aparece `torch.nn.utils.clip_grad_norm_` ni `clip_grad_value_`, ni la distinción entre recortar
  por valor (lo que describe) y por norma (lo más usado).
- **TBPTT sin código**: solo la frase de la p. 510 (20 de 100 pasos).
- **GRU sin ecuaciones**: solo el recuadro de la p. 512 y la mención de `nn.GRU` en la p. 520.
- No escribe las dimensiones de W_xh, W_hh, W_ho en texto (solo en la Figure 15.6 y en las formas de `nn.RNN` de la p. 508).
- No deriva ∂h⁽ⁱ⁾/∂h⁽ⁱ⁻¹⁾: falta que es diag(σ_h'(z_h⁽ⁱ⁾)) W_hh, de modo que el factor real es un producto de matrices con la derivada de tanh,
  no solo w^{t−k} (ver erratas).
- No hay ejemplo numérico de una celda LSTM ni del gradiente que se desvanece.
- No explica la convención de PyTorch para `batch_first=False` (la entrada por defecto es tiempo × lote × rasgos).
- Batch normalization no aparece (tampoco en el cap. 14).

## Erratas e inconsistencias

- **pp. 500-503 (PDF 2-5)**: la entrada se indexa ⟨x⁽¹⁾, ..., x⁽ᵀ⁾⟩ (p. 500) pero la salida ⟨o⁽⁰⁾, ..., o⁽ᵀ⁾⟩ (p. 503), que tendría T + 1 elementos;
  en la p. 504 el oculto se inicializa "en t = 0" y en la p. 506 la pérdida suma de t = 1 a T. Lo coherente: h⁽⁰⁾ es el estado inicial y x, h, o van
  de 1 a T. En el código de la p. 508 los pasos son 0, 1, 2 (índices de Python).
- **p. 504 (PDF 6)**: "we will later have to set `return_sequences=True`": ese es un parámetro de Keras (resto de la edición con TensorFlow). En
  PyTorch `nn.RNN` devuelve siempre la secuencia completa como primer resultado y el estado final como segundo.
- **p. 505 (PDF 7)**: W_h = [W_xh; W_hh] usa punto y coma, que suele significar apilar en vertical, pero en la Figure 15.6 los bloques van lado a lado
  (5×4 y 5×5 → 5×9) y el vector [x⁽ᵗ⁾; h⁽ᵗ⁻¹⁾] sí va apilado. Además, la Formulación 2 de la figura escribe [x⁽ᵗ⁾; h⁽ᵗ⁻¹⁾]ᵀ: con la transpuesta sería
  un vector fila y el producto no cuadra; el texto (sin transpuesta) es el correcto.
- **pp. 506 y 510 (PDF 8 y 12)**: el factor w^{t−k} ignora la derivada de la activación. Con h⁽ⁱ⁾ = tanh(W_hh h⁽ⁱ⁻¹⁾ + ...), cada factor es
  diag(1 − (h⁽ⁱ⁾)²) W_hh; en el caso de una unidad, el factor es Π w · tanh'(z⁽ⁱ⁾), y como tanh' ≤ 1 el gradiente puede desvanecerse aunque |w| = 1.
  Por eso la "solución ingenua \|w\| = 1" de la p. 510 no basta con tanh. La Figure 15.8 rotula |w_hh| < 1, > 1 y = 1, pero el texto la llama w.
- **p. 508-509 (PDF 10-11)**: en el código, la línea impresa como "Hidden" es solo W_xh x⁽ᵗ⁾ + b_xh (una parte de la preactivación), y lo que se
  imprime como "Output (manual)" es en realidad el estado oculto h⁽ᵗ⁾: `nn.RNN` no tiene W_ho; su "output" es la secuencia de estados ocultos de la
  última capa. Los nombres chocan con la notación z_h, h, o de la p. 505.
- **p. 511 (PDF 13)**: dice que la arista recurrente de la celda tiene "the desirable weight, w = 1"; con la compuerta de olvido (p. 512) la celda se
  multiplica por f_t en cada paso, así que el factor es f_t, no 1 (vale 1 solo si la compuerta está abierta).
- **pp. 512 y 503 (PDF 14 y 5)**: la compuerta de salida se llama o_t y la salida de la red o⁽ᵗ⁾; son cosas distintas con la misma letra.
- **p. 520 (PDF 22)**: las líneas comentadas `nn.GRU(input_size, hidden_size, num_layers, ...)` y `nn.LSTM(...)` usan la variable `num_layers`, que no
  existe en ese `__init__`: si se descomentan dan NameError.
- **pp. 529-530 (PDF 31-32)**: el texto dice que se "parte el texto en trozos de 41" y que se descarta el último si es más corto, pero el código
  `[text_encoded[i:i+chunk_size] for i in range(len(text_encoded)-chunk_size+1)]` arma ventanas solapadas que avanzan de a un carácter
  (1 112 310 trozos, todos de 41); no queda ningún trozo corto que descartar. Los dos ejemplos impresos (desplazados en una letra) lo confirman.
- **p. 532 (PDF 34)**: llama "epochs" a 10 000 iteraciones de un solo lote de 64 elegido al azar; no son pasadas completas por los datos.
- **p. 536 (PDF 38)**: presenta α como "an analog to the temperature", pero α multiplica los logits, así que es la inversa de la temperatura (T = 1/α):
  α < 1 sube la temperatura y aplana, como el propio texto concluye en la p. 537 ("α = 0.5 (increasing the temperature)").
- **Versiones**: PyTorch y torchtext no están instalados en esta máquina; los resultados de entrenamiento, las muestras de `Categorical` y el
  forward de `nn.RNN` no se pudieron reproducir. El código usa la API de torchtext 0.10 (`IMDB(split=...)`, `torchtext.vocab.vocab`), que cambió en
  versiones posteriores y cuyo desarrollo se detuvo (sin verificar aquí). Se comprobaron con NumPy los softmax con y sin escalado (pp. 533, 534, 536).
  El forward manual de la p. 509 es internamente coherente (la parte W_xh x + b_xh crece linealmente: −0.470, −0.889, −1.307), pero sin los pesos no
  se puede rehacer.

## Búsqueda rápida por concepto

| Concepto | Mejores páginas impresas (PDF) | Qué citar |
|---|---|---|
| Datos secuenciales | 500-502 (2-4) | orden e IID, secuencia vs serie de tiempo, notación ⟨x⁽¹⁾...x⁽ᵀ⁾⟩ p. 500; Figure 15.1 p. 501; categorías many-to-one, one-to-many, many-to-many pp. 501-502 |
| RNN y estado oculto | 502-505 (4-7), 508-509 (10-11) | flujo y lazo pp. 502-503; inicialización y multicapa p. 504; W_xh, W_hh, W_ho p. 504; ecuaciones y Figure 15.6 (dimensiones) p. 505; forward manual contra `nn.RNN` pp. 508-509 |
| Dimensiones de las matrices | 505 (7), 508 (10) | Figure 15.6 (x 4, h 5, o 3; W_xh 5×4, W_hh 5×5, W_h 5×9); `weight_ih_l0` [2, 5], `weight_hh_l0` [2, 2] |
| Retropropagación en el tiempo | 506 (8), 510 (12), 532 (34) | recuadro BPTT con L = Σ L⁽ᵗ⁾ y el producto de jacobianos p. 506; TBPTT p. 510; un único `backward` sobre 40 pasos p. 532 |
| Gradiente que se desvanece y que explota | 509-510 (11-12), 525 (27) | factor ∂h⁽ᵗ⁾/∂h⁽ᵏ⁾ p. 509; w^{t−k}, Figure 15.8 con 0.99 y 1.01 p. 510; RNN simple que no aprende en IMDb p. 525 |
| Recorte del gradiente | 510 (12) | una frase: umbral sobre los gradientes; sin código (ver lo que no trae) |
| LSTM (compuertas y celda) | 511-512 (13-14), 521 (23), 531 (33) | celda y Figure 15.9 p. 511; f, i, C̃, C, o, h p. 512; `nn.LSTM` con `(hidden, cell)` p. 521; `init_hidden` p. 531 |
| GRU | 512 (14), 520 (22) | recuadro sin ecuaciones p. 512; `nn.GRU` en la lista p. 520 |
| Tensores de secuencias (lote × tiempo × rasgos) | 508 (10), 517 (19), 519 (21), 520 (22) | (batch, seq_len, 5) con `batch_first=True` p. 508; relleno a [4, 218] p. 517; embedding 2 × 4 × 3 p. 519; `torch.randn(5, 3, 64)` y `hidden[-1]` p. 520 |
| Embeddings | 517-519 (19-21) | one-hot contra embedding, Figure 15.10, `nn.Embedding` con `padding_idx` |
| Modelo de lenguaje y temperatura | 525-537 (27-39) | x e y desplazados p. 529-530; muestreo con `Categorical` pp. 533-534; α y softmax p. 536 |
