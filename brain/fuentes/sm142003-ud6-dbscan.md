# Mapa de citas: SM142003 UD6 "DBSCAN" y "Clustering Validation" (dos presentaciones y el caso en R)

Materia: SM142003 Clasificaciones y agrupaciones (máster IA, UAX). Autor: Jorge Colomer Sánchez.
Carpeta: `/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142003 - Clasificaciones y agrupaciones/UD6. DBSCAN/`
(ojo: "SEMESTRE 1 " lleva un espacio al final). En URL: `.../SEMESTRE%201%20/SM142003%20-%20Clasificaciones%20y%20agrupaciones/UD6.%20DBSCAN/`.
Archivos:
- `ud6-dbscan.html` (7.1 MB): diapositivas "Unit 6: DBSCAN: Density-Based Spatial Clustering and Application with Noise", portada 6 March 2026.
- `ud7-cluster-validation.html` (11.1 MB): diapositivas "**Unit 7**: Clustering Validation", portada 3 June 2026. Está en la carpeta de la UD6.
- `ud6-caso.html` (10.4 MB): documento del caso "Práctica 1 - DBSCAN" (fecha `date: today`, es la de renderizado: 23 de mayo de 2026).
- También hay `Estaciones_Meteo.ipynb` y `weather_station.csv` (no mapeados aquí).
Bibliografía declarada: UD6 (diap. 16): Alonso (Icesi, 2025), Bhatia y Chiu (2017), **Kassambara (Practical Guide to Cluster Analysis in R, 2017)**,
**Rhys (Machine Learning with R, the Tidyverse, and mlr, 2020)**. UD7 (diap. 48): Bezdek (1981), Brock, Datta y Pihur (clValid, JSS 2008), Kassambara (2017),
Kaufman y Rousseeuw (1990), Giordani et al. (2020), Tibshirani, Walther y Hastie (gap, JRSS 2001).

## Formato y cómo enlazar

- Las dos presentaciones son reveal.js 5.1.0 (UD6 con Quarto 1.8.26, UD7 con Quarto 1.9.36), configuración leída del archivo: `hash: true`,
  `hashOneBasedIndex: false`, `navigationMode: 'default'`, `slideNumber: 'c/t'`. Misma regla que `sm142003-ud3-knn.md`.
- Ancla: con `id`, `#/<id>`; sin id, `#/h/v` (índices desde 0, v = 0 se omite). `#/h/v` funciona siempre.
- El número visible "c/t" es el orden plano: escribir "diapositiva 12 de 16" o "diapositiva 26 de 48". No hay diapositivas ocultas en ninguna.
- **`ud6-dbscan.html`: 16 diapositivas.** Pilas: 0 portada, 1 índice, 2 (4 diap.), 3 (7), 4 (1), 5 (2). `id="references"` duplicado (15 y 16): la lista es `#/5/1`.
- **`ud7-cluster-validation.html`: 48 diapositivas.** Pilas: 0, 1, 2 (1), 3 (11), 4 (9), 5 (17), 6 (6), 7 (2). `id="references"` duplicado (47 y 48): la lista es `#/7/1`.
  Cuatro diapositivas tienen ids larguísimos porque el icono de R (`{{< fa brands r-project >}}`) no se renderizó y quedó en hexadecimal dentro del id;
  para esas usar la forma corta: diap. 5 = `#/3/1`, 19 = `#/4/4`, 31 = `#/5/7`, 44 = `#/6/3`.
- Enlace concreto (gráfico de k-distancias, diap. 12 de la UD6):
  `file:///Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE%201%20/SM142003%20-%20Clasificaciones%20y%20agrupaciones/UD6.%20DBSCAN/ud6-dbscan.html#/method-for-determining-the-optimal-epsilon-value`
  y sin id (silueta, diap. 26 de la UD7): `.../UD6.%20DBSCAN/ud7-cluster-validation.html#/5/2`.
