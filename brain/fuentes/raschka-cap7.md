# Mapa de citas: Raschka, Liu y Mirjalili, cap. 7 "Combining Different Models for Ensemble Learning"

Archivo: `/Users/franciscocastillo/brain/02-Biblioteca/Machine-Learning/PyTorch-Scikit-Learn/Cap07 - Combining Different Models for Ensemble Learning.pdf` (42 páginas PDF).
Correspondencia verificada: página impresa = página PDF + 204, es decir, PDF N = impresa − 204. Comprobado en PDF 2 = p. 206, PDF 17 = p. 221,
PDF 41 = p. 245 (cada página del archivo se leyó con `pdftotext -layout`; las fórmulas de las pp. 207, 231, 239, 240 y las figuras 7.10 y 7.12-7.16
de las pp. 231 y 241-243 se revisaron además como imagen, porque `pdftotext` rompe los glifos y no extrae las tablas-figura).
La PDF 1 no lleva número impreso (abre el capítulo con un "7"); por el desfase le corresponde la 205. La PDF 42 está en blanco.
Edición: Machine Learning with PyTorch and Scikit-Learn (Packt, 2022). Datos del capítulo: Iris (solo versicolor y virginica, features sepal width
y petal length, 50 % / 50 %) para el voto mayoritario; Wine (solo clases 2 y 3, features Alcohol y OD280/OD315, 80 % / 20 %) para bagging,
AdaBoost y XGBoost; un toy de 10 ejemplos 1D para AdaBoost y otro de 3 ejemplos para gradient boosting.

