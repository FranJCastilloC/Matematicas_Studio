# Mapa de citas: Raschka, Liu y Mirjalili, cap. 9 "Predicting Continuous Target Variables with Regression Analysis"

Archivo: `/Users/franciscocastillo/brain/02-Biblioteca/Machine-Learning/PyTorch-Scikit-Learn/Cap09 - Predicting Continuous Target Variables with Regression Analysis.pdf` (36 páginas PDF).
Correspondencia verificada: página impresa = página PDF + 268, es decir, PDF N = impresa − 268. Comprobado en PDF 2 = p. 270, PDF 20 = p. 288,
PDF 36 = p. 304 (cada página del archivo se leyó con `pdftotext -layout`; las fórmulas de las pp. 271, 279, 292 y 293 se revisaron además como imagen,
porque `pdftotext` rompe los glifos). La PDF 1 no lleva número impreso (abre el capítulo con un "9"); por el desfase le corresponde la 269.
Edición: Machine Learning with PyTorch and Scikit-Learn (Packt, 2022). Dataset: Ames Housing (De Cock 2011), 2930 casas, 5 features + `SalePrice`.

| Tema | PDF | Impresa | Sección | Notas |
|---|---|---|---|---|
| Introducción | 1 | 269 | apertura | regresión = predecir una variable continua; EDA, implementaciones, robustez, evaluación, no linealidad |
| Regresión lineal: objetivo | 1 | 269 | Introducing linear regression | relación entre features y un objetivo continuo, frente a la clasificación |
| Regresión lineal simple | 2 | 270 | Simple linear regression | y = w₁x + b; b = intercepto (bias), w₁ = peso; recta de mejor ajuste; residuos = distancias verticales (offsets); Figure 9.1 |
| Regresión lineal múltiple | 3 | 271 | Multiple linear regression | y = w₁x₁ + ... + wₘxₘ + b = Σᵢ wᵢxᵢ + b = wᵀx + b; Figure 9.2 (plano con dos features); el capítulo se queda casi siempre en el caso univariado |
| Dataset Ames Housing | 4 | 272 | Exploring the Ames Housing dataset | Iowa, 2006-2010; enlaces a jse.amstat.org (informe, documentación, datos) |
| Cargar Ames en un DataFrame | 4-5 | 272-273 | Loading the Ames Housing dataset into a DataFrame | 2930 ejemplos, 80 features; usa Overall Qual, Overall Cond, Gr Liv Area, Central Air, Total Bsmt SF y SalePrice; `pd.read_csv(..., sep='\t', usecols=columns)`; Figure 9.3; `df.shape` = (2930, 6) |
| Limpieza | 5-6 | 273-274 | idem | `df['Central Air'].map({'N': 0, 'Y': 1})`; `isnull().sum()`: 1 faltante en Total Bsmt SF; `dropna(axis=0)` |
| EDA: matriz de dispersión | 6-7 | 274-275 | Visualizing the important characteristics of a dataset | `mlxtend.plotting.scatterplotmatrix(df.values, figsize=(12, 10), names=df.columns, alpha=0.5)`; mlxtend 0.19.0; Figure 9.4; Gr Liv Area vs SalePrice algo lineal |
| SalePrice sesgado y supuesto de normalidad | 8 | 276 | recuadro The normality assumption of linear regression | histograma sesgado por outliers; entrenar no requiere normalidad, solo ciertas pruebas (Montgomery, Peck y Vining) |
| Matriz de correlación | 8 | 276 | Looking at relationships using a correlation matrix | versión reescalada de la covarianza = covarianza de features estandarizadas; r de Pearson en [−1, 1]; r = Σ(x − μₓ)(y − μᵧ)/(√Σ(x − μₓ)² √Σ(y − μᵧ)²) = σₓᵧ/(σₓσᵧ) |
| Covarianza de estandarizadas = correlación | 9 | 277 | recuadro Covariance versus correlation for standardized features | x' = (x − μₓ)/σₓ; covarianza poblacional con 1/n; derivación hasta σ'ₓᵧ = σₓᵧ/(σₓσᵧ) |
| Heatmap de correlación | 9-10 | 277-278 | idem | `np.corrcoef(df.values.T)`; `mlxtend.plotting.heatmap`; Figure 9.5; SalePrice vs Gr Liv Area = 0.71 (la mayor) |
| OLS: idea | 10 | 278 | Implementing an ordinary least squares linear regression model | mínimos cuadrados ordinarios: minimizar la suma de residuos al cuadrado |
| OLS con descenso de gradiente (Adaline) | 10-11 | 278-279 | Solving regression for regression parameters with gradient descent | L(w, b) = (1/2n) Σ (y⁽ⁱ⁾ − ŷ⁽ⁱ⁾)², ŷ = wᵀx + b; Adaline sin umbral; clase `LinearRegressionGD(eta=0.01, n_iter=50, random_state=1)` con `w_ += eta * 2.0 * X.T.dot(errors) / n`, `b_ += eta * 2.0 * errors.mean()`, `loss = (errors**2).mean()` |
| Entrenar LinearRegressionGD | 12 | 280 | idem | recuadro sobre la actualización (cap. 2); `X = df[['Gr Liv Area']]`; estandarizar X e y (`y[:, np.newaxis]` y `flatten()`); `eta=0.1`; gráfico MSE por época |
| Convergencia y recta | 13-14 | 281-282 | idem | Figure 9.6 (converge hacia la época 10); `lin_regplot`; Figure 9.7; tres outliers con área estandarizada > 6 |
| Volver a la escala original | 14-15 | 282-283 | idem | `sc_y.inverse_transform`; casa de 2500 ft² = $292,507.07; con variables estandarizadas el intercepto es 0: slope 0.707, intercept −0.000 |
| LinearRegression de scikit-learn | 15-16 | 283-284 | Estimating the coefficient of a regression model via scikit-learn | usa `scipy.linalg.lstsq` (LAPACK); no hace falta estandarizar; slope 111.666, intercept 13342.979; Figure 9.8 |
| Ecuación normal | 16-17 | 284-285 | recuadro Analytical solutions of linear regression | w = (XᵀX)⁻¹Xᵀy; columna de unos con `np.hstack`; `np.linalg.inv`; mismos 111.666 y 13342.979; caro con datos grandes o si XᵀX es singular; mlxtend y statsmodels |
| RANSAC: algoritmo | 17 | 285 | Fitting a robust regression model using RANSAC | outliers pesan mucho; 5 pasos: subconjunto al azar como inliers, sumar puntos dentro de la tolerancia, reajustar, estimar error, parar por umbral o iteraciones |
| RANSACRegressor | 18 | 286 | idem | `RANSACRegressor(LinearRegression(), max_trials=100, min_samples=0.95, residual_threshold=None, random_state=123)`; umbral por defecto = MAD de y; Toldo y Fusiello 2009 |
| Inliers, outliers y MAD | 18-19 | 286-287 | idem | `inlier_mask_`; Figure 9.9; slope 106.348, intercept 20190.093; MAD = mediana(\|y − mediana(y)\|) = 37000 |
| Umbral mayor | 20 | 288 | idem | Figure 9.10 con `residual_threshold` 65000; no se sabe si mejora la generalización |
| Evaluación: regresión múltiple | 20-21 | 288-289 | Evaluating the performance of linear regression models | las 5 features; `train_test_split(test_size=0.3, random_state=123)` |
| Gráfico de residuos | 21-22 | 289-290 | idem | residuos vs predichos, train y test; código con `y_pred - y`; Figure 9.11; buen modelo = residuos al azar alrededor de 0; patrones = información no capturada; outliers lejos de la línea |
| MSE | 22-23 | 290-291 | idem | MSE = (1/n) Σ (y⁽ⁱ⁾ − ŷ⁽ⁱ⁾)² (sin el 1/2); normaliza por n; `mean_squared_error`: train 1497216245.85, test 1516565821.00 |
| RMSE y MAE | 23 | 291 | idem | RMSE = √MSE; MAE = (1/n) Σ \|y⁽ⁱ⁾ − ŷ⁽ⁱ⁾\|; `mean_absolute_error`: train 25983.03, test 24921.29 (≈ $25,000); MSE y MAE no están acotados y dependen de la escala |
| R² | 23-24 | 291-292 | idem | R² = 1 − SSE/SST; SSE = Σ (y − ŷ)²; SST = Σ (y − μᵧ)²; R² = 1 − MSE/Var(y); en train entre 0 y 1, en test puede ser negativo; `r2_score`: 0.77 train, 0.75 test |
| Regularización: introducción | 24 | 292 | Using regularized methods for regression | ridge, LASSO, elastic net |
| Ridge (L2) | 25 | 293 | idem | L(w)_Ridge = Σ (y⁽ⁱ⁾ − ŷ⁽ⁱ⁾)² + λ‖w‖₂², λ‖w‖₂² = λ Σⱼ wⱼ²; λ mayor = pesos más chicos; b no se regulariza |
| LASSO (L1) | 25 | 293 | idem | L(w)_Lasso = Σ (y − ŷ)² + λ‖w‖₁, λ‖w‖₁ = λ Σⱼ \|wⱼ\|; pesos exactamente 0 (selección de features); a lo sumo n features si m > n; modelo saturado |
| Elastic Net | 25 | 293 | idem | L(w) = Σ (y − ŷ)² + λ₂‖w‖₂² + λ₁‖w‖₁; λ por validación cruzada k-fold |
| Ridge, Lasso y ElasticNet en scikit-learn | 26 | 294 | idem | `Ridge(alpha=1.0)`, `Lasso(alpha=1.0)`, `ElasticNet(alpha=1.0, l1_ratio=0.5)`; alpha "similar" a λ; `l1_ratio=1.0` = LASSO |
| Regresión polinómica: idea | 26 | 294 | Turning a linear regression model into a curve – polynomial regression | y = w₁x + w₂x² + ... + w_d x^d + b; sigue siendo lineal en los pesos |
| PolynomialFeatures | 26-27 | 294-295 | Adding polynomial terms using scikit-learn | datos de juguete de 10 puntos (X de 258 a 586); `PolynomialFeatures(degree=2)`; ajuste lineal vs cuadrático en 4 pasos |
| Lineal vs cuadrático | 28 | 296 | idem | Figure 9.12; MSE de entrenamiento 569.780 vs 61.330; R² 0.832 vs 0.982 |
| Polinomios en Ames | 29-30 | 297-298 | Modeling nonlinear relationships in the Ames Housing dataset | quita casas con Gr Liv Area ≥ 4000; grados 1, 2 y 3; Figure 9.13: casi no cambia, la relación parece lineal |
| Overall Qual | 31 | 299 | idem | Figure 9.14: cuadrático y cúbico ajustan mejor; más grados = más riesgo de sobreajuste, evaluar en test |
| Random forest: idea | 31 | 299 | Dealing with nonlinear relationships using random forests | ensamble de árboles; divide el espacio en regiones |
| Árbol de regresión: impureza MSE | 32 | 300 | Decision tree regression | no requiere transformar ni estandarizar; IG(Dₚ, xᵢ) = I(Dₚ) − (N_left/Nₚ) I(D_left) − (N_right/Nₚ) I(D_right); I(t) = MSE(t) = (1/Nₜ) Σ_{i∈Dₜ} (y⁽ⁱ⁾ − ŷₜ)², ŷₜ = media del nodo; "varianza dentro del nodo", reducción de varianza |
| DecisionTreeRegressor | 32-33 | 300-301 | idem | `DecisionTreeRegressor(max_depth=3)` sobre Gr Liv Area; Figure 9.15 (escalones); no es continuo ni diferenciable; elegir la profundidad |
| Random forest para regresión | 33 | 301 | Random forest regression | menos varianza, menos sensible a outliers, poco ajuste; árboles con criterio MSE y predicción = promedio de los árboles |
| RandomForestRegressor | 34 | 302 | idem | `RandomForestRegressor(n_estimators=1000, criterion='squared_error', random_state=1, n_jobs=-1)`; MAE 8305.18 train / 20821.77 test; R² 0.98 / 0.85 (lineal: 0.75 en test) |
| Residuos del bosque | 34-35 | 302-303 | idem | mismo gráfico de residuos; Figure 9.16; mejora mucho frente al lineal, pero no son del todo aleatorios |
| Qué hacer con residuos con patrón | 36 | 304 | idem | el error debe ser impredecible; transformar variables, ajustar hiperparámetros, cambiar de modelo, quitar outliers, sumar variables |
| Summary | 36 | 304 | Summary | siguiente capítulo: aprendizaje no supervisado y clustering |

