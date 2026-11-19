# Mapa de citas: James, Witten, Hastie y Tibshirani, ISLR2 "An Introduction to Statistical Learning with Applications in R" (2.ª edición)

Archivo: `/Users/franciscocastillo/Downloads/ISLRv2_corrected_June_2023.pdf` (615 páginas PDF; impresión corregida del 21 de junio de 2023).
Correspondencia verificada: **desde la PDF 12 (capítulo 1, impresa 1) hasta la PDF 615 (impresa 604), página PDF N = página impresa N + 11**.
No cambia en ningún punto del libro: se comprobó el número impreso del encabezado de las 604 páginas numeradas (todas coinciden con N − 11),
y además el índice impreso lo confirma (2.3 Lab en la impresa 42 = PDF 53; 5.3 Lab en la 212 = PDF 223; 6.5 Lab en la 267 = PDF 278; 12.5 Lab en la 530 = PDF 541).
La parte inicial (portada, prólogo, índice general, PDF 1-11) usa numeración romana y no sigue esta regla (PDF 1 = portada, PDF 11 = xv). No se cita; todo lo de abajo cae en la parte arábiga.
Edición: ISLR2 (Springer, 2.ª ed.; el PDF dice "Corrected June 2023"). Todo el código es R base más los paquetes que se listan en cada laboratorio. Los datos vienen en el paquete `ISLR2` (Tabla 1.1, PDF 25 = p. 14), salvo `USArrests`, que es de R base.
Cómo se lee la sección de laboratorios: la columna "Paquetes y funciones R" lista los paquetes que el libro carga con `library(...)` en esa subsección y las funciones nuevas que aparecen; `ISLR2` se anota solo cuando es lo único que se carga.
Nota de extracción: `pdftotext` convierte `~` en `∼` y mete espacios raros en el código (`Smarket .2005`, `set.seed (1)`). Son artefactos del texto, no del libro.

## Parte B. Laboratorio 2.3 "Introduction to R" (PDF 53-63, impresas 42-52)

Aquí no se carga ningún paquete. Auto.data y Auto.csv se descargan del sitio del libro (el lab los lee con `read.table`/`read.csv`; el mismo conjunto `Auto` también viene en `ISLR2`).
En todo el laboratorio 2.3 no aparecen `if`, `for`, `apply`/`lapply`/`sapply` ni funciones definidas con `function(...) {}`; solo una función anónima dentro de `outer()`. Los primeros bucles `for` y `function` de verdad están en 3.6.7 y 5.3.2.

| Tema | PDF | Impresa | Sección | Notas |
|---|---|---|---|---|
| Instalar R y RStudio | 53-54 | 42-43 | 2.3 apertura | enlaces a CRAN y RStudio; existe versión en la nube |
| Funciones, `c()`, asignación `<-` y `=` | 54 | 43 | 2.3.1 Basic Commands | `x <- c(1,3,2,5)`; `?funcname` abre la ayuda; `length()`; suma de vectores elemento a elemento (misma longitud) |
| `ls()`, `rm()`, `rm(list = ls())` | 54-55 | 43-44 | 2.3.1 | listar y borrar objetos del espacio de trabajo |
| `matrix()`, `byrow`, `sqrt()`, `x^2` | 55 | 44 | 2.3.1 | `matrix(data, nrow, ncol)`; por defecto rellena por columnas; `byrow = TRUE` por filas; las operaciones son elemento a elemento |
| `rnorm()`, `cor()`, `set.seed()` | 56 | 45 | 2.3.1 | `rnorm(n, mean, sd)`; `set.seed(1303)` para repetir resultados; se usa en todos los labs |
| `mean()`, `var()`, `sd()` | 56 | 45 | 2.3.1 | `sd(y)` es `sqrt(var(y))` |
| `plot()` básico y etiquetas | 56-57 | 45-46 | 2.3.2 Graphics | `plot(x, y)`; argumentos `xlab`, `ylab`, `main`, `col` |
| Guardar gráficos: `pdf()`, `jpeg()`, `dev.off()` | 57 | 46 | 2.3.2 | `dev.off()` cierra el archivo |
| `seq()`, `a:b`, `seq(-pi, pi, length = 50)` | 57 | 46 | 2.3.2 | `seq(0, 1, length = 10)` da 10 puntos equiespaciados |
| `outer()`, `contour()` | 57-58 | 46-47 | 2.3.2 | `f <- outer(x, y, function(x, y) cos(y)/(1 + x^2))`; contorno como mapa topográfico; `nlevels`, `add = T` |
| `image()` (mapa de calor), `persp()` | 58 | 47 | 2.3.2 | `theta` y `phi` giran la vista 3D |
| Indexar matrices `A[i, j]`, vectores de índices, `A[1:2, ]`, `A[, 1:2]` | 58-59 | 47-48 | 2.3.3 Indexing Data | primer índice fila, segundo columna; índice vacío = todo |
| Índices negativos y `dim()` | 59 | 48 | 2.3.3 | `A[-c(1,3), ]` quita filas; `dim(A)` da filas y columnas |
| Cargar datos: `read.table()`, `write.table()` | 59-60 | 48-49 | 2.3.4 Loading Data | `Auto.data`; `header = T`, `na.strings = "?"`, `stringsAsFactors = T`; `View()` y `head()` |
| `read.csv()`, `dim()`, `na.omit()`, `names()` | 60-61 | 49-50 | 2.3.4 | 397 filas, 5 con datos faltantes; tras `na.omit` quedan 392 |
| `$`, `attach()`, `as.factor()` | 61 | 50 | 2.3.5 Additional Graphical and Numerical Summaries | `plot(Auto$cylinders, Auto$mpg)`; sin `attach` el nombre suelto da error; un factor en x produce boxplots |
| Boxplots con `plot()` y sus opciones | 62 | 51 | 2.3.5 | `varwidth`, `horizontal`, `col` |
| `hist()`, `pairs()`, `identify()` | 62 | 51 | 2.3.5 | `breaks`; matriz de dispersión de todo `Auto` o de un subconjunto con fórmula `~ mpg + ...`; `identify` es interactivo |
| `summary()` de una tabla y de una variable | 62-63 | 51-52 | 2.3.5 | los cualitativos salen como conteos |
| `q()`, `savehistory()`, `loadhistory()` | 63 | 52 | 2.3.5 | cerrar R y guardar el historial |
| Ejercicio aplicado con College | 65 | 54 | 2.4 Exercises, Applied 8 | `College.csv` (777 universidades); es ejercicio, no lab |

## Parte A. Laboratorios por capítulo

Cada fila es una subsección del laboratorio. "Datos" es el conjunto que se usa en esa subsección.

