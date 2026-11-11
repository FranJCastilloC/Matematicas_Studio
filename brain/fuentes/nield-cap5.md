# Mapa de citas: Nield, cap. 5 "Linear Regression"

Archivo: `/Users/franciscocastillo/brain/02-Biblioteca/Matematicas/Essential-Math/05 Cap 5 Linear Regression.pdf` (70 páginas PDF, sin números impresos: versión early release, confirmado en el texto extraído). Citar por página del PDF y por "Example 5-N" o "Figure 5-N". Todas las páginas se leyeron con `pdftotext -layout`. Varias páginas son solo figura (2, 6, 13, 22, 30, 37, 43, 46, 52, 54, 59, 63, 65). La pág. 55 (fórmula del intervalo de predicción) sale desordenada en la extracción; la fórmula se reconstruye con el código de esa misma página.

Datos del ejemplo (perros: edad x y visitas al veterinario y), reconstruidos con los residuos de la pág. 11: x = 1..10, y = 5, 10, 10, 15, 14, 15, 19, 18, 25, 23. Recta de mínimos cuadrados: y = 1.93939x + 4.73333.

| Tema | pág. PDF | Notas |
|---|---|---|
| Introducción: qué es una regresión lineal | 1-3 | ajustar una recta a datos observados para predecir; Figure 5-1 (2); más de 200 años, hoy "machine learning"; dos escuelas: train/test frente a intervalos de predicción y significancia (3); recuadro "Wait, regression is machine learning?" (aprendizaje supervisado, no supervisado, por refuerzo) (3) |
| A Basic Linear Regression: perros y visitas | 3-7 | 10 perros inventados, Figure 5-2 (4); recta ajustada, Figure 5-3 (5); predicción para 8.5 años: y = 21.218, Figure 5-4 (5-6); no todo cae en la recta; no extrapolar fuera del rango de x (7); recuadro sesgo de muestreo (7) |
| Basic Linear Regression con Scikit-learn | 7-9 | Example 5-1 `LinearRegression().fit(X, Y)`, `coef_`, `intercept_` y gráfica con matplotlib (8); Figure 5-5 (9) |
| Residuals and Squared Errors | 9-14 | dos preguntas: qué es "mejor ajuste" y cómo llegar (9); residuo = y real − y predicha, Figure 5-6 (9-10); Example 5-2 imprime los 10 residuos con m = 1.93939, b = 4.73333 (10-11); suma de cuadrados (11); recuadro "Why not absolute values?": se cancelan signos y el valor absoluto no se deriva bien (12); Figure 5-7 cuadrados sobre cada residuo (12-14); Example 5-4 suma de cuadrados = 28.096969704500005 (14) |
| Finding the Best Fit Line: cinco técnicas | 14-15 | fuerza bruta no sirve; forma cerrada, inversión de matrices, descomposición, descenso de gradiente y estocástico; hill climbing en el Apéndice A (15); recuadro "entrenar es minimizar una función de pérdida" (15) |
| Closed Form Equation | 15-16 | m = (nΣxy − ΣxΣy)/(nΣx² − (Σx)²), b = Σy/n − mΣx/n (15-16); solo para una variable de entrada; Example 5-5 da 1.9393939393939394, 4.7333333333333325 (16); recuadro complejidad computacional (16) |
| Inverse Matrix Techniques | 17-18 | notación β₁ (pendiente) y β₀ (intercepto) (17); b = (XᵀX)⁻¹Xᵀy (17); Example 5-6 con columna de unos para el intercepto, imprime [1.93939394 4.73333333] (17-18) |
| Descomposición QR | 18-19 | X = QR, b = R⁻¹Qᵀy (18); Example 5-7 con `numpy.linalg.qr` (18-19); estabilidad numérica: por eso la usan las librerías (19); recuadro "Overwhelmed?" (19) |
| Gradient Descent: experimento mental | 19-20 | definición (19); montaña de noche con linterna; la derivada parcial es la linterna; tasa de aprendizaje como fracción de la pendiente; hormiga, humano y gigante (20) |
| Let's Walk Before We Run: f(x) = (x − 3)² + 4 | 20-23 | Figure 5-8 (21-22); Example 5-8 con dx_f = 2(x − 3), L = 0.001, 100 000 iteraciones, imprime 2.999999999999889 4.0 (23) |
| Gradient Descent and Linear Regression | 23-25 | las "variables" ahora son m y b; derivadas parciales de la suma de cuadrados (24); Example 5-9 D_m = Σ2x((mx + b) − y), D_b = Σ2((mx + b) − y), imprime y = 1.9393939393939548x + 4.733333333333227 (24-25); minimizar la suma de cuadrados no garantiza un buen modelo (25) |
| Gradient Descent con SymPy | 25-29 | Example 5-10 `Sum`, `diff`, x e y como `Function` (25-26); notación e(x) = Σ((mxᵢ + b) − yᵢ)² y sus parciales (26); Example 5-11 con `subs`, `replace` y `lambdify`, imprime 1.939393939393954x + 4.733333333333231 (26-27); Example 5-12 `plot3d` de la pérdida (28); Figure 5-9 paisaje de pérdida (29) |
| Overfitting and Variance | 29-32 | unir los puntos da pérdida 0, Figure 5-10 (29-30); sobreajuste, alta varianza (31); recuadro "Overfitting is memorization" (31); sesgo del modelo: la recta es un modelo muy sesgado, subajuste (31); recuadro lasso y ridge (32); hay que vigilar sobre y subajuste (32) |
| Stochastic Gradient Descent | 32-34 | batch, estocástico (una muestra) y mini-batch (32); ventajas: menos cómputo y menos sobreajuste (32); Example 5-13 con `np.random.choice`, L = .0001, 1 000 000 épocas (33-34); resultado 1.9382830354181135x + 4.753408787648379, varía en cada corrida (34); recuadro "Is randomness bad?" (34) |
| The Correlation Coefficient (Pearson) | 34-39 | datos muy dispersos, Figure 5-11 (34-35); r entre −1 y 1, cerca de 0 es sin correlación; el ejemplo disperso tiene r = 0.1201 (36); Figure 5-12 cuatro diagramas (37-38); matriz de correlación con `df.corr(method='pearson')`, Example 5-14 r = 0.957586 (38); recuadro con la fórmula de r y Example 5-15 desde cero, 0.9575860952087218 (39) |
| Statistical Significance | 40-47 | recuadro statsmodels (40); H₀: ρ = 0, H₁: ρ ≠ 0 (40-41); Figure 5-13 (41); distribución t, Figure 5-14 (42-43); valor crítico ±2.262, Example 5-16 (44); t = r/√((1 − r²)/(n − 2)) = 9.39956 (44); Example 5-17 prueba completa y p-valor .000005976 (44-45); Figure 5-15 otros conjuntos: 3 puntos con p = .34913, más datos bajan el p-valor (46-47) |
| Coefficient of Determination (r²) | 47-49 | r² = cuadrado de r; Example 5-18 `df.corr() ** 2` da 0.916971 (47-48); "91.6971% de la variación se explica" (48); recuadro "Correlation is not causation!": agua y factura, vacas y pasto (49) |
| Standard Error of the Estimate | 49-50 | SSE = Σ(y − ŷ)² (49); Sₑ = √(Σ(y − ŷ)²/(n − 2)), Example 5-19 con m = 1.939, b = 4.733 da 1.87406793500129 (50); por qué n − 2; es la desviación estándar de la regresión (50) |
| Prediction Intervals | 50-56 | la recta es una media que se desplaza con una normal alrededor, Figure 5-16 (51-52); intervalo de predicción para 8.5 años: entre 16.462 y 25.966 visitas, Figure 5-17 (53-54); E = t₀.₀₂₅ · Sₑ · √(1 + 1/n + n(x₀ − x̄)²/(nΣx² − (Σx)²)) y Example 5-20 (55-56); resultado 16.462516875955465 a 25.966483124044537, predicción 21.2145 (56); recuadro intervalos de confianza para m y b, fuera del alcance (56) |
| Train/Test Splits | 56-62 | escalpelo (estadística) frente a motosierra (ML) (57); recuadro por qué Scikit-learn no da p-valores ni intervalos, cita a Gael Varoquaux (57); 2/3 para entrenar y 1/3 para probar (57-58); recuadro dataset pequeño: 9/10 o leave-one-out (58); Figure 5-18 (59-60); Example 5-21 `train_test_split(test_size=1/3)` y `model.score` como r² (60-61); recuadro r² de prueba: r² = 1 − Σ(yᵢ − ŷᵢ)²/Σ(yᵢ − ȳ)² (62); Figure 5-19 (63-64) |
| Cross-validation (k-fold) | 64-66 | turnar cada tercio como prueba, "gold standard" (64); Figure 5-20 tres pliegues (65-66); Example 5-22 `KFold(n_splits=3)` y `cross_val_score` (66) |
| Recuadro "Do training/test splits have to be thirds?" | 67 | k = 3, 5 o 10; LOOCV para datos pequeños |
| Random-fold validation | 67-68 | repetir particiones al azar, Example 5-23 con `ShuffleSplit(n_splits=10, test_size=.33)` (67-68); costo computacional (67); recuadro "Train/test splits are not guarantees": conjunto de validación, sesgo del dataset, Andrew Ng y radiólogos (68) |
| Multiple Linear Regression | 68-69 | Example 5-24 con dos entradas, z = b + m₁x + m₂y (69); más variables, menos explicabilidad; revisar la matriz de correlación por pares (69) |
| Conclusiones | 69-70 | escalpelo y motosierra; statsmodels; anuncia r² y significancia en el cap. 6 (70) |
| Ejercicios | 70 | dataset https://bit.ly/3C8JzrM: ajustar m y b, correlación y significancia al 95%, intervalo de predicción en x = 50, train/test y validación cruzada; respuestas en el Apéndice B |

