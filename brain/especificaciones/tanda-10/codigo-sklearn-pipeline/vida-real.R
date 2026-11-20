horas <- c(10, 7, 9, 1, 2, 3, 7, 5, 1, 1)
dist <- c(5500, 2500, 2000, 3000, 5500, 6000, 1000, 1500, 1500, 2000)  # metros
X <- cbind(horas, dist)
y <- c(1, 1, 1, 0, 0, 0, 1, 1, 0, 0)       # inventado: 1 = aprobó
aciertos <- c()
for (f in 1:5) {
  prueba <- c(2 * f - 1, 2 * f)
  entreno <- setdiff(1:10, prueba)
  media <- colMeans(X[entreno, ])           # fit: solo con su train
  desv <- apply(X[entreno, ], 2, sd)
  Ze <- scale(X[entreno, ], media, desv)    # transform del train
  Zp <- scale(X[prueba, ], media, desv)     # transform del test, con lo del train
  bien <- 0
  for (i in 1:2) {
    d2 <- colSums((t(Ze) - Zp[i, ])^2)
    vecino <- which.min(d2)
    if (y[entreno][vecino] == y[prueba][i]) {
      bien <- bien + 1
    }
  }
  aciertos <- c(aciertos, bien / 2)
}
print(aciertos)
print(mean(aciertos))
suppressMessages(library(caret))
datos <- data.frame(horas, dist, aprobo = factor(y))
folds <- lapply(1:5, function(f) setdiff(1:10, c(2 * f - 1, 2 * f)))
ctrl <- trainControl(method = "cv", index = folds)
modelo <- suppressWarnings(train(aprobo ~ ., data = datos, method = "knn",
                tuneGrid = data.frame(k = 1),
                preProcess = c("center", "scale"), trControl = ctrl))
print(modelo$resample$Accuracy)
