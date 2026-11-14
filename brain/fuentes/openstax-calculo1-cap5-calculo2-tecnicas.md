# Mapa de citas: OpenStax Cálculo, Vol. 1 cap. 5 "Integration" y Vol. 2 cap. 3 "Techniques of Integration"

Licencia CC BY-NC-SA 4.0 (OpenStax). Sin código. El mapa del libro completo del Vol. 1 (caps. 1 a 4) está en `openstax-calculo1.md`; este cubre el cap. 5, que aquel no incluye, y el cap. 3 del Vol. 2.
Estructura de cada sección: Learning Objectives, texto con Definition, Theorem, Rule, Problem-Solving Strategy, Example n.m resuelto (Solution y a veces Analysis), ejercicios "Checkpoint" n.m sin resolver (a la derecha, con icono) y al final "n.m EXERCISES". Al cierre del capítulo: Key Terms, Key Equations, Key Concepts y Review Exercises.

Los dos archivos son extractos por unidad. Ids para `fuentes.js`:

- **`calc1u5`** = `/Users/franciscocastillo/brain/03-Matematicas/09-Calculo-I/openstax-calculus-volume-1 - Unidad 05 - Integration.pdf` (116 páginas PDF). **Impresa = PDF + 506**, es decir PDF N = impresa − 506. Comprobado en el encabezado de **todas** las páginas del archivo (la primera es PDF 1 = p. 507 y la última, PDF 116 = p. 622, sin discrepancias). Además se ve en las secciones: 5.1 empieza en PDF 2 (p. 508), 5.2 en PDF 23 (p. 529), 5.3 en PDF 43 (p. 549), 5.4 en PDF 60 (p. 566), 5.5 en PDF 78 (p. 584), 5.6 en PDF 89 (p. 595), 5.7 en PDF 102 (p. 608). Tiene capa de texto, pero las fracciones, límites y sumas salen desordenados; lo importante (Ex. 5.7, 5.21, 5.25, 5.27, 5.35, teorema 5.2 y el enunciado de (5.25)) se verificó en la página renderizada.
- **`calc2u3`** = `/Users/franciscocastillo/brain/03-Matematicas/10-Calculo-II/Unidad 03 - Techniques of Integration.pdf` (76 páginas PDF). **Impresa = PDF + 230**, es decir PDF N = impresa − 230. Comprobado en el encabezado de todas las páginas (PDF 1 = p. 231, PDF 76 = p. 306) y en el inicio de cada sección: 3.1 en PDF 2 (p. 232), 3.2 en PDF 11 (p. 241), 3.3 en PDF 20 (p. 250), 3.4 en PDF 32 (p. 262), 3.5 en PDF 42 (p. 272), 3.6 en PDF 46 (p. 276), 3.7 en PDF 58 (p. 288). **La capa de texto no trae ninguna fórmula** (los símbolos desaparecen): todo se leyó en la página renderizada.

**Las dos relaciones son distintas.** Al citar, `data-pag` es siempre la página del PDF y `data-pimp` la impresa. El tomo 2 reinicia el conteo de ejemplos: Ex. 3.1 a 3.56 son del cap. 3 del Vol. 2 y no tienen nada que ver con los "3.x" de otros capítulos del Vol. 1. Los datos numéricos de esta unidad (ej. Ex. 3.39 a 3.46) vienen del Vol. 2.

Notación: en cap. 5, $L_n$ y $R_n$ son las sumas de extremo izquierdo y derecho (ecs. 5.6 y 5.7), $x_i^*$ el punto de muestra, $\Delta x=(b-a)/n$; el área neta es $A_1-A_2$ y el área total $A_1+A_2$. En el cap. 3 (Vol. 2), $M_n$ punto medio, $T_n$ trapecio, $S_n$ Simpson (n par).

## A. Vol. 1, cap. 5 Integration (`calc1u5`; PDF = impresa − 506)

