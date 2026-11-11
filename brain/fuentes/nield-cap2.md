# Mapa de citas: Nield, cap. 2 "Probability"

Archivo: `/Users/franciscocastillo/brain/02-Biblioteca/Matematicas/Essential-Math/02 Cap 2 Probability.pdf` (27 páginas PDF, sin números impresos: versión early release, confirmado en el texto extraído). Citar por página del PDF y por "Example 2-N" o "Figure 2-N". Todas las páginas se leyeron con `pdftotext -layout`.

| Tema | pág. PDF | Notas |
|---|---|---|
| Introducción: probabilidad como medida de la incertidumbre | 1 | preguntas de ejemplo (7 caras en 10 lanzamientos, vuelo atrasado); anuncia Bayes, binomial y beta |
| Understanding Probability: P(X) entre 0 y 1 | 1-2 | P(X) = .70 (vuelo atrasado); P(not X) = 1 − .70 = .30 (2) |
| Probabilidad vs verosimilitud (likelihood) | 2 | probabilidad cuantifica eventos futuros, verosimilitud mide la frecuencia de lo ya ocurrido; las probabilidades de resultados mutuamente excluyentes suman 1, las verosimilitudes no |
| Odds (momios) y conversión a probabilidad | 2-3 | O(X) = 7:3 o 7/3 = 2.333; P(X) = O(X) / (1 + O(X)) da .7 (2-3); O(X) = P(X) / (1 − P(X)) (3) |
| Recuadro "Odds are useful!" | 3 | odds de 2.0 = el doble de probable que no ocurra; anticipa Bayes Factor y log-odds de la regresión logística (cap. 6) |
| Probability versus Statistics | 3-4 | dado de 6 caras: P(4) = 1/6 en teoría; el estadístico pide tirar el dado 30 veces o más para estimarlo |
| Probability Math: probabilidad marginal | 4 | una sola probabilidad P(X) se llama marginal |
| Probabilidad conjunta (AND) | 4-5 | moneda y dado: P(Heads AND 6) = 1/2 · 1/6 = 1/12 = .08333 (4); enumera los 12 resultados H1...T6 (5); "product rule" P(A AND B) = P(A) × P(B), válida asumiendo independencia (4-5) |
| Probabilidad de la unión (OR), eventos mutuamente excluyentes | 5 | P(4 OR 6) en un dado = 1/6 + 1/6 = 1/3 |
| Unión con eventos no excluyentes: el doble conteo | 6 | P(Heads OR 6): contar da 7/12 = .58333; sumar da 4/6 = .666 (mal); Heads o 1-5 sumando da 8/6 = 1.333 (imposible) |
| Regla de la suma | 7 | P(A OR B) = P(A) + P(B) − P(A AND B), y la versión P(A) + P(B) − P(A) × P(B); 1/2 + 1/6 − 1/2·1/6 = .58333; con eventos excluyentes la conjunta es 0 |
| Probabilidad condicional P(A\|B) | 7-8 | estudio "85% de los pacientes con cáncer bebe café"; P(Coffee) = .65, P(Cancer) = .005, P(Coffee\|Cancer) = .85 (8); la dirección de la condición importa: "few coffee drinkers have cancer, but many cancer patients drink coffee" (8) |
| Teorema de Bayes (ejemplo café y cáncer) | 8-9 | fórmula P(A\|B) = P(B\|A)P(A) / P(B) (9); P(Cancer\|Coffee) = .85 · .005 / .65 = .0065 (9); Example 2-1 en Python, imprime 0.006538461538461539 (9) |
| Recuadro "What defines a coffee drinker?" | 10 | cómo se define la variable; los datos rara vez cuentan toda la historia; remite al Apéndice A para la intuición de Bayes |
| Recuadro Naive Bayes | 10 | Bayes en el clasificador Naive Bayes; remite a Joel Grus, Data Science from Scratch |
| Conjunta y unión con condicionales | 10-11 | opción 1 P(Coffee) × P(Cancer) = .00325 (10) vs opción 2 P(Coffee\|Cancer) × P(Cancer) = .00425 (11); misma conjunta por el otro lado P(Cancer\|Coffee) × P(Coffee) (11); fórmula general P(A AND B) = P(B) × P(A\|B) (11) |
| Independencia | 4, 11 | se menciona al calcular la conjunta ("assuming they are independent, more on this later!", 4); la definición llega en 11: si A no afecta a B, P(B\|A) = P(B). No hay sección propia |
| Regla de la suma con condicional | 11 | P(A OR B) = P(A) + P(B) − P(A\|B) × P(B) |
| Distribución binomial | 12-15 | motor a reacción: 10 pruebas, 8 éxitos y 2 fallas; ¿qué tan probable es 8/10 si la tasa real es 90%? (12); definición: k éxitos en n ensayos con probabilidad p (12); Figure 2-1 binomial n=10, p=.9 (13); P(8) = .1937, P(1) ≈ .000000008999, P(≤ 8) = .2639 (14); Example 2-2 con `scipy.stats.binom.pmf` imprime las 11 probabilidades, el más probable es 9 (14); conclusión 26.39% (14-15) |
| Recuadro binomial desde cero | 15 | remite al Apéndice A |
| Distribución beta | 15-26 | supuesto escondido de la binomial: p = 90% fijo (15); beta = probabilidades de probabilidades dados alfa éxitos y beta fallas (15); Figure 2-2 beta(8, 2) (16); recuadro Desmos (16); eje x tasas de 0 a 1, eje y verosimilitud; continua: la densidad no es probabilidad, se usan áreas (17); P(≥ .90) = 22.5%, Figure 2-3 (17) |
| CDF de la beta | 17-18 | "cumulative density function" calcula el área hasta x (17); Figure 2-4 (18); Example 2-3 `beta.cdf(.90, 8, 2)` = 0.7748 (18) |
| Área a la derecha: 1 − CDF | 19-21 | Figures 2-5 y 2-6 (19-20); Example 2-4 `1.0 - beta.cdf(.90, a, b)` = 0.2252 (20-21) |
| Actualizar con más datos | 21-23 | 26 pruebas más: 30 éxitos y 6 fallas, Figure 2-7 más angosta (22); Example 2-5 da 0.1316 (23) |
| Área en el medio | 23-26 | entre .80 y .90: Figures 2-8 y 2-9 (24-25); Example 2-6 `beta.cdf(.90) - beta.cdf(.80)` = 0.3386 (26); recuadro beta desde cero en el Apéndice A (26) |
| Conclusión | 26 | recomienda Bayesian Statistics the Fun Way (Will Kurt) |
| Ejercicios | 26-27 | 5 ejercicios: lluvia y paraguas (conjunta, unión, condicional), 137 pasajeros con 40% de no presentarse (binomial), moneda 15 caras y 4 cruces (beta); respuestas en el Apéndice B |

