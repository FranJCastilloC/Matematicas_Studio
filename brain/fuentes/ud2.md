# Mapa de citas: UD2 Teoría de la estimación (SM142001, máster IA UAX)

A = `.../UD2. Teoría de la estimación/SM142001_MUIA_UD2_CONTENIDO TEÓRICO-2.pdf` (31 páginas; PDF = impresa; p.1 portada, p.2 índice, p.31 contraportada sin número).
El índice de p.2 coincide con las páginas reales. Las secciones se numeran 3.x aunque el título dice "Tema 3" dentro de la Unidad 2.

| Tema | pág. PDF | Notas |
|---|---|---|
| Introducción (historia: Pascal y Fermat, inferencia desde muestra) | 3 | sin fórmulas |
| Objetivos | 4 | |
| Probabilidad vs estimación | 5 | dos listas de "principios": probabilidad modela la incertidumbre; estimación infiere parámetros poblacionales desde una muestra (estadística paramétrica). Menciona estimadores puntuales, IC y error estándar sin definirlos |
| Relación probabilidad-estimación (sesgo, eficiencia, consistencia, distribuciones de muestreo) | 6 | solo prosa, en lista de 3 puntos |
| Probabilidad y estimación en IA | 6-8 | Tabla 1 (p.7) aplicabilidad de la probabilidad; Tabla 2 (p.7) de la estimación (incluye "reducción de sesgo y varianza"); Tabla 3 (p.8) GANs, GPT, supervisado/no supervisado |
| Experimento aleatorio, espacio muestral, evento | 8 (también 5) | espacio muestral Ω; evento = subconjunto de Ω. Sin operaciones de conjuntos (unión, intersección, complemento) |
| Definición de probabilidad | 8 | valor entre 0 y 1 interpretado como frecuencia relativa; sin axiomas de Kolmogórov |
| Ley de la probabilidad total | 9 | $P(B)=\sum_{i=1}^{n} P(A_i\cap B)=\sum_{i=1}^{n}P(A_i)P(B\mid A_i)$ con "sistema completo de sucesos" $A_1,\dots,A_n$; luego otra versión con los papeles cambiados: $P(A)=P(A\mid B_1)P(B_1)+\dots+P(A\mid B_n)P(B_n)$ |
| Teorema de Bayes ("Ley de Bayes") | 9 | $P(A\mid B)=\dfrac{P(B\mid A)\,P(A)}{P(B)}$; sin ejemplo numérico, sin denominador expandido con probabilidad total |
| Ley de los grandes números | 9-10 | solo enunciado verbal (p.9): la media muestral se aproxima a la poblacional "con una alta probabilidad"; usos en ML en p.10. Sin fórmula ni distinción débil/fuerte |
| Teorema central del límite | 10-11 | $\bar X_n=\frac1n\sum_{i=1}^n x_i$, $x_i$ iid con media $\mu$ y varianza $\sigma^2$; $\dfrac{\bar X_n-\mu}{\sigma/\sqrt n}\xrightarrow{d}N(0,1)$; varianza $\sigma^2/n$. Ilustración 1 (p.11): distribución muestral inicial y con más datos. Recuadro "Ten en cuenta" p.11 |
| Regla del producto (introducción) | 11 | prosa: independientes vs dependientes |
| Regla del producto, eventos independientes | 12 | $P(A\cap B)=P(A)\cdot P(B)$ |
| Regla del producto, eventos dependientes | 12 | $P(A\cap B)=P(A)\cdot P(B\mid A)$ |
| Probabilidad condicional | 12 (uso en 9) | solo descripción verbal de $P(B\mid A)$ ("probabilidad de que ocurra B dado que ya ocurrió A"); nunca se da $P(A\mid B)=P(A\cap B)/P(B)$ |
| Reglas de multiplicación en ML (redes y clasificadores bayesianos) | 12 | |
| Variable aleatoria discreta y continua | 12-13 | título "Variales aleatorias"; discreta = valores finitos o contables (cola, dado); continua = cualquier valor en un intervalo (altura, temperatura). Sin definición formal como función $X:\Omega\to\mathbb R$ |
| PMF ("función de probabilidad", "función de masa de probabilidad") | 12, 13-15 | notación $f(k)=P[X=k]$ |
| PDF ("función de densidad de probabilidad") | 12, 16-17 | p.12: probabilidad de intervalos, no de puntos; notación $f(x)$ |
| Distribución de probabilidad (definición) | 13 | "función que asigna a cada resultado posible ... una probabilidad" |
| Uniforme discreta | 13-14 | $f(k)=P[X=k]=\frac1n,\ k=1,\dots,n$; $\mu=\frac{n+1}{2}$, $\sigma^2=\frac{n^2-1}{12}$. Ilustración 2 (p.14) |
| Bernoulli | 14 | $f(k)=p^k(1-p)^{1-k},\ k=0,1$; $\mu=p$, $\sigma^2=p(1-p)$. Ilustración 3 |
| Binomial | 15 | $f(k)=\binom nk p^k(1-p)^{n-k}=\frac{n!}{k!(n-k)!}p^k(1-p)^{n-k}$; $\mu=np$, $\sigma^2=np(1-p)$. Ilustración 4 |
| Poisson | 15-16 | $f(k)=e^{-\lambda}\frac{\lambda^k}{k!}$; $\mu=\lambda$, $\sigma^2=\lambda$; λ = "tasa media de ocurrencia". Ilustración 5 (p.16) |
| Uniforme continua | 16 | $f(x)=\frac1{b-a}$ si $a\le x\le b$, 0 en otro caso. Sin media ni varianza. Ilustración 6 |
| Exponencial | 17 | $f(x)=\lambda e^{-\lambda x}$ para $x\ge0$, 0 si $x<0$. Sin media ni varianza. Ilustración 7 |
| Normal | 17-18 | $f(x)=\frac{1}{\sigma\sqrt{2\pi}}e^{-\frac{(x-\mu)^2}{2\sigma^2}}$, soporte $\mathbb R$; μ y σ son media y desviación típica. Ilustración 8 (p.17); recuadro sobre TCL y normal (p.18) |
| Estimación puntual, estimador | 18 | estimador = "función de los datos muestrales" que aproxima un parámetro; sin notación $\hat\theta$ |
| Insesgadez (sesgo) | 18 | "valor esperado igual al parámetro"; ejemplo: la media muestral es insesgada. Sin fórmula $E[\hat\theta]-\theta$ |
| Eficiencia, suficiencia | 18 | solo definiciones verbales |
| Fundamentos de la estimación en IA | 18-19 | Tabla 4 (cruza p.18-19): MLE, L1/L2, inferencia bayesiana, IC, descenso de gradiente, MSE y log-verosimilitud, pruebas de hipótesis |
| Máxima verosimilitud (MLE), definición | 19-20 | prosa: parámetros que maximizan la probabilidad de los datos observados |
| Propiedades del MLE (consistencia, eficiencia asintótica) | 20, 21 | p.20: "consistentes, insesgados y asintóticamente eficientes" en muestras grandes (Wasserman); p.21 "Ventajas": consistencia y eficiencia |
| MLE en regresión logística, GMM, clasificación probabilística, redes neuronales | 20 | log-loss como extensión del MLE |
| Proceso MLE: verosimilitud, log-verosimilitud, maximización, convergencia | 21 | Ilustración 9: $L(\theta_n)=P(X=x_1,\dots,x_n\mid\theta)=\prod_{i=1}^n P(x_i\mid\theta)$; $\log L(\theta)=\sum_{i=1}^n\log P(x_i\mid\theta)$; $\frac{\partial\log L(\theta)}{\partial\theta}=0$; actualización $\theta_{t+1}=\theta_t+\alpha\frac{\partial\log L(\theta)}{\partial\theta}$. Sin ejemplo resuelto (ni Bernoulli ni normal) |
| Ventajas del MLE en ML | 21 | flexibilidad, consistencia y eficiencia, interpretabilidad |
| Regresión (introducción, MSE) | 22 | MSE como función de pérdida, sin fórmula |
| Regresión lineal | 22 | $y=\beta_0+\beta_1x+\beta_nx_n+\varepsilon$ (ver erratas); OLS y MLE nombrados, sin derivación ni ecuaciones normales; supuestos: linealidad, independencia, homocedasticidad, normalidad de errores |
| Regresión logística | 22-23 | $P(Y=1\mid X)=\dfrac{1}{1+e^{-(\beta_0+\beta_1X_1+\dots+\beta_nX_n)}}$ |
| Función sigmoide | 23 | $S(x)=\frac1{1+e^{-x}}$; recuadro con propiedades e "Ilustración 9" (gráfica) |
| Interpretación de coeficientes (lineal y logística, log-odds) | 23-24 | |
| Odds | 24 | $\text{odds}=\frac{p}{1-p}$; casos >1, <1, =1 |
| Regularización (introducción) | 24 | penalización en la función de pérdida |
| Lasso (L1) | 24-25 | p.25: $\text{Función de pérdida }L1=\text{Error de predicción}+\lambda\sum_{i=1}^n\lvert\beta_1\rvert$ (ver erratas); cita Tibshirani (1996) |
| Ridge (L2) | 25 | $\text{Función de pérdida }L2=\text{Error de predicción}+\lambda\sum_{i=1}^n\beta_i^2$; λ como hiperparámetro de sesgo-varianza |
| Intervalos de confianza | 25-26 | $\bar x\pm Z\frac{\sigma}{\sqrt n}$; Z = "valor crítico asociado al nivel de confianza", nivel usual 95 %. Sin $z_{\alpha/2}$, sin 1.96, sin versión t |
| Contraste de hipótesis, p-valor | 26 | $H_0$ y $H_1$; p-valor y t-student solo nombrados, sin definición ni ejemplo |
| Estimación bayesiana (posterior, prior, verosimilitud, evidencia) | 26 | $P(\theta\mid D)=\dfrac{P(\theta\mid D)P(\theta)}{P(D)}$ (ver erratas); $P(D\mid\theta)$ verosimilitud, $P(\theta)$ previa, $P(D)$ marginal |
| MAP y media posterior | 26 | solo nombrados |
| Aplicaciones y ventajas de la perspectiva bayesiana | 26-27 | naive Bayes, redes bayesianas, regresión bayesiana, GMM |
| Conclusiones | 28 | |
| Recomendaciones y material de ampliación | 29 | enlace a "Aprendizaje Automático 1: Ajuste de modelos" (ISGlobal) |
| Referencias | 30 | Casella & Berger, Wasserman, Rice, Hastie et al., Bishop, Murphy, Stephens (apuntes MLE de Imperial) |