| Tema | PDF | Impresa | Sección | Notas |
|---|---|---|---|---|
| Introducción | 1 | 205 | apertura | voto mayoritario, bagging (muestras con repetición), boosting con weak learners |
| Qué es un ensemble | 1 | 205 | Learning with ensembles | meta-clasificador; ejemplo de 10 expertos; voto mayoritario = más del 50 % (binario); plurality voting en multiclase ("absolute" vs "relative" majority) |
| Mayoría vs pluralidad, esquema general | 2 | 206 | idem | Figure 7.1 (10 clasificadores, tres símbolos); m clasificadores C₁ ... Cₘ, mismos o distintos algoritmos; **random forest** como ensemble de árboles (remite al cap. 3); Figure 7.2 |
| Fórmula del voto (moda) | 2 | 206 | idem | ŷ = mode{C₁(x), C₂(x), ..., Cₘ(x)}; ejemplo mode{1, 2, 1, 1, 2, 4, 5, 4} = 1 |
| Voto con signo | 3 | 207 | idem | clases −1 y +1: C(x) = sign[Σⱼ Cⱼ(x)] = 1 si Σⱼ Cⱼ(x) ≥ 0, −1 si no |
| Error del ensemble con la binomial | 3 | 207 | idem | supuestos: n clasificadores con el mismo error ε, independientes y no correlacionados; P(y ≥ k) = Σₖⁿ C(n, k) εᵏ (1 − ε)ⁿ⁻ᵏ = ε_ensemble |
| Ejemplo n = 11, ε = 0.25 | 3 | 207 | idem | Σ desde k = 6 hasta 11 de C(11, k) 0.25ᵏ 0.75¹¹⁻ᵏ = 0.034; recuadro "The binomial coefficient": n!/((n − k)! k!) |
| Empate con n par | 3 | 207 | idem | en esta ilustración un 50-50 con n par se cuenta como error, aunque solo lo sería la mitad de las veces |
| ensemble_error en Python | 3-4 | 207-208 | idem | `scipy.special.comb`; `k_start = int(math.ceil(n_classifier / 2.))`; `ensemble_error(n_classifier=11, error=0.25)` = 0.03432750701904297 |
| Curva error base vs ensemble | 4-5 | 208-209 | idem | `error_range = np.arange(0.0, 1.01, 0.01)`; el ensemble gana siempre que ε < 0.5; Figure 7.3 (p. 209) |
| Plurality voting (recuadro) | 5 | 209 | Combining classifiers via majority vote | se dice "majority voting" aunque sea multiclase |
| Voto mayoritario ponderado | 5-6 | 209-210 | Implementing a simple majority vote classifier | ŷ = arg maxᵢ Σⱼ wⱼ χ_A(Cⱼ(x) = i); χ_A función indicadora; A conjunto de etiquetas; con pesos iguales vuelve a la moda |
| Ejemplo de pesos 0.2, 0.2, 0.6 | 6 | 210 | idem | C₁ → 0, C₂ → 0, C₃ → 1: sin pesos gana 0; con pesos gana 1 (como mode{0, 0, 1, 1, 1}); `np.argmax(np.bincount([0, 0, 1], weights=[0.2, 0.2, 0.6]))` = 1 |
| Voto con probabilidades | 6-7 | 210-211 | idem | ŷ = arg maxᵢ Σⱼ wⱼ pᵢⱼ; útil si los clasificadores están bien calibrados; ejemplo [0.9, 0.1], [0.8, 0.2], [0.4, 0.6] → p(i₀|x) = 0.58, p(i₁|x) = 0.42 → clase 0; `np.average(ex, axis=0, weights=[0.2, 0.2, 0.6])` |
| MajorityVoteClassifier: __init__ y fit | 7-8 | 211-212 | idem | hereda de `BaseEstimator, ClassifierMixin`; `vote='classlabel'` o `'probability'`; `_name_estimators`; `LabelEncoder` para que las clases empiecen en 0; `clone(clf).fit(...)` |
| predict, predict_proba, get_params | 8-9 | 212-213 | idem | `np.apply_along_axis(lambda x: np.argmax(np.bincount(x, weights=self.weights)), axis=1, arr=predictions)`; `predict_proba` promedia con `np.average(..., weights=self.weights)`; `get_params` propio con claves `nombre__parámetro` para grid search |
| VotingClassifier (recuadro) | 10 | 214 | recuadro VotingClassifier in scikit-learn | `sklearn.ensemble.VotingClassifier` desde la 0.17, basado en la primera edición del libro |
| Datos Iris para el voto | 10 | 214 | Using the majority voting principle to make predictions | `iris.data[50:, [1, 2]]`, `iris.target[50:]`, `LabelEncoder` |
| Probabilidades de árboles y KNN (recuadro) | 10 | 214 | recuadro Class membership probabilities from decision trees | frecuencias normalizadas por nodo (árbol) o entre vecinos (KNN); no salen de una función de masa de probabilidad |
| Tres clasificadores base | 11-12 | 215-216 | idem | `train_test_split(test_size=0.5, random_state=1, stratify=y)`; `LogisticRegression(penalty='l2', C=0.001, solver='lbfgs', random_state=1)`; `DecisionTreeClassifier(max_depth=1, criterion='entropy', random_state=0)`; `KNeighborsClassifier(n_neighbors=1, p=2, metric='minkowski')`; LR y KNN en pipeline con `StandardScaler`; `cross_val_score(cv=10, scoring='roc_auc')` |
| Resultados individuales y del ensemble | 12-13 | 216-217 | idem | ROC AUC 0.92 ± 0.15 (LR), 0.87 ± 0.18 (árbol), 0.85 ± 0.13 (KNN), 0.98 ± 0.05 (voto); LR y KNN no son invariantes a la escala |
| Curvas ROC en el test | 13-14 | 217-218 | Evaluating and tuning the ensemble classifier | `roc_curve`, `auc`; ensemble AUC 0.95 en test, LR parecido (alta varianza por el dataset chico); Figure 7.4 |
| Regiones de decisión | 14-16 | 218-220 | idem | estandarizar para ver el árbol en la misma escala; `itertools.product`, `contourf`; el ensemble es un híbrido; Figure 7.5 (p. 220) |
| get_params del ensemble | 16-17 | 220-221 | idem | claves `decisiontreeclassifier__...`, `pipeline-1__clf__C`, `pipeline-2__...` |
| Grid search del ensemble | 18-19 | 222-223 | idem | `params = {'decisiontreeclassifier__max_depth': [1, 2], 'pipeline-1__clf__C': [0.001, 0.1, 100.0]}`; `GridSearchCV(cv=10, scoring='roc_auc')`; mejor C = 0.001, profundidad indiferente; ROC AUC 0.98; no se reusa el test |
| Stacking (recuadro) | 19 | 223 | recuadro Building ensembles using stacking | dos niveles, meta-clasificador (típicamente LR) sobre las predicciones; Wolpert 1992; `StackingCVClassifier` de mlxtend; `StackingClassifier` en scikit-learn 0.22+ |
| Bagging: definición y bootstrap | 19-20 | 223-224 | Bagging – building an ensemble of classifiers from bootstrap samples | bootstrap = muestras al azar con reemplazo; bootstrap aggregating; Figure 7.6 |
| Bagging a mano | 20-21 | 224-225 | Bagging in a nutshell | Figure 7.7: 7 ejemplos (índices 1-7) remuestreados por ronda; cada Cⱼ suele ser un árbol sin podar; duplicados y ejemplos ausentes; se combina por voto mayoritario |
| Random forest como caso de bagging | 21 | 225 | idem | **random forest = bagging + subconjuntos aleatorios de features** al ajustar cada árbol (remite al cap. 3) |
| Breiman (recuadro) | 21 | 225 | recuadro Model ensembles using bagging | reporte técnico 1994; *Bagging predictors*, Machine Learning 24(2):123-140, 1996; mejora modelos inestables y reduce sobreajuste |
| Datos Wine | 21-22 | 225-226 | Applying bagging to classify examples in the Wine dataset | se quita la clase 1; features 'Alcohol' y 'OD280/OD315 of diluted wines'; `train_test_split(test_size=0.2, random_state=1, stratify=y)`; recuadro con la ruta local del CSV |
| BaggingClassifier | 22-23 | 226-227 | idem | `DecisionTreeClassifier(criterion='entropy', random_state=1, max_depth=None)`; `BaggingClassifier(base_estimator=tree, n_estimators=500, max_samples=1.0, max_features=1.0, bootstrap=True, bootstrap_features=False, n_jobs=1, random_state=1)` |
| Árbol vs bagging | 23 | 227 | idem | árbol sin podar 1.000/0.833 (alta varianza); bagging 1.000/0.917 |
| Regiones de decisión del bagging | 23-24 | 227-228 | idem | frontera más suave; Figure 7.8 (p. 228) |
| Bagging reduce varianza, no sesgo | 25 | 229 | idem | ineficaz contra el sesgo; por eso se usa con modelos de bajo sesgo (árboles sin podar) |
| Boosting: idea y AdaBoost | 25 | 229 | Leveraging weak learners via adaptive boosting | recuadro AdaBoost recognition (Schapire 1990; Freund y Schapire ICML 1996; Gödel 2003); weak learner = apenas mejor que el azar, p. ej. un stump; enfocarse en los ejemplos difíciles |
| Boosting original en 4 pasos | 25-26 | 229-230 | How adaptive boosting works | subconjuntos sin reemplazo d₁, d₂ (+50 % de los mal clasificados), d₃ (donde C₁ y C₂ discrepan), voto; Breiman 1996: baja sesgo y varianza; en la práctica AdaBoost puede sobreajustar (Raetsch et al. 1998) |
| AdaBoost reponderando | 26-27 | 230-231 | idem | usa todo el train y repondera cada ronda; Figure 7.9 (cuatro subfiguras: stumps y pesos crecientes de los mal clasificados, voto ponderado final) |
| Pseudocódigo de AdaBoost | 27 | 231 | idem | 1) w uniforme, Σᵢ wᵢ = 1; 2a) Cⱼ = train(X, y, w); 2b) ŷ = predict(Cⱼ, X); 2c) ε = w · (ŷ ≠ y); 2d) αⱼ = 0.5 log((1 − ε)/ε); 2e) w := w × exp(−αⱼ × ŷ × y); 2f) w := w/Σᵢ wᵢ; 3) ŷ = (Σⱼ αⱼ × predict(Cⱼ, X)) > 0; × elemento a elemento, · producto punto |
| Ejemplo de 10 ejemplos | 27-28 | 231-232 | idem | Figure 7.10: x = 1.0 ... 10.0, y ∈ {1, −1}, pesos 0.1, regla ŷ(x <= 3.0), fallan los ejemplos 7, 8 y 9 |
| ε, α y actualización en NumPy | 28-29 | 232-233 | idem | `epsilon = np.mean(~correct)` = 0.3; `alpha_j` = 0.42364893019360184; si acierta 0.1·e^(−α) = 0.0655, si falla 0.1·e^(α) = 0.1528; `np.where` |
| Normalizar | 29 | 233 | idem | w := w/Σᵢ wᵢ; aciertos 0.1 → 0.0714, errores 0.1 → 0.1667 |
| AdaBoostClassifier | 29-30 | 233-234 | Applying AdaBoost using scikit-learn | `AdaBoostClassifier(base_estimator=tree, n_estimators=500, learning_rate=0.1, random_state=1)` con stumps `max_depth=1`; stump 0.916/0.875 (subajuste); AdaBoost 1.000/0.917 (más varianza al bajar el sesgo) |
| Regiones de AdaBoost | 31-32 | 235-236 | idem | frontera más compleja que el stump, parecida al bagging; Figure 7.11 |
| Costo computacional y Netflix Prize | 32 | 236 | idem | ganancia modesta frente al costo; BigChaos 2009; Netflix nunca implementó el modelo ganador |
| Gradient boosting: introducción | 33 | 237 | Gradient boosting – training an ensemble based on loss gradients | base de XGBoost |
| AdaBoost vs gradient boosting | 33 | 237 | Comparing AdaBoost with gradient boosting | árboles de profundidad 3 a 6 (8 a 64 hojas); los errores forman el objetivo del siguiente árbol, no pesos de muestra; tasa de aprendizaje global igual para todos los árboles |
| Algoritmo general | 33-35 | 237-239 | Outlining the general gradient boosting algorithm | Friedman 2001; recuadro regresión (video); 1) F₀(x) = arg min_ŷ Σᵢ L(yᵢ, ŷ); 2a) pseudo-residuo rᵢₘ = −[∂L(yᵢ, F(xᵢ))/∂F(xᵢ)] con F = Fₘ₋₁; 2b) árbol sobre rᵢₘ, hojas Rⱼₘ; 2c) γⱼₘ = arg min_γ Σ_{xᵢ∈Rⱼₘ} L(yᵢ, Fₘ₋₁(xᵢ) + γ); 2d) Fₘ(x) = Fₘ₋₁(x) + η γₘ, η entre 0.01 y 1 |
| Pérdida logística y log(odds) | 35 | 239 | Explaining the gradient boosting algorithm for classification | Lᵢ (ver erratas); ŷ = log(odds) = log(p/(1 − p)); Lᵢ = log(1 + e^ŷᵢ) − yᵢŷᵢ; ∂Lᵢ/∂ŷᵢ = e^ŷᵢ/(1 + e^ŷᵢ) − yᵢ = pᵢ − yᵢ |
| Algoritmo para clasificación | 36 | 240 | idem | 1) raíz = log(odds); 2a) p = 1/(1 + e^(−ŷ)) y residuo −∂Lᵢ/∂ŷᵢ = yᵢ − pᵢ; 2c) γⱼₘ = Σᵢ(yᵢ − pᵢ)/Σᵢ pᵢ(1 − pᵢ), solo sobre la hoja; 2d) Fₘ(x) = Fₘ₋₁(x) + η γₘ |
| log(odds) y no probabilidades (recuadro) | 37 | 241 | recuadro Outputting log(odds) vs probabilities | las probabilidades no se pueden sumar; técnicamente son árboles de regresión |
| Toy de 3 ejemplos: paso 1 y 2a | 37 | 241 | Illustrating gradient boosting for classification | Figure 7.12: x₁ = 1.12, 2.45, 3.54; x₂ = 1.4, 2.1, 1.2; y = 1, 0, 1; odds = 2/1; Figure 7.13: ŷ = 0.69, p = 0.67, r = 0.33, −0.67, 0.33 |
| Árbol sobre residuos y γ | 38 | 242 | idem | Figure 7.14: corte x₂ > 2?; hoja izquierda {1, 3}: γ = 0.66/(2·0.67·0.33) = 1.49; hoja derecha {2}: γ = −3.12 (ver erratas); árbol limitado a 2 hojas |
| Actualización con η = 0.1 | 38 | 242 | idem | Figure 7.15: F₁(x₁) = 0.69 + 0.1 × 1.49 = 0.839 |
| Segunda ronda | 39 | 243 | idem | Figure 7.16: nuevos log(odds) 0.839, 0.378, 0.839; p = 0.698, 0.593, 0.698; residuos 0.302, −0.593, 0.302; parar tras M árboles o residuos bajo un umbral; clasificar con umbral 0.5; fronteras no lineales |
| XGBoost, LightGBM, CatBoost, Hist | 39-40 | 243-244 | Using XGBoost | `GradientBoostingClassifier` es secuencial y lento; XGBoost = extreme gradient boosting; `HistGradientBoostingClassifier` inspirado en LightGBM; enlaces |
| XGBClassifier | 40 | 244 | idem | recuadro: XGBoost 1.5.0; `xgb.XGBClassifier(n_estimators=1000, learning_rate=0.01, max_depth=4, random_state=1, use_label_encoder=False)`; 0.968/0.917; tasa recomendada 0.01 a 0.1; menor tasa, más árboles |
| max_depth y use_label_encoder | 41 | 245 | idem | `max_depth` entre 2 y 6; `use_label_encoder=False` apaga un aviso: XGBoost espera etiquetas enteras desde 0 |
| Summary | 41 | 245 | Summary | voto mayoritario, bagging contra la varianza, AdaBoost y gradient boosting; siguiente: análisis de sentimiento |

