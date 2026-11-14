# Mapa de citas: UD6 Teoría de grafos complejos y sus aplicaciones a la IA (SM142001, máster IA UAX)

A = `.../UD6. Teoría de grafos complejos/UD6 Contenido Teorico.pdf` (39 páginas; autor en metadatos: Álvaro Rojo Granados, diciembre 2024).
Ruta completa: `/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142001 - Matematicas y estadistica para la IA/UD6. Teoría de grafos complejos/UD6 Contenido Teorico.pdf` ("SEMESTRE 1 " lleva un espacio al final; el archivo dice "Teorico" sin tilde).
Relación PDF/impresa: **PDF = impresa**. Las páginas 3 a 38 llevan el número al pie y coincide con el del PDF (verificado en p.3, 7, 13, 25, 29, 33, 36, 38). p.1 portada, p.2 índice (sin número), p.39 contraportada "GRACIAS".
Índice (p.2), verificado: 1 Introducción p.3, 2 Objetivos p.4, **3 Redes neuronales p.5** (3.1 Conceptos básicos p.7, 3.2 Funcionamiento p.9, 3.3 CNN y RNN p.13: 3.3.1 CNN p.14, 3.3.2 RNN p.17), **4 Teoría de grafos complejos p.23** (4.1 Introducción p.23, 4.2 Propiedades p.24, 4.3 Algoritmos clásicos p.25, 4.4 Aplicaciones p.26: 4.4.1 red social p.28, 4.4.2 Karate Club p.30), 5 Conclusiones p.34, 6 Mapa conceptual p.36, 7 Bibliografía p.37.
Ojo: **más de la mitad de la unidad (p.5-22) es de redes neuronales**, no de grafos. La parte de grafos (p.23-33) es breve: definiciones, tres fórmulas (centralidad de grado, Dijkstra, PageRank) y dos casos en NetworkX.
Todas las fórmulas y casi todo el código son imágenes (pdftotext los devuelve vacíos); se leyeron renderizando. Excepción: el código del Karate Club (p.30-31) es texto.
Ejemplos numéricos: neurona del paraguas (p.7-8), MLP con Iris (p.10, 97.78 %), CNN con MNIST (p.15-17, 225 034 parámetros), RNN "hello world" (p.19-22), grafo dirigido A-F (p.27), red social A-E con grado y PageRank (p.28-29), Karate Club (p.30-33).

