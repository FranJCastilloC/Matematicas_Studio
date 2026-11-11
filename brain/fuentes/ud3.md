# Mapa de citas: UD3 Decisión y clasificación estadística (SM142001, máster IA UAX)

A = `.../UD3. Decisión y clasificación estadística/SM142001_MUIA_UD3_CONTENIDO TEÓRICO-1.pdf` (40 páginas; PDF = impresa; p.1 portada, p.2 índice, p.40 contraportada "GRACIAS" sin número).
Ruta completa: `/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142001 - Matematicas y estadistica para la IA/UD3. Decisión y clasificación estadística/SM142001_MUIA_UD3_CONTENIDO TEÓRICO-1.pdf` ("SEMESTRE 1 " lleva un espacio al final).
El índice de p.2 coincide con las páginas reales (3.1 p.7, 3.2 p.13, 3.3 p.17, 3.4 p.21, 3.5 p.24, 3.6 p.33, 3.7 p.34, conclusiones p.36, bibliografía p.38). Autor en metadatos: Álvaro Rojo Granados (2024).
El documento no resuelve ningún ejemplo numérico: todo son definiciones, fórmulas y tablas de ventajas/desventajas.

| Tema | pág. PDF | Notas |
|---|---|---|
| Introducción (decisión y clasificación en ML, Savage, Bishop) | 3 | sin fórmulas |
| Objetivos (riesgo empírico y estructural, clasificadores, matriz de confusión y ROC) | 4 | |
| Teoría de la decisión: definición e historia (Wald 1949, *Statistical Decision Functions* 1950) | 5 | prosa |
| Elementos: espacio de decisiones, estados del mundo, función de pérdida, riesgo | 5 | lista verbal bajo el título "...TEORIA DE LA ESTIMACIÓN" (ver erratas). Espacio de decisiones = conjunto de acciones (ej.: asignar a clase A o B); estados del mundo = condiciones externas desconocidas; riesgo = "valor esperado de la pérdida". Sin notación (ni Θ ni $\mathcal A$) |
| Importancia de la teoría de la decisión en IA | 6 | optimización bajo incertidumbre, generalización, a priori, versatilidad |
| Clasificación estadística: panorama (naive Bayes, LDA de Fisher 1936, QDA, métricas, validación cruzada) | 6 | solo prosa; LDA "proyección óptima que maximiza la separación", QDA relaja covarianzas iguales |
| Función de pérdida: definición | 7 | $L(y,\hat y)$; $=0$ predicción correcta, $>0$ error |
| Pérdida 0-1 | 7 | $L(y,\hat y)=0$ si $y=\hat y$, $1$ si $y\ne\hat y$ |
| MSE | 7-8 | $L(y,\hat y)=(y-\hat y)^2$; $MSE=\frac1N\sum_{i=1}^N(y_i-\hat y_i)^2$ (p.7); "Donde" e Ilustración 1 (p.8); sensible a outliers, Gauss y Legendre |
| MAE | 8-9 | $L(y,\hat y)=\lvert y-\hat y\rvert$; $MAE=\frac1N\sum_{i=1}^N\lvert y_i-\hat y_i\rvert$ (p.8); Ilustración 2 y robustez frente a outliers (p.9) |
| Entropía cruzada binaria (BCE) | 9-10 | $L=-[y\log\hat y+(1-y)\log(1-\hat y)]$; $BCE=-\frac1N\sum_{i=1}^N[y_i\log\hat y_i+(1-y_i)\log(1-\hat y_i)]$; $\hat y$ = probabilidad predicha de la clase 1. Ilustración 3 (p.9); usos (p.10) |
| Entropía cruzada categórica (CCE) | 10 | $L=-\sum_{C=1}^{C}y_C\log\hat y_C$; $CCE=-\sum_{i=1}^N\sum_{c=1}^C y_{i,c}\log\hat y_{i,c}$ (sin $\frac1N$); one-hot. Ilustración 4 |
| Pérdida de Huber | 11 | $L=\frac12(y-\hat y)^2$ si $\lvert y-\hat y\rvert\le\delta$; $\delta\lvert y-\hat y\rvert-\frac12\delta^2$ si $>\delta$; δ umbral ajustable; Huber (1964). Ilustración 5 |
| Selección de la función de pérdida | 11-13 | prosa (p.11); Ilustración 6 curva de pérdida en 100 épocas (p.12); Tabla 1 comparativa por tipo de problema: regresión MSE/MAE, binaria BCE, multiclase CCE, outliers Huber (p.12); "Ten en cuenta" sobre época (p.13) |
| Riesgo (pérdida esperada): definición | 13-14 | $R(\hat y)=E[L(Y,\hat y)]=\int L(y,\hat y)\,p(y)\,dy$ (p.13); "Donde" (p.14) |
| Riesgo en clasificación (versión discreta) | 14 | $R(\hat y)=\sum_{y\in Y}L(y,\hat y)\,P(Y=y)$; $Y$ = conjunto de clases |
| Riesgo empírico | 14 | $R_{emp}=\frac1N\sum_{i=1}^N L(y_i,\hat y_i)$; enfocarse solo en él lleva al sobreajuste. Ilustración 7 |
| Riesgo esperado ("estructural o esperado") | 14-15 | $R(f)=E_{(x,y)\sim P(x,y)}[L(y,f(x))]$ (p.15); Ilustración 8 riesgo vs complejidad del modelo (p.15). Ver erratas por la mezcla de nombres |
| Minimización del riesgo estructural (SRM, Vapnik 1995) | 15-16 | $R_{estructural}(f)=R_{emp}(f)+\lambda\Omega(f)$ (p.15); λ hiperparámetro, Ω complejidad (norma L1 o L2) (p.16); Ilustración 9 (p.16); base de SVM, L1/L2, dropout |
| Regularización vs SRM | 16 | SRM marco conceptual, regularización técnica aplicada |
| Criterios de decisión (introducción) | 17 | prosa |
| Criterio bayesiano (minimizar la pérdida esperada posterior), caso continuo | 17 | $\hat y=\arg\min_{\hat y}\int L(y,\hat y)P(y\mid x)\,dy$; Ilustración 10 citada (está en p.20) |
| Criterio bayesiano, clases discretas | 18 | $\hat y=\arg\min_{\hat y}\sum_{i=1}^N L(C_i,\hat y)P(C_i\mid x)$; $N$ = número de clases |
| Pérdida 0-1 ⇒ máxima posterior (MAP) | 18 | $\hat y=\arg\max_{C_k}(C_k\mid x)$ (falta la P, ver erratas) |
| Naive Bayes (recuadro "Ten en cuenta") | 18 | $P(C_k\mid x)=\frac{P(x\mid C_k)P(C_k)}{P(x)}$; se maximiza el numerador porque $P(x)$ es constante |
| Pérdida lineal asimétrica | 18 | $L=a(y-\hat y)$ si $y>\hat y$; $b(\hat y-y)$ si $y\le\hat y$; riesgos financieros |
| Pérdida exponencial | 18-19 | $L(y,\hat y)=e^{\lvert y-\hat y\rvert}$ (p.18); "común ... como boosting" (p.19). Ver erratas |
| Boosting (recuadro) | 19 | solo verbal: modelos débiles que corrigen al anterior |
| Decisiones secuenciales y MDP | 19 | $\hat y_t=\arg\min_{\hat y_t}\sum_{t=1}^T E[L((y_t,\hat y_t)\mid x_t)]$; recuadro "Ten en cuenta" con definición verbal de MDP (sin estados, transiciones, recompensas ni Bellman) |
| Costos asimétricos: matriz de pérdidas | 19 | $\hat y=\arg\min_{C_k}\sum_i L(C_i,C_k)P(C_i\mid x)$; ej. falso negativo más caro en medicina |
| Detección de anomalías con umbral τ | 19-20 | $\hat y=\arg\max_{C_k}P(C_k\mid x)$ si $\max P>\tau$, "anomalía" si no (p.19); conclusión (p.20) |
| Frontera de decisión bayesiana (Ilustración 10) | 20 | gráfica |
| Criterio de Wald / minimax | 20 | $y^*=\arg\min_y\max_{C_i}L(C_i,y)P(C_i\mid x)$ (ver erratas); conservador, peor caso; Wald (1950) |
| Criterio de maximización de la utilidad esperada | 20-21 | título "UNIDAD ESPERADA" (p.20); $U(y,\hat y)$ función de utilidad; $E[U]=\sum_{y\in Y}U(y,\hat y)P(y\mid x)$ (p.21); contraste con el criterio bayesiano; Berger (1985) |
| Métodos de clasificación vs teoría de la decisión | 21 | prosa |
| Clasificador de Bayes, regla de decisión de Bayes | 21-22 | Bayes escrito $P(x\mid C_k)=\frac{P(x\mid C_k)P(C_k)}{P(x)}$ (p.21, ver erratas); "Donde" posterior, verosimilitud, a priori, marginal (p.21-22); $\hat C=\arg\max_{C_k}P(C_k\mid x)$, "minimiza la probabilidad de error promedio" (p.22) |
| Naive Bayes (sección) | 22-23 | $P(x\mid C_k)=\prod_{i=1}^n P(x_i\mid C_k)$; $P(C_k\mid x)=\frac{P(C_k)\prod_{i=1}^nP(x_i\mid C_k)}{P(x)}$; $\hat C=\arg\max_{C_k}P(C_k)\prod_{i=1}^nP(x_i\mid C_k)$ (p.22); falla con características correlacionadas (p.22) |
| Suavizado de Laplace | 23 | $P(x_i\mid C_k)=\frac{N(x_i,C_k)+\alpha}{N(C_k)+\alpha\lvert X\rvert}$, α usualmente 1; $\lvert X\rvert$ = número de categorías de $x_i$ |
| Funciones discriminantes (definición) | 23 | "función que separe de manera óptima las clases" |
| LDA: modelo normal con covarianza común | 23 | $P(x\mid C_k)=\frac{1}{(2\pi)^{n/2}\lvert\Sigma\rvert^{1/2}}\exp(-\frac12(x-\mu_k)^\top\Sigma^{-1}(x-\mu_k))$; $n$ = número de características |
| LDA: función discriminante lineal | 23 | $\delta_k(x)=x^\top\Sigma^{-1}\mu_k-\frac12\mu_k^\top\Sigma^{-1}\mu_k+\ln P(C_k)$; asignar a la clase con mayor $\delta_k$ |
| QDA: modelo con covarianza por clase | 23-24 | misma densidad con $\Sigma_k$ (p.23); $\Sigma_k$ específica de la clase (p.24) |
| QDA: función discriminante cuadrática | 24 | $\delta_k(x)=-\frac12\ln\lvert\Sigma_k\rvert-\frac12(x-\mu_k)^\top\Sigma_k^{-1}(x-\mu_k)+\ln P(C_k)$ |
| LDA vs QDA (parámetros, sobreajuste, flexibilidad) | 24 | prosa |
| Clasificación supervisada: flujo general | 24 | datos etiquetados, entrenamiento, evaluación, predicción; aprender $f(x)$ |
| Regresión logística | 24-25 | binaria $y\in\{0,1\}$, se entrena con BCE (p.24); $P(y=1\mid x)=\frac1{1+e^{-z}}$, $z=\beta_0+\sum_{i=1}^n\beta_ix_i$; sigmoide $\sigma(z)$; predice 1 si $P\ge0.5$ (p.25) |
| Logit (log-odds) | 25 | $\ln\frac{P(y=1\mid x)}{P(y=0\mid x)}=\beta_0+\sum_{i=1}^n\beta_ix_i$, dentro de la Tabla 2 (desventajas); multinomial y One-vs-All solo nombrados |
| Tabla 2: ventajas, desventajas y aplicaciones de la regresión logística | 25 | |
| kNN | 26 | no paramétrico; distancia euclidiana $d(x,x')=\sqrt{\sum_{i=1}^n(x_i-x'_i)^2}$; $\text{Clase}(x)=\text{modo}\{\text{Clase}(x_1),\dots,\text{Clase}(x_k)\}$; elección de $k$ (pequeño: ruido; grande: diluye). Tabla 3 ventajas/desventajas (necesita normalización) |
| Distancias Manhattan y Minkowski (recuadro) | 27 | $d_{Manhattan}=\sum_{i=1}^n\lvert x_i-x'_i\rvert$; $d_{Minkowski}=(\sum_{i=1}^n\lvert x_i-x'_i\rvert^p)^{1/p}$; $p=1$ Manhattan, $p=2$ euclidiana |
| SVM: margen, vectores de soporte, función de decisión | 27-28 | $y_i\in\{-1,1\}$; $f(x)=\text{sign}(\sum_{i=1}^n\alpha_iy_iK(x_i,x)+b)$ (p.27); $\alpha_i$ multiplicadores de Lagrange, $b$ sesgo, "problema de optimización cuadrática" (p.28). Sin forma primal ni margen $2/\lVert w\rVert$ |
| Kernels (lineal, polinómico, RBF) | 27-28 | $x_i^\top x$; $(x_i^\top x+c)^d$; $\exp(-\gamma\lVert x_i-x\rVert^2)$ (p.27); transformación a mayor dimensión (p.28) |
| Tabla 4: SVM, hiperparámetros $C$ y γ | 28 | |
| Árboles de clasificación (nodos, ramas, hojas, criterio de parada) | 28 | |
| ID3, C4.5, CART | 28-29 | ID3 (Quinlan 1986) ganancia de información con entropía, solo categóricas; C4.5 continuas, poda, faltantes (p.28); CART (Breiman et al. 1984) Gini y árboles binarios (p.28-29) |
| Ganancia de información | 29 | $\text{Ganancia}=\text{Entropía}(S)-\sum_{i=1}^k\frac{\lvert S_i\rvert}{\lvert S\rvert}\text{Entropía}(S_i)$; la entropía no se escribe |
| Índice de Gini | 29 | $Gini=1-\sum_{i=1}^C p_i^2$; cerca de 0 = nodo puro |
| Random Forest y bagging | 29-30 | bootstrap de $T$ subconjuntos con reemplazo, $m$ de $p$ características por nodo (p.29); clasificación $\hat y=\text{modo}(\hat y_1,\dots,\hat y_T)$ (p.29); regresión $\hat y=\frac1T\sum_{i=1}^T\hat y_i$ (p.30); Tabla 5, "reduce la varianza" (p.30); Breiman (2001) |
| Redes neuronales | 30-32 | capas (p.30); Ilustración 11 MLP; $z^{(l)}=w^{(l)T}x^{(l-1)}+b^{(l)}$, $a^{(l)}=\sigma(z^{(l)})$; ReLU, sigmoide (p.31) |
| Softmax | 31 | $P(y=c\mid x)=\frac{e^{z_c}}{\sum_je^{z_j}}$ |
| Tabla 6: ventajas y desventajas de las redes neuronales | 32 | rotulada "Random Forests" (ver erratas) |
| Entrenamiento, validación y prueba (proporciones) | 32 | entrenamiento 60-80 %, validación 10-20 %, prueba 10-20 % (Hastie) |
| Validación cruzada k-fold | 32 | $k-1$ particiones para entrenar y 1 para validar; $E_{promedio}=\frac1k\sum_{k=1}^kE_i$ (ver erratas); ajusta λ, profundidad, $k$ de kNN (Kuhn y Johnson 2013) |
| Clustering (clasificación no supervisada): definición | 33 | |
| k-means | 33 | minimizar $\sum_{i=1}^k\sum_{x\in C_i}\lVert x-\mu_i\rVert^2$; iterativo; sensible a centroides iniciales, $k$ a priori. Sin pasos del algoritmo de Lloyd escritos |
| Clustering jerárquico, dendrograma | 33-34 | aglomerativo y divisivo (p.33); enlaces: simple $\min d(x,x')$, completo $\max d(x,x')$ (p.33), promedio $\frac1{\lvert C_i\rvert\lvert C_j\rvert}\sum\sum d(x,x')$, centroide $\lVert\mu_i-\mu_j\rVert$ (p.34) |
| DBSCAN | 34 | ε y MinPts; puntos núcleo, borde y ruido; no requiere número de clústeres; conectividad de densidad |
| Evaluación de modelos de clasificación (introducción) | 34 | |
| Exactitud (llamada "Precisión (Accuracy)") | 34-35 | $\frac{TP+TN}{TP+FP+FN+TN}$ (p.34); TP, TN, FP, FN definidos en p.35 |
| Recall (sensibilidad, TPR) | 35 | $\frac{TP}{TP+FN}$ |
| F1-score | 35 | $2\cdot\frac{\text{Precisión}\cdot\text{Recall}}{\text{Precisión}+\text{Recall}}$; útil con clases desbalanceadas (ver erratas) |
| Curva ROC y AUC | 35 | ROC = TPR vs FPR (solo verbal); $AUC=\int_0^1ROC(x)\,dx$ |
| Matriz de confusión | 35 | filas = clase real, columnas = predicción: [TP FN; FP TN]; ej. médico |
| Conclusiones | 36 | |
| Recomendaciones a los estudiantes | 36-37 | |
| Material de ampliación (ISGlobal, apuntes MUIA en GitHub, ICCSI) | 37 | |
| Bibliografía | 38-39 | Berger, Bishop, Breiman, Casella & Berger, Cortes & Vapnik, Goodfellow, Hastie et al., Huber, James et al., Kuhn & Johnson, Murphy, Quinlan, Tan et al., Vapnik, Wasserman, entre otros |

## Erratas e inconsistencias

- **p.5, título de la lista**: "ELEMENTOS FUNDAMENTALES DE LA TEORIA DE LA ESTIMACIÓN"; la lista es de la teoría de la decisión (resto copiado de la UD2).
- **p.8, MSE**: el "Donde" escribe la suma desde $i=0$, la fórmula de p.7 va de $i=1$ a $N$.
- **p.9, BCE**: a la fórmula de una instancia le falta el corchete de cierre: $-[y\log\hat y+(1-y)\log(1-\hat y)$. "Entrpy" en el nombre y "Metamáticamente".
- **p.10, CCE**: usa $C$ a la vez como número total de clases y como índice ($\sum_{C=1}^{C}y_C$); la segunda fórmula cambia a $c$ minúscula. La versión con $N$ observaciones no divide por $N$, a diferencia de MSE, MAE y BCE.
- **p.12**: el texto dice "una gráfica de pérdida general como la de la Ilustración 1" pero es la Ilustración 6. La Tabla 1 se titula "Aplicabilidad de la probabilidad en IA" (título de la UD2); su contenido es la comparación de funciones de pérdida. El primer párrafo de p.13 repite literalmente el de p.11.
- **p.13-14, riesgo**: $R(\hat y)=\int L(y,\hat y)p(y)\,dy$ no condiciona en $x$ (debería usar $p(y\mid x)$ para una predicción que depende de los datos, como sí hace el criterio bayesiano de p.17). En el "Donde" de p.14 aparece "$L(Y,\hat y)]$" con corchete suelto y dice que mide la discrepancia entre $Y$ e $\hat Y$.
- **p.14-16, riesgo "estructural o esperado"**: p.14-15 llama "riesgo estructural o esperado" al riesgo verdadero $E_{P(x,y)}[L]$, pero p.15 define $R_{estructural}=R_{emp}+\lambda\Omega(f)$, y p.16 vuelve a decir que el riesgo estructural es "la expectativa matemática del error sobre toda la distribución". Son dos cosas distintas: el riesgo esperado (verdadero) y el objetivo de SRM (empírico más penalización). Conviene separarlos en la página.
- **p.17**: el criterio bayesiano continuo usa $P(y\mid x)\,dy$ (probabilidad con integral; sería una densidad) y en el "Donde" dice "∫: suma o integral". Remite a la Ilustración 10, que está en p.20.
- **p.18, pérdida 0-1**: $\hat y=\arg\max_{C_k}(C_k\mid x)$ omite la $P$: debe ser $\arg\max_{C_k}P(C_k\mid x)$. En el recuadro de naive Bayes quedan restos de LaTeX ("clase CkC_kCk") y un paréntesis roto "$P(x\mid C_k)P C_k)$".
- **p.18-19, pérdida exponencial**: $e^{\lvert y-\hat y\rvert}$ se presenta como la de boosting; la pérdida exponencial de AdaBoost es $e^{-y f(x)}$ con $y\in\{-1,1\}$ (margen), no una función de $\lvert y-\hat y\rvert$. Además "seobrestimación", "Pa funciones de pérdida exponencia".
- **p.19, decisiones secuenciales**: $\hat y_t=\arg\min_{\hat y_t}\sum_{t=1}^T\dots$ usa $t$ como índice libre y como índice de la suma; lo que se optimiza es la secuencia $\{\hat y_1,\dots,\hat y_T\}$.
- **p.19, anomalías**: la segunda rama dice "si $\arg\max_{C_k}P(C_k\mid x)\le\tau$"; compara un argmax (una clase) con un umbral; debe ser $\max_{C_k}P(C_k\mid x)\le\tau$, como en la primera rama.
- **p.20, Wald/minimax**: $y^*=\arg\min_y\max_{C_i}L(C_i,y)P(C_i\mid x)$ pondera por la posterior. El minimax clásico de Wald minimiza la pérdida (o el riesgo) del peor estado sin usar probabilidades; justamente es la alternativa cuando no se confía en ellas. El propio texto dice que "minimiza el máximo riesgo" y que protege contra el peor resultado.
- **p.20**: "CRITERIO DE MAXIMIZACIÓN DE LA UNIDAD ESPERADA": es utilidad, no unidad.
- **p.21, teorema de Bayes**: escribe $P(x\mid C_k)=\frac{P(x\mid C_k)P(C_k)}{P(x)}$; el lado izquierdo debe ser $P(C_k\mid x)$. El "Donde" llama a $P(x\mid C_k)$ "probabilidad a posteriori" y en la línea siguiente (p.22) "verosimilitud": el mismo símbolo con dos significados.
- **p.23, LDA y QDA**: falta el paréntesis de cierre de $\exp(\dots)$ en ambas densidades. Aquí $n$ es el número de características; en p.18 $N$ era el número de clases y en p.7 el de instancias.
- **p.26, kNN**: "KNN utiliza una métrica para calcular la proximidad entre puntos (ver Tabla 3)"; la Tabla 3 es de ventajas y desventajas, no de métricas (las métricas están en el recuadro de p.27).
- **p.27, Minkowski**: escribe $d_{Minkowski}(x-x')$ con signo menos en lugar de coma. Llama "Minkowski" solo al caso $p>2$, cuando Manhattan y euclidiana también son Minkowski.
- **p.28, SVM**: describe $C$ como "tamaño del margen"; $C$ es la penalización por violar el margen (margen blando), que el documento nunca introduce. Llama "hiperplano óptimo" a la función de decisión con signo. "ofrese", "continúas".
- **p.29**: dice que CART "genera exclusivamente árboles binarios, lo que lo hace versátil para clasificación y regresión" (la versatilidad no viene de ser binario). La ganancia de información usa "Entropía" sin dar su fórmula.
- **p.32, Tabla 6**: el pie dice "Ventajas, desventajas y aplicaciones de Random Forests", pero la tabla es de redes neuronales (la de Random Forests es la Tabla 5).
- **p.32, k-fold**: $E_{promedio}=\frac1k\sum_{k=1}^kE_i$: el índice de la suma es $k$ (el mismo símbolo que el número de folds) y el sumando usa $E_i$. Debe ser $\sum_{i=1}^kE_i$.
- **p.34-35, "Precisión"**: llama "Precisión (Accuracy)" a la exactitud $\frac{TP+TN}{TP+FP+FN+TN}$ y luego usa "Precisión" en el F1 de p.35. El F1 es la media armónica de la precisión $\frac{TP}{TP+FP}$ (valor predictivo positivo) y el recall, no de la exactitud. La precisión $\frac{TP}{TP+FP}$ nunca se define. En p.3 y p.6 "precisión" aparece junto a recall, con el sentido correcto.
- **p.35, ROC**: TPR y FPR solo se nombran; FPR $=\frac{FP}{FP+TN}$ no aparece y tampoco se explica que la curva se traza al mover el umbral de decisión.
- **Citas y bibliografía**: el texto cita Russell & Norvig (2020) y la bibliografía lista la edición de 2010. Se citan Wald (1950), Fisher (1936), Powers (2011), Breiman et al. (1984) y Savage, pero Wald, Fisher, Powers y Breiman et al. (1984) no están en la bibliografía. La bibliografía conserva entradas de la UD2 que no se usan aquí (Stephens MLE, Radford GPT, Hacking, Gorgas).
- **Erratas de texto**: "Nombre de la asignatura" como relleno en la portada (p.1), "decision" sin tilde en el título 3.3 (p.17), "Metamáticamente" (p.9), "metrica" (p.10, p.11), "análisadas" (p.12), "funciñon", "teorica", "riesgo riesgo" (p.14-15), "desición" (p.17), "obtendran" (p.19), "Analisis" (p.23), "detacar", "Logistica" (p.24-25), "continúas", "ofrese" (p.28), "diagnostico" (p.30).

## No aparece

- Notación formal de la teoría de la decisión: conjunto de estados Θ, conjunto de acciones $\mathcal A$, regla de decisión δ(x), función de riesgo $R(\theta,\delta)$, riesgo de Bayes $r(\pi,\delta)$, admisibilidad. Tampoco una tabla o matriz de pagos con ejemplo.
- Criterios clásicos de decisión bajo incertidumbre distintos de Wald: maximax, Hurwicz, Laplace, Savage (arrepentimiento minimax).
- Ejemplos numéricos de cualquier criterio (Bayes, minimax, utilidad), de naive Bayes, LDA, kNN, árboles o métricas.
- Tasa de error de Bayes como fórmula; demostración de que la pérdida 0-1 lleva al MAP.
- Fórmula de la entropía $-\sum p_i\log_2p_i$; criterio de reducción de Gini; poda en detalle.
- Precisión $TP/(TP+FP)$, especificidad $TN/(TN+FP)$, FPR, umbral de la curva ROC, curva precisión-recall, F1 multiclase (macro/micro).
- Descomposición sesgo-varianza: solo aparece de forma implícita en la Ilustración 8 (riesgo vs complejidad, p.15) y en "reduce la varianza" de Random Forest (p.30). No hay fórmula ni definición de sesgo y varianza del modelo.
- MDP formal (estados, acciones, transiciones $P(s'\mid s,a)$, recompensas, descuento γ, ecuación de Bellman): solo el recuadro verbal de p.19.
- SVM primal ($\min\frac12\lVert w\rVert^2$ s.a. $y_i(w^\top x_i+b)\ge1$), margen $2/\lVert w\rVert$, variables de holgura, pérdida hinge, dual.
- Criterio de Fisher para LDA (cociente entre dispersión entre clases y dentro de clases) y LDA como reducción de dimensión: solo se nombra en p.6.
- Entrenamiento de la regresión logística por máxima verosimilitud (derivación de la BCE como log-verosimilitud negativa); regresión multinomial escrita.
- Algoritmo de k-means paso a paso (asignar, recalcular centroides), método del codo, silueta, k-means++; enlace de Ward.
- Validación cruzada dejando uno fuera (LOOCV), estratificada; boosting formal (AdaBoost, gradient boosting).
- Bagging como fórmula de reducción de varianza (varianza del promedio de árboles correlacionados).
