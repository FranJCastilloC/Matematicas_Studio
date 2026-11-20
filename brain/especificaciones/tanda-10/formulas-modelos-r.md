# Especificación: Fórmulas y modelos en R: lm, glm y predict (formulas-modelos-r)

- Ruta: `modelado-r` (grupo Programación con datos), orden 1. Tanda 10.
- Archivo: `biblioteca/conceptos/formulas-modelos-r.html`
- Área: Programación con datos. Fuente del catálogo: "ISLR2 labs 3.6 y 4.7".
- Prerrequisitos: ["Listas y data frames"].
- Siguientes: ["Un flujo de modelado reproducible en R"] (planeado, sale sin enlace hasta que exista).
- Aparece: SM142004 UD1, SM142004 UD2.
- Resumen del catálogo: "La fórmula y ~ x se convierte en una matriz de diseño, y el mismo molde sirve para la regresión lineal y la logística."
- Fuentes que la página cita (para `fuentes: [...]` al integrar): `islr2`, `rl1`, `rl2diapo`, `eda6`. Todas ya están en `fuentes.js`.

**Foco y límites.** Esta página es la MECÁNICA de la fórmula de R: qué significa cada símbolo (`~`, `+`, `*`, `:`, `-1`, `I()`, `.`),
cómo R la traduce a una **matriz de diseño** (`model.matrix`), cómo un factor se vuelve columnas dummy solo, cómo `predict` aplica la
misma receta a una fila nueva, y que `glm` usa el mismo molde con otra familia. NO explica la teoría de la regresión: mínimos cuadrados,
supuestos, inferencia, sigmoide y verosimilitud ya tienen página. Se enlazan por su título exacto, con una frase:
"Recta de mínimos cuadrados", "Regresión múltiple en forma matricial" (las ecuaciones normales que aquí se usan sin derivar),
"Codificación y datos faltantes" (one-hot y la trampa de la dummy), "Regresión logística", "La sigmoide",
"Odds, log-odds y odds ratio". El valor p y el error estándar de `summary` se nombran y se manda a "Regresión múltiple en forma matricial";
no se explican aquí.

**Material oficial y huecos (decirlo en la página con naturalidad).** El material de SM142004 (UD1 y UD2) está pensado para Python
(`rl1` p.4 nombra scikit-learn y statsmodels como objetivos) y no trae código de R ni la palabra "fórmula" en el sentido de R. SM142002 UD4
(`prog4`, `prog4html`) enseña vectores, listas y data frames, pero no `lm` ni fórmulas (lo más cercano en la materia es la UD6: `eda6` p.16 usa
`boxplot(formula = mpg ~ cyl, data = mtcars)`, la misma tilde fuera de un modelo). La sesión 1 de R (`prog4s1`) anuncia "regresión simple"
para EDA II, pero no hay material. SM142002 UD3 (scikit-learn) no está publicada. Por eso la lectura principal es ISLR2 (laboratorios 3.6 y
4.7), que es todo R base con fórmulas.

## Datos de toda la página (inventados, se dice en la página)

Nueve estudiantes de tres grupos de práctica. Las cuentas están elegidas para que todos los coeficientes den limpios.

| fila | horas | grupo | nota | aprobado (nota > 5) |
|---|---|---|---|---|
| 1 | 2 | A | 5.5 | 1 |
| 2 | 4 | A | 5.0 | 0 |
| 3 | 6 | A | 7.5 | 1 |
| 4 | 2 | B | 4.5 | 0 |
| 5 | 4 | B | 8.0 | 1 |
| 6 | 6 | B | 8.5 | 1 |
| 7 | 2 | C | 5.0 | 0 |
| 8 | 4 | C | 6.5 | 1 |
| 9 | 6 | C | 8.0 | 1 |

R: `df <- data.frame(horas = c(2, 4, 6, 2, 4, 6, 2, 4, 6), grupo = c("A", "A", "A", "B", "B", "B", "C", "C", "C"), nota = c(5.5, 5, 7.5, 4.5, 8, 8.5, 5, 6.5, 8))`;
`df$aprobado <- as.integer(df$nota > 5)`. `str(df)`: `horas` num, `grupo` chr, `nota` num, `aprobado` int. `lm` convierte el `chr` en factor por su cuenta.
La página dice: "en estos datos inventados, aprobar es sacar **más** de 5" (se eligió así para que la logística no tenga separación perfecta;
con `>= 7` R avisa `fitted probabilities numerically 0 or 1 occurred` y los coeficientes se disparan a −42 y 10: verificado, no usar).

Cuentas verificadas en R 4.6.1 y statsmodels 0.14.4 (todas idénticas):
- Medias por horas: 2 h → 5, 4 h → 6.5, 6 h → 8. Medias por grupo: A 6, B 7, C 6.5.
- `nota ~ horas`: intercepto 3.5, pendiente 0.75. R² 0.7105, RSS 5.5. Pasa exacto por las tres medias por horas. Predicción para 5 h: 7.25.
- `nota ~ horas + grupo`: (Intercept) 3, horas 0.75, grupoB 1, grupoC 0.5. Tres rectas **paralelas**: A 3 + 0.75 h, B 4 + 0.75 h, C 3.5 + 0.75 h.
  Ajustados: 4.5, 6, 7.5, 5.5, 7, 8.5, 5, 6.5, 8. Residuos: 1, −1, 0, −1, 1, 0, 0, 0, 0 (R imprime basura del orden de 1e−16 en los ceros:
  la página los muestra redondeados). RSS 4, R² 0.7895 (`0.7894737`), R² ajustado 0.6632, error estándar residual 0.8944 con 5 grados de libertad.
  Predicción 5 h, grupo B: 7.75 (intervalo de confianza 6.342034 a 9.157966; de predicción 5.053951 a 10.44605). A 5 h: A 6.75, B 7.75, C 7.25.
- `nota ~ horas * grupo`: (Intercept) 4, horas 0.5, grupoB −1, grupoC −0.5, horas:grupoB 0.5, horas:grupoC 0.25. Rectas **no paralelas**:
  A 4 + 0.5 h, B 3 + 1 h, C 3.5 + 0.75 h. R² 0.8421, RSS 3. A 5 h: A 6.5, B 8, C 7.25.
- `nota ~ grupo`: (Intercept) 6, grupoB 1, grupoC 0.5 (las medias por grupo, como diferencias con A). R² 0.0789.
- `glm(aprobado ~ horas, family = binomial)`: (Intercept) −2.893592, horas 1.000723. Proporciones observadas: 2 h 1/3, 4 h 2/3, 6 h 3/3.
  Probabilidades ajustadas: 2 h 0.2906673, 4 h 0.7519988, 6 h 0.9573339. Para 5 h: `predict` da 2.110025 (log-odds) y con
  `type = "response"` 0.8918737. Desviación nula 11.4573 (8 gl), residual 8.0352 (7 gl), AIC 12.035, 5 iteraciones de Fisher.
  Con `+ grupo`, los coeficientes de grupo salen prácticamente 0 (2.9e−16): los tres grupos aprueban 2 de 3.
- `lm(aprobado ~ horas)`: intercepto ~0 (−1.5e−16), pendiente 0.1666667; predice 1.333333 a 8 h y 1.666667 a 10 h: una "probabilidad" mayor que 1.

## Imagen central

