# Mapa de citas: SM142003 UD5 "K-means Clustering" (diapositivas y caso de las elecciones de Madrid 2021)

Materia: SM142003 Clasificaciones y agrupaciones (máster IA, UAX). Autor: Jorge Colomer Sánchez. Fecha en portada de las diapositivas: 5 March 2026;
el caso dice "Fecha de publicación 27 de septiembre de 2026".
Carpeta: `/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142003 - Clasificaciones y agrupaciones/UD5. K-Means/`
(ojo: "SEMESTRE 1 " lleva un espacio al final).
Archivos: `ud5-kmeans.html` (9 MB, diapositivas autocontenidas), `ud5-caso.html` (6.7 MB, documento del caso "Práctica 1 - Clustering"),
y `Barrios/` + `Barrios.zip` (shapefile de los barrios de Madrid que usa el mapa del caso). El `madrid_2021.txt` que lee el caso no está en la carpeta.
Bibliografía declarada (diap. 27): Bhatia y Chiu (Machine Learning with R Cookbook, 2017), Boehmke y Greenwell (HOML, 2020), Nwanganga y Chapple (2020),
Lantz (4.ª ed., 2023), Lesmeister (2019), Giordani, Martella y Ferraro (An Introduction to Clustering with R, 2020).

## Formato de las diapositivas y cómo enlazar una

- Quarto 1.8.26 con reveal.js 5.1.0. Configuración (leída del `Reveal.initialize` del archivo): `hash: true`, `hashOneBasedIndex: false`,
  `navigationMode: 'default'`, `slideNumber: 'c/t'`. Misma regla que la UD3 (`sm142003-ud3-knn.md`).
- Hay **27 diapositivas**, sin ocultas (ninguna `data-visibility`). Pilas horizontales: 0 portada, 1 índice, 2 (2 diap.), 3 (3), 4 (15), 5 (3), 6 (2).
- Ancla: si la diapositiva tiene `id`, `#/<id>`; si no, `#/h/v` con índices desde 0 (v = 0 se omite). `#/h/v` funciona siempre, tenga o no id.
- **Cuidado con `#/references`**: dos diapositivas tienen `id="references"` (26 y 27). `#/references` lleva a la 26 (portada de la sección);
  para la lista usar `#/6/1`.
- El número visible ("c/t", abajo a la derecha) es el orden plano de 1 a 27: escribir "diapositiva 15 de 27".
- Enlace concreto (función objetivo, diapositiva 15):
  `file:///Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE%201%20/SM142003%20-%20Clasificaciones%20y%20agrupaciones/UD5.%20K-Means/ud5-kmeans.html#/4/7`
  y una con id (algoritmo, diapositiva 16): mismo archivo con `#/k-means-algorithm`.
- Cómo se verificó: estructura de `<section>` leída del HTML con BeautifulSoup (pilas, ids, texto, fórmulas y bloques `<pre>`), configuración leída
  del archivo. No se abrió en un navegador. Si se edita el HTML, los `#/h/v` cambian; los `#/id` no.
- **Las diapositivas no traen código R ejecutable**: solo nombran funciones (`cluster::daisy`, `cluster::pam`, `cluster::clara`, `kmeans`...). Todo el
  código está en el caso.

**El caso no es una presentación**: es un documento HTML de Quarto 1.9.36, una sola página con índice lateral, 8 secciones de nivel 1 sin subsecciones.
Cada sección es `<section id="...">` y se enlaza con `#<id>` (sin barra). Los id llevan tildes; el navegador los acepta tal cual o codificados.
Ejemplo: `.../UD5.%20K-Means/ud5-caso.html#pregunta-5-comparación-de-soluciones-con-diferente-número-de-clústers`. Escribir el número visible (1 a 8).

## Tabla de contenido de las diapositivas (`ud5-kmeans.html`)