| Tema | pág. PDF | Notas |
|---|---|---|
| Introducción: redes neuronales y grafos complejos como dos pilares; comunidades, recomendación, predicción | 3 | prosa; anuncia TensorFlow, Scikit-learn y NetworkX |
| Objetivos (5): neuronas, CNN, RNN, Transformers; grado, conectividad, centralidad; Dijkstra, PageRank, clusterización | 4 | los Transformers se anuncian y no se desarrollan |
| Redes neuronales: definición, DNN, figura neurona biológica vs artificial | 5 | figura generada con IA, con rótulos ilegibles ("X12", "Wy3", "Cellboisy"); ver erratas por "Artificial Natural Network" |
| Ejemplo de capas (reconocimiento facial: bordes, luego rostros), breve historia | 6 | Perceptrón de Rosenblatt (1958), "limitado en problemas no lineales" (sin mencionar XOR); retropropagación (1986); DNN (2000-2010); CNN y Transformers (2010+) |
| Ventajas y desafíos de las redes | 6 | datos masivos, costo, interpretabilidad ("cajas negras") |
| Neurona artificial: entradas, pesos, sesgo, activación | 7 | 4 pasos; fórmula $y=f\left(\sum_{i=1}^{n} w_i x_i + b\right)$ |
| Ejemplo del paraguas: datos | 7 | $x_1=0.70$ (nubosidad), $x_2=0.80$ (probabilidad de lluvia), $w_1=0.6$, $w_2=0.8$, $b=-0.5$ |
| Ejemplo del paraguas: cálculo y sigmoide | 8 | escribe $y=f(0.6\cdot0.7+0.8\cdot0.8-0.5)=f(0.92)$ y $f(x)=\frac{1}{1+e^{-x}}$, $f(0.92)\approx0.715$, "71.5% de probabilidad". **Mal**: la suma da 0.56 y $\sigma(0.56)=0.6365$; el código de la misma página imprime 63.65 % (ver erratas) |
| Código de la neurona (NumPy) | 8 | `x = np.array([0.7, 0.8])`, `w = np.array([0.6, 0.8])`, `b = -0.5`, `sigmoid`, `z = np.dot(w, x) + b`; salida "Probabilidad de llevar paraguas: 63.65%" |
| Capas: entrada, ocultas, salida; ejemplo Iris (4 entradas, 3 salidas) | 9 | arquitectura descrita en palabras |
| Propagación hacia adelante | 9 | suma ponderada y activación en cada capa; sin notación matricial |
| Retropropagación y función de costo | 9 | entropía cruzada **binaria** $J(\theta)=-\frac1m\sum_{i=1}^m[y_i\log\hat y_i+(1-y_i)\log(1-\hat y_i)]$ para un problema de 3 clases (ver erratas) |
| Gradiente descendente | 10 | $w=w-\eta\frac{\partial J}{\partial w}$, $\eta$ tasa de aprendizaje. Sin regla de la cadena ni deltas |
| Código MLP con scikit-learn (Iris) | 10 | `MLPClassifier(hidden_layer_sizes=(10,), max_iter=2000, random_state=42)`, `test_size=0.3`, `random_state=42`; salida "Precisión del modelo: 97.78%" (verificado: 44 de 45, es exactitud) |
| Código para dibujar la red como grafo dirigido (NetworkX) | 11-12 | `plot_neural_network(input_size, hidden_layers, output_size)` con `nx.DiGraph()`, nodos "Input i", "Hidden1-j", "Output k", aristas entre capas consecutivas; llamada con 4, [10], 3 (p.12). Puente natural entre las dos mitades de la unidad: una red neuronal es un grafo dirigido por capas |
| Figura "Estructura de la Red Neuronal" | 13 | 4 + 10 + 3 nodos, completamente conectada (40 + 30 = 70 aristas); dice "como se especificó en el modelo del punto 2.2" (es el 3.2) |
| Redes avanzadas: CNN y RNN (intro) | 13 | prosa |
| CNN: convolución, pooling, capas densas, ReLU | 14 | $(I*K)(i,j)=\sum_m\sum_n I(m,n)K(i-m,j-n)$; max pooling y average pooling; ReLU nombrada sin fórmula |
| CNN con MNIST: código Keras | 15 | `Conv2D(32,(3,3),relu,input_shape=(28,28,1))`, `MaxPooling2D((2,2))`, `Conv2D(64,(3,3))`, `MaxPooling2D`, `Flatten`, `Dense(128,relu)`, `Dense(10,softmax)`; `epochs=5`; salida: val_accuracy 0.9841, 0.9884, 0.9890, 0.9905, 0.9898. El texto dice "1 época" (ver erratas) |
| CNN: `plot_model`, resumen y parámetros | 16 | tabla de capas; "Total params: 675,104", "Trainable params: 225,034", "Optimizer params: 450,070" (los de Adam, 2 por peso + 2); diagrama de bloques |
| CNN: salida esperada (`model.summary()`) | 17 | formas (26,26,32) → (13,13,32) → (11,11,64) → (5,5,64) → 1600 → 128 → 10; parámetros 320, 18 496, 204 928, 1 290; total 225 034 (verificado: $9\cdot32+32$, $9\cdot32\cdot64+64$, $1600\cdot128+128$, $128\cdot10+10$) |
| RNN: idea de estado interno | 17 | "recordar" información previa |
| RNN: fórmulas | 18 | $h_t=f(W_{xh}x_t+W_{hh}h_{t-1}+b_h)$, $y_t=g(W_{hy}h_t+b_y)$ con $g$ softmax; desvanecimiento del gradiente; LSTM y GRU solo nombradas |
| RNN "hello world": código y vocabulario | 19 | `seq_length = 3`; `chars = sorted(list(set(text)))` → `[' ', 'd', 'e', 'h', 'l', 'o', 'r', 'w']`; `char_to_idx = {' ': 0, 'd': 1, 'e': 2, 'h': 3, 'l': 4, 'o': 5, 'r': 6, 'w': 7}`; `SimpleRNN(50, activation='tanh')`, `Dense(len(chars), softmax)` |
| RNN: secuencias, índices y one-hot | 20 | ['h','e','l'] → [3,2,4] → 'l' (4); ['e','l','l'] → [2,4,4] → 'o' (5); ['l','l','o'] → [4,4,5] → ' ' (0). One-hot de 3: [0,0,0,1,0,0,0,0]. Forma $(m,n,\text{len(chars)})$. Son 8 secuencias en total (11 − 3), la página muestra 3 |
| RNN: capas SimpleRNN y Dense; entrenamiento y generación | 21 | `loss='sparse_categorical_crossentropy'`, `epochs=500`; salida: accuracy 0.2500 en época 1 (2 de 8), 1.0000 al final, loss 0.0033; "Texto generado: hello worldo" |
| RNN: explicación del entrenamiento y de la generación | 22 | adam, 500 épocas, `np.argmax(pred)` (generación voraz) |
| Grafo: definición $G=(V,E)$, $\lvert V\rvert=n$, $\lvert E\rvert=m$ | 23 | no dirigido (amistades) y dirigido o digrafo (transacciones bancarias) |
| Ejemplo de grafo camino | 23 | $V=\{A,B,C,D\}$, $E=\{(A,B),(B,C),(C,D)\}$, dibujado en texto "A --- B --- C --- D" |
| Redes complejas: tres propiedades | 23 | 1) grado desigual (nodos centrales), 2) pequeño mundo ("número pequeño de pasos"), 3) comunidades. Solo una línea cada una: sin ley de potencias, sin coeficiente de agrupamiento, sin modelos |
| Grado de un nodo | 24 | $deg(v)$ en no dirigidos; $deg_{in}(v)$ (aristas que llegan) y $deg_{out}(v)$ (aristas que salen) en dirigidos |
| Caminos y ciclos | 24 | camino A→B→C; ciclo A→B→C→A |
| Conectividad | 24 | conectado: hay camino entre cada par; desconectado definido mal (ver erratas) |
| Centralidad de grado | 24 | $C_{degree}(v)=\frac{deg(v)}{\lvert V\rvert-1}$ |
| Centralidad de intermediación y de cercanía | 24 | una línea cada una ("cuántos caminos cortos pasan por un nodo", "qué tan cerca está de todos los demás"), **sin fórmula** |
| Dijkstra | 25 | camino más corto desde un origen con pesos no negativos; entrada y salida; $d(u)=\min_{(u,v)\in E}\{d(v)+w(u,v)\}$ (índices al revés para un grafo dirigido, ver erratas). Sin pseudocódigo, sin cola de prioridad, sin ejemplo |
| PageRank | 25 | $PR(v)=\frac{1-d}{n}+d\sum_{u\in In(v)}\frac{PR(u)}{OutDegree(u)}$; $d$ factor de amortiguación (0.85); $In(v)$ nodos que enlazan a $v$. Sin iteración, sin matriz, sin nodos colgantes, sin cadena de Markov |
| Clusterización | 25 | comunidades más densas por dentro que hacia fuera; "Ejemplo: Algoritmo de Louvain" sin descripción ni modularidad |
| Aplicaciones de grafos en IA | 26 | redes sociales (comunidades, influencia, PageRank para recomendar), grafo bipartito usuarios-productos (Netflix), bioinformática, rutas con Dijkstra, redes semánticas |
| Ejemplo: grafo dirigido A-F con centralidad de grado | 27 | aristas A→B, B→C, C→A, C→D, D→E, E→F; salida `{'A': 0.4, 'B': 0.4, 'C': 0.6000000000000001, 'D': 0.4, 'E': 0.4, 'F': 0.2}` (verificado: grado total entre $n-1=5$; C tiene 3). Contiene el ciclo A→B→C→A de p.24 |
| Caso red social: datos | 28 | "A→B significa que A sigue a B"; usuarios A-E; aristas A→B, A→C, B→C, C→D, D→E, E→C |
| Caso red social: código, figura y resultados | 29 | `nx.degree_centrality(G)`, `nx.pagerank(G, alpha=0.85)`. Grado: A 0.50, B 0.50, C 1.00, D 0.50, E 0.50. PageRank: A 0.03, B 0.04, C 0.33, D 0.31, E 0.29 (verificado con networkx 3.4.2: 0.0300, 0.0428, 0.3272, 0.3081, 0.2919). A no tiene enlaces entrantes: $PR(A)=0.15/5=0.03$ exacto; $PR(B)=0.03+0.85\cdot0.03/2=0.04275$. Ejemplo ideal para hacer PageRank a mano. Sin nodos colgantes (todos tienen salida) |
| PageRank: interpretación | 30 | "Un usuario con muchos seguidores influyentes tendrá un PageRank más alto" |
| Karate Club: descripción y código | 30-31 | 34 miembros; `nx.karate_club_graph()`, `degree_centrality`, `betweenness_centrality`, `pagerank(alpha=0.85)`, `greedy_modularity_communities` (llamado "Louvain", ver erratas), `spring_layout`, impresión del top 5 |
| Karate Club: explicación | 32 | 34 nodos y 78 aristas (verificado); grado = conexiones directas; intermediación = "puentes"; PageRank = importancia de los vecinos; comunidades por modularidad; spring_layout como modelo de fuerzas |
| Karate Club: resultados | 33 | grado: 33 0.52, 0 0.48, 32 0.36, 2 0.30, 1 0.27; intermediación: 0 0.44, 33 0.30, 32 0.15, 2 0.14, 31 0.14; PageRank: 33 0.10, 0 0.09, 32 0.08, 2 0.06, 1 0.06; comunidades: {8, 14, 15, 18, 20, 22-33}, {1, 2, 3, 7, 9, 12, 13, 17, 21}, {0, 4, 5, 6, 10, 11, 16, 19}. Todo verificado con networkx 3.4.2 (modularidad de esa partición: 0.411). No se muestra la figura del grafo |
| Conclusiones: preguntas de reflexión | 34 | CNN en tu área; qué métrica usar para encontrar influyentes en una red de millones |
| Conclusiones sobre redes neuronales | 34 | |
| Conclusiones sobre grafos; GNN | 35 | Graph Neural Networks solo mencionadas (predicción de enlaces, fraude) |
| Mapa conceptual | 36 | raíz "Generación estaídística de datos" (ver erratas); ramas redes neuronales y grafos complejos |
| Bibliografía | 37-38 | Goodfellow et al. (2016); Hastie et al.; **Newman (2010), Networks: An Introduction** (la referencia de grafos); scikit-learn, NetworkX, TensorFlow Probability, PyTorch, pgmpy, Keras-GAN, SciPy, Pandas |