### 3.6 Lab: Linear Regression (PDF 121-132, impresas 110-121)

| Tema | PDF | Impresa | Sección | Datos | Paquetes y funciones R | Notas |
|---|---|---|---|---|---|---|
| Cargar paquetes | 121-122 | 110-111 | 3.6.1 Libraries | Boston | `library(MASS)`, `library(ISLR2)`; `library()` | explica que `library()` se llama una vez por sesión; Boston: 506 barrios, `medv` es la respuesta |
| Regresión lineal simple | 122-125 | 111-114 | 3.6.2 Simple Linear Regression | Boston (`medv ~ lstat`) | `head`, `lm`, `attach`, `summary`, `names`, `coef`, `confint`, `predict(..., interval = "confidence" / "prediction")`, `plot`, `abline`, `par(mfrow = c(2,2))`, `residuals`, `rstudent`, `hatvalues`, `which.max` | gráficos de diagnóstico de `plot(lm.fit)`; apalancamiento con `hatvalues` |
| Regresión lineal múltiple | 125-127 | 114-116 | 3.6.3 Multiple Linear Regression | Boston | `lm(medv ~ lstat + age)`, `lm(medv ~ ., data = Boston)`, `library(car)`, `vif`, `update` | `~ . - age` quita una variable; VIF para colinealidad |
| Términos de interacción | 127-128 | 116-117 | 3.6.4 Interaction Terms | Boston | `lstat * age` | `a * b` equivale a `a + b + a:b` |
| Transformaciones no lineales | 128-130 | 117-119 | 3.6.5 Non-linear Transformations of the Predictors | Boston | `I(lstat^2)`, `anova`, `poly(lstat, 5)`, `log(rm)` | `anova(lm.fit, lm.fit2)` compara modelos anidados |
| Predictores cualitativos | 130-131 | 119-120 | 3.6.6 Qualitative Predictors | Carseats | `lm(Sales ~ . + Income:Advertising + Price:Age)`, `contrasts(ShelveLoc)` | R crea las variables ficticias solo; `contrasts` muestra la codificación |
| Escribir funciones | 131-132 | 120-121 | 3.6.7 Writing Functions | (ninguno) | `function()`, `LoadLibraries` | primera función propia del libro; ejemplo de función que carga dos paquetes |

### 4.7 Lab: Classification Methods (PDF 182-199, impresas 171-188)

| Tema | PDF | Impresa | Sección | Datos | Paquetes y funciones R | Notas |
|---|---|---|---|---|---|---|
| Datos del mercado | 182-183 | 171-172 | 4.7.1 The Stock Market Data | Smarket (1 250 días) | `library(ISLR2)`, `names`, `dim`, `summary`, `pairs`, `cor`, `cor(Smarket[, -9])`, `plot(Volume)` | hay que quitar la columna cualitativa `Direction` para correlacionar |
| Regresión logística | 183-188 | 172-177 | 4.7.2 Logistic Regression | Smarket | `glm(Direction ~ ..., family = binomial)`, `summary`, `coef`, `predict(type = "response")`, `contrasts`, `rep`, `table`, `mean` | matriz de confusión con `table(glm.pred, Direction)`; separación entrenamiento/prueba con `Year < 2005` (252 días de prueba, imp 175-176); segundo modelo con solo `Lag1 + Lag2` (imp 176-177) |
| Análisis discriminante lineal | 188-190 | 177-179 | 4.7.3 Linear Discriminant Analysis | Smarket | `library(MASS)`, `lda`, `predict` (`$class`, `$posterior`), `plot(lda.fit)` | la columna 1 de `posterior` es la probabilidad de la clase "Down" (orden alfabético); umbral distinto de 0.5 |
| Análisis discriminante cuadrático | 190-191 | 179-180 | 4.7.4 Quadratic Discriminant Analysis | Smarket | `qda`, `predict(...)$class` | misma interfaz que `lda` |
| Naive Bayes | 191-192 | 180-181 | 4.7.5 Naive Bayes | Smarket | `library(e1071)`, `naiveBayes`, `predict(type = "raw")` | `nb.fit` imprime media y desviación por clase |
| K vecinos más cercanos (Smarket) | 192-193 | 181-182 | 4.7.6 K-Nearest Neighbors | Smarket | `library(class)`, `knn(train.X, test.X, train.Direction, k)`, `cbind`, `set.seed` | `set.seed(1)` porque los empates se rompen al azar; k = 1 y k = 3 |
| KNN con estandarización (Caravan) | 193-195 | 182-184 | 4.7.6 | Caravan (5 822 personas) | `scale`, `knn`, `table`, `summary(Purchase)` | estandarizar para que la escala no domine; k = 1, 3, 5; tasa de acierto entre quienes compran |
| Comparar con logística (Caravan) | 196 | 185 | 4.7.6 | Caravan | `glm(Purchase ~ ., family = binomial)`, umbral 0.5 y 0.25 | bajar el umbral sube el acierto entre los que sí compran |
| Regresión de Poisson | 196-199 | 185-188 | 4.7.7 Poisson Regression | Bikeshare | `attach`, `lm`, `contrasts(...) = contr.sum`, `all.equal`, `glm(family = poisson)`, `predict(type = "response")` | codificación `contr.sum`; compara lineal y Poisson |

### 5.3 Lab: Cross-Validation and the Bootstrap (PDF 223-230, impresas 212-219)

| Tema | PDF | Impresa | Sección | Datos | Paquetes y funciones R | Notas |
|---|---|---|---|---|---|---|
| Conjunto de validación | 224-225 | 213-214 | 5.3.1 The Validation Set Approach | Auto (392 filas) | `library(ISLR2)`, `set.seed`, `sample(392, 196)`, `lm(..., subset = train)`, `poly`, `mean((mpg - predict(...))[-train]^2)` | ECM de validación para grado 1, 2, 3; con otra semilla (`set.seed(2)`) cambia el resultado |
| Validación cruzada dejando uno fuera | 225-226 | 214-215 | 5.3.2 Leave-One-Out Cross-Validation | Auto | `glm` sin `family` (= `lm`), `library(boot)`, `cv.glm`, `$delta`, `for` | primer bucle `for` de los labs: grados 1 a 10; `cv.glm` no usa el atajo de la ecuación (5.2) |
| Validación cruzada de k bloques | 226 | 215 | 5.3.3 k-Fold Cross-Validation | Auto | `cv.glm(..., K = 10)`, `set.seed(17)` | k = 10; mucho más rápido que LOOCV |
| Bootstrap: estadístico alfa | 227-228 | 216-217 | 5.3.4 The Bootstrap | Portfolio | `alpha.fn <- function(data, index)`, `sample(100, 100, replace = T)`, `boot(Portfolio, alpha.fn, R = 1000)` | `replace = T` es el remuestreo; `boot` repite 1 000 veces y da error estándar |
| Bootstrap: coeficientes de regresión | 228-230 | 217-219 | 5.3.4 | Auto | `boot.fn`, `boot(Auto, boot.fn, 1000)`, `summary(lm(...))$coef` | compara el error estándar bootstrap con el de la fórmula; con el modelo cuadrático coinciden mejor |

