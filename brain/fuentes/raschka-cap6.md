# Mapa de citas: Raschka, Liu y Mirjalili, cap. 6 "Learning Best Practices for Model Evaluation and Hyperparameter Tuning"

Archivo: `/Users/franciscocastillo/brain/02-Biblioteca/Machine-Learning/PyTorch-Scikit-Learn/Cap06 - Learning Best Practices for Model Evaluation and Hyperparameter Tuning.pdf` (34 páginas PDF).
Correspondencia verificada: página impresa = página PDF + 170, es decir, PDF N = impresa − 170. Comprobado en PDF 2 = p. 172, PDF 17 = p. 187,
PDF 34 = p. 204 (cada página del archivo se leyó con `pdftotext -layout`; las fórmulas de las pp. 177, 195, 196 y 201 se revisaron además como imagen,
porque `pdftotext` las extrae con los glifos rotos). La PDF 1 no lleva número impreso (abre el capítulo con un "6"); por el desfase le corresponde la 171.
Edición: Machine Learning with PyTorch and Scikit-Learn (Packt, 2022). Todo el capítulo usa Breast Cancer Wisconsin (569 ejemplos, 30 features,
M = 1 maligno, B = 0 benigno), 80 % entrenamiento y 20 % prueba estratificado.

| Tema | PDF | Impresa | Sección | Notas |
|---|---|---|---|---|
| Introducción | 1 | 171 | apertura | evaluar modelos, diagnosticar problemas, ajustar hiperparámetros, otras métricas |
| Por qué un pipeline | 1 | 171 | Streamlining workflows with pipelines | reusar los parámetros aprendidos en el entrenamiento para transformar datos nuevos; clase `Pipeline` |
| Dataset Breast Cancer Wisconsin | 2 | 172 | Loading the Breast Cancer Wisconsin dataset | 569 ejemplos; col. 1 ID, col. 2 diagnóstico, cols. 3-32 las 30 features; `pd.read_csv(..., header=None)` desde UCI |
| LabelEncoder y train_test_split | 3 | 173 | idem | `X = df.loc[:, 2:].values`; `le.classes_` = ['B', 'M'] → 0 y 1; `train_test_split(test_size=0.20, stratify=y, random_state=1)` |
| make_pipeline | 3-4 | 173-174 | Combining transformers and estimators in a pipeline | `make_pipeline(StandardScaler(), PCA(n_components=2), LogisticRegression())`; test accuracy 0.956; transformadores (fit/transform) + estimador final (fit/predict) |
| Cómo funciona el Pipeline por dentro | 4-5 | 174-175 | idem | fit pasa por fit+transform en cada paso y fit en el estimador; predict pasa solo por transform; Figure 6.1 |
| Holdout y selección de modelos | 5 | 175 | Using k-fold cross-validation... / The holdout method | reusar el test en la selección de modelos lo vuelve parte del entrenamiento (sobreajuste) |
| Train, validación y test | 6 | 176 | The holdout method | Figure 6.2; desventaja: la estimación depende mucho de cómo se parte |
| K-fold: definición | 6 | 176 | K-fold cross-validation | k folds sin reemplazo; k − 1 para entrenar, 1 para evaluar; k modelos y k estimaciones; recuadro sobre muestreo con y sin reemplazo (cap. 3) |
| K-fold: promedio y reentrenar | 7 | 177 | idem | E = (1/10) Σᵢ Eᵢ en Figure 6.3 (k = 10); reentrenar con todo el train al final; folds de prueba disjuntos; cada ejemplo se evalúa una vez |
| Elegir k | 7-8 | 177-178 | idem | k = 10 por Kohavi (1995); k grande = menos sesgo pesimista, más varianza y costo; datos grandes: k = 5 |
| LOOCV | 8 | 178 | recuadro Leave-one-out cross-validation | k = n; para datasets muy chicos |
| K-fold estratificado | 8-9 | 178-179 | idem | conserva la proporción de clases en cada fold; bucle con `StratifiedKFold(n_splits=10).split(X_train, y_train)`; distribución [256 153] / [257 153]; CV accuracy 0.950 +/- 0.014 |
| cross_val_score | 9-10 | 179-180 | idem | `cross_val_score(estimator=pipe_lr, X=X_train, y=y_train, cv=10, n_jobs=1)`; mismo 0.950 +/- 0.014; `n_jobs=-1` usa todos los CPU |
| Varianza de la estimación (lecturas) | 10 | 180 | recuadro Estimating generalization performance | fuera del libro; remite a Raschka (arXiv 1811.12808, bootstrap .632 y .632+) y a Markatou et al. 2005 |
| Curvas de aprendizaje y validación: idea | 10 | 180 | Debugging algorithms with learning and validation curves | sobreajuste = alta varianza, subajuste = alto sesgo; más datos ayudan contra el sobreajuste |
| Sesgo alto vs varianza alta | 11 | 181 | Diagnosing bias and variance problems with learning curves | Figure 6.4 (cuatro paneles): sesgo alto = train y CV bajos (más parámetros/features, menos regularización); varianza alta = brecha grande (más datos, menos complejidad, más regularización, selección o extracción de features) |
| learning_curve: código | 12 | 182 | idem | `LogisticRegression(penalty='l2', max_iter=10000)`; `learning_curve(train_sizes=np.linspace(0.1, 1.0, 10), cv=10)`; media ± desviación con `fill_between` |
| Lectura de la curva de aprendizaje | 13 | 183 | idem | Figure 6.5; `max_iter` por convergencia (default 1000); estratificado por defecto; bien con más de 250 ejemplos, brecha mayor por debajo |
| Curvas de validación | 13-14 | 183-184 | Addressing over- and underfitting with validation curves | varían un hiperparámetro en vez del tamaño; `validation_curve(param_name='logisticregression__C', param_range=[0.001 ... 100.0], cv=10)`; eje x en log |
| Lectura de la curva de validación | 15 | 185 | idem | Figure 6.6; C chico = más regularización y leve subajuste, C grande = leve sobreajuste; punto dulce entre 0.1 y 1.0 |
| Parámetros vs hiperparámetros | 15 | 185 | Fine-tuning machine learning models via grid search | pesos aprendidos vs parámetros de ajuste (regularización, profundidad del árbol) |
| Grid search | 16 | 186 | Tuning hyperparameters via grid search | búsqueda exhaustiva; `pipe_svc` con `SVC(random_state=1)`; `param_grid` lista de dos dicts (lineal: `svc__C`; rbf: `svc__C` y `svc__gamma`, 8 valores de 0.0001 a 1000); `GridSearchCV(scoring='accuracy', cv=10, refit=True, n_jobs=-1)`; best_score_ 0.9846, best_params_ C=100, gamma=0.001, rbf |
| best_estimator_ y refit | 17 | 187 | idem | test accuracy 0.974; con `refit=True` (default) no hace falta reentrenar a mano |
| Randomized search: idea | 17 | 187 | Exploring hyperparameter configurations more widely with randomized search | muestrear de distribuciones; Figure 6.7 (9 configuraciones en rejilla vs al azar); Bergstra y Bengio 2012 |
| Distribución loguniform | 18 | 188 | idem | `scipy.stats.loguniform(0.0001, 1000.0)`; igual cantidad de muestras por década; `rvs(10)`; recuadro: sirve cualquier objeto con `rvs()` |
| RandomizedSearchCV | 18-19 | 188-189 | idem | `RandomizedSearchCV(param_distributions=param_grid, n_iter=20, cv=10, random_state=1)`; best_score_ 0.9671; C ≈ 0.0597, lineal |
| Successive halving | 19-20 | 189-190 | More resource-efficient hyperparameter search with successive halving | 4 pasos (muchos candidatos, pocos recursos, descartar el 50 % peor, repetir con más recursos); `HalvingGridSearchCV` también existe |
| HalvingRandomSearchCV | 20-21 | 190-191 | idem | `from sklearn.experimental import enable_halving_search_cv`; `resource='n_samples', factor=1.5` (≈ 66 % pasa de ronda), `n_candidates='exhaust'`; best_score_ 0.9618, C ≈ 4.93 lineal; test 0.982 |
| hyperopt y TPE | 21 | 191 | recuadro Hyperparameter tuning with hyperopt | optimización bayesiana TPE; hyperopt-sklearn |
| Validación cruzada anidada: idea | 21 | 191 | Algorithm selection with nested cross-validation | para elegir entre algoritmos; Varma y Simon 2006: error casi insesgado |
| Bucle externo e interno | 22 | 192 | idem | externo k-fold para evaluar, interno k-fold para elegir el modelo; Figure 6.8 con 5 externos y 2 internos ("5×2 cross-validation") |
| Anidada en scikit-learn | 22-23 | 192-193 | idem | `GridSearchCV(..., cv=2)` dentro de `cross_val_score(gs, ..., cv=5)`; SVM 0.974 +/- 0.015 vs árbol (`max_depth` 1-7 o None) 0.934 +/- 0.016 |
| Otras métricas | 23 | 193 | Looking at different performance evaluation metrics | precisión, recall, F1, MCC |
| Matriz de confusión | 23-24 | 193-194 | Reading a confusion matrix | cuadrada con TP, TN, FP, FN; Figure 6.9; `confusion_matrix(y_true=y_test, y_pred=y_pred)` = [[71 1] [2 40]]; dibujo con `matshow` |
| Lectura de la matriz | 25 | 195 | idem | Figure 6.10 (filas = etiqueta real, columnas = predicha); clase 1 positiva: TN 71, TP 40, FN 2, FP 1 |
| ERR y ACC | 25 | 195 | Optimizing the precision and recall of a classification model | ERR = (FP + FN)/(FP + FN + TP + TN); ACC = (TP + TN)/(FP + FN + TP + TN) = 1 − ERR |
| TPR y FPR | 25 | 195 | idem | FPR = FP/N = FP/(FP + TN); TPR = TP/P = TP/(FN + TP); útiles con clases desbalanceadas |
| Recall y precisión | 26 | 196 | idem | REC = TPR = TP/P = TP/(FN + TP); PRE = TP/(TP + FP); recall alto = no perder malignos (más FP); precisión alta = más FN |
| F1 | 26 | 196 | idem | F1 = 2 · PRE · REC/(PRE + REC) (media armónica); recuadro Powers (arXiv 2010.16061) |
| MCC | 26-27 | 196-197 | idem | MCC = (TP·TN − FP·FN)/√((TP+FP)(TP+FN)(TN+FP)(TN+FN)); entre −1 y 1; usa toda la matriz (F1 no usa TN); Chicco y Jurman |
| Métricas en sklearn.metrics | 27 | 197 | idem | `precision_score` 0.976, `recall_score` 0.952, `f1_score` 0.964, `matthews_corrcoef` 0.943 |
| Clase positiva y make_scorer | 27-28 | 197-198 | idem | la positiva es la clase 1; `make_scorer(f1_score, pos_label=0)` en `GridSearchCV(scoring=scorer)`; best_score_ 0.9862, C=10, gamma=0.01 |
| Curva ROC y AUC: idea | 28 | 198 | Plotting a receiver operating characteristic | FPR vs TPR al mover el umbral; diagonal = azar; perfecto en la esquina (FPR 0, TPR 1); ROC AUC; curvas precisión-recall (`precision_recall_curve`) |
| ROC: código | 28-29 | 198-199 | idem | solo 2 features `X_train[:, [4, 14]]`; `LogisticRegression(penalty='l2', solver='lbfgs', C=100.0)`; `StratifiedKFold(n_splits=3)`; `roc_curve(..., probas[:, 1], pos_label=1)`; `interp` para promediar; `auc` |
| ROC: lectura | 30 | 200 | idem | Figure 6.11; AUC media 0.76; `roc_auc_score`; Bradley 1997: AUC y accuracy suelen coincidir |
| Multiclase: micro | 30 | 200 | Scoring metrics for multiclass classification | vía one-vs-all; PRE_micro = (TP₁ + ... + TPₖ)/(TP₁ + ... + TPₖ + FP₁ + ... + FPₖ) |
| Multiclase: macro y ponderado | 31 | 201 | idem | PRE_macro = (PRE₁ + ... + PREₖ)/k; micro pesa cada predicción, macro cada clase; macro ponderado por número de instancias reales; `make_scorer(precision_score, pos_label=1, greater_is_better=True, average='micro')` |
| Desbalance: el problema | 31 | 201 | Dealing with class imbalance | spam, fraude, tamizaje; con 90 % sanos, predecir siempre la mayoría da 90 %; 357 benignos y 212 malignos |
| Crear el desbalance | 31-32 | 201-202 | idem | `np.vstack((X[y == 0], X[y == 1][:40]))`; predecir siempre 0 da 89.92 % |
| Métrica y ajuste ante desbalance | 32 | 202 | idem | elegir recall o precisión según la aplicación; la pérdida suma sobre ejemplos y sesga hacia la mayoría; `class_weight='balanced'` |
| Remuestreo | 32-33 | 202-203 | idem | upsampling, downsampling, datos sintéticos; `resample(..., replace=True, n_samples=357, random_state=123)`: de 40 a 357; balanceado da 50 % al predecir la mayoría |
| SMOTE | 33 | 203 | recuadro Generating new training data to address class imbalance | fuera del libro; Chawla et al. 2002; librería imbalanced-learn |
| Summary | 33-34 | 203-204 | Summary | pipelines, k-fold, curvas, grid/random/halving, métricas, desbalance; siguiente capítulo: ensembles |