- **El caso no es una presentación**: documento HTML de Quarto 1.9.36 de una página, con índice lateral y 3 secciones de nivel 1 sin subsecciones,
  enlazadas con `#<id>` (sin barra). Las secciones son largas: para un punto concreto, citar la sección y describir el paso.
- Cómo se verificó: `<section>` leídas con BeautifulSoup (pilas, ids, texto, fórmulas, bloques `<pre>` de código y salida); configuración leída del archivo.
  No se abrió en un navegador.

## `ud6-dbscan.html` (16 diapositivas)

| Tema | Diapositiva (n.º y ancla) | Notas |
|---|---|---|
| Portada | 1, `#/title-slide` | |
| Índice | 2, `#/TOC` | Concepts of density-based clustering, The DBSCAN algorithm, Resources & Next Steps, References |
| 1 **Clustering por densidad** | 3, `#/concepts-of-density-based-clustering` | k-means, PAM y jerárquico buscan grupos esféricos o convexos y sufren con ruido; datos reales: formas arbitrarias (óvalos, líneas, "S") y atípicos; Figure 1 (5 grupos + atípicos) |
| k-means falla en multishapes | 4, `#/2/1` | código: `library(factoextra)`, `data("multishapes")`, `df <- multishapes[, 1:2]`, `set.seed(123)`, `km.res <- kmeans(df, 5, nstart = 25)`, `fviz_cluster(km.res, df, frame = FALSE, geom = "point")`; Figure 2: k-means con k = 5 no recupera las formas |
| Qué es DBSCAN | 5, `#/2/2` | Ester et al. (1996); ventajas: no pide k, cualquier forma, detecta atípicos |
| Intuición | 6, `#/2/3` | grupos = regiones densas separadas por regiones poco densas; cada punto de un grupo tiene al menos un mínimo de vecinos en un radio dado; Figure 3 |
| 2 **ε y MinPts** | 7, `#/the-dbscan-algorithm` | ε = radio de la vecindad (ε-neighborhood); MinPts = mínimo de vecinos para "denso"; un punto es núcleo si su ε-vecindad tiene al menos MinPts **incluido él mismo** |
| 2.1 **Núcleo, borde y ruido** | 8, `#/point-classification` | núcleo: ≥ MinPts en su radio; borde: menos de MinPts pero dentro de la vecindad de un núcleo; ruido: ni lo uno ni lo otro; Figure 4 con MinPts = 6: x núcleo ($neighbors_\epsilon(x)=6$), y borde, z ruido |
| 2.2 **Alcanzabilidad y conectividad** | 9, `#/defining-connectivity` | directamente alcanzable (A en la ε-vecindad del núcleo B), alcanzable por densidad (cadena de núcleos, permite formas no esféricas), conectado por densidad (A y B comparten un núcleo "ancestro" C); grupo = conjunto de puntos conectados por densidad |
| 2.3 **Algoritmo** | 10, `#/how-the-dbscan-algorithm-works` | 4 pasos: vecinos a distancia ε de cada punto, marcar núcleos; por cada núcleo sin grupo crear uno y añadir recursivamente los conectados por densidad; seguir con los no visitados; lo que queda fuera es ruido; Figure 5 (pie largo: caso al azar, núcleos, alcanzables, borde y ruido) |
| 2.4 Estimar parámetros | 11, `#/parameter-estimation` | MinPts crece con el tamaño de los datos, al menos 3; ε con el **gráfico de k-distancias** (distancia al k-ésimo vecino, k = minPts), buscar el codo |
| 2.5 **Gráfico de k-distancias** | 12, `#/method-for-determining-the-optimal-epsilon-value` | distancias ordenadas de forma ascendente, buscar la "rodilla"; `dbscan::kNNdistplot()`; Figure 6; ε óptimo ≈ **0.15** (multishapes) |
| 2.6 Predecir | 13, `#/cluster-predictions-with-the-dbscan-algorithm` | `predict.dbscan(object, data, newdata)` del paquete `fpc` |
| 3 Recursos | 14, `#/resources-next-steps` | CRAN Task View Cluster Analysis & Finite Mixture Models; paquetes `dbscan` y `fpc` |
| 4 Referencias | 15, `#/references` | portada |
| Lista de referencias | 16, `#/5/1` | no usar `#/references` |