**La fábrica de la fórmula: la fórmula arriba, la tabla a la izquierda, la matriz de diseño a la derecha y el gráfico abajo, conectados.**

- **Barra de fórmula** (arriba, en `--accent`): `nota ~` fijo y una fila de botones-ficha que se encienden y apagan: `horas`, `grupo`,
  `horas:grupo`, `I(horas^2)`, `- 1`, y un atajo `horas * grupo` (enciende los tres primeros a la vez y lo dice). La fórmula se escribe sola
  con lo encendido (`nota ~ horas + grupo`). Todo se toca; nada depende de arrastrar.
- **Tabla de datos** (izquierda): las nueve filas, `grupo` coloreado por nivel (A, B, C con tres tonos fijos; A, la base, en gris).
- **Matriz de diseño** (derecha): una columna por cada columna que R crearía, con su nombre tal como lo imprime `model.matrix`
  (`(Intercept)`, `horas`, `grupoB`, `grupoC`, `horas:grupoB`, `horas:grupoC`, `I(horas^2)`; sin intercepto: `grupoA`, `grupoB`, `grupoC`).
  Las columnas **aparecen de a una con una animación corta** al encender una ficha, y cada celda dummy se pinta con el color de su nivel.
  Una flecha une cada fila de la tabla con su fila de la matriz (al tocar una fila se iluminan las dos).
  Bajo cada columna, su coeficiente en vivo (oculto hasta resolver el chequeo del paso que lo pide). Al pie, el contador
  "n filas × p columnas" (9 × 4 con `horas + grupo`).
- **Ecuación viva** bajo la matriz: `nota = 3.00·1 + 0.75·horas + 1.00·grupoB + 0.50·grupoC`, con los números del modelo encendido.
- **Gráfico** (abajo, ancho completo en móvil): nube `nota` contra `horas`, puntos con el color del grupo; las rectas ajustadas: una sola
  (`horas`), tres paralelas (`horas + grupo`), tres con pendiente distinta (`horas * grupo`), tres niveles planos (`grupo` solo). Una curva si
  está `I(horas^2)` (aquí da recta, el coeficiente es 0: se dice).
- **Punto nuevo** (pasos 5 y 6): un deslizador `horas` de 0 a 10 (paso 0.5) y tres botones de grupo arman la fila nueva; la matriz muestra esa
  fila aparte ("la receta aplicada a `newdata`") y el gráfico marca la predicción. El resultado aparece solo tras el chequeo del paso 5.
- **Modo glm** (paso 6): la respuesta cambia a `aprobado` (0 y 1); el gráfico muestra los puntos en 0 y 1, la recta de `lm` (que se sale de 0 a 1)
  y la curva de `glm`. Un interruptor **`type = "link"` / `type = "response"`** cambia el eje y de log-odds a probabilidad.
- **Interruptor R / Python** (paso 7): los nombres de columna cambian a los de patsy (`Intercept`, `grupo[T.B]`, `grupo[T.C]`, `horas`, en el
  orden que patsy usa: primero los factores, después lo numérico) y a los de `pd.get_dummies` (`grupo_A`, `grupo_B`, `grupo_C`).

Modos por paso: 1) tabla y gráfico, sin fórmula ni matriz; 2) fórmula `nota ~ horas` y matriz de 2 columnas; 3) `+ grupo`, dummies y destacado;
4) interacciones e `I()`; 5) `predict`, `fitted`, `residuals`, `summary`; 6) glm; 7) Python.

## Hipótesis inicial

"Le escribes a R `lm(nota ~ horas + grupo, data = df)`, donde `grupo` es una columna con las letras A, B y C. Una regresión solo sabe
multiplicar números. ¿Qué crees que hace R con las letras? ¿Cuántos números (coeficientes) crees que te va a devolver?"

Se vuelve a mostrar en el destacado del paso 3 (`#citaHipo`), cuando aparece que son 4 coeficientes y que A no tiene el suyo.

## Pasos (7)

### Paso 1. Una receta en palabras
- Idea: un modelo es una receta para predecir una columna a partir de otras. Antes de cualquier símbolo, "la nota depende de las horas".
- Escenario: modo 1. Solo la tabla y la nube de puntos. Sin fórmula, sin matriz.
- Chequeo (predicción antes de ver nada, sin símbolos): "Los que estudian 2 horas sacan en promedio 5; los de 4 horas, 6.5; los de 6 horas, 8.
  ¿Qué nota esperas para alguien que estudia 5 horas?" Respuesta numérica 7.25 (tolerancia 0.05).
  Pistas: "cada 2 horas la nota sube 1.5: ¿cuánto sube por hora?" → "0.75 por hora; desde 6.5 a las 4 horas, una hora más".
  Error típico: 7.5 (promedio de 6.5 y 8 sin mirar que 5 está a una hora de 4 y a una de 6: en este caso da 7.25, no 7.5).
- Tras resolver, aparece la recta que pasa por las tres medias y la frase: "eso es lo que R calcula cuando escribes `nota ~ horas`".

### Paso 2. La tilde: `nota ~ horas`
- Idea: `~` se lee "depende de" o "explicada por": a la izquierda la respuesta, a la derecha los predictores. La fórmula no calcula nada: es una
  descripción que `lm` lee junto con `data = df` para saber de qué columnas hablan los nombres. Notación entra aquí.
- `lm(nota ~ horas, data = df)` da `(Intercept) 3.50` y `horas 0.75`. La matriz de diseño aparece con **dos** columnas: una de unos y `horas`.
  R agrega el intercepto (la columna de unos) sin que lo escribas.
- Escenario: modo 2. Fórmula con la ficha `horas` encendida; matriz 9 × 2; ecuación viva `nota = 3.50·1 + 0.75·horas`.
- Chequeo (predicción antes de tocar): "Escribiste una sola variable a la derecha de `~`. ¿Cuántas columnas tiene la matriz de diseño?"
  - Correcta: 2. R agrega la columna de unos para el intercepto.
  - 1: "es lo que escribiste, pero R agrega el intercepto por su cuenta".
  - 3: "la respuesta `nota` no entra en la matriz: va en el vector `y`".
- Texto: la misma tilde aparece fuera de los modelos: `boxplot(mpg ~ cyl, data = mtcars)` en la UD6 (cita eda6 p.16) dibuja `mpg`
  "según" `cyl`. Cita islr2 PDF 122 (sintaxis `lm(y ∼ x, data)`).
- `details.profundizar` "¿Y si no quiero intercepto?": `nota ~ horas - 1` (o `+ 0`) quita la columna de unos; la recta queda obligada a pasar por el
  origen. Se nombra; se usa en el paso 3.

### Paso 3. Un factor se vuelve columnas (destacado)
- Idea: al agregar `+ grupo`, R ve texto y lo convierte en factor con niveles en orden alfabético (A, B, C). El primero, A, es la **base**:
  no tiene columna. Los otros dos tienen una columna dummy cada uno (`grupoB`, `grupoC`), con 1 si la fila es de ese grupo y 0 si no.
  Resultado: (Intercept) 3, horas 0.75, grupoB 1, grupoC 0.5. Tres rectas paralelas: B queda 1 punto arriba de A, C medio punto arriba.
