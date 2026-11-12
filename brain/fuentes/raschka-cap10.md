# Mapa de citas: Raschka, Liu y Mirjalili, cap. 10 "Working with Unlabeled Data – Clustering Analysis"

Archivo: `/Users/franciscocastillo/brain/02-Biblioteca/Machine-Learning/PyTorch-Scikit-Learn/Cap10 - Working with Unlabeled Data – Clustering Analysis.pdf`
(30 páginas PDF; el guion del nombre es un "–" largo).
Correspondencia verificada: página impresa = página PDF + 304, es decir, PDF N = impresa − 304. Comprobado en PDF 2 = p. 306, PDF 17 = p. 321,
PDF 30 = p. 334 (cada página del archivo se leyó con `pdftotext -layout`; las fórmulas de las pp. 311-312 y las tablas-figura 10.8, 10.9 y 10.10
de las pp. 321, 322 y 324 se revisaron además como imagen). La PDF 1 no lleva número impreso (abre el capítulo con un "10"); por el desfase le
corresponde la 305.
Edición: Machine Learning with PyTorch and Scikit-Learn (Packt, 2022). Datos del capítulo: `make_blobs` (150 puntos, 3 grupos) para k-means,
codo y silueta; 5 ejemplos aleatorios × 3 features (X, Y, Z) con `np.random.seed(123)` para el jerárquico; `make_moons` (200 puntos) para DBSCAN.