Observaciones para citar:
- La pérdida de Adaline/OLS (p. 279) lleva 1/(2n); el MSE de evaluación (p. 290) lleva 1/n; las de ridge, LASSO y elastic net (p. 293) usan la suma
  sin dividir. Son tres escalas distintas del mismo error cuadrático.
- Ridge, LASSO y Elastic Net no tienen ejemplo ejecutado con resultados: solo la creación de los objetos (p. 294).
- El capítulo no habla de regresión lineal simple con fórmulas cerradas de pendiente e intercepto (cov/var); usa descenso de gradiente,
  `LinearRegression` y la ecuación normal.

## Erratas e inconsistencias

- **p. 279 (PDF 11)**: la pérdida se escribe con 1/(2n) y el texto dice que el 1/2 simplifica la derivada, pero el código calcula
  `loss = (errors**2).mean()` (sin 1/2) y actualiza con `eta * 2.0 * ...`, que es el gradiente del MSE con 1/n. El código es coherente consigo mismo;
  la fórmula impresa no coincide con él.
- **p. 286 (PDF 18)**: `line_X = np.arange(3, 10, 1)` dibuja la recta de RANSAC entre 3 y 9 pies cuadrados, cuando Gr Liv Area va de unos
  cientos a más de 5000. Probablemente es un resto de la edición anterior (dataset Housing de Boston, feature RM). Para reproducir la figura hay que usar un rango