## Erratas e inconsistencias

- **p.8, neurona del paraguas (la más importante)**: $0.6\cdot0.7+0.8\cdot0.8-0.5=0.42+0.64-0.5=0.56$, no 0.92. $\sigma(0.92)=0.7150$ está bien calculado, pero sobre una suma equivocada. El código de la misma página da la cifra correcta, "63.65%" ($\sigma(0.56)=0.6365$), así que texto y código se contradicen en la misma página. (0.92 no sale de ninguna lectura obvia: sin sesgo la suma es 1.06.) Buen reto de "cazar el error".
- **p.5**: "ANN, por sus siglas en inglés *Artificial Natural Network*": es *Artificial Neural Network* (bien escrito en p.7).
- **p.7**: "x2=x Probabilidad de lluvia" (sobra la x).
- **p.9, función de costo**: escribe la entropía cruzada binaria para el ejemplo de Iris de 3 clases que acaba de describir. Para varias clases es $-\frac1m\sum_i\sum_k y_{ik}\log\hat y_{ik}$ (la que usan después la CNN, `categorical_crossentropy`, y la RNN, `sparse_categorical_crossentropy`). Tampoco dice que la salida de 3 neuronas necesita softmax para ser "la probabilidad de cada clase".
- **p.10**: el parámetro se llama `hidden_layer_sizes` (bien en el código), no "hidden_layer_size" como dice la explicación. "Precisión del modelo" es exactitud (`score` de un clasificador).
- **p.13**: "como se especificó en el modelo del punto 2.2": es el punto 3.2 (el 2.2 son los objetivos).
- **p.14, convolución**: la fórmula $\sum I(m,n)K(i-m,j-n)$ es la convolución matemática (con el kernel volteado). Las capas `Conv2D` calculan en realidad la correlación cruzada, $\sum I(i+m,j+n)K(m,n)$. No cambia nada al aprender los pesos, pero la página no lo dice.
- **p.15**: "Entrenamos el modelo con 1 época para simplificar", pero el código dice `epochs=5` y la salida muestra "Epoch 1/5" a "Epoch 5/5". "Supera el 97%": la última val_accuracy es 0.9898.
- **p.16-17**: el resumen de p.16 nombra las capas `conv2d_2`, `dense_5`... ("sequential_5", el cuaderno se ejecutó varias veces) y el de p.17 `conv2d`, `dense`...; los números coinciden. "Total params: 675,104" en p.16 suma los 450 070 del optimizador Adam; los del modelo son 225 034 (p.17). La página no lo explica.
- **p.19**: "\*\*set(text):\*\*" con los asteriscos de Markdown impresos.
- **p.20-21**: "X.shape=(m,n,len(chars))X.shape=(m,n,len(chars))" y "len(chars)len(chars)", "(seq_length,len(chars))(seq_length,len(chars))": texto duplicado al pegar fórmulas. La salida de la tercera secuencia aparece como "' ' → 0" (es el espacio, poco visible).
- **p.21**: "Texto generado: hello worldo": después de "hello world" la red sigue generando con "rld", una secuencia que nunca vio, y repite 'o'. No se comenta. Con `length=10` desde "hel" el resultado debería tener 13 caracteres; en la captura se ven 12 (el último probablemente sea un espacio).
- **p.24, conectividad**: "Grafo desconectado: Algunos nodos no están conectados directamente". Mal: casi todo grafo conectado tiene nodos no adyacentes (en A---B---C---D de p.23, A y D no se tocan y el grafo es conectado). Desconectado significa que **no hay ningún camino** entre algún par. En dirigidos tampoco distingue fuerte y débilmente conectado.
- **p.24, camino**: "Secuencia de aristas que conecta un conjunto de nodos" es vago (no dice que aristas consecutivas comparten nodo ni que no se repiten nodos).
- **p.24, centralidad de grado en dirigidos**: la fórmula usa $deg(v)$ sin decir qué grado en un digrafo. NetworkX usa $(deg_{in}+deg_{out})/(n-1)$, por eso en p.29 C tiene 1.00 (3 entradas + 1 salida, entre 4). Hay `in_degree_centrality` y `out_degree_centrality`.
- **p.25, Dijkstra**: $d(u)=\min_{(u,v)\in E}\{d(v)+w(u,v)\}$ tiene los índices al revés para la distancia **desde** el origen en un grafo dirigido: lo correcto es $d(v)=\min_{(u,v)\in E}\{d(u)+w(u,v)\}$ con $d(s)=0$ (relajar las aristas que llegan). Así escrita es la ecuación de la distancia **hacia** un destino. En no dirigidos da igual. Además es la ecuación de Bellman que cumplen las distancias, no el algoritmo (falta el orden voraz con la cola de prioridad, que es lo que hace Dijkstra).
- **p.25, PageRank**: la fórmula está bien, pero no dice qué pasa con los nodos sin enlaces salientes (OutDegree 0), ni que se resuelve iterando. Es la versión con $\frac{1-d}{n}$ (suma 1), la que implementa NetworkX.
- **p.28-29, "influencia"**: con "A→B = A sigue a B", la influencia la dan las aristas entrantes (seguidores), pero el caso usa `degree_centrality`, que suma entrantes y salientes: A, que no tiene ningún seguidor, empata con B, D y E en 0.50. La medida coherente es `in_degree_centrality` (A 0.00, B 0.25, C 0.75, D 0.25, E 0.25). PageRank sí lo refleja (A 0.03).
- **p.30 y p.32, Louvain**: `greedy_modularity_communities` **no es Louvain**: es el algoritmo voraz de Clauset-Newman-Moore (2004), que también maximiza la modularidad pero uniendo comunidades de a pares. Louvain en NetworkX es `nx.community.louvain_communities` (desde 2.8). p.25 nombra Louvain y nunca se usa.
- **p.30-33, Karate Club**: no menciona la historia del dataset (Zachary, 1977: el club se partió en dos), que es lo que hace interesante comparar las comunidades encontradas con la división real; tampoco se muestra la figura del grafo que dibuja el código.
- **p.36, mapa conceptual**: la raíz dice "Generación estaídística de datos" (con errata y copiada de otra unidad: el tema de la UD6 es grafos y redes neuronales).
- **p.37-38, bibliografía**: TensorFlow Probability, pgmpy (redes bayesianas) y Keras-GAN no tienen relación con la unidad (parecen arrastrados de otra). Newman (2010) tiene segunda edición (2018). Hastie et al. figura como 2017 (es la 2.ª ed. de 2009, reimpresa).
- **p.4**: el objetivo 1 promete Transformers y el mapa conceptual (p.36) los incluye; la unidad no los desarrolla.
- **Título**: el archivo y la carpeta dicen "Teoría de grafos complejos", pero las redes neuronales ocupan p.5-22 (18 páginas) y los grafos p.23-33 (11).