## `ud7-cluster-validation.html` (48 diapositivas)

Datos: `iris` sin `Species` (escalado), un `random_df` uniforme con el rango de cada columna de iris (`runif`), y `USArrests` escalado.
Paquetes (diap. 5): tidyverse, showtext, here, factoextra, seriation, ggeasy, NbClust, clustertend, patchwork, fpc, clValid.

| Tema | Diapositiva (n.º y ancla) | Notas y código |
|---|---|---|
| Portada | 1, `#/title-slide` | "Unit 7: Clustering Validation" |
| Índice | 2, `#/TOC` | 5 secciones + referencias |
| 1 Qué es validar | 3, `#/what-is-cluster-validation` | antes (tendencia y cuántos grupos), durante (algoritmo), después (medidas); "no busques grupos donde no los hay" |
| 2 **Tendencia de agrupamiento** | 4, `#/assessing-clustering-tendency` | los algoritmos son "ciegos": siempre devuelven grupos, aunque los datos sean aleatorios; probar la tendencia primero |
| 2.1 Paquetes | 5, `#/3/1` | `pacman::p_load(...)` (lista arriba) |
| 2.2 Datos | 6, `#/data-preparation` | `df <- iris[, -5]`; `random_df <- apply(df, 2, function(x){runif(length(x), min(x), (max(x)))})`; `scale()` de los dos |
| 2.3 **Inspección visual (PCA)** | 7, `#/visual-inspection-of-the-data` | `fviz_pca_ind(prcomp(df_scaled), habillage = iris$Species, ...)` y lo mismo con `random_scaled`; iris tiene 3 grupos, el aleatorio ninguno |
| 2.4 Por qué medir la tendencia | 8, `#/why-assessing-clustering-tendency` | `set.seed(123)`; `kmeans(df_scaled, 3)`; `fviz_cluster(list(data = df_scaled, cluster = km.res1$cluster), ellipse.type = "norm", ...)` |
| **k-means "encuentra" grupos en ruido** | 9, `#/3/5` | `kmeans(random_scaled, 3)` y `fviz_dend(hclust(dist(random_scaled)), k = 3, ...)`: los dos imponen 3 grupos a datos uniformes |
| 2.5 Métodos | 10, `#/methods-for-assessing-clustering-tendency` | solo título |
| 2.5.1 **Estadístico de Hopkins** | 11, `#/3/7` | muestrear n puntos $p_i$ de D, $x_i$ = distancia a su vecino más cercano; generar n puntos uniformes $q_i$, $y_i$ = distancia a su vecino más cercano en D; $H=\frac{\sum y_i}{\sum x_i+\sum y_i}$ (ver erratas) |
| Hipótesis de Hopkins | 12, `#/3/8` | H ≈ 0.5: uniforme; H0: D uniforme, H1: no uniforme; "H cerca de 0 → agrupable" (ver erratas) |
| Hopkins en R | 13, `#/3/9` | `clustertend::hopkins(data, n)`; `set.seed(123)`; `hopkins(df, n = nrow(df) - 1)` → **H = 0.1652538** (iris); aleatorio → **0.5129723** |
| 2.5.2 **Método visual (VAT)** | 14, `#/3/10` | Bezdek y Hathaway (2002): matriz de disimilitud euclídea, reordenarla (ODM), mostrarla como imagen (ODI); código con `seriation::seriate(dist_matrix, method = "VAT")`, `get_order`, reordenar la matriz, nombres `sprintf("%03d", ...)` para que `fviz_dist(order = FALSE)` respete el orden; comparación con `fviz_dist(dist(random_df))` |
| 3 **Número óptimo de grupos** | 15, `#/determining-the-optimal-number-of-clusters` | métodos directos (codo: minimizar WSS; silueta: maximizar la silueta media) y de contraste (gap); más de 30 índices y **regla de la mayoría** |
| 3.1 **Codo** | 16, `#/elbow-method` | correr k-means para varios k, WSS frente a k, buscar la rodilla; puede ser ambiguo; alternativa: silueta |
| 3.2 **Silueta media** | 17, `#/average-silhouette-method` | elegir el k que maximiza la silueta media (avg.sil) para k = 1 a 10 (ver erratas); menos subjetivo que el codo |
| 3.3 **Estadístico gap** | 18, `#/gap-statistic-method` | Tibshirani, Walther y Hastie (2001); $W_k$ observado; B conjuntos uniformes de referencia con $W_{kb}^*$; $Gap(k)=\frac{1}{B}\sum_{b=1}^{B}\log(W_{kb}^*)-\log(W_k)$; elegir el menor k con $Gap(k)\geq Gap(k+1)-s_{k+1}$; B = 500 da resultados estables |
| 3.4 Funciones en R | 19, `#/4/4` | `factoextra::fviz_nbclust()` (codo, silueta, gap para kmeans, pam, clara, hcut) y `NbClust::NbClust()` (30 índices) |
| 3.4.1 Datos | 20, `#/4/5` | `df <- scale(datasets::USArrests)`; `head(df)` |
| 3.4.2 **fviz_nbclust: codo, silueta, gap** | 21, `#/4/6` | `fviz_nbclust(x, FUNcluster, method = c("silhouette", "wss", "gap_stat"))`; `set.seed(1234)`; codo con `geom_vline(xintercept = 4)`; gap con `nstart = 25, nboot = 50` (recomienda 500); concluye **k = 4** |
| 3.4.3 **NbClust** | 22, `#/4/7` | argumentos `diss`, `distance`, `min.nc`, `max.nc`, `method`; `NbClust(df, distance = "euclidean", min.nc = 2, max.nc = 10, method = "kmeans")` |
| Resultado de NbClust | 23, `#/4/8` | `fviz_nbclust(nb)`: 11 índices proponen 2, 7 proponen 6, 2 proponen 3, 2 proponen 0, 1 cada uno 4, 5, 9, 10 → **mayoría: k = 2** |
| 4 **Tipos de validación** | 24, `#/cluster-validation-statistics` | interna (compacidad, separación), **externa** (contra etiquetas reales; elegir algoritmo), relativa (variar parámetros, p. ej. k de 2 a 10) |
| 4.1 **Medidas internas** | 25, `#/internal-measures-for-cluster-validation` | cohesión y separación; compacidad, separación, **conectividad** (0 a ∞, minimizar); forma general $\text{Index}=\frac{\alpha\times\text{Separation}}{\beta\times\text{Compactness}}$ |
| 4.1.1 **Silueta** | 26, `#/5/2` | $a_i$ = distancia media a su propio grupo, $b_i$ = distancia media al grupo vecino más cercano, $S_i=\frac{b_i-a_i}{\max(a_i,b_i)}$; ≈ 1 bien agrupado, ≈ 0 en la frontera, < 0 probablemente mal asignado ($a_i>b_i$) |
| 4.1.2 **Índice de Dunn** | 27, `#/5/3` | separación mínima entre grupos dividida por el diámetro máximo: $D=\text{min.separation}/\text{max.diameter}$; maximizar |
| 4.1.3 **Davies-Bouldin** | 28, `#/5/4` | similitud media de cada grupo con su más parecido; tightness frente a distancia entre centroides; **minimizar** (sin fórmula); recuadro No Free Lunch |
| 4.2 **Validación externa** | 29, `#/external-measures-for-clustering-validation` | Rand corregido y VI de Meila con `fpc::cluster.stats()`; "Rand corregido de −1 a 1" (ver erratas) |
| 4.3 **Validar DBSCAN** | 30, `#/validation-in-density-based-clustering-dbscan` | WSS y centroides fallan con formas arbitrarias y con el ruido; métricas: proporción de ruido, silueta basada en densidad, "DCBVI" (ver erratas) |
| 4.4 Validación en R | 31, `#/5/7` | paquetes factoextra, fpc, NbClust; `df <- iris %>% select(-Species)`, `scale(df)` |
| 4.4.3 `eclust` | 32, `#/5/8` | `eclust(x, FUNcluster = "kmeans", hc_metric = "euclidean", ...)`; `km.res <- eclust(df, "kmeans", k = 3, nstart = 25, graph = FALSE)`; `fviz_cluster(km.res, ellipse.type = "norm", ...)` |
| 4.4.4.1 **Gráfico de silueta** | 33, `#/5/9` | `fviz_silhouette(km.res, ...)`: tamaños 50, 53, 47; silueta media por grupo 0.64, 0.39, 0.35 |
| Extraer la silueta | 34, `#/5/10` | `km.res$silinfo`: `widths`, `clus.avg.widths` (0.6363162, 0.3933772, 0.3473922), `avg.width` **0.4599482**; `km.res$size` 50, 53, 47 |
| Siluetas negativas | 35, `#/5/11` | `which(sil[, "sil_width"] < 0)`: observaciones 112 (−0.0106) y 128 (−0.0249), en el grupo 3 con vecino 2 (el texto dice "grupo 2", ver erratas) |
| 4.4.4.2 **cluster.stats** | 36, `#/5/12` | `cluster.stats(d, clustering, alt.clustering)`; componentes `average.between`, `average.within`, `clus.avg.silwidths`, `within.cluster.ss`, `dunn`, `dunn2`, `corrected.rand`, `vi` |
| Dunn de k-means | 37, `#/5/13` | `km_stats <- cluster.stats(dist(df), km.res$cluster)`; `km_stats$dunn` = **0.02649665** |
| 4.4.5 **Validación externa en iris** | 38, `#/5/14` | `table(iris$Species, km.res$cluster)`: setosa 50/0/0, versicolor 0/39/11, virginica 0/14/36 |
| Rand corregido y VI | 39, `#/5/15` | `cluster.stats(d = dist(df), species, km.res$cluster)`: `corrected.rand` **0.6201352**, `vi` **0.7477749** |
| PAM y jerárquico | 40, `#/5/16` | `eclust(df, "pam", k = 3)`: tabla 50/0/0, 0/9/41, 0/36/14, VI 0.7129034; `eclust(df, "hclust", k = 3)`: 49/1/0, 0/27/23, 0/2/48, VI 0.6944976 |
| 5 **Comparar algoritmos** | 41, `#/choosing-the-best-clustering-algorithms` | paquete `clValid` (Brock 2008) |
| 5.1 Medidas de clValid | 42, `#/measures-for-comparing-clustering-algorithms` | internas (conectividad, silueta, Dunn) y de **estabilidad** quitando una columna cada vez: APN, AD, ADM, FOM |
| Definición de APN, AD, ADM, FOM | 43, `#/6/2` | proporción de no coincidencia, distancia media, distancia media entre medias, varianza intragrupo de la columna quitada; rangos (ver erratas) |
| 5.2 `clValid()` | 44, `#/6/3` | `clValid(obj, nClust, clMethods, validation, maxitems, metric, method)` con sus opciones |
| clValid interno en iris | 45, `#/6/4` | `clValid(df, nClust = 2:6, clMethods = c("hierarchical","kmeans","pam"), validation = "internal")`: tabla de conectividad, Dunn y silueta; óptimo: jerárquico con 2 grupos en las tres (0.9762, 0.2674, 0.5818) |
| clValid estabilidad | 46, `#/6/5` | `validation = "stability"`, `optimalScores(stab)`: APN 0.0033 y ADM 0.0161 jerárquico con 2; AD 1.0043 y FOM 0.4558 PAM con 6 |
| 6 Referencias | 47, `#/references` | portada |
| Lista de referencias | 48, `#/7/1` | no usar `#/references` |