del orden de `np.arange(0, 6000, 100)`.
- **p. 297 (PDF 29)**: "removing the three outliers with a living area greater than 4,000 square feet". En el dataset hay cinco casas con
  Gr Liv Area > 4000 (4316, 4476, 4676, 5095 y 5642; comprobado descargando el archivo del libro). Las "tres" de la p. 282 son las que tienen área
  estandarizada > 6, que sí son tres; el filtro `< 4000` quita las cinco.
- **p. 292 (PDF 24)**: "SST is simply the variance of the response". SST es n veces la varianza; la propia derivación de abajo divide SST por n
  para llegar a Var(y).
- **p. 292 (PDF 24)**: el código `print(f'R^2 train: {train_r2:.3f}, {test_r2:.3f}')` imprime `R^2 train: 0.769, 0.752` (comprobado), no la salida
  mostrada `R^2 train: 0.77, test: 0.75`. Los valores redondeados coinciden; el formato no.
- **p. 289 (PDF 21)**: "we simply subtract the true target variables from our predicted responses": el libro grafica ŷ − y, el signo opuesto a la
  definición habitual de residuo (y − ŷ) que usan la p. 270 y las fórmulas del MSE. No cambia la lectura del gráfico, pero sí el signo de cada punto.
- **p. 299 (PDF 31)**: dice que un random forest es "the sum of piecewise linear functions". Un árbol de regresión predice la media de cada hoja,
  así que es constante por tramos (se ve en los escalones de la Figure 9.15, p. 301), y el bosque promedia, no suma.