### 6.5 Lab: Linear Models and Regularization Methods (PDF 278-293, impresas 267-282)

| Tema | PDF | Impresa | Sección | Datos | Paquetes y funciones R | Notas |
|---|---|---|---|---|---|---|
| Preparar Hitters | 279 | 268 | 6.5.1 Subset Selection Methods | Hitters | `library(ISLR2)`, `names`, `dim`, `is.na`, `sum`, `na.omit` | se descartan los jugadores con `Salary` faltante |
| Mejor subconjunto | 279-282 | 268-271 | 6.5.1 Best Subset Selection | Hitters | `library(leaps)`, `regsubsets`, `summary` (`$rsq`, `$rss`, `$adjr2`, `$cp`, `$bic`), `which.max`, `which.min`, `plot(regfit.full, scale = "bic")`, `coef` | `nvmax = 19` para ver todos los tamaños; el BIC elige 6 variables |
| Selección hacia adelante y hacia atrás | 282 | 271 | 6.5.1 Forward and Backward Stepwise Selection | Hitters | `regsubsets(..., nvmax = 19, method = "forward" / "backward")` | los modelos de 7 variables difieren entre métodos |
| Elegir con conjunto de validación | 283-284 | 272-273 | 6.5.1 Choosing Among Models | Hitters | `sample(c(TRUE, FALSE), ...)`, `model.matrix`, `for`, `predict.regsubsets <- function(object, newdata, id, ...)` | `regsubsets` no trae `predict`; el libro la escribe a mano |
| Elegir con validación cruzada de 10 bloques | 284-285 | 273-274 | 6.5.1 | Hitters | `folds <- sample(rep(1:k, length = n))`, `matrix`, `apply(cv.errors, 2, mean)` | bucle sobre los bloques; sale el modelo de 10 variables |
| Ridge | 286-289 | 275-278 | 6.5.2 Ridge Regression and the Lasso | Hitters | `library(glmnet)`, `model.matrix(...)[, -1]`, `glmnet(x, y, alpha = 0, lambda = grid)`, `grid <- 10^seq(10, -2, length = 100)`, `coef`, `predict(s = ...)`, `cv.glmnet`, `$lambda.min` | `alpha = 0` es ridge; `glmnet` estandariza por sí mismo; `lambda` enorme da el modelo nulo, `s = 0` casi mínimos cuadrados |
| Lasso | 289-290 | 278-279 | 6.5.2 | Hitters | `glmnet(..., alpha = 1)`, `plot`, `cv.glmnet(alpha = 1)`, `$lambda.min` | varios coeficientes quedan en exactamente 0 |
| Regresión por componentes principales | 290-292 | 279-281 | 6.5.3 PCR and PLS Regression | Hitters | `library(pls)`, `pcr(Salary ~ ., scale = TRUE, validation = "CV")`, `summary`, `validationplot(val.type = "MSEP")`, `predict(..., ncomp = 5)` | `scale = TRUE` estandariza; elegir el número de componentes con el ECM de validación cruzada |
| Mínimos cuadrados parciales | 292-293 | 281-282 | 6.5.3 | Hitters | `plsr`, `validationplot`, `predict(..., ncomp = 1)` | mismo patrón que `pcr` |

### 7.8 Lab: Non-linear Modeling (PDF 322-332, impresas 311-321)

| Tema | PDF | Impresa | Sección | Datos | Paquetes y funciones R | Notas |
|---|---|---|---|---|---|---|
| Polinomios y funciones escalón | 323-328 | 312-317 | 7.8.1 Polynomial Regression and Step Functions | Wage | `library(ISLR2)`, `attach`, `poly(age, 4)`, `poly(..., raw = T)`, `I(age^2)`, `anova(fit.1, ..., fit.5)`, `predict(..., se = T)`, `glm(I(wage > 250) ~ ..., family = binomial)`, `cut(age, 4)`, `matlines` | `poly` usa polinomios ortogonales; comparar grados con `anova` (el valor t al cuadrado es el F); logística para `wage > 250` |
| Splines | 328-329 | 317-318 | 7.8.2 Splines | Wage | `library(splines)`, `bs(age, knots = ...)`, `ns(age, df = 4)`, `smooth.spline(age, wage, df = 16)`, `smooth.spline(..., cv = TRUE)`, `loess(span = ...)` | splines de regresión (`bs`, `ns`), de suavizado y regresión local (`loess`) |
| Modelos aditivos generalizados | 329-332 | 318-321 | 7.8.3 GAMs | Wage | `lm` con `ns`, `library(gam)`, `gam`, `s(year, 4)`, `lo(year, age, span = 0.5)`, `plot.Gam`, `anova(..., test = "F")`, `library(akima)`, `gam(family = binomial)` | `s()` suavizado, `lo()` regresión local; `akima` hace el gráfico de interacción |

### 8.3 Lab: Decision Trees (PDF 364-372, impresas 353-361)

| Tema | PDF | Impresa | Sección | Datos | Paquetes y funciones R | Notas |
|---|---|---|---|---|---|---|
| Árbol de clasificación | 364-367 | 353-356 | 8.3.1 Fitting Classification Trees | Carseats (400 tiendas) | `library(tree)`, `library(ISLR2)`, `ifelse`, `factor`, `tree(High ~ . - Sales)`, `summary`, `plot`, `text(pretty = 0)`, `predict(type = "class")`, `table`, `cv.tree(FUN = prune.misclass)`, `prune.misclass(best = 9)` | `High` = ventas > 8; 200 de entrenamiento y 200 de prueba; el árbol podado con 9 hojas acierta 77.5 % |
| Árbol de regresión | 367-368 | 356-357 | 8.3.2 Fitting Regression Trees | Boston | `tree(medv ~ ., subset = train)`, `cv.tree`, `prune.tree(best = 5)`, `predict` | mitad de entrenamiento, mitad de prueba |
| Bagging y bosques aleatorios | 368-370 | 357-359 | 8.3.3 Bagging and Random Forests | Boston | `library(randomForest)`, `randomForest(..., mtry = 12, importance = TRUE)`, `mtry = 6`, `ntree = 25`, `importance`, `varImpPlot` | `mtry = 12` (todas las variables) = bagging; `mtry = 6` = bosque aleatorio |
| Boosting | 370-371 | 359-360 | 8.3.4 Boosting | Boston | `library(gbm)`, `gbm(distribution = "gaussian", n.trees = 5000, interaction.depth = 4, shrinkage = 0.2)`, `summary`, `plot(boost.boston, i = "rm")` | gráficos de dependencia parcial para `rm` y `lstat`; `shrinkage` por defecto 0.001 |
| BART | 371-372 | 360-361 | 8.3.5 Bayesian Additive Regression Trees | Boston | `library(BART)`, `gbart`, `$yhat.test.mean`, `$varcount.mean` | cuenta cuántas veces se usa cada variable |