Observaciones para citar:
- La binomial del error del ensemble está en la p. 207 (PDF 3), con el ejemplo numérico y el código en las pp. 207-208; la curva (Figure 7.3) en la 209.
- Las tres fórmulas del voto (moda, ponderado con indicadora, con probabilidades) están en las pp. 206, 209-210 y 210-211.
- Todo AdaBoost con números está en las pp. 231-233 (PDF 27-29): pseudocódigo y tabla en la 231, cuentas en NumPy en la 232-233.
- Gradient boosting: algoritmo general pp. 238-239, clasificación pp. 239-240, ejemplo numérico pp. 241-243. Las cifras del ejemplo están dentro de
  figuras (tablas como imagen), no en el texto.
- Random forest no tiene sección propia en este capítulo: aparece en la p. 206 (ensemble de árboles, remite al cap. 3) y en la p. 225
  (caso particular de bagging con features al azar). La explicación completa está en el cap. 3.
- El capítulo no da la fórmula de la probabilidad de que un ejemplo quede fuera de una muestra bootstrap (≈ 36.8 %), ni habla de out-of-bag.

## Erratas e inconsistencias

- **p. 239 (PDF 35)**: la pérdida logística aparece como Lᵢ = −yᵢ log pᵢ + (1 − yᵢ) log(1 − pᵢ). Falta el corchete: es
  Lᵢ = −[yᵢ log pᵢ + (1 − yᵢ) log(1 − pᵢ)]. Tal como está impresa, el segundo término tiene el signo cambiado. La forma con log(odds) que sigue
  (log(1 + e^ŷ) − yŷ) sí es correcta.
