# Mapa de citas: OpenStax Calculus Volume 2 (Strang, Herman), unidades 4, 5 y 6: ecuaciones diferenciales, sucesiones y series, series de potencias

Carpeta: `/Users/franciscocastillo/brain/03-Matematicas/10-Calculo-II/` (OpenStax, CC BY-NC-SA 4.0; el libro completo está en `Libros/openstax-calculus-volume-2.pdf`, 737 páginas, y aquí está partido por unidades).
Tres archivos, un solo mapa. Ids sugeridos para `fuentes.js`: `calc2u4`, `calc2u5`, `calc2u6`.

- `calc2u4` = `Unidad 04 - Introduction to Differential Equations.pdf` (66 páginas PDF; capítulo 4 del libro, impresas 307 a 372).
- `calc2u5` = `Unidad 05 - Sequences and Series.pdf` (96 páginas PDF; capítulo 5, impresas 373 a 468).
- `calc2u6` = `Unidad 06 - Power Series.pdf` (66 páginas PDF; capítulo 6, impresas 469 a 534).

## Relación entre página del PDF y página impresa (verificada)

Se comprobó en **todas** las páginas de cada archivo (el número impreso está en el encabezado de cada página y la PDF 1 de cada archivo ya lo lleva, es la apertura del capítulo):

- `calc2u4`: página impresa = página PDF + 306. Ejemplos: PDF 1 = 307, PDF 19 = 325, PDF 45 = 351, PDF 66 = 372.
- `calc2u5`: página impresa = página PDF + 372. Ejemplos: PDF 1 = 373, PDF 49 = 421, PDF 85 = 457, PDF 96 = 468.
- `calc2u6`: página impresa = página PDF + 468. Ejemplos: PDF 1 = 469, PDF 35 = 503, PDF 48 = 516, PDF 66 = 534.

Las tablas siguientes dan los dos números. **`data-pag` = página PDF; `data-pimp` = página impresa.**

Notas técnicas para quien construya la página:
- Los PDF tienen capa de texto, pero `pdftotext` pierde casi todas las fórmulas (salen en blanco) y las ligaduras "fi" y "ff" salen como "g" y "f" ("degned", "diferential"), así que no sirve para buscar. Todo se leyó en las páginas renderizadas. Las tablas numéricas (Tabla 4.2, 4.3, 5.1, 5.2, 5.3, 6.1) y varias figuras son imagen.
- Numeración de ejemplos y ecuaciones: es la del libro. Los ejemplos van numerados "4.1", "5.1", "6.1" y así; las ecuaciones numeradas llevan el número entre paréntesis (por ejemplo (4.2), (5.7), (6.5)). Hay un "Checkpoint" sin número de cita después de casi cada ejemplo (se numera igual que el ejemplo: 4.1, 4.2...) y luego un bloque de ejercicios por sección.
- Los ejercicios de sección están numerados corrido por capítulo: cap. 4: 1 a 290; cap. 5: 1 a 404; cap. 6: 1 a 278 (rangos por sección en cada tabla). El libro trae las respuestas en otro archivo (`Unidad 08`), no en estos tres.

---

## A: `calc2u4`, cap. 4 Ecuaciones diferenciales (PDF = impresa - 306)