Observaciones para citar:
- Las fórmulas de métricas están juntas en las pp. 195-197 (PDF 25-27). La de micro está en la p. 200 y la de macro en la p. 201: cruzan de página.
- El capítulo no da fórmula para el AUC (solo la idea y `auc`), ni para el macro ponderado.
- La matriz de confusión del libro tiene filas = clase real y columnas = clase predicha, con la clase 0 arriba: TN arriba a la izquierda, TP abajo
  a la derecha. Es la convención de `confusion_matrix`, pero la Figure 6.9 (la ilustración genérica, p. 194) pone los positivos primero.
  Conviene avisar del cambio de orden al citar las dos figuras.

## Erratas e inconsistencias

- **p. 185 (PDF 15)**: el pie de la Figure 6.6 dice "validation curve plot for the SVM hyperparameter C", pero la curva es de la regresión logística
  (`logisticregression__C`), como dice el texto de la misma página.
- **p. 201 (PDF 31)**: "macro-averaging weights all classes equally to evaluate the overall performance of a classifier with regard to the most
  frequent class labels". La segunda mitad contradice la primera: el macro da el mismo peso a cada clase, así que no favorece a las frecuentes;
  el que queda dominado por las clases frecuentes es el micro.
- **p. 201 (PDF 31)**: "the weighted macro-average is the default for multiclass problems in scikit-learn". No es así en las versiones actuales:
  `precision_score` usa `average='binary'` por defecto y con etiquetas multiclase lanza un error que pide elegir `micro`, `macro` o `weighted`
  (comprobado en scikit-learn 1.6.1).
