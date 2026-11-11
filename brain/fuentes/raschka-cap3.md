# Mapa de citas: Raschka, Liu y Mirjalili, cap. 3 "A Tour of Machine Learning Classifiers Using Scikit-Learn"

Archivo: `/Users/franciscocastillo/brain/02-Biblioteca/Machine-Learning/PyTorch-Scikit-Learn/Cap03 - A Tour of Machine Learning Classifiers Using Scikit-Learn.pdf` (52 páginas PDF; la 52 está en blanco).
Correspondencia verificada: página PDF N = página impresa N + 52. Comprobado en PDF 2 = p. 54, PDF 26 = p. 78, PDF 51 = p. 103
(cada página del archivo se leyó con `pdftotext -layout`). La PDF 1 no lleva número impreso (abre el capítulo con un "3"); por el desfase le corresponde la 53.
Edición: Machine Learning with PyTorch and Scikit-Learn (Packt, 2022). Todo el capítulo usa Iris con dos features (petal length, petal width), 105 de entrenamiento y 45 de prueba.

| Tema | PDF | Impresa | Sección | Notas |
|---|---|---|---|---|
| Introducción, no free lunch | 1 | 53 | apertura + Choosing a classification algorithm | lista de temas; Wolpert: ningún clasificador gana en todos los escenarios |
| Los 5 pasos de un algoritmo supervisado | 2 | 54 | Choosing a classification algorithm | features, métrica, algoritmo, evaluación, ajuste |
| Iris con dos features | 2 | 54 | First steps with scikit-learn – training a perceptron | `iris.data[:, [2, 3]]`, petal length y petal width |
| train_test_split estratificado | 3 | 55 | idem | `test_size=0.3, random_state=1, stratify=y`; bincount 50/35/15 por clase |
| StandardScaler y Perceptron | 4 | 56 | idem | fit en train, transform en train y test; `Perceptron(eta0=0.1)`; OvR por defecto; 1 de 45 mal clasificado, error 0.022 |
| Error vs accuracy, accuracy_score | 5 | 57 | recuadros Classification error versus accuracy y Overfitting | accuracy 0.978; método `score` |
| plot_decision_regions | 5-6 | 57-58 | idem | función completa con meshgrid y `contourf`, marca el test con círculos |
| Perceptrón no converge si no es separable | 7 | 59 | idem | Figure 3.1 |
| Regresión logística: motivación | 7 | 59 | Modeling class probabilities via logistic regression | es clasificación, no regresión |
| Odds y logit | 8 | 60 | Logistic regression and conditional probabilities | odds p/(1−p); logit(p) = log(p/(1−p)); logit = w·x + b; recuadro multinomial/softmax |
| Sigmoide | 9 | 61 | idem | σ(z) = 1/(1+e^(−z)), z = wᵀx + b; código y Figure 3.2 |
| Sigmoide como probabilidad, Adaline vs logística | 10 | 62 | idem | σ(0) = 0.5; Figure 3.3 (solo cambia la activación); ejemplo 0.8 / 0.2 |
| Umbral 0.5 equivale a z ≥ 0 | 11 | 63 | idem | ŷ = 1 si σ(z) ≥ 0.5; usos en clima y medicina |
| Verosimilitud y log-verosimilitud | 11 | 63 | Learning the model weights via the logistic loss function | recuerda el MSE de Adaline; ℒ = Π σ^y (1−σ)^(1−y); l = Σ [y log σ + (1−y) log(1−σ)]; por qué tomar log |
| Derivación con Bernoulli | 12 | 64 | recuadro Deriving the likelihood function | etiqueta como variable Bernoulli, regla del producto |
| Pérdida logística (log loss) | 12 | 64 | idem | L(w,b) = Σ [−y log σ − (1−y) log(1−σ)]; pérdida de un ejemplo por casos y=1 / y=0 |
| Gráfico de la pérdida | 13 | 65 | idem | Figure 3.4: la pérdida tiende a infinito si la predicción es errónea |
| LogisticRegressionGD desde Adaline | 14-16 | 66-68 | Converting an Adaline implementation into an algorithm for logistic regression | pérdida promediada 1/n; clase completa con `fit`, `net_input`, `activation` (clip −250, 250), `predict`; solo binaria (setosa y versicolor); Figure 3.5 |
| Gradiente de la logística | 17 | 69 | recuadro The gradient descent learning algorithm for logistic regression | Figure 3.6 (derivada parcial); wⱼ := wⱼ + η(y − σ)xⱼ, b := b + η(y − σ); igual que Adaline salvo el factor 2 |
| LogisticRegression en scikit-learn | 18 | 70 | Training a logistic regression model with scikit-learn | `LogisticRegression(C=100.0, solver='lbfgs', multi_class='ovr')`; multinomial vs OvR |
| Solvers | 19 | 71 | recuadro Algorithms for convex optimization | Figure 3.7; newton-cg, lbfgs, liblinear, sag, saga; default lbfgs desde v0.22 |
| predict_proba y argmax | 20 | 72 | idem | filas suman 1; `argmax(axis=1)`; `reshape(1, -1)` para una sola fila; anuncia "el misterioso parámetro C" |
| Overfitting, underfitting, sesgo y varianza | 21 | 73 | Tackling overfitting via regularization + recuadro The bias-variance tradeoff | Figure 3.8 (sub, bien y sobreajustado) |
| Regularización L2 | 22 | 74 | idem | (λ/2n)‖w‖² = (λ/2n) Σ wⱼ²; pérdida logística regularizada; derivada parcial con y sin el término λwⱼ/n; recuadro: estandarizar es necesario |
| C = inverso de λ, camino de regularización | 23 | 75 | idem | el sesgo b no se regulariza; C viene de la convención de las SVM; código con C = 10^−5 ... 10^4 |
| Efecto de C en los pesos | 24 | 76 | idem | Figure 3.9: los pesos se encogen al bajar C; recuadro con el libro de Menard |
| SVM: margen y vectores soporte | 24 | 76 | Maximum margin classification with support vector machines | extensión del perceptrón; objetivo = maximizar el margen; margen = distancia del hiperplano a los ejemplos más cercanos (vectores soporte) |
| Figura del margen máximo | 25 | 77 | idem | Figure 3.10 (hiperplano, márgenes positivo y negativo) |
| Intuición del margen máximo | 25 | 77 | Maximum margin intuition | márgenes grandes generalizan mejor; la optimización con restricciones queda fuera del libro; remite a Burges, Vapnik y apuntes CS229 de Ng |
| Variables de holgura y margen blando | 25 | 77 | Dealing with a nonlinearly separable case using slack variables | Vapnik 1995; relajar restricciones lineales para datos no separables. Sin fórmula de ξ |
| Parámetro C de la SVM | 26 | 78 | idem | C grande = penalización alta y margen estrecho; C chico = más tolerancia; Figure 3.11; relación con la regularización |
| SVC lineal en Iris | 26-27 | 78-79 | idem | `SVC(kernel='linear', C=1.0, random_state=1)`; Figure 3.12 |
| Logística vs SVM | 27 | 79 | recuadro Logistic regression versus SVMs | resultados parecidos; la logística es más sensible a outliers; la SVM mira sobre todo los vectores soporte |
| LIBLINEAR, LIBSVM, SGDClassifier | 27-28 | 79-80 | Alternative implementations in scikit-learn | `solver='liblinear'`; SVC usa LIBSVM; `SGDClassifier(loss='perceptron' / 'log' / 'hinge')`, `partial_fit` |
| Datos XOR | 28-29 | 80-81 | Solving nonlinear problems using a kernel SVM / Kernel methods for linearly inseparable data | `np.logical_xor`, 200 puntos; Figure 3.13 |
| Proyección φ a más dimensiones | 29-30 | 81-82 | idem | φ(x₁, x₂) = (x₁, x₂, x₁² + x₂²); Figure 3.14 (círculos concéntricos, plano que vuelve como frontera curva) |
| Truco del kernel | 30-31 | 82-83 | Using the kernel trick to find separating hyperplanes in a high-dimensional space | construir φ es caro; se reemplaza x⁽ⁱ⁾ᵀx⁽ʲ⁾ por φ(x⁽ⁱ⁾)ᵀφ(x⁽ʲ⁾); κ(x⁽ⁱ⁾, x⁽ʲ⁾) = φ(x⁽ⁱ⁾)ᵀφ(x⁽ʲ⁾) |
| Kernel RBF (gaussiano) y γ | 31 | 83 | idem | κ = exp(−‖x⁽ⁱ⁾ − x⁽ʲ⁾‖² / 2σ²) = exp(−γ‖x⁽ⁱ⁾ − x⁽ʲ⁾‖²), γ = 1/(2σ²); el kernel como similitud entre 0 y 1 |
| SVM RBF en XOR | 31-32 | 83-84 | idem | `SVC(kernel='rbf', gamma=0.10, C=10.0)`; Figure 3.15 |
| Efecto de γ en Iris | 32-34 | 84-86 | idem | γ como corte de la esfera gaussiana; `gamma=0.2` frontera suave (Figure 3.16, p. 85); `gamma=100.0` frontera ajustada y sobreajuste (Figure 3.17, p. 86) |
| Árboles de decisión: idea | 34-35 | 86-87 | Decision tree learning | serie de preguntas; Figure 3.18; dividir por máxima ganancia de información; podar con profundidad máxima |
| Ganancia de información | 36 | 88 | Maximizing IG – getting the most bang for your buck | IG(Dp, f) = I(Dp) − Σ (Nⱼ/Np) I(Dⱼ); versión binaria con D_left y D_right |
| Entropía | 36-37 | 88-89 | idem | I_H(t) = −Σ p(i\|t) log₂ p(i\|t); 0 si nodo puro, 1 con 0.5/0.5; código y Figure 3.19 |
| Gini | 37 | 89 | idem | I_G(t) = Σ p(1−p) = 1 − Σ p²; máximo 0.5 en binario |
| Error de clasificación | 37 | 89 | idem | I_E(t) = 1 − max p(i\|t); útil para podar, no para crecer; Figure 3.20 (escenarios A y B) |
| Ejemplo numérico A vs B | 38-39 | 90-91 | idem | 40/40 en el padre; IG_E = 0.25 en ambos; IG_G = 0.125 (A) vs 0.1̄6 (B); IG_H = 0.19 (A) vs 0.31 (B) |
| Comparación de impurezas | 39-40 | 91-92 | idem | código con entropía, entropía/2, Gini y error; Figure 3.21 |
| Árbol en scikit-learn | 40-41 | 92-93 | Building a decision tree | fronteras en rectángulos; `DecisionTreeClassifier(criterion='gini', max_depth=4)`; no hace falta escalar; Figure 3.22 |
| Visualizar el árbol | 42-43 | 94-95 | idem | `tree.plot_tree`, Figure 3.23; lectura de la raíz (105 ejemplos, 35 y 70); poda por costo-complejidad |
| Random forest: 4 pasos | 43 | 95 | Combining multiple decision trees via random forests | bootstrap de tamaño n, d features sin reemplazo por nodo, repetir k veces, voto mayoritario |
| Muestreo con y sin reemplazo | 44 | 96 | recuadro Sampling with and without replacement | urna con 5 números; k árboles es el hiperparámetro principal |
| Tamaño del bootstrap y d | 45 | 97 | idem | n controla sesgo-varianza; d = √m por defecto; `RandomForestClassifier(n_estimators=25, n_jobs=2)` |
| Fronteras del bosque | 46 | 98 | idem | Figure 3.24; Gini por defecto |
| KNN: aprendizaje perezoso | 46-47 | 98-99 | K-nearest neighbors – a lazy learning algorithm | memoriza el entrenamiento; recuadro paramétricos vs no paramétricos (la SVM con kernel es no paramétrica); 3 pasos; Figure 3.25 |
| KNN en scikit-learn | 48-49 | 100-101 | idem | recuadro de ventajas y costos (k-d tree, ball tree); `KNeighborsClassifier(n_neighbors=5, p=2, metric='minkowski')`; Figure 3.26; recuadro de empates |
| Elección de k y distancia de Minkowski | 49-50 | 101-102 | idem | estandarizar para que cada feature pese igual; d = (Σ\|xₖ⁽ⁱ⁾ − xₖ⁽ʲ⁾\|^p)^(1/p); p=2 euclídea, p=1 Manhattan |
| Maldición de la dimensión | 50 | 102 | idem | el espacio se vuelve disperso; ni el vecino más cercano está cerca; selección de features y reducción de dimensión como remedio; recuadro RAPIDS/cuML |
| Summary | 50-51 | 102-103 | Summary | la SVM tiene muchos parámetros que ajustar; los bosques casi no |