### 9.6 Lab: Support Vector Machines (PDF 399-408, impresas 388-397)

Todo el lab usa `library(e1071)` y, solo en 9.6.3, `library(ROCR)`.

| Tema | PDF | Impresa | Sección | Datos | Paquetes y funciones R | Notas |
|---|---|---|---|---|---|---|
| Clasificador de vectores soporte | 400-403 | 389-392 | 9.6.1 Support Vector Classifier | simulados (20 puntos en 2D) | `library(e1071)`, `svm(y ~ ., kernel = "linear", cost = 10, scale = FALSE)`, `plot`, `$index`, `summary`, `tune(svm, ranges = list(cost = ...))`, `$best.model`, `predict`, `table` | `y` debe ser factor; `cost` chico = margen ancho y muchos vectores soporte; validación cruzada de 10 bloques dentro de `tune` |
| SVM con núcleo radial | 403-405 | 392-394 | 9.6.2 Support Vector Machine | simulados (200 puntos) | `svm(kernel = "radial", gamma = 1, cost = 1)`, `cost = 1e5`, `tune(ranges = list(cost, gamma))` | sin parámetro grande el borde es suave; con `cost` enorme sobreajusta |
| Curvas ROC | 405-407 | 394-396 | 9.6.3 ROC Curves | simulados | `library(ROCR)`, `prediction`, `performance`, `rocplot <- function(pred, truth, ...)`, `decision.values = TRUE`, `attributes()` | comparar `gamma` pequeño y grande en entrenamiento y prueba |
| SVM con varias clases | 407 | 396 | 9.6.4 SVM with Multiple Classes | simulados (3 clases) | `svm(kernel = "radial")` | `svm` usa uno contra uno cuando hay más de dos clases |
| Datos de expresión génica | 407-408 | 396-397 | 9.6.5 Application to Gene Expression Data | Khan | `library(ISLR2)`, `names(Khan)`, `svm(kernel = "linear")`, `table(out$fitted, dat$y)` | muchas variables y pocas observaciones; el núcleo lineal separa el entrenamiento sin error |

### 10.9 Lab: Deep Learning (PDF 454-469, impresas 443-458)

Este lab depende de `keras` (que usa `tensorflow` con Python por debajo); el libro avisa en la p. 443 que existe una versión con `torch` en el sitio web.
Usa el operador pipe `%>%` de `keras` desde la p. 444; es el único lugar del libro con pipes.

| Tema | PDF | Impresa | Sección | Datos | Paquetes y funciones R | Notas |
|---|---|---|---|---|---|---|
| Red de una capa sobre Hitters | 454-457 | 443-446 | 10.9.1 A Single Layer Network on the Hitters Data | Hitters | `library(ISLR2)`, `lm`, `library(glmnet)`, `cv.glmnet`, `library(keras)`, `keras_model_sequential`, `layer_dense`, `layer_dropout`, `compile`, `fit`, `scale`, `%>%` | compara regresión lineal, lasso y red por error absoluto medio |
| Red multicapa en MNIST | 457-460 | 446-449 | 10.9.2 A Multilayer Network on the MNIST Digit Data | MNIST | `dataset_mnist`, `array_reshape`, `to_categorical`, `summary`, `compile(loss = "categorical_crossentropy")`, `fit`, `k_argmax` | datos de `keras`, no de `ISLR2`; también ajusta una regresión logística multinomial como referencia |
| Redes convolucionales | 460-462 | 449-451 | 10.9.3 Convolutional Neural Networks | CIFAR100 | `dataset_cifar100`, `library(jpeg)`, `layer_conv_2d`, `layer_max_pooling_2d` | |
| Modelos CNN preentrenados | 462-463 | 451-452 | 10.9.4 Using Pretrained CNN Models | imágenes propias del libro | `application_resnet50`, `imagenet_preprocess_input`, `list.files` | |
| Clasificación de reseñas IMDb | 463-465 | 452-454 | 10.9.5 IMDb Document Classification | IMDb | `dataset_imdb`, `library(Matrix)`, `glmnet`, `layer_dense` | bolsa de palabras con lasso frente a red |
| Redes recurrentes | 465-469 | 454-458 | 10.9.6 Recurrent Neural Networks | IMDb, NYSE | `pad_sequences`, `layer_embedding`, `layer_lstm`, `library(ISLR2)` (NYSE), `lm` autorregresivo, `aperm` | series temporales con retardos |

### 11.8 Lab: Survival Analysis (una fila)

| Tema | PDF | Impresa | Sección | Datos | Paquetes y funciones R | Notas |
|---|---|---|---|---|---|---|
| Análisis de supervivencia completo | 494-500 | 483-489 | 11.8 (11.8.1 a 11.8.3) | BrainCancer, Publication, datos simulados de un call center | `library(survival)`, `Surv`, `survfit`, `survdiff`, `coxph`, `library(coxed)`, `sim.survdata` | Kaplan-Meier, prueba log-rank y modelo de Cox; no es parte de la ruta de la biblioteca por ahora |

### 12.5 Lab: Unsupervised Learning (PDF 541-556, impresas 530-545)

Solo R base más `ISLR2` para los datos; no hay paquetes extra.

