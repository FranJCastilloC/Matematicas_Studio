# Mapa de citas: UD4 Estadística bayesiana (SM142001, máster IA UAX)

A = `.../UD4. Estadística bayesiana/UD4 Contenido Teórico.pdf` (30 páginas; las páginas no llevan número impreso, pero el índice de p.2 coincide con las del PDF, así que PDF = impresa; p.1 portada, p.2 índice, p.30 contraportada "GRACIAS").
Ruta completa: `/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142001 - Matematicas y estadistica para la IA/UD4. Estadística bayesiana/UD4 Contenido Teórico.pdf` ("SEMESTRE 1 " lleva un espacio al final).
Índice (p.2), verificado: 1 Introducción p.3, 2 Objetivos p.4, 3 Conceptos fundamentales p.5 (3.1 Bayes p.5, 3.2 frecuentista vs bayesiano p.6), 4 Conceptos clave p.8, 5 Herramientas avanzadas p.10, 6 Aplicaciones p.17, 7 Visualización p.20, 8 Desafíos p.25, 9 Conclusiones p.26, 10 Mapa conceptual p.28, 11 Bibliografía p.29.
Todas las fórmulas y todo el código son imágenes: pdftotext los devuelve vacíos. Se leyeron renderizando cada página.
Ejemplos numéricos resueltos: test médico (p.5-6), spam (p.19), árbol de decisión sin calcular (p.22), Beta-Binomial en código (p.24).