## Caso: `ud6-caso.html` ("Práctica 1 - DBSCAN")

Paquetes (`p_load` oculto): tidyverse, ggeasy, janitor, skimr, fpc, dbscan, factoextra, here, patchwork, mclust, GGally, tictoc, glue; además usa
`clusterSim::` y `clValid::` con prefijo.

| Tema | Sección (n.º y ancla) | Notas y código |
|---|---|---|
| Paquetes | 1, `#paquetes-de-r` | `fpc` y `dbscan` tienen una función `dbscan()` cada uno: usar `fpc::dbscan()` o `dbscan::dbscan()` |
| **Ejemplo 1: multishapes** | 2, `#ejemplo-1-dataset-ficticio` | 1100 puntos, 5 formas + ruido, ya escalados; `fpc::dbscan(..., eps = 0.15, MinPts = 5)`; `plot(db, ...)` y `fviz_cluster(db, ..., stand = FALSE)`; `print(db)`: 5 grupos, **31 puntos de ruido** (grupo 0), filas border/seed (seed = núcleo): totales 410, 405, 104, 99, 51; `dbscan::kNNdistplot(..., k = 5)` + `abline(h = 0.15)`: codo en 0.15; `fpc::predict.dbscan(object = db, data, newdata)` con 3 puntos nuevos → 1, 5, 0 (el último es ruido); explica que un solo ε falla con densidades distintas |
| **Ejemplo 2: billetes suizos** | 3, `#ejemplo-2-dataset-real` | `mclust::banknote` (200 billetes, 100 genuinos y 100 falsos, 6 medidas), `ggpairs`, `scale()`; `kNNdistplot(swissScaled, k = 5)` con líneas en 1.2 y 2.0; rejilla `expand.grid(eps = seq(1.2, 2.0, 0.1), minPts = seq(1, 9, 1))` (81 combinaciones) con `pmap(dbsParamSpace, dbscan::dbscan, x = swissScaled)`; `swissDbs[[5]]` (eps 1.6, minPts 1): 10 grupos y 0 ruido; gráfico `right` vs `diagonal` por combinación; métricas propias `clusterSim::index.DB`, `clusterSim::index.G1` (pseudo F), `clValid::dunn` sobre **10 muestras bootstrap** sin el ruido (810 filas); mapa de calor con `geom_tile`; elige **eps = 1.2, minPts = 9** (fila 73); `ggpairs` con y sin ruido; estabilidad con `fpc::clusterboot(swissScaled, B = 500, clustermethod = dbscanCBI, eps = 1.2, MinPts = 9)`: Jaccard medio 0.697, 0.814, 0.683; ejercicio: minPts = 1, ¿cuánto ruido? |