| Tema | PDF | Impresa | Sección | Datos | Paquetes y funciones R | Notas |
|---|---|---|---|---|---|---|
| Análisis de componentes principales | 541-544 | 530-533 | 12.5.1 Principal Components Analysis | USArrests (50 estados) | `row.names`, `apply(USArrests, 2, mean)`, `apply(..., 2, var)`, `prcomp(scale = TRUE)`, `$center`, `$scale`, `$rotation`, `$x`, `$sdev`, `biplot(scale = 0)`, `cumsum` | `scale = TRUE` es crucial porque las varianzas son muy distintas; cambiar el signo de `rotation` y `x` voltea el gráfico; PVE = `sdev^2 / sum(sdev^2)` |
| Completar matrices | 544-547 | 533-536 | 12.5.2 Matrix Completion | USArrests | `svd`, `names(sX)`, `t(sX$d * t(sX$u))`, `is.na`, `fit.svd <- function(X, M = 1)`, `while` | implementa el Algoritmo 12.1 a mano; compara `svd` con `prcomp` |
| K-medias | 547-549 | 536-538 | 12.5.3 Clustering (K-Means) | simulados (50 puntos, 2 grupos) | `kmeans(x, 2, nstart = 20)`, `$cluster`, `$tot.withinss`, `set.seed` | `nstart = 20` evita mínimos locales; `nstart = 1` puede dar peor `tot.withinss` |
| Agrupamiento jerárquico | 549-551 | 538-540 | 12.5.3 Hierarchical Clustering | simulados | `dist`, `hclust(method = "complete" / "average" / "single")`, `cutree`, `plot`, `scale`, `as.dist(1 - cor(t(x)))` | distancia por correlación para 3 variables; dendrogramas de los tres enlaces |
| Ejemplo NCI60 | 551-556 | 540-545 | 12.5.4 NCI60 Data Example | NCI60 (64 líneas celulares, 6 830 genes) | `library(ISLR2)`, `prcomp(nci.data, scale = TRUE)`, `summary`, `hclust`, `cutree(hc.out, 4)`, `kmeans(sd.data, 4, nstart = 20)`, `table` | PCA y luego agrupamiento sobre los primeros 5 componentes; compara con `hclust` y `kmeans` sobre los datos completos |

### 13.6 Lab: Multiple Testing (PDF 591-599, impresas 580-588)

| Tema | PDF | Impresa | Sección | Datos | Paquetes y funciones R | Notas |
|---|---|---|---|---|---|---|
| Repaso de pruebas de hipótesis | 591-592 | 580-581 | 13.6.1 Review of Hypothesis Tests | simulados (100 variables) | `t.test`, `for`, `rep`, `table(decision, ...)` | 50 hipótesis nulas falsas; conteo de errores tipo I y II |
| Tasa de error por familia | 592-596 | 581-585 | 13.6.2 The Family-Wise Error Rate | Fund (hedge funds) | `p.adjust(method = "bonferroni" / "holm")`, `t.test(paired = T)`, `aov`, `TukeyHSD` | `1 - (1 - alfa)^m` crece rápido con `m` |
| Tasa de descubrimientos falsos | 596-597 | 585-586 | 13.6.3 The False Discovery Rate | Fund (2 000 gestores) | `p.adjust(method = "BH")`, `sort`, `which` | Benjamini-Hochberg a mano y con la función |
| Enfoque por remuestreo | 597-599 | 586-588 | 13.6.4 A Re-Sampling Approach | Khan | `t.test(var.equal = TRUE)`, bucle de 10 000 permutaciones, `hist`, `sample` | calcula el FDR por permutación |

## Parte C. Secciones teóricas que ya tiene la biblioteca

Las **figuras** van en negrita. Las ecuaciones se citan por su número en el libro.