- **p. 240 (PDF 36)**: el denominador de γⱼₘ está impreso como Σᵢ pᵢ(i − pᵢ), con una "i" en vez de un 1; es Σᵢ pᵢ(1 − pᵢ). El numerador
  "Σᵢ yᵢ − pᵢ" necesita paréntesis: Σᵢ(yᵢ − pᵢ). Además la línea anterior iguala el arg min a la expresión de la pérdida de un solo ejemplo
  (log(1 + e^(ŷᵢ+γ)) − yᵢ(ŷᵢ + γ)), sin el arg min ni la suma.
- **p. 242 (PDF 38)**, Figure 7.14: en la hoja derecha el numerador es −0.69 cuando el residuo es −0.67 (se coló el log(odds)). La cuenta correcta
  es −0.67/(0.67 · 0.33) ≈ −3.0 (exacto: (−2/3)/(2/9) = −3), no −3.12. Arrastra el error a la Figure 7.16 (p. 243): para el ejemplo 2 el
  log(odds) nuevo sería 0.693 − 0.3 ≈ 0.393, p ≈ 0.597 y residuo ≈ −0.597, no 0.378, 0.593 y −0.593. (La hoja izquierda da 1.5 exacto;
  el 1.49 y el 0.839 del libro son redondeos razonables: exacto 0.843.)