## No aparece

- **Matriz de adyacencia** (ni la palabra "matriz"), lista de adyacencia, lista de aristas como estructura, grafos ponderados más allá de la frase de Dijkstra. Ningún grafo del documento tiene pesos.
- Lema del apretón de manos ($\sum deg = 2m$), grado medio, distribución de grados.
- Ley de potencias, redes libres de escala, modelos de Erdős-Rényi, Barabási-Albert y Watts-Strogatz. "Pequeño mundo" y "grado desigual" se nombran en una línea (p.23) sin definición.
- Coeficiente de agrupamiento (clustering), longitud media de camino, diámetro. (Para el Karate Club: agrupamiento medio 0.571, longitud media 2.41, diámetro 5, calculados con networkx; no están en el documento.)
- BFS y DFS, pseudocódigo o ejemplo trabajado de Dijkstra, Bellman-Ford.
- Fórmulas de centralidad de intermediación ($\sum_{s\ne v\ne t}\sigma_{st}(v)/\sigma_{st}$) y de cercanía ($(n-1)/\sum_u d(v,u)$); centralidad de vector propio (ni nombrada).
- PageRank como cadena de Markov o paseo aleatorio, matriz de Google, método de la potencia, nodos colgantes.
- Modularidad (fórmula $Q$), cómo funciona Louvain, Girvan-Newman.
- Redes neuronales: perceptrón como algoritmo (regla de actualización) y el problema XOR; fórmulas de ReLU, tanh y softmax (solo nombradas; la sigmoide sí aparece, p.8); retropropagación con regla de la cadena; notación matricial de una capa ($\mathbf{h}=f(W\mathbf{x}+\mathbf{b})$); conteo de parámetros de un MLP (para 4-10-3: 83); LSTM y GRU (solo nombradas); Transformers.
- Graph Neural Networks: solo una mención en p.35.