## Erratas e inconsistencias

- **p.26, Bayes para parámetros**: escribe $P(\theta\mid D)=\frac{P(\theta\mid D)P(\theta)}{P(D)}$. El numerador debe ser $P(D\mid\theta)P(\theta)$; la propia lista "Donde" debajo define $P(D\mid\theta)$, que no aparece en la fórmula.
- **p.20, "Regresión Logística"**: el párrafo describe la regresión lineal (relación "mediante una línea recta", minimizar "la suma de los errores cuadrados") y luego habla de clasificar con MLE. Mezcla las dos regresiones.
- **p.20, propiedades del MLE**: afirma que los estimadores MLE son "consistentes, insesgados y asintóticamente eficientes". El MLE no es insesgado en general (la varianza MLE con divisor $n$ está sesgada); lo correcto es asintóticamente insesgado.
- **p.21, Ilustración 9**: la actualización $\theta_{t+1}=\theta_t+\alpha\,\partial\log L/\partial\theta$ es ascenso de gradiente, pero el texto dice "descenso de gradiente". Además $L(\theta_n)$ lleva un subíndice $n$ que luego desaparece ($\log L(\theta)$), y la factorización en producto supone observaciones independientes sin decirlo. "Fuente: Daptado".
- **p.22, regresión lineal**: $y=\beta_0+\beta_1x+\beta_nx_n+\varepsilon$ salta del término 1 al $n$ (faltan $\beta_2x_2+\dots$) y usa $x$ sin subíndice, aunque la lista de variables dice $x_1,\dots,x_n$.
- **p.25, Lasso**: $\lambda\sum_{i=1}^n\lvert\beta_1\rvert$ suma siempre $\beta_1$; debe ser $\lvert\beta_i\rvert$. En L1 y L2 el índice llega a $n$, la misma letra que el tamaño de muestra en otras páginas; normalmente no se penaliza $\beta_0$, y el documento no lo aclara.
- **p.9, probabilidad total**: la sumatoria mezcla $A_I$, $I=1$ y $i=1$. En la misma página, la primera fórmula calcula $P(B)$ con la partición $A_i$ y la segunda calcula $P(A)$ con la partición $B_i$: los papeles de A y B se invierten.
- **p.10**: "Matamáticamente, el RCL" (debe ser TCL). Las variables van en minúscula $x_i$ pero la media en mayúscula $\bar X_n$.
- **p.17, exponencial**: la segunda rama dice "$\lambda e^{-\lambda x}\ \ge 0$" sin "si $x$". No da media $1/\lambda$ ni varianza $1/\lambda^2$; tampoco da media y varianza para la uniforme continua (p.16).
- **p.18 y p.11, alcance del TCL**: p.18 dice que la suma de variables independientes tiende a la normal "independientemente de su distribución inicial", sin pedir varianza finita ni idéntica distribución (p.10 sí dice "bajo ciertas condiciones"). El recuadro de p.11 dice que los supuestos de normalidad de la regresión son "justificables gracias al TCL"; el TCL habla de la media muestral, no de que los datos o los residuos sean normales.
- **p.24, odds**: dice que los coeficientes transformados exponencialmente se interpretan como el efecto en la probabilidad; $e^{\beta}$ es una razón de odds (odds ratio), no un efecto en la probabilidad.
- **p.23**: "Ilustración 9" se repite (ya se usó para el proceso MLE en p.21).
- **p.25, IC**: $\bar x\pm Z\sigma/\sqrt n$ supone σ conocida sin decirlo; no hay $z_{\alpha/2}$ ni el valor 1.96.
- **Notación que cambia**: PMF como $f(k)=P[X=k]$ con corchetes (p.13-15), probabilidades con paréntesis en el resto; "desviación típica" (p.17) y "desviación estándar" (p.26); el mismo símbolo $n$ es tamaño de muestra, número de valores de la uniforme, número de ensayos de la binomial y número de coeficientes.
- **Erratas de texto**: "Uniforma" (p.13), "Bernouilli" (p.14), "Variales" (p.12), "Normall" (p.17), "Máxíma" (p.21), "Bayessianos" (p.26), "conb" (p.9), "enteriormente" (p.6), "so de" por "uso de" (p.19, Tabla 4).