| Tema | PDF | Impresa | Sección | Notas |
|---|---|---|---|---|
| Introducción | 1 | 305 | apertura | aprendizaje no supervisado; k-means, árboles jerárquicos de abajo arriba, densidad |
| Clustering y aplicaciones | 1 | 305 | Grouping objects by similarity using k-means | agrupar documentos, música, clientes; k-means pertenece al clustering basado en prototipos |
| Prototipos: centroide y medoide | 2 | 306 | k-means clustering using scikit-learn | centroide (media, features continuas) o medoide (categóricas); k-means bueno con grupos esféricos; hay que fijar k a priori; anuncia codo y silueta |
| Datos make_blobs | 2-3 | 306-307 | idem | `make_blobs(n_samples=150, n_features=2, centers=3, cluster_std=0.5, shuffle=True, random_state=0)`; Figure 10.1 (p. 307) |
| Algoritmo k-means en 4 pasos | 3 | 307 | idem | 1) k centroides al azar entre los ejemplos; 2) asignar cada ejemplo al centroide μ⁽ʲ⁾ más cercano; 3) mover los centroides al centro de lo asignado; 4) repetir hasta que no cambie o tolerancia / máx. iteraciones |
| Distancia euclidiana al cuadrado | 3 | 307 | idem | d(x, y)² = Σⱼ₌₁ᵐ (xⱼ − yⱼ)² = ‖x − y‖₂²; similitud = opuesto de la distancia |
| SSE e inercia | 4 | 308 | idem | SSE = Σᵢ₌₁ⁿ Σⱼ₌₁ᵏ w⁽ⁱ'ʲ⁾ ‖x⁽ⁱ⁾ − μ⁽ʲ⁾‖₂²; w⁽ⁱ'ʲ⁾ = 1 si x⁽ⁱ⁾ está en el cluster j, 0 si no; "cluster inertia"; superíndice i = ejemplo, j = cluster |
| KMeans en scikit-learn | 4 | 308 | idem | `KMeans(n_clusters=3, init='random', n_init=10, max_iter=300, tol=1e-04, random_state=0)`; `fit_predict`; n_init = 10 corridas, se queda la de menor SSE |
| Convergencia y clusters vacíos | 4 | 308 | idem | para antes si converge; `tol` (ver erratas); clusters vacíos: no pasa en k-medoids ni fuzzy C-means; scikit-learn reubica el centroide en un punto lejano |
| Escalado de features (recuadro) | 5 | 309 | recuadro Feature scaling | estandarizar (z-score) o min-max antes de usar distancia euclidiana |
| Graficar clusters y centroides | 5-6 | 309-310 | idem | `km.cluster_centers_`; Figure 10.2 (p. 310) |
| Supuestos y límites de k-means | 6 | 310 | idem | k a priori; clusters sin solapamiento y no jerárquicos; al menos un elemento por cluster; jerárquico y DBSCAN no piden k ni esferas |
| k-means++: motivación | 6-7 | 310-311 | A smarter way of placing the initial cluster centroids using k-means++ | semillas malas dan malos clusters o convergencia lenta; alternativa: varias corridas y elegir por SSE; Arthur y Vassilvitskii 2007 |
| k-means++: algoritmo | 7 | 311 | idem | 1) M vacío; 2) primer centroide al azar; 3) para cada x⁽ⁱ⁾ fuera de M, d(x⁽ⁱ⁾, M)² mínima; 4) siguiente centroide μ⁽ᵖ⁾ con probabilidad d(μ⁽ᵖ⁾, M)²/Σᵢ d(x⁽ⁱ⁾, M)²; 5) repetir hasta k; 6) k-means clásico |
| k-means++ en scikit-learn | 7 | 311 | idem | `init='k-means++'` es el valor por defecto y el recomendado |
| Clustering duro vs blando | 7 | 311 | Hard versus soft clustering | duro = un cluster por ejemplo; blando o difuso = uno o más; fuzzy C-means (FCM, soft/fuzzy k-means); Dunn 1973; Bezdek (ver erratas); vector binario de pertenencia en k-means |
| Pertenencias de FCM | 8 | 312 | idem | ejemplo [0.1, 0.85, 0.05], valores en [0, 1] que suman 1; 4 pasos: pertenencias al azar, centroides, actualizar pertenencias, repetir |
| Función objetivo Jₘ | 8 | 312 | idem | Jₘ = Σᵢ₌₁ⁿ Σⱼ₌₁ᵏ (w⁽ⁱ'ʲ⁾)ᵐ ‖x⁽ⁱ⁾ − μ⁽ʲ⁾‖₂²; w⁽ⁱ'ʲ⁾ ∈ [0, 1]; m = coeficiente de fuzzificación (fuzzifier), típicamente m = 2; m mayor = clusters más difusos |
| Fórmula de la pertenencia | 8 | 312 | idem | w⁽ⁱ'ʲ⁾ = [Σ_c₌₁ᵏ (‖x⁽ⁱ⁾ − μ⁽ʲ⁾‖₂/‖x⁽ⁱ⁾ − μ⁽ᶜ⁾‖₂)^(2/(m−1))]⁻¹; desarrollada para k = 3 (tres términos) |
| Centroide ponderado de FCM | 9 | 313 | idem | μ⁽ʲ⁾ = Σᵢ (w⁽ⁱ'ʲ⁾)ᵐ x⁽ⁱ⁾ / Σᵢ (w⁽ⁱ'ʲ⁾)ᵐ; cada iteración más cara que en k-means pero menos iteraciones; resultados parecidos (Ghosh y Dubey 2013); no está en scikit-learn: scikit-fuzzy |
| Método del codo: inercia | 9 | 313 | Using the elbow method to find the optimal number of clusters | métricas intrínsecas; SSE = distortion; `km.inertia_` → "Distortion: 72.48" |
| Codo: código | 9-10 | 313-314 | idem | k de 1 a 10 con `KMeans(init='k-means++', n_init=10, max_iter=300, random_state=0)`; la distorsión baja al subir k; Figure 10.3: codo en k = 3 |
| Silueta: definición | 10 | 314 | Quantifying the quality of clustering via silhouette plots | sirve también para otros algoritmos; a⁽ⁱ⁾ cohesión = distancia media a los de su cluster; b⁽ⁱ⁾ separación = distancia media al cluster más cercano; s⁽ⁱ⁾ = (b⁽ⁱ⁾ − a⁽ⁱ⁾)/max{b⁽ⁱ⁾, a⁽ⁱ⁾} |
| Silueta: rango e interpretación | 11 | 315 | idem | entre −1 y 1; 0 si b = a; cerca de 1 si b ≫ a; `silhouette_samples`; la media equivale a `numpy.mean(silhouette_samples(...))` |
| Gráfico de silueta k = 3 | 11-12 | 315-316 | idem | `silhouette_samples(X, y_km, metric='euclidean')`; barras horizontales ordenadas por cluster con `cm.jet`; línea de la media; Figure 10.4 (p. 316): coeficientes lejos de 0, tamaños parecidos = buen clustering |
| Mal clustering con k = 2 | 13-14 | 317-318 | idem | un centroide cae entre dos grupos; Figure 10.5 (p. 318) |
| Silueta de k = 2 | 14-15 | 318-319 | idem | Figure 10.6 (p. 319): siluetas de largos y anchos visiblemente distintos |
| Clustering jerárquico: ventajas | 15 | 319 | Organizing clusters as a hierarchical tree | dendrogramas (árbol binario), taxonomías, no hay que fijar k |
| Aglomerativo vs divisivo | 16 | 320 | idem | divisivo: de un cluster a singletons; aglomerativo: de singletons uniendo los pares más cercanos hasta uno |
| Enlace simple y completo | 16 | 320 | Grouping clusters in a bottom-up fashion | simple = distancia entre los miembros más parecidos; completo = entre los más distintos; Figure 10.7 (enlace completo) |
| Enlace promedio y Ward (recuadro) | 16 | 320 | recuadro Alternative types of linkages | promedio: mínima distancia media entre todos los miembros de los dos clusters; Ward: se unen los dos que menos aumentan el SSE total intra-cluster |
| Algoritmo de enlace completo | 16-17 | 320-321 | idem | 1) matriz de distancias por pares; 2) cada punto un cluster; 3) unir los dos más cercanos según los miembros más distantes; 4) actualizar la matriz de enlace; 5) repetir |
| Datos del ejemplo | 17 | 321 | idem | `np.random.seed(123)`; `np.random.random_sample([5, 3])*10`; IDs ID_0 a ID_4, columnas X, Y, Z; Figure 10.8 con los valores (ID_0 = 6.964692, 2.861393, 2.268515, ...) |
| Matriz de distancias | 17-18 | 321-322 | Performing hierarchical clustering on a distance matrix | `pdist(df, metric='euclidean')` (condensada) y `squareform` (simétrica); Figure 10.9 (p. 322): p. ej. d(ID_0, ID_4) = 3.835396, d(ID_1, ID_2) = 4.347073 |
| linkage: documentación | 18-19 | 322-323 | idem | `help(linkage)`: matriz condensada o datos m × n; `method`, `metric`; devuelve la matriz de enlace |
| Tres formas de llamar a linkage | 19 | 323 | idem | incorrecta: la matriz cuadrada `row_dist` con `metric='euclidean'`; correctas: `linkage(pdist(df, metric='euclidean'), method='complete')` y `linkage(df.values, method='complete', metric='euclidean')` |
| Matriz de enlace | 19-20 | 323-324 | idem | una fila por fusión; Figure 10.10 (p. 324): (0, 4, 3.835, 2), (1, 2, 4.347, 2), (3, 5, 5.900, 3), (6, 7, 8.317, 5); última columna = tamaño del cluster |
| Dendrograma | 20-21 | 324-325 | idem | `dendrogram(row_clusters, labels=labels)`; en negro con `set_link_color_palette(['black'])` y `color_threshold=np.inf`; Figure 10.11 (p. 325): primero ID_0 con ID_4, luego ID_1 con ID_2 |
| Dendrograma + mapa de calor | 21-23 | 325-327 | Attaching dendrograms to a heat map | 4 pasos: `fig.add_axes([0.09, 0.1, 0.2, 0.6])` y `dendrogram(..., orientation='left')`; reordenar con `df.iloc[row_dendr['leaves'][::-1]]`; `axm.matshow(..., interpolation='nearest', cmap='hot_r')`; quitar ejes y `colorbar`; Figure 10.12 (p. 327) |
| AgglomerativeClustering | 23-24 | 327-328 | Applying agglomerative clustering via scikit-learn | permite fijar el número de clusters (podar el árbol); `AgglomerativeClustering(n_clusters=3, affinity='euclidean', linkage='complete')` → [1 0 0 2 1]; con 2 → [0 1 1 0 0]; ID_3 se une a ID_0 e ID_4 |
| DBSCAN: densidad | 24 | 328 | Locating regions of high density via DBSCAN | density-based spatial clustering of applications with noise; sin esferas ni jerarquías; densidad = número de puntos dentro de un radio ε |
| Núcleo, borde y ruido | 24 | 328 | idem | núcleo: al menos MinPts vecinos dentro de ε; borde: menos de MinPts vecinos pero dentro de ε de un núcleo; ruido: el resto |
| DBSCAN en 2 pasos | 25 | 329 | idem | 1) un cluster por núcleo o grupo de núcleos conectados (a distancia ≤ ε); 2) cada borde al cluster de su núcleo; Figure 10.13 (núcleo, borde, ruido); no asume esferas y puede dejar puntos sin cluster |
| Datos make_moons | 25-26 | 329-330 | idem | `make_moons(n_samples=200, noise=0.05, random_state=0)`; dos medias lunas de 100 puntos; Figure 10.14 |
| k-means y completo fallan | 26-28 | 330-332 | idem | `KMeans(n_clusters=2, random_state=0)`; `AgglomerativeClustering(n_clusters=2, affinity='euclidean', linkage='complete')`; Figure 10.15 (p. 332) |
| DBSCAN acierta | 28-29 | 332-333 | idem | `DBSCAN(eps=0.2, min_samples=5, metric='euclidean')`; Figure 10.16 (p. 333): separa las dos lunas |
| Desventajas de DBSCAN | 29 | 333 | idem | maldición de la dimensionalidad (también afecta a k-means y jerárquico); dos hiperparámetros (MinPts, ε) difíciles si las densidades varían mucho |
| Clustering espectral (recuadro) | 29 | 333 | recuadro Graph-based clustering | cuarta familia; vectores propios de una matriz de similitud o distancia; tutorial de von Luxburg 2007 (arXiv 0711.0189) |
| Elegir algoritmo y métrica | 30 | 334 | idem | la métrica de distancia y el conocimiento del dominio pesan tanto como el algoritmo; reducir dimensión antes (PCA, t-SNE, cap. 5) |
| Summary | 30 | 334 | Summary | k-means, codo y silueta, aglomerativo con dendrograma, DBSCAN; siguiente: redes neuronales multicapa |