| Tema | pág. PDF | Notas |
|---|---|---|
| Introducción: parámetros como distribuciones que se actualizan; 4 rasgos (prior, actualizar, flexibilidad, decisiones robustas) | 3 | prosa |
| Historia (Bayes 1763, Laplace, Monte Carlo, Gibbs, Hamiltonian MC) y usos en IA | 4 | ver erratas por 1763 |
| Objetivos (aplicar Bayes, modelos en Python, aplicaciones en IA) | 4 | |
| Teorema de Bayes y sus componentes | 5 | $P(H\mid D)=\frac{P(D\mid H)\cdot P(H)}{P(D)}$; posterior, verosimilitud, prior, marginal; $P(D)=\sum_i P(D\mid H_i)\cdot P(H_i)$ |
| Ejemplo del test médico | 5 | $P(H)=0.01$, $P(D\mid H)=0.95$, $P(D)=0.05$; $P(H\mid D)=\frac{0.95\cdot0.01}{0.05}=0.19$: "El 19% de los pacientes con un test positivo realmente tienen la enfermedad". $P(D)$ se da, no se calcula (ver erratas) |
| Código Python del test médico | 6 | `P_H = 0.01`, `P_D_given_H = 0.95`, `P_D = 0.05`, `P_H_given_D = (P_D_given_H * P_H) / P_D` |
| Propiedades del enfoque bayesiano (adaptación dinámica, conocimiento previo, unificación) | 6 | |
| Frecuentista vs bayesiano: Tabla 1 | 6-7 | intro (p.6); Tabla 1 (p.7): frecuentista = parámetros fijos, probabilidad como límite de frecuencia relativa; bayesiano = parámetros como variables aleatorias con distribución a priori y a posteriori |
| Ventajas y limitaciones de cada enfoque | 7-8 | frecuentista (p.7): ANOVA, pruebas t; bayesiano (p.8): coste computacional, sesgo del prior |
| Ejemplo comparativo: diagnóstico médico (intervalo de confianza vs prior y posterior) | 8 | solo verbal |
| Prior $P(H)$ | 8 | ej.: 5 % de usuarios sospechosos, $P(H)=0.05$ |
| Posterior $P(H\mid D)$ | 8-9 | definición (p.8), ejemplo de usuario sospechoso (p.9) |
| Distribuciones conjugadas | 9 | "misma forma" la previa y la posterior; Beta es conjugada de la binomial. Sin fórmula de actualización (está solo en el código de p.24) |
| Ejemplo visual: prior uniforme entre clases | 9 | verbal |
| Verosimilitud $P(D\mid H)$ | 9 | "test con 95% de precisión, entonces $P(D\mid H)=0.95$" (ver erratas) |
| Marginalización y normalización | 9 | $P(D)=\sum_i P(D\mid H_i)\cdot P(H_i)$; costoso en alta dimensión; Monte Carlo para estimarlo |
| Redes bayesianas | 9-10 | grafo dirigido acíclico, nodos = variables, aristas = dependencias (p.9); distribución condicional dada por los padres, ej. síntomas y enfermedades (p.10). Sin factorización escrita |
| Herramientas avanzadas: MCMC y Gibbs (panorama) | 10 | "Muestreo de Monte Carlo (MCMC)" (ver erratas); nombra Metropolis-Hastings y Hamiltonian Monte Carlo |
| Qué es MCMC | 11 | muestras de la posterior sin calcular integrales; cadena de Markov (el estado siguiente depende solo del actual; converge a la distribución estacionaria = posterior); Monte Carlo (muestras aleatorias para aproximar integrales). Figura "MCMC" $x_0\to x_1\to x_2\cdots x_B\to x_{B+1}$ sobre $p(x)$ |
| Metropolis-Hastings: idea | 11 | propuesta desde una distribución condicional, aceptada o rechazada |
| Metropolis-Hastings: pasos | 12 | 1) estado inicial $\theta_0$; 2) proponer $\theta'$ desde $q(\theta'\mid\theta)$; 3) $r=\min\left(1,\frac{P(\theta')\cdot q(\theta\mid\theta')}{P(\theta)\cdot q(\theta'\mid\theta)}\right)$; 4) aceptar con probabilidad $r$, si no $\theta_{t+1}=\theta_t$; 5) repetir |
| Muestreo de Gibbs | 12 | un parámetro a la vez: inicializar $\theta_1,\dots,\theta_k$; $\theta_i\sim P(\theta_i\mid\theta_{-i},\text{datos})$; repetir hasta convergencia |
| Código Metropolis-Hastings y figura "MCMC vs. Distribución Verdadera" | 12 | bajo el título "Clasificación de texto con LDA", pero el código es un ejemplo de juguete: `posterior(theta) = np.exp(-0.5 * (theta - 5)**2)`, `n_samples=10000`, `proposal_width=1.0`, `theta_current = 0`, propuesta `np.random.normal(0, proposal_width)`, `acceptance_ratio = min(1, posterior(theta_proposed) / posterior(theta_current))`. Histograma centrado en 5 (ver erratas) |
| Ventajas y limitaciones de MCMC | 13 | alta dimensión, sin integrales, flexible; convergencia lenta, depende de la propuesta, costoso |
| Modelos jerárquicos (HBayes): idea, shrinkage, niveles individual, de grupo y global | 13 | ej. hospitales y escuelas; "compartir información entre grupos relacionados (shrinkage)"; mejora grupos pequeños |
| Ejemplo de hospitales por niveles | 14 | global = efectividad promedio; grupo = variabilidad entre hospitales; individual = pacientes |
| Formalización jerárquica | 14 | datos $y$, parámetros "individuales" $\theta_i$ "específicos de cada grupo", nivel superior $\phi$; $y_i\sim P(y_i\mid\theta_i)$, $\theta_i\sim P(\theta_i\mid\phi)$, $\phi\sim P(\phi)$; posterior $P(\phi,\theta\mid y)\propto P(y\mid\theta)P(\theta\mid\phi)P(\phi)$ |
| Jerárquicos en IA: recomendación personalizada | 14 | tres niveles |
| Jerárquicos: predicción en salud | 15 | tres niveles |
| Ventajas y limitaciones de los jerárquicos | 15 | |
| Bayes en ML: Naive Bayes, procesos gaussianos, redes neuronales bayesianas | 15 | una línea cada uno; anuncia "Clasificación de dígitos MNIST con procesos gaussianos" sin desarrollarlo (ver erratas) |
| Características del enfoque bayesiano en ML (prior, incertidumbre, regularización natural) | 16 | "la distribución previa actúa como un mecanismo de regularización" |
| Aplicaciones en ML: clasificación, regresión bayesiana, LDA, optimización bayesiana, jerárquicos | 16 | regresión lineal bayesiana: coeficientes como distribuciones; LDA "modelo generativo" de tópicos; optimización bayesiana para hiperparámetros. Todo verbal, sin fórmulas |
| Caso práctico: Naive Bayes con Iris | 16 | supuesto de independencia condicional dada la clase; `GaussianNB`, `test_size=0.3`, `random_state=42`; salida "Precisión del modelo Naive Bayes: 0.9777777777777777" (es exactitud, 44 de 45) |
| Gráfica de probabilidades predichas por clase | 17 | `nb_model.predict_proba(X_test)`, una línea por clase (setosa, versicolor, virginica) a lo largo de los 45 ejemplos; sugiere histogramas prior/posterior y trazas MCMC; herramientas `arviz` y `pgmpy` |
| Aplicaciones prácticas: diagnóstico y genómica | 17-18 | |
| Recomendación, finanzas, visión por computadora, NLP (spam con Naive Bayes), hiperparámetros | 18 | |
| Hiperparámetros (cont.), robótica (SLAM), investigación de mercados | 19 | |
| Ejemplo práctico de spam | 19 | $P(H=1)=0.2$; en el código `P_word_given_spam = 0.7`, `P_word_given_not_spam = 0.1`; marginal $0.7\cdot0.2+0.1\cdot0.8=0.22$; salida "Probabilidad de Spam dado la palabra: 0.64" ($0.14/0.22=0.636$, correcto) |
| Visualización: distribuciones previa y posterior | 20 | figura "Bayesian Update of Conversion Rate Beliefs": previa (discontinua) con media 0.4 y pico de densidad 2.0; posterior (sólida) con media 0.6 y pico 4.0. Sin datos ni fórmula de la actualización (ver erratas) |
| Intervalos de credibilidad | 21 | figura de tasa de éxito de marketing: intervalo del 95 % con "Lower Bound: 0.73", "Upper Bound: 0.92", media posterior cerca de 0.83; "el parámetro tiene un 95% de probabilidad de encontrarse" en el rango. No dice si es de colas iguales o HPD |
| Diagramas de decisión | 21-22 | definición (p.21); árbol "Bayesian Decision Tree for Marketing Campaign" (p.22): invertir con costo −50, éxito 70 % con pago +150, fracaso 30 % con pago −50, no invertir pago 0. No calcula el valor esperado (ver erratas) |
| Mapas de calor y superficies de probabilidad | 22-23 | definición (p.22); figura de normal bivariada con correlación positiva, ejes "Gene Mutation Parameter 1 y 2", densidad máxima cerca de 0.19 (p.23) |
| Gráficos de trazas MCMC | 23-24 | definición (p.23); figura de dos parámetros, 1000 iteraciones; "las líneas deberían estabilizarse" si convergió (p.24). Ver erratas: las cadenas de la figura no convergen |
| Código Beta-Binomial (previa y posterior) | 24 | `alpha_prior, beta_prior = 2, 2`, `clics, impresiones = 20, 100`, `alpha_post = alpha_prior + clics`, `beta_post = beta_prior + (impresiones - clics)` → Beta(22, 82); figura: previa Beta(2,2) con pico 1.5 en 0.5, posterior con pico cerca de 10 en 0.2. Única actualización conjugada del documento |
| Desafíos: elección de la previa, complejidad computacional, escalabilidad, interpretación (confianza vs credibilidad) | 25 | |
| Dependencia de métodos numéricos, sensibilidad a los datos, conocimiento técnico | 26 | |
| Conclusiones | 26-27 | preguntas de reflexión (p.26); MCMC y jerárquicos (p.27) |
| Mapa conceptual | 28 | |
| Bibliografía y software (PyMC, Stan, pgmpy, TensorFlow Probability) | 29 | ver erratas |

## Erratas e inconsistencias

- **p.1**: "Nombre de la asignatura" queda como relleno en la portada. Título "Estadísticas Bayesianas" en plural (lo normal es "Estadística bayesiana").
- **p.4, historia**: "En 1763, Thomas Bayes desarrolló su célebre teorema". 1763 es el año de publicación póstuma (Bayes murió en 1761 y Richard Price presentó el ensayo).
- **p.5, test médico**: $P(D)=0.05$ se da como dato en lugar de calcularse con la fórmula de la marginal que el propio documento escribe justo arriba. Es coherente, pero esconde que implica una tasa de falsos positivos $P(D\mid\neg H)=\frac{0.05-0.95\cdot0.01}{0.99}\approx0.041$. Para la página conviene hacer el cálculo completo $P(D)=0.95\cdot0.01+P(D\mid\neg H)\cdot0.99$.
- **p.9, verosimilitud**: "Si el test tiene un 95% de precisión, entonces $P(D\mid H)=0.95$". $P(D\mid H)$ es la sensibilidad. La precisión (valor predictivo positivo) es $P(H\mid D)$, que en el ejemplo de p.5 vale 0.19: justo la confusión que el teorema de Bayes deshace.
- **p.10**: "Muestreo de Monte Carlo (MCMC)": Monte Carlo y MCMC no son lo mismo (MCMC es Monte Carlo con muestras de una cadena de Markov). Gibbs aparece al lado como si fuera otra cosa y en la línea siguiente como "un tipo de MCMC".
- **p.12, ejemplo de MCMC**: el título anuncia "Clasificación de texto con LDA", pero el código muestrea una normal de juguete $\propto e^{-\frac12(\theta-5)^2}$; LDA no aparece.
- **p.12, curva "Posterior Verdadero"**: se normaliza con `posterior(x) / np.sum(posterior(x))` sobre 1000 puntos, sin multiplicar por el paso $dx=0.01$. La curva queda unas 100 veces más baja (pico ≈ 0.004 en lugar de ≈ 0.40) y en la figura se ve plana sobre el eje, sin poder compararse con el histograma. Además no hay periodo de calentamiento (burn-in) aunque la cadena arranca en 0, lejos de la moda en 5. El cociente de aceptación omite $q$ porque la propuesta es simétrica (es Metropolis, no Metropolis-Hastings general), pero no se dice.
- **p.11, figura MCMC**: marca $x_B$ y $x_{B+1}$ (fin del calentamiento) con otro color, pero el texto no explica el burn-in.
- **p.13-14, jerárquicos**: el texto habla de tres niveles (individual, grupo, global), pero la formalización tiene solo dos niveles de parámetros ($\theta_i$ y $\phi$). A $\theta_i$ lo llama "parámetros individuales" y en la misma línea "específicos de cada grupo". El índice $i$ sirve a la vez para observaciones ($y_i$) y para grupos ($\theta_i$), y la posterior pasa a escribir $\theta$ y $y$ sin índice.
- **p.15**: "Ejemplo práctico: Clasificación de dígitos MNIST con procesos gaussianos en scikit-learn" se anuncia y no se desarrolla; la página siguiente pasa a otra sección y el caso práctico que sí aparece es Naive Bayes con Iris.
- **p.16**: la salida dice "Precisión del modelo Naive Bayes" para `accuracy_score`, que es exactitud.
- **p.17**: la gráfica une con líneas las probabilidades de 45 ejemplos de prueba no relacionados entre sí (el eje x es el índice del ejemplo); un gráfico de barras apiladas o de puntos sería lo correcto. Son posteriores de clase $P(C\mid x)$, no la "distribución posterior de las predicciones".
- **p.20, figura previa y posterior**: la previa parece una normal (media 0.4, densidad ≈ 0.27 en 0, no cero) recortada a $[0,1]$, no una Beta, aunque p.9 recomienda la Beta para tasas binomiales; recortada así no integra 1 en ese intervalo. No se dan los datos (clics, visitas) que llevan de la previa a la posterior.
- **p.22, árbol de decisión**: las ramas de decisión llevan probabilidades ("Invest (50%)", "Don't Invest (50%)"): una decisión se elige, no se sortea. No se calcula el valor esperado y queda ambiguo si el costo −50 ya está dentro de los pagos: con el costo aparte, $E[\text{invertir}]=0.7\cdot150+0.3\cdot(-50)-50=40>0$; si el −50 del fracaso ya es el costo, $0.7\cdot(150-50)+0.3\cdot(-50)=55$. En los dos casos conviene invertir, pero la página debería fijar una lectura.
- **p.24, trazas**: la figura que ilustra cómo validar la convergencia muestra cadenas que no convergen (el parámetro 1 deriva entre 2 y 24 y el parámetro 2 sube de forma sostenida de ≈ 5 a ≈ 40). El texto no lo comenta. Sirve como contraejemplo, no como ejemplo.
- **p.24, código**: el texto dice "Matplotlib, Seaborn y ArviZ", pero el código solo usa matplotlib y `scipy.stats.beta`. `np.linspace(0, 1, 100)` deja la posterior dentada en el pico.
- **p.29, bibliografía**: "McCulloch, Robert E. (2015). Machine Learning: A Probabilistic Perspective. Taylor & Francis": ese libro es de Kevin P. Murphy (MIT Press, 2012). "Gareth, J." es James, G. (nombre y apellido invertidos) y el subtítulo es "with Applications in R". Falta un texto bayesiano de referencia (Gelman et al., *Bayesian Data Analysis*). PyMC3/PyMC4 está desactualizado (hoy es PyMC).
- **Erratas de texto**: "Sisteas", "usarios", "Diagnosticos" (p.4), "Las Métodos Bayesianos" (p.8), "Módelos Jerarquicos" (p.15), "Genómic" (p.17), "eficiente.Las", "estadística.Puede", "independientes.Resultados", "computacionales.La" sin espacio (p.25-26), "Númericos" (p.28). La introducción (p.3) dice "En la UD 3 y UD 4 se explora el aprendizaje estadístico".

## No aparece

- Bayes con densidades para parámetros continuos: $p(\theta\mid x)\propto p(x\mid\theta)\,p(\theta)$. Todo el documento usa $H$ y $D$ discretos, salvo la jerarquía de p.14.
- Fórmula escrita de la actualización Beta-Binomial (solo en el código de p.24), media de la Beta, tabla de familias conjugadas, normal-normal.
- MAP frente a media posterior, distribución predictiva posterior, factor de Bayes, Bayes empírico.
- Definición formal del intervalo de credibilidad ($P(a\le\theta\le b\mid D)=0.95$), HPD frente a colas iguales, y la comparación numérica con un intervalo de confianza.
- Teoría de MCMC: balance detallado, por qué converge a la posterior, burn-in, thinning, varias cadenas, $\hat R$, tamaño efectivo de muestra, tasa de aceptación. HMC solo se nombra.
- Inferencia variacional.
- Fórmulas de los modelos de ML bayesianos: Naive Bayes ($\prod P(x_i\mid C)$), procesos gaussianos (kernel, media y covarianza posterior), regresión lineal bayesiana (posterior de los coeficientes), LDA (Dirichlet, tópicos), optimización bayesiana (función de adquisición), redes neuronales bayesianas.
- Factorización de una red bayesiana $P(x_1,\dots,x_n)=\prod_i P(x_i\mid \text{padres}(x_i))$ y ejemplo con tablas de probabilidad.
- Fórmula del shrinkage en jerárquicos (media del grupo encogida hacia la global) y ejemplo numérico de escuelas u hospitales.
- Código con PyMC, Stan o ArviZ, aunque el objetivo 2 pide "bibliotecas especializadas" y la bibliografía las lista.
- Ejemplo de MNIST con procesos gaussianos (anunciado en p.15).