| Tema | Diapositiva (n.º y ancla) | Notas |
|---|---|---|
| Portada | 1, `#/title-slide` | "Unit 5: K-means Clustering" |
| Índice | 2, `#/TOC` | 5 secciones: What is Clustering?, Clustering Taxonomy, k-Means Clustering, Alternative partitioning methods, References |
| 1 Qué es clustering | 3, `#/what-is-clustering` | tarea no supervisada; dos objetivos: alta similitud intraclase, baja similitud interclase; similitud = distancia; euclídea $d(x,y)=\sqrt{\sum_{i=1}^{n}(x_i-y_i)^2}$ |
| Ver los patrones | 4, `#/2/1` | 12 ítems con Feature A y B; Figure 1: sin etiquetas (a), dispersión (b), 3 grupos (c); la inspección visual solo sirve en 2-3 dimensiones |
| 2 **Taxonomía** | 5, `#/clustering-taxonomy` | jerárquico (anidado, dendrograma), particional (fronteras independientes, k-means), basado en modelos o densidad (fronteras difusas, puede asignar parcialmente o a ningún grupo); Figures 2-4 (dendrograma, jerárquico vs particional, mezclas con probabilidad) |
| Exclusivo vs solapado | 6, `#/3/1` | exclusivo: un grupo por ítem (k-means); solapado: varios; recuadro **fuzzy/soft**: peso de pertenencia entre 0 y 1; Figure 5 |
| Completo vs parcial | 7, `#/3/2` | completo: todo punto asignado, los atípicos arrastran los centroides (k-means); parcial: los atípicos quedan sin grupo; Figure 6 |
| 3 k-means (portada) | 8, `#/k-means-clustering` | solo título |
| 3.1 Introducción | 9, `#/introduction` | k fijado de antemano; grupos excluyentes; **centroide** = media de las observaciones del grupo, $C=\frac{1}{n}\sum_{i=1}^{n}X_i$; nota: k-means es particional, exclusivo y completo |
| 3.2 Fortalezas y debilidades | 10, `#/strengths-and-weaknesses` | Table 1 es una **imagen** (texto no extraíble); "más popular que nunca" |
| 3.3 **Medidas de distancia** | 11, `#/distance-measures` | la distancia define forma y tamaño de los grupos; euclídea ("a vuelo de pájaro", sensible a atípicos, para datos aprox. gaussianos); Manhattan y Minkowski más robustas (sin fórmulas) |
| Distancias especiales | 12, `#/4/4` | correlación (patrón, no magnitud: clientes con el mismo patrón y distinto volumen), **Gower** (datos mixtos), coseno (texto); "no hay talla única" |
| 3.4 Definir los grupos | 13, `#/defining-clusters` | solo título |
| 3.4.1 **Función objetivo** | 14, `#/4/6` | minimizar la variación total dentro de los grupos; "Hartigan-Wong"; $W(C_k)=\sum_{x_i\in C_k}(x_i-\mu_k)^2$, $\mu_k$ media del grupo (ver erratas); Figure 7 |
| 3.4.2 **Suma de cuadrados dentro** | 15, `#/4/7` | $SS_{within}=\sum_{k=1}^{K}W(C_k)=\sum_{k=1}^{K}\sum_{x_i\in C_k}(x_i-\mu_k)^2$; mide compacidad; cuanto menor, mejor |
| 3.5 **Algoritmo k-means** | 16, `#/k-means-algorithm` | óptimo local codicioso; 4 pasos: elegir k observaciones al azar como centroides, asignar cada punto al centroide más cercano, recalcular medias, repetir hasta que no cambien las asignaciones; nota al pie: probar varios arranques |
| **Arranques aleatorios** | 17, `#/4/9` | resultados distintos según el arranque; óptimo local vs global; **10 a 20 arranques**; se queda con el de menor $SS_{within}$; Figure 8 |
| 3.6 **Cuántos grupos** | 18, `#/how-many-clusters` | 3.6.1: k sensible; k grande = más homogeneidad pero sobreajuste; conocimiento previo. 3.6.2: k por negocio (3 campañas → k = 3); regla $k=\sqrt{n/2}$, demasiados grupos con datos grandes |
| 3.6.3 **Método del codo** | 19, `#/4/11` | al subir k crece la homogeneidad; buscar la "curva" donde añadir grupos aporta poco; Figure 9; recomienda Halkidi, Batistakis y Vazirgiannis (2001) |
| 3.6.4 Realidad práctica | 20, `#/4/12` | probar muchos k es caro y rara vez da un óptimo exacto; elegir por conveniencia o dominio; ver cómo se forman y deshacen grupos |
| 3.7 **Datos mixtos** | 21, `#/clustering-with-mixed-data` | opción 1: ordinales a números (Low=1, Med=2, High=3), nominales con one-hot, "Always scale"; problema de dispersión (sparsity) con muchas dummies |
| **Distancia de Gower** | 22, `#/4/14` | cuantitativas: Manhattan normalizada por el rango; ordinales: rango + Manhattan con ajuste por empates; nominales: one-hot + **Dice** con a, b, c, d y $D=\frac{2a}{2a+b+c}$ (ver erratas); `cluster::daisy()`; aceptan matriz de distancias `cluster::pam()`, `diana()`, `agnes()`; **no** la aceptan `stats::kmeans()` ni `cluster::clara()` |
| 4 Métodos particionales alternativos | 23, `#/alternative-partitioning-methods` | atacan las dos debilidades de k-means: atípicos y datos grandes |
| 4.1 **PAM** | 24, `#/partitioning-around-medians-pam` | mismos pasos que k-means con "mediana" en vez de media (ver erratas): más robusto a atípicos, más caro; `cluster::pam()` |
| 4.2 **CLARA** | 25, `#/clara-clustering` | para datos grandes: subconjuntos de tamaño fijo, PAM en cada uno, asignar todo al medoide más cercano, medir la disimilitud media (o suma) y quedarse con el mejor subconjunto; `cluster::clara()`; nota: los medoides son siempre puntos del conjunto |
| 5 Referencias | 26, `#/references` | portada de la sección |
| Lista de referencias | 27, `#/6/1` | no usar `#/references` (id duplicado) |