Por el estilo (nombres como `swissTib`, `dbsParamSpace`, `metricsTib`, notas "¿Tu gráfico se ve un poco diferente?"), el ejemplo 2 parece una
traducción del capítulo de DBSCAN de Rhys (2020), que está en la bibliografía de la UD6. No se verificó contra el libro: no citarlo como fuente sin comprobarlo.

## Erratas e inconsistencias

UD6 (`ud6-dbscan.html`):
- **Título (diap. 1 y 5)**: "Application with Noise"; el nombre es "Applications with Noise" (como escribe bien la diap. 14).
- **Diap. 12 vs 11**: la 12 dice que se promedian las distancias a los k vecinos más cercanos; la 11 y `kNNdistplot()` usan la distancia **al k-ésimo** vecino.
- **Diap. 10**: "is marked as core point or visited" mezcla dos cosas: se marca como núcleo; "visitado" es otra marca del recorrido.
- **Diap. 15 y 16**: id `references` duplicado; la lista es `#/5/1`.

UD7 (`ud7-cluster-validation.html`):
- **Diap. 11 vs 12 y 13 (Hopkins)**: con la fórmula escrita, $H=\sum y_i/(\sum x_i+\sum y_i)$, datos agrupados dan H cerca de **1** (las $y_i$ desde
  puntos uniformes son grandes, las $x_i$ pequeñas). La regla "cerca de 0 = agrupable" y el 0.165 de iris corresponden a la convención contraria,
  la de `clustertend::hopkins`, que equivale a $\sum x_i/(\sum x_i+\sum y_i)$. La página debe fijar una convención y decirlo.