Observaciones para citar:
- El capítulo no escribe la optimización de la SVM (ni ‖w‖, ni 2/‖w‖, ni ξᵢ): lo declara fuera de alcance en la p. 77. Para las fórmulas del margen
  hay que citar otra fuente; aquí solo está la intuición (pp. 76-78) y el kernel RBF (p. 83).
- Hay dos C distintos que se llaman igual y aquí son coherentes entre sí: el C de `LogisticRegression` es 1/λ (p. 75) y el C de la SVM es la
  penalización por errores (p. 78). En los dos casos, bajar C = más regularización.

## Erratas e inconsistencias

- **p. 95 (PDF 43) y p. 94 (PDF 42)**: el texto dice que la raíz corta por "sepal width ≤ 0.75 cm", pero el árbol se entrenó solo con
  petal length y petal width. El error viene de la p. 94: `feature_names` lista las cuatro features de Iris y `plot_tree` usa las dos primeras
  ("Sepal length", "Sepal width") como nombres. El corte real es sobre petal width.
- **p. 80 (PDF 28)**: el texto dice que 100 ejemplos de XOR reciben la etiqueta 1 y 100 la etiqueta −1, pero el código hace
  `np.where(y_xor, 1, 0)`: las clases son 1 y 0 (así aparecen en la leyenda, "Class 0").