## No aparece

- Regla de la suma (unión): $P(A\cup B)=P(A)+P(B)-P(A\cap B)$, ni para excluyentes.
- Definición de probabilidad condicional como cociente $P(A\cap B)/P(B)$; definición formal de independencia.
- Operaciones de conjuntos, complemento $P(A^c)=1-P(A)$, axiomas de probabilidad.
- CDF (función de distribución acumulada).
- Esperanza $E[X]$ y varianza $\mathrm{Var}(X)$ como definiciones generales (suma o integral); solo aparecen μ y σ² de cada distribución, y "valor esperado" en una frase (p.18).
- Media y varianza de la uniforme continua y de la exponencial.
- Fórmula del sesgo $E[\hat\theta]-\theta$, ECM de un estimador, descomposición sesgo-varianza, varianza muestral con $n-1$, error estándar definido.
- Ejemplo resuelto de MLE (Bernoulli, normal, Poisson); demostración de que el MLE de la media normal es $\bar x$.
- Regresión lineal como MLE con errores normales (equivalencia OLS = MLE); log-loss / entropía cruzada escrita como fórmula; MSE escrito como fórmula.
- Regularización como prior (Ridge = MAP con prior normal, Lasso = prior de Laplace).
- Fórmula de MAP; distribuciones conjugadas (Beta-Bernoulli); ejemplos numéricos de Bayes.
- Definición del p-valor, nivel de significación α, errores tipo I y II, estadístico t, IC con t de Student.
- Ley de los grandes números en fórmula.
- Ejemplos numéricos en general: el documento no resuelve ningún ejercicio.