Temas que **no** están en las diapositivas: kmeans++ (solo en el caso, sección 8), silueta y estadístico gap (los nombra el caso; están en la UD7,
ver `sm142003-ud6-dbscan.md`), fórmula de Manhattan o Minkowski, código R ejecutable.

## Caso: `ud5-caso.html` ("Práctica 1 - Clustering", elecciones de Madrid 2021)

Datos: `madrid_2021.txt` leído con `read.table(here("apuntes r","madrid_2021.txt"), header = TRUE)` y `janitor::clean_names()`. 131 barrios de Madrid
capital, 10 columnas: barrio, censo (no se usa) y porcentaje sobre el censo de pp, psoe, cs, vox, masmadrid, podemos, otros y abstencion.
Elecciones a la Asamblea del 4 de mayo de 2021. **No se escalan los datos** (todas las variables son porcentajes).
Paquetes (bloque `pacman::p_load` oculto en el HTML, visible solo en "Ver el código fuente"): tidyverse, ggeasy, janitor, skimr, factoextra, scales,
here, leaflet, GGally, corrplot, NbClust, sf, ggrepel, tidyclust, "ClusteR" (sic) y tidymodels. La fecha del documento es `date: today`
(fecha de renderizado), no la de la clase.

| Tema | Sección (n.º y ancla) | Notas y código |
|---|---|---|
| Enunciado | 1, `#enunciado-análisis-clúster-elecciones-madrid-2021` | variables, fuente datos.gob.es |
| Descripción y boxplot | 2, `#pregunta-1-descripción-de-los-datos` | `skim()`: 131 × 10, sin NA; PP máx. 66.2 % (Valdemarin), mín. 15.1 % (San Cristobal); `slice_max(n = 3, order_by = ...)` (psoe devuelve 4 filas por empate a 16.1); `pivot_longer`, boxplot con `fct_reorder(..., .fun = median)`; mapa `leaflet`; bloques derecha/izquierda/otros: 43.07 %, 31.21 %, 25.72 % de los votos |
| Correlaciones | 3, `#pregunta-2-correlaciones-entre-variables` | `cor()`: PP-Vox 0.858, PSOE-Podemos 0.809, Podemos-Más Madrid 0.854, PSOE-Vox −0.842, PP-Podemos −0.910; `GGally::ggpairs()`, `corrplot(method = "ellipse")`; abstención y "otros" van con la izquierda |
| **k-means con k = 3** | 4, `#pregunta-3-análisis-clúster-kmeans-k-3` | `set.seed(2026)`; `kmeans(df %>% select(-censo) %>% as.data.frame() %>% column_to_rownames(var = "barrio"), centers = 3, nstart = 25)`; tamaños **48, 38, 45**; withinss 2001.534, 2189.758, 2170.760 (total 6362.05); **between_SS / total_SS = 78.3 %**; medias por grupo (PP: 34.0, 51.1, 24.1) |
| Interpretación | 5, `#pregunta-4-interpretación-de-los-clústers` | etiquetas `factor(k3$cluster, levels = c(1,2,3), labels = c("PP_medio","PP_alto","PP_bajo"))` (dependen de la semilla); `fviz_cluster(..., ellipse.type = "convex", repel = TRUE)` sobre las dos primeras componentes principales; medias por grupo con `pivot_longer` + `summarise(mean)`; boxplots por partido y grupo con `facet_wrap` |
| **k = 3, 4, 5, codo y NbClust** | 6, `#pregunta-5-comparación-de-soluciones-con-diferente-número-de-clústers` | `kmeans` con 3, 4 y 5 (`nstart = 25`) y `fviz_cluster` de cada uno; **codo** con `fviz_nbclust(..., kmeans, method = "wss")`; menciona `"silhouette"` y `"gap_stat"`; `NbClust(..., distance = "euclidean", min.nc = 2, max.nc = 8, method = "kmeans", index = "all")`: 7 índices proponen 2, **10 proponen 3**, 4 proponen 4, 1 cada uno 6, 7, 8 → mayoría k = 3; tablas `res$All.index` y `res$Best.nc` (p. ej. silueta máxima 0.5362 en k = 2, CH máximo 230.93 en k = 3) |
| Conclusiones y mapa | 7, `#pregunta-6-conclusiones` | los grupos siguen el eje derecha-izquierda; "no hay evidencia de que existan realmente grupos" (nube continua); mapa con `sf::st_read("BARRIOS.shp")`, limpieza de nombres (`chartr`, `case_when`) y `geom_sf` + `geom_text_repel` |
| **Extra: tidyclust** | 8, `#extra-resolución-con-el-paquete-tidyclust` | `k_means(num_clusters = 3) %>% set_engine("ClusterR", initializer = "kmeans++")` (también muestra `set_engine("stats", algorithm = "Lloyd")`); `fit(~ pp + psoe + ...)`; tamaños **48, 49, 34**, WSS 6374.5, BSS/SS 0.7826; `extract_fit_summary`, `extract_centroids`, `extract_cluster_assignment`; `sse_within_total` 6375, `sse_total` 29318, `sse_ratio` 0.217; `silhouette_avg` 0.435; ajuste de k con `vfold_cv(v = 5)`, `tune_cluster`, `grid_regular(num_clusters(), levels = 10)`, `cluster_metric_set(sse_within_total, sse_total, sse_ratio)` y gráfico del codo de WSS/TSS |