| Tema | PDF | Impresa | Sección | Notas |
|---|---|---|---|---|
| Sesgo-varianza: calidad del ajuste | 40-44 | 29-33 | 2.2.1 Measuring the Quality of Fit | ECM de entrenamiento (2.5) vs de prueba (2.6); **Figura 2.9** (p. 31, curvas de ajuste y ECM) y **Figura 2.10** (p. 33) |
| Sesgo-varianza: el compromiso | 44-48 | 33-37 | 2.2.2 The Bias-Variance Trade-Off | descomposición (2.7): varianza + sesgo al cuadrado + varianza del error; **Figura 2.11** (p. 34, f casi lineal) y **Figura 2.12** (p. 36, sesgo, varianza y ECM de prueba en forma de U) |
| Clasificador de Bayes | 48-50 | 37-39 | 2.2.3 The Classification Setting | tasa de error de entrenamiento (2.8), probabilidad condicional (2.10), error de Bayes; **Figura 2.13** (p. 38) |
| K vecinos más cercanos (teoría) | 50-53 | 39-42 | 2.2.3 K-Nearest Neighbors | KNN sin modelo; **Figura 2.14** (p. 40), **Figura 2.15** (p. 40) y **Figura 2.16** (p. 41, K = 1 contra K = 100); **Figura 2.17** (p. 42, error de entrenamiento y de prueba contra 1/K) |
| KNN en regresión y maldición de la dimensión | 116-121 | 105-110 | 3.5 Comparison of Linear Regression with K-Nearest Neighbors | KNN de regresión; con muchas variables los vecinos quedan lejos (p. 110) |
| Regresión logística: modelo | 144-146 | 133-135 | 4.3.1 The Logistic Model | (4.1) lineal, (4.2)-(4.3) logística, odds, (4.4) logit; **Figura 4.2** (p. 133) |
| Regresión logística: estimación | 146-148 | 135-137 | 4.3.2 y 4.3.3 | verosimilitud (4.5); predicciones con una variable cualitativa |
| Regresión logística múltiple y confusión | 148-151 | 137-140 | 4.3.4 Multiple Logistic Regression | (4.6)-(4.7); estudiantes frente a no estudiantes en Default; **Figura 4.3** (p. 139, confusión) |
| Logística multinomial y softmax | 151-152 | 140-141 | 4.3.5 Multinomial Logistic Regression | (4.10)-(4.14) |
| LDA con p = 1 | 153-156 | 142-145 | 4.4.1 Linear Discriminant Analysis for p = 1 | teorema de Bayes (4.15), densidad normal (4.16), función discriminante (4.18) y (4.22); **Figura 4.4** (p. 144) |
| LDA con p > 1 | 156-163 | 145-152 | 4.4.2 Linear Discriminant Analysis for p > 1 | normal multivariante (4.23), discriminante (4.24); **Figura 4.5** (p. 146) y **Figura 4.6** (p. 147); matrices de confusión (Tablas 4.4-4.5, pp. 148 y 150), sensibilidad y especificidad (p. 149) |
| Métricas de clasificación y ROC | 159-164 | 148-153 | 4.4.2 | **Figura 4.7** (p. 150, error y umbral); **Figura 4.8** (p. 151, curva ROC y AUC); Tabla 4.6 (p. 152, posibles resultados) y Tabla 4.7 (p. 153, medidas: sensibilidad, especificidad, precisión, recall) |
| QDA | 163-165 | 152-154 | 4.4.3 Quadratic Discriminant Analysis | covarianza propia por clase; **Figura 4.9** (p. 154, Bayes, LDA y QDA) |
| Naive Bayes | 165-169 | 154-158 | 4.4.4 Naive Bayes | independencia condicional (4.29), posterior (4.30); **Figura 4.10** (p. 157) |
| Comparar métodos de clasificación | 169-174 | 158-163 | 4.5 A Comparison of Classification Methods | análisis (4.31)-(4.34) y escenarios; **Figura 4.11** y **Figura 4.12** (pp. 162-163) |
| Conjunto de validación | 209-211 | 198-200 | 5.1.1 The Validation Set Approach | **Figura 5.1** (p. 199) y **Figura 5.2** (p. 200) |
| Validación cruzada dejando uno fuera | 211-214 | 200-203 | 5.1.2 Leave-One-Out Cross-Validation | (5.1), atajo para mínimos cuadrados (5.2); **Figura 5.3** (p. 201) y **Figura 5.4** (p. 202) |
| Validación cruzada de k bloques | 214-216 | 203-205 | 5.1.3 k-Fold Cross-Validation | (5.3); **Figura 5.5** (p. 203, 5 bloques) y **Figura 5.6** (p. 204, ECM verdadero y estimado) |
| Sesgo-varianza en k bloques | 216-217 | 205-206 | 5.1.4 Bias-Variance Trade-Off for k-Fold Cross-Validation | k = 5 o 10 como compromiso entre sesgo y varianza |
| Validación cruzada en clasificación | 217-220 | 206-209 | 5.1.5 Cross-Validation on Classification Problems | (5.4); **Figura 5.7** (p. 207) y **Figura 5.8** (p. 208, error de prueba, entrenamiento y CV de 10 bloques) |
| Bootstrap | 220-223 | 209-212 | 5.2 The Bootstrap | idea y ejemplo de inversión (5.6)-(5.7); error estándar bootstrap (5.8); **Figura 5.9** (p. 210), **Figura 5.10** (p. 211) y **Figura 5.11** (p. 212, el mecanismo del remuestreo con reemplazo) |
| Mejor subconjunto | 238-240 | 227-229 | 6.1.1 Best Subset Selection | Algoritmo 6.1 (p. 227); **Figura 6.1** (p. 229, RSS y R² contra el número de variables) |
| Selección paso a paso | 240-243 | 229-232 | 6.1.2 Stepwise Selection | Algoritmos 6.2 (adelante, p. 230) y 6.3 (atrás, p. 231) |
| Elegir el mejor modelo | 243-248 | 232-237 | 6.1.3 Choosing the Optimal Model | Cp (6.2), BIC (6.3), R² ajustado (6.4); **Figura 6.2** (p. 233) y **Figura 6.3** (p. 236, validación y CV, regla del error estándar) |
| Ridge | 248-252 | 237-241 | 6.2.1 Ridge Regression | criterio (6.5) con penalización λ·Σβ²; estandarizar (6.6); **Figura 6.4** (p. 238, trayectorias) y **Figura 6.5** (p. 240, sesgo, varianza y ECM) |
| Lasso | 252-261 | 241-250 | 6.2.2 The Lasso | criterio (6.7) con penalización λ·Σ\|β\|; forma con restricción (6.8)-(6.10); **Figura 6.6** (p. 243), **Figura 6.7** (p. 245, el rombo y el círculo que explican por qué el lasso da ceros), **Figuras 6.8-6.9** (pp. 246-247); caso simple (6.11)-(6.15) y **Figura 6.10** (p. 248, ridge encoge, lasso umbraliza); **Figura 6.11** (p. 249, interpretación bayesiana) |
| Elegir λ con validación cruzada | 261-263 | 250-252 | 6.2.3 Selecting the Tuning Parameter | **Figura 6.12** (p. 250) y **Figura 6.13** (p. 251) |
| Regresión por componentes principales | 264-271 | 253-260 | 6.3.1 Principal Components Regression | Z_m como combinación lineal (6.16), (6.17)-(6.18); **Figura 6.14** (p. 253) y **Figuras 6.15-6.17** (pp. 255-257); **Figura 6.19** (p. 258, PCR, ridge y lasso) |
| Mínimos cuadrados parciales | 271-272 | 260-261 | 6.3.2 Partial Least Squares | **Figura 6.21** (p. 260) |
| Alta dimensión | 272-278 | 261-267 | 6.4 Considerations in High Dimensions | **Figura 6.22** (p. 264) y **Figura 6.23** (p. 265); R² engaña cuando p ≥ n |
| Árboles de regresión | 339-346 | 328-335 | 8.1.1 Regression Trees | (8.1)-(8.3); poda con costo-complejidad (8.4) y Algoritmo 8.1 (p. 333); **Figura 8.1** (p. 328, árbol de Hitters), **Figura 8.2** (p. 329), **Figura 8.3** (p. 332, particiones), **Figura 8.4** (p. 334) y **Figura 8.5** (p. 335) |
| Árboles de clasificación | 346-349 | 335-338 | 8.1.2 Classification Trees | error (8.5), Gini (8.6), entropía (8.7); **Figura 8.6** (p. 337, Heart) |
| Árboles frente a modelos lineales | 349-351 | 338-340 | 8.1.3 y 8.1.4 | (8.8)-(8.9); **Figura 8.7** (p. 339); ventajas y desventajas |
| Bagging | 351-354 | 340-343 | 8.2.1 Bagging | promedio de árboles bootstrap; estimación del error fuera de bolsa (p. 342); medidas de importancia de variables (p. 343); **Figura 8.8** (p. 342) |
| Bosques aleatorios | 354-356 | 343-345 | 8.2.2 Random Forests | cada corte considera m predictores al azar, típicamente m ≈ √p; decorrelaciona los árboles; **Figura 8.9** (p. 344, importancia) y **Figura 8.10** (p. 346) |
| Boosting | 356-359 | 345-348 | 8.2.3 Boosting | Algoritmo 8.2 (p. 347); (8.10)-(8.12) con λ, B y d; **Figura 8.11** (p. 348) |
| BART y resumen de ensambles | 359-363 | 348-352 | 8.2.4 y 8.2.5 | Algoritmo 8.3 (p. 351); **Figura 8.12** (p. 349) y **Figura 8.13** (p. 352) |
| Hiperplano y clasificador de margen máximo | 379-384 | 368-373 | 9.1 Maximal Margin Classifier | hiperplano (9.1)-(9.4); clasificar por signo (9.5)-(9.8); optimización (9.9)-(9.11); **Figura 9.1** (p. 369), **Figura 9.2** (p. 370) y **Figura 9.3** (p. 372, margen y vectores soporte); caso no separable (p. 373) |
| Clasificador de vectores soporte | 384-390 | 373-379 | 9.2 Support Vector Classifiers | (9.12)-(9.15), holgura ε y parámetro C; **Figura 9.4** (p. 374), **Figura 9.5** (p. 375), **Figura 9.6** (p. 376) y **Figura 9.7** (p. 378, efecto de C) |
| SVM y núcleos | 390-396 | 379-385 | 9.3 Support Vector Machines | producto interno (9.17) y (9.18)-(9.19), núcleo (9.20); núcleo lineal (9.21), polinomial (9.22) y radial (9.24); **Figura 9.8** (p. 379), **Figura 9.9** (p. 383, polinomial y radial), **Figura 9.10** y **Figura 9.11** (pp. 384-385, ROC en Heart) |
| SVM con más de dos clases | 396-397 | 385-386 | 9.4 SVMs with More than Two Classes | uno contra uno (9.4.1) y uno contra todos (9.4.2) |
| SVM y regresión logística | 397-399 | 386-388 | 9.5 Relationship to Logistic Regression | pérdida bisagra (9.25) y forma general (9.26); **Figura 9.12** (p. 387) |
| PCA: qué son los componentes | 508-512 | 497-501 | 12.2.1 What Are Principal Components? | primer componente (12.1)-(12.3), segundo (12.4); **Figura 12.1** (p. 500, USArrests) |
| PCA: otra interpretación | 512-514 | 501-503 | 12.2.2 Another Interpretation of Principal Components | mejor aproximación de rango M (12.5)-(12.7); **Figura 12.2** (p. 502) |
| PCA: proporción de varianza explicada | 514-516 | 503-505 | 12.2.3 The Proportion of Variance Explained | (12.8)-(12.11); **Figura 12.3** (p. 505, gráfico de sedimentación y PVE acumulada); el codo (p. 507) |
| PCA: más detalles | 516-519 | 505-508 | 12.2.4 More on PCA | por qué estandarizar, unicidad hasta un signo, número de componentes; **Figura 12.4** (p. 506, dos biplots) |
| Valores faltantes y completar matrices | 519-525 | 508-514 | 12.3 Missing Values and Matrix Completion | Algoritmo 12.1 (p. 510), (12.12)-(12.14); **Figura 12.5** (p. 511) y **Figura 12.6** (p. 512) |
| K-medias | 526-530 | 515-519 | 12.4.1 K-Means Clustering | objetivo (12.15)-(12.17), Algoritmo 12.2 (p. 517) y equivalencia (12.18); **Figura 12.7** (p. 516), **Figura 12.8** (p. 518, pasos del algoritmo) y **Figura 12.9** (p. 519, seis corridas distintas por el mínimo local) |
| Agrupamiento jerárquico | 530-538 | 519-527 | 12.4.2 Hierarchical Clustering | Algoritmo 12.3 (p. 524); enlaces completo, promedio, simple y de centroide; **Figura 12.10** (p. 520), **Figura 12.11** (p. 521, dendrograma), **Figura 12.12** (p. 522, cómo leerlo), **Figura 12.13** (p. 525) y **Figura 12.14** (p. 526, tres enlaces); **Figura 12.15** (p. 527, distancia por correlación) |
| Cuestiones prácticas del agrupamiento | 539-541 | 528-530 | 12.4.3 Practical Issues in Clustering | estandarizar, qué disimilitud, cuántos grupos, validar; **Figura 12.16** (p. 528, calcetines y computadoras) |