- **Diap. 17**: propone la silueta para k = 1 a 10, pero con k = 1 la silueta no está definida ($b_i$ no existe).
- **Diap. 18**: "Standford".
- **Diap. 21 vs 23**: con USArrests, `fviz_nbclust` concluye k = 4 (la línea del codo se dibuja a mano en 4) y NbClust, por mayoría, k = 2.
  El título de la 21 dice "Silhouhette".
- **Diap. 26**: "bounded strictly between −1 and +1": los extremos son alcanzables, el rango es [−1, 1].
- **Diap. 29 y 39**: "Rand corregido de −1 (sin acuerdo) a 1": 0 es el acuerdo esperado por azar; los negativos son peor que el azar y no llegan en general a −1.
  La 39 llama "acuerdo 0.748 según el VI de Meila", pero el VI es una **distancia** (0 = particiones idénticas): menos es mejor. Por eso en la 40 PAM (0.713)
  y jerárquico (0.694) concuerdan más que k-means (0.748).
- **Diap. 30**: "DCBVI"; el índice es **DBCV** (Density-Based Clustering Validation, Moulavi et al. 2014). La diapositiva no da referencia.
- **Diap. 35**: el texto dice que las siluetas negativas están en el grupo 2; la salida muestra grupo 3 (vecino 2).
- **Diap. 36**: `al.clustering` en la firma y `alt.clustering` en la explicación (el argumento es `alt.clustering`). Dice que la silueta "estima la distancia
  media entre grupos", lo que no es su definición (diap. 26).