- Escenario: modo 3. Las dos columnas nuevas entran con animación; las filas 4-6 se pintan en `grupoB`, las 7-9 en `grupoC`, las de A quedan en 0, 0.
  Matriz 9 × 4. Salida real de `model.matrix(nota ~ horas + grupo, data = df)` (ver datos) más `attr(,"contrasts")$grupo` = `"contr.treatment"`.
- Chequeo (cálculo con los datos en vivo): "Con `nota ~ horas + grupo`, ¿qué nota predice el modelo para 4 horas en el grupo C?"
  Correcta 6.5 (= 3 + 0.75·4 + 0.5). Pistas: "la fila es (1, 4, 0, 1)"; "multiplica cada columna por su coeficiente y suma".
  Error típico que la pista nombra: 7.0 (sumar también el coeficiente de B).
- Citas: islr2 PDF 130 (3.6.6, Carseats: "R generates dummy variables automatically") y PDF 131 (`contrasts(ShelveLoc)` muestra la codificación).
- **Trampa marcada (codigo2)**: si los grupos vienen como números 1, 2, 3, `lm` los trata como una cantidad: devuelve **un** coeficiente
  `grupo 0.25` (como si pasar de A a B valiera lo mismo que de B a C). Con `factor(grupo)` vuelven 1.00 y 0.50. Salidas reales en Vida real.
- Enlace por título a "Codificación y datos faltantes" (one-hot frente a codificar con números inventando un orden).

**Destacado con predicción (la confusión natural): "¿Por qué no hay columna para el grupo A?"**
- Predicción: "Hay tres grupos. ¿Cuántas columnas dummy crea R?" Opciones: 3 / 2 (correcta) / 1 / "ninguna, usa las letras".
- Explicación con el visual: un botón "forzar una columna para A" agrega `grupoA`. Entonces `grupoA + grupoB + grupoC` es, fila a fila, igual a la
  columna de unos: la matriz tiene 5 columnas pero solo rango 4 (verificado con `np.linalg.matrix_rank`). El sistema de ecuaciones no tiene una
  solución única: `solve(t(X) %*% X, ...)` falla con `Lapack routine dgesv: system is exactly singular: U[5,5] = 0` y NumPy con
  `LinAlgError: Singular matrix` (salidas reales). Es la "trampa de la dummy". El grupo A no desaparece: vive en el intercepto (3 es la recta
  de A en 0 horas), y `grupoB = 1` se lee "B saca 1 punto más que A con las mismas horas".
- Muestra de nuevo la hipótesis.
- Si quitas el intercepto (`nota ~ horas + grupo - 1`), R sí crea las tres: `grupoA 3, grupoB 4, grupoC 3.5`, que son los tres interceptos (verificado).
- `details.profundizar` "¿Y si quiero que la base sea B?": `relevel(factor(grupo), ref = "B")` da (Intercept) 4, grupo2A −1, grupo2C −0.5:
  cambian los coeficientes, **no cambian las predicciones** (ISLR muestra lo mismo con `contr.sum`: `all.equal(predict(mod.lm), predict(mod.lm2))`,
  cita islr2 PDF 198). `contrasts(factor(df$grupo))` imprime la tabla A 0 0 / B 1 0 / C 0 1 (verificado).

### Paso 4. Interacciones y la `^` que no eleva (trampa)
- Idea: `horas * grupo` es un atajo de `horas + grupo + horas:grupo`. El término `horas:grupo` crea columnas producto (`horas:grupoB` = horas × grupoB):
  cada grupo tiene su propia pendiente. Coeficientes: 4, 0.5, −1, −0.5, 0.5, 0.25. Pendientes: A 0.5, B 0.5 + 0.5 = 1, C 0.5 + 0.25 = 0.75.
  Las rectas dejan de ser paralelas. R² sube de 0.7895 a 0.8421.
- Escenario: modo 4. Las columnas `horas:grupoB` y `horas:grupoC` se construyen multiplicando en vivo las dos columnas de las que salen (animación:
  la columna `horas` y la `grupoB` se superponen y queda el producto 0, 0, 0, 2, 4, 6, 0, 0, 0).
- Chequeo (cálculo con los datos en vivo): "Con `nota ~ horas * grupo`, ¿cuánto sube la nota por cada hora extra en el grupo B?" Correcta 1
  (= 0.5 + 0.5). Error típico que la pista nombra: 0.5 (leer solo el coeficiente de `horas`, que es la pendiente de la base A).