- **p. 285 (PDF 17)**: "singular vector decomposition" debería ser singular value decomposition (SVD).
- **p. 285 (PDF 17)**: el paso 1 de RANSAC dice "Select a random number of examples"; lo aleatorio es el subconjunto, no la cantidad
  (`min_samples` la fija).
- **p. 278 (PDF 10)**: "exploratory variable" donde debería decir explanatory; al revés en la p. 303 ("exploratory information") y en el resumen de
  la p. 304 ("explanatory data analysis" por exploratory).
- **pp. 280, 300 y 301 (PDF 12, 32, 33)**: el texto dice "Gr Living Area"; la columna se llama `Gr Liv Area`.
- **p. 301 (PDF 33)**: error de maquetación: `plt.ylabel('Sale price in U.S. dollars')>>> plt.show()` en una sola línea.
- **p. 284 (PDF 16)**: `w = np.zeros(X.shape[1])` no sirve para nada: se sobrescribe dos líneas después. Y en la práctica se prefiere
  `np.linalg.lstsq` o `solve` a invertir XᵀX.
- **p. 287 (PDF 19)**: la salida del MAD se muestra como `37000.00`; NumPy imprime `37000.0`. El valor es correcto (comprobado).
- **p. 294 (PDF 26)**: alpha es "similar" a λ, pero no igual: scikit-learn escala la pérdida de `Lasso` y `ElasticNet` por 1/(2n)
  y en `ElasticNet` reparte alpha según `l1_ratio`, así que los valores no se traducen uno a uno con las fórmulas de la p. 293.
- **Versiones de librerías y datos** (comprobado con scikit-learn 1.6.1 y NumPy 2.1.3): la URL `http://jse.amstat.org/v19n3/decock/AmesHousing.txt`
  sigue respondiendo (noviembre de 2026) y reproduce 2930 filas, MAD 37000 y correlación 0.71; `RANSACRegressor(LinearRegression(), ...)` corre
  (el estimador va como primer argumento posicional, que hoy se llama `estimator`); `criterion='squared_error'` (p. 302) es el nombre actual
  (el viejo `'mse'` ya no existe). Las gráficas necesitan `mlxtend` (no está instalado en esta máquina).