| Tema | PDF | Impresa | Qué hay exactamente |
|---|---|---|---|
| Apertura del capítulo | 1-2 | 507-508 | Fig. 5.1 (iceboat); se retoma en Ex. 5.27; índice de 7 secciones; "from distance to velocity" |
| 5.1 Approximating Areas: idea de Arquímedes | 2 | 508 | Learning Objectives 5.1.1-5.1.3; método de exhausción; se aproxima el área bajo $f$ continua no negativa en $[a,b]$ con rectángulos |
| Notación sigma (índice, variable muda) | 2-3 | 508-509 | $\sum_{i=1}^{20}i$; forma $\sum_{i=1}^n a_i$; ejemplo $\sum_{i=2}^7 s_i$ = $s_2+\dots+s_7$ |
| Ex. 5.1 usar notación sigma | 3 | 509 | a) $\sum_{i=1}^5 3^i=363$ (comprobado); b) $1+\frac14+\frac19+\frac1{16}+\frac1{25}=\sum_{i=1}^5\frac1{i^2}$. Checkpoint 5.1: $2^i$, $i=3..6$ (=120) |
| Rule: propiedades de la sigma (5.1) a (5.5) | 3-4 | 509-510 | $\sum c=nc$; $\sum ca_i=c\sum a_i$; suma y resta; partir la suma $\sum_1^n=\sum_1^m+\sum_{m+1}^n$. Demuestra la 2 y la 3 (el resto, en ejercicios) |
| Rule: sumas y potencias de enteros | 4 | 510 | $\sum i=\frac{n(n+1)}2$, $\sum i^2=\frac{n(n+1)(2n+1)}6$, $\sum i^3=\left[\frac{n(n+1)}2\right]^2$. Solo enunciadas, sin demostración (ver "No aparece") |
| Ex. 5.2 evaluar con sigma | 4-5 | 510-511 | a) $\sum_{i=1}^{200}(i-3)^2=2\,567\,900$ (2 686 700 − 120 600 + 1 800, comprobado); b) $\sum_{i=1}^6(i^3-i^2)=441-91=350$. Checkpoint 5.2: $\sum_{i=1}^{100}(4+3i)=15\,550$ |
| Ex. 5.3 suma de $x^3$ en 1..10 | 5 | 511 | $=3025$ (comprobado); la suma está escrita desde $i=0$ (ver erratas). Checkpoint 5.3: $\sum_{k=1}^{20}(2k+1)=440$ |
| Aproximar el área: partición | 6 | 512 | Fig. 5.2 (región bajo $f$); $\Delta x=\frac{b-a}n$, $x_i=x_0+i\Delta x$; Definition: partición $P$ y partición regular |
| Rule: aproximación por extremo izquierdo (5.6) | 7 | 513 | $A\approx L_n=\sum_{i=1}^n f(x_{i-1})\Delta x$; Fig. 5.3 |
| Rule: aproximación por extremo derecho (5.7) | 7-8 | 513-514 | $A\approx R_n=\sum_{i=1}^n f(x_i)\Delta x$; Fig. 5.4 |
| Fig. 5.5 con $L_6$ y $R_6$ de $f(x)=x^2/2$ en $[0,3]$ | 8-9 | 514-515 | seis subintervalos de ancho 0.5; $L_6=3.4375$, $R_6=5.6875$ (comprobados; el texto extraído pierde el "/2", pero la función es $x^2/2$) |
| Ex. 5.4 $f=x^2$ en $[0,2]$, $n=4$ | 9-10 | 515-516 | $L_4=1.75$, $R_4=3.75$; Fig. 5.6 y 5.7. Checkpoint 5.4: $1/x$ en $[1,2]$ ($L_4\approx0.7595$, $R_4\approx0.6345$) |
| Mejora al crecer $n$ (con $f(x)=(x-1)^3+4$ en $[0,2]$) | 10-13 | 516-519 | Fig. 5.8-5.13: $L_4=7.5$, $L_8=7.75$, $L_{32}=7.9375$; $R_4=8.5$, $R_8=8.25$, $R_{32}=8.0625$ (todos comprobados); tienden a 8. **Tabla 5.1** (PDF 13, p. 519): n = 4, 8, 32 con $L_n$ y $R_n$ (7.5/8.5, 7.75/8.25, 7.94/8.06) |
| Definition: suma de Riemann | 13 | 519 | $\sum_{i=1}^n f(x_i^*)\Delta x$ con $x_i^*$ cualquier punto de $[x_{i-1},x_i]$; nombrada por Bernhard Riemann; enlace a una demostración gráfica |
| Definition: área bajo la curva como límite | 13 | 519 | $A=\lim_{n\to\infty}\sum f(x_i^*)\Delta x$ para $f$ continua no negativa |
| Límite de sumas y elección de $x_i^*$ | 14 | 520 | si $f$ es continua el límite existe y es único (no depende de $x_i^*$; se cita sin demostrar); suma superior (máximo en cada subintervalo) y suma inferior (mínimo); si $f$ crece o decrece, coinciden con los extremos |
| Ex. 5.5 suma inferior de $10-x^2$ en $[1,2]$, $n=4$ | 14-15 | 520-521 | usa extremos derechos (función decreciente), Fig. 5.14; $0.25(8.4375+7.75+6.9375+6)=7.28$ (7.28125, comprobado). Checkpoint 5.5: la superior (extremos izquierdos): 8.03 |
| Ex. 5.6 suma inferior de $\sin x$ en $[0,\pi/2]$, $n=6$ | 15-16 | 521-522 | $\Delta x=\pi/12$; extremo izquierdo; $0.863$ (0.8634, comprobado); Fig. 5.15. Checkpoint 5.6: la superior (1.125) |
| 5.1 EXERCISES | 17-22 | 523-528 | tablas de $L_n$, $R_n$; #55-56: $R_N-L_N=(b-a)\frac{f(b)-f(a)}N$ y cota del error; #59 área del círculo unitario con polígonos |
| 5.2 The Definite Integral: objetivos | 23 | 529 | 5.2.1-5.2.6 (definición, integrando y límites, integrabilidad, área neta, propiedades, valor promedio) |
| Definition: integral definida (5.8) | 23 | 529 | $\int_a^b f(x)dx=\lim_{n\to\infty}\sum f(x_i^*)\Delta x$ "si el límite existe"; función integrable |
| Integral definida frente a indefinida | 23 | 529 | "Una integral definida es un número; una indefinida es una familia de funciones"; $\int$ como S alargada (Leibniz); $a$ límite inferior y $b$ superior; integrando; variable de integración (muda: $f(x)dx=f(t)dt=f(u)du$) |
| Theorem 5.1: las continuas son integrables | 24 | 530 | $f$ continua en $[a,b]$ implica integrable; con un número finito de saltos también lo es; con partición no regular hay que usar "ancho máximo tiende a 0" |
| Ex. 5.7 $\int_0^2x^2dx=8/3$ con la definición | 24-25 | 530-531 | partición regular, $\Delta x=2/n$, $x_i=2i/n$; suma $\frac{8}{n^3}\sum i^2=\frac{8}{3}+\frac4n+\frac1{6n^2}$ (hay una errata en el último término, ver abajo); el límite es $8/3$. Checkpoint 5.7: $\int_0^3(2x-1)dx=6$ |
| Ex. 5.8 integral con fórmula geométrica | 25-26 | 531-532 | $\int_3^6\sqrt{9-(x-3)^2}dx$ = un cuarto del círculo de radio 3 = $9\pi/4\approx7.069$; Fig. 5.16. Checkpoint 5.8: trapecio, $\int_2^4(2x+3)dx=18$ |
| Área neta (net signed area) | 26-27 | 532-533 | Riemann con $f(x)=2-2x^2$ en $[0,2]$, $n=8$: rectángulos arriba menos rectángulos abajo (Fig. 5.17); en el límite $A_1-A_2$ (Fig. 5.18); puede ser positiva, negativa o cero |
| Ex. 5.9 área neta de $2x$ en $[-3,3]$ | 27-28 | 533-534 | dos triángulos de área 9 cada uno; $\int_{-3}^3 2x\,dx=9-9=0$; Fig. 5.19. Checkpoint 5.9: $f(x)=x-2$ en $[0,6]$ (=6) |
| Velocidad constante y desplazamiento | 28-30 | 534-536 | $\int_0^2 75\,dt=150$ mi (Fig. 5.20); ida 60 mph 2 h y vuelta 40 mph 3 h: $\int_0^2 60\,dt+\int_2^5(-40)dt=0$ (Fig. 5.21); distancia total con $|v|$: 240 |
| Definition: área neta y área total | 30 | 536 | $\int_a^b f=A_1-A_2$ y $\int_a^b |f|=A_1+A_2$ |
| Ex. 5.10 área total de $x-2$ en $[0,6]$ | 30-31 | 536-537 | $A_2=2$ (de 0 a 2, bajo el eje), $A_1=8$ (de 2 a 6); total 10 (neta 6); Fig. 5.22. Checkpoint 5.10: $2x$ en $[-3,3]$ (=18) |
| Rule: propiedades de la integral definida (5.9) a (5.14) | 31-32 | 537-538 | (5.9) $\int_a^a=0$; (5.10) invertir límites cambia el signo; (5.11) suma; (5.12) diferencia; (5.13) constante; (5.14) partir en $c$ (vale para cualquier $c$ si $f$ es integrable en el mayor intervalo). Falta un $dx$ en (5.13) (ver erratas) |
| Ex. 5.11 propiedades, partir en tres integrales | 32-33 | 538-539 | $-3x^3+2x+2$ en $[-2,1]$ en tres integrales y sacando constantes. Checkpoint 5.11: cuatro integrales |
| Ex. 5.12 con (5.14) | 33 | 539 | $\int_0^8 f=10$ y $\int_0^5 f=5$, entonces $\int_5^8 f=5$. Checkpoint 5.12: $\int_1^2 f$ dado $\int_1^5 f=-3$ y $\int_2^5 f=4$ (=−7) |
| Theorem 5.2: teorema de comparación | 34 | 540 | i) $f\ge0\Rightarrow\int f\ge0$; ii) $f\ge g\Rightarrow\int f\ge\int g$; iii) $m\le f\le M\Rightarrow m(b-a)\le\int_a^b f\le M(b-a)$ (sólo para $a\le b$) |
| Ex. 5.13 comparar $1+x^2$ y $1+x$ en $[0,1]$ | 34-35 | 540-541 | $g\ge f$ en $[0,1]$ aunque en el resto $f$ está arriba; Fig. 5.23 y 5.24 (hay que acercarse en la gráfica) |
| Valor promedio: introducción | 35-36 | 541-542 | promedio de seis notas (80.33) frente al promedio de una función; paso de $\frac{1}{n}\sum f(x_i^*)$ a $\frac1{b-a}\sum f(x_i^*)\Delta x$ |
| Definition: valor promedio $f_{ave}$ | 36 | 542 | $f_{ave}=\frac1{b-a}\int_a^b f(x)dx$ |
| Ex. 5.14 promedio de $x+1$ en $[0,5]$ | 36-37 | 542-543 | trapecio: $\int_0^5(x+1)dx=35/2$; promedio $7/2$; Fig. 5.25. Checkpoint 5.13: $6-2x$ en $[0,3]$ (=3) |
| 5.2 EXERCISES | 38-42 | 544-548 | |
| 5.3 Fundamental Theorem of Calculus: objetivos e introducción | 43 | 549 | 5.3.1-5.3.6; relación entre derivar e integrar (Newton y Leibniz); recuadro biográfico de Newton |
| Theorem 5.3: teorema del valor medio para integrales (5.15) | 43-44 | 549-550 | $f$ continua en $[a,b]$ implica que existe $c$ con $f(c)=\frac1{b-a}\int_a^b f$, o $\int_a^b f=f(c)(b-a)$. Demostración con el teorema del valor extremo, la comparación y el valor intermedio |
| Ex. 5.15 y 5.16 hallar $c$ | 44-46 | 550-552 | $8-2x$ en $[0,4]$: promedio 4, $c=2$ (Fig. 5.26); $x^2$ en $[0,3]$ con $\int=9$: promedio 3, $c=\sqrt3$ (se descarta $-\sqrt3$), Fig. 5.27. Checkpoint 5.14: $x/2$ en $[0,6]$; Checkpoint 5.15: $2x^2-1$ en $[0,3]$ con $\int=15$ |
| Theorem 5.4: FTC parte 1 (5.16) | 46 | 552 | $F(x)=\int_a^x f(t)dt$ con $f$ continua implica $F'(x)=f(x)$; "para cada $x$ la integral definida es un número, así $F$ es una función" |
| Comentario sobre antiderivadas | 47 | 553 | "garantiza que toda función integrable tiene antiderivada; en concreto toda continua" (la frase con "integrable" es imprecisa, ver erratas) |
| Demostración de la parte 1 | 47 | 553 | cociente incremental $\frac1h\int_x^{x+h}f$, valor medio, $c\to x$, continuidad (la prueba mezcla $f(x)dx$ y $f(t)dt$) |
| Ex. 5.17 y 5.18 derivadas de integrales | 47-48 | 553-554 | $g(x)=\int_1^x\frac{dt}{t^3+1}$, $g'(x)=\frac1{x^3+1}$; $F(x)=\int_1^{\sqrt x}\!\!\sin t\,dt$ (límite superior $\sqrt x$): $F'(x)=\frac{\sin\sqrt x}{2\sqrt x}$ con la regla de la cadena. Checkpoint 5.16: $\int_0^r\sqrt{x^2+4}dx$; Checkpoint 5.17: $\cos t$ de 1 a $x^3$ |
| Ex. 5.19 los dos límites variables | 48-49 | 554-555 | $F(x)=\int_x^{2x}t^3dt$; se parte en $-\int_0^x+\int_0^{2x}$; $F'(x)=-x^3+16x^3=15x^3$. Checkpoint 5.18: $\cos t$ de $x$ a $x^2$ |
| Theorem 5.5: FTC parte 2 (5.17) | 49 | 555 | $\int_a^b f=F(b)-F(a)$ con $F$ cualquier antiderivada; notación $F(x)\big|_a^b$; "teorema de evaluación"; contexto histórico (500 años de esfuerzos) |
| Demostración de la parte 2 | 50 | 556 | suma telescópica $F(b)-F(a)=\sum[F(x_i)-F(x_{i-1})]$, valor medio de Lagrange en cada subintervalo, límite (con un error de índice, ver erratas) |
| Ex. 5.20 $\int_{-2}^2(t^2-4)dt=-32/3$ | 50-51 | 556-557 | Analysis: no hace falta $+C$, "cualquier antiderivada sirve"; una integral definida puede ser negativa (Fig. 5.28). Checkpoint 5.19: $\int_1^2x^{-4}dx$ |
| Ex. 5.21 $\int_1^9\frac{x-1}{\sqrt x}dx=40/3$ | 51-52 | 557-558 | separar y pasar a exponentes racionales: $\int(x^{1/2}-x^{-1/2})dx$; Fig. 5.29 |
| Ex. 5.22 carrera de patinaje | 52-53 | 558-559 | James $v=5+2t$ (50 ft en 5 s) y Kathy $v=10+\cos(\pi t/2)$ (50.6 ft); gana Kathy. Checkpoint 5.20: lo mismo con 3 s |
| Ejemplo del paracaidista (7 preguntas) | 54-55 | 560-561 | caída libre $v=32t$ hasta la velocidad terminal (176 ft/s boca abajo, 220 ft/s cabeza abajo, 44 ft/s con wingsuit), apertura del paracaídas (400 ft en 5 s, 16 ft/s final); sin solución impresa |
| 5.3 EXERCISES | 56-59 | 562-565 | |
| 5.4 Integration Formulas and the Net Change Theorem: objetivos | 60 | 566 | 5.4.1-5.4.4; aclara "definida = número (o función si el límite es variable); indefinida = familia de funciones" |
| Ex. 5.23 regla de la potencia | 60 | 566 | $\int_1^4\sqrt t(1+t)dt=\frac{256}{15}$ (comprobado). Checkpoint 5.21: $x^2-3x$ en $[1,3]$ |
| Theorem 5.6: teorema del cambio neto (5.18) | 61 | 567 | $F(b)=F(a)+\int_a^bF'(x)dx$, o $\int_a^bF'=F(b)-F(a)$; ejemplo del coche 40 mph al norte (2 a 4 p. m.) y 30 mph al sur (4 a 5 p. m.), Fig. 5.32: desplazamiento 50 mi |
| Desplazamiento neto y distancia total | 61-62 | 567-568 | $\int_2^5v=80-30=50$ (neto) y $\int_2^5|v|=80+30=110$ (total) |
| Ex. 5.24 desplazamiento neto, $v=3t-5$ en $[0,3]$ | 62-63 | 568-569 | $-3/2$ m; Fig. 5.33 |
| Ex. 5.25 distancia total del mismo movimiento | 63-64 | 569-570 | corta en $t=5/3$ ($|v|=-v$ antes, $v$ después); $\frac{41}{6}$ m (impreso como "14/6", ver erratas). Checkpoint 5.22: $\frac12e^t-2$ en $[0,2]$ |
| Ex. 5.26 galones de gasolina | 64-65 | 570-571 | tasa $5-t^3$ gal/h, primeras 2 h: 6 gal |
| Ex. 5.27 el iceboat | 65-66 | 571-572 | viento $v=20t+5$ ($0\le t\le\frac12$) y 15 mph ($\frac12\le t\le1$); el bote va al doble: $\int_0^12v=25$ mi (con un límite mal escrito, ver erratas). Checkpoint 5.23: la segunda mitad con $-10t+15$ |
| Rule: integrales de funciones pares e impares | 66 | 572 | $f$ par: $\int_{-a}^af=2\int_0^af$; $f$ impar: $\int_{-a}^af=0$; repaso de simetrías |
| Ex. 5.28 y 5.29 par e impar | 67-68 | 573-574 | $\int_{-2}^2(3x^8-2)dx=\frac{1000}3$ y mitad $\frac{500}3$ (Fig. 5.35); $\int_{-\pi}^{\pi}-5\sin x\,dx=0$ (Fig. 5.36). Checkpoint 5.24: $\int_{-2}^2x^4dx$ (=64/5) |
| 5.4 EXERCISES | 69-77 | 575-583 | |
| 5.5 Substitution: objetivos y motivación | 78 | 584 | 5.5.1, 5.5.2; se busca un integrando de la forma $f[g(x)]g'(x)dx$ (ej. $\int(x^2-3)^3 2x\,dx$); "sustitución" y "cambio de variable" |
| Theorem 5.7: sustitución con integrales indefinidas (5.19) | 78 | 584 | $\int f[g(x)]g'(x)dx=\int f(u)du=F(u)+C=F(g(x))+C$; demostración con la regla de la cadena |
| Problem-Solving Strategy de la sustitución (5 pasos) | 79 | 585 | elegir $u=g(x)$, sustituir $u$ y $du$, integrar en $u$ y volver a $x$; si no sale, elegir otra $u$ |
| Ex. 5.30 $\int6x(3x^2+4)^4dx$ | 79-80 | 585-586 | $u=3x^2+4$, $du=6x\,dx$; resultado $\frac{(3x^2+4)^5}5+C$; Analysis: comprobar derivando. Checkpoint 5.25 |
| Ex. 5.31 con ajuste de constante | 80-81 | 586-587 | $\int z\sqrt{z^2-5}dz$, $du=2z\,dz$ y se multiplica por $\frac12$: $\frac13(z^2-5)^{3/2}+C$. Checkpoint 5.26 |
| Ex. 5.32 con trigonométricas | 81 | 587 | $\int\frac{\sin t}{\cos^3t}dt$, $u=\cos t$: $\frac1{2\cos^2t}+C$. Checkpoint 5.27: $\int\frac{\cos t}{\sin^2t}dt$ |
| Ex. 5.33 despejar $x$ en función de $u$ | 82 | 588 | $\int\frac{x}{\sqrt{x-1}}dx$ con $u=x-1$, $x=u+1$: $\frac23(x-1)^{1/2}(x+2)+C$. Checkpoint 5.28: $\int\cos^3t\sin t\,dt$ |
| Theorem 5.8: sustitución en integrales definidas (5.20) | 83 | 589 | $\int_a^bf(g(x))g'(x)dx=\int_{g(a)}^{g(b)}f(u)du$; se justifica con el caso indefinido (sin demostración formal) |
| Ex. 5.34 $\int_0^1x^2(1+2x^3)^5dx=\frac{182}9$ | 83-84 | 589-590 | $u=1+2x^3$, límites 0 a 1 se vuelven 1 a 3 (comprobado). Checkpoint 5.29 |
| Ex. 5.35 $\int_0^1xe^{4x^2+3}dx$ | 84 | 590 | $\frac{e^7-e^3}8\approx134.568$ (comprobado); la solución escribe $u=4x^3+3$ por error (ver erratas). Checkpoint 5.30 |
| Ex. 5.36 $\int_0^{\pi/2}\cos^2\theta\,d\theta=\frac\pi4$ | 84-85 | 590-591 | identidad $\cos^2\theta=\frac{1+\cos2\theta}2$ y $u=2\theta$; recuadro: también se puede volver a $x$ sin cambiar límites |
| 5.5 EXERCISES | 86-88 | 592-594 | |
| 5.6 Exponenciales y logaritmos: objetivos | 89 | 595 | 5.6.1, 5.6.2; modelos de crecimiento y decaimiento |
| Rule: integrales de exponenciales (5.21) | 89 | 595 | $\int e^xdx=e^x+C$; $\int a^xdx=\frac{a^x}{\ln a}+C$; "es su propia derivada y su propia integral" |
| Ex. 5.37 $\int e^{-x}dx$ | 89 | 595 | $u=-x$: $-e^{-x}+C$. Checkpoint 5.31: $x^2e^{-2x^3}$. Aviso: no se usa la regla de la potencia en el exponente |
| Ex. 5.38 $\int e^x\sqrt{1+e^x}dx$ | 90 | 596 | $u=1+e^x$: $\frac23(1+e^x)^{3/2}+C$; Fig. 5.37. Checkpoint 5.32 |
| Ex. 5.39 $\int3x^2e^{2x^3}dx$ | 90-91 | 596-597 | $u=2x^3$; $\frac12e^{2x^3}+C$. Checkpoint 5.33 |
| Ex. 5.40 precio-demanda | 91-92 | 597-598 | $p'(x)=-0.015e^{-0.01x}$, $p(50)=2.35$: $p(x)=1.5e^{-0.01x}+1.44$, $p(100)\approx1.99$ (comprobado) |
| Ex. 5.41 $\int_1^2e^{1-x}dx$ | 92-93 | 598-599 | límites 0 y $-1$ al cambiar; $1-e^{-1}$; Fig. 5.38. Checkpoint 5.34: $\int_0^2e^{2x}dx$ |
| Ex. 5.42 bacterias | 93 | 599 | $q(t)=3^t$ miles/h; $Q(t)=\frac{3^t}{\ln3}+9.090$; $Q(2)=17.282$ (17 282 bacterias). Checkpoint 5.35 |
| Ex. 5.43 moscas de la fruta | 94 | 600 | usa el teorema del cambio neto: $G(10)=100+\int_0^{10}2e^{0.02t}dt\approx122$. Checkpoint 5.36 |
| Ex. 5.44 $\int_1^2\frac{e^{1/x}}{x^2}dx$ | 94-95 | 600-601 | $u=x^{-1}$, límites 1 y 1/2 se invierten; $e-\sqrt e$. Checkpoint 5.37 |
| Rule: fórmulas con logaritmos (5.22) | 95 | 601 | $\int x^{-1}dx=\ln|x|+C$; $\int\ln x\,dx=x\ln x-x+C$; $\int\log_ax\,dx=\frac{x}{\ln a}(\ln x-1)+C$ (se citan sin deducir) |
| Ex. 5.45 y 5.46 | 95-97 | 601-603 | $\int\frac3{x-10}dx=3\ln|x-10|+C$ (Fig. 5.39); $\int\frac{2x^3+3x}{x^4+3x^2}dx=\frac12\ln|x^4+3x^2|+C$. Checkpoint 5.38 |
| Ex. 5.47 y 5.48 | 97-98 | 603-604 | $\int\log_2x\,dx=\frac x{\ln2}(\ln x-1)+C$; $\int_0^{\pi/2}\frac{\sin x}{1+\cos x}dx=\ln2$ (comprobado). Checkpoint 5.39 |
| 5.6 EXERCISES | 99-101 | 605-607 | |
| 5.7 Funciones trigonométricas inversas: objetivos | 102 | 608 | 5.7.1; se parte de las derivadas de las inversas |
| Rule: integrales que dan arcoseno, arcotangente y arcosecante (5.23) a (5.25) | 102 | 608 | $\int\frac{du}{\sqrt{a^2-u^2}}=\sin^{-1}\frac ua+C$; $\int\frac{du}{a^2+u^2}=\frac1a\tan^{-1}\frac ua+C$; $\int\frac{du}{u\sqrt{u^2-a^2}}=\frac1a\sec^{-1}\frac ua+C$ (falta el valor absoluto en la 3, ver erratas) |
| Demostración de (5.23) | 102-103 | 608-609 | derivación implícita de $y=\sin^{-1}\frac xa$: $\frac{dy}{dx}=\frac1{a\cos y}$ con $\cos y\ge0$; no se demuestran (5.24) ni (5.25) |
| Ex. 5.49 $\int_0^1\frac{dx}{\sqrt{1-x^2}}=\frac\pi2$ | 103 | 609 | directo; Checkpoint 5.40 |
| Ex. 5.50 $\int\frac{dx}{\sqrt{4-9x^2}}$ | 103-104 | 609-610 | $u=3x$, $a=2$: $\frac13\sin^{-1}\frac{3x}2+C$. Checkpoint 5.41 |
| Ex. 5.51 $\int_0^{\sqrt3/2}\frac{du}{\sqrt{1-u^2}}=\frac\pi3$ | 104 | 610 | |
| Las otras tres inversas | 104 | 610 | "las otras son versiones negativas de estas"; solo hay tres fórmulas |
| Ex. 5.52 a 5.54 arcotangente | 105-106 | 611-612 | $\int\frac{dx}{1+4x^2}=\frac12\tan^{-1}(2x)+C$; $\int\frac{dx}{9+x^2}=\frac13\tan^{-1}\frac x3+C$; $\int_{\sqrt3/3}^{\sqrt3}\frac{dx}{1+x^2}=\frac\pi6$ (comprobado). Checkpoints 5.42-5.44 |
| 5.7 EXERCISES | 107-109 | 613-615 | |
| Chapter 5 Review: Key Terms | 110 | 616 | glosario completo (partición, regular, suma de Riemann, sumas superior e inferior, área neta, área total, integrable, integrando, límites de integración, variable de integración, teorema del valor medio para integrales, FTC partes 1 y 2, cambio neto, sustitución, cambio de variable, valor promedio) |
| Key Equations | 111-112 | 617-618 | sumas (con la de cubos escrita desde $i=0$), $L_n$, $R_n$, integral definida, propiedades (con el $dx$ faltante), valor medio, FTC 1 y 2, cambio neto, sustitución (indefinida y definida), exponenciales, logaritmos, arcoseno/arcotangente/arcosecante |
| Key Concepts | 112-114 | 618-620 | resumen por sección (5.1 a 5.7) |
| Chapter 5 Review Exercises | 114-116 | 620-622 | verdadero/falso (#439...) y cálculo; las soluciones no están en el archivo |

Filas de la tabla A: 105.

## B. Vol. 2, cap. 3 Techniques of Integration (`calc2u3`; PDF = impresa − 230)

| Tema | PDF | Impresa | Qué hay exactamente |
|---|---|---|---|
| Apertura del capítulo | 1-2 | 231-232 | Fig. 3.1 (semáforos); la pregunta del capítulo (accidentes en una intersección) se resuelve en Ex. 3.49; motivación: $\int x\sin(x^2)dx$ se hace por sustitución pero $\int x\sin x\,dx$ no |
| 3.1 Integración por partes: la fórmula | 2 | 232 | se deriva integrando la regla del producto $h'=f'g+fg'$; $\int f(x)g'(x)dx=f(x)g(x)-\int g(x)f'(x)dx$; con $u=f$, $v=g$: **Theorem 3.1 (3.1)** $\int u\,dv=uv-\int v\,du$ |
| Ex. 3.1 $\int x\sin x\,dx$ | 2-3 | 232-233 | $u=x$, $dv=\sin x\,dx$: $-x\cos x+\sin x+C$. Analysis: con la elección contraria ($u=\sin x$) la integral resultante es peor; con $v=-\cos x+K$ la $K$ se cancela; comprobación por derivación. Checkpoint 3.1: $\int xe^{2x}dx$ |
| LIATE (regla para elegir $u$) | 3-4 | 233-234 | **L**ogarítmicas, **I**nversas trigonométricas, **A**lgebraicas, **T**rigonométricas, **E**xponenciales; el primero de la lista es $u$; se razona por qué ("LI" al principio, no se integran fácilmente) |
| Ex. 3.2 $\int\frac{\ln x}{x^3}dx$ | 4 | 234 | $u=\ln x$, $dv=x^{-3}dx$: $-\frac{\ln x}{2x^2}-\frac1{4x^2}+C$. Checkpoint 3.2: $\int x\ln x\,dx$ |
| Ex. 3.3 dos veces por partes | 4-5 | 234-235 | $\int x^2e^{3x}dx=\frac13x^2e^{3x}-\frac29xe^{3x}+\frac2{27}e^{3x}+C$ (comprobado derivando) |
| Ex. 3.4 LIATE no alcanza | 5 | 235 | $\int t^3e^{t^2}dt$: se elige $u=t^2$, $dv=te^{t^2}dt$: $\frac12t^2e^{t^2}-\frac12e^{t^2}+C$ |
| Ex. 3.5 integral que reaparece | 6-7 | 236-237 | $\int\sin(\ln x)dx$ con la constante 1 como $dv$; después de dos partes queda $I=x\sin(\ln x)-x\cos(\ln x)-I$, se despeja $I$: $\frac12x\sin(\ln x)-\frac12x\cos(\ln x)+C$; comprobada derivando. Checkpoint 3.3: $\int x^2\sin x\,dx$ |
| Theorem 3.2: partes para integrales definidas (3.2) | 7 | 237 | $\int_a^bu\,dv=uv\big|_a^b-\int_a^bv\,du$ |
| Ex. 3.6 área bajo $\tan^{-1}x$ | 7-8 | 237-238 | $\int_0^1\tan^{-1}x\,dx=\frac\pi4-\frac12\ln2\approx0.4388$ (comprobado), con $dv=dx$ y $u=\tan^{-1}x$; Fig. 3.2; "chequeo de razonabilidad" |
| Ex. 3.7 volumen por capas | 8-9 | 238-239 | $f=e^{-x}$ girada alrededor del eje $y$ entre 0 y 1: $2\pi\int_0^1xe^{-x}dx=2\pi-\frac{4\pi}e\approx1.6603$ (comprobado); Fig. 3.3; Analysis con cilindro más cono (1.8177). Checkpoint 3.4: $\int_0^{\pi/2}x\cos x\,dx$ |
| 3.1 EXERCISES | 9-11 | 239-241 | #1-37 integrales indefinidas ($x^3e^{2x}$, $\ln x$, $\tan^{-1}x$...); #38-47 definidas; #48-50 fórmulas de reducción ($\int x^ne^xdx=x^ne^x-n\int x^{n-1}e^xdx$, y con $\cos$, $\sin$); #51 por partes o por sustitución |
| 3.2 Trigonometric Integrals: objetivos | 11 | 241 | 3.2.1 a 3.2.3; productos y potencias de seno/coseno y de tangente/secante; fórmulas de reducción |
| Ex. 3.8 $\int\cos^3x\sin x\,dx$ | 11 | 241 | $u=\cos x$: $-\frac14\cos^4x+C$. Checkpoint 3.5 |
| Ex. 3.9 $\int\cos^2x\sin^3x\,dx$ | 12 | 242 | $k$ impar: $\sin^3=\sin^2\sin$ y $\sin^2=1-\cos^2$; $\frac15\cos^5x-\frac13\cos^3x+C$. Checkpoint 3.6 |
| Identidades que bajan la potencia | 12 | 242 | $\sin^2x=\frac12-\frac12\cos2x$ y $\cos^2x=\frac12+\frac12\cos2x$ |
| Ex. 3.10 $\int\sin^2x\,dx$ | 12 | 242 | $\frac12x-\frac14\sin2x+C$. Checkpoint 3.7: $\int\cos^2x\,dx$ |
| Problem-Solving Strategy: $\int\cos^jx\sin^kx\,dx$ | 13 | 243 | 1) $k$ impar: $u=\cos x$; 2) $j$ impar: $u=\sin x$; 3) ambos pares: identidades de ángulo doble |
| Ex. 3.11 $\int\cos^8x\sin^5x\,dx$ | 13 | 243 | $-\frac19\cos^9x+\frac2{11}\cos^{11}x-\frac1{13}\cos^{13}x+C$ (comprobado) |
| Ex. 3.12 $\int\sin^4x\,dx$ | 13-14 | 243-244 | ambos pares: $\frac38x-\frac14\sin2x+\frac1{32}\sin4x+C$ (comprobado). Checkpoints 3.8 ($\cos^3x$) y 3.9 ($\cos^2 3x$) |
| Rule: productos con ángulos distintos (3.3) a (3.5) | 14 | 244 | $\sin ax\sin bx=\frac12\cos((a-b)x)-\frac12\cos((a+b)x)$; $\sin ax\cos bx=\frac12\sin((a-b)x)+\frac12\sin((a+b)x)$; $\cos ax\cos bx=\frac12\cos((a-b)x)+\frac12\cos((a+b)x)$ |
| Ex. 3.13 $\int\sin5x\cos3x\,dx$ | 14 | 244 | $-\frac14\cos2x-\frac1{16}\cos8x+C$. Checkpoint 3.10: $\cos6x\cos5x$ |
| Integrales básicas de tangente y secante | 15 | 245 | $\int\sec^2x=\tan x$; $\int\sec x\tan x=\sec x$; $\int\tan x=\ln|\sec x|+C$; $\int\sec x=\ln|\sec x+\tan x|+C$ |
| Ex. 3.14 $\int\sec^5x\tan x\,dx$ | 15 | 245 | $u=\sec x$: $\frac15\sec^5x+C$. Checkpoint 3.11 |
| Problem-Solving Strategy: $\int\tan^kx\sec^jx\,dx$ | 15-16 | 245-246 | 1) $j$ par $\ge2$: $u=\tan x$; 2) $k$ impar y $j\ge1$: $u=\sec x$; 3) $k$ impar y $j=0$: bajar potencia de la tangente; 4) $k$ par y $j$ impar: pasar a secante y por partes |
| Ex. 3.15 y 3.16 | 16 | 246 | $\int\tan^6x\sec^4x\,dx=\frac19\tan^9x+\frac17\tan^7x+C$; $\int\tan^5x\sec^3x\,dx=\frac17\sec^7x-\frac25\sec^5x+\frac13\sec^3x+C$ (comprobados) |
| Ex. 3.17 $\int\tan^3x\,dx$ | 17 | 247 | $\frac12\tan^2x-\ln|\sec x|+C$ |
| Ex. 3.18 $\int\sec^3x\,dx$ | 17 | 247 | por partes con $u=\sec x$; la integral reaparece; $\frac12\sec x\tan x+\frac12\ln|\sec x+\tan x|+C$. Checkpoint 3.12: $\tan^3x\sec^7x$ |
| Rule: fórmulas de reducción (3.6) y (3.7) | 18 | 248 | $\int\sec^nx\,dx=\frac1{n-1}\sec^{n-2}x\tan x+\frac{n-2}{n-1}\int\sec^{n-2}x\,dx$; $\int\tan^nx\,dx=\frac1{n-1}\tan^{n-1}x-\int\tan^{n-2}x\,dx$ |
| Ex. 3.19 y 3.20 con las reducciones | 18 | 248 | $\int\sec^3x=\frac12\sec x\tan x+\frac12\ln|\sec x+\tan x|+C$; $\int\tan^4x=\frac13\tan^3x-\tan x+x+C$. Checkpoint 3.13: $\int\sec^5x\,dx$ |
| 3.2 EXERCISES | 19-20 | 249-250 | #69-72 identidades; #73-78 por $u$; #79-94 potencias; #97-108 con identidades; #121-125 ortogonalidad, comparar dificultad |
| 3.3 Trigonometric Substitution: objetivos | 20 | 250 | 3.3.1; raíces de $a^2-x^2$, $a^2+x^2$ y $x^2-a^2$ |
| Idea con $\int\sqrt{9-x^2}dx$ | 20-21 | 250-251 | $x=a\sin\theta$, $dx=a\cos\theta\,d\theta$; $\sqrt{a^2-x^2}=|a\cos\theta|=a\cos\theta$ en $-\pi/2\le\theta\le\pi/2$; Fig. 3.4 (triángulo de referencia: hipotenusa $a$, cateto opuesto $x$, adyacente $\sqrt{a^2-x^2}$), $\theta=\sin^{-1}(x/a)$ |
| Problem-Solving Strategy $\sqrt{a^2-x^2}$ | 22 | 252 | 5 pasos (revisar si hay otro método, sustituir, simplificar, integrar, triángulo de referencia) |
| Ex. 3.21 $\int\sqrt{9-x^2}dx$ | 22-23 | 252-253 | $\frac92\sin^{-1}\frac x3+\frac{x\sqrt{9-x^2}}2+C$; Fig. 3.5 |
| Ex. 3.22 $\int\frac{\sqrt{4-x^2}}xdx$ | 23-24 | 253-254 | $2\ln\left|\frac2x-\frac{\sqrt{4-x^2}}x\right|+\sqrt{4-x^2}+C$; Fig. 3.6 |
| Ex. 3.23 $\int x^3\sqrt{1-x^2}dx$ de dos formas | 24-25 | 254-255 | por $u=1-x^2$ y por $x=\sin\theta$; ambas dan $-\frac13(1-x^2)^{3/2}+\frac15(1-x^2)^{5/2}+C$. Checkpoint 3.14: reescribir $\int\frac{x^3}{\sqrt{25-x^2}}dx$ |
| Strategy $\sqrt{a^2+x^2}$ | 25 | 255 | $x=a\tan\theta$, $dx=a\sec^2\theta\,d\theta$, $\sqrt{a^2+x^2}=a\sec\theta$; Fig. 3.7 (p. 256) |
| Ex. 3.24 $\int\frac{dx}{\sqrt{1+x^2}}$ | 26 | 256 | $\ln|\sqrt{1+x^2}+x|+C$; comprobado derivando; Fig. 3.8 |
| Ex. 3.25 lo mismo con $x=\sinh\theta$ | 27 | 257 | da $\sinh^{-1}x+C$; Analysis: se demuestra que $\sinh^{-1}x=\ln(x+\sqrt{x^2+1})$ resolviendo $e^y$ con la fórmula cuadrática, así las dos respuestas coinciden |
| Ex. 3.26 longitud de arco de $y=x^2$ en $[0,\frac12]$ | 28 | 258 | $\int_0^{1/2}\sqrt{1+4x^2}dx$ con $x=\frac12\tan\theta$, límites 0 y $\pi/4$, usa $\int\sec^3$: $\frac14\left(\sqrt2+\ln(\sqrt2+1)\right)$ (comprobado). Checkpoint 3.15 |
| Strategy $\sqrt{x^2-a^2}$ | 28-29 | 258-259 | $x=a\sec\theta$, $dx=a\sec\theta\tan\theta\,d\theta$; $\sqrt{x^2-a^2}=|a\tan\theta|$ con signo según $x\ge a$ o $x\le-a$; **Fig. 3.9** (dos triángulos, uno por cada caso) |
| Ex. 3.27 área bajo $\sqrt{x^2-9}$ en $[3,5]$ | 29-30 | 259-260 | $10-\frac92\ln3\approx5.056$ (comprobado); Fig. 3.10. Checkpoint 3.16: $\int\frac{dx}{\sqrt{x^2-4}}$ con $x>2$ |
| 3.3 EXERCISES | 30-32 | 260-262 | #126-133 simplificar y completar el cuadrado; #134-148 sustitución; #149-153; #154-159 con hiperbólicas; #160-164 completando el cuadrado; #165 el área de un semicírculo; #166 elipse |
| 3.4 Partial Fractions: objetivos | 32 | 262 | 3.4.1 a 3.4.4; $\int\frac{3x}{x^2-x-2}dx$ como ejemplo motivador: $\frac1{x+1}+\frac2{x-2}$ |
| División larga previa | 32-33 | 262-263 | el método sólo vale si $\deg P<\deg Q$; si no, se divide: $\frac PQ=A+\frac RQ$ |
| Ex. 3.28 con $\deg P\ge\deg Q$ | 33 | 263 | $\int\frac{x^2+3x+5}{x+1}dx=\frac12x^2+2x+3\ln|x+1|+C$. Checkpoint 3.17 |
| Factores lineales no repetidos | 33-34 | 263-264 | $\frac{P}{Q}=\frac{A_1}{a_1x+b_1}+\dots$ (sin demostrar la existencia) |
| Ex. 3.29 $\int\frac{3x+2}{x^3-x^2-2x}dx$ | 33-35 | 263-265 | $\frac Ax+\frac B{x-2}+\frac C{x+1}$; ecuación (3.8) $3x+2=A(x-2)(x+1)+Bx(x+1)+Cx(x-2)$; **método de igualar coeficientes** (sistema 3x3) y **método de sustitución estratégica** ($x=0,2,-1$); $A=-1$, $B=\frac43$, $C=-\frac13$ (comprobados); $-\ln|x|+\frac43\ln|x-2|-\frac13\ln|x+1|+C$ |
| Ex. 3.30 dividir antes | 35 | 265 | $\int\frac{x^2+3x+1}{x^2-4}dx=x+\frac{11}4\ln|x-2|+\frac14\ln|x+2|+C$ ($A=\frac{11}4$, $B=\frac14$, comprobados) |
| Ex. 3.31 tras una sustitución | 35-36 | 265-266 | $\int\frac{\cos x}{\sin^2x-\sin x}dx$, $u=\sin x$; $-\ln|\sin x|+\ln|\sin x-1|+C$. Checkpoint 3.18 |
| Factores lineales repetidos | 36 | 266 | $\frac{A_1}{ax+b}+\frac{A_2}{(ax+b)^2}+\dots+\frac{A_n}{(ax+b)^n}$ |
| Ex. 3.32 $\int\frac{x-2}{(2x-1)^2(x-1)}dx$ | 36 | 266 | ecuación (3.9) $x-2=A(2x-1)(x-1)+B(x-1)+C(2x-1)^2$; $A=2$, $B=3$, $C=-1$ (comprobados); $\ln|2x-1|-\frac3{2(2x-1)}-\ln|x-1|+C$. Checkpoint 3.19: plantear $\frac{x+2}{(x+3)^3(x-4)^2}$ |
| The General Method (Problem-Solving Strategy) | 37 | 267 | 6 pasos: dividir si hace falta, factorizar $Q$, plantear según el tipo (a: lineales distintos; b: lineales repetidos; c: cuadrático irreducible $\frac{Ax+B}{ax^2+bx+c}$; d: cuadrático irreducible repetido), resolver, integrar |
| Ex. 3.33 cuadrático irreducible | 37-38 | 267-268 | $\int\frac{2x-3}{x^3+x}dx$: $\frac{3x+2}{x^2+1}-\frac3x$ ($A=3$, $B=2$, $C=-3$); $\frac32\ln(x^2+1)+2\tan^{-1}x-3\ln|x|+C$ |
| Ex. 3.34 $\int\frac{dx}{x^3-8}$ | 38-39 | 268-269 | $\frac1{12}\ln|x-2|-\frac1{24}\ln|x^2+2x+4|-\frac{\sqrt3}{12}\tan^{-1}\frac{x+1}{\sqrt3}+C$ (verificado); incluye completar el cuadrado |
| Ex. 3.35 volumen por capas con cuadrático repetido | 39-40 | 269-270 | $V=2\pi\int_0^1\frac{x^3}{(x^2+1)^2}dx=\pi(\ln2-\frac12)\approx0.607$ (comprobado); Fig. 3.11. Checkpoint 3.20 |
| 3.4 EXERCISES | 40-42 | 270-272 | #182-195 expresar como suma; #196-206 integrales; #207-210 con cuadráticos; #211-213; #214-229 con sustitución previa; #233-239 problemas de valor inicial; #240-242 sustitución $t=\tan(x/2)$ (se da $dx=\frac2{1+t^2}dt$, $\sin x=\frac{2t}{1+t^2}$, $\cos x=\frac{1-t^2}{1+t^2}$ sólo en ejercicios) |
| 3.5 Other Strategies for Integration: objetivos | 42 | 272 | 3.5.1, 3.5.2; tablas de integrales y sistemas de álgebra computacional (CAS) |
| Tablas de integrales | 42 | 272 | dos antiderivadas "distintas" pueden diferir en una constante; recuerda $\sinh^{-1}x=\ln(x+\sqrt{x^2+1})$ |
| Ex. 3.36 usar una tabla | 43 | 273 | fórmula #88 del Appendix A ($\int\frac{\sqrt{a^2-u^2}}{u^2}du$) con $u=e^x$, $a=4$: $-\frac{\sqrt{16-e^{2x}}}{e^x}-\sin^{-1}\frac{e^x}4+C$. El Appendix A no está en estos archivos |
| Ex. 3.37 y 3.38 CAS | 43-44 | 273-274 | $\int\frac{dx}{\sqrt{x^2-4}}=\ln|\sqrt{x^2-4}+x|+C$ y se compara con la forma de la sustitución trigonométrica (difieren en $-\ln2$); $\int\sin^3x\,dx=\frac1{12}(\cos3x-9\cos x)+C$, equivalente a $\frac13\cos^3x-\cos x+C$ por identidades; Fig. 3.12. Checkpoint 3.21 |
| 3.5 EXERCISES | 45-46 | 275-276 | #244-260 con tablas; #261-278 con CAS; #279-288 |
| 3.6 Numerical Integration: objetivos | 46 | 276 | 3.6.1 a 3.6.5; punto medio, trapecio, error absoluto y relativo, Simpson |
| Regla del punto medio | 47 | 277 | suma de Riemann con partición $P$ y puntos de muestra; **Theorem 3.3 (3.10)**: $M_n=\sum_{i=1}^nf(m_i)\Delta x$, $\lim M_n=\int_a^bf$; Fig. 3.13 |
| Ex. 3.39 $M_4$ para $\int_0^1x^2dx$ | 47-48 | 277-278 | puntos medios $\frac18,\frac38,\frac58,\frac78$: $M_4=\frac{21}{64}$ frente a $\frac13$ (error $\frac1{192}\approx0.0052$) |
| Ex. 3.40 $M_6$ para la longitud de $y=\frac12x^2$ en $[1,4]$ | 48 | 278 | $\int_1^4\sqrt{1+x^2}dx\approx8.1431$ (comprobado). Checkpoint 3.22: $M_2$ de $\int_1^2\frac1x dx$ |
| Regla del trapecio | 48-49 | 278-279 | Fig. 3.14, área de cada trapecio $\frac12\Delta x(f(x_{i-1})+f(x_i))$; **Theorem 3.4 (3.11)** $T_n=\frac12\Delta x\left(f(x_0)+2f(x_1)+\dots+2f(x_{n-1})+f(x_n)\right)$; $T_n=\frac12(L_n+R_n)$; sobreestima en concavidad hacia arriba y subestima en concavidad hacia abajo; Fig. 3.15 |
| Ex. 3.41 $T_4$ para $\int_0^1x^2dx$ | 50 | 280 | $T_4=\frac{11}{32}$ (comprobado). Checkpoint 3.23: $T_2$ de $\int_1^2\frac1x dx$ |
| Error absoluto y relativo | 50 | 280 | definición: $|A-B|$ y $\left|\frac{A-B}A\right|\cdot100\%$ |
| Ex. 3.42 y 3.43 errores en $\int_0^1x^2dx$ | 50-51 | 280-281 | punto medio: error absoluto $\frac1{192}\approx0.0052$, relativo $\frac1{64}\approx1.6\%$; trapecio: $\frac1{96}\approx0.0104$ y 3.1% (el trapecio es menos preciso, ejemplo directo de la afirmación de la p. 279). Checkpoint 3.24 |
| Theorem 3.5: cotas del error (3.12) y (3.13) | 51 | 281 | $\text{Error en }M_n\le\frac{M(b-a)^3}{24n^2}$ y $\text{Error en }T_n\le\frac{M(b-a)^3}{12n^2}$ con $M=\max|f''|$; sin demostración |
| Ex. 3.44 número de intervalos | 51-52 | 281-282 | $\int_0^1e^{x^2}dx$ con error menor de 0.01 por punto medio: $M\le6e$, $n\ge\sqrt{\frac{600e}{24}}\approx8.24$, así que $n=9$ (se razona por qué no basta redondear a 8). Checkpoint 3.25 |
| Regla de Simpson: idea y deducción | 52-53 | 282-283 | aproxima con parábolas por pares de subintervalos (Fig. 3.16); deducción completa de $\int_{x_0}^{x_2}p=\frac{\Delta x}3(f(x_0)+4f(x_1)+f(x_2))$ con $p(x)=Ax^2+Bx+C$ |
| Theorem 3.6: regla de Simpson (3.14) | 53-54 | 283-284 | $S_n=\frac{\Delta x}3\left(f(x_0)+4f(x_1)+2f(x_2)+4f(x_3)+\dots+2f(x_{n-2})+4f(x_{n-1})+f(x_n)\right)$, $n$ par; $S_{2n}=\frac23M_n+\frac13T_n$ (se comprueba con $x^2$) |
| Cota del error de Simpson (3.15) | 54 | 284 | $\text{Error en }S_n\le\frac{M(b-a)^5}{180n^4}$ con $M=\max|f^{(4)}|$ |
| Ex. 3.45 Simpson exacta para cúbicas | 54 | 284 | $S_2$ para $\int_0^1x^3dx=\frac14$, y como $f^{(4)}=0$ la cota es 0 (escrito $S_4$ por error, ver erratas) |
| Ex. 3.46 $S_6$ para la longitud de $y=\frac12x^2$ en $[1,4]$ | 54-55 | 284-285 | $S_6\approx8.14594$ (el exacto es 8.14577). Checkpoint 3.26: $S_2$ de $\int_1^2\frac1x dx$ |
| 3.6 EXERCISES | 55-57 | 285-287 | #299-343 aproximaciones y cotas; #344-346 de opción múltiple (par/impar, la fórmula del error de Simpson depende de $f^{(4)}$) |
| 3.7 Improper Integrals: objetivos | 58 | 288 | 3.7.1 a 3.7.3; el área bajo $\frac1x$ en $[1,\infty)$ es infinita y el volumen girado es finito |
| Integrales sobre intervalo infinito: Definition (3.16) a (3.18) | 58-59 | 288-289 | Fig. 3.17; $\int_a^{+\infty}f=\lim_{t\to+\infty}\int_a^tf$ (3.16); $\int_{-\infty}^bf=\lim_{t\to-\infty}\int_t^bf$ (3.17); $\int_{-\infty}^{+\infty}f=\int_{-\infty}^0f+\int_0^{+\infty}f$ si ambas convergen (3.18); convergente si el límite existe |
| Ex. 3.47 $\int_1^\infty\frac1x dx$ | 59-60 | 289-290 | diverge a $+\infty$; Fig. 3.18 |
| Ex. 3.48 volumen (trompeta de Gabriel) | 60-61 | 290-291 | $V=\pi\int_1^\infty\frac1{x^2}dx=\pi$; Fig. 3.19; conclusión: área infinita, volumen finito |
| Ex. 3.49 accidentes de tráfico | 61-62 | 291-292 | $P(x>a)=\int_a^\infty\lambda e^{-\lambda x}dx$ con $\lambda=\frac13$ (un accidente cada tres meses): $P(x>10)=e^{-10/3}\approx0.0357$ (comprobado); el texto cierra con un valor $3.8\times10^{-11}$ y "8 meses" que no corresponde (ver erratas) |
| Ex. 3.50 $\int_{-\infty}^0\frac{dx}{x^2+4}=\frac\pi4$ | 62 | 292 | con la definición (3.17) |
| Ex. 3.51 $\int_{-\infty}^{+\infty}xe^xdx$ | 62-63 | 292-293 | diverge: $\int_{-\infty}^0=-1$ (con L'Hôpital sobre $te^t$) y $\int_0^{+\infty}=+\infty$. Checkpoint 3.27 |
| Integrando discontinuo: Definition (3.19) a (3.21) | 63-64 | 293-294 | discontinuidad en $b$ (3.19): $\lim_{t\to b^-}\int_a^t$; en $a$ (3.20): $\lim_{t\to a^+}\int_t^b$; en un punto interior $c$ (3.21): se parte en dos y ambas deben converger; Fig. 3.21 |
| Ex. 3.52 $\int_0^4\frac{dx}{\sqrt{4-x}}=4$ | 64-65 | 294-295 | converge |
| Ex. 3.53 $\int_0^2x\ln x\,dx=2\ln2-1$ | 65 | 295 | converge; el límite $t^2\ln t$ se resuelve con L'Hôpital (comprobado: 0.3863) |
| Ex. 3.54 $\int_{-1}^1\frac1{x^3}dx$ | 65-66 | 295-296 | diverge porque diverge $\int_{-1}^0$ (no vale "se cancelan por simetría"). Checkpoint 3.28: $\int_0^2\frac1x dx$ |
| Theorem 3.7: teorema de comparación | 66-67 | 296-297 | $0\le f\le g$ en $[a,\infty)$: i) si $\int f$ diverge, $\int g$ diverge; ii) si $\int g=L$ converge, $\int f=M\le L$; Fig. 3.22 |
| Ex. 3.55 y 3.56 comparación | 67-68 | 297-298 | $\int_1^\infty\frac1{xe^x}dx$ converge ($\le e^{-x}$, $\int_1^\infty e^{-x}=e^{-1}$); $\int_1^\infty\frac1{x^p}dx$ diverge para $p<1$ (compara con $\frac1x$). Checkpoint 3.29: $\int_e^\infty\frac{\ln x}xdx$ |
| Student Project: transformadas de Laplace | 68-70 | 298-300 | $L\{f\}(s)=\int_0^\infty e^{-st}f(t)dt$; $L\{t\}=\frac1{s^2}$; preguntas 1-5 (transformadas de $1$, $e^{-3t}$, $t^2$; $L\{f'\}=sL\{f\}-f(0)$; $L\{\int f\}=\frac1sL\{f\}$) |
| 3.7 EXERCISES | 70-72 | 300-302 | #347-373 convergencia; #374-399 con valores; #394-400 áreas y volúmenes; #401-403 transformadas de Laplace; #406-407 densidades de probabilidad |
| Chapter 3 Review: Key Terms | 73 | 303 | error absoluto y relativo, CAS, integral impropia, partes, tabla de integrales, punto medio, integración numérica, fracciones parciales, fórmula de reducción, Simpson, trapecio, integral trigonométrica y sustitución trigonométrica |
| Key Equations | 73-74 | 303-304 | partes (indefinida y definida), productos de senos y cosenos, reducciones (3.6) y (3.7), $M_n$, $T_n$, $S_n$, las tres cotas de error, definiciones de integral impropia |
| Key Concepts | 74-75 | 304-305 | resumen de 3.1 a 3.7; recuerda las tres sustituciones y que el grado del numerador debe ser menor que el del denominador |
| Chapter 3 Review Exercises | 75-76 | 305-306 | #408-411 verdadero/falso; #412-420 evaluar por el método indicado; sin soluciones |

Filas de la tabla B: 98.

## Erratas e inconsistencias

Cada una se recalculó con python3 (aritmética) y/o se comprobó en la página renderizada.

**Vol. 1, cap. 5 (`calc1u5`)**

- **Ex. 5.7 (p. 531, PDF 25)**: de $\frac{16n^3+24n^2+n}{6n^3}$ a $\frac83+\frac4n+\frac1{6n^2}$. La línea anterior es $\frac8{n^3}\cdot\frac{2n^3+3n^2+n}6$, que da el numerador $16n^3+24n^2+8n$ (el libro imprime $+n$, sin el 8); por eso el último término correcto es $\frac{4}{3n^2}$ y no $\frac1{6n^2}$. Recalculado: con $n=1000$ la suma exacta vale $2.670668$, igual que $\frac83+\frac4n+\frac4{3n^2}=2.670668$; con $\frac1{6n^2}$ da $2.670667$. El límite $\frac83$ no cambia.
- **Ex. 5.25 (p. 570, PDF 64)**: la respuesta impresa es "$\frac{14}6$ m". La cuenta de arriba da $\frac{41}6\approx6.83$ m (comprobado: $\frac{25}6-\frac32+\frac{25}6=\frac{41}6$). $\frac{14}6=\frac73$ no coincide.
- **Ex. 5.27 (p. 572, PDF 66)**: la segunda integral se escribe con límite inferior $\frac13$ ($\int_{1/3}^1 2(15)dt$) en una de las líneas; debe ser $\frac12$. El resultado 25 es correcto ($10+15$).
- **Ex. 5.35 (p. 590, PDF 84)**: el enunciado es $\int_0^1xe^{4x^2+3}dx$, pero la solución dice "Let $u=4x^3+3$". Con ese $u$, $du=12x^2dx$ y no $8x\,dx$; debe ser $u=4x^2+3$ ($du=8x\,dx$, $x=0\to u=3$, $x=1\to u=7$). El valor $\frac{e^7-e^3}8\approx134.568$ es correcto.
- **Propiedad (5.13) (p. 538, PDF 32) y Key Equations (p. 617)**: se escribe $\int_a^bc\,f(x)dx=c\int_a^bf(x)$ sin el $dx$ del segundo miembro.
- **(5.25) (p. 608, PDF 102) y Key Equations (p. 618)**: $\int\frac{du}{u\sqrt{u^2-a^2}}=\frac1a\sec^{-1}\frac ua+C$ no lleva el valor absoluto. La fórmula correcta es $\frac1a\sec^{-1}\frac{|u|}a+C$; sin él falla para $u<-a$.
- **p. 553 (PDF 47)**: dice que la FTC parte 1 garantiza que "cualquier función integrable tiene una antiderivada" y luego precisa "en concreto, toda continua". Lo primero es falso: una función con un salto (ej. $0$ para $x<0$, $1$ para $x\ge0$) es integrable y no tiene antiderivada. Solo se garantiza para funciones continuas (el teorema pide $f$ continua).
- **Demostración de la parte 1 (p. 553, PDF 47)**: mezcla $f(t)dt$ con $f(x)dx$ en la misma cadena ("$\frac1h\int_x^{x+h}f(x)dx=f(c)$") y la variable de integración es $t$.
- **Demostración de la parte 2 (p. 556, PDF 50)**: dice "para $i=0,1,\dots,n$ podemos hallar $c_i$ en $[x_{i-1},x_i]$"; el índice va de $1$ a $n$ (con $i=0$ aparece $x_{-1}$).
- **Suma de cubos con $i=0$ (p. 511, Ex. 5.3, y Key Equations p. 617)**: $\sum_{i=0}^{10}i^3$ y $\sum_{i=0}^{n}i^3=\left[\frac{n(n+1)}2\right]^2$ empiezan en $i=0$; la regla de la p. 510 y el enunciado "1, 2, ..., 10" la dan desde $i=1$. El valor no cambia (el término $i=0$ es 0).
- **Ex. 5.5 (p. 521, PDF 15)**: el índice de la suma es $k$ ($\sum_{k=1}^4(10-x^2)(0.25)$) aunque en el resto de la sección es $i$, y $x$ no tiene subíndice. Cosmético.
- **Ex. 5.27 / Checkpoint 5.23 (p. 572)**: en el checkpoint, el viento salta de 15 mph (límite por la izquierda en $t=\frac12$) a 10 mph ($-10\cdot\frac12+15$). No es un error pero la función es discontinua; sigue siendo integrable.
- **Fig. 5.5 (p. 514, PDF 8)**: la función es $f(x)=\frac{x^2}2$ pero en el texto extraído sale solo "$x^2$" y el "2" del denominador queda separado; la cuenta ($L_6=3.4375$, $R_6=5.6875$) solo cuadra con $\frac{x^2}2$ (con $x^2$ serían 6.875 y 11.375).

**Vol. 2, cap. 3 (`calc2u3`)**

- **Ex. 3.49 (p. 292, PDF 62)**: $P(x>10)=e^{-10/3}\approx0.0357$ (comprobado: 0.035674). Después el texto dice "El valor $3.8\times10^{-11}$ representa la probabilidad de que no haya accidentes en 8 meses... es muy pequeño, así que es razonable concluir que los cambios fueron efectivos". Es un resto de una edición anterior con otros datos (8 meses y otro $\lambda$): con 10 meses la probabilidad es del 3.6%, no $3.8\times10^{-11}$, y con 8 meses sería $e^{-8/3}\approx0.069$. La conclusión (cambios efectivos) se sostiene con 3.6%, pero la cifra citada está mal.
- **Ex. 3.45 (p. 284, PDF 54)**: el enunciado y la cota dicen $S_2$, pero la primera fórmula del cálculo se escribe "$S_4=\frac13\cdot\frac12(f(0)+4f(\frac12)+f(1))=\frac14$". Es $S_2$ (dos subintervalos).
- **Ex. 3.46 (p. 285, PDF 55)**: en la suma de $S_6$ el primer valor está redondeado a 4 decimales (1.4142) y los demás a 5 (1.80278, 2.23607...). El resultado 8.14594 es correcto (exacto 8.145774).
- **Ex. 3.36 (p. 273, PDF 43)**: remite a la fórmula "#88 de Appendix A"; ese apéndice no está en los archivos, así que la fórmula no se puede comprobar aquí (se verificó derivando que el resultado es correcto).

## Lo que el material NO trae

**Vol. 1, cap. 5**

- Demostración de las fórmulas $\sum i$, $\sum i^2$, $\sum i^3$ (solo enunciadas, p. 510; la demostración de las propiedades 1, 4 y 5 de la sigma se deja en ejercicios).
- Regla del punto medio y regla del trapecio (aparecen en el Vol. 2, 3.6); no hay Simpson aquí.
- Demostración de que el límite de sumas de Riemann existe y no depende de $x_i^*$ (se cita "fuera del alcance", p. 520). Tampoco el criterio de Lebesgue ni la integrabilidad de funciones monótonas.
- Definición formal de antiderivada e integral indefinida y la tabla de antiderivadas: remiten al cap. 4 ("Antiderivatives"), que no está en este archivo; aquí solo se usa la idea ("familia de funciones", p. 529 y 566).
- La notación $\int f(x)dx$ para la antiderivada general con $+C$ se usa desde la sustitución (5.5) pero no se define en este archivo.
- Integrales de $\tan x$, $\sec x$, $\sinh x$, etc. (están en el Vol. 2, 3.2); aquí solo exponenciales, logaritmos y tres inversas trigonométricas.
- Funciones definidas a trozos con integrales de área total sin partir (solo se hace partiendo en el cero).
- Aplicaciones de la integral a áreas entre curvas y volúmenes (cap. 6).
- Soluciones de los Checkpoints y de los ejercicios (el archivo trae solo los enunciados).
- Fórmula explícita de la suma de Riemann para $f(x)=x^3$ o más general; solo hay un cálculo con la definición (Ex. 5.7).

**Vol. 2, cap. 3**

- Test p general para $\int_1^\infty\frac1{x^p}dx$: solo se ve $p=1$ (Ex. 3.47), $p=2$ (Ex. 3.48), $p<1$ (Ex. 3.56); el caso $p>1$ converge no se enuncia como resultado, solo aparece en los ejercicios #374-375.
- Integrales impropias de tipo mixto (infinito y discontinuidad a la vez) y el teorema de comparación para integrales con discontinuidad en un extremo (el 3.7 es solo para intervalos infinitos).
- Sustitución $t=\tan(x/2)$ (solo se da en los ejercicios 240-242; no hay ejemplo resuelto).
- Método tabular (DI) para partes repetidas; fórmula de reducción para $\int x^ne^xdx$ (solo ejercicio #48).
- Demostración de las cotas de error (3.12), (3.13) y (3.15), y de la existencia de la descomposición en fracciones parciales ("más allá del alcance del curso", p. 263).
- Extrapolación de Richardson o integración de Romberg.
- El método de "cubrir" (Heaviside) con ese nombre; aparece como "sustitución estratégica" (PDF 34).
- Cómo factorizar un polinomio general del denominador: se parte de factorizaciones evidentes (Ex. 3.34 factoriza $x^3-8$ como diferencia de cubos; el ejercicio 213 solo sugiere el teorema de la raíz racional).
- Soluciones de ejercicios.

## Búsqueda rápida por concepto

| Concepto | Mejores páginas (PDF; impresa entre paréntesis) |
|---|---|
| **Sumas de Riemann y área bajo la curva** | `calc1u5` PDF 6-7 (512-513) partición y $L_n$, $R_n$ (5.6)-(5.7); PDF 8-9 (514-515) Fig. 5.5 y Ex. 5.4; PDF 10-13 (516-519) la secuencia $L_4, L_8, L_{32}$ y la Tabla 5.1; PDF 13 (519) Definition de suma de Riemann y del área como límite; PDF 14 (520) sumas superior e inferior; PDF 14-16 (520-522) Ex. 5.5-5.6; PDF 24-25 (530-531) Ex. 5.7 (con errata); `calc2u3` PDF 47 (277) punto medio como suma de Riemann |
| **Notación sigma en integrales** | `calc1u5` PDF 2-3 (508-509) notación y Ex. 5.1; PDF 3-4 (509-510) propiedades (5.1)-(5.5); PDF 4 (510) sumas de potencias; PDF 4-5 (510-511) Ex. 5.2-5.3; PDF 24-25 (530-531) uso en Ex. 5.7; PDF 111 (617) Key Equations |
| **Integral definida (propiedades, signo del área)** | `calc1u5` PDF 23 (529) Definition (5.8), integrando, límites y variable muda; PDF 24 (530) Theorem 5.1; PDF 26-28 (532-534) área neta y Ex. 5.9; PDF 30-31 (536-537) área total y Ex. 5.10; PDF 31-32 (537-538) propiedades (5.9)-(5.14); PDF 34-35 (540-541) Theorem 5.2 de comparación y Ex. 5.13; PDF 35-37 (541-543) valor promedio y Ex. 5.14; PDF 66-68 (572-574) pares e impares |
| **Integral indefinida y antiderivada** | `calc1u5` PDF 23 (529) "definida = número; indefinida = familia de funciones"; PDF 47 (553) toda continua tiene antiderivada; PDF 51 (557) por qué no hace falta $+C$ en la definida; PDF 60 (566) definida o indefinida según el caso; PDF 78 (584) Theorem 5.7; PDF 89 (595) y PDF 95 (601) tablas de fórmulas exponenciales y logarítmicas. La definición formal y la tabla de antiderivadas no están (ver "No aparece") |
| **Teorema fundamental del cálculo (las dos partes)** | `calc1u5` PDF 43-44 (549-550) Theorem 5.3 (valor medio para integrales, base de la prueba); PDF 46 (552) Theorem 5.4 parte 1 (5.16) y comentario sobre $F$ como función; PDF 47 (553) demostración; PDF 47-49 (553-555) Ex. 5.17-5.19 (con la regla de la cadena y con dos límites variables); PDF 49 (555) Theorem 5.5 parte 2 (5.17); PDF 50 (556) demostración; PDF 50-53 (556-559) Ex. 5.20-5.22; PDF 112 (618) Key Equations. Errata sobre "integrable" en PDF 47 |
| **Cambio neto (net change)** | `calc1u5` PDF 61 (567) Theorem 5.6 (5.18); PDF 61-62 (567-568) desplazamiento 50 mi frente a distancia 110 mi; PDF 62-64 (568-570) Ex. 5.24-5.25 (con errata); PDF 64-65 (570-571) Ex. 5.26; PDF 65-66 (571-572) Ex. 5.27; PDF 94 (600) Ex. 5.43 (crecimiento de población con $G(10)=G(0)+\int$) |
| **Regla de sustitución** | `calc1u5` PDF 78 (584) Theorem 5.7 (5.19) y demostración; PDF 79 (585) Problem-Solving Strategy; PDF 79-82 (585-588) Ex. 5.30-5.33; PDF 83 (589) Theorem 5.8 (5.20) con cambio de límites; PDF 83-85 (589-591) Ex. 5.34-5.36; PDF 89-98 (595-604) sustitución con exponenciales y logaritmos; PDF 102-106 (608-612) con inversas trigonométricas (Ex. 5.50, 5.52). `calc2u3`: PDF 15-17 (245-247) $u=\sec x$ o $u=\tan x$ |
| **Integración por partes** | `calc2u3` PDF 2 (232) deducción de la fórmula y Theorem 3.1 (3.1); PDF 2-3 (232-233) Ex. 3.1; PDF 3-4 (233-234) LIATE; PDF 4-5 (234-235) Ex. 3.2-3.4 (potencias repetidas y elección de $u$); PDF 6-7 (236-237) Ex. 3.5 (la integral que reaparece); PDF 7 (237) Theorem 3.2 (3.2) definida; PDF 7-9 (237-239) Ex. 3.6-3.7 (área y volumen); PDF 17 (247) $\sec^3$ por partes (Ex. 3.18) |
| **Fracciones parciales** | `calc2u3` PDF 32-33 (262-263) objetivos y división larga previa; PDF 33-35 (263-265) factores lineales no repetidos y Ex. 3.29 con los dos métodos (igualar coeficientes y sustitución estratégica); PDF 35 (265) Ex. 3.30; PDF 36 (266) factores repetidos y Ex. 3.32; PDF 37 (267) The General Method; PDF 37-40 (267-270) Ex. 3.33-3.35 (cuadráticos irreducibles); PDF 35-36 (265-266) Ex. 3.31 (tras una sustitución) |
| **Integrales impropias** | `calc2u3` PDF 58-59 (288-289) Definition (3.16)-(3.18); PDF 59-61 (289-291) Ex. 3.47-3.48 (área infinita y volumen finito, trompeta de Gabriel); PDF 61-62 (291-292) Ex. 3.49 (probabilidad, con errata); PDF 62-63 (292-293) Ex. 3.50-3.51; PDF 63-64 (293-294) Definition (3.19)-(3.21) para integrando discontinuo; PDF 64-66 (294-296) Ex. 3.52-3.54; PDF 66-68 (296-298) Theorem 3.7 de comparación y Ex. 3.55-3.56; PDF 68-70 (298-300) Student Project (Laplace) |
| **Integración numérica** (extra) | `calc2u3` PDF 47 (277) punto medio (3.10); PDF 49 (279) trapecio (3.11); PDF 50-52 (280-282) errores y cotas (3.12)-(3.13); PDF 52-54 (282-284) Simpson (3.14) y (3.15); PDF 74 (304) Key Equations |
| **Trigonométricas y sustitución trigonométrica** (extra) | `calc2u3` PDF 11-18 (241-248) integrales trigonométricas, (3.3)-(3.7); PDF 20-29 (250-259) sustitución trigonométrica y Fig. 3.4, 3.7, 3.9 |

## Conteo de filas

Tabla A (cap. 5 del Vol. 1): 105. Tabla B (cap. 3 del Vol. 2): 98. Total: 203.