## Búsqueda rápida por concepto

- **Grafos y matriz de adyacencia**: definición $G=(V,E)$, dirigido y no dirigido p.23; ejemplo A---B---C---D p.23; grafo dirigido en código (`add_edges_from`, lista de aristas) p.27 y p.28-29; grafo bipartito p.26. La matriz de adyacencia **no aparece**. Grafos ponderados: solo "aristas ponderadas" y $w(u,v)$ en Dijkstra p.25.
- **Grado y su distribución**: grado, grado de entrada y de salida p.24; "grado de conectividad desigual" (hubs) p.23; grados en los ejemplos p.27 y p.29. Grado medio, ley de potencias, libres de escala, Barabási-Albert y Erdős-Rényi **no aparecen**.
- **Caminos y Dijkstra**: camino y ciclo p.24; conectividad p.24 (con errata); Dijkstra p.25 (con errata en los índices); aplicación a rutas p.26. BFS y diámetro **no aparecen**.
- **Centralidad**: centralidad de grado con fórmula p.24, ejemplos p.27 y p.29; intermediación y cercanía en una línea p.24; intermediación en el Karate Club p.30-33 (puentes p.32, resultados p.33); pregunta de reflexión sobre influyentes p.34. Vector propio **no aparece**.
- **PageRank**: fórmula y $d=0.85$ p.25; caso red social A-E con resultados p.28-29 (cálculo a mano posible); interpretación p.30; Karate Club p.30-33; recomendaciones p.26. Cadena de Markov y matriz de Google **no aparecen**.
- **Comunidades y modularidad**: comunidades como propiedad de redes complejas p.23; clusterización y Louvain (nombrado) p.25; comunidades del Karate Club p.30-33 (código p.30, explicación p.32, resultado p.33; el método usado es CNM, no Louvain). Fórmula de modularidad y Girvan-Newman **no aparecen**.
- **Mundo pequeño**: una línea en p.23. Watts-Strogatz, coeficiente de agrupamiento y longitud media de camino **no aparecen**.
- **Neurona y perceptrón**: neurona biológica vs artificial p.5; perceptrón (historia) p.6; neurona $y=f(\sum w_ix_i+b)$ p.7; ejemplo del paraguas p.7-8 (con errata en p.8).
- **Funciones de activación**: sigmoide con fórmula p.8; ReLU p.14-15; tanh p.21; softmax p.18 y p.21 (todas sin fórmula salvo la sigmoide).
- **Red multicapa**: capas p.9; propagación hacia adelante, retropropagación, entropía cruzada p.9; gradiente descendente p.10; MLP con Iris p.10; la red como grafo dirigido p.11-13.
- **CNN**: p.14-17 (convolución p.14, código MNIST p.15, parámetros p.16-17).
- **RNN**: fórmulas p.18; ejemplo "hello world" p.19-22.