- **p. 84 (PDF 32)**: "si aumentamos γ, aumentamos la influencia o el alcance de los ejemplos". Es al revés en cuanto al alcance: γ = 1/(2σ²),
  así que un γ grande es una gaussiana más angosta y cada ejemplo influye solo muy cerca de sí. La conclusión (frontera más ajustada) sí es correcta.
- **p. 67 (PDF 15)**: en `LogisticRegressionGD.fit`, la pérdida `(-y.dot(np.log(output)) - ((1 - y).dot(np.log(1 - output))) / X.shape[0])`
  divide por n solo el segundo término por la precedencia de operadores. La p. 66 dice que la pérdida es el promedio 1/n.
- **p. 67 (PDF 15) y p. 69 (PDF 17)**: la actualización usa `eta * 2.0 * ...`, que es el factor del MSE de Adaline. El gradiente de la log loss
  promediada no lleva ese 2; el propio libro lo reconoce de pasada en la p. 69 ("except for the scaling factor 2"). Solo cambia la tasa efectiva.
- **p. 66 (PDF 14)**: el docstring dice que `losses_` guarda "Mean squared error loss function values"; en realidad es la log loss.
- **p. 78 (PDF 26)**: la frase "The use of the slack variable, in turn, introduces the variable, which is commonly referred to as C" está
  rota: falta el símbolo (en ediciones anteriores, ξ). Y el pie de la Figure 3.11 llama a C "inverse regularization strength", que es la
  convención de la logística; en la SVM es la penalización por errores.
- **p. 88-89 (PDF 36-37)**: la notación choca: IG es la ganancia de información y también "Gini impurity (I_G)". Leer con cuidado.
- **p. 72 (PDF 20)**: dice que el primer ejemplo pertenece a la "class 3 (Iris-virginica)", mientras que el índice que devuelve el código es 2.
  Cuenta desde 1 en el texto y desde 0 en el código.
- **Versiones de librerías** (no son erratas del libro, pero el código ya no corre tal cual): `np.float_` (p. 67) se quitó en NumPy 2.0;
  `SGDClassifier(loss='log')` (p. 80) se renombró a `loss='log_loss'` en scikit-learn 1.1 y el nombre viejo se eliminó después;
  `multi_class='ovr'` en `LogisticRegression` (pp. 70 y 75) quedó deprecado en scikit-learn 1.5.