## Erratas e inconsistencias

- Pág. 42-45: usa 9 grados de libertad (n − 1) para la prueba de la correlación, mientras la fórmula del estadístico usa n − 2. Lo correcto es n − 2 = 8: valor crítico ±2.306 (no ±2.262) y p-valor 0.0000135 (no .000005976). La conclusión no cambia. Recalculado con python3 (scipy.stats.t).
- Pág. 39: la fórmula del recuadro escribe en el denominador √(nΣx² − (Σx²)) y √(nΣy² − (Σy²)); debe ser (Σx)² y (Σy)². El código del Example 5-15 sí lo hace bien. Con la fórmula impresa daría r = 0.174 en vez de 0.9576.
- Pág. 66: dice que el puntaje de la validación cruzada es la MSE e imprime "MSE: mean=...". `cross_val_score` con `LinearRegression` usa por defecto r², no MSE.
- Pág. 10: el texto dice que la recta es y = 1.93939x + 7.73333; el código y todo lo demás usan b = 4.73333.
- Pág. 8: el comentario del Example 5-1 dice m = 1.7867224, b = −16.51923513, que no coincide con la recta del mismo dataset (1.93939, 4.73333) que imprime el Example 5-6 con la misma URL. Además la sección se titula "with SciPy" y la Figure 5-5 dice "SciPy", pero el código usa Scikit-learn; el texto dice "plotly" y el código usa matplotlib.
- Pág. 36: "The highly scattered data in Figure 5-16 has a correlation coefficient of 0.1201"; la figura de los datos dispersos es la 5-11.
- Pág. 51: "when we talked statistics in Chapter 2 about variance and standard deviation"; eso está en el cap. 3.
- Pág. 20 y 24: escribe "m y b, o β₀ y β₁", en orden inverso: m es β₁ y b es β₀ (como define la pág. 17).
- Pág. 5 y 56: la predicción para 8.5 años aparece como 21.218 (con 1.93939 y 4.73333) y como 21.2145 (con 1.939 y 4.733 redondeados). Ambos están bien para sus coeficientes.
- Pág. 56: "there's a 95% probability an 8.5 year old dog will visit the vet between 16.46 and 25.96 times"; es un intervalo de predicción al 95% de confianza, no una probabilidad sobre los parámetros. El intervalo sí se verificó: 16.4625 a 25.9665.
- Pág. 50: el radical de Sₑ no sale en el texto extraído (probablemente es parte del dibujo); el código sí usa `sqrt`. Explica n − 2 porque "la regresión tiene dos variables"; en rigor son dos parámetros estimados (m y b).
- Pág. 62: dice que r² cerca de 1 muestra que la correlación es fuerte "even with the training data"; se refiere a los datos de prueba.
- Pág. 11: "-1.3696699999999993f" (una f suelta en la salida) y el comentario "# calculate sum of squares" en un código que solo imprime residuos.
- Pág. 7: "no predecir donde x < 0 and x > 10"; debería ser "o", y los datos van de 1 a 10.
- Pág. 70: referencia rota "<<ch06>". Pág. 67: el Example 5-23 usa otra URL de datos (38XwbeB) que el 5-22 (3cIH97A).
- Matiz (no errata): pág. 32 presenta al descenso estocástico como forma de reducir el sobreajuste porque "minimizar la pérdida es lo que causa sobreajuste"; es una simplificación.
- Verificados sin error: los 10 residuos, la suma de cuadrados 28.0969697, m y b de la forma cerrada, r = 0.9575861, r² = 0.9169711, t = 9.39958, Sₑ = 1.874068, el intervalo de predicción con t de 8 grados de libertad.

## No aparece

Derivación de las ecuaciones normales (se omite "sin entrar en pruebas"), supuestos de la regresión enumerados (homocedasticidad, independencia de errores) más allá de la normal alrededor de la recta, gráfico de residuos, errores estándar e intervalos de confianza de m y b (solo se mencionan), regresión polinómica, regularización con fórmula (lasso y ridge solo en un recuadro), MSE o RMSE como fórmula propia, R² ajustado, multicolinealidad más allá de la cita, prueba F, variables categóricas o dummy, ejemplo de regresión múltiple con datos y resultados impresos.