- **p. 197 (PDF 27)**: la referencia de Chicco y Jurman dice "BMC Genomics. pp. 281-305, 2012", que son los datos de Bergstra y Bengio (p. 187).
  El artículo es de 2020 (el propio enlace lo indica: s12864-019-6413-7).
- **p. 196 (PDF 26)**: "precision (PRE) and recall (REC) are related to those TP and TN rates": las tasas definidas justo antes son TPR y FPR, no TN.
- **p. 192 (PDF 22)**: llama "5×2 cross-validation" a la anidada con 5 folds externos y 2 internos. En la literatura (Dietterich), 5×2 cv suele ser
  otra cosa: 5 repeticiones de una validación cruzada de 2 folds. Avisar si se cita.
- **p. 191 (PDF 21)**: compara el 98.2 % de `HalvingRandomSearchCV` con "GridSearchCV and RandomizedSearchCV", pero solo hay accuracy de prueba
  del grid search (97.4 %, p. 187); la del randomized search nunca se calcula. Además el código guarda `clf = hs.best_estimator_` y después
  usa `hs.score`, que da lo mismo pero deja `clf` sin uso.
- **p. 203 (PDF 33)**: la salida mostrada es `50`; en NumPy actual `np.mean(...) * 100` imprime `50.0`.
- **p. 198 (PDF 28)**: el ejemplo ROC usa dos features y aun así deja `PCA(n_components=2)` en el pipeline: el PCA solo rota los datos, no reduce.
  No es un error de cálculo, pero confunde si se lee como "reducción".
- **Versiones de librerías** (comprobado con scikit-learn 1.6.1, NumPy 2.1.3, SciPy 1.15.3 instalados en esta máquina):
  `HalvingRandomSearchCV` sigue siendo experimental y sin `from sklearn.experimental import enable_halving_search_cv` falla con ImportError,
  tal como advierte la p. 190; `from numpy import interp` (p. 198) sigue funcionando; `LogisticRegression(penalty='l2', ...)` (pp. 182 y 198)
  corre sin aviso en 1.6.1; el resto del código del capítulo usa APIs vigentes. La URL de UCI de la p. 172 es la del sitio antiguo
  (`archive.ics.uci.edu/ml/machine-learning-databases/...`); `sklearn.datasets.load_breast_cancer` trae el mismo dataset sin red, pero con
  la clase codificada al revés (0 = maligno), así que hay que invertirla para reproducir los números del libro.