- **Diap. 38**: el texto intercambia los grupos 2 y 3: según la tabla, 39 versicolor y 14 virginica van al grupo 2, y 11 versicolor y 36 virginica al 3.
- **Diap. 40**: `iris.scaled <- scale(df)` vuelve a escalar un `df` ya escalado (no cambia nada, pero confunde).
- **Diap. 43**: dice que APN, ADM y FOM van de 0 a 1. Solo APN es una proporción en [0, 1]; ADM y FOM son distancias o varianzas y no están acotadas por 1
  en general (según la definición de la propia diapositiva).
- **Diap. 44**: "`nClus`t" (comilla mal puesta).
- **Diap. 5, 6, 13, 19, 21, 29, 31, 41, 44**: falta la palabra "R" ("in .", "The  code") porque el icono no se renderizó; también genera los ids largos.
- **Diap. 47 y 48**: id `references` duplicado; la lista es `#/7/1`.

Caso (`ud6-caso.html`):
- **Sección 3**: "con `all = FALSE` se muestran sólo las distancias al punto más cercano de entre los 5": es la distancia al **quinto** (k-ésimo) vecino.
  El texto anterior dice que se grafican las 1000 distancias, lo que solo pasa con `all = TRUE`.
- **Sección 3**: interpreta el Jaccard del grupo 2 como 81.1 %; la salida es 0.8138829 (81.4 %). Dice que DBSCAN encontró "los dos grupos obvios" y
  `clusterboot` informa 3 grupos: probablemente el tercero es el ruido, que `dbscanCBI` trata como un grupo más (no se verificó en la documentación de fpc).
- **Sección 3**: llama a `cluster_metric()` (sin "s") en el texto; el bucle bootstrap usa `dbscan` sin prefijo pese al aviso de la sección 1
  (funciona porque `dbscan` se carga después de `fpc`).