- **Trampa marcada**: dentro de una fórmula `^` no eleva al cuadrado: significa "cruzar términos hasta ese grado". `lm(nota ~ horas^2)` devuelve lo mismo
  que `nota ~ horas` (3.5 y 0.75, sin error ni aviso) y `(horas + grupo)^2` es igual a `horas * grupo` (6 columnas). Para el cuadrado de verdad: `I(horas^2)`,
  que "protege" la cuenta (aquí el coeficiente sale 0, −6.3e−17, porque los datos no tienen curva: se dice). Cita islr2 PDF 128 (`I()` "is needed since the ^
  has a special meaning in a formula object") y PDF 127 (3.6.4, `lstat * age` incluye `lstat`, `age` y `lstat×age`).
- Tabla de símbolos que se arma en este paso (queda visible): `+` agrega, `:` multiplica, `*` = `a + b + a:b`, `-` quita (`~ . - age`, cita islr2 PDF 127),
  `.` = todas las demás columnas, `I()` = cuenta normal, `- 1` sin intercepto, `log(x)` funciona sin `I()`.
- Otra trampa (en el texto, verificada): `lm(nota ~ ., data = df)` con la columna `aprobado` dentro mete `aprobado` como predictor (sale 1.5 y la pendiente
  de horas cambia a 0.5): `aprobado` se calculó **desde** la nota. El punto incluye todo lo que hay en la tabla.
- `details.profundizar` "¿Por qué el R² sube siempre?": más columnas nunca empeoran el ajuste en los mismos datos. `anova(m1, m2, m3)` compara los tres
  modelos anidados (RSS 5.5 → 4 → 3, F 0.75 y 0.5, p 0.5443 y 0.6495: con 9 datos, ninguna mejora es convincente). Cita islr2 PDF 128 (`anova`).

### Paso 5. `predict`, `fitted` y `summary`: la receta aplicada a filas nuevas
- Idea: `predict(m, newdata = ...)` arma la fila nueva de la matriz con **la misma receta** (mismos niveles, misma base) y la multiplica por los coeficientes.
  `fitted(m)` es lo mismo con las filas de entrenamiento y `residuals(m)` = nota − ajustado. `summary(m)` da la tabla de coeficientes con su error estándar,
  `t` y `p`, el R² y el error estándar residual.
- Escenario: modo 5, con el punto nuevo (deslizador `horas` y botones de grupo).
- Chequeo (cálculo con los datos en vivo, punto nuevo en 5 horas y grupo B por defecto): "¿Qué devuelve `predict(m, newdata = data.frame(horas = 5, grupo = "B"))`?"
  Correcta 7.75 (fila 1, 5, 1, 0). Si Francisco movió el punto, la respuesta correcta se recalcula. Pista: "escribe primero la fila nueva de la matriz".
- **Trampa**: un nivel que el modelo no vio. `predict(m, newdata = data.frame(horas = 5, grupo = "D"))` da `Error ... factor grupo has new level D` (real):
  la receta no tiene columna para D. Y `newdata` debe tener columnas con los mismos nombres que la fórmula.
- Salida real de `summary(lm(nota ~ horas + grupo, data = df))` para mostrar recortada (coeficientes y pie):
  ```
              Estimate Std. Error t value Pr(>|t|)
  (Intercept)   3.0000     0.8944   3.354  0.02024 *
  horas         0.7500     0.1826   4.108  0.00928 **
  grupoB        1.0000     0.7303   1.369  0.22920
  grupoC        0.5000     0.7303   0.685  0.52400
  Residual standard error: 0.8944 on 5 degrees of freedom
  Multiple R-squared:  0.7895,	Adjusted R-squared:  0.6632
  F-statistic:  6.25 on 3 and 5 DF,  p-value: 0.03817
  ```
  Los 5 grados de libertad son 9 filas − 4 columnas de la matriz (incluido el intercepto). Errata para decir con naturalidad: el material de la UD1
  (`rl1` p.21) dice "n − p con p el número de variables predictoras" pero divide entre n − 2 en la regresión simple; lo coherente es contar el intercepto,
  que es lo que hace R.
- Lo que significan el error estándar y el valor p: una frase y enlace por título a "Regresión múltiple en forma matricial".
- Citas: islr2 PDF 124 (`predict(lm.fit, data.frame(lstat = c(5, 10, 15)), interval = "confidence")` y `"prediction"`); rl1 p.19 (forma matricial
  $\mathbb Y = \mathbb X\beta + \epsilon$: la $\mathbb X$ es lo que construye `model.matrix`; errata: el material la dibuja con una fila por variable,
  $p \times n$, y la usa como $n \times p$; `model.matrix` muestra la forma correcta, 9 × 4); rl1 p.20 (ecuaciones normales
  $\hat\beta = (\mathbb X^T\mathbb X)^{-1}\mathbb X^T\mathbb Y$, que la Vida real resuelve con la matriz armada a mano).
- `details.profundizar` "Intervalo de confianza o de predicción": para 5 horas en B, 6.34 a 9.16 (la media de muchos como él) frente a 5.05 a 10.45
  (un estudiante concreto). Verificado.

### Paso 6. El mismo molde, otra familia: `glm` (trampa)
- Idea: para una respuesta 0/1, `lm(aprobado ~ horas)` predice 1.33 a las 8 horas: una "probabilidad" mayor que 1. `glm(aprobado ~ horas, data = df,
  family = binomial)` usa **la misma fórmula y la misma matriz de diseño**; lo que cambia es la familia: la combinación lineal se pasa por la sigmoide.
  Coeficientes: (Intercept) −2.8936, horas 1.0007 (cada hora suma 1 a los log-odds).
- Escenario: modo glm. Puntos en 0 y 1, la recta de `lm` cruzando el 1, la curva de `glm`; interruptor `link` / `response`.
- **Trampa marcada (codigo1)**: `predict(g, newdata = data.frame(horas = 5))` devuelve 2.110025: **no** es una probabilidad, son log-odds (la escala de la
  combinación lineal, `type = "link"` es el valor por defecto). La probabilidad es `predict(..., type = "response")` = 0.8918737 = 1 / (1 + e^{−2.110025}).
- Chequeo (elección con explicación): "`predict(g, newdata = data.frame(horas = 5))` da 2.11. ¿Qué es ese número?"
  - Correcta: "los log-odds de aprobar; la probabilidad se pide con `type = "response"` y es 0.89".
  - "La probabilidad, en porcentaje mal escrito": "una probabilidad no pasa de 1; 2.11 está en la escala lineal".
  - "La nota predicha": "este modelo es de `aprobado`, no de `nota`".
  - "Un error de R": "no es un error: es el valor por defecto de `type`".
- Citas: islr2 PDF 183 (4.7.2: la sintaxis de `glm()` "is similar to that of lm()" más `family = binomial`); islr2 PDF 185 (`type = "response"` para la
  probabilidad y `contrasts(Direction)` dice cuál nivel es el 1); rl2diapo p.8
  (el ejemplo del puente, $\gamma = 1 \Rightarrow p \approx 0.731$: la misma cuenta que hace `type = "response"`).
- Enlaces por título: "Regresión logística", "La sigmoide", "Odds, log-odds y odds ratio".
- `details.profundizar` "Otras familias": `family = poisson` para conteos con la misma fórmula (cita islr2 PDF 198, Bikeshare). `glm` sin `family` es una
  regresión lineal: `glm(nota ~ horas + grupo, data = df)` da 3, 0.75, 1, 0.5 (verificado).

### Paso 7. La misma fórmula en Python (el paso más técnico)
- Idea: Python no trae fórmulas de serie. `statsmodels` las copia (con la librería `patsy`): `smf.ols("nota ~ horas + grupo", data=df)` da los mismos
  números con otros nombres (`Intercept`, `grupo[T.B]`, `grupo[T.C]`, `horas`, y en ese orden: patsy pone los factores antes que lo numérico).
  `smf.logit("aprobado ~ horas", data=df)` da −2.8936 y 1.0007, y su `predict` **ya devuelve la probabilidad** (0.8919): el valor por defecto es el
  opuesto al de R. scikit-learn no tiene fórmulas: la matriz se arma a mano con `pd.get_dummies`.
- Escenario: modo Python (interruptor de nombres).
- Chequeo (elección con explicación): "Con `pd.get_dummies` **sin** `drop_first`, `LinearRegression` recibe `grupo_A`, `grupo_B` y `grupo_C` más su propio
  intercepto. ¿Qué pasa?"
  - Correcta: "No da error, pero los coeficientes cambian (intercepto 3.5, grupos −0.5, 0.5, 0) y no se pueden leer como diferencias con A; la predicción
    para 5 horas en B sigue siendo 7.75". Salidas reales.
  - "Da el error de matriz singular, como `solve`": "scikit-learn resuelve por mínimos cuadrados con `lstsq`, que elige una de las infinitas soluciones sin avisar".
  - "Da exactamente lo mismo que R": "solo las predicciones; con `drop_first=True` sí salen 3, 0.75, 1, 0.5".
- **Trampa (codigo3)**: `LogisticRegression()` de scikit-learn penaliza por defecto (L2, `C=1`): da −1.9896 y 0.7278, no los de `glm`. Con
  `penalty=None` da −2.8943 y 1.0009 (casi igual; la diferencia en el cuarto decimal es del optimizador).
- Cita rl1 p.4 (los objetivos de la UD1 nombran scikit-learn y statsmodels: esta es la conexión). Decir: SM142002 UD3 (scikit-learn) no está publicada;
  enlace por título a "fit, transform y predict: la interfaz de scikit-learn" (planeado, sale sin enlace).
- Otra trampa (en el texto, verificada): `sm.OLS(y, df[["horas"]])` sin `sm.add_constant` ajusta **sin intercepto** (pendiente 1.5); `smf.ols` con fórmula
  lo agrega solo, como R.

## Vida real (Python y R)

Python 3.13 con NumPy 2.1.3, pandas 2.2.3 y statsmodels 0.14.4; R 4.6.1. Mismos datos del recorrido.
Algoritmo: construir la matriz de diseño de `nota ~ horas + grupo` **a mano**, fila por fila, con un bucle que crea una dummy por nivel menos la base;
resolver las ecuaciones normales; predecir la fila nueva (5 horas, grupo B) con un producto; y cerrar contra la fórmula de la librería.
El texto sin el prefijo `id: ` es exactamente lo que se ejecutó. Las líneas con id `-` no tienen evento.

### Python

```
import: import numpy as np
-: import pandas as pd
-: import statsmodels.formula.api as smf
datos: df = pd.DataFrame({"horas": [2, 4, 6, 2, 4, 6, 2, 4, 6],
-:                    "grupo": ["A", "A", "A", "B", "B", "B", "C", "C", "C"],
-:                    "nota": [5.5, 5, 7.5, 4.5, 8, 8.5, 5, 6.5, 8]})   # inventado
niveles: niveles = sorted(df["grupo"].unique())        # A, B, C: A es la base
X0: X = []
fori: for i in range(len(df)):
fila:     fila = [1, df["horas"][i]]                # intercepto y horas
forn:     for nivel in niveles[1:]:                 # una dummy por nivel, menos la base
dummy:         fila.append(1 if df["grupo"][i] == nivel else 0)
agrega:     X.append(fila)
xarr: X = np.array(X, dtype=float)
y: y = df["nota"].to_numpy()
beta: beta = np.linalg.solve(X.T @ X, X.T @ y)      # ecuaciones normales
imp1: print(beta.round(4))
nuevo: nuevo = np.array([1, 5, 1, 0])                # 5 horas, grupo B
imp2: print(round(nuevo @ beta, 4))
modelo: m = smf.ols("nota ~ horas + grupo", data=df).fit()
imp3: print(m.params.round(4).to_dict())
imp4: print(round(m.predict(pd.DataFrame({"horas": [5], "grupo": ["B"]}))[0], 4))
```

Salida real:
```
[3.   0.75 1.   0.5 ]
7.75
{'Intercept': 3.0, 'grupo[T.B]': 1.0, 'grupo[T.C]': 0.5, 'horas': 0.75}
7.75
```

### R

```
datos: df <- data.frame(horas = c(2, 4, 6, 2, 4, 6, 2, 4, 6),
-:                  grupo = c("A", "A", "A", "B", "B", "B", "C", "C", "C"),
-:                  nota = c(5.5, 5, 7.5, 4.5, 8, 8.5, 5, 6.5, 8))   # inventado
niveles: niveles <- sort(unique(df$grupo))             # A, B, C: A es la base
X0: X <- NULL
fori: for (i in seq_len(nrow(df))) {
fila:   fila <- c(1, df$horas[i])                   # intercepto y horas
forn:   for (nivel in niveles[-1]) {                # una dummy por nivel, menos la base
dummy:     fila <- c(fila, ifelse(df$grupo[i] == nivel, 1, 0))
-:   }
agrega:   X <- rbind(X, fila)
-: }
y: y <- df$nota
beta: beta <- solve(t(X) %*% X, t(X) %*% y)         # ecuaciones normales
imp1: print(round(as.vector(beta), 4))
nuevo: nuevo <- c(1, 5, 1, 0)                        # 5 horas, grupo B
imp2: print(round(sum(nuevo * beta), 4))
modelo: m <- lm(nota ~ horas + grupo, data = df)
imp3: print(coef(m))
imp4: print(predict(m, newdata = data.frame(horas = 5, grupo = "B")))
```

Salida real:
```
[1] 3.00 0.75 1.00 0.50
[1] 7.75
(Intercept)       horas      grupoB      grupoC 
       3.00        0.75        1.00        0.50 
   1 
7.75 
```
(Las líneas `(Intercept) ...` y `   1 ` de R terminan con un espacio: así las imprime R. Copiar tal cual o recortar el espacio final en las dos versiones.)

Comprobado ejecutando los dos archivos; quitando el prefijo `id: ` (y `-: `) cada línea es idéntica a lo que corrió. Copiar respetando los espacios
de alineación de los comentarios. Antes de publicar, el constructor vuelve a correr los dos bloques tal como quedan en la página.

Eventos (una sola lista `EV`, la misma para los dos lenguajes): `import`, `datos`, `niveles`, `X0`; luego 9 vueltas de
`fori`, `fila`, `forn`, `dummy`, `forn`, `dummy`, `agrega` (7 × 9 = 63); después `xarr`, `y`, `beta`, `imp1`, `nuevo`, `imp2`, `modelo`, `imp3`, `imp4`.
Total 4 + 63 + 9 = **76 eventos**.
- `import` solo existe en Python: en R se narra "Esta línea solo existe en Python: R trae `lm`, `model.matrix` y `solve` sin cargar nada."
- `xarr` solo existe en Python: en R se narra "En R, `rbind` ya fue armando una matriz numérica: no hace falta convertir."
- Sugerencia de velocidad: `demora` corta en las vueltas 2 a 9 o un botón "ir al final del bucle" (el motor ya trae "ir al final").

### Foto de estado por línea ejecutada

| Evento | i (py / R) | grupo[i] | nivel | fila | X (filas) | Visual |
|---|---|---|---|---|---|---|
| datos | | | | | | la tabla de 9 filas con colores de grupo |
| niveles | | | | | | `['A', 'B', 'C']` / `"A" "B" "C"`; A marcado "base" en gris |
| X0 | | | | | 0 | matriz vacía con encabezados `1`, `horas`, `grupoB`, `grupoC` |
| fori, fila (vuelta 1) | 0 / 1 | A | | `[1, 2]` | 0 | fila 1 de la tabla iluminada; dos celdas nuevas |
| forn, dummy | 0 / 1 | A | B | `[1, 2, 0]` | 0 | "¿A == B? no → 0" |
| forn, dummy | 0 / 1 | A | C | `[1, 2, 0, 0]` | 0 | "¿A == C? no → 0" |
| agrega | 0 / 1 | | | | 1 | la fila baja a la matriz |
| ... vuelta 4 | 3 / 4 | B | B → C | `[1, 2, 1, 0]` | 4 | "¿B == B? sí → 1" en `--accent` |
| ... vuelta 7 | 6 / 7 | C | B → C | `[1, 2, 0, 1]` | 7 | |
| ... vuelta 9 | 8 / 9 | C | | `[1, 6, 0, 1]` | 9 | matriz completa 9 × 4, igual a `model.matrix` |
| beta | | | | | | cuatro coeficientes bajo las columnas: 3, 0.75, 1, 0.5 |
| imp1 | | | | | | salida |
| nuevo, imp2 | | | | `[1, 5, 1, 0]` | | fila nueva aparte; producto 3 + 3.75 + 1 + 0 = 7.75 |
| modelo, imp3 | | | | | | la fórmula `nota ~ horas + grupo` en la barra; los nombres de columna de la librería (patsy / R) |
| imp4 | | | | | | 7.75 en los dos caminos: "la fórmula hace por dentro lo mismo que tu bucle" |

Filas de la matriz por vuelta (para precalcular): A → `[1, h, 0, 0]`, B → `[1, h, 1, 0]`, C → `[1, h, 0, 1]` con h = 2, 4, 6.
En el panel de variables mostrar `fila` como `[1, 2, 0, 0]` (en NumPy 2, `repr` de la lista mostraría `np.int64(2)`; no copiar eso).
Índices con `ctx.ix` (Python 0 a 8, R 1 a 9). Narración de `forn`: "`niveles[1:]` en Python y `niveles[-1]` en R recorren B y C: se salta la base".
Atención: `niveles[-1]` en R **quita** el primero; en Python `niveles[-1]` sería el **último** (C). Decirlo en la narración (es una trampa clásica entre lenguajes).

### Predicción antes de reproducir (`#vrPred`)

"¿Cuántas veces se ejecuta la línea que agrega una dummy (`fila.append(...)` / `fila <- c(fila, ...)`)?" Respuesta **18** (9 filas × 2 niveles que no son la base).
Distractores: 27 (contar también la base A), 9 (una por fila), 4 (columnas de la matriz). Pista: "el bucle de dentro recorre `niveles[1:]`".

### Trampas reales (retos `codigo1` a `codigo3`)

**codigo1: `predict` de un `glm` devuelve log-odds (R).**
```
df <- data.frame(horas = c(2, 4, 6, 2, 4, 6, 2, 4, 6),
                 nota = c(5.5, 5, 7.5, 4.5, 8, 8.5, 5, 6.5, 8))
df$aprobado <- as.integer(df$nota > 5)
g <- glm(aprobado ~ horas, data = df, family = binomial)
print(round(coef(g), 4))
print(predict(g, newdata = data.frame(horas = 5)))
print(predict(g, newdata = data.frame(horas = 5), type = "response"))
```
Salida real:
```
(Intercept)       horas 
    -2.8936      1.0007 
       1 
2.110025 
        1 
0.8918737 
```
Par en Python (statsmodels, el valor por defecto es el contrario):
```
import pandas as pd
import statsmodels.formula.api as smf
df = pd.DataFrame({"horas": [2, 4, 6, 2, 4, 6, 2, 4, 6],
                   "nota": [5.5, 5, 7.5, 4.5, 8, 8.5, 5, 6.5, 8]})
df["aprobado"] = (df["nota"] > 5).astype(int)
g = smf.logit("aprobado ~ horas", data=df).fit(disp=0)
print(g.params.round(4).to_dict())
print(round(g.predict(pd.DataFrame({"horas": [5]}))[0], 4))
```
Salida real:
```
{'Intercept': -2.8936, 'horas': 1.0007}
0.8919
```
Pregunta: "Alguien reporta que la probabilidad de aprobar con 5 horas es 2.11. ¿Qué pasó?" Correcta: usó el `predict` de R sin `type = "response"`; 2.11 son
log-odds (−2.8936 + 1.0007·5). Distractores: "el modelo está mal ajustado" (los coeficientes son los mismos en Python); "hay que dividir entre 100"; "`glm` no sirve para 0/1".
Cita islr2 PDF 185.

**codigo2: el grupo guardado como número (R).**
```
df <- data.frame(horas = c(2, 4, 6, 2, 4, 6, 2, 4, 6),
                 grupo = c(1, 1, 1, 2, 2, 2, 3, 3, 3),   # 1 = A, 2 = B, 3 = C
                 nota = c(5.5, 5, 7.5, 4.5, 8, 8.5, 5, 6.5, 8))
print(coef(lm(nota ~ horas + grupo, data = df)))
print(coef(lm(nota ~ horas + factor(grupo), data = df)))
```
Salida real:
```
(Intercept)       horas       grupo 
       3.00        0.75        0.25 
   (Intercept)          horas factor(grupo)2 factor(grupo)3 
          3.00           0.75           1.00           0.50 
```
Pregunta: "¿Por qué el primer modelo tiene un solo coeficiente de grupo?" Correcta: `grupo` es numérico, así que `lm` ajusta una pendiente: supone que de 1 a 2 y de 2 a 3
se suma lo mismo (0.25), un orden y una distancia que los grupos no tienen. `factor()` crea las dummies. Distractores: "R junta los grupos parecidos"; "con números
el modelo es más preciso"; "el 0.25 es la media de 1 y 0.5" (casualidad: no es así en general). Mismo fenómeno en Python: `smf.ols("nota ~ horas + gnum")` da
`gnum 0.25` y `C(gnum)` da `1.0` y `0.5` (verificado). Cita islr2 PDF 130.

**codigo3: `LogisticRegression` penaliza sin avisar (Python).**
```
import pandas as pd
import statsmodels.formula.api as smf
from sklearn.linear_model import LogisticRegression
df = pd.DataFrame({"horas": [2, 4, 6, 2, 4, 6, 2, 4, 6],
                   "nota": [5.5, 5, 7.5, 4.5, 8, 8.5, 5, 6.5, 8]})
df["aprobado"] = (df["nota"] > 5).astype(int)
sk = LogisticRegression().fit(df[["horas"]], df["aprobado"])
print(round(sk.intercept_[0], 4), round(sk.coef_[0][0], 4))
sk0 = LogisticRegression(penalty=None).fit(df[["horas"]], df["aprobado"])
print(round(sk0.intercept_[0], 4), round(sk0.coef_[0][0], 4))
print(smf.logit("aprobado ~ horas", data=df).fit(disp=0).params.round(4).tolist())
```
Salida real (scikit-learn 1.6.1):
```
-1.9896 0.7278
-2.8943 1.0009
[-2.8936, 1.0007]
```
Pregunta: "¿Por qué scikit-learn y `glm` no coinciden?" Correcta: `LogisticRegression` usa por defecto una penalización L2 con `C=1` que encoge los coeficientes hacia 0;
`glm` y `smf.logit` maximizan la verosimilitud sin penalizar. Con `penalty=None` coinciden (salvo el cuarto decimal, por el optimizador `lbfgs`).
Distractores: "scikit-learn usa otra sigmoide"; "falta estandarizar `horas`" (estandarizar cambia la escala, pero no quita la penalización); "statsmodels redondea".
No hay cita del material (UD3 no publicada); enlace por título a "fit, transform y predict: la interfaz de scikit-learn".

`p.vr-nota`: en una línea, `coef(lm(nota ~ horas + grupo, data = df))` en R y `smf.ols("nota ~ horas + grupo", data=df).fit().params` en Python;
`model.matrix(nota ~ horas + grupo, data = df)` y `patsy.dmatrix("horas + grupo", df)` muestran la matriz que tu bucle construyó (verificado: la de patsy tiene
las columnas en el orden `Intercept`, `grupo[T.B]`, `grupo[T.C]`, `horas`).
`details.profundizar` "La forma vectorizada": `X <- model.matrix(~ horas + grupo, data = df)` y `solve(crossprod(X), crossprod(X, df$nota))` en R;
en Python `X = np.column_stack([np.ones(9), df["horas"], pd.get_dummies(df["grupo"], drop_first=True, dtype=float)])` y
`np.linalg.lstsq(X, y, rcond=None)[0].round(4)`. Verificado: R imprime una columna con filas `(Intercept) 3.00`, `horas 0.75`, `grupoB 1.00`, `grupoC 0.50`;
Python `[3.   0.75 1.   0.5 ]`.

## Retos (11)

RETOS = ["ojo", "construir", "mano", "error", "prop1", "prop2", "prop3", "codigo1", "codigo2", "codigo3", "formula"]

1. **ojo** (ojo clínico, 8 rondas al azar, aprueba con 7 de 8): se muestra una fórmula con `x` numérica, `g` factor de 3 niveles (A, B, C) y `w` factor de 2 niveles
   (no, si); Francisco dice **cuántas columnas** tiene `model.matrix` (botones 1 a 7). Banco verificado en R 4.6.1 (fórmula → columnas):
   `y ~ x` → 2; `y ~ x + g` → 4; `y ~ x * g` → 6; `y ~ g` → 3; `y ~ g - 1` → 3 (gA gB gC); `y ~ x + g - 1` → 4 (x gA gB gC); `y ~ x^2` → 2;
   `y ~ x + I(x^2)` → 3; `y ~ (x + g)^2` → 6; `y ~ x:g` → 4 ((Intercept) x:gA x:gB x:gC); `y ~ g + w` → 4; `y ~ g * w` → 6; `y ~ g:w` → 7;
   `y ~ 1` → 1; `y ~ x + log(x)` → 3. La explicación de cada ronda muestra los nombres de las columnas.
2. **construir** (manipular la barra de fórmula hasta cumplir, con el gráfico y la matriz en vivo): lograr
   (a) tres rectas paralelas (`horas + grupo`, 4 columnas);
   (b) tres rectas con pendientes distintas (`horas * grupo`, R² 0.8421);
   (c) un modelo cuyos coeficientes de grupo sean directamente los tres interceptos (`horas + grupo - 1`: 3, 4, 3.5).
   Ok al cumplir las tres. Si Francisco pide "forzar grupoA" con intercepto, el escenario muestra el mensaje de matriz singular del destacado.
3. **mano** (a mano, datos al azar, pistas escalonadas, reintentable): se generan coeficientes de `nota ~ horas + grupo` al azar ((Intercept) entero de 1 a 5,
   `horas` en {0.25, 0.5, 0.75, 1}, `grupoB` y `grupoC` en {−1, −0.5, 0.5, 1, 1.5}) y una fila nueva (horas entero de 1 a 8, grupo al azar).
   Pide: (1) el valor de la columna `grupoC` de esa fila (0 o 1); (2) la predicción (exacta, 2 decimales). Pistas: 1) "la base A tiene 0 en las dos dummies";
   2) "escribe la fila (1, horas, grupoB, grupoC)"; 3) la suma con los tres primeros términos hechos.