Dato útil para una página: el mismo k = 3 da dos soluciones distintas. `stats::kmeans` con 25 arranques (Hartigan-Wong) llega a WSS 6362.05 con
tamaños 48/38/45; ClusterR con kmeans++ llega a 6374.5 con 48/49/34. Es un ejemplo real del óptimo local de la diapositiva 17.

## Erratas e inconsistencias

- **Diap. 14 y 15**: $(x_i-\mu_k)^2$ con vectores debería ser $\lVert x_i-\mu_k\rVert^2$ (distancia euclídea al cuadrado, como dice el texto).
- **Diap. 14 y 16**: llaman "Hartigan-Wong" a los pasos de la diap. 16, que son los de Lloyd/Forgy (asignar todo, luego recalcular medias).
  Hartigan-Wong, el método por defecto de `kmeans()` en R, mueve puntos uno a uno si así baja la suma de cuadrados. El caso usa `algorithm = "Lloyd"` como alternativa.
- **Diap. 22**: $D=\frac{2a}{2a+b+c}$ es la **similitud** de Dice; la distancia que usa Gower es 1 − D. Además reutiliza "k" para el número de categorías,
  y hay un ";." suelto en la línea de ordinales.
- **Diap. 24**: "Partitioning around medians" y "usa la mediana": PAM es *Partitioning Around Medoids* y su centro es un medoide (un punto real del
  conjunto), como dice la propia nota de la diap. 25. El ancla `#/partitioning-around-medians-pam` arrastra el error.
- **Diap. 25**: dice que CLARA "aplica k-means o PAM" sobre la muestra; los pasos que siguen (y `cluster::clara`) usan solo PAM.
- **Diap. 21 vs caso**: la diapositiva dice "Always scale"; el caso no escala (defendible porque todo son porcentajes, pero no lo explica).
- **Diap. 26 y 27**: id `references` duplicado; la lista se enlaza con `#/6/1`.
- **Caso, sección 2**: "donce" por "donde"; el enlace de la fuente es el catálogo "1983-2019" para datos de 2021.
- **Caso, sección 5**: el texto habla de "PP_Alto"/"PP_Bajo" y el código usa "PP_alto"/"PP_bajo"; las etiquetas se asignan a mano según la numeración
  de esa semilla (el comentario del código lo advierte).
- **Caso, `p_load` y sección 8**: "ClusteR" por ClusterR (R distingue mayúsculas en los nombres de paquete, así que ese nombre en `p_load` no corresponde al paquete); dice que la WSS es "la suma de todas las distancias" a los centros: son distancias al cuadrado.
- **Caso, secciones 6 vs 7**: NbClust elige k = 3 por mayoría, pero la conclusión dice que no hay evidencia de grupos reales (no se calcula Hopkins).