- **p. 231 (PDF 27)**, Figure 7.10: los pesos actualizados de los aciertos dicen 0.072, pero 1/14 = 0.0714 redondea a 0.071, como dice el
  propio texto en la p. 233.
- **p. 231 (PDF 27)**: el paso 2c define ε = w · (ŷ ≠ y) (error ponderado), pero el código de la p. 232 usa `np.mean(~correct)`. Da lo mismo
  solo porque los pesos iniciales son uniformes (0.1); en rondas posteriores hay que usar el producto punto.
- **p. 207 (PDF 3)**: la fórmula general escribe P(y ≥ k) con la suma sin límite inferior (solo "k"). Lo que se suma va desde k = ⌈n/2⌉
  (en el ejemplo, k = 6) y "y" ahí es el número de clasificadores que se equivocan, no la etiqueta.
- **p. 212 (PDF 8)**: el código impreso parte `if self.weights and` / `len(self.weights) != len(self.classifiers):` en dos líneas sin
  paréntesis: es un SyntaxError si se copia tal cual (comprobado). Hay que envolver la condición entre paréntesis.
- **p. 217 (PDF 13)**: escribe "MajorityVotingClassifier"; la clase se llama `MajorityVoteClassifier`.
- **pp. 220-221 (PDF 16-17)**: la salida de `get_params` muestra la regresión logística con `random_state=0`, `solver='liblinear'` y
  `multi_class='ovr'`, pero el código la crea con `random_state=1` y `solver='lbfgs'`. Es una salida de una edición anterior.