4. **error** (cazar el error, 3 variantes, una línea mal):
   - V1 (R, Vida real): `for (nivel in niveles) {` en lugar de `niveles[-1]`. Salida real (verificada con el bloque de Vida real cambiando solo esa línea):
     `Error in solve.default(t(X) %*% X, t(X) %*% y) :` / `  Lapack routine dgesv: system is exactly singular: U[5,5] = 0`. La columna de A sobra.
   - V2 (R, modelo): `lm(nota ~ horas^2, data = df)` "para el término cuadrático". Salida real: `(Intercept) 3.50  horas 0.75` (igual que sin `^2`, sin aviso).
     Arreglo: `nota ~ horas + I(horas^2)`.
   - V3 (Python, Vida real): `for nivel in niveles[-1]:` copiado de R. En Python `niveles[-1]` es la cadena `"C"`, y el bucle recorre sus letras: crea solo la
     dummy de C. Salida real (bloque de Vida real cambiando solo esa línea): `[3.5  0.75 0.  ]` (matriz 9 × 3, el modelo `nota ~ horas + grupoC`: C cae
     justo sobre la recta común, por eso 0) y después `ValueError: matmul: Input operand 1 has a mismatch in its core dimension 0, with gufunc signature
     (n?,k),(k,m?)->(n?,m?) (size 3 is different from 4)` en la línea `nuevo @ beta`. La pista: "en Python el índice −1 es el último elemento, no 'todos menos el primero'".