Observaciones para citar:
- Las fórmulas centrales están todas en las pp. 307-315 (PDF 3-11): distancia (307), SSE (308), k-means++ (311), FCM (312-313), silueta (314).
- El libro da la definición de Ward y del enlace promedio solo en un recuadro de texto (p. 320), sin fórmula ni ejemplo con código.
  Con los mismos 5 ejemplos se obtiene (comprobado con SciPy 1.15.3): simple 3.835, 4.347, 4.383, 4.974; promedio 3.835, 4.347, 5.141, 6.309;
  Ward 3.835, 4.347, 5.578, 8.332 (las dos primeras fusiones coinciden en todos los enlaces). Esos números no están en el libro.
- El método del codo no tiene fórmula: es la curva de `inertia_` contra k (p. 314). Valores reproducidos con scikit-learn 1.6.1 para k = 1 ... 10:
  713.7, 283.5, 72.5, 62.9, 54.3, 47.5, 39.8, 35.4, 30.8, 28.1 (no aparecen en el libro, que solo muestra la figura).
- El libro no da el valor de la silueta media; con scikit-learn 1.6.1 sale 0.714 para k = 3 y 0.585 para k = 2.
- La matriz de enlace se lee junto con la Figure 10.9: cada distancia de la Figure 10.10 es una entrada de la matriz de la p. 322 (la del par
  más distante), lo que permite comprobar a mano el enlace completo.