## Búsqueda rápida por concepto candidato

Número de página: PDF / impresa. "Lab" apunta a la subsección del laboratorio.

| Concepto | Teoría | Laboratorio | Paquete y funciones R |
|---|---|---|---|
| Validación cruzada | 5.1.1-5.1.5, PDF 209-220 / p. 198-209: validación (**Fig. 5.1**), LOOCV (5.1)-(5.2), k bloques (5.3) y **Fig. 5.5**, clasificación (5.4) | 5.3.1-5.3.3, PDF 224-226 / p. 213-215 | `boot::cv.glm` (`K = 10`), `sample`, `lm(subset = train)`, `poly`; `cv.glmnet` y `cv.tree` aplican la misma idea (pp. 278 y 355) |
| Bootstrap | 5.2, PDF 220-223 / p. 209-212: **Fig. 5.11**, error estándar (5.8) | 5.3.4, PDF 227-230 / p. 216-219 | `boot::boot`, `sample(n, n, replace = T)`, función `alpha.fn(data, index)` |
| Ridge | 6.2.1, PDF 248-252 / p. 237-241: (6.5), **Fig. 6.4**, **Fig. 6.5** | 6.5.2, PDF 286-289 / p. 275-278 (Hitters) | `glmnet(x, y, alpha = 0, lambda = grid)`, `cv.glmnet`, `$lambda.min`; paquete `glmnet` |
| Lasso | 6.2.2, PDF 252-261 / p. 241-250: (6.7), **Fig. 6.7** (rombo contra círculo), **Fig. 6.10** | 6.5.2, PDF 289-290 / p. 278-279 (Hitters) | `glmnet(..., alpha = 1)`, `cv.glmnet(alpha = 1)`; coeficientes en 0 |
| Selección de subconjuntos | 6.1, PDF 238-248 / p. 227-237: Algoritmos 6.1-6.3, Cp y BIC (6.2)-(6.4) | 6.5.1, PDF 279-285 / p. 268-274 (Hitters) | paquete `leaps`: `regsubsets(nvmax, method)`, `coef`; `predict` hecho a mano |
| PCA | 12.2, PDF 507-519 / p. 496-508: componentes (12.1)-(12.3), **Fig. 12.1**, PVE (12.10) y **Fig. 12.3** | 12.5.1, PDF 541-544 / p. 530-533 (USArrests); 12.5.4 (NCI60) PDF 551-556 / p. 540-545 | R base: `prcomp(scale = TRUE)`, `$rotation`, `$x`, `$sdev`, `biplot` |
| K-medias | 12.4.1, PDF 526-530 / p. 515-519: (12.15)-(12.17), Algoritmo 12.2, **Fig. 12.8**, **Fig. 12.9** | 12.5.3, PDF 547-549 / p. 536-538 (simulados); 12.5.4 (NCI60) PDF 556 / p. 545 | R base: `kmeans(x, K, nstart = 20)`, `$cluster`, `$tot.withinss` |
| Agrupamiento jerárquico | 12.4.2, PDF 530-538 / p. 519-527: Algoritmo 12.3, **Fig. 12.11**, **Fig. 12.14** | 12.5.3, PDF 549-551 / p. 538-540; 12.5.4 PDF 554-556 / p. 543-545 | R base: `dist`, `hclust(method = ...)`, `cutree`, `plot` |
| SVM y núcleos | 9.1-9.3, PDF 379-396 / p. 368-385: margen (9.9)-(9.11), SVC (9.12)-(9.15), núcleo radial (9.24), **Fig. 9.7**, **Fig. 9.9** | 9.6.1-9.6.5, PDF 400-408 / p. 389-397 | paquete `e1071`: `svm(kernel, cost, gamma)`, `tune(svm, ranges = ...)`; `ROCR` para ROC |
| Árbol de decisión | 8.1, PDF 338-351 / p. 327-340: (8.1)-(8.7), Algoritmo 8.1, **Fig. 8.1**, **Fig. 8.6** | 8.3.1-8.3.2, PDF 364-368 / p. 353-357 (Carseats y Boston) | paquete `tree`: `tree`, `cv.tree`, `prune.misclass`, `prune.tree` |
| Bosque aleatorio (con bagging) | 8.2.1-8.2.2, PDF 351-356 / p. 340-345: **Fig. 8.8**, **Fig. 8.9**; boosting 8.2.3 PDF 356-359 / p. 345-348 | 8.3.3-8.3.4, PDF 368-371 / p. 357-360 (Boston) | `randomForest::randomForest(mtry, ntree, importance)`, `importance`, `varImpPlot`; `gbm::gbm` para boosting |
| Regresión logística | 4.3, PDF 144-152 / p. 133-141: (4.1)-(4.7), softmax (4.10)-(4.14), **Fig. 4.2** | 4.7.2, PDF 183-188 / p. 172-177 (Smarket); 4.7.6 (Caravan) PDF 196 / p. 185 | R base: `glm(family = binomial)`, `predict(type = "response")`, `table` |
| LDA | 4.4.1-4.4.2, PDF 153-163 / p. 142-152: (4.16)-(4.24), **Fig. 4.4**, **Fig. 4.5** | 4.7.3, PDF 188-190 / p. 177-179 (Smarket) | paquete `MASS`: `lda`, `predict(...)$class`, `$posterior` |
| KNN | 2.2.3, PDF 50-53 / p. 39-42: **Fig. 2.14-2.17**; regresión y maldición de la dimensión en 3.5, PDF 116-121 / p. 105-110 | 4.7.6, PDF 192-196 / p. 181-185 (Smarket y Caravan) | paquete `class`: `knn(train, test, cl, k)`; `scale` para estandarizar |
| Sesgo y varianza | 2.2.1-2.2.2, PDF 40-48 / p. 29-37: (2.5)-(2.7), **Fig. 2.9-2.12** (la U del error de prueba) | no hay laboratorio dedicado; se ve en 5.3.1 (grados de `poly` con ECM de validación, PDF 224-225 / p. 213-214) | R base: `lm`, `poly`; ECM con `mean((mpg - predict(...))[-train]^2)` |
| Métricas de clasificación y ROC | 4.4.2, PDF 159-164 / p. 148-153: Tablas 4.4-4.7, **Fig. 4.7**, **Fig. 4.8** (ROC y AUC) | 4.7.2 (matriz de confusión con `table`, PDF 185 / p. 174); 9.6.3 (ROC), PDF 405-407 / p. 394-396 | `table`, `mean`; `ROCR::prediction`, `performance`; función `rocplot` del libro |