5. **prop1** (opción múltiple, `mezclar: true`): "Con `nota ~ horas + grupo` sale `grupoB = 1`. ¿Qué significa?" Correcta: "con las mismas horas, el grupo B
   saca 1 punto más que el grupo A, la base". Pistas: "B saca 1 punto" → "es una diferencia con A, no la nota de B"; "B saca 1 punto más que el promedio de
   los grupos" → "la comparación es con la base, no con el promedio"; "cada hora vale 1 punto más en B" → "eso sería una interacción `horas:grupoB`".
6. **prop2**: "¿Qué términos incluye `y ~ a * b`?" Correcta: "`a`, `b` y `a:b`". Pistas: "solo `a:b`" → "eso es `y ~ a:b`"; "`a` y `b`" → "eso es `a + b`";
   "`a` por `b` multiplicados como números" → "dentro de una fórmula `*` es cruzar términos; la multiplicación numérica pide `I(a * b)`" (cita islr2 PDF 127).
7. **prop3**: "Ajustaste `glm(..., family = binomial)`. ¿Cómo obtienes probabilidades?" Correcta: "`predict(g, newdata, type = "response")`". Pistas:
   "`predict(g, newdata)`" → "da log-odds, la escala lineal"; "`fitted(g)` para filas nuevas" → "`fitted` solo da las filas de entrenamiento (aunque ya en
   probabilidad)"; "`plogis(coef(g))`" → "eso pasa los coeficientes por la sigmoide, no la combinación lineal de una fila".
   (Verificado: `fitted(g)` da 0.2906673, 0.7519988, 0.9573339 repetidos por grupo.)