| Tema | PDF | Impresa | Qué hay exactamente |
|---|---|---|---|
| Apertura del capítulo | 1 | 307 | Figura 4.1 (venados de cola blanca); índice 4.1 a 4.5; adelanta el Ejemplo 4.14 (población de venados) |
| 4.1 Conceptos básicos: ecuación diferencial | 2 | 308 | Objetivos 4.1.1 a 4.1.5; Definición de ecuación diferencial y de solución (con $y'=3x^2$, solución $y=x^3$); Tabla 4.1 (tres ecuaciones y sus soluciones: $y'=2x$, $y=x^2$; $y'+3y=6x+11$, $y=e^{-3x}+2x+3$; $y''-3y'+2y=24e^{-2x}$, $y=3e^x-4e^{2x}+2e^{-2x}$); recuadro MEDIA (enlace web) |
| Verificar una solución | 3 | 309 | Ejemplo 4.1 ($y=e^{-3x}+2x+3$ resuelve $y'+3y=6x+11$, por sustitución con regla de la cadena); Checkpoint 4.1 |
| Orden | 3 | 309 | Definición de orden; Ejemplo 4.2 (órdenes 1, 3 y 4); Checkpoint 4.2 |
| Solución general y particular | 3-4 | 309-310 | $y'=2x$ tiene $y=x^2+C$ (solución general); Figura 4.2 (familia $c=-4,-2,0,2,4$ en la página 310); Ejemplo 4.3 (por el punto $(2,7)$ sale $C=3$, $y=x^2+3$); Checkpoint 4.3 |
| Problema de valor inicial | 4 | 310 | Definición de valor inicial y de problema de valor inicial; regla: el número de condiciones iniciales es igual al orden (ejemplo $y''-3y'+2y=4e^x$ con $y(0)=2$, $y'(0)=-1$); se explica por qué la variable independiente suele ser $t$ |
| Verificar un PVI | 5 | 311 | Ejemplo 4.4 ($y=2e^{-2t}+e^t$ en $y'+2y=3e^t$, $y(0)=3$); Checkpoint 4.4; Figura 4.3 (familia $y=Ce^{-2t}+e^t$ con la particular marcada) |
| Resolver un PVI integrando | 6 | 312 | Ejemplo 4.5 ($y'=3e^x+x^2-4$, $y(0)=5$, ecuación (4.1), dos constantes que se funden en $C$; $y=3e^x+\tfrac13x^3-4x+2$); Análisis: general contra particular; Checkpoint 4.5 |
| Caída libre sin aire (velocidad) | 7-8 | 313-314 | Figuras 4.4 y 4.5; $F=ma$ lleva a $v'(t)=-g$ (la masa se cancela); Ejemplo 4.6 ($v_0=10$ m/s, $m=0.15$ kg: $v=-9.8t+10$, $v(2)=-9.6$ m/s); Checkpoint 4.6 |
| Caída libre sin aire (posición) | 8-9 | 314-315 | $s'=v$, $s(0)=s_0$; Ejemplo 4.7 ($s(t)=-4.9t^2+10t+3$, $s(2)=3.4$ m; la masa se cancela) |
| Ejercicios 4.1 | 9-11 | 315-317 | Ejercicios 1 a 65 (orden, verificar soluciones, soluciones particulares, PVI de caída libre en la Tierra y en Marte, ejercicios con calculadora) |
| 4.2 Campos de pendientes y métodos numéricos: crear un campo | 11-13 | 317-319 | Objetivos 4.2.1 a 4.2.3; forma $y'=f(x,y)$; Figura 4.6 (campo de $T'=-0.4(T-72)$, enfriamiento con dos soluciones); ejemplo $y'=3x+2y-4$: en $(1,2)$ la pendiente es 3; Figura 4.7; **Definición de campo de direcciones (campo de pendientes)** (p.319) |
| Usar un campo de pendientes | 13-14 | 319-320 | Aproximación lineal paso a paso: en $(0,1)$ la pendiente es $-2$ y $L(x)=1-2x$, $L(0.1)=0.8$; Figura 4.8 (curva solución por $(0,1)$); solución exacta $y=-\tfrac32x+\tfrac54-\tfrac14e^{2x}$ (comprobada con sympy); Checkpoint 4.7 ($y'=x^2-y^2$ por $(-1,2)$) |
| Soluciones de equilibrio | 14-15 | 320-321 | $y'=(x-3)(y^2-4)$: horizontales en $y=\pm2$; Definición de **solución de equilibrio**; Figura 4.9 (dos soluciones pegadas a $y=-2$) |
| Estabilidad asintótica | 15-17 | 321-323 | Definición de solución asintóticamente estable, inestable y semiestable (con $\varepsilon$); Figuras 4.10 y 4.11 (PVI $y(0)=0.5$ y $y(0)=-3$); Ejemplo 4.8 ($y'=(y-3)^2(y^2+y-2)$: $y=-2$ estable, $y=1$ inestable, $y=3$ semiestable; Figura 4.12; recalculado: correcto); Checkpoint 4.8 |
| **Método de Euler** (idea y a mano) | 17-19 | 323-325 | Ejemplo guía $y'=2x-3$, $y(0)=3$, solución $y=x^2-3x+3$ y Figura 4.13 (segmentos con paso 0.5); luego $y'=x^2-y^2$, $y(-1)=2$ con $h=0.1$: $x_1=-0.9$, $y_1=1.7$; $x_2=-0.8$, $y_2=1.492$; Tabla 4.2 (n=0 a 10) |
| **Teorema 4.1 (Método de Euler)** | 19 | 325 | $x_n=x_0+nh$, $y_n=y_{n-1}+h\,f(x_{n-1},y_{n-1})$, ecuación (4.2); $h$ típico 0.1 o 0.05; el compromiso entre paso y exactitud |
| Paso grande contra paso pequeño | 20 | 326 | Figura 4.14 (a) $h=0.5$ y (b) $h=0.25$ para $y'=2x-3$ |
| Euler con tabla | 20-21 | 326-327 | Ejemplo 4.9 ($y'=3x^2-y^2+1$, $y(0)=2$, $h=0.1$, de 0 a 1; Tabla 4.3: 1.7, 1.514, 1.3968, 1.3287, 1.3001, 1.3061, 1.3435, 1.4100, 1.5032, 1.6202; recalculada, correcta); Checkpoint 4.9 ($y'=x^3+y^2$, $y(1)=-2$); dos recuadros MEDIA con applets |
| Ejercicios 4.2 | 21-27 | 327-333 | Ejercicios 66 a 118 (campos dados para $y'=-2y$ y otro, dibujar campos, emparejar campo con ecuación, Euler) |
| 4.3 Ecuaciones separables | 28 | 334 | Objetivos 4.3.1 y 4.3.2; **Definición** $y'=f(x)g(y)$, ecuación (4.3); ejemplos de separables y la palabra "autónoma"; **Estrategia de resolución en 5 pasos** (constantes con $g(y)=0$; separar $\frac{dy}{g(y)}=f(x)dx$; integrar; despejar $y$; condición inicial); Ejemplo 4.10 empieza |
| Ejemplo 4.10 | 28-29 | 334-335 | $y'=(x^2-4)(3y+2)$: constante $y=-\tfrac23$, integral con $u=3y+2$, $y=\frac{-2+Ce^{x^3-12x}}{3}$; Checkpoint 4.10 |
| Ejemplo 4.11 | 29-31 | 335-337 | $y'=(2x+3)(y^2-4)$, $y(0)=-1$: constantes $\pm2$, fracciones parciales (ecuación (4.4)), $\ln\left|\frac{y-2}{y+2}\right|=4x^2+12x+C_1$, $C_2=-3$, $y=\frac{2-6e^{4x^2+12x}}{1+3e^{4x^2+12x}}$ (comprobado); Figura 4.15; Checkpoint 4.11 |
| Aplicación: concentración de sal | 31-33 | 337-339 | Ejemplo 4.12 (tanque de 100 L, 4 kg de sal, entra 0.5 kg/L a 2 L/min y sale a 2 L/min); Figura 4.16; ecuación (4.5) $\frac{du}{dt}=\text{ENTRADA}-\text{SALIDA}$; $\frac{du}{dt}=1-\frac{u}{50}$, $u=50-46e^{-t/50}$, límite 50 kg (comprobado); Checkpoint 4.12 |
| Aplicación: ley de enfriamiento de Newton | 33-35 | 339-341 | Ecuación (4.6) $\frac{dT}{dt}=k(T-T_s)$ y PVI (4.7); Ejemplo 4.13 (pizza de 200 F en cocina de 75 F, 190 F tras 1 min): $T=75+125e^{kt}$, $k=\ln(23/25)\approx-0.08338$, 150 F a los $t\approx6.12$ min (comprobado); Figura 4.17; Checkpoint 4.13 |
| Ejercicios 4.3 | 35-37 | 341-343 | Ejercicios 119 a 167 (PVI con $y_0=0$; separables generales; modelos de mezclas, enfriamiento, hojas y desintegración) |
| 4.4 La ecuación logística: crecimiento exponencial | 38 | 344 | Objetivos 4.4.1 a 4.4.3; $P(t)=P_0e^{rt}$ con $P_0=100$, $r=0.03$ (Figura 4.18); $\frac{dP}{dt}=rP$, $P(0)=P_0$ (la tasa es proporcional a la población) |
| Capacidad de carga | 39 | 345 | Por qué el crecimiento exponencial es poco realista; **Definición de capacidad de carga** $K$; **Definición de ecuación diferencial logística** $\frac{dP}{dt}=rP\left(1-\frac PK\right)$, ecuación (4.8); Verhulst 1845; lectura del factor $1-P/K$ (cerca de 0, igual a 0, negativo); recuadro MEDIA |
| Línea de fase | 39-40 | 345-346 | Figura 4.19 (flechas: baja si $P>K$, sube si $0<P<K$, baja si $P<0$) |
| Ejemplo 4.14 (venados de Kentucky) | 40-43 | 346-349 | $P_0=900{,}000$, $K=1{,}072{,}764$ (39,732 mi$^2$ por 27 venados), $r=\ln2/3\approx0.2311$; Figura 4.20; (a) PVI, (b) separación de variables con fracciones parciales: $\frac{P}{1{,}072{,}764-P}=C_2e^{0.2311t}$, $C_2=\frac{25000}{4799}\approx5.209$, $P(t)=\frac{1{,}072{,}764e^{0.2311t}}{0.19196+e^{0.2311t}}$; Figura 4.21; (c) $P(3)\approx978{,}830$ (recalculado: 978,830.23), lejos de duplicar; (d) con $P_0=1{,}200{,}000$ sale $C_2\approx-9.431$ y la población baja hacia $K$; Figura 4.22 |
| Resolver la logística en general | 43-45 | 349-351 | Pasos: constantes $P=0$ y $P=K$; $\frac{dP}{P(K-P)}=\frac rKdt$; $\frac{K}{P(K-P)}=\frac1P+\frac1{K-P}$; $\frac{P}{K-P}=C_1e^{rt}$ ecuación (4.9); $P=\frac{C_1Ke^{rt}}{1+C_1e^{rt}}$ ecuación (4.10); $C_1=\frac{P_0}{K-P_0}$; **Teorema 4.2**: $P(t)=\frac{P_0Ke^{rt}}{(K-P_0)+P_0e^{rt}}$, ecuación (4.11) |
| Exponencial contra logística | 45 | 351 | Misma $P_0=900{,}000$: se reduce a la misma fórmula del ejemplo; **Figura 4.23** (curva exponencial y logística superpuestas, asíntota $P=K$); "20 años antes (1984)" la logística era casi exponencial |
| Punto de inflexión | 45-46 | 351-352 | $P''=0$ da $t=\frac1r\ln\frac{K-P_0}{P_0}$ (solo existe si $P_0<K$); lectura: donde pasa de cóncava hacia arriba a cóncava hacia abajo ("empieza a aplanarse"); Checkpoint 4.14 (conejos); Proyecto de estudiante (modelo con umbral $T$): $\frac{dP}{dt}=-rP\left(1-\frac PK\right)\left(1-\frac PT\right)$, ecuación (4.12) |
| Proyecto de estudiante: logística con umbral | 46-47 | 352-353 | Población umbral para elk (Montana), preguntas 1 a 4 (campo de direcciones, constantes, límite, solución implícita) |
| Ejercicios 4.4 | 47-49 | 353-355 | Ejercicios 168 a 207: estabilidad de equilibrios, logística con y sin cosecha (ejercicios 179 a 186 con pesca constante o proporcional), logística con umbral (189 a 193), **ecuación de Gompertz** (194 a 199), crecimiento más rápido en $K/2$ (200 a 202), ajuste a datos de la grulla trompetera (203 a 207, tabla en p.356) |
| 4.5 Ecuaciones lineales de primer orden: motivación | 50-51 | 356-357 | Objetivos 4.5.1 a 4.5.3; el modelo de caída con resistencia del aire: Figura 4.24; $m\frac{dv}{dt}=-kv-mg$, $v(0)=v_0$, ecuación (4.13) |
| Definición de lineal | 51 | 357 | **Definición** $a(x)y'+b(x)y=c(x)$, ecuación (4.14); tres ejemplos lineales y tres no lineales ($(y')^4$, $y^3$, $(y')^2$) |
| Forma estándar | 52 | 358 | Dividir por $a(x)$: $y'+\frac{b(x)}{a(x)}y=\frac{c(x)}{a(x)}$ ecuación (4.15); $p(x)=\frac{b}{a}$, $q(x)=\frac ca$; $y'+p(x)y=q(x)$ ecuación (4.16); Ejemplo 4.15 (tres ecuaciones a forma estándar; en el b) se pide $x\ne0$ y sale ecuación (4.17)) |
| **Factor integrante** (deducción) | 52-54 | 358-360 | Forma $y'+p(x)y=q(x)$ (4.18); multiplicar por $\mu(x)$ (4.19) y pedir que sea la regla del producto: $\mu'=\mu p$; $\mu(x)=C_2e^{\int p(x)dx}$; (4.20), (4.21) $\frac{d}{dx}(\mu y)=\mu q$; (4.22); solución **(4.23)** $y=\frac1{\mu(x)}\left[\int\mu(x)q(x)dx+C\right]$; aclaración de por qué se toma $C=0$ en $\mu$ |
| **Estrategia en 5 pasos** | 54 | 360 | (1) forma estándar y $p$, $q$; (2) $\mu=e^{\int p}$; (3) multiplicar; (4) integrar y dividir por $\mu$; (5) condición inicial |
| Ejemplo 4.16 | 54-55 | 360-361 | $xy'+3y=4x^2-3x$, $x>0$: $\mu=x^3$, $y=\frac{4x^2}{5}-\frac{3x}{4}+Cx^{-3}$ (comprobado); Análisis: la solución no existe en $x=0$ y $\mu=|x|^3$ si $x<0$; Checkpoint 4.16 |
| Ejemplo 4.17 (PVI) | 55 | 361 | $y'+3y=2x-1$, $y(0)=3$: $\mu=e^{3x}$, $y=\frac23x-\frac59+\frac{32}9e^{-3x}$ (comprobado); Checkpoint 4.17 |
| Caída con resistencia del aire | 56-57 | 362-363 | Ejemplo 4.18 (pelota de raqueta $m=0.0427$ kg, $k=0.5$, $v_0=2$): $v'+11.7096v=-9.8$, $\mu=e^{11.7096t}$, $v=2.8369e^{-11.7096t}-0.8369$; altura máxima a $t\approx0.104$ s; $h(t)=-0.2423e^{-11.7096t}-0.8369t+1.2423$, $h\approx1.0836$ m (recalculado: 1.0835); Checkpoint 4.18 (moneda desde el Empire State; velocidad terminal) |
| Circuitos eléctricos | 57-60 | 363-366 | Caídas de voltaje $E_R=Ri$, $E_L=Li'$, $E_C=\frac1Cq$; Figura 4.25; regla de Kirchhoff, ecuaciones (4.24) (RLC), (4.25) (circuito RL), (4.26) (circuito RC); Ejemplo 4.19 ($E=50\sin20t$, $R=5$, $L=0.4$): $i'+12.5i=125\sin20t$, $i=\frac{250\sin20t-400\cos20t}{89}+\frac{400}{89}e^{-12.5t}$ (comprobado) y forma $-\frac{50\sqrt{89}}{89}\cos(20t+\varphi)+\frac{400}{89}e^{-12.5t}$; término de atenuación; Figura 4.26; Checkpoint 4.19 |
| Ejercicios 4.5 | 60-62 | 366-368 | Ejercicios 208 a 261 (linealidad, forma estándar, factores integrantes, PVI, velocidad terminal con resistencia proporcional a $v$ o a $v^2$) |
| Repaso del capítulo | 63-66 | 369-372 | Términos clave; **Ecuaciones clave**: Euler, separable $y'=f(x)g(y)$, concentración de solución, ley de Newton, logística y su solución, modelo con umbral, forma estándar, factor integrante $\mu=e^{\int p\,dx}$ (p.369-370); conceptos clave por sección (p.370); ejercicios de repaso 262 a 290 (p.370-372) |

## B: `calc2u5`, cap. 5 Sucesiones y series (PDF = impresa - 372)

El cap. 5 se mapea completo, con más detalle en lo que sirve para Taylor (límite de una sucesión, series geométricas, residuo, criterio del cociente, series alternadas).

| Tema | PDF | Impresa | Qué hay exactamente |
|---|---|---|---|
| Apertura | 1 | 373 | Figura 5.1 (copo de nieve de Koch); índice 5.1 a 5.6 |
| 5.1 Sucesiones: terminología | 2-4 | 374-376 | Objetivos 5.1.1 a 5.1.3; sucesión como lista ordenada $\{a_n\}$; fórmula explícita y relación recurrente (ejemplo $2^n$ contra $a_n=2a_{n-1}$); **Definición de sucesión infinita**; Figura 5.2 (puntos de $\{2^n\}$); sucesiones aritméticas ($a_n=cn+b$, ejemplo $3,7,11,15,19$) y geométricas ($a_n=cr^n$, ejemplo $2,-\tfrac23,\tfrac29,\dots$) |
| Fórmulas explícitas y recursivas | 4-5 | 376-377 | Ejemplo 5.1 (hallar la fórmula: $a_n=\frac{(-1)^nn}{n+1}$ y $a_n=\frac{3^n}{3n+1}$); Checkpoint 5.1; Ejemplo 5.2 (recurrencias: $a_n=2(-3)^{n-1}$ y $a_n=1-\frac1{2^n}$); Checkpoint 5.2 |
| Límite de una sucesión: idea | 5-6 | 377-378 | Cuatro comportamientos (crece sin cota; tiende a 1; oscila 1 y $-1$; alterna y tiende a 0); Figura 5.3; definición informal de sucesión convergente |
| **Definición formal de límite de una sucesión** | 7 | 379 | $\forall\varepsilon>0\;\exists N$ tal que $|a_n-L|<\varepsilon$ si $n\ge N$; Figura 5.4 (banda $L\pm\varepsilon$); agregar o quitar un número finito de términos no cambia la convergencia; divergente; $\lim=\infty$ solo describe cómo diverge ($\lim(1+3n)=\infty$, $\lim(-5n+2)=-\infty$) |
| Límite por función; geométrica $r^n$ | 7-8 | 379-380 | **Teorema 5.1** (si $a_n=f(n)$ y $\lim_{x\to\infty}f=L$ entonces $a_n\to L$); resumen: $r^n\to0$ si $0<r<1$, $\to1$ si $r=1$, $\to\infty$ si $r>1$ |
| Leyes algebraicas de límites | 8-9 | 380-381 | **Teorema 5.2** (constante, múltiplo, suma, producto, cociente) con demostración de la suma ($\varepsilon/2$); $\lim\frac1{n^k}=0$ |
| Ejemplo 5.3 (convergencia y límites) | 9-11 | 381-383 | (a) $5-\frac3{n^2}\to5$; (b) $\frac{3n^4-7n^2+5}{6-4n^4}\to-\frac34$; (c) $\frac{2^n}{n^2}\to\infty$ (diverge, con L'Hôpital dos veces); (d) $\left(1+\frac4n\right)^n\to e^4$ (límite de la forma $1^\infty$ con logaritmo y L'Hôpital); Checkpoint 5.3 |
| Funciones continuas sobre sucesiones | 11-12 | 383-384 | **Teorema 5.3** ($f$ continua en $L$ y $a_n\to L$ implica $f(a_n)\to f(L)$) con demostración y Figura 5.5; Ejemplo 5.4 ($\cos(3/n^2)\to1$); Checkpoint 5.4 |
| Teorema del sándwich | 12-13 | 384-385 | **Teorema 5.4** con demostración; Figura 5.6; Ejemplo 5.5 ($\cos n/n^2\to0$; $(-1/2)^n\to0$); Checkpoint 5.5; ecuaciones (5.1) a (5.4): $r^n\to0$ si $|r|<1$, $\to1$ si $r=1$, $\to\infty$ si $r>1$, diverge si $r\le-1$ |
| Sucesiones acotadas | 14 | 386 | Definiciones acotada por arriba, por abajo y acotada; **Teorema 5.5** (convergente implica acotada); el recíproco es falso ($(-1)^n$) |
| Sucesiones monótonas y teorema de la convergencia monótona | 15 | 387 | Definiciones de creciente, decreciente y monótona (con "eventualmente"); **Teorema 5.6 (Monotone Convergence Theorem)**; Figura 5.7 (sin demostración) |
| Ejemplo 5.6 | 15-17 | 387-389 | (a) $\frac{4^n}{n!}$: decrece desde $n\ge3$, acotada por 0, límite 0 (usa $a_{n+1}=\frac4{n+1}a_n$); (b) $a_1=2$, $a_{n+1}=\frac{a_n}2+\frac1{2a_n}$: decrece y acotada inferiormente por 1, el límite $L$ cumple $L=\frac L2+\frac1{2L}$, $L=1$; Checkpoint 5.6 |
| Proyecto: números de Fibonacci | 17-18 | 389-390 | Definición de $F_n$, fórmula cerrada $F_n=c_1\lambda_1^n+c_2\lambda_2^n$, razón áurea; Figuras 5.8 y 5.9 |
| Ejercicios 5.1 | 18-22 | 390-394 | Ejercicios 1 a 66 (fórmulas, límites, sándwich, acotadas, Fibonacci, generadores pseudoaleatorios) |
| 5.2 Series infinitas: sumas parciales | 22-24 | 394-396 | Objetivos 5.2.1 a 5.2.3; serie como suma de infinitos términos; el aceite en el lago: $S_k=1+\frac12+\frac14+\dots$ con $S_5=\frac{31}{16}$; Figura 5.10; tabla de $S_k$ (k=5,10,15,20: 1.9375, 1.998, 1.999939, 1.999998); $\sum_{n=1}^\infty\left(\frac12\right)^{n-1}=2$ |
| **Definición de serie** | 24 | 396 | Serie infinita, $k$-ésima suma parcial $S_k$, convergencia como convergencia de $\{S_k\}$, suma $S$; reindexar ($n\to m=n-1$) |
| Ejemplo 5.7 | 25-26 | 397-398 | (a) $\sum\frac n{n+1}$ diverge ($S_k>k/2$); (b) $\sum(-1)^n$ diverge ($S_k$ alterna $-1,0$); (c) $\sum\frac1{n(n+1)}$ converge a 1 ($S_k=\frac k{k+1}$); Checkpoint 5.7 |
| Serie armónica | 26-27 | 398-399 | Ecuación (5.5) $\sum\frac1n$; tabla $S_k$ (k=10 a $10^6$: 2.92897, 5.18738, 7.48547, 9.78761, 12.09015, 14.39273; recalculado: coincide a 5 decimales); demostración $S_{2^j}>1+\frac j2$ (agrupar términos) |
| Propiedades algebraicas de series | 27-28 | 399-400 | **Teorema 5.7** (suma, diferencia, múltiplo constante); Ejemplo 5.8 ($\sum\left[\frac3{n(n+1)}+\left(\frac12\right)^{n-2}\right]=3+2\cdot2=7$); Checkpoint 5.8 |
| **Serie geométrica** | 28-29 | 400-401 | Ecuación (5.6) $\sum_{n=1}^\infty ar^{n-1}$; caso $r=1$ ($S_k=ak$); caso $r\ne1$: $(1-r)S_k=a(1-r^k)$, $S_k=\frac{a(1-r^k)}{1-r}$; $r^k\to0$ si $|r|<1$; **Definición** con ecuación (5.7): converge a $\frac a{1-r}$ si $|r|<1$, diverge si $|r|\ge1$ |
| Ejemplos de geométricas | 29-31 | 401-403 | Reescribir $\sum_{n=0}^\infty\left(\frac23\right)^{n+2}$ como $a=\frac49$, $r=\frac23$, suma $\frac43$; Ejemplo 5.9 ($\sum\frac{(-3)^{n+1}}{4^{n-1}}=\frac{36}7$; $\sum e^{2n}$ diverge); Checkpoint 5.9; Ejemplo 5.10 ($3.\overline{26}=\frac{323}{99}$); Checkpoint 5.10 |
| Ejemplo 5.11 (copo de nieve de Koch) | 31-33 | 403-405 | Figura 5.11; perímetro $L_n=3\left(\frac43\right)^n\to\infty$; área $A_n=\frac{\sqrt3}4\left[\frac85-\frac35\left(\frac49\right)^n\right]\to\frac{2\sqrt3}5$ (comprobado); Análisis (área finita y perímetro infinito, como $\int_1^\infty\frac{dx}{x^2}$) |
| Series telescópicas | 33-35 | 405-407 | $\sum\frac1{n(n+1)}=\sum\left(\frac1n-\frac1{n+1}\right)$, $S_k=1-\frac1{k+1}$; **Definición**; $\sum(b_n-b_{n+1})=b_1-B$; Ejemplo 5.12 ($\sum\left[\cos\frac1n-\cos\frac1{n+1}\right]=\cos1-1$); Checkpoint 5.11 |
| Proyecto: constante de Euler | 35 | 407 | $T_k=\sum_{n=1}^k\frac1n-\ln k\to\gamma$; monotonía, acotación y cota $0<T_k-\gamma\le\frac1k$ |
| Ejercicios 5.2 | 36-41 | 408-413 | Ejercicios 67 a 137 (sumas parciales, geométricas, telescópicas, repetidos, conjuntos fractales) |
| 5.3 Criterio de la divergencia | 41-43 | 413-415 | Objetivos 5.3.1 a 5.3.3; si la serie converge entonces $a_k\to0$ (demostración con $S_k-S_{k-1}$); ecuación (5.8); **Teorema 5.8** (si $a_n\not\to0$ la serie diverge); el recíproco falso ($\sum\frac1n$); Ejemplo 5.13 ($\sum\frac n{3n-1}$ diverge; $\sum\frac1{n^3}$ inconcluso; $\sum e^{1/n^2}$ diverge); Checkpoint 5.12 |
| **Criterio de la integral** | 43-45 | 415-417 | $\sum\frac1n$ contra $\int\frac{dx}x$ (Figura 5.12: $S_k>\ln(k+1)$); $\sum\frac1{n^2}$ (Figura 5.13: $S_k<2-\frac1k$, acotada y creciente); caso general con rectángulos inscritos y circunscritos (Figura 5.14); **Teorema 5.9 (Integral Test)** (continua, decreciente, positiva); aviso: la suma de la serie y el valor de la integral no coinciden ($\sum e^{-n}=\frac1{e-1}$ contra $\int_1^\infty e^{-x}dx=\frac1e$) |
| Ejemplo 5.14 | 46 | 418 | $\sum\frac1{n^3}$ converge ($\int_1^\infty\frac{dx}{x^3}=\frac12$); $\sum\frac1{\sqrt{2n-1}}$ diverge |
| **Series p** | 47-48 | 419-420 | Definición $\sum\frac1{n^p}$; $p\le0$ diverge por el criterio de la divergencia; $p>0$: criterio de la integral con $\int_1^\infty x^{-p}dx=\frac1{p-1}$ si $p>1$; ecuación (5.9): converge si $p>1$, diverge si $p\le1$; Ejemplo 5.15 ($p=4$ converge; $p=\tfrac23$ diverge); Checkpoint 5.14 |
| **Estimación del residuo (integral)** | 48-49 | 420-421 | Residuo $R_N=\sum_{n=1}^\infty a_n-\sum_{n=1}^Na_n$; **Teorema 5.10**: $S_N+\int_{N+1}^\infty f<\sum a_n<S_N+\int_N^\infty f$; ecuación (5.10) $\int_{N+1}^\infty f<R_N<\int_N^\infty f$. **La Figura 5.15 (p.421) tiene una imagen equivocada, ver erratas** |
| Ejemplo 5.16 | 49-50 | 421-422 | $\sum\frac1{n^3}$: $S_{10}\approx1.19753$ (recalculado: 1.19753) y $R_{10}<\frac1{2\cdot10^2}=0.005$; $N\ge23$ para error menor que 0.001 ($2N^2>1000$, $N>22.36$); Checkpoint 5.15 |
| Ejercicios 5.3 | 50-54 | 422-426 | Ejercicios 138 a 193 (divergencia, integral, series p, residuo, estimaciones por computadora) |
| 5.4 Pruebas de comparación | 54-56 | 426-428 | Objetivos 5.4.1 y 5.4.2; $\sum\frac1{n^2+1}<\sum\frac1{n^2}$ y $\sum\frac1{n-1/2}>\sum\frac1n$; Tablas 5.1 y 5.2 (recalculadas, correctas) y Figura 5.16; **Teorema 5.11 (Comparison Test)** con demostración (p.428) |
| Ejemplo 5.17 | 57 | 429 | $\sum\frac1{n^3+3n+1}$ converge (contra $\frac1{n^3}$); $\sum\frac1{2^n+1}$ converge (contra $\left(\frac12\right)^n$); $\sum\frac1{\ln n}$ diverge (contra $\frac1n$); Checkpoint 5.16 |
| Criterio de comparación en el límite | 57-59 | 429-431 | Motivación $\sum\frac1{n^2-1}$ contra $\frac1{n^2}$ (la desigualdad va al revés); **Teorema 5.12 (Limit Comparison Test)**: $L\neq0$, $L=0$ con $\sum b_n$ convergente, $L=\infty$ con $\sum b_n$ divergente; caso donde no informa ($\frac1{\sqrt n}$ y $\frac1{n^2}$ contra $\frac1{n^3}$) |
| Ejemplo 5.18 | 59-60 | 431-432 | $\sum\frac1{\sqrt n+1}$ diverge; $\sum\frac{2^n+1}{3^n}$ converge; $\sum\frac{\ln n}{n^2}$: contra $\frac1n$ da límite 0 (no informa), contra $\frac1{n^2}$ da $\infty$ (no informa), se sigue con otra serie p; Checkpoint 5.17 |
| Ejercicios 5.4 | 61-64 | 433-436 | Ejercicios 194 a 249 |
| 5.5 Series alternadas | 65-66 | 437-438 | Objetivos 5.5.1 a 5.5.3; ecuaciones (5.11) $\sum\left(-\tfrac12\right)^n$ y (5.12) serie armónica alternada; **Definición** con (5.13) $\sum(-1)^{n+1}b_n$ y (5.14) $\sum(-1)^nb_n$; demostración para la armónica alternada con sumas parciales impares (decrecientes) y pares (crecientes); **converge a $\ln2$**; Figuras 5.17 y 5.18 (escalera de sumas parciales) |
| **Teorema 5.13 (Alternating Series Test)** | 67 | 439 | $0<b_{n+1}\le b_n$ y $b_n\to0$; Ejemplo 5.19 ($\sum(-1)^{n+1}/n^2$ converge; $\sum(-1)^{n+1}\frac n{n+1}$ diverge por el criterio de la divergencia); Checkpoint 5.18 |
| **Residuo de una serie alternada** | 67-68 | 439-440 | Desde la figura: $|R_N|=|S-S_N|\le|S_{N+1}-S_N|=b_{N+1}$; **Teorema 5.14**: $|R_N|\le b_{N+1}$; Ejemplo 5.20 ($\sum\frac{(-1)^{n+1}}{n^2}$, $|R_{10}|\le\frac1{121}\approx0.008265$, ver erratas); Checkpoint 5.19 |
| Convergencia absoluta y condicional | 68-70 | 440-442 | **Definición** de absoluta y condicional; **Teorema 5.15** (absoluta implica convergente), con demostración con $|a_n|+a_n\le2|a_n|$; Ejemplo 5.21 (a: $\sum\frac{(-1)^{n+1}}{3n+1}$ condicional; b: $\sum\frac{\cos n}{n^2}$ absoluta); Checkpoint 5.20 |
| Reordenar series | 70-71 | 442-443 | La armónica alternada se puede reordenar para que diverja o converja a otro valor; Ejemplo 5.22 (reordenada suma $\frac{3\ln2}2$); mención del teorema de reordenamiento de Riemann |
| Ejercicios 5.5 | 72-77 | 444-449 | Ejercicios 250 a 316 |
| 5.6 Criterio del cociente | 77-80 | 449-452 | Objetivos 5.6.1 a 5.6.3; motivación ($1/n$ y $1/n^2$ van a 0 pero solo una converge); **Teorema 5.16 (Ratio Test)**: $\rho=\lim\left|\frac{a_{n+1}}{a_n}\right|$, $\rho<1$ converge absolutamente, $\rho>1$ o $\infty$ diverge, $\rho=1$ no informa; demostración con comparación geométrica (p.450-451); $\rho=1$ para $\sum\frac1{n^p}$; Ejemplo 5.23 (a: $\frac{2^n}{n!}$, $\rho=0$; b: $\frac{n^n}{n!}$, $\rho=e$, diverge; c: $\frac{(-1)^n(n!)^2}{(2n)!}$, $\rho=\frac14$); Checkpoint 5.21 |
| Criterio de la raíz | 80-81 | 452-453 | $\rho=\lim\sqrt[n]{|a_n|}$; **Teorema 5.17 (Root Test)**; para $\sum\frac1{n^p}$ da $\rho=1$; Ejemplo 5.24 ($\sum\left(\frac{n^2+3n}{4n^2+5}\right)^n$, $\rho=\frac14$; $\sum\frac{n^n}{(\ln n)^n}$, $\rho=\infty$); Checkpoint 5.22 |
| Cómo elegir el criterio | 81-84 | 453-456 | **Estrategia de 5 pasos** (¿serie conocida?, ¿alternada?, ¿parecida a p o geométrica?, ¿factorial o potencia?, divergencia e integral) en p.454; Ejemplo 5.25 (a: comparación en el límite con $\frac1n$; b: cociente con $\frac{3n}{(n+1)!}$; c: divergencia con $\frac{e^n}{n^3}\to\infty$; d: raíz con $\frac{3^n}{(n+1)^n}$); Checkpoint 5.23 |
| **Tabla 5.3 Resumen de criterios** | 84-85 | 456-457 | Divergencia, geométrica, serie p, comparación, comparación en el límite (p.456); integral, alternada, cociente y raíz (p.457), cada una con conclusión y comentario de uso |
| Proyecto: series que convergen a $\pi$ y $1/\pi$ | 85-86 | 457-458 | Gregory-Leibniz $\pi=4\sum\frac{(-1)^{n+1}}{2n-1}$ (sale de la serie de Maclaurin de $\tan^{-1}x$, cap. 6), una serie atribuida a Newton, y una de Ramanujan; comparar velocidad de convergencia |
| Ejercicios 5.6 | 86-89 | 458-461 | Ejercicios 317 a 378 |
| Repaso del capítulo | 90-96 | 462-468 | Términos clave; ecuaciones clave: armónica, geométrica $\frac a{1-r}$, divergencia, serie p, residuo (integral), alternada (p.463-464); conceptos clave por sección (p.464-465); ejercicios de repaso 379 a 404 (p.466-467) |

## C: `calc2u6`, cap. 6 Series de potencias (PDF = impresa - 468)

| Tema | PDF | Impresa | Qué hay exactamente |
|---|---|---|---|
| Apertura | 1 | 469 | Figura 6.1 (billetes de lotería); índice 6.1 a 6.4; planteamiento: cobrar 20 millones hoy contra 1.5 millones al año durante 20 años |
| 6.1 Series de potencias y funciones: forma | 2-3 | 470-471 | Objetivos 6.1.1 a 6.1.3; polinomio infinito; $1+x+x^2+\dots=\sum x^n$ converge si $|x|<1$; **Definición** de serie de potencias centrada en 0 (ecuación (6.1)) y en $a$ (ecuación (6.2)); convención $x^0=1$; ejemplos $\sum\frac{x^n}{n!}$, $\sum n!x^n$, $\sum\frac{(x-2)^n}{(n+1)3^n}$ |
| **Teorema 6.1 (convergencia de una serie de potencias)** | 3-4 | 471-472 | Exactamente una de tres: (i) converge solo en $x=a$; (ii) converge para todo $x$; (iii) existe $R>0$ con convergencia en $|x-a|<R$ y divergencia en $|x-a|>R$ (en los extremos puede ir cualquiera); demostración en p.471-472 |
| **Intervalo y radio de convergencia** | 4-5 | 472-473 | **Definición** de intervalo de convergencia y de **radio de convergencia** ($R=0$, $R=\infty$, $0<R<\infty$); **Figura 6.2** (tres casos: a, b, c con extremos $a\pm R$); se calcula con el criterio del cociente |
| Ejemplo 6.1 | 5-7 | 473-475 | (a) $\sum\frac{x^n}{n!}$: $\rho=|x|\cdot0=0$, $R=\infty$, intervalo $(-\infty,\infty)$; (b) $\sum n!x^n$: $\rho=\infty$, $R=0$; (c) $\sum\frac{(x-2)^n}{(n+1)3^n}$: $\rho=\frac{|x-2|}3$, $R=3$, extremo $-1$ converge (armónica alternada) y extremo 5 diverge (armónica), intervalo $[-1,5)$ (comprobado); Checkpoint 6.1 |
| Representar funciones: geométrica | 7 | 475 | Ecuación (6.3) $1+x+x^2+\dots=\sum x^n=\frac1{1-x}$ para $|x|<1$ |
| Ejemplo 6.2 | 7-8 | 475-476 | Sumas parciales $S_N(x)$ de $\frac1{1-x}$ con $N=2,4,6$ en $(-1,1)$; **Figura 6.3** (la aproximación mejora al crecer $N$ y se dispara al acercarse a 1); Checkpoint 6.2 |
| Ejemplo 6.3 | 8-9 | 476-477 | (a) $\frac1{1+x^3}=\sum(-x^3)^n=1-x^3+x^6-\dots$ en $(-1,1)$; (b) $\frac{x^2}{4-x^2}=\sum\frac{x^{2n+2}}{4^{n+1}}$ en $(-2,2)$ (sacando 4 de factor); Checkpoint 6.3 |
| Ejercicios 6.1 | 9-12 | 477-480 | Ejercicios 1 a 62 (radio e intervalo, verdadero o falso, comparación de gráficas de sumas parciales) |
| 6.2 Propiedades de las series de potencias: combinar | 13-14 | 481-482 | Objetivos 6.2.1 a 6.2.4; **Teorema 6.2** (suma y resta; $bx^mc_nx^n$; sustitución $c_n(bx^m)^n$) con demostración de la suma con sumas parciales; ejemplos $\frac{3x}{1-x^2}$ y $\frac1{(x-1)(x-3)}$ |
| Ejemplos 6.4, 6.5, 6.6 | 14-16 | 482-484 | Ejemplo 6.4 (intervalo de $\sum(a_n+b_n)x^n$ es el menor; $\sum a_n3^nx^n$ converge en $(-\tfrac13,\tfrac13)$); Ejemplo 6.5 (a: $\frac{3x}{1+x^2}=\sum3(-1)^nx^{2n+1}$; b: $\frac1{(x-1)(x-3)}$ por fracciones parciales $=\sum\left(\frac12-\frac1{6\cdot3^n}\right)x^n$, intervalo $(-1,1)$); Ejemplo 6.6 ($\sum2^nx^n=\frac1{1-2x}$ en $\left(-\tfrac12,\tfrac12\right)$); Checkpoints 6.4 a 6.6 |
| Ejemplo 6.7 (valor presente de un premio) | 17-18 | 485-486 | Anualidad de 1.5 millones por 20 años al 5%: $P=\sum\frac{1.5}{1.05^k}\approx18.693$ millones (recalculado: 18.6933); fórmula $P=\frac{C}{1+r}\sum\left(\frac1{1+r}\right)^n=\frac Cr$; 1 millón al año a perpetuidad al 5% equivale a 20 millones. **La Figura 6.4 (p.485) tiene una imagen equivocada, ver erratas** |
| Multiplicar series | 18-20 | 486-488 | **Teorema 6.3** (producto de Cauchy: $e_n=\sum_{k=0}^nc_kd_{n-k}$, sin demostración); Ejemplo 6.8 ($\frac1{(1-x)(1-x^2)}=1+x+2x^2+2x^3+3x^4+3x^5+\dots$); Checkpoint 6.7 |
| Derivar e integrar término a término | 20-21 | 488-489 | **Teorema 6.4** (mismo radio $R$; los extremos pueden cambiar; sin demostración) |
| Ejemplos 6.9 y 6.10 | 22-24 | 490-492 | Ejemplo 6.9 ($\frac1{(1-x)^2}=\sum(n+1)x^n$, diverge en $\pm1$; y $\sum\frac{n+1}{4^n}=\frac{16}9$); Ejemplo 6.10 ($\ln(1+x)=\sum_{n=1}^\infty(-1)^{n+1}\frac{x^n}n$ en $(-1,1]$, la convergencia en $x=1$ a $\ln2$ requiere el teorema de Abel; $\tan^{-1}x=\sum(-1)^n\frac{x^{2n+1}}{2n+1}$ en $[-1,1]$); Checkpoints 6.8 y 6.9 |
| **Teorema 6.5 (unicidad de series de potencias)** | 24 | 492 | Si $\sum c_n(x-a)^n=\sum d_n(x-a)^n$ en un intervalo, entonces $c_n=d_n$ (idea: polinomios con infinitos términos) |
| Ejercicios 6.2 | 25-28 | 493-496 | Ejercicios 63 a 115 |
| 6.3 Series de Taylor y de Maclaurin: deducción | 29-30 | 497-498 | Objetivos 6.3.1 a 6.3.3; ecuación (6.4); se pide que la serie $\sum c_n(x-a)^n$ tenga las mismas derivadas que $f$ en $a$: $c_0=f(a)$, $c_1=f'(a)$, $c_2=\frac{f''(a)}2$, $c_3=\frac{f'''(a)}{3\cdot2}$, y en general $c_n=\frac{f^{(n)}(a)}{n!}$ |
| **Definición de serie de Taylor y de Maclaurin** | 30 | 498 | **Definición**, ecuación (6.5): $\sum\frac{f^{(n)}(a)}{n!}(x-a)^n=f(a)+f'(a)(x-a)+\frac{f''(a)}{2!}(x-a)^2+\dots$; si $a=0$ es la serie de Maclaurin; **Teorema 6.6 (unicidad de la serie de Taylor)**; recuadro MEDIA con biografías de Taylor y Maclaurin |
| **Polinomios de Taylor** | 31 | 499 | $p_0,p_1,p_2,p_3$ en forma explícita; **Definición del polinomio de Taylor** $p_n(x)=f(a)+f'(a)(x-a)+\dots+\frac{f^{(n)}(a)}{n!}(x-a)^n$ y de Maclaurin (con $a=0$) |
| Ejemplo 6.11 ($\ln x$ en $a=1$) | 31-32 | 499-500 | Derivadas $0,1,-1,2$ en $x=1$; $p_0=0$, $p_1=x-1$, $p_2=(x-1)-\frac12(x-1)^2$, $p_3=(x-1)-\frac12(x-1)^2+\frac13(x-1)^3$; Figura 6.5; Checkpoint 6.10 ($\frac1{x^2}$ en $a=1$) |
| **Ejemplo 6.12: polinomios de Maclaurin de $e^x$, $\sin x$ y $\cos x$** | 32-34 | 500-502 | (a) $e^x$: $p_n=\sum_{k=0}^n\frac{x^k}{k!}$ (Figura 6.6, p.501); (b) $\sin x$: derivadas $0,1,0,-1$ cíclicas, $p_{2m+1}=p_{2m+2}=\sum_{k=0}^m(-1)^k\frac{x^{2k+1}}{(2k+1)!}$ (Figura 6.7, p.501); (c) $\cos x$: $p_{2m}=p_{2m+1}=\sum_{k=0}^m(-1)^k\frac{x^{2k}}{(2k)!}$ (Figura 6.8, p.502); Checkpoint 6.11 ($\frac1{1+x}$) |
| **Teorema de Taylor con resto: planteamiento** | 34-35 | 502-503 | Resto $R_n(x)=f(x)-p_n(x)$; caso $R_0=f'(c)(x-a)$ por el teorema del valor medio; $R_n(x)=\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}$ con $c$ entre $a$ y $x$ (no es el centro); cota $|R_n|\le\frac M{(n+1)!}|x-a|^{n+1}$ |
| **Teorema 6.7 (Taylor's Theorem with Remainder)** | 35-36 | 503-504 | Enunciado (forma de Lagrange, sin nombrarla) con demostración completa por el teorema de Rolle y una función auxiliar $g(t)$ (p.503-504) |
| Ejemplo 6.13 (aproximación lineal y cuadrática de $\sqrt[3]x$ en $a=8$) | 36-38 | 504-506 | $p_1=2+\frac1{12}(x-8)$, $p_2=2+\frac1{12}(x-8)-\frac1{288}(x-8)^2$; Figura 6.9; $\sqrt[3]{11}\approx p_1(11)=2.25$ y $p_2(11)=2.21875$; cotas del error: $|R_1(11)|\le\frac1{144\cdot2!}\cdot3^2=0.03125$ y $|R_2(11)|\le0.0065104$ (ver erratas, el valor de $f'''(8)$ aparece mal escrito en una línea); Checkpoint 6.12 ($\sqrt6$ con $\sqrt x$ en $a=4$) |
| Ejemplo 6.14 ($\sin\frac\pi{18}$) | 38 | 506 | $p_5\left(\frac\pi{18}\right)\approx0.173648$; $|R_6|\le\frac1{7!}\left(\frac\pi{18}\right)^7\le9.8\times10^{-10}$ (recalculado: 9.788e-10); $p_5$ aproxima $\sin x$ con error menor que 0.0001 si $|x|<0.907$ (recalculado: 0.9068); Checkpoint 6.13 ($\cos\frac\pi{12}$) |
| Representar funciones con Taylor: Ejemplo 6.15 | 39 | 507 | $\frac1x$ en $a=1$: $\sum(-1)^n(x-1)^n$, razón $|x-1|$, intervalo $(0,2)$, extremos 0 y 2 divergen; coincide con la geométrica de $1-(1-x)$ (p.507-508); Checkpoint 6.14 ($\frac1{2x}$ en $a=2$) |
| **Teorema 6.8 (convergencia de la serie de Taylor)** | 40 | 508 | La serie de Taylor converge a $f$ en $I$ si y solo si $\lim R_n(x)=0$ para todo $x\in I$; para probarlo se acota con $\frac M{(n+1)!}|x-a|^{n+1}$ |
| **Ejemplo 6.16: $e^x$ y $\sin x$ convergen a sus series** | 40-41 | 508-510 | (a) $e^x=\sum\frac{x^n}{n!}$ para todo $x$: razón $\frac{|x|}{n+1}\to0$; $|R_n|\le\frac{e^b}{(n+1)!}|x|^{n+1}\to0$ (el factorial gana a la potencia, apoyado en $\frac{|x|^{n+1}}{(n+1)!}\to0$ y el sándwich); (b) $\sin x=\sum(-1)^n\frac{x^{2n+1}}{(2n+1)!}$ para todo $x$, $|R_n|\le\frac{|x|^{n+1}}{(n+1)!}$; Checkpoint 6.15 ($\cos x$) |
| Proyecto: demostrar que $e$ es irracional | 42 | 510 | Se supone $e=\frac rs$ y se usa que $s\,n!\,R_n(1)$ es entero y que $|s\,n!\,R_n(1)|<\frac{es}{n+1}$ |
| Ejercicios 6.3 | 42-45 | 510-513 | Ejercicios 116 a 173 (polinomios de Taylor de grado 2, series, cotas de error, límites con Maclaurin) |
| 6.4 Trabajar con series de Taylor: serie binomial | 45-47 | 513-515 | Objetivos 6.4.1 a 6.4.5; $(1+x)^r$ con $r$ entero: ecuación (6.6) $\binom rn=\frac{r!}{n!(r-n)!}$ y (6.7) $\sum\binom rnx^n$; ejemplo $(1+x)^5=1+5x+10x^2+10x^3+5x^4+x^5$; para $r$ cualquiera: derivadas $r(r-1)\cdots$, coeficientes (6.8), $\binom rn=\frac{r(r-1)\cdots(r-n+1)}{n!}$, serie binomial (6.9); radio 1 por el criterio del cociente; extremos según $r$ (se dice sin demostrar); **Definición de serie binomial** (p.514) |
| Ejemplo 6.17 | 47 | 515 | $\sqrt{1+x}=1+\frac12x-\frac18x^2+\frac1{16}x^3-\dots$; $\sqrt{1.5}\approx p_3(0.5)=1.2266$ (recalculado: 1.2266) con $|R_3(0.5)|\le\frac{15}{4!\,2^4}(0.5)^4\approx0.00244$; Figura 6.10; Checkpoint 6.16 |
| **Tabla 6.1 Series de Maclaurin de funciones comunes** | 47-48 | 515-516 | $\frac1{1-x}=\sum x^n$ ($-1<x<1$); $e^x=\sum\frac{x^n}{n!}$ ($-\infty<x<\infty$); $\sin x=\sum(-1)^n\frac{x^{2n+1}}{(2n+1)!}$ ($-\infty<x<\infty$); $\cos x=\sum(-1)^n\frac{x^{2n}}{(2n)!}$ ($-\infty<x<\infty$); $\ln(1+x)=\sum_{n=1}^\infty(-1)^{n+1}\frac{x^n}n$ ($-1<x\le1$); $\tan^{-1}x=\sum(-1)^n\frac{x^{2n+1}}{2n+1}$ ($-1\le x\le1$); $(1+x)^r=\sum\binom rnx^n$ ($-1<x<1$) |
| Ejemplos 6.18 y 6.19 | 48-49 | 516-517 | Ejemplo 6.18 ($\cos\sqrt x=\sum\frac{(-1)^nx^n}{(2n)!}$ para $x\ge0$; $\sinh x=\sum\frac{x^{2n+1}}{(2n+1)!}$ con $\frac{e^x-e^{-x}}2$); Checkpoint 6.17 ($\sin(x^2)$); Ejemplo 6.19 ($\frac1{\sqrt{1+x}}$ derivando $\sqrt{1+x}$); Checkpoint 6.18 |
| Ecuaciones diferenciales con series de potencias | 49-52 | 517-520 | Ejemplo 6.20 ($y'=y$, $y(0)=3$: $c_{n+1}=\frac{c_n}{n+1}$, $y=3\sum\frac{x^n}{n!}=3e^x$, ¡se reconoce la exponencial!); Checkpoint 6.19 ($y'=2y$, $y(0)=5$); Ejemplo 6.21 (ecuación de Airy $y''-xy=0$, $y(0)=a$, $y'(0)=b$: $n(n-1)c_n=c_{n-3}$, $c_2=0$, $y=a\left(1+\frac{x^3}{3\cdot2}+\frac{x^6}{6\cdot5\cdot3\cdot2}+\dots\right)+b\left(x+\frac{x^4}{4\cdot3}+\frac{x^7}{7\cdot6\cdot4\cdot3}+\dots\right)$); Checkpoint 6.20 |
| Integrales no elementales | 52-54 | 520-522 | Definición de integral no elemental; Ejemplo 6.22 ($\int e^{-x^2}dx=C+x-\frac{x^3}{3}+\frac{x^5}{5\cdot2!}-\dots$; $\int_0^1e^{-x^2}dx=1-\frac13+\frac1{10}-\frac1{42}+\frac1{216}-\dots$, las cuatro primeras sumas dan 0.74 con error menor que $\frac1{216}\approx0.0046$; recalculado: 0.7429, valor real 0.7468); Checkpoint 6.21 ($\int_0^1\cos\sqrt x\,dx$); la normal, Figura 6.11 y ecuaciones (6.10), (6.11) |
| Ejemplo 6.23 (probabilidad normal) | 54 | 522 | $\mu=100$, $\sigma=50$, de $x=100$ a $200$: $\frac1{\sqrt{2\pi}}\int_0^2e^{-z^2/2}dz$ con $e^{-x^2/2}=\sum\frac{(-1)^nx^{2n}}{2^nn!}$; cinco términos dan $\approx0.4922$ (recalculado: 0.49224); **la cota del error 0.00546 está mal, ver erratas**; Checkpoint 6.22 |
| Ejemplo 6.24 (periodo de un péndulo) | 55-56 | 523-524 | $T=4\sqrt{\frac Lg}\int_0^{\pi/2}\frac{d\theta}{\sqrt{1-k^2\sin^2\theta}}$ con $k=\sin\frac{\theta_{\max}}2$; Figura 6.12; con la serie binomial de $\frac1{\sqrt{1+x}}$: primer término $T\approx2\pi\sqrt{L/g}$ y dos términos $T\approx2\pi\sqrt{L/g}\left(1+\frac{k^2}4\right)$ |
| Ejercicios 6.4 | 56-61 | 524-529 | Ejercicios 174 a 252 (binomial, Taylor con raíces, estimaciones, Maclaurin de funciones, integrales, péndulo y otros) |
| Repaso del capítulo | 62-66 | 530-534 | Términos clave (p.530); **Ecuaciones clave**: serie de potencias centrada en 0 y en $a$, serie de Taylor en $a$ (p.531); conceptos clave (p.531-532); ejercicios de repaso 253 a 278 (p.532-533), entre ellos 255 ($\sin x\approx x$), 272 y 275 (fórmula de Euler $e^{ix}=\cos x+i\sin x$) |

---

## Búsqueda rápida por concepto

**Serie de Taylor y de Maclaurin (definición y deducción de coeficientes)**
- `calc2u6` PDF 29-30 (impresa 497-498): por qué $c_n=\frac{f^{(n)}(a)}{n!}$; Definición, ecuación (6.5), Teorema 6.6 (unicidad), en p.498.
- `calc2u6` PDF 31 (499): polinomio de Taylor y de Maclaurin; PDF 31-32 (499-500): Ejemplo 6.11 ($\ln x$ en $a=1$, Figura 6.5).
- Series completas de los ejemplos pedidos: **Tabla 6.1** `calc2u6` PDF 48 (516).

**Serie de $e^x$**
- Polinomios $p_n=\sum\frac{x^k}{k!}$: Ejemplo 6.12a, PDF 32-33 (500-501), Figura 6.6 (p.501).
- Convergencia a $e^x$ para todo $x$ con el resto: Ejemplo 6.16a, PDF 40-41 (508-510).
- Aplicación a ecuaciones diferenciales ($y'=y\Rightarrow3e^x$): Ejemplo 6.20, PDF 50 (518).
- Relacionado: $\left(1+\frac4n\right)^n\to e^4$ (`calc2u5` Ejemplo 5.3d, PDF 10-11, p.382-383); $e$ irracional (`calc2u6` PDF 42, p.510).

**Serie de $\sin x$ y de $\cos x$**
- Polinomios y fórmulas: Ejemplo 6.12b y 6.12c, PDF 33-34 (501-502), Figuras 6.7 y 6.8; las derivadas cíclicas $0,1,0,-1$ y $1,0,-1,0$ están a la vista.
- $\sin x$ converge a $\sin x$ para todo $x$ con $|R_n|\le\frac{|x|^{n+1}}{(n+1)!}$: Ejemplo 6.16b, PDF 41 (509-510); para $\cos x$ solo el Checkpoint 6.15 (la prueba se deja).
- Aproximación numérica con error: Ejemplo 6.14 ($\sin\frac\pi{18}$ con $p_5$ y cota $9.8\times10^{-10}$; $|x|<0.907$ para error menor que 0.0001), PDF 38 (506).
- Tabla 6.1, PDF 48 (516). Una imagen de $\sin x$ con $p_1,p_3,p_5$ aparece repetida (mal puesta) en `calc2u5` p.421, ver erratas.

**Serie de $\frac1{1-x}$ (geométrica) y Maclaurin**
- Idea con sumas parciales: `calc2u6` Ecuación (6.3), PDF 7 (475); Ejemplo 6.2 con Figura 6.3 (PDF 7-8, p.475-476); Ejemplos 6.3, 6.5, 6.6 (PDF 8-9 y 15-16).
- Derivación de la fórmula de la suma: `calc2u5` PDF 28-29 (400-401), ecuaciones (5.6) y (5.7).
- Su serie de Taylor en $a=1$ para $\frac1x$: Ejemplo 6.15, PDF 39 (507).
- Aplicaciones: $\ln(1+x)$ y $\tan^{-1}x$ por integración (`calc2u6` Ejemplo 6.10, PDF 23-24); $\frac1{(1-x)^2}$ por derivación (Ejemplo 6.9, PDF 22-23).

**Residuo o error de Taylor (Teorema de Taylor con resto)**
- Definición $R_n=f-p_n$, caso $n=0$ con el teorema del valor medio y cota general: `calc2u6` PDF 34-35 (502-503).
- **Teorema 6.7** con demostración (Rolle): PDF 35-36 (503-504).
- Usos numéricos: Ejemplo 6.13 ($\sqrt[3]{11}$, PDF 36-38, p.504-506), Ejemplo 6.14 ($\sin\frac\pi{18}$, PDF 38, p.506), Ejemplo 6.17 ($\sqrt{1.5}$, PDF 47, p.515).
- Condición de convergencia: **Teorema 6.8** ($\lim R_n=0$), PDF 40 (508).
- Resto en series (distinto): integral (`calc2u5` Teorema 5.10, PDF 48-49, p.420-421) y alternada (`calc2u5` Teorema 5.14, PDF 68, p.440). Las dos aparecen como cota de error de una suma parcial y sirven de contraste.

**Aproximación lineal y cuadrática**
- `calc2u6` Ejemplo 6.13 (PDF 36-38, 504-506): $p_1$ y $p_2$ de $\sqrt[3]x$ en $a=8$, comparación con Figura 6.9 y cotas de error. El ejemplo dice "linear and quadratic approximations".
- Ejemplo 6.11 y Figura 6.5 ($p_0$ a $p_3$ de $\ln x$ en 1), PDF 31-32 (499-500); Figura 6.6 para $e^x$ (p.501).
- La aproximación lineal como idea de pendiente: Euler la usa paso a paso (`calc2u4` PDF 13 y 17-19, p.319, 323-325).

**Radio de convergencia**
- Teorema 6.1: `calc2u6` PDF 3-4 (471-472); Definición del radio e intervalo: PDF 4 (472); Figura 6.2: PDF 5 (473).
- Con el criterio del cociente: Ejemplo 6.1 (a: $R=\infty$; b: $R=0$; c: $R=3$ con extremos), PDF 5-7 (473-475).
- Qué cambia al combinar, derivar o integrar: Teoremas 6.2 y 6.4 y Ejemplos 6.4 (PDF 13-14), 6.9 y 6.10 (PDF 22-24).
- Binomial: radio 1, PDF 46 (514).
- Herramienta previa: criterio del cociente `calc2u5` Teorema 5.16 (PDF 78, p.450) y Ejemplo 5.23 (PDF 79-80, p.451-452).

**Campo de pendientes (campo de direcciones)**
- `calc2u4` PDF 11-14 (317-320): definición de campo de direcciones (PDF 13, p.319), Figuras 4.6 a 4.8; construcción con $y'=3x+2y-4$ (PDF 12) y $T'=-0.4(T-72)$ (Figura 4.6).
- Equilibrios y estabilidad: PDF 14-17 (320-323), Figuras 4.9 a 4.12, Ejemplo 4.8.

**Ecuación separable**
- `calc2u4` PDF 28 (334): Definición (4.3) y estrategia de 5 pasos; Ejemplos 4.10 y 4.11 (PDF 28-31); aplicaciones: mezclas (Ejemplo 4.12, PDF 31-33) y enfriamiento de Newton (Ejemplo 4.13, PDF 33-35).

**Crecimiento exponencial**
- `calc2u4` PDF 38 (344): $P(t)=P_0e^{rt}$, $\frac{dP}{dt}=rP$, Figura 4.18; la comparación con la logística en la Figura 4.23 (PDF 45, p.351) y el razonamiento de $r=\ln2/3$ en el Ejemplo 4.14 (PDF 40, p.346).
- Variante con una EDO lineal: $y'=y$ resuelta con series (`calc2u6` Ejemplo 6.20, PDF 50); $v'=-9.8$ sin aire (Ejemplo 4.6) no es exponencial. El decaimiento exponencial y la vida media no se desarrollan aquí (se remite a otra sección).

**Ecuación logística**
- `calc2u4` PDF 39 (345): capacidad de carga $K$ y ecuación (4.8); PDF 39-40: análisis cualitativo y línea de fase (Figura 4.19, p.346); Ejemplo 4.14 (PDF 40-43, p.346-349); solución general y Teorema 4.2 (PDF 43-45, p.349-351); punto de inflexión (PDF 45-46, p.351-352); modelo con umbral (p.352-353); Gompertz y ejercicios 168 a 207 (p.353-356).

**Ecuación lineal de primer orden con factor integrante**
- `calc2u4` PDF 50-52 (356-358): definición (4.14), forma estándar (4.15)-(4.17); PDF 52-54 (358-360): deducción de $\mu=e^{\int p}$ y la fórmula (4.23); estrategia de 5 pasos, PDF 54 (360); ejemplos 4.16 y 4.17 (PDF 54-55), resistencia del aire (4.18, PDF 56-57) y circuito RL (4.19, PDF 58-59).

**Método de Euler**
- `calc2u4` PDF 17-21 (323-327): idea con la recta tangente, ejemplo manual de $y'=x^2-y^2$, Tabla 4.2 (PDF 19, p.325), **Teorema 4.1** y ecuación (4.2) (PDF 19, p.325), pasos grande y pequeño en la Figura 4.14 (PDF 20, p.326), Ejemplo 4.9 con Tabla 4.3 (PDF 20-21, p.326-327).

---

## Erratas e inconsistencias

Todas verificadas recalculando con python3 / sympy o mirando la página renderizada:

1. **`calc2u4` PDF 19 (p.325), Tabla 4.2 (Euler)**: los valores de $n=6$ a $10$ están mal impresos. El libro da $y_6=1.0004$, $y_7=1.9164$, $y_8=1.8414$, $y_9=1.7746$, $y_{10}=1.7156$. Recalculado con $y_n=y_{n-1}+0.1\,(x_{n-1}^2-y_{n-1}^2)$, $x_0=-1$, $y_0=2$: $y_6=1.0005$ (1.00048), $y_7=0.9164$, $y_8=0.8414$, $y_9=0.7746$, $y_{10}=0.7156$. Sobra un "1" delante de los decimales en $n=7$ a $10$ (la sucesión es decreciente y cruza 1 entre $n=5$ y $n=6$; $1.9164$ sería un salto de 0.9 imposible) y $n=6$ está truncado en vez de redondeado. Los valores $n=0$ a $5$ (2, 1.7, 1.492, 1.3334, 1.2046, 1.0955) son correctos. La Tabla 4.3 (p.326-327) sí es correcta.
2. **`calc2u4` PDF 34 (p.340), Ejemplo 4.13**: dice "Equation 4.4 becomes $\frac{dT}{dt}=k(T-75)$". La ecuación (4.4) es la integral del Ejemplo 4.11; la de Newton es la (4.6) y el PVI es la (4.7) (p.339).
3. **`calc2u4` PDF 58 (p.364), circuito RC**: "Equation 4.23 can be rewritten as..." pero la que se reescribe es la (4.24) (circuito general con $L$, $R$, $C$); la (4.23) es la fórmula de $y$ con factor integrante.
4. **`calc2u4` PDF 59 (p.365), Ejemplo 4.19, paso 5**: dice "Solve for $C$ using the initial condition $v(0)=2$" (copiado del 4.18). Debe ser $i(0)=0$; el cálculo siguiente ($0=-\frac{400}{89}+C$, $C=\frac{400}{89}$) sí corresponde a $i(0)=0$.
5. **`calc2u4` PDF 44 (p.350) y Teorema 4.2**: al pasar de (4.9) a una fórmula sin valor absoluto, el libro dice "$K,P>0$ y $P<K$, así que $\frac P{K-P}>0$". Eso solo vale si $0<P<K$. La fórmula final (4.11) también sirve para $P_0>K$ (el propio Ejemplo 4.14d la usa con $P_0=1{,}200{,}000$ y obtiene $C_2<0$), pero eso no se justifica en el texto.
6. **`calc2u5` PDF 49 (p.421), Figura 5.15**: la imagen no es la del texto. El pie dice "dado una función continua, positiva y decreciente $f$ y términos $a_n=f(n)$, (a) las áreas $a_{N+1}+a_{N+2}+\dots<\int_N^\infty f$, o (b) ...", pero el dibujo es el de la Figura 6.7 de `calc2u6` (la curva $f(x)=\sin x$ con $p_1,p_3,p_5$, ejes de $-4$ a 4). Hay que ignorar la imagen. La figura correcta (rectángulos y curva decreciente) es la **Figura 5.14** (p.417).
7. **`calc2u5` PDF 68 (p.440), Ejemplo 5.20**: $|R_{10}|\le b_{11}=\frac1{11^2}=\frac1{121}\approx0.008265$; recalculado: $0.008264$ (0.0082645). Redondeo de una milésima; no cambia la conclusión.
8. **`calc2u5` PDF 8 (p.379)**: "$\lim(-5n+2)=\to-\infty$" tiene un "$\to$" de más después del igual (errata tipográfica).
9. **`calc2u6` PDF 17 (p.485), Figura 6.4**: el pie dice "credit: modification of work by Robert Huffstutter, Flickr" (la foto del premio de lotería de la apertura), pero la imagen es un campo de direcciones (cuadrícula de segmentos con ejes $-4$ a 4), parece la del cap. 4. No tiene relación con el valor presente.
10. **`calc2u6` PDF 38 (p.506), Ejemplo 6.13c**: una línea dice $f'''(8)\approx0.0014468$ (correcto: $\frac{10}{27\cdot8^{8/3}}=\frac{10}{6912}=0.00144676$) y la siguiente desigualdad usa "$\frac{0.0011468}{3!}(11-8)^3\approx0.0065104$": el numerador está mal escrito (debe ser 0.0014468); el resultado final 0.0065104 es el correcto (recalculado: 0.0014468$\cdot27/6=0.0065104$).
11. **`calc2u6` PDF 54 (p.522), Ejemplo 6.23**: con los cinco primeros términos el libro obtiene $\approx0.4922$ (recalculado: 0.49224, correcto) y dice que el error es a lo sumo $\frac1{\sqrt{2\pi}}\cdot\frac{2^{13}}{13\cdot2^6\cdot6!}\approx0.00546$. Pero el primer término omitido (sexto) es $\frac{2^{11}}{11\cdot2^5\cdot5!}$ y da $\frac1{\sqrt{2\pi}}\cdot0.04848\approx0.0193$; el 0.00546 es el término siguiente (el séptimo). El error real es $|0.49224-0.47725|=0.0150$, que **supera** la cota impresa 0.00546 y cabe en la correcta 0.0193. Las sumas parciales (recalculadas con 1, 2, 3... términos) son 0.798, 0.266, 0.585, 0.433, 0.492, 0.473. En el Análisis, el libro compara con el 47.5% de la regla de los dos sigmas (valor real 0.4772).
12. **`calc2u6` PDF 47-48 (p.515-516), Tabla 6.1 y Ejemplo 6.17**: la tabla da $(1+x)^r$ con intervalo $-1<x<1$ para todo $r$, pero el texto de p.514 dice que para $r\ge0$ converge también en los dos extremos y que para $-1<r<0$ converge en $x=1$. No es contradictorio (la tabla da el intervalo abierto garantizado), pero conviene no citar la tabla como "el intervalo exacto" de la binomial.

Cuentas comprobadas sin error (para citar con confianza): Ejemplos 4.1, 4.3 a 4.7, 4.10, 4.11, 4.12, 4.13 (k y 6.12 min), 4.14 (todo, incluido 978,830 y $C_2=-9.431$), 4.15 a 4.19; Tabla 4.3; 5.3 a 5.12 (incluida $A=\frac{2\sqrt3}5$), 5.14 a 5.16, 5.21 a 5.25, Tablas 5.1 y 5.2; 6.1 a 6.12, 6.14 a 6.22, 6.24; $P\approx18.693$ en el Ejemplo 6.7.

---

## Lo que el material NO trae

- **Fórmula del radio** $R=\lim\left|\frac{c_n}{c_{n+1}}\right|$ o con la raíz (Cauchy-Hadamard): el libro siempre aplica el criterio del cociente paso a paso (Ejemplo 6.1) y no la escribe.
- **Forma integral del resto** de Taylor y el nombre "resto de Lagrange": el Teorema 6.7 trae solo la forma con $f^{(n+1)}(c)$, sin nombre, y no la forma integral. Tampoco hay cotas del resto para $\ln(1+x)$, $\tan^{-1}x$ ni la binomial (el libro dice que probar $R_n\to0$ para la binomial "es difícil" y para los extremos de $\ln(1+x)$ y $\tan^{-1}x$ remite al teorema de Abel, p.492 y 514). Para $\cos x$ solo se deja como Checkpoint 6.15. Para $\frac1{1-x}$ no se calcula el resto de Taylor (se usa directamente la suma geométrica, p.507-508).
- **Tabla de Taylor de $e^x$ con error numérico** (cuántos términos hacen falta para cierta precisión): no hay un ejemplo de $e$ o de $e^x$; solo los ejercicios.
- **Aproximación lineal y cuadrática como tema propio**: solo en el Ejemplo 6.13 ($\sqrt[3]x$ en 8). No hay un ejemplo de la recta tangente de $e^x$ o de $\sin x$ con comparación gráfica; el Ejemplo 6.12 da $p_1,p_2,p_3$ pero el libro no usa las palabras "lineal" y "cuadrática" ahí. La referencia a "aproximación lineal" como idea de cálculo I aparece en `calc2u4` p.319 y 324 (dentro del método de Euler), no como sección.
- **Series de Taylor de varias variables**, serie de Fourier, series complejas (solo se nombra la fórmula de Euler en el ejercicio 275, `calc2u6` p.533).
- **Cap. 4**: no hay teorema de existencia y unicidad de soluciones (se dice solo "una infinidad de soluciones" y "se necesitan tantas condiciones como el orden"); **no hay análisis del error del método de Euler** (solo la figura con dos pasos, p.326: "mayor paso, menor exactitud"), ni Euler mejorado ni Runge-Kutta; no hay ecuaciones lineales de segundo orden ni sistemas; no hay crecimiento exponencial con tasa negativa (decaimiento) ni vida media con fórmula; **el máximo de crecimiento de la logística en $P=K/2$ solo está como ejercicio 200** (p.355) y el punto de inflexión se calcula, pero sin decir su valor $P=K/2$ (se puede deducir: en $t=\frac1r\ln\frac{K-P_0}{P_0}$ resulta $P=K/2$); no hay modelos de depredador-presa ni "muelle-masa" aunque la apertura (p.307) los nombra.
- **Cap. 5**: no hay criterio de Cauchy ni prueba de series condicionales más allá de la alternada; no hay pruebas de Raabe ni de Abel (solo se mencionan); las demostraciones de MCT (Teorema 5.6) no están ("fuera del alcance"); el producto de Cauchy y el teorema de Riemann se mencionan sin demostración. $\sum\frac1{n!}=e$ no aparece como ejemplo (solo $\frac{x^n}{n!}$ en cap. 6).
- **Respuestas a los ejercicios**: no están en estos tres PDF (están en `Unidad 08`).

## Datos para la página (resumen de números reutilizables)

- Euler `calc2u4`: $y'=x^2-y^2$, $y(-1)=2$, $h=0.1$: 1.7, 1.492, 1.3334 (sin errata hasta $n=5$); $y'=3x^2-y^2+1$, $y(0)=2$, $h=0.1$: 1.7, 1.514, 1.3968, ..., 1.6202 en $x=1$.
- Logística `calc2u4`: $K=1{,}072{,}764$, $r=0.2311$, $P_0=900{,}000$, $P(3)\approx978{,}830$; con $P_0=1{,}200{,}000$ baja hacia $K$.
- Taylor `calc2u6`: $\sqrt[3]{11}$: $p_1=2.25$, $p_2=2.21875$ (real 2.22398); $\sin\frac\pi{18}\approx0.173648$; $\sqrt{1.5}\approx1.2266$ (real 1.22474).
- Series `calc2u5`: $\sum\left(\frac12\right)^{n-1}=2$ con $S_5=\frac{31}{16}$; Koch $A=\frac{2\sqrt3}5$ y $L_n\to\infty$; $\sum\frac{1}{n(n+1)}=1$.