## Erratas e inconsistencias

No encontré erratas de contenido en las páginas que se leyeron (el PDF es la impresión corregida de junio de 2023). Sí hay convenciones y avisos que conviene saber:

- **p. 389 (PDF 400) y p. 375 (PDF 386)**: el argumento `cost` de `svm()` no es el C de (9.15). El propio libro dice que usa una formulación "ligeramente distinta": `cost` pequeño = margen ancho y muchos vectores soporte; `cost` grande = margen estrecho. Es la lectura contraria a C en la teoría (C grande tolera más violaciones, **Fig. 9.7**, p. 378). Si se compara teoría y laboratorio hay que invertir el sentido.
- **p. 178 (PDF 189)**: en `lda.pred$posterior`, la columna 1 es la clase "Down" (orden alfabético de los niveles), no "Up". Conviene leerlo con la tabla `contrasts(Direction)` (p. 174) para no confundir el umbral.
- **p. 443 (PDF 454)**: el laboratorio 10.9 está escrito con `keras`/`tensorflow` (necesita Python por debajo). Sigue funcionando como referencia, pero la instalación cambia con el tiempo y el libro remite a una versión con `torch` en el sitio web. El código de ese lab no se corrió.
- **p. 444 y 445 (PDF 455-456)**: el lab usa el pipe `%>%` y recomienda tener `ggplot2` instalado solo para que `plot(history)` salga con mejor aspecto; no se usa `ggplot2` directamente.
- **p. 532 (PDF 543)**: los componentes principales solo se determinan salvo el signo; el lab voltea `rotation` y `x` a mano para reproducir la **Figura 12.1**. No es erratum, pero aclara por qué un `prcomp` ajeno puede salir con signos distintos.
- **p. 13 (PDF 24)**: el libro avisa que, con versiones nuevas de R y paquetes, los resultados de los labs pueden no coincidir exactamente con los impresos.
- Los listados de código de PDF a texto traen espacios espurios (por ejemplo `cv.error .10` por `cv.error.10`). Antes de citar código literal hay que mirar la imagen de la página.

## No aparece

Búsqueda de texto en las 615 páginas del PDF: ninguna de estas palabras aparece (0 ocurrencias).

- `tidyverse`, `dplyr`, `tidyr`, `stringr`, `lubridate`, `data.table`: no se usan. Todo el manejo de datos es R base (`[ , ]`, `$`, `subset`, `apply`, `table`).
- `caret`, `tidymodels`, `mlr3`: no están. No hay un marco unificado de modelado; cada tema usa el paquete clásico de su técnica.
- `rpart`, `ranger`, `xgboost`, `lightgbm`: no están; los árboles usan `tree`, el bosque `randomForest` y el boosting `gbm`.
- `scikit-learn`: no aparece. "Python" solo se nombra de pasada (pp. 9 y 14, y en el lab 10.9 por la dependencia de `keras`).
- `ggplot2`: aparece una sola vez, en la p. 445 (PDF 456), como recomendación para que `plot(history)` se vea mejor. Todos los gráficos del libro se hacen con `plot`, `hist`, `boxplot` y `pairs` de R base.
- Pipe `%>%`: solo en el lab 10.9 (de `keras`), desde la p. 444. No hay pipe nativo `|>`.
- `plotly`: no aparece.

Qué sí usa el libro: R base más el paquete `ISLR2` (datos) y un paquete por tema: `MASS`, `car`, `e1071`, `class`, `boot`, `leaps`, `glmnet`, `pls`, `splines`, `gam`, `akima`, `tree`, `randomForest`, `gbm`, `BART`, `ROCR`, `keras`, `jpeg`, `Matrix`, `survival`, `coxed`.