## Erratas e inconsistencias

- **p. 313 (PDF 9)**: "identify the value of k where the distortion begins to increase most rapidly". La distorsión baja al subir k (lo dice la
  frase anterior); el codo es donde deja de bajar rápido.
- **p. 321 (PDF 17)**: "Repeat steps 2-4 until one single cluster remains". El paso 2 es la inicialización (cada punto un cluster); lo que se
  repite son los pasos 3 y 4.
- **p. 323 (PDF 19)**: "The first and second columns denote the most dissimilar members in each cluster". Son los índices de los dos clusters
  que se fusionan (los índices ≥ 5 son clusters creados antes, como el 5 = {ID_0, ID_4}), no miembros. La tercera columna sí es la distancia
  de enlace completo, que es la de los miembros más distantes.
- **p. 312 (PDF 8)**: dice que m es "any number greater than or equal to one", pero la fórmula de la pertenencia tiene el exponente 2/(m − 1),
  que no está definido con m = 1. Debe ser m > 1. Además "the larger the value of m, the smaller the cluster membership" es impreciso: al subir m
  las pertenencias se acercan a 1/k (más parejas), no simplemente más chicas. En los vectores de ejemplo (pp. 311-312) todas las filas dicen
  w⁽ⁱ'ʲ⁾; serían w⁽ⁱ'¹⁾, w⁽ⁱ'²⁾, w⁽ⁱ'³⁾.