- **p. 228 (PDF 24)**: habla de "the three-node deep decision tree", pero el árbol del bagging no tiene poda (`max_depth=None`): con estos datos
  llega a profundidad 7 (comprobado).
- **Versiones de librerías** (comprobado con scikit-learn 1.6.1, NumPy 2.1.3, SciPy 1.15.3 instalados en esta máquina):
  - `BaggingClassifier(base_estimator=...)` (p. 226) y `AdaBoostClassifier(base_estimator=...)` (p. 234) fallan con TypeError: el parámetro se
    renombró a `estimator` y `base_estimator` se eliminó en la 1.4.
  - `class MajorityVoteClassifier(BaseEstimator, ClassifierMixin)` (p. 211) ya no se reconoce como clasificador en 1.6 (`is_classifier` da
    False): `cross_val_score(..., scoring='roc_auc')` devuelve `nan` en todos los folds (p. 216) y el grid search de la p. 222 da `best_score_`
    nan. Invirtiendo el orden a `(ClassifierMixin, BaseEstimator)` se recuperan exactamente los números del libro (0.98 ± 0.05; 0.983 con
    C = 0.001 y profundidad 1). `from sklearn.pipeline import _name_estimators` todavía funciona, pero es una función privada.
  - `AdaBoostClassifier` usa ahora solo el algoritmo SAMME (`algorithm='SAMME.R'` da InvalidParameterError y el parámetro está deprecado).
    Con `estimator=` en vez de `base_estimator=` el AdaBoost de la p. 234 da 0.968/0.917, no el 1.000/0.917 del libro; el stump sí da 0.916/0.875.
  - Bagging (con `estimator=`) reproduce 1.000/0.833 del árbol y 1.000/0.917 del bagging. `sklearn.datasets.load_wine` sin la clase 0 y con
    las columnas 0 y 11 da el mismo subconjunto que el CSV de UCI (URL antigua `archive.ics.uci.edu/ml/machine-learning-databases/...`, p. 225).
  - Las tres líneas base del voto (0.92, 0.87, 0.85) y `ensemble_error(11, 0.25)` = 0.03432750701904297 se reproducen igual.
  - XGBoost no está instalado en esta máquina: el código de la p. 244 no se comprobó. El libro usa la versión 1.5.0; en XGBoost 2.x el parámetro
    `use_label_encoder` ya no tiene efecto (sin verificar aquí).