8. **codigo1**, 9. **codigo2**, 10. **codigo3**: ver Vida real.
11. **formula**: la parte de memoria (`B.ordenar`), registrada con `C.reto("formula", ok)`.

## Memoria

**B.ordenar** (ajustar y predecir en R), piezas en orden:
1. `m <- lm(`
2. `nota ~ horas + grupo`
3. `, data = df)`
4. `predict(m, `
5. `newdata = data.frame(horas = 5, grupo = "B"))`

Resultado: 7.75. Distractores: `nota = horas + grupo` (la fórmula usa `~`), `, family = binomial` (eso es de `glm`), `type = "response"` (sobra en `lm`),
`horas^2` (no eleva).

**Tarjetas (8):**
1. ¿Qué significa `~`? → "Depende de": respuesta a la izquierda, predictores a la derecha. La fórmula describe; `lm` calcula con `data = df`.
2. ¿Qué es la matriz de diseño? → La tabla de números que de verdad entra al modelo: una columna de unos (intercepto), una por variable numérica y una por cada
   nivel no base de cada factor. La ves con `model.matrix`.
3. ¿Por qué un factor de 3 niveles da 2 columnas? → El primer nivel es la base y vive en el intercepto. Con las 3 columnas, su suma repite la columna de unos y la
   solución deja de ser única.
4. `a * b` frente a `a:b` → `a * b` = `a + b + a:b`. `a:b` es solo la columna producto (pendientes distintas por grupo).
5. ¿Cómo meto x al cuadrado? → `I(x^2)`. Dentro de una fórmula, `x^2` significa cruzar términos y deja solo `x`.
6. ¿Qué hace `predict` con `newdata`? → Arma la fila nueva con la misma receta (mismos niveles y base) y la multiplica por los coeficientes. Un nivel nuevo da error.
7. `lm` frente a `glm(family = binomial)` → Misma fórmula y misma matriz; `glm` pasa la combinación lineal por la sigmoide. `predict` da log-odds salvo `type = "response"`.
8. La fórmula en Python → `statsmodels.formula.api` (`smf.ols`, `smf.logit`) entiende la misma fórmula; scikit-learn no: matriz a mano con `get_dummies(drop_first=True)`,
   y `LogisticRegression` penaliza por defecto.

## Citas (14)