- **p. 311 (PDF 7)**: el autor del FCM es James C. Bezdek, no "Bedzek"; el libro es de 1981 (el año 2013 citado es la reimpresión de Springer).
- **p. 308 (PDF 4)**: describe `tol` como la tolerancia sobre los cambios del SSE intra-cluster. En scikit-learn es la tolerancia relativa sobre
  la norma de Frobenius del cambio de los centros entre dos iteraciones.
- **p. 315 (PDF 11)**: nombra la función `silhouette_scores`; se llama `silhouette_score` (comprobado: `from sklearn.metrics import
  silhouette_scores` da ImportError).
- **p. 316 (PDF 12)**: llama "dotted line" a la línea de la media, pero el código usa `linestyle="--"` (discontinua).
- **p. 328 (PDF 24)**: "n_cluster parameter" y "n_cluster=2"; el parámetro es `n_clusters`.
- **p. 328 (PDF 24)**: define el núcleo como "at least MinPts neighboring points within ε". En scikit-learn `min_samples` cuenta al propio punto,
  así que con `min_samples=5` bastan 4 vecinos más.
- **Versiones de librerías** (comprobado con scikit-learn 1.6.1, NumPy 2.1.3, SciPy 1.15.3, Matplotlib 3.10.0 instalados en esta máquina):
  - `AgglomerativeClustering(..., affinity='euclidean', ...)` (pp. 328 y 331) falla con TypeError: `affinity` se renombró a `metric` y se eliminó
    en la 1.4. Con `metric='euclidean'` se reproducen [1 0 0 2 1] y [0 1 1 0 0].
  - `KMeans(n_clusters=2, random_state=0)` (p. 330) usa ahora `n_init='auto'` (una sola corrida con k-means++), no 10 como cuando se escribió.
    El resto de llamadas a `KMeans` fijan `n_init=10` y no cambian: la distorsión 72.48 de la p. 313 se reproduce exacta.
  - `axm.set_xticklabels([''] + list(...))` (p. 326) sigue alineando bien en Matplotlib 3.10 (hay un tick en −1), pero lanza un UserWarning
    ("set_ticklabels() should only be used with a fixed number of ticks"). Lo robusto es `set_xticks(range(n))` y luego las etiquetas sin el ''.
  - `linkage` con la matriz cuadrada (el "incorrect approach" de la p. 323) hoy lanza un ClusterWarning y da distancias infladas (6.52, 6.73, 8.54,
    12.44), tal como advierte el libro. Las dos formas correctas reproducen la Figure 10.10 exacta.
  - DBSCAN de la p. 332 da dos clusters de 100 puntos y ningún punto de ruido.