## Erratas e inconsistencias

- Pág. 9: al sustituir en Bayes escribe P(Cancer\|Coffee) = P(Coffee\|Cancer) · P(Coffee) / P(Cancer), con P(Coffee) y P(Cancer) intercambiados. Los números que pone después (.85 · .005 / .65) sí son los correctos.
- Pág. 3: dice "you can turn an odds into a probability" para la fórmula O(X) = P(X) / (1 − P(X)), que hace lo contrario: convierte una probabilidad en odds.
- Pág. 2: dice que la probabilidad debe estar "strictly between" 0 y 1; en realidad 0 y 1 están incluidos.
- Pág. 7: dice restar "the joint probability of getting a heads or a six"; debería decir "heads and a six". La versión P(A) + P(B) − P(A) × P(B) solo vale con eventos independientes, y el texto no lo aclara ahí.
- Pág. 11: escribe .0065 × .65 = .00425; con .0065 redondeado da .004225. El .00425 exacto sale de usar .006538.
- Pág. 1 remite a "Chapter 4 on statistics and hypothesis testing"; págs. 4 y 10 remiten correctamente al capítulo 3.
- Pág. 15: el recuadro dice construir la binomial "without Scikit-learn"; el código usa SciPy.
- Pág. 17: "cumulative density function"; el nombre estándar es cumulative distribution function (función de distribución acumulada).
- Pág. 14: el texto llama x a la variable que el código llama k.
- Matiz (no errata): usa beta(a = éxitos, b = fallas). Con un prior uniforme, la posterior bayesiana sería beta(éxitos + 1, fallas + 1); el libro no lo menciona.

## No aparece

Espacio muestral y axiomas formales, ley de probabilidad total escrita como fórmula (el denominador de Bayes se da como dato), árbol de probabilidades, combinaciones con fórmula (n sobre k) en el texto del capítulo (la binomial desde cero está en el Apéndice A), esperanza y varianza de la binomial o de la beta, distribución de Bernoulli por nombre, ejemplo de prueba médica con falsos positivos, prior y posterior por nombre.
