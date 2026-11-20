suppressMessages(library(recipes))
datos <- data.frame(horas = c(10, 7, 9, 1, 2, 3, 7, 5, 1, 1),
                    dist = c(5500, 2500, 2000, 3000, 5500, 6000, 1000, 1500, 1500, 2000),
                    aprobo = factor(c(1, 1, 1, 0, 0, 0, 1, 1, 0, 0)))
entreno <- datos[-c(5, 6), ]
prueba <- datos[c(5, 6), ]
receta <- recipe(aprobo ~ horas + dist, data = entreno) |>
  step_normalize(all_numeric_predictors())
ajustada <- prep(receta, training = entreno)
print(tidy(ajustada, number = 1))
print(bake(ajustada, new_data = prueba))