| id de fuente | página PDF | página impresa | sección | qué hay | cuándo leerla |
|---|---|---|---|---|---|
| islr2 | 122 | 111 | 3.6.2 Simple Linear Regression | la sintaxis `lm(y ∼ x, data)` con Boston (`medv ~ lstat`); `summary`, `coef`, `confint` siguen en 123-124 | Paso 2 |
| eda6 | 16 | 16 | Boxplot | `boxplot(formula = mpg ~ cyl, data = mtcars)`: la misma tilde fuera de un modelo | Paso 2 |
| islr2 | 130 | 119 | 3.6.6 Qualitative Predictors | Carseats y `ShelveLoc`: R crea las variables dummy solo; `lm(Sales ∼ . + Income:Advertising + Price:Age)` | Paso 3 y reto `codigo2` |
| islr2 | 131 | 120 | 3.6.6 Qualitative Predictors | `contrasts(ShelveLoc)`: la tabla de codificación (Bad es la base) | Paso 3 y destacado |
| islr2 | 127 | 116 | 3.6.3 y 3.6.4 Interaction Terms | `lm(medv ∼ . - age)`; `lstat * age` es atajo de `lstat + age + lstat:age` | Paso 4 y reto `prop2` |
| islr2 | 128 | 117 | 3.6.5 Non-linear Transformations | `I(lstat^2)` "since the ^ has a special meaning in a formula object"; `anova` de modelos anidados | Paso 4 |
| islr2 | 124 | 113 | 3.6.2 Simple Linear Regression | `predict(..., data.frame(lstat = c(5, 10, 15)), interval = "confidence")` y `"prediction"` | Paso 5 |
| rl1 | 19 | 19 | Regresión múltiple: forma matricial | $\mathbb Y = \mathbb X\beta + \epsilon$; errata: la matriz dibujada es $p \times n$ | Paso 5 |
| rl1 | 20 | 20 | Ecuaciones normales | $\hat\beta = (\mathbb X^T\mathbb X)^{-1}\mathbb X^T\mathbb Y$: lo que resuelve la Vida real | Paso 5 y Vida real |
| islr2 | 183 | 172 | 4.7.2 Logistic Regression | `glm()` es como `lm()` más `family = binomial` (Smarket) | Paso 6 |
| islr2 | 185 | 174 | 4.7.2 Logistic Regression | `predict(glm.fits, type = "response")` para probabilidades; `contrasts(Direction)` dice qué nivel es el 1 | Paso 6 y reto `codigo1` |
| rl2diapo | 8 | (citar por PDF) | Ejemplo numérico del puente | $\gamma = -4 + 2 \cdot 2.5 = 1$, $p \approx 0.731$: la cuenta que hace `type = "response"` | Paso 6 |
| islr2 | 198 | 187 | 4.7.7 Poisson Regression | `all.equal(predict(mod.lm), predict(mod.lm2))`: otra codificación, mismas predicciones; `glm(family = poisson)` | Destacado (profundizar de `relevel`) y paso 6 (otras familias) |
| rl1 | 4 | 4 | Objetivos | los objetivos de la unidad nombran scikit-learn y statsmodels: la conexión con el paso de Python | Paso 7 |

Son 14 (el máximo). Si hace falta liberar un hueco, la candidata de reemplazo es rl2 p.6 (log-odds, $\ln\frac{p}{1-p} = \gamma$) en el paso 6 en lugar de rl2diapo p.8.
`rl2diapo` es de tipo PDF de diapositivas con numeración irregular: `data-pag` = página del PDF, sin `data-pimp`.

Verificado por mí en esta sesión con `pdftotext` sobre `ISLRv2_corrected_June_2023.pdf`: PDF 122 (`lm(y ∼ x, data)`, encabezado impreso 111), 124 (`predict` con
`interval = "confidence"` y `"prediction"`, impresa 113), 127 (`. - age`, 3.6.4, `lstat * age`), 128 (3.6.5, `I()` y el texto sobre `^`, impresa 117), 130 (3.6.6, impresa 119),
131 (`contrasts(ShelveLoc)`), 183 (4.7.2, `family = binomial`), 185 (`type = "response"`, `contrasts(Direction)`), 197-198 (`contr.sum`, `all.equal(predict(...))`,
`family = poisson`; impresa 187 en la 198). islr2: impresa = PDF − 11. `rl1` p.4, 19, 20, 21; `rl2` p.6; `rl2diapo` p.8; `eda6` p.16: tomados del mapa verificado
(`brain/fuentes/sm142004-ud1.md`, `sm142004-ud2.md`, `sm142002-eda.md`), no reabiertos.

## Erratas del material para decir con naturalidad

- `rl1` p.19 (y diapositiva `rl1diapo` p.33): la "matriz muestral" se dibuja con una fila por variable y una columna por observación ($p \times n$) y luego se usa
  como $\mathbb X$ en $\mathbb Y = \mathbb X\beta$, que exige $n \times p$. `model.matrix` muestra la forma correcta: una fila por estudiante (9 × 4). Paso 5.
- `rl1` p.21: "t de Student con n − p grados de libertad (p variables predictoras)", pero la $s$ divide entre n − 2 en la simple. R cuenta el intercepto:
  9 − 4 = 5 grados de libertad en `summary`. Paso 5.
- `rl2` p.10, `rl2diapo` p.14-15: proponen "descenso del gradiente" para el máximo de la verosimilitud (es ascenso, o descenso sobre su negativo). `glm` usa
  otro método (Fisher scoring, "Number of Fisher Scoring iterations: 5" en `summary`). Mencionarlo solo en un `details.profundizar` del paso 6 si cabe.
- ISLR2 no tiene erratas en estas páginas. Aviso del propio libro (p. 13, PDF 24): con versiones nuevas de R los resultados pueden no coincidir con los impresos.
- `pdftotext` convierte `~` en `∼` en ISLR: en la página escribir siempre `~`.

## Riesgos y notas para quien construye

- **Todas las librerías se pudieron ejecutar en esta máquina**: NumPy 2.1.3, pandas 2.2.3, statsmodels 0.14.4 (con patsy 1.0.1), scikit-learn 1.6.1, R 4.6.1
  (R base: `lm`, `glm`, `model.matrix`, `predict` no necesitan paquetes). No hay cuentas hechas solo a mano.
- R imprime residuos de 1e−16 en lugar de 0 en `summary(m2)`; en la página mostrar la tabla de coeficientes y el pie, no el bloque `Residuals`.
- Orden de columnas distinto: R `(Intercept) horas grupoB grupoC`; patsy `Intercept grupo[T.B] grupo[T.C] horas`. El visual en modo Python respeta el de patsy.
- `predict` de un modelo de statsmodels con un nivel nuevo da un `PatsyError` largo y poco claro; para la trampa del nivel nuevo usar el mensaje de R
  (`factor grupo has new level D`).
- La logística con `nota > 5` es intencional (sin separación). No cambiar el umbral.
- `niveles[-1]` significa cosas opuestas en R y en Python: aprovecharlo en la narración y en la variante V3 del reto `error`, pero no confundirlo en el código bueno.
- No meter teoría de inferencia (error estándar, p) ni de máxima verosimilitud: enlazar las páginas por título.
- `glm(aprobado ~ horas + grupo, family = binomial)` da coeficientes de grupo ~0 (2.9e−16): no usarlo como ejemplo de dummies en logística; si se quiere, decir que los
  tres grupos aprueban 2 de 3.
