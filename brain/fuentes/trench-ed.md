# Mapa de citas: Trench, "Elementary Differential Equations with Boundary Value Problems" (unidades 01 a 06)

Libro: William F. Trench, *Elementary Differential Equations with Boundary Value Problems*, Free Edition 1.01 (diciembre 2013), CC BY-NC-SA 3.0 (Trinity University, Digital Commons). El libro completo tiene 807 páginas; en `~/brain` está partido por unidades en `/Users/franciscocastillo/brain/03-Matematicas/13-Ecuaciones-diferenciales/` (con `INDICE.md` y `fuentes.md`). El PDF completo (`Libros/trench-elementary-diffeq-bvp.pdf`) no está en esa carpeta, así que no se verificó el desfase contra el libro entero.

Se mapean solo las unidades 01 a 06 (capítulos 1 a 6). Cada archivo es un PDF aparte, con su propia numeración de PDF (empieza en 1) y con la numeración impresa **continua del libro** (el capítulo 2 empieza en la 29, etc.). Se leyó todo el texto expositivo de los seis capítulos (explicaciones, teoremas, ejemplos, pies de figura); los ejercicios se revisaron por tipo y por sección (no cada enunciado uno por uno, solo los que se citan abajo). Las tablas numéricas y las cuentas de los ejemplos se recalcularon con python3 y las páginas dudosas se miraron renderizadas.

## Relación entre página del PDF y página impresa (verificada en cada página de cada archivo)

La página impresa sale del encabezado (el número a la izquierda en las pares, a la derecha en las impares; en la primera página de cada capítulo, el número al pie). Se comprobaron todas las páginas de los seis archivos: el desfase es constante dentro de cada archivo.

| Archivo | Alias | PDF | Páginas impresas | Relación |
|---|---|---|---|---|
| Unidad 01 - Introduction | `trench1` | 1 a 28 | 1 a 28 | impresa = PDF |
| Unidad 02 - First Order Equations | `trench2` | 1 a 66 | 29 a 94 | impresa = PDF + 28 |
| Unidad 03 - Numerical Methods | `trench3` | 1 a 34 | 95 a 128 | impresa = PDF + 94 |
| Unidad 04 - Applications of First Order Equations | `trench4` | 1 a 64 | 129 a 192 | impresa = PDF + 128 |
| Unidad 05 - Linear Second Order Equations | `trench5` | 1 a 74 | 193 a 266 | impresa = PDF + 192 |
| Unidad 06 - Applications of Linear Second Order Equations | `trench6` | 1 a 38 | 267 a 304 | impresa = PDF + 266 |

Ejemplos comprobados: `trench2` PDF 1 = p.29 (apertura del capítulo 2), PDF 27 = p.55 (2.3), PDF 45 = p.73 (2.5), PDF 66 = p.94 (página en blanco); `trench3` PDF 2 = p.96 (3.1), PDF 15 = p.109 (3.2), PDF 25 = p.119 (3.3); `trench4` PDF 2 = p.130, PDF 34 = p.162 (4.4), PDF 51 = p.179 (4.5); `trench5` PDF 2 = p.194, PDF 18 = p.210 (5.2), PDF 63 = p.255 (5.7), PDF 74 = p.266 (en blanco); `trench6` PDF 2 = p.268, PDF 24 = p.290 (6.3), PDF 38 = p.304 (en blanco). Las páginas de apertura de capítulo (`trench1` PDF 1, `trench2` PDF 1, ...) llevan el número impreso al pie. **En el campo `data-pag` de las citas va la página del PDF del archivo de la unidad** (cada unidad es una fuente distinta en `fuentes.js`); `data-pimp` la impresa.

La portada y el índice del libro están en `00 - Portada y Preliminares.pdf` (no se mapea). Ese índice tiene dos desajustes con el texto (ver erratas): dice "1.2 First Order Equations, p.5" (en realidad es "1.2 Basic Concepts", p.7) y "2.6 Integrating Factors, p.82" (en realidad empieza en la 83).

## Cómo está escrito el libro (para decidir qué citar)

- Es un texto de ecuaciones diferenciales **ordinarias** para estudiantes de ciencias e ingeniería, informal pero riguroso, con muchos ejemplos resueltos y gráficas. Casi no hay teoremas formales; los pocos que hay están numerados (Theorem 2.1.1, 2.3.1, 5.1.1...).
- **Hilo conductor: variación de parámetros.** El autor resuelve la lineal de primer orden escribiendo $y = u\,y_1$ con $y_1$ solución de la ecuación complementaria (sección 2.1), y repite la idea para Bernoulli y homogéneas no lineales (2.4), para semilineales con Euler (3.1), para la no homogénea de segundo orden (5.4, 5.5, 5.6, 5.7). **No usa el factor integrante $\mu(x)=e^{\int p}$ para la lineal**; "integrating factor" aparece solo en la sección 2.6 para hacer exactas las ecuaciones $M\,dx+N\,dy=0$.
- Notación: $y'$ con prima; $y_0$ vale a la vez la condición inicial y la letra de la función cuando conviene; la variable independiente es $x$, o $t$ si es tiempo. $Q$ para cantidades (decaimiento, sal, carga), $T$ temperatura, $v$ velocidad, $y$ desplazamiento.
- Los ejercicios llevan marcas: **C** (calculadora o computadora), **C/G** (computadora y gráficas), **L** (laboratorio con software). No hay código en ningún lenguaje: las tablas numéricas se dan ya hechas, con nueve decimales.
- Referencias cruzadas a ejercicios: las respuestas de ejercicios seleccionados están en la Unidad 14 (no mapeada).

---

## Unidad 01: Introduction (`trench1`; impresa = PDF)

| Tema | PDF | Impresa | Qué hay exactamente |
|---|---|---|---|
| Apertura del capítulo 1 | 1 | 1 | tres secciones: aplicaciones, conceptos básicos, campos de direcciones |
| Qué es un modelo matemático | 2 | 2 | las ecuaciones diferenciales relacionan una función y sus derivadas; un buen modelo es lo bastante simple para resolverse y lo bastante fiel para predecir; si no concuerda con la observación, se revisan los supuestos |
| Modelo de población, Malthus | 2-3 | 2-3 | $P' = a(P)P$ (1.1.1); Malthus $P' = aP$ (1.1.2); $P = c e^{at}$ (1.1.3), $P(t)=P_0e^{at}$; límite $\infty$ si $a>0$, $0$ si $a<0$; limitación: la predicción pierde validez al agotarse recursos |
| Modelo logístico (Verhulst) | 3-4 | 3-4 | $P' = aP(1-\alpha P)$ (1.1.4); crecimiento casi exponencial si $P$ es chico frente a $1/\alpha$; solución $P = \dfrac{P_0}{\alpha P_0 + (1-\alpha P_0)e^{-at}}$ y $\lim P = 1/\alpha$ sin importar $P_0$; **Figure 1.1.1** (curvas logísticas, p.4). La deducción se deja al Ejercicio 2.2.28 (el texto dice "Section 1.2", ver erratas) |
| Ley de enfriamiento de Newton | 3-4 | 3-4 | $T' = -k(T-T_m)$ (1.1.5), $k>0$; solución $T = T_m + (T_0-T_m)e^{-kt}$ (1.1.6), $T\to T_m$; **Figure 1.1.2** (p.5). Variante con medio que también cambia de temperatura (constantes $a$, $a_m$, conservación de energía): $T' = -k(1+a/a_m)T + k(T_{m0}+(a/a_m)T_0)$ y solución con $e^{-k(1+a/a_m)t}$ (se demuestra en el Ejercicio 4.2.17) |
| Absorción de glucosa | 5-6 | 5-6 | $G' = -\lambda G$ (1.1.7), $G=G_0e^{-\lambda t}$; con inyección constante $r$: $G' = -\lambda G + r$ (1.1.9), $G = r/\lambda + (G_0 - r/\lambda)e^{-\lambda t}$ (Ejercicio 2.1.43); "gráficas parecidas a las de la figura 1.1.2" |
| Epidemias | 6 | 6 | $I' = rI(S-I)$, solución $I = \dfrac{SI_0}{I_0+(S-I_0)e^{-rSt}}$ (Ejercicio 2.2.29), $I\to S$; gráficas parecidas a las logísticas |
| Segunda ley de Newton | 6 | 6 | masa 1, posición $y$ hacia arriba: $y'' + q(y,y')y' + p(y) = f(t)$; fuerzas $-p(y)$ (gravedad), $-q(y,y')y'$ (resistencia), $f(t)$ (externa); "ecuación de segundo orden" |
| Especies en competencia | 6-7 | 6-7 | $P' = aP - \alpha Q$, $Q' = -\beta P + bQ$; sistema (Ejercicio 10.4.42); **Figure 1.1.3** (p.7), recta $L$ de pendiente $\rho$ |
| Definición: ecuación diferencial, orden, EDO y EDP | 7 | 7 | ecuación con derivadas de una función desconocida; **orden** = el de la derivada más alta; ordinaria si la función tiene una variable, parcial si tiene varias; $y'=f(x)$ se resuelve integrando |
| Forma normal y ejemplos de orden | 8 | 8 | $y^{(n)} = f(x)$ (1.2.1) por integración repetida; $y^{(n)} = f(x,y,y',\dots,y^{(n-1)})$ (1.2.2); cinco ejemplos de orden 1, 1, 2, 3, n escritos en esa forma |
| Solución, curva solución y curva integral | 8 | 8 | solución = función que satisface la ecuación en un intervalo abierto; $y=x^2$ en $xy'+x^2=3x$ solo vale en $x=0,1$, no es solución; curva integral vs curva solución |
| Ejemplos 1.2.1 y 1.2.2 | 9 | 9 | 1.2.1: la circunferencia $x^2+y^2=a^2$ es curva integral de $y'=-x/y$ pero no curva solución; 1.2.2: $y = x^2/3 + 1/x$ es solución de $xy'+y=x^2$ en $(0,\infty)$ y en $(-\infty,0)$, no en un intervalo con 0; **Figure 1.2.1** (p.10) |
| Ejemplo 1.2.3 | 9-10 | 9-10 | $y=(c_1+c_2x)e^{-x}+2x-4$ es solución de $y''+2y'+y=2x$ para todo $c_1,c_2$ (verificación completa) |
| Ejemplo 1.2.4 | 10-11 | 10-11 | todas las soluciones de $y^{(n)}=e^{2x}$: $y = e^{2x}/2^n + c_1 + c_2x + \dots + c_nx^{n-1}$; regla de renombrar constantes arbitrarias; $n$ constantes para orden $n$ |
| Problema de valor inicial y condición inicial | 11-12 | 11-12 | IVP; **condición inicial**; para orden $n$ se piden $y,\dots,y^{(n-1)}$ en un punto $x_0$ (1.2.12); **intervalo de validez** = el mayor intervalo abierto con $x_0$ donde la solución está definida |
| Ejemplos 1.2.5 a 1.2.7 | 11-13 | 11-13 | 1.2.5: $y'=x^3$, $y(1)=2$ da $y=(x^4+7)/4$ (**Figure 1.2.2**, p.12); 1.2.6: validez $(-\infty,\infty)$; 1.2.7: $y = x^2/3+1/x$ resuelve $xy'+y=x^2$ con $y(1)=4/3$ (validez $(0,\infty)$) y con $y(-1)=-2/3$ (validez $(-\infty,0)$) |
| Caída libre, Ejemplo 1.2.8 | 13 | 13 | $y''=-g$, $y(0)=y_0$, $y'(0)=v_0$; solución $y = -gt^2/2 + v_0t + y_0$; el nombre "problema de valor inicial" viene del movimiento |
| Ejercicios 1.2 (1 a 10) | 14-15 | 14-15 | orden, verificar soluciones, hallar todas las soluciones, IVP; 7: lanzamiento desde 320 ft con 128 ft/s; 8: $y=(x-c)^a$ y soluciones que no son de esa forma; 9: solución definida a trozos de $y'=|y|+1$; 10: solución singular |
| Campos de direcciones: idea | 16 | 16 | la pendiente de la curva integral por $(x_0,y_0)$ es $f(x_0,y_0)$; dibujar un segmento de pendiente $f(x,y)$ en cada punto de una malla $a=x_0<\dots<x_m=b$, $c=y_0<\dots<y_n=d$ |
| Campos de direcciones: figuras | 17-18 | 17-18 | **Figure 1.3.1** (malla); Figures 1.3.2, 1.3.3, 1.3.4: campo y curvas integrales de $y'=\dfrac{x^2-y^2}{1+x^2+y^2}$, $y'=1+xy^2$, $y'=\dfrac{x-y}{1+x^2}$; hacerlo a mano es tedioso, se usa software |
| Campos con $f$ no continua; forma paramétrica | 18-19 | 18-19 | $y'=-x/y$ y $y'=x^2/(1-x^2-y^2)$ no están definidas en $y=0$ y en el círculo unitario; se reescriben como $y'=A/B$ (1.3.4) y como sistema $dx/dt=B$, $dy/dt=A$ (1.3.5); para $y'=-x/y$: $x'=-y$, $y'=x$ |
| Figures 1.3.5 a 1.3.7 | 19-20 | 19-20 | 1.3.5: curvas integrales de $y'=-x/y$ son circunferencias (se verifica en 2.2); 1.3.6 y 1.3.7: la curva integral por el origen de $y'=x^2/(1-x^2-y^2)$ tiene tres soluciones, vértices $a\approx.846$, $b\approx.533$ |
| Cómo usar tecnología | 19-20 | 19-20 | marcas C, C/G, L; usar la tecnología "como complemento del pensamiento, no como sustituto" |
| Ejercicios 1.3 (1 a 11) | 20-26 | 20-26 | campos ya dibujados (por ejemplo de $y'=x^2(1+y^2)$, $y'=-(2xy^2+y^3)$, $y'=\sin xy$, $y'=(x-y^2)(x^2-y)$, $y'=\sin(x-2y)$); se pide trazar curvas integrales |
| Ejercicios 1.3 (12 a 22) | 27 | 27 | construir el campo con software (por ejemplo $y'=y(y-1)$, $y'=2-3xy$, $y'=y-x^3$) |
| Ejercicios 23 y 24 (unificar modelos) | 27-28 | 27-28 | 23: enfriamiento y glucosa son ambos $y'=-ay+b$ ($a=k,\ b=kT_m$; $a=\lambda,\ b=r$); descubrir con campos que la solución tiende a $b/a$; 24: logística y epidemia son ambos $y'=ay-by^2$ ($a=a,\ b=a\alpha$; $a=rS,\ b=r$) |

---

## Unidad 02: First Order Equations (`trench2`; impresa = PDF + 28)

| Tema | PDF | Impresa | Qué hay exactamente |
|---|---|---|---|
| Apertura del capítulo 2 | 1 | 29 | seis secciones; la variación de parámetros es "el tema unificador" de todo el libro |
| 2.1 Ecuación lineal de primer orden: definición | 2 | 30 | $y'+p(x)y=f(x)$ (2.1.1); homogénea si $f\equiv0$; solución trivial $y\equiv0$; Ejemplo 2.1.1 (cuatro ecuaciones que son lineales aunque no están en esa forma) y 2.1.2 (no lineales: $y^2$, $yy'$, $e^y$) |
| Solución general de una lineal | 2-3 | 30-31 | familia uniparamétrica ($y'=1/x^2 \Rightarrow y=-1/x+c$); definición de **solución general** (cada valor de $c$ da solución, y toda solución sale de alguna $c$); $P_0y'+P_1y=F$ se divide entre $P_0$; convenio de intervalos |
| Homogénea: $y'-ay=0$ y $xy'+y=0$ | 3-5 | 31-33 | Ejemplo 2.1.3: $y=ce^{ax}$, IVP $y=y_0e^{a(x-x_0)}$; **Figure 2.1.1** (p.32); Ejemplo 2.1.4: $y=c/x$ en $(0,\infty)$ o $(-\infty,0)$, $y(1)=3$ da $y=3/x$; paso $\ln|y|=ax+k$ y el cambio de $\pm e^k$ por $c$ |
| Theorem 2.1.1 | 5-6 | 33-34 | solución general de $y'+p(x)y=0$ es $y=ce^{-P(x)}$ con $P'=p$; demostración; **Figure 2.1.2**; observación: reescribir con un lado en $y$ y otro en $x$ se llama **separación de variables** |
| No homogénea por variación de parámetros | 7 | 35 | ecuación complementaria; solución $y=uy_1$ con $y_1$ solución de la complementaria; $u'y_1=f$ (2.1.17), $u'=f/y_1$; el nombre viene de que $u$ es un "parámetro que varía" |
| Ejemplos 2.1.5 y 2.1.6 | 7-9 | 35-37 | 2.1.5: $y'+2y=x^3e^{-2x}$ da $y=e^{-2x}(x^4/4+c)$, **Figure 2.1.3**; 2.1.6: $y'+(\cot x)y=x\csc x$, $y_1=1/\sin x$, $y=\dfrac{x^2}{2\sin x}+\dfrac{c}{\sin x}$ en $(r\pi,(r+1)\pi)$; con $y(\pi/2)=1$, $c=1-\pi^2/8$, validez $(0,\pi)$, **Figure 2.1.4** |
| Resumen del método (pasos a a e) | 10 | 38 | (a) $y_1'/y_1=-p$ con constante cero; (b) $y=uy_1$; (c) $u'=f/y_1$; (d) integrar con constante; (e) sustituir; observación: los cálculos intermedios (2.1.23) y (2.1.24) se pueden omitir |
| Solución en forma integral, Ejemplo 2.1.7 | 10-11 | 38-39 | $y'-2xy=1$: $y_1=e^{x^2}$, $y=e^{x^2}\bigl(c+\int e^{-x^2}dx\bigr)$; con $y(0)=y_0$: $y=e^{x^2}\bigl(y_0+\int_0^x e^{-t^2}dt\bigr)$ (2.1.30); integración numérica o métodos del capítulo 3; **Figure 2.1.5** |
| Theorem 2.1.2 | 12-13 | 40-41 | $p,f$ continuas en $(a,b)$: (a) solución general $y=y_1(x)\bigl(c+\int f/y_1\,dx\bigr)$ (2.1.32); (b) el IVP tiene solución única $y=y_1(x)\bigl(\tfrac{y_0}{y_1(x_0)}+\int_{x_0}^x \tfrac{f(t)}{y_1(t)}dt\bigr)$ en todo $(a,b)$; demostración |
| Ejercicios 2.1 | 13-16 | 41-44 | 1-11 homogéneas e IVP; 12-15 con campo de direcciones; 16-37 lineales con $x$ en los coeficientes; 38-42 forma integral; **43**: glucosa $G'=-\lambda G+r$; **44**: $xy'-2y=-1$ tiene infinitas soluciones por $x=0$ (el texto cita mal el teorema, ver erratas); 45: $\lim y = L/\alpha$ para $y'+\alpha y=f$; 46: principio de superposición lineal; 47-48: cambio $z=g(y)$ que linealiza; 49: derivadas de $f_j$ |
| 2.2 Ecuación separable | 17 | 45 | $h(y)y'=g(x)$ (2.2.1); con $H'=h$, $G'=g$: $H(y(x))=G(x)+c$ (2.2.3), por la regla de la cadena; Ejemplo 2.2.1: $y'=x(1+y^2)$ da $y=\tan(x^2/2+c)$ |
| Ejemplo 2.2.2 | 18-19 | 46-47 | $y'=-x/y$: (a) $x^2+y^2=a^2$, semicírculos $y=\pm\sqrt{a^2-x^2}$ en $(-a,a)$; (b) $y(1)=1$ da $\sqrt{2-x^2}$ en $(-\sqrt2,\sqrt2)$; (c) $y(1)=-2$ da $-\sqrt{5-x^2}$ en $(-\sqrt5,\sqrt5)$; **Figure 2.2.1** (p.47) |
| Soluciones implícitas, Theorem 2.2.1 | 19-20 | 47-48 | enunciado con $c=H(y_0)-G(x_0)$ y $h(y_0)\ne0$ (teorema de la función implícita, sin demostración); definición de solución implícita; dos advertencias: para algunas $c$ no hay función diferenciable, y la solución es la función $y$, no la ecuación |
| Ejemplo 2.2.3 | 20 | 48 | $y'=\dfrac{2x+1}{5y^4+1}$: $y^5+y=x^2+x+c$; con $y(2)=1$, $c=-4$; **Figure 2.2.2** (p.49) |
| Soluciones constantes, Ejemplos 2.2.4 y 2.2.5 | 20-23 | 48-51 | dividir entre $p(y)$ pierde soluciones con $p(y)=0$; 2.2.4: $y'=2xy^2$ da $y\equiv0$ y $y=-1/(x^2+c)$, **Figure 2.2.3**; 2.2.5: $y'=x(1-y^2)$ con fracciones parciales, $y=\dfrac{1+ce^{-x^2/2}}{1-ce^{-x^2/2}}$, más $y\equiv1$ (es $c=0$) y $y\equiv-1$ (no sale de la fórmula), **Figure 2.2.4** |
| Diferencias lineal y no lineal | 23 | 51 | en la no lineal hay soluciones fuera de la familia y el intervalo de validez depende de la condición inicial (para $y'=-x/y$ es $(-a,a)$ con $a=\sqrt{x_0^2+y_0^2}$) |
| Ejemplo 2.2.6 | 24 | 52 | $y'=2xy^2$, $y(0)=y_0$: $y=\dfrac{y_0}{1-y_0x^2}$; validez $(-\infty,\infty)$ si $y_0\le0$, $(-1/\sqrt{y_0},1/\sqrt{y_0})$ si $y_0>0$ |
| Ejercicios 2.2 | 24-27 | 52-55 | 1-16 hallar soluciones (con campos en 7-10); 17-23 intervalo de validez; 24-26 con identidades trigonométricas; **27**: $y'=ay-by^2$, $y(0)=y_0$ (discutir $y_0\ge0$ y $y_0<0$); **28**: logística $P'=aP(1-\alpha P)$, hallar $P$ y el límite; **29**: epidemia $I'=rI(S-I)$; 30: con curación $-qI$, límite $S-q/r$ si $q<rS$ (p.53-54); **31**: $y'=ay-by^2-q$ y valor de bifurcación $q_0=a^2/4b$ (p.54); 32: $y'=qy-y^3$, bifurcación en 0; 33: curación constante; 34-39 variación de parámetros seguida de separación |
| 2.3 Existencia y unicidad: motivación | 27 | 55 | por qué la sección va después de la 2.2 (para tener ejemplos); **Figure 2.3.1** (rectángulo abierto) |
| Theorem 2.3.1 | 28 | 56 | rectángulo $R$ abierto con $(x_0,y_0)$: (a) $f$ continua en $R$ da existencia en algún subintervalo; (b) $f$ y $f_y$ continuas dan unicidad en algún subintervalo; interpretación en dos viñetas (no dice cuántas soluciones hay en (a); en (b) la unicidad solo es local y las soluciones pueden "ramificarse" después) |
| Ejemplos 2.3.1 a 2.3.4 | 28-29 | 56-57 | 2.3.1: $\dfrac{x^2-y^2}{1+x^2+y^2}$ continua con $f_y$ en todo el plano; 2.3.2: $\dfrac{x^2-y^2}{x^2+y^2}$ falla solo en el origen; 2.3.3: $\dfrac{x+y}{x-y}$ falla en la recta $y=x$; 2.3.4: del teorema se deduce que una solución de $y'=2xy^2$ distinta de $y\equiv0$ nunca vale cero |
| Ejemplos 2.3.5 a 2.3.8 (no unicidad) | 30-32 | 58-60 | $y'=\tfrac{10}{3}xy^{2/5}$: $f$ continua en todo (existe solución siempre), $f_y=\tfrac43xy^{-3/5}$ falla en $y=0$; 2.3.6: $y(0)=0$ tiene $y\equiv0$ y $y=(x^2+c)^{5/3}$, en particular $y=x^{10/3}$, y en total cuatro soluciones, **Figure 2.3.2**; 2.3.7: $y(0)=-1$ da $y=(x^2-1)^{5/3}$, única solo en $(-1,1)$, **Figure 2.3.3** (otra solución que se pega a 0); 2.3.8: $y(0)=1$ da $(x^2+1)^{5/3}$, única en $(-\infty,\infty)$, **Figure 2.3.4** |
| Ejercicios 2.3 | 32-34 | 60-62 | 1-13 hallar $(x_0,y_0)$ donde el teorema da existencia y unicidad; 14: aplicar el teorema a una lineal y comparar con el 2.1.2; **15**: infinitas soluciones de $y'=\tfrac{10}{3}xy^{2/5}$, $y(0)=-1$ pegando ramas; 16-20 más casos con $(y-1)^{1/3}$; 21: $y\equiv y_0$ si $f(x,y_0)=0$ |
| 2.4 Transformar en separable: idea | 34-35 | 62-63 | usar $y=uy_1$ con $y_1$ conocida de modo que $u$ cumpla una separable |
| Ecuación de Bernoulli | 35-36 | 63-64 | $y'+p(x)y=f(x)y^r$ (2.4.2), $r\ne0,1$; con $y=uy_1$: $u'/u^r=f(x)(y_1(x))^{r-1}$; Ejemplo 2.4.1: $y'-y=xy^2$ da $y=-1/(x-1+ce^{-x})$, **Figure 2.4.1** |
| Condición general de transformación | 36 | 64 | si $f(x,uy_1)=q(u)y_1'$, entonces $u'y_1=(q(u)-u)y_1'$ (2.4.6) es separable |
| Homogéneas no lineales | 37 | 65 | $y'=q(y/x)$ (2.4.7), $y=ux$, $u'x+u=q(u)$; aviso: "homogénea" aquí significa otra cosa que en 2.1 |
| Ejemplos 2.4.2 y 2.4.3 | 37-40 | 65-68 | 2.4.2: $y'=\dfrac{y+xe^{-y/x}}{x}$ da $y=x\ln(\ln|x|+c)$, **Figure 2.4.2**; 2.4.3: $x^2y'=y^2+xy-x^2$, $u'x=u^2-1$, soluciones $y=\pm x$ y $y=\dfrac{x(1+cx^2)}{1-cx^2}$ (2.4.13), **Figures 2.4.3 y 2.4.4**; con $y(1)=2$, $c=1/3$, validez $(-\sqrt3,\sqrt3)$, única solo en $(0,\sqrt3)$; comportamiento en $x=0$ (2.4.14) |
| Ejercicios 2.4 | 40-45 | 68-73 | 1-4 Bernoulli; 5-13 con campos; **14**: la logística como Bernoulli con $\alpha(t)$ (p.69); homogéneas; 44-59 otras transformaciones y ecuación de Riccati con solución conocida |
| 2.5 Ecuaciones exactas: forma | 45 | 73 | $M\,dx+N\,dy=0$ (2.5.1) con sus dos lecturas (2.5.2) y (2.5.3); solución implícita $F(x,y)=c$ |
| Theorem 2.5.1 y definición de exacta | 46 | 74 | Ejemplo 2.5.1; $F_x\,dx+F_y\,dy=0$ tiene solución implícita $F=c$; exacta si $F_x=M$, $F_y=N$ (2.5.9) |
| Condición de exactitud, Theorem 2.5.2 | 47 | 75 | $M_y=N_x$ (2.5.12); regla mnemotécnica "coeficiente de $dx$ respecto de $y$"; Ejemplo 2.5.2 ($3x^2y\,dx+4x^3dy=0$ no es exacta); Ejemplo 2.5.3 empieza |
| Ejemplo 2.5.3 y procedimiento | 47-50 | 75-78 | $(4x^3y^3+3x^2)dx+(3x^4y^2+6y^2)dy=0$: $F=x^4y^3+x^3+2y^3$ por dos métodos (integrar $M$ en $x$ y $N$ en $y$), $y=\bigl(\tfrac{c-x^3}{2+x^4}\bigr)^{1/3}$, **Figure 2.5.1**; procedimiento en seis pasos (el paso 6, igualar $F=c$, es el que suele omitirse) |
| Ejemplos 2.5.4 y 2.5.5 | 50-51 | 78-79 | 2.5.4: $e^{xy}\tan x=c$ eligiendo integrar en $y$; 2.5.5: $3x^2y^2dx+6x^3y\,dy=0$ no es exacta y el procedimiento falla en el paso 4 |
| Ejercicios 2.5 | 51-55 | 79-83 | exactitud, IVP, soluciones; 41: separable como caso particular; 43-44 funciones armónicas y conjugadas |
| 2.6 Factores integrantes: idea | 55-56 | 83-84 | $\mu M\,dx+\mu N\,dy=0$ exacta (2.6.4); ejemplo $(3x+2y^2)dx+2xy\,dy=0$ con $\mu=x$; condición $\mu(M_y-N_x)=\mu_xN-\mu_yM$ (2.6.5); $\mu=P(x)Q(y)$ lleva a $M_y-N_x=p(x)N-q(y)M$ (2.6.8) y (2.6.9) |
| Theorem 2.6.1 | 56-57 | 84-85 | (a) si $(M_y-N_x)/N$ solo depende de $x$: $\mu(x)=\pm e^{\int p\,dx}$ (2.6.10); (b) si $(N_x-M_y)/M$ solo depende de $y$: $\mu(y)=\pm e^{\int q\,dy}$ (2.6.12); demostración |
| Ejemplos 2.6.1 a 2.6.4 | 57-63 | 85-91 | 2.6.1: $\mu=e^{-x^2}$, $e^{-x^2}y^2(x^2y+2)-1=c$ (**Figure 2.6.1**); 2.6.2: $\mu=e^y$, $(x^2y^3+1)e^y=c$ (**Figure 2.6.2**); 2.6.3: $\mu=xy$ por coeficientes indeterminados, $x^3y^2+3x^2y^3=c$ (**Figure 2.6.3**); 2.6.4: separable $-y\,dx+(x+x^6)dy=0$ con $\mu=x^{-6}y^4$, $y=cx(1+x^5)^{-1/5}$ (**Figure 2.6.4**) |
| Ejercicios 2.6 | 63-65 | 91-93 | 1-2: factores que agregan o pierden soluciones ($y\equiv0$ de $\mu=y$; $x=y$ de $\mu=1/(x-y)^2$); 3-16 factor de una variable; 17-23 factor $P(x)Q(y)$; 24-27 con campos; 28-29 teoría (28 sobre ecuaciones como (2.6.23)); 30 la lineal vista con factor integrante frente al Theorem 2.1.2 (p.93); la página 94 está en blanco |

---

## Unidad 03: Numerical Methods (`trench3`; impresa = PDF + 94)

| Tema | PDF | Impresa | Qué hay exactamente |
|---|---|---|---|
| Apertura del capítulo 3 | 1 | 95 | Euler "demasiado tosco", mejoras en 3.2, Runge-Kutta "quizá el más usado" en 3.3 |
| 3.1 Planteamiento y notación | 2 | 96 | $x_i=x_0+ih$, $h=(b-x_0)/n$; $y_i\approx y(x_i)$; error $e_i=y(x_i)-y_i$, $e_0=0$; dos fuentes de error: **truncamiento** y **redondeo** (solo se analiza el primero) |
| Método de Euler: deducción | 2-3 | 96-97 | recta tangente $y=y(x_i)+f(x_i,y(x_i))(x-x_i)$ (3.1.2); $y_{i+1}=y_i+hf(x_i,y_i)$ (3.1.4), reemplazando $y(x_i)$ por $y_i$ |
| Ejemplo 3.1.1 | 3 | 97 | $y'+2y=x^3e^{-2x}$, $y(0)=1$, $h=0.1$: $y_1=.8$, $y_2=.640081873$, $y_3=.512601754$ (recalculado: coincide) |
| Ejemplo 3.1.2: error al reducir $h$ | 3-4 | 97-98 | solución exacta $y=\tfrac{e^{-2x}}{4}(x^4+4)$; **Table 3.1.1** ($h=0.1,0.05,0.025$) y **Table 3.1.2** (errores); en $x=1$ el error es .0293, .0144, .0071: "se reduce a la mitad al reducir $h$ a la mitad" |
| Ejemplo 3.1.3 (no lineal) | 4-5 | 98-99 | $y'=-2y^2+xy+x^2$, $y(0)=1$; **Tables 3.1.3 y 3.1.4**; la columna "Exact" se obtuvo con Runge-Kutta y paso pequeño (las comillas en el encabezado lo indican) |
| Error de truncamiento local | 5-6 | 99-100 | $T_i=y(x_{i+1})-y(x_i)-hf(x_i,y(x_i))$ (3.1.8); con Taylor $T_i=\tfrac{h^2}{2}y''(\tilde x_i)$ y $|T_i|\le Mh^2/2$ (3.1.10): orden $h^2$, $O(h^2)$; $y''=f_x+f_yf$ |
| Error global de Euler | 7-8 | 101-102 | $e_{i+1}=e_i+h[f(x_i,y(x_i))-f(x_i,y_i)]+T_i$ (3.1.13); $|e_{i+1}|\le(1+Rh)|e_i|+Mh^2/2$ (3.1.15); suma geométrica; $|y(b)-y_n|\le Kh$ con $K=M\dfrac{e^{R(b-x_0)}-1}{2R}$ (3.1.18): **error global $O(h)$**; la local $O(h^2)$ pero hay $n=(b-x_0)/h$ pasos |
| Semilineales y Euler semilineal | 8 | 102 | $y'+p(x)y=h(x,y)$ (3.1.19); aplicar Euler a $u'=h(x,uy_1)/y_1$ (3.1.21) con $y=uy_1$ y tomar $y_i=u_iy_1(x_i)$ |
| Ejemplo 3.1.4 (Euler falla) | 8-10 | 102-104 | $y'-2xy=1$, $y(0)=3$: **Table 3.1.5** con Euler es inútil (en $x=2$: 73.80, 115.44, 152.36 frente a 211.95); la razón es $y''(x)=2(1+2x^2)y+2x$, $y''(2)>2952$; **Table 3.1.6** con Euler semilineal ($u'=e^{-x^2}$) es mucho mejor (217.30, 214.63, 213.29) |
| Criterio práctico | 10 | 104 | el semilineal es mejor si $|u''|$ es chico; Euler es mejor si $|u''|$ es grande; probar con varios $h$ y quedarse con el método cuyos resultados cambian menos |
| Ejemplos 3.1.5 y 3.1.6 | 10-12 | 104-106 | 3.1.5: $y'-2y=\dfrac{x}{1+y^2}$, $y(1)=7$, **Tables 3.1.7 y 3.1.8** (gana el semilineal); 3.1.6: $y'+3x^2y=1+y^2$, $y(2)=2$, **Tables 3.1.9 y 3.1.10** (gana Euler); ver erratas de la Table 3.1.10 |
| Ejercicios 3.1 | 12-14 | 106-108 | 1-5 tres pasos a mano; 6-12 comparar con la exacta; 13-22 Euler y Euler semilineal; **23**: cuadratura numérica, la regla del rectángulo izquierdo sale de aplicar Euler a $y'=f(x)$ |
| 3.2 Motivación: evaluaciones de $f$ | 15-16 | 109-110 | decrecer $h$ aumenta el redondeo y lo caro es evaluar $f$; **Table 3.2.1**: aproximar $e$ con $y'=y$, $y(0)=1$ en $[0,1]$ con 12, 24 y 48 evaluaciones: Euler 2.613035290, 2.663731258, 2.690496599; Euler mejorado 2.707188994, 2.715327371, 2.717519565; Runge-Kutta 2.718069764, 2.718266612, 2.718280809; $e=2.718281828$ (recalculado, coincide) |
| Método de Euler mejorado | 16 | 110 | pendiente promedio de las pendientes en los extremos (3.2.2); $y_{i+1}=y_i+\tfrac h2\bigl(f(x_i,y_i)+f(x_{i+1},y_i+hf(x_i,y_i))\bigr)$ (3.2.4); con $k_{1i}=f(x_i,y_i)$, $k_{2i}=f(x_i+h,y_i+hk_{1i})$, $y_{i+1}=y_i+\tfrac h2(k_{1i}+k_{2i})$; dos evaluaciones por paso |
| Orden del Euler mejorado | 17 | 111 | error local $O(h^3)$, global $O(h^2)$ (sin demostrar); el error depende de $y'''$ |
| Ejemplo 3.2.1 | 17 | 111 | mismo IVP de 3.1.1 con $h=.1$: $y_1=.820040937$, $y_2=.672734445$, $y_3=.552597643$ (con los $k_{1i},k_{2i}$ a la vista; recalculado) |
| Ejemplos 3.2.2 a 3.2.4 | 17-19 | 111-113 | **Table 3.2.2** (con $h=0.1$ el mejorado supera a Euler con $h=0.05$: en $x=1$, .171388 y .169681 frente a .154716), **Table 3.2.3** (no lineal), **Tables 3.2.4 y 3.2.5** (mejorado y mejorado semilineal para $y'-2xy=1$; en $x=2$ y $h=.2$: 184.56 frente a 211.94, exacta 211.954) |
| Familia con error local $O(h^3)$ | 20-21 | 114-115 | $m_i=\sigma y'(x_i)+\rho y'(x_i+\theta h)$; condiciones $\sigma+\rho=1$, $\rho\theta=1/2$ (3.2.10); fórmula (3.2.13) con $\rho\ge1/2$ |
| Casos: mejorado, Heun, punto medio | 21-22 | 115-116 | $\rho=1/2$ da Euler mejorado; $\rho=3/4$ da **Heun**: $k_2=f(x_i+\tfrac{2h}{3},y_i+\tfrac{2h}3k_1)$, $y_{i+1}=y_i+\tfrac h4(k_1+3k_2)$; $\rho=1$ da **punto medio**: $y_{i+1}=y_i+hk_2$ con $k_2=f(x_i+\tfrac h2,y_i+\tfrac h2k_1)$ |
| Ejercicios 3.2 | 22-25 | 116-119 | 1-12 como en 3.1 con el mejorado; 13-22 mejorado semilineal; 23-30 punto medio y Heun; 31: $y''$ y $y'''$ acotadas; **32**: la regla del trapecio sale del Euler mejorado aplicado a $y'=f(x)$ |
| 3.3 Runge-Kutta: fórmulas | 25 | 119 | si el error local es $O(h^{k+1})$, el global es $O(h^k)$; Euler $k=1$, mejorado $k=2$, Runge-Kutta $k=4$ (error depende de $y^{(5)}$); $k_{1i}=f(x_i,y_i)$, $k_{2i}=f(x_i+\tfrac h2,y_i+\tfrac h2k_{1i})$, $k_{3i}=f(x_i+\tfrac h2,y_i+\tfrac h2k_{2i})$, $k_{4i}=f(x_i+h,y_i+hk_{3i})$, $y_{i+1}=y_i+\tfrac h6(k_{1i}+2k_{2i}+2k_{3i}+k_{4i})$ |
| Ejemplo 3.3.1 | 26 | 120 | mismo IVP con $h=.1$: $y_1=.818753803$, $y_2=.670592417$ (con los cuatro $k$ de cada paso; recalculado) |
| Ejemplos 3.3.2 a 3.3.4 | 26-28 | 120-122 | **Table 3.3.1** (RK con $h=.1$ supera al mejorado con $h=.05$: en $x=1$, .169173 frente a .169681, exacta .169169), **Table 3.3.2** (no lineal), **Tables 3.3.3 y 3.3.4** (RK y RK semilineal para $y'-2xy=1$; en $x=2$ y $h=.2$: 211.394 y 211.954439983, exacta 211.954462214) |
| $x_0$ en el extremo derecho | 28-30 | 122-124 | resolver en $[a,x_0]$ con $z'=-f(-x,z)$, $z(-x_0)=y_0$, $y(x)=z(-x)$ (3.3.4); Ejemplo 3.3.5: $(y-1)^2y'=2x+3$, $y(1)=4$ en $[0,1]$, exacta $y=1+(3x^2+9x+15)^{1/3}$; **Tables 3.3.5 y 3.3.6** (RK con $h=.1$ da $y(0)=3.466212070$; exacta 3.466212074); caso $a<x_0<b$ queda a Ejercicios 26 y 27 |
| Ejercicios 3.3 | 30-34 | 124-128 | 1-22 con RK (y RK semilineal); 23: justificar $z'=-f(-x,z)$ con la regla de la cadena; 24-27 intervalo a la izquierda y a ambos lados; **28**: la **regla de Simpson** sale de RK aplicado a $y'=f(x)$, con la fórmula $\tfrac h6(f(a)+f(b))+\tfrac h3\sum f(a+ih)+\tfrac{2h}3\sum f(a+(2i-1)h/2)$ |

---

## Unidad 04: Applications of First Order Equations (`trench4`; impresa = PDF + 128)

| Tema | PDF | Impresa | Qué hay exactamente |
|---|---|---|---|
| Apertura del capítulo 4 | 1 | 129 | crecimiento y decaimiento, enfriamiento y mezclas, mecánica elemental, autónomas de segundo orden, curvas |
| 4.1 Modelo exponencial | 2 | 130 | $Q'=aQ$ (4.1.1), $Q=Q_0e^{a(t-t_0)}$ (4.1.2); crece si $a>0$, decae si $a<0$ (**Figure 4.1.1**, p.131) |
| Decaimiento radiactivo y vida media | 2-3 | 130-131 | $Q'=-kQ$ con **constante de decaimiento** $k>0$, $Q=Q_0e^{-k(t-t_0)}$ (4.1.3); **vida media** $Q(\tau+t_0)=Q_0/2$ (4.1.4), $\tau=\dfrac{\ln 2}{k}$ (4.1.5), independiente de $t_0$ y $Q_0$; **Figure 4.1.2** (p.132) |
| Ejemplo 4.1.1 | 3-4 | 131-132 | vida media 1620 años, $Q_0=4$ g: $Q=4e^{-(t\ln2)/1620}$; $Q(810)=2\sqrt2$ g; $Q=1.5$ g cuando $t_1=1620\,\dfrac{\ln(8/3)}{\ln 2}\approx2292.4$ años (recalculado: 2292.36) |
| Interés compuesto | 4-5 | 132-133 | anual $Q_0(1+r)^t$; $n$ veces por año $Q_0(1+r/n)^{nt}$ (4.1.8); **Table 4.1.7** ($Q_0=100$, 6 %, 5 años: 133.82, 134.39, 134.68, 134.83, 134.98); $n\to\infty$ da $Q_0e^{rt}$, solución de $Q'=rQ$ |
| Ejemplos 4.1.2 y 4.1.3 | 6 | 134 | $\$150$ al 5.5 % continuo: $Q=150e^{.055t}$, $Q(10)\approx\$259.99$; para tener $\$10{,}000$ en 10 años hay que depositar $10000e^{-.55}\approx\$5769.50$ |
| Crecimiento y decaimiento mezclados, Ejemplo 4.1.4 | 6-7 | 134-135 | sustancia con constante $k$ producida a razón constante $a$: $Q'=a-kQ$; $Q=\dfrac ak+\bigl(Q_0-\dfrac ak\bigr)e^{-kt}$ (4.1.12); **valor estacionario** $a/k$ para cualquier $Q_0$; se acerca por arriba o por abajo; **Figure 4.1.3** (p.135) |
| Datación por carbono | 7-8 | 135-136 | Libby: razón C-14/C-12 constante; vida media del C-14 usada: 5570 años; Ejemplo 4.1.5: restos con 42 % a 44 % del C-14 vivo, $t=-5570\,\ln(Q/Q_0)/\ln 2$: 6971 y 6597 años, aldea fundada hace unos 7000 años y duró unos 400 |
| Plan de ahorro, Ejemplo 4.1.6 | 8-9 | 136-137 | $\$1000$ inicial y $\$50$ por semana, 6 % continuo: modelo continuo $Q'-.06Q=2600$ (4.1.13), $Q=1000e^{.06t}+\dfrac{2600}{.06}(e^{.06t}-1)$ (4.1.15); tabla de comparación con el valor exacto a 10 años (error relativo $\to$ .0549 %) |
| Ejercicios 4.1 | 10-12 | 138-140 | 1-6 vida media, 7-17 mezclados y tanque con fuga (17: capacidad mínima), 18 retiro continuo, 19-20 modelos no exponenciales ($W'=k\sqrt W$; $p'=p/2-p^2/8$), **21** valor exacto del ahorro (suma geométrica), 22-24 hipoteca y fondo fiduciario, 25-27 (L) producción $at/(1+btQ)$ |
| 4.2 Ley de enfriamiento | 12-13 | 140-141 | $T'=-k(T-T_m)$ (4.2.1) con $T_m$ constante; por variación de parámetros $T=T_m+ce^{-kt}$; $T=T_m+(T_0-T_m)e^{-kt}$ (4.2.2); $T-T_m$ decae exponencialmente; límites del modelo (taza de café frente a caldero de metal fundido, Ejercicio 17) |
| Ejemplos 4.2.1 y 4.2.2 | 13-15 | 141-143 | 4.2.1: aislante a 400 °C en cuarto a 25 °C, $T(4)=200$: $T=25+375e^{-(t/4)\ln(15/7)}$, $T(8)=25+375(7/15)^2\approx107$ °C, **Figure 4.2.1**; 4.2.2: objeto de 72 °F afuera a −20 °F, 60 °F a las 11:05 y 50 °F a las 11:07: $T=-20+80e^{-(t/2)\ln(8/7)}$, $\tau=-2\ln(23/20)/\ln(8/7)\approx-2.09$ min, **Figure 4.2.2** (p.143) |
| Problemas de mezclas | 15-17 | 143-145 | $Q'=$ tasa de entrada $-$ tasa de salida (4.2.5); mezcla instantánea; **Ejemplo 4.2.3**: 40 lb de sal en 600 gal, entra 1/2 lb/gal a 4 gal/min y sale igual: tasa de entrada 2 lb/min, de salida $Q/150$, $Q'+Q/150=2$, $Q=300-260e^{-t/150}$, límite 300 (**Figures 4.2.3 y 4.2.4**) |
| Mezcla con volumen variable, Ejemplo 4.2.4 | 17-19 | 145-147 | tanque de 500 l, 10 g de sal en 200 l, entran 4 l/min con 1/4 g/l y salen 2 l/min: $W(t)=2t+200$ para $0\le t\le150$, $Q'+\dfrac{Q}{t+100}=1$ (4.2.10), $Q=\dfrac{t+100}2-\dfrac{4000}{t+100}$, $K(t)=\dfrac14-\dfrac{2000}{(t+100)^2}$ (**Figures 4.2.5 y 4.2.6**; en la p.147 hay una errata en $Q=u/(\cdot)$) |
| Ejercicios 4.2 | 20-22 | 148-150 | 1-7 enfriamiento (6: temperatura inicial desconocida; 7: temperatura exterior desconocida), 8-12 mezclas, 13 gas nocivo en un laboratorio, 14 tanque de 1200 gal, 15 tanques acoplados, 16 recipiente sellado, **17** medio que se calienta (resultado $T=\dfrac{aT_0+a_mT_{m0}}{a+a_m}+\dots$), 18-21 control de flujo y tanques en serie, 22-23 (L) mezcla que no es instantánea |
| 4.3 Segunda ley de Newton y unidades | 23 | 151 | $F=ma$ (4.3.1); tabla de unidades cgs, mks, británico (dina-g, newton-kg, libra-slug); $g=980$ cm/s², 9.8 m/s², 32 ft/s²; fuerza constante $mg$ cerca de la superficie; $my''=F(t,y,y')$ y, si $F$ no depende de $y$, $mv'=F(t,v)$ (4.3.3) |
| Resistencia lineal, Ejemplos 4.3.1 y 4.3.2 | 24-26 | 152-154 | $mv'=-mg-kv$ (resistencia $k|v|$ opuesta al movimiento), $v=-\dfrac{mg}k+\bigl(v_0+\dfrac{mg}k\bigr)e^{-kt/m}$, **velocidad terminal** $-mg/k$ (**Figures 4.3.1, 4.3.2**); 4.3.2: 960 lb, 60 ft/s hacia arriba, 3 lb por ft/s: $v=-320+380e^{-t/10}$, terminal $-320$ ft/s |
| Resistencia cuadrática, Ejemplo 4.3.3 | 26-27 | 154-155 | 10 kg, resistencia 8 N a 2 m/s ($k=2$): $10v'=2(v^2-49)$ (4.3.10); $v\equiv-7$ si $v_0=-7$; fracciones parciales, $\dfrac{v-7}{v+7}=ce^{14t/5}$; terminal $-7$ m/s $=-\sqrt{mg/k}$ (Ejercicio 11, **Figure 4.3.3**, p.156) |
| Ejemplo 4.3.4 (subida) | 28-29 | 156-157 | lanzamiento hacia arriba con resistencia cuadrática: $10v'=-98-2v^2$ (4.3.15), $\tfrac57\tan^{-1}(v/7)=-t+c$; $v=7\tan\bigl(-\tfrac{7t}5+\tan^{-1}\tfrac{v_0}7\bigr)$ (4.3.17); tiempo al máximo $T=\tfrac57\tan^{-1}(v_0/7)<\tfrac{5\pi}{14}\approx1.122$ s sin importar $v_0$; **Figure 4.3.4** |
| Velocidad de escape | 30-32 | 158-160 | $F=-\dfrac{mgR^2}{(y+R)^2}$ (4.3.19); $v\,\dfrac{dv}{dy}=-\dfrac{gR^2}{(y+R)^2}$ (4.3.21) por la regla de la cadena; $\dfrac{v^2}2=\dfrac{gR^2}{y+R}+\bigl(\dfrac{v_0^2}2-\dfrac{gR^2}{h+R}\bigr)$ (4.3.23); $v_e=\sqrt{\dfrac{2gR^2}{h+R}}$; si $v_0<v_e$ hay altura máxima $y_m$; **Figure 4.3.5** |
| Ejercicios 4.3 | 32-34 | 160-162 | 1-7 resistencia lineal (bombero en poste, bote, piedra), 6 coche en pendiente con resistencia cuadrática, 8-9 posición y altura máxima, 11 terminal cuadrática en general, 17-18 velocidad de escape (estación espacial, Luna), 19-20 demostraciones |
| 4.4 Autónomas de segundo orden | 34-35 | 162-163 | $y''=F(y,y')$ sin $t$ explícita; con $v=y'$: $v\,dv/dy=F(y,v)$ (4.4.4); **plano de fase de Poincaré**, **trayectorias**; $y''+q(y,y')y'+p(y)=0$ (4.4.5) (fuerza $-mp(y)$ de posición, $-mq\,y'$ de amortiguamiento); Statements 1 a 5 (unicidad, traslación en el tiempo, trayectorias distintas no se cruzan, trayectoria cerrada es periódica) |
| Equilibrio y estabilidad | 35-36 | 163-164 | $p(\bar y)=0$ da equilibrio $\bar y$ y punto crítico $(\bar y,0)$; **estable** (definición con $\varepsilon$ y $\delta$, **Figure 4.4.1**) o inestable; caso sin amortiguamiento $y''+p(y)=0$: $\tfrac{v^2}2+P(y)=c$ (4.4.8), conservación de la energía |
| Ejemplo 4.4.1: resorte sin amortiguar | 37-39 | 165-167 | $my''=-ky$ (4.4.9); elipses $mv^2+ky^2=\rho$ (4.4.10), **Figure 4.4.3**; $R=\sqrt{\rho/k}$ (4.4.11); equilibrio $y=0$ estable; $y=R\sin(\omega_0t+\varphi)$ con $\omega_0=\sqrt{k/m}$, periodo $2\pi/\omega_0$ ("movimiento armónico simple"), **Figure 4.4.4** |
| Ejemplo 4.4.2: péndulo sin amortiguar | 39-42 | 167-170 | $y''=-\dfrac gL\sin y$ (4.4.13); equilibrios $n\pi$ (pares estables, impares inestables); $v^2=v_0^2-v_c^2\sin^2\dfrac y2$, $v_c=2\sqrt{g/L}$ (4.4.15); si $|v_0|>v_c$ el péndulo da vueltas, si $|v_0|<v_c$ oscila con $y_{max}=2\sin^{-1}(|v_0|/v_c)$; periodo $T=8\int_0^{\pi/2}\dfrac{d\theta}{\sqrt{v_c^2-v_0^2\sin^2\theta}}$ (4.4.16); **separatriz**; **Figures 4.4.5 a 4.4.9** |
| Criterios de estabilidad | 42-43 | 170-171 | $\bar y$ estable si $p<0$ a la izquierda y $p>0$ a la derecha (4.4.19); inestable si $p<0$ a la derecha (4.4.20) o $p>0$ a la izquierda (4.4.21); separatrices (4.4.17) |
| Ejemplo 4.4.3 | 43-44 | 171-172 | $y''+y(y-1)=0$: $y=0$ inestable, $y=1$ estable; $v^2+\tfrac13y^2(2y-3)=c$ (4.4.23); separatriz con $c=0$; comportamiento asintótico en cada rama; **Figure 4.4.10** |
| Caso amortiguado | 44-47 | 172-175 | $v\,dv/dy+q\,v+p=0$ no separable (4.4.25); trayectorias numéricas (sistema $y'=v$, $v'=-qv-p(y)$, sección 10.1); resorte amortiguado $my''+cy'+ky=0$ (4.4.27), $dv/dy=-c/m-ky/(mv)$ (4.4.28), trayectorias en espiral hacia el origen, **Figures 4.4.11 a 4.4.14**; existe $c_1$ tal que si $c<c_1$ todas las soluciones oscilan (se da en 6.2); Ejemplo 4.4.4 péndulo amortiguado $mLy''=-cy'-mg\sin y$ (4.4.29), **Figure 4.4.15** |
| Ejercicios 4.4 | 48-50 | 176-178 | 1-8 trayectorias, equilibrios y separatrices; 9-12 parámetro crítico (bifurcación); 13-18 efecto del amortiguamiento; **19**: ecuación de van der Pol y ciclo límite; 20: Rayleigh; **21**: periodo del péndulo $T=4T_1$; 22-24 demostraciones de estabilidad e inestabilidad |
| 4.5 Familias de curvas | 51-53 | 179-181 | familia uniparamétrica $H(x,y,c)=0$ (Definition 4.5.1); ecuación diferencial para la familia (Definition 4.5.2); Ejemplos 4.5.1 a 4.5.6 ($y=cx^2$ da $y'=2y/x$; rectas tangentes a $y=x^2$ desde $(2,3)$) |
| Problemas geométricos | 55-57 | 183-185 | Ejemplo 4.5.7 (punto medio del segmento tangente entre ejes: $xy=c$), Ejemplo 4.5.8 (tangente cruza el eje $x$ en $x_0^2$: $y=cx/(x-1)$) |
| Trayectorias ortogonales | 57-61 | 185-189 | pendientes $f$ y $-1/f$; método en dos pasos; Ejemplos 4.5.9 (círculos y rectas por el origen), 4.5.10 ($xy=c$ y $y^2-x^2=k$), 4.5.11 (círculos tangentes al eje $y$ y círculos tangentes al eje $x$, vía homogénea) |
| Ejercicios 4.5 | 62-64 | 190-192 | 1-13 ecuación diferencial de una familia, 14-17 rectas tangentes desde un punto (parábola, círculo), 18-24 curvas definidas por condiciones de la tangente o la normal, 25-34 trayectorias ortogonales y curvas que cortan a un ángulo dado (32-34) |

---

## Unidad 05: Linear Second Order Equations (`trench5`; impresa = PDF + 192)

| Tema | PDF | Impresa | Qué hay exactamente |
|---|---|---|---|
| Apertura del capítulo 5 | 1 | 193 | $P_0y''+P_1y'+P_2y=F$; resumen de las secciones 5.1 a 5.7 (con una errata en el índice del capítulo) |
| 5.1 Lineal de segundo orden: definición | 2 | 194 | $y''+p(x)y'+q(x)y=f(x)$ (5.1.1), **función forzante**; homogénea si $f\equiv0$; no hay fórmula general para la solución (a diferencia de 2.1) |
| Theorem 5.1.1 | 2 | 194 | $p,q$ continuas en $(a,b)$: el IVP $y''+py'+qy=0$, $y(x_0)=k_0$, $y'(x_0)=k_1$ tiene solución única en $(a,b)$; el IVP con $k_0=k_1=0$ solo tiene la trivial (Ejercicio 24) |
| Ejemplos 5.1.1 y 5.1.2 | 2-4 | 194-196 | 5.1.1: $y''-y=0$, $y_1=e^x$, $y_2=e^{-x}$, $y=c_1e^x+c_2e^{-x}$, IVP $y(0)=1$, $y'(0)=3$ da $2e^x-e^{-x}$; 5.1.2: $y''+\omega^2y=0$, $\cos\omega x$ y $\sin\omega x$, IVP $y(0)=1,\ y'(0)=3$ da $\cos\omega x+\tfrac3\omega\sin\omega x$ |
| Ejemplo 5.1.3 | 4-6 | 196-198 | $x^2y''+xy'-4y=0$ con $P_0=x^2$ (se separa en $(-\infty,0)$ y $(0,\infty)$); $y=c_1x^2+c_2/x^2$; $y(1)=2$, $y'(1)=0$ da $x^2+1/x^2$ en $(0,\infty)$; $y(-1)=2$, $y'(-1)=0$ da la misma fórmula pero en $(-\infty,0)$: son soluciones distintas |
| Combinación lineal y principio de superposición | 6 | 198 | **Theorem 5.1.2**: toda combinación lineal $c_1y_1+c_2y_2$ de soluciones homogéneas es solución; **conjunto fundamental** y **solución general** |
| Independencia lineal | 6-7 | 198-199 | $y_1,y_2$ son linealmente independientes si ninguna es múltiplo constante de la otra; **Theorem 5.1.3**: dos soluciones forman conjunto fundamental si y solo si son independientes; Ejemplo 5.1.4 (cocientes $e^{2x}$, $\cot\omega x$, $x^4$) |
| Motivación del wronskiano | 7-8 | 199-200 | sistema (5.1.22) para $c_1,c_2$ a partir de $k_0,k_1$ y la condición $y_1y_2'-y_1'y_2\ne0$ en $x_0$ (5.1.25); fórmulas (5.1.26) |
| Theorem 5.1.4 (Abel) | 8 | 200 | $W=y_1y_2'-y_1'y_2$ (5.1.28) cumple $W'=-pW$, $W(x)=W(x_0)e^{-\int_{x_0}^xp(t)dt}$ (5.1.29); o $W$ no se anula nunca o es idénticamente 0; el wronskiano como determinante |
| Cramer y Ejemplo 5.1.5 | 9 | 201 | $c_1,c_2$ por regla de Cramer; verificación de Abel: $W=-2$ ($e^x,e^{-x}$), $W=\omega$ ($\cos,\sin$), $W=-4/x$ ($x^2,1/x^2$, con $p=1/x$) |
| Theorems 5.1.5 y 5.1.6 | 10-11 | 202-203 | 5.1.5: independientes si y solo si $W$ no se anula en $(a,b)$ (demostración con $(y_2/y_1)'=W/y_1^2$); 5.1.6: equivalencia de cinco enunciados (solución general, conjunto fundamental, independencia, $W\ne0$ en algún punto, en todo punto); Theorem 5.1.7 (si $\alpha y(c)+\beta y'(c)=0$ para ambas, son dependientes) |
| Ejercicios 5.1 | 11-18 | 203-210 | 1-4 verificar y resolver IVP ($e^{2x},e^{5x}$; $e^x\cos x,e^x\sin x$; $e^x,xe^x$; $\tfrac1{x-1},\tfrac1{x+1}$); 5-8 wronskianos y fórmula de Abel; **9-23** segunda solución dada una $y_1$ (reducción de orden en versión de ejercicio); 24-37 demostraciones (24: solución trivial; 34-35 ecuación que tiene un par dado de soluciones); 38-41 IVP con soluciones base; 42-44 coeficiente principal con ceros ($x^2y''-6xy'+12y=0$ con $y=a_1x^3+a_2x^4$ a trozos: infinitas soluciones por $x=0$) |
| 5.2 Coeficientes constantes: idea | 18 | 210 | $ay''+by'+cy=0$ (5.2.1); con $y=e^{rx}$: $(ar^2+br+c)e^{rx}$ (5.2.2); **polinomio característico** $p(r)=ar^2+br+c$ y ecuación característica; raíces por la fórmula cuadrática (5.2.3); tres casos según $b^2-4ac$ |
| Caso 1: raíces reales distintas | 19-20 | 211-212 | Ejemplo 5.2.1: $y''+6y'+5y=0$, $p(r)=(r+1)(r+5)$, $y=c_1e^{-x}+c_2e^{-5x}$; IVP $y(0)=3$, $y'(0)=-1$ da $\tfrac72e^{-x}-\tfrac12e^{-5x}$; **Figure 5.2.1**; en general $y_2/y_1=e^{(r_2-r_1)x}$ no constante |
| Caso 2: raíz repetida | 20-22 | 212-214 | Ejemplo 5.2.2: $y''+6y'+9y=0$, $r=-3$ doble; $y=ue^{-3x}$ da $u''=0$, $u=c_1+c_2x$, $y=e^{-3x}(c_1+c_2x)$; IVP $y(0)=3$, $y'(0)=-1$ da $e^{-3x}(3+8x)$, **Figure 5.2.2**; caso general $y=e^{r_1x}(c_1+c_2x)$ (5.2.13); otras formas de obtener la segunda solución en los Ejercicios 5.1.9, 5.1.12 y 33 |
| Caso 3: raíces complejas | 22-24 | 214-216 | Ejemplo 5.2.3: $y''+4y'+13y=0$, $r=-2\pm3i$; se evita la exponencial compleja con $y=ue^{-2x}$ y $u''+9u=0$ (de 5.1.2); $y=e^{-2x}(c_1\cos3x+c_2\sin3x)$; IVP $y(0)=2$, $y'(0)=-3$ da $e^{-2x}(2\cos3x+\tfrac13\sin3x)$, **Figure 5.2.3**; caso general $r=\lambda\pm i\omega$ (5.2.17), $\lambda=-b/2a$, $\omega=\sqrt{4ac-b^2}/2a$, "no memorizar" |
| Theorem 5.2.1 | 24-25 | 216-217 | (a) distintas reales $y=c_1e^{r_1x}+c_2e^{r_2x}$; (b) repetida $y=e^{r_1x}(c_1+c_2x)$; (c) complejas $y=e^{\lambda x}(c_1\cos\omega x+c_2\sin\omega x)$ (5.2.19) |
| Ejercicios 5.2 | 25-29 | 217-221 | 1-12 solución general, 13-21 IVP, 22-28 condiciones en $x_0\ne0$ por traslación $z(x)=y(x-x_0)$, 29 si las raíces tienen parte real negativa toda solución $\to0$, 30-32 fórmulas con $x_0$, **33** segunda solución derivando respecto de $r$, **34** serie de potencias y **identidad de Euler** $e^{i\theta}=\cos\theta+i\sin\theta$ (p.220), exponencial compleja (p.221) |
| 5.3 No homogénea: teoremas | 29-30 | 221-222 | **Theorem 5.3.1** existencia y unicidad para $y''+py'+qy=f$; ecuación complementaria; **Theorem 5.3.2**: $y=y_p+c_1y_1+c_2y_2$ es la solución general; demostración |
| Ejemplos 5.3.1 a 5.3.3 | 31-33 | 223-225 | 5.3.1: $y''+y=1$, $y_p\equiv1$, $y=1+c_1\cos x+c_2\sin x$, IVP $y(0)=2$, $y'(0)=7$ da $1+\cos x+7\sin x$ (**Figure 5.3.1**); 5.3.2: $y''-2y'+y=-3-x+x^2$, $y_p=1+3x+x^2$, IVP $y(0)=-2$, $y'(0)=1$ da $1+3x+x^2-e^x(3-x)$ (**Figure 5.3.2**); 5.3.3: $x^2y''+xy'-4y=2x^4$, $y_p=x^4/6$ |
| Principio de superposición | 33-34 | 225-226 | **Theorem 5.3.3**: si $y_{p_1}$ resuelve con $f_1$ y $y_{p_2}$ con $f_2$, $y_{p_1}+y_{p_2}$ resuelve con $f_1+f_2$; Ejemplo 5.3.4: $x^2y''+4xy'+2y=2x^4+4x^2$, $y_p=x^4/15+x^2/3$ |
| Ejercicios 5.3 | 35-37 | 227-229 | 1-7 polinomio como forzante (método del Ejemplo 5.3.2), 8-14 forzante potencia de $x$ en ecuaciones tipo Euler (Ejemplo 5.3.3), 16-23 forzante exponencial, 24-31 forzante seno y coseno, 32 demostración (existe solución particular tipo $\cos,\sin$ si y solo si no son solución de la complementaria), 33-38 superposición, 39 superposición con $P_0$, 40 $y_1,y_2$ resuelven la complementaria (p.227-229) |
| 5.4 Coeficientes indeterminados I | 37 | 229 | $ay''+by'+cy=e^{\alpha x}G(x)$ con $G$ polinomio (5.5.1); $y=y_p+c_1y_1+c_2y_2$ |
| Ejemplos 5.4.1 a 5.4.3 (el caso resonante) | 38-39 | 230-231 | 5.4.1: $y''-7y'+12y=4e^{2x}$, $y_p=2e^{2x}$; 5.4.2: lado derecho $5e^{4x}$, $e^{4x}$ ya es solución de la complementaria, $y=ue^{4x}$ da $u''+u'=5$, $y_p=5xe^{4x}$; 5.4.3: $y''-8y'+16y=2e^{4x}$, $y_p=x^2e^{4x}$; reglas (a), (b), (c) sobre $Ae^{\alpha x}$, $Axe^{\alpha x}$, $Ax^2e^{\alpha x}$ |
| Sustitución $y=ue^{\alpha x}$ | 39-40 | 231-232 | $au''+p'(\alpha)u'+p(\alpha)u=G(x)$ (5.4.9); si $e^{\alpha x}$ es solución ($p(\alpha)=0$) desaparece el término en $u$; si $xe^{\alpha x}$ también ($p'(\alpha)=0$) queda $au''=G$ |
| Ejemplos 5.4.4 a 5.4.7 | 40-43 | 232-235 | 5.4.4: $y''-3y'+2y=e^{3x}(-1+2x+x^2)$, $u_p=-\tfrac14(1+2x-2x^2)$; 5.4.5: $e^{3x}$ solución, $u_p=x(4-x+2x^2)$; 5.4.6: $4y''+4y'+y=e^{-x/2}(-8+48x+144x^2)$, $y_p=x^2e^{-x/2}(-1+2x+3x^2)$; resumen (a)-(c) (p.234); 5.4.7 superposición $y_p=2e^{2x}+5xe^{4x}$ |
| Ejercicios 5.4 | 43-45 | 235-237 | 1-14 solución particular, 15-19 general, 20-23 IVP con gráfica, 24-29 superposición, 30 demostración de las reglas (y de (5.4.9)), 31-36 sustituir directamente $y_p$ y comparar con los Ejemplos 5.4.1 a 5.4.6, 37 usar $y=ue^{\alpha x}$, 38-40 (p.237-238) integrales de polinomio por exponencial |
| 5.5 Coeficientes indeterminados II | 46 | 238 | $ay''+by'+cy=e^{\lambda x}(P(x)\cos\omega x+Q(x)\sin\omega x)$ (5.5.1); caso $\lambda=0$ (5.5.2); en la misma página, Ejercicios 5.4.38-40 (integrales $\int x^ke^{\alpha x}dx$ por el método de coeficientes indeterminados) |
| Theorem 5.5.1 | 46-47 | 238-239 | $y_p=A(x)\cos\omega x+B(x)\sin\omega x$ con polinomios de grado $k$ (el mayor de $P$ y $Q$) si $\cos\omega x,\sin\omega x$ no son soluciones de la complementaria; **si lo son** (caso $y''+\omega^2y$), $A(x)=A_0x+\dots+A_kx^{k+1}$, $B$ igual: aparece el factor $x$ |
| Ejemplos 5.5.1 a 5.5.4 | 47-50 | 239-242 | 5.5.1: $y''-2y'+y=5\cos2x+10\sin2x$, $y_p=\cos2x-2\sin2x$; 5.5.2: $y''+4y=8\cos2x+12\sin2x$, $y_p=-x(3\cos2x-2\sin2x)$ (**resonancia**: amplitud con $x$); 5.5.3: $(16+20x)\cos x+10\sin x$, $y_p=(1+2x)\cos x-(1-6x)\sin x$; 5.5.4: $y''+y=(8-4x)\cos x-(8+8x)\sin x$, $y_p=x[(3+2x)\cos x+(2-x)\sin x]$; Theorem 5.5.2 (regla de comprobación, p.241) |
| Con factor exponencial, Ejemplos 5.5.5 y 5.5.6 | 50-51 | 242-243 | sustituir $y=ue^{\lambda x}$; 5.5.5: $y''-3y'+2y=e^{-2x}[2\cos3x-(34-150x)\sin3x]$, $y_p=e^{-2x}[(1+7x)\cos3x-(2-x)\sin3x]$; 5.5.6: $y_p=xe^{-x}[(1+x)\cos2x+(1-2x)\sin2x]$ |
| Ejercicios 5.5 | 52-56 | 244-248 | 1-14 solución particular, 18-20 con gráfica, 22-26 IVP, 27-32 superposición, 33-35 IVP con gráfica, 36 Theorem 5.5.2, 37-38 demostraciones del Theorem 5.5.1 y de su versión con $e^{\lambda x}$, 39-40 integrales de $e^{\lambda x}(P\cos\omega x+Q\sin\omega x)$ (el 39 y el 40 de 5.5 están en la p.248) |
| 5.6 Reducción de orden | 56-57 | 248-249 | dada una solución $y_1$ de la complementaria, $y=uy_1$ lleva a $Q_0u''+Q_1u'=F$ (5.6.5), lineal de primer orden en $u'$ (el texto dice "Section 1.2" por 2.1) |
| Ejemplos 5.6.1 a 5.6.3 | 57-60 | 249-252 | 5.6.1: $xy''-(2x+1)y'+(x+1)y=x^2$ con $y_1=e^x$: $y=x+1+c_1e^x+c_2x^2e^x$, conjunto fundamental $\{e^x,x^2e^x\}$; 5.6.2: $x^2y''+xy'-y=x^2+1$ con $y_1=x$, IVP $y(1)=2$, $y'(1)=-3$ da $\tfrac{x^2}3-1-\tfrac x2+\tfrac{19}{6x}$; 5.6.3: homogénea $x^2y''-3xy'+3y=0$, $\{x,x^3\}$ |
| Ejercicios 5.6 | 60-62 | 252-254 | 1-17 solución general dada $y_1$; 18-30 conjunto fundamental dada $y_1$; 31-35 IVP; sin respuestas en el texto |
| 5.7 Variación de parámetros: método | 63-65 | 255-257 | $y_p=u_1y_1+u_2y_2$ (5.7.3) con $u_1'y_1+u_2'y_2=0$ y $u_1'y_1'+u_2'y_2'=F/P_0$ (5.7.9); $u_1'=-\dfrac{Fy_2}{P_0W}$, $u_2'=\dfrac{Fy_1}{P_0W}$ (5.7.11-12); receta de cinco pasos; por qué estudiarlo (generaliza a orden superior y sistemas) |
| Ejemplos 5.7.1 a 5.7.4 | 65-69 | 257-261 | 5.7.1: $x^2y''-2xy'+2y=x^{9/2}$, $y_p=\tfrac4{35}x^{9/2}$; 5.7.2: $(x-1)y''-xy'+y=(x-1)^2$, $y_p=-x^2-x-1$; 5.7.3: $y''+3y'+2y=\dfrac1{1+e^x}$, $y_p=(e^{-x}+e^{-2x})\ln(1+e^x)$; 5.7.4: IVP con $\dfrac{2\ln(x+1)}{x-1}+\dfrac{3x+1}{x^2-1}$, **Figure 5.7.1** (p.262) |
| Comparación de métodos | 69 | 261 | indeterminados para coeficientes constantes y forzantes polinomio-exponencial-trigonométrica; reducción de orden o variación de parámetros en lo demás |
| Ejercicios 5.7 | 70-73 | 262-265 | 1-6 solución particular (por ejemplo $y''+9y=\tan3x$); 7-29 dadas $y_1,y_2$; 30-32 IVP; 33-35 IVP con gráfica; 36-39 teoría (37-39: la variación de parámetros como herramienta teórica); 40 (p.255) ecuación de Riccati generalizada. Página 266 en blanco |

---

## Unidad 06: Applications of Linear Second Order Equations (`trench6`; impresa = PDF + 266)

| Tema | PDF | Impresa | Qué hay exactamente |
|---|---|---|---|
| Apertura del capítulo 6 | 1 | 267 | resortes, circuitos RLC, fuerza central (con las referencias de sección equivocadas, ver erratas) |
| 6.1 Modelo del resorte con masa | 2-3 | 268-269 | $y$ positivo hacia arriba; fuerzas: gravedad $-mg$, resorte $F_s=k\Delta L$ (**ley de Hooke**), amortiguamiento $F_d=-cy'$ (**dashpot**, **Figures 6.1.1 y 6.1.2**), externa $F$; **libre** si $F\equiv0$, **forzado** si no; $my''=-mg-cy'+F_s+F$ (6.1.1); en equilibrio $mg=k\Delta l$ (**Figure 6.1.3**), de donde $my''+cy'+ky=F$ (6.1.2) "ecuación de movimiento" |
| Movimiento armónico simple libre, Ejemplo 6.1.1 | 3-4 | 269-270 | $y''+\dfrac kmy=0$ (6.1.3); $k/m=g/\Delta l$ (basta el alargamiento en equilibrio); resorte que se alarga 6 in: $k/m=32/(1/2)=64$, $y=c_1\cos8t+c_2\sin8t$; con 18 in arriba y 3 ft/s hacia abajo: $y(0)=\tfrac32$, $y'(0)=-3$, $y=\tfrac32\cos8t-\tfrac38\sin8t$ (**Figure 6.1.4**, p.271) |
| Forma amplitud-fase | 4-6 | 270-272 | $y=c_1\cos\omega_0t+c_2\sin\omega_0t$ con $\omega_0=\sqrt{k/m}$ (6.1.7); $R=\sqrt{c_1^2+c_2^2}$, $c_1=R\cos\varphi$, $c_2=R\sin\varphi$ (6.1.8-9), $y=R\cos(\omega_0t-\varphi)$ (6.1.10); **amplitud** $R$, **fase** $\varphi\in[-\pi,\pi)$, **periodo** $T=2\pi/\omega_0$, **frecuencia natural** $\omega_0$ en rad/s; **Figure 6.1.5** (polares de $(c_1,c_2)$) |
| Ejemplos 6.1.2 y 6.1.3 | 6-7 | 272-273 | 6.1.2: $\omega_0=8$, $T=\pi/4$ s, $R=\tfrac38\sqrt{17}$, $\varphi\approx-.245$ rad (el signo se decide con $\sin\varphi<0$); 6.1.3: resorte de 1 m que mide 102 cm en equilibrio, unidades cgs ($g=980$), $\omega_0^2=490$, $y(0)=-1$, $y'(0)=14$, $y=-\cos7\sqrt{10}t+\tfrac2{\sqrt{10}}\sin7\sqrt{10}t$, $R=\sqrt{7/5}$ cm, $\varphi\approx2.58$ rad |
| Oscilación forzada sin amortiguar | 7-8 | 273-274 | $F(t)=F_0\cos\omega t$; $y''+\omega_0^2y=\dfrac{F_0}m\cos\omega t$ (6.1.13); los casos $\omega\ne\omega_0$ y $\omega=\omega_0$ se comportan distinto; motivo: soldados marchando en un puente, motores de avión |
| Ejemplo 6.1.4 (batimientos) | 8-10 | 274-276 | $\omega\ne\omega_0$, $y(0)=y'(0)=0$: $y_p=\dfrac{F_0}{m(\omega_0^2-\omega^2)}\cos\omega t$ (general 6.1.15); $y=\dfrac{F_0}{m(\omega_0^2-\omega^2)}(\cos\omega t-\cos\omega_0t)$ (6.1.16); con $\cos(\alpha-\beta)-\cos(\alpha+\beta)=2\sin\alpha\sin\beta$: $y=R(t)\sin\dfrac{(\omega_0+\omega)t}2$, $R(t)=\dfrac{2F_0}{m(\omega_0^2-\omega^2)}\sin\dfrac{(\omega_0-\omega)t}2$ (6.1.20-21); cota $|y|\le\dfrac{2|F_0|}{m|\omega_0^2-\omega^2|}$; cada oscilación entre ceros de $R(t)$ es un **batimiento** (**beat**), **Figure 6.1.6** |
| Ejemplo 6.1.5 y resonancia | 9-11 | 275-277 | $\omega=\omega_0$: $y''+\omega_0^2y=\dfrac{F_0}m\cos\omega_0t$, $y_p=t(A\cos\omega_0t+B\sin\omega_0t)$ con $A=0$, $B=\dfrac{F_0}{2m\omega_0}$, $y_p=\dfrac{F_0t}{2m\omega_0}\sin\omega_0t$; amplitud creciente $\pm\dfrac{F_0t}{2m\omega_0}\to\infty$, **Figure 6.1.7**; la palabra **resonancia** se define aquí (p.277): desplazamiento no acotado por forzar a la frecuencia natural; puentes y alas de avión |
| Ejercicios 6.1 | 11-13 | 277-279 | 1-9 libre (hallar desplazamiento, frecuencia, periodo, amplitud, fase), 10-13 forzado, 14 periodo de masa doble, 15-17 valor de $\omega$ con desplazamiento no acotado, 18 fórmulas generales de la fase, 19-21 comparar periodos y constantes |
| 6.2 Libre con amortiguamiento | 13 | 279 | $my''+cy'+ky=0$ (6.2.1); intuición (débil: oscila; fuerte: se arrastra al equilibrio); ecuación característica $mr^2+cr+k=0$, raíces (6.2.2); tres casos según $c^2-4mk$ |
| Subamortiguado | 13-14 | 279-280 | $c<\sqrt{4mk}$: $r=-\dfrac c{2m}\pm i\omega_1$, $\omega_1=\dfrac{\sqrt{4mk-c^2}}{2m}$; $y=Re^{-ct/2m}\cos(\omega_1t-\varphi)$ (6.2.3); **amplitud variable** $Re^{-ct/2m}$, **cuasi-periodo** $2\pi/\omega_1$; **Figure 6.2.1** (entre las exponenciales $\pm Re^{-ct/2m}$) |
| Sobreamortiguado y críticamente amortiguado | 15 | 281 | $c>\sqrt{4mk}$: $r_1<r_2<0$, $y=c_1e^{r_1t}+c_2e^{r_2t}$, no oscila (a lo sumo un cero, Ejercicio 23); $c=\sqrt{4mk}$: $y=e^{-ct/2m}(c_1+c_2t)$ (a lo sumo un cero, Ejercicio 22); en ambos $y\to0$ |
| Ejemplo 6.2.1 | 15-16 | 281-282 | 64 lb, 6 in: $m=2$ slugs, $k=128$ lb/ft, $2y''+cy'+128y=0$; crítico con $c=\sqrt{8\cdot128}=32$ lb-s/ft; $y''+16y'+64y=0$, $y=e^{-8t}(c_1+c_2t)$; con $y(0)=1$, $y'(0)=20$: $y=e^{-8t}(1+28t)$ (se acerca por arriba); con $y'(0)=-20$: $y=e^{-8t}(1-12t)$ (cruza el equilibrio una vez); **Figure 6.2.2** |
| Ejemplo 6.2.2 | 16-17 | 282-283 | $c=4$: $y''+2y'+64y=0$, $r=-1\pm3\sqrt7i$; $y(0)=1.5$, $y'(0)=-3$: $y=e^{-t}\bigl(\tfrac32\cos3\sqrt7t-\tfrac1{2\sqrt7}\sin3\sqrt7t\bigr)=\tfrac4{\sqrt7}e^{-t}\cos(3\sqrt7t-\varphi)$, $\varphi\approx-.125$ rad |
| Ejemplo 6.2.3 | 17-18 | 283-284 | $c=40$: $y''+20y'+64y=0$, $r=-4,-16$; $y(0)=1$, $y'(0)=1$: $y=\tfrac{17}{12}e^{-4t}-\tfrac5{12}e^{-16t}$, **Figure 6.2.3** |
| Forzado con amortiguamiento: planteamiento | 18-19 | 284-285 | $my''+cy'+ky=F_0\cos\omega t$ (6.2.11); con amortiguamiento el desplazamiento queda acotado y las condiciones iniciales pierden efecto; pregunta: qué $\omega$ maximiza la amplitud $R$ |
| Solución estacionaria | 19 | 285 | $y_p=A\cos\omega t+B\sin\omega t$; sistema $(k-m\omega^2)A+c\omega B=F_0$, $-c\omega A+(k-m\omega^2)B=0$; $y_p=\dfrac{F_0}{\sqrt{(k-m\omega^2)^2+c^2\omega^2}}\cos(\omega t-\varphi)$ (6.2.14), $\cos\varphi=\dfrac{k-m\omega^2}{\sqrt{\cdot}}$, $\sin\varphi=\dfrac{c\omega}{\sqrt{\cdot}}$ (6.2.15); con $k-m\omega^2=m(\omega_0^2-\omega^2)$ (6.2.16-17) |
| Transitorio y estacionario | 19-20 | 285-286 | $y=y_c+y_p$ con $y_c\to0$ (**componente transitoria**) y $y_p$ (**componente estacionaria**, movimiento a la frecuencia de la fuerza); amplitud $R=\dfrac{F_0}{\sqrt{m^2(\omega_0^2-\omega^2)^2+c^2\omega^2}}$ (6.2.18) finita siempre: "el amortiguamiento impide la resonancia" |
| Frecuencia que maximiza la amplitud | 20 | 286 | minimizar $\rho(\omega)=m^2(\omega_0^2-\omega^2)^2+c^2\omega^2$ (6.2.19), $\rho'(\omega)=2\omega(2m^2\omega^2+c^2-2m^2\omega_0^2)$; si $c\ge\sqrt{2mk}$, $\omega_{max}=0$ y $R=F_0/k$ |
| Theorem 6.2.1 | 20-21 | 286-287 | (a) $c\ge\sqrt{2mk}$: $R_{max}=F_0/k$ en $\omega=0$; (b) $c<\sqrt{2mk}$: $R_{max}=\dfrac{2mF_0}{c\sqrt{4mk-c^2}}$ (6.2.20) en $\omega_{max}=\sqrt{\dfrac km\bigl(1-\dfrac{c^2}{2km}\bigr)}$ (6.2.21); $R_{max}$ y $\omega_{max}$ son continuas en $c$ (empatan en $c=\sqrt{2km}$) |
| Ejercicios 6.2 | 22-24 | 288-290 | 1-12 libre amortiguado, 13-21 componente estacionaria, 22-23 ceros de soluciones críticas y sobreamortiguadas, 24-26 fórmulas del IVP general en cada caso |
| 6.3 Circuito RLC: elementos | 24-25 | 290-291 | **Figure 6.3.1**; voltaje aplicado $E(t)$, corriente $I$ con signo; caída de voltaje en la resistencia $V_R=IR$ (6.3.1), en la bobina $V_L=LI'$ (6.3.2), en el condensador $V_C=Q/C$ (6.3.4) con $Q=Q_0+\int_0^tI$ (6.3.3); tabla de unidades (Table 6.3.8) |
| Ecuación del circuito y analogía | 25-26 | 291-292 | ley de Kirchhoff: $LI'+RI+Q/C=E(t)$ (6.3.5); como $Q'=I$: $LQ''+RQ'+Q/C=E(t)$ (6.3.6); **analogía con el resorte**: $Q\leftrightarrow y$, $I\leftrightarrow y'$, $E\leftrightarrow F$, $L\leftrightarrow m$, $R\leftrightarrow c$, $1/C\leftrightarrow k$ (Table 6.3.9) |
| Oscilaciones libres | 26-27 | 292-293 | $LQ''+RQ'+Q/C=0$; raíces (6.3.9); subamortiguado $R<\sqrt{4L/C}$: $Q=Ae^{-Rt/2L}\cos(\omega_1t-\varphi)$, $\omega_1=\dfrac{\sqrt{4L/C-R^2}}{2L}$ (6.3.10); con $R=0$: $Q=A\cos(t/\sqrt{LC}-\varphi)$; sobreamortiguado (6.3.11) y crítico (6.3.12); todo es transitorio |
| Ejemplo 6.3.1 | 27-28 | 293-294 | $R=40$ ohms, $L=.2$ H, $C=10^{-5}$ F (ver erratas), $Q(0)=1$, $I(0)=2$: $Q''+200Q'+50000Q=0$, $r=-100\pm200i$; $Q=e^{-100t}\bigl(\cos200t+\tfrac{51}{100}\sin200t\bigr)$, $I=e^{-100t}(2\cos200t-251\sin200t)$ |
| Oscilaciones forzadas | 28-29 | 294-295 | carga estacionaria $Q_p$ y corriente estacionaria $I_p=Q_p'$; Ejemplo 6.3.2: $E=E_0\cos\omega t$: $Q_p=\dfrac{E_0}{\sqrt{(1/C-L\omega^2)^2+R^2\omega^2}}\cos(\omega t-\varphi)$, $I_p=-\dfrac{\omega E_0}{\sqrt{\cdot}}\sin(\omega t-\varphi)$ por analogía con (6.2.14-15) |
| Ejercicios 6.3 | 29-30 | 295-296 | 1-5 corriente libre, 6-10 corriente estacionaria, 11 $I_p=\dfrac{\omega^2RE+(1/C-L\omega^2)E'}{\Delta}$, 12 amplitud y frecuencia que la maximiza, 13-17 (L) graficar la amplitud contra $\omega$ |
| 6.4 Fuerza central: planteamiento | 30-31 | 296-297 | fuerza $F=f(r)(\cos\theta\,\mathbf i+\sin\theta\,\mathbf j)$; la órbita es $r=1/u(\theta)$ con $u''+u=-\dfrac1{mh^2u^2}f(1/u)$ (6.4.1) |
| Derivación | 31-33 | 297-299 | vectores unitarios $e_1,e_2$ y derivadas (6.4.3-4); $m(r''-r\theta'^2)=f(r)$ (6.4.6) y $r\theta''+2r'\theta'=0$, es decir $(r^2\theta')'=0$: $r^2\theta'=h$ (6.4.7); $u=1/r$ y $r'=-h\,du/d\theta$ |
| Theorem 6.4.1 (segunda ley de Kepler) | 33-34 | 299-300 | el vector de posición barre áreas iguales en tiempos iguales: $A=h(t_2-t_1)/2$; demostración con $A=\tfrac12\int r^2d\theta$ |
| Fuerza del inverso del cuadrado | 34-36 | 300-302 | $f=-mk/r^2$: $u''+u=k/h^2$ (6.4.10); $u=A\cos(\theta-\varphi)+k/h^2$; $r=\dfrac\rho{1+e\cos(\theta-\varphi)}$, $\rho=h^2/k$, $e=A\rho$ (6.4.11): cónica con foco en el origen (elipse $e<1$, parábola $e=1$, hipérbola $e>1$); $r_{min}=\dfrac\rho{1+e}$, $r_{max}=\dfrac\rho{1-e}$; **Figure 6.4.4**; ejemplos: Tierra $e\approx.017$, cometa Halley $e\approx.967$ |
| Ejercicios 6.4 | 36-37 | 302-303 | 1: ecuación en $(X,Y)$, área de la elipse $\pi\rho^2/(1-e^2)^{3/2}$ y periodo $T=\dfrac{2\pi\rho^2}{h(1-e^2)^{3/2}}$ (tercera ley de Kepler); 2-3 condiciones iniciales y satélite; 4-5 hallar $f$ para una órbita dada; 6 $f=-mk/r^3$. Página 304 en blanco |

---

## Búsqueda rápida por concepto

Formato: alias, impresa (PDF). Para citar en `data-pag` va el número entre paréntesis.

**Qué es una ecuación diferencial (orden, solución, condición inicial)**
- Definición, orden, EDO y EDP: `trench1` p.7 (PDF 7); formas $y^{(n)}=f(\dots)$ y ejemplos de orden: p.8 (8).
- Solución (en un intervalo abierto), curva solución y curva integral: p.8 (8); Ejemplos 1.2.1 y 1.2.2: p.9 (9); Ejemplo 1.2.3 (verificar con constantes): p.9-10 (9-10).
- Todas las soluciones por integración y "$n$ constantes arbitrarias": Ejemplo 1.2.4, p.10-11 (10-11).
- Problema de valor inicial, condición inicial, intervalo de validez: p.11-12 (11-12); Ejemplos 1.2.5 a 1.2.7: p.11-13 (11-13); caída libre 1.2.8: p.13 (13).
- Solución general de una lineal de primer orden: `trench2` p.30-31 (PDF 2-3); Theorem 2.1.1: p.33 (5).
- Modelos que dan lugar a ecuaciones (crecimiento, enfriamiento, glucosa, epidemias, Newton): `trench1` p.2-7 (2-7).

**Campos de direcciones**
- Idea (pendiente $f(x_0,y_0)$, malla): `trench1` p.16 (16); Figures 1.3.1 a 1.3.4: p.17-18 (17-18).
- Ecuaciones con $f$ no definida y forma $y'=A/B$, sistema $x'=B$, $y'=A$: p.18-19 (18-19); Figures 1.3.5 a 1.3.7: p.19-20 (19-20).
- Campos usados en ejemplos posteriores (se dibujan junto con la solución): `trench2` p.36, 48, 49, 50, 51 (Figures 2.1.3, 2.2.2 a 2.2.4).
- Ejercicios para trazar curvas integrales en campos dados: `trench1` p.20-26 (20-26); para construirlos con software: p.27 (27).
- Plano de fase de las autónomas (campo de direcciones de $dv/dy$): `trench4` p.173-175 (45-47).

**Ecuaciones separables**
- Definición y método $H(y)=G(x)+c$: `trench2` p.45 (17); Ejemplos 2.2.1 y 2.2.2: p.45-46 (17-18).
- Soluciones implícitas y Theorem 2.2.1: p.47-48 (19-20); Ejemplo 2.2.3: p.48 (20).
- Soluciones constantes que se pierden al dividir (Ejemplos 2.2.4 y 2.2.5): p.48-51 (20-23).
- Intervalo de validez y diferencias con lo lineal: p.51-52 (23-24); Ejemplo 2.2.6: p.52 (24).
- Separación de variables en las homogéneas lineales (Ejemplos 2.1.3 y 2.1.4): p.31-33 (3-5).
- Como paso en la lineal homogénea y en Bernoulli: `trench2` p.34 (observación), p.63-64.

**Ecuaciones lineales de primer orden y factor integrante**
- Definición lineal, homogénea y no homogénea: `trench2` p.30 (2).
- Método (variación de parámetros, no factor integrante): $y=uy_1$ con $u'=f/y_1$: p.35 (7); resumen de cinco pasos: p.38 (10); Theorem 2.1.2 con fórmula general e IVP: p.40 (12).
- Ejemplos: 2.1.5 p.35-36 (7-8); 2.1.6 p.36-37 (8-9); 2.1.7 con integral no elemental: p.38-39 (10-11).
- **Factor integrante**: solo para exactas, $\mu(x)=e^{\int p}$ con $p=(M_y-N_x)/N$: `trench2` Theorem 2.6.1, p.84-85 (56-57); Ejemplo 2.6.1 con $\mu=e^{-x^2}$: p.85 (57). No se escribe $(\mu y)'=\mu f$ para la lineal.
- Aplicaciones de la lineal con números: mezclas (`trench4` p.143-147), crecimiento con producción constante $Q'=a-kQ$ (p.134-135), enfriamiento (p.140-141), resistencia lineal (p.152-153).

**Crecimiento y decaimiento exponencial**
- Modelo $Q'=aQ$ y solución: `trench4` p.130 (2); Malthus: `trench1` p.2-3 (2-3).
- Decaimiento radiactivo, constante de decaimiento y vida media: `trench4` p.130-131 (2-3); Ejemplo 4.1.1: p.131-132 (3-4).
- Interés continuo: p.132-134 (4-6); Table 4.1.7: p.133 (5).
- Crecimiento con producción constante y valor estacionario: p.134-135 (6-7).
- Datación por carbono: p.135-136 (7-8); plan de ahorro (aproximación continua frente al exacto): p.136-137 (8-9).
- Ejercicios: p.138-140 (10-12); en los de modelos no exponenciales, el 20 ($p'=p/2-p^2/8$) es de tipo logístico (p.139).

**Ley de enfriamiento**
- Planteamiento y primera mención: `trench1` p.3-5 (3-5).
- Solución $T=T_m+(T_0-T_m)e^{-kt}$ y sus límites: `trench4` p.140-141 (12-13).
- Ejemplos 4.2.1 y 4.2.2 (con la hora del suceso): p.141-143 (13-15); **Figures 4.2.1 y 4.2.2**.
- Medio cuya temperatura cambia (Ejercicio 17): p.140 (12) y p.149 (21).
- Unificación con la glucosa como $y'=-ay+b$: `trench1` p.27 (27).

**Modelo logístico**
- Ecuación, solución explícita y límite $1/\alpha$: `trench1` p.3-4 (3-4); **Figure 1.1.1**: p.4 (4).
- Deducción: **solo en ejercicios**: `trench2` Ejercicio 2.2.27 ($y'=ay-by^2$) y 2.2.28 (logística), p.53 (25); como Bernoulli con $\alpha(t)$: Ejercicio 2.4.14, p.69 (41).
- Epidemia (misma forma, $I'=rI(S-I)$): `trench1` p.6 (6); `trench2` Ejercicio 2.2.29, p.53 (25).
- Unificación con la epidemia como $y'=ay-by^2$: `trench1` Ejercicio 24, p.27-28 (27-28).
- Variantes con medicación y bifurcación $q_0=a^2/4b$: `trench2` Ejercicios 2.2.30 a 2.2.33, p.53-54 (25-26).
- Soluciones constantes de la separable (útil para $P=0$ y $P=1/\alpha$): Ejemplos 2.2.4 y 2.2.5, p.48-51 (20-23).
- Existencia y unicidad (para que las curvas no se crucen): Theorem 2.3.1, p.56 (28).

**Método de Euler (y su error)**
- Planteamiento y notación $x_i,y_i,e_i$: `trench3` p.96 (2); fórmula $y_{i+1}=y_i+hf(x_i,y_i)$: p.96-97 (2-3); Ejemplo 3.1.1 a mano: p.97 (3).
- Error al reducir $h$ (tablas con exacta): Ejemplo 3.1.2, Tables 3.1.1 y 3.1.2: p.97-98 (3-4); no lineal: Tables 3.1.3 y 3.1.4: p.98-99 (4-5).
- Error local $O(h^2)$ por Taylor: p.100 (6); error global $O(h)$ con $K=M(e^{R(b-x_0)}-1)/(2R)$: p.101-102 (7-8).
- Cuando Euler es malo (derivada segunda grande) y Euler semilineal: Ejemplo 3.1.4 con Tables 3.1.5 y 3.1.6: p.102-104 (8-10); criterio práctico: p.104 (10).
- Euler como regla del rectángulo izquierdo: Ejercicio 3.1.23, p.108 (14).
- Euler en la comparación de las tres fórmulas: Table 3.2.1 (aproximar $e$ con $y'=y$): p.109-110 (15-16).

**Euler mejorado y Runge-Kutta**
- Euler mejorado: fórmula y $k_1,k_2$: `trench3` p.110 (16); orden local $O(h^3)$, global $O(h^2)$: p.111 (17); Ejemplo 3.2.1: p.111 (17); Tables 3.2.2 a 3.2.5: p.111-113 (17-19).
- Familia con $\sigma,\rho,\theta$, Heun y punto medio: p.114-116 (20-22).
- Runge-Kutta de cuarto orden: fórmulas y órdenes: p.119 (25); Ejemplo 3.3.1: p.120 (26); Tables 3.3.1 a 3.3.4: p.120-122 (26-28).
- Comparación "mismas evaluaciones de $f$": Table 3.2.1, p.109-110 (15-16); un paso de RK frente a uno del mejorado: p.121 (27).
- Costo y qué se compara: p.109-110 (15-16); regla del trapecio (Ejercicio 3.2.32, p.119) y de Simpson (Ejercicio 3.3.28, p.127-128).
- Resolver hacia la izquierda: p.122-124 (28-30).

**Ecuación lineal homogénea de segundo orden con coeficientes constantes**
- Teoría de la homogénea (existencia, wronskiano, independencia): `trench5` p.194-203 (2-11); Theorem 5.1.6: p.202-203 (10-11).
- Ecuación característica y los tres casos: p.210-211 (18-19).
- Raíces reales distintas: Ejemplo 5.2.1, p.211-212 (19-20); **Figure 5.2.1**.
- Raíz repetida $y=e^{r_1x}(c_1+c_2x)$: Ejemplo 5.2.2, p.212-213 (20-21); caso general: p.214 (22).
- Raíces complejas $e^{\lambda x}(c_1\cos\omega x+c_2\sin\omega x)$: Ejemplo 5.2.3, p.214-216 (22-24); caso general: p.215-217 (23-25).
- Resumen en un enunciado: Theorem 5.2.1, p.217 (25).
- Identidad de Euler (solo en ejercicio): Ejercicio 5.2.34, p.220-221 (28-29).
- Lectura física de cada caso: sobreamortiguado, crítico, subamortiguado: `trench6` p.279-281 (13-15).

**Movimiento armónico simple**
- Primera aparición (autónoma $my''=-ky$, elipses en el plano de fase): `trench4` Ejemplo 4.4.1, p.165-167 (37-39).
- Ecuación de movimiento: `trench6` p.268-269 (2-3); libre sin amortiguar $y''+\omega_0^2y=0$, Ejemplo 6.1.1: p.269-270 (3-4).
- Forma amplitud-fase $R\cos(\omega_0t-\varphi)$, periodo, frecuencia: p.270-272 (4-6); Ejemplos 6.1.2 y 6.1.3 (con $R$, $\varphi$, $T$): p.272-273 (6-7).
- Solución $y''+\omega^2y=0$ en general: `trench5` Ejemplo 5.1.2, p.195-196 (3-4).
- Analogía con el circuito (sin resistencia): `trench6` p.293 (27).

**Oscilaciones amortiguadas**
- Ecuación $my''+cy'+ky=0$ y raíces: `trench6` p.279 (13); subamortiguado (amplitud variable, cuasi-periodo): p.279-280 (13-14); sobre y críticamente amortiguado: p.281 (15).
- Ejemplos numéricos con los tres regímenes: 6.2.1 (crítico), 6.2.2 (sub), 6.2.3 (sobre): p.281-284 (15-18).
- Vista de plano de fase (espirales): `trench4` p.172-175 (44-47).
- Amortiguamiento en el circuito: `trench6` p.292-294 (26-28).
- Péndulo amortiguado: `trench4` Ejemplo 4.4.4, p.174-175 (46-47).

**Resonancia**
- Definición (sin amortiguar, amplitud creciente): `trench6` Ejemplo 6.1.5, p.275-277 (9-11); **Figure 6.1.7**.
- Batimientos ($\omega\ne\omega_0$ cercana): Ejemplo 6.1.4, p.274-276 (8-10); **Figure 6.1.6**.
- Forma de la solución particular en el caso resonante (factor $x$ o $t$): `trench5` Theorem 5.5.1, p.238-239 (46-47); Ejemplo 5.5.2, p.239-240 (47-48).
- Con amortiguamiento: no hay resonancia en sentido estricto; frecuencia que maximiza la amplitud: `trench6` Theorem 6.2.1, p.286-287 (20-21); amplitud finita (6.2.18): p.286 (20).
- En circuitos: p.294-295 (28-29) y ejercicios 12-17, p.295-296 (29-30).

**Otros temas que suelen hacer falta**
- Existencia y unicidad no lineal, ejemplo de no unicidad: `trench2` Theorem 2.3.1, p.56 (28); Ejemplos 2.3.5 a 2.3.8: p.58-60 (30-32).
- Bernoulli y homogéneas no lineales: p.63-68 (35-40).
- Exactas y factor integrante: p.73-91 (45-63).
- Mezclas (sal en un tanque): `trench4` p.143-147 (15-19).
- Caída con resistencia y velocidad terminal: p.152-157 (24-29).
- Superposición, solución particular, coeficientes indeterminados: `trench5` p.221-243 (29-51); reducción de orden: p.248-252 (56-60); variación de parámetros: p.255-261 (63-69).
- Circuito RLC y analogía eléctrico-mecánica: `trench6` p.290-295 (24-29).

---

## Erratas e inconsistencias (verificadas)

Cada una se comprobó en el texto o en la página renderizada; las cuentas se recalcularon con python3.

**Capítulo 1**
- **p.3 (`trench1` PDF 3)**: dice que la logística "se resuelve en la Sección 1.2" y a continuación remite al Ejercicio 2.2.28; la Sección 1.2 son los conceptos básicos. Se resuelve en 2.2 (p.53).
- **Índice del libro** (`00 - Portada y Preliminares.pdf`): "1.2 First Order Equations, p.5" cuando la sección se titula "Basic Concepts" y empieza en la p.7; "2.6 Integrating Factors, p.82" cuando empieza en la p.83. (Los encabezados de la 2.6 también cambian: p.83, 85, 87, 89, 91 dicen "Section 2.6 Exact Equations" y las pares "Chapter 2 Integrating Factors".)

**Capítulo 2**
- **p.34 (`trench2` PDF 6)**, demostración del Theorem 2.1.1: "y has zeros on $(a,b)$ $(a,b)$, so we can rewrite..." debe ser "$y$ has **no** zeros on $(a,b)$" (confirmado en la página renderizada).
- **p.35 (PDF 7)**: "In the proof of Theorem 2.2.1 we saw that $y_1$ has no zeros" debe ser Theorem **2.1.1** (el 2.2.1 es el de las soluciones implícitas).
- **p.43 (PDF 15)**, Ejercicio 2.1.44(e): dice "no contradice el Theorem 2.1.1(b)"; el 2.1.1 no tiene parte (b), debe ser el **2.1.2(b)**.
- **p.47 (PDF 19)**, Theorem 2.2.1: el problema de valor inicial (2.2.12) aparece como "$y(x_0)=x_0$", debe ser $y(x_0)=y_0$; y la frase "g ... is continuous on (a,b) and h = h(y) are continuous" tiene el verbo mal.
- **p.48 (PDF 20)**, Ejemplo 2.2.3(b): "más de una función diferenciable satisface (2.2.13) cerca de $x=1$, ... solo una satisface la condición inicial $y(1)=2$"; el problema es $y(2)=1$, así que debe decir "cerca de $x=2$" y "$y(2)=1$" (se recalculó que $1+1=4+2+c$ da $c=-4$, consistente con $y(2)=1$).
- **p.59 (PDF 31)**, Figure 2.3.2: el pie dice "$y=0$ y $y=x^{1/2}$" cuando la segunda solución del texto es $y=x^{10/3}$. Además la rama izquierda está dibujada **por debajo** del eje $x$, pero $y=(x^2)^{5/3}$ es no negativa: con $y'=\tfrac{10}3xy^{2/5}$ y $x<0$ la rama negativa no cumple la ecuación (el lado izquierdo sería positivo y el derecho negativo), la correcta queda por encima del eje.
- **p.60 (PDF 32)**, Ejemplo 2.3.7: remite al "Exercise 2.2.15" para las infinitas soluciones; es el **Exercise 2.3.15** (p.61).
- **p.67 (PDF 39)**: "(2.4.13) is a solution of the initial value problem (2.4.10) for any choice of $c$" debe decir "of (2.4.9)" (con una constante arbitraria no es la solución de un IVP).
- **p.85 (PDF 57)**, demostración del Theorem 2.6.1(b): queda una referencia rota "eqrefeq:2.6.8" (resto de LaTeX).
- **p.86 (PDF 58)**, Ejemplo 2.6.2: en el cociente $(M_y-N_x)/N$ el denominador está escrito $3x^2y^2+x^2y^2+1$; debe ser $3x^2y^2+x^2y^3+1$ (consistente con (2.6.18)).
- (Comprobados sin error: las soluciones de los Ejemplos 2.1.5 a 2.1.7, 2.2.2 a 2.2.6, 2.3.5 a 2.3.8, 2.4.1 a 2.4.3, 2.5.3, 2.6.1 a 2.6.4.)

**Capítulo 3**
- **p.98 y p.99 (`trench3` PDF 4-5)**, Tables 3.1.2 y 3.1.4: los errores están **truncados, no redondeados**. Por ejemplo en $x=1$: $0.169169104-0.139778910=0.029390$, que se escribe .0293 (redondeado sería .0294); con $h=.05$: 0.014453 se escribe .0144 (redondeado, .0145); con $h=.025$: 0.007166 se escribe .0071 (redondeado, .0072). La conclusión "el error se reduce a la mitad" no cambia.
- **p.106 (PDF 12)**, Table 3.1.10: tiene una fila de encabezado duplicada ("$h=.0125$"); la cuarta columna es la de la solución exacta (0.701162906, ...), no una corrida con $h=.0125$ (recalculado: con $h=.0125$ sale 0.701013037). Los valores de las tres primeras columnas coinciden con lo recalculado.
- **p.110 (PDF 16)**: "In Section 3.1 we'll study the Runge-Kutta method" debe ser Section **3.3**.
- **p.117 (PDF 23)**, Ejercicio 3.2.9: "In Example 3.2.2 it was shown that $y^5+y=\dots$"; es el Ejemplo **2.2.3**. Mismo ejercicio 3.2.10: "1.0, 1.14, 1.2, ..." debe ser 1.1.
- **p.125 (PDF 31)**, Ejercicio 3.3.8: cita "Example 2.2.3" para la solución $\tfrac{x(1+x^2/3)}{1-x^2/3}$; es el Ejemplo **2.4.3** (como dicen los ejercicios 3.1.8 y 3.2.8).
- **p.121 (PDF 27)**, Ejemplo 3.3.3: la frase "We applied the improved Euler method to this problem in Example 3." quedó truncada (debe ser 3.2.3).
- **p.119 (PDF 25)**, encabezado de las tablas 3.2.2, 3.3.1 y 3.3.2: las etiquetas "Euler / Improved Euler / Exact" y "Improved Euler / Runge-Kutta / Exact" salen debajo de la tabla y no sobre las columnas.
- (Recalculados sin discrepancia: Ejemplos 3.1.1, 3.2.1, 3.3.1; las Tables 3.1.1, 3.1.3, 3.1.5 a 3.1.9, 3.2.1 a 3.2.5, 3.3.1 a 3.3.4, 3.3.6; la cota $y''(2)>2952$ ($6\cdot9e^4+4=2952.3$).)

**Capítulo 4**
- **p.130 (`trench4` PDF 2)**: "From Example 3, the general solution of (4.1.1)": es el Ejemplo **2.1.3**.
- **p.133 (PDF 5)**, Table 4.1.7: la última fila dice $n=364$; debe ser **365** (composición diaria). Con 364 o 365 el resultado es 134.98. Además la tabla se numera 4.1.7 sin haber una 4.1.1.
- **p.143 (PDF 15)**: "11:02:55" para $-2.09$ min: 2.0933 min son 2 min 5.6 s, o sea 11:02:54.4 (el texto trunca a 5 s).
- **p.147 (PDF 19)**, Ejemplo 4.2.4: "$Q=\dfrac{u}{t+200}=\dfrac{t+100}2-\dfrac{4000}{t+100}$" debe ser $Q=\dfrac u{t+100}$ (confirmado en la página renderizada; es lo que se usa antes, $u=(t+100)Q$).
- **p.136 (PDF 8)**: usa 5570 años como vida media del C-14 (el valor moderno es 5730 años); no es un error de cuenta, pero conviene decirlo si se usa el ejemplo.
- **p.173 y p.174 (PDF 45-46)**: la "Figure 4.4.14" se cita dos veces con sentidos distintos (elipse punteada del caso sin amortiguamiento, y campo de direcciones para $c>c_1$); la primera cita probablemente es la Figure 4.4.12.
- **p.177 (PDF 49)**, Ejercicio 4.4.19: "$\mu=.5,\ 1.1.5,\ 2$" debe ser .5, 1, 1.5, 2. **p.176 (PDF 48)**: los Ejercicios 13 y 15 son idénticos ($y''+cy'+y^3=0$).
- (Recalculados sin discrepancia: 4.1.1, 4.1.2, 4.1.3, 4.1.5 (6971 y 6597), 4.1.6 (tabla de diez años), 4.2.1 ($T(8)=106.7$ °C), 4.2.2 ($-2.093$ min), 4.2.3, 4.3.2, 4.3.3, 4.3.4 ($5\pi/14=1.122$), (4.4.23) con el factor $1/3$, que sí está.)

**Capítulo 5**
- **p.193 (`trench5` PDF 1)**: "SECTION 5.6 deals with the method traditionally called variation of parameters" repite el 5.6; es la **5.7**.
- **p.203 (PDF 11)**, Theorem 5.1.7: "Under the assumptions of Theorem 5.1.7" es circular; debe ser 5.1.6.
- **p.231 (PDF 39)**, Ejemplo 5.4.3: dice que $y_p=x^2e^{4x}$ es solución particular "of (5.4.4)"; es de **(5.4.6)**.
- **p.232 (PDF 40)**, Ejemplo 5.4.4: "As in Example 2" debe ser Ejemplo **5.3.2**.
- **p.248-250 (PDF 56-58)**: "solve it by variation of parameters as in Section 1.2" (dos veces) debe ser Sección **2.1**.
- **p.212 (PDF 20)**: "Exercises 5.1.9, 5.1.12, and 33" le falta el "5.2." al 33. **p.211 a p.217**: "5.1.6 implies" sin la palabra Theorem.
- **p.213 y p.214**: en $y''-2r_1y'+r_1^2y$ el texto del desarrollo pierde un paréntesis ("$e^{rx}$" por $e^{r_1x}$); no cambia el resultado.
- (Recalculados sin discrepancia: Ejemplos 5.1.3, 5.2.1 a 5.2.3, 5.3.2, 5.3.4, 5.4.4 a 5.4.6, 5.5.1 a 5.5.5, 5.6.2, 5.7.1 a 5.7.4.)

**Capítulo 6**
- **p.267 (`trench6` PDF 1)**: el resumen del capítulo dice "SECTIONS 6.1 AND 6.2 is about spring-mass systems. SECTION 6.2 is about RLC circuits. SECTION 6.3 is about motion under a central force"; los circuitos son la **6.3** y la fuerza central la **6.4**.
- **p.282 (PDF 16)**, Ejemplo 6.2.1(b): "$y''+16y+64y=0$" (falta la prima en el segundo término) y la ecuación característica sale "$r^2+16r+64y=(r+8)^2$" (el $y$ sobra).
- **p.292 (PDF 26)**: "by simply changing notation, according to Table 6.3.8" debe ser la **6.3.9**; **p.294**: "(according to Table 2)" (sin ese número). En la tabla 6.3.9: "cpring constant" por "spring constant".
- **p.293 (PDF 27)**, Ejemplo 6.3.1: el enunciado da $C=10^{-5}$ F, pero la ecuación del texto es $\tfrac15Q''+40Q'+10000Q=0$, que corresponde a $1/C=10^4$, es decir $C=10^{-4}$ F. Con $C=10^{-5}$ saldría $Q''+200Q'+500000Q=0$. Las raíces $-100\pm200i$ y toda la solución del texto son consistentes con $C=10^{-4}$ (recalculadas).
- (Recalculados sin discrepancia: Ejemplos 6.1.1 a 6.1.5, 6.2.1 a 6.2.3, las fórmulas $\omega_{max}$ y $R_{max}$ del Theorem 6.2.1 (comprobado numéricamente con $m=2$, $c=4$, $k=128$: máximo en $\omega=7.874$, $R=0.03150$), la solución del Ejemplo 6.3.1, los datos de la órbita de Halley, $e=(r_{max}-r_{min})/(r_{max}+r_{min})=.967$.)

## No aparece (y uno esperaría)

- **Factor integrante $\mu(x)=e^{\int p(x)\,dx}$ para la lineal de primer orden**: el libro nunca multiplica la ecuación por $\mu$ para obtener $(\mu y)'=\mu f$; usa variación de parámetros ($y=uy_1$). La palabra "integrating factor" solo es para ecuaciones exactas (2.6). Para la biblioteca: conviene decir en la página que $y_1=e^{-P(x)}$ de Trench es el inverso del factor integrante.
- **Modelo logístico con sección propia**: solo aparece en 1.1 (p.3-4) y en ejercicios (2.2.27, 2.2.28, 2.4.14, 2.2.30-33, 4.1.20); no hay un análisis de equilibrios y estabilidad para primer orden ($P=0$ inestable, $P=1/\alpha$ estable), ni **línea de fase**; la estabilidad solo se trata para segundo orden autónomas (4.4). Tampoco hay la fórmula del punto de inflexión ($P=1/2\alpha$).
- **Campos de direcciones a mano**: no hay isoclinas ni consejos para trazar; las figuras vienen dibujadas y los ejercicios 1.3.12 a 22 piden software. No hay código en ningún lenguaje en el libro.
- **Tiempo de duplicación** como fórmula: solo en los Ejercicios 4.1.8-9 (sin respuesta en el texto).
- **Euler**: no hay error global exacto para un caso lineal sencillo ($y'=y$, $y_n=(1+h)^n$) salvo la Table 3.2.1; no hay Euler implícito, estabilidad ni sistemas rígidos; el orden $O(h^2)$ del mejorado y $O(h^4)$ de RK se afirman sin demostrar; sin tamaño de paso adaptativo ni RK de orden mixto; las demostraciones de orden global solo se dan para Euler. No hay comparación de costo-error en gráficas log-log.
- **Ecuación lineal homogénea de segundo orden**: la identidad de Euler solo está en el Ejercicio 5.2.34 (p.220-221), no en el texto; no hay el caso de $\lambda$ y $\omega$ en tabla de resumen más allá del Theorem 5.2.1; la **ecuación de Cauchy-Euler** no está en el capítulo 5 (es la sección 7.4).
- **Movimiento armónico**: no hay la relación periodo-frecuencia en Hz; no se da la aproximación $\sin y\approx y$ del péndulo (se estudia el no lineal completo, 4.4.2); no hay discusión de energía en el caso lineal más allá de $mv^2+ky^2=\rho$ (4.4.10).
- **Amortiguamiento**: no se define el **factor de amortiguamiento** $\zeta=c/(2\sqrt{mk})$ ni el factor de calidad $Q$; los tres regímenes se dan por $c$ frente a $\sqrt{4mk}$. No hay **decremento logarítmico**.
- **Resonancia**: la palabra solo se aplica al caso sin amortiguar (p.277); el pico de amplitud con amortiguamiento (Theorem 6.2.1) no se llama "resonancia" y no hay curva de respuesta en frecuencia en el texto (solo ejercicios L 6.3.13-17); tampoco hay Q ni ancho de banda.
- **Forzado con otras formas** (pulso, escalón, impulso, periódico general): están en capítulos 8 y 12 (no mapeados).
- **Sistemas**: el método numérico para sistemas y el plano de fase de los lineales se remiten a las secciones 10.1 y 10.4 (no mapeadas).
- **Respuestas de ejercicios**: están en la Unidad 14 (no mapeada) y no hay soluciones paso a paso en estas unidades.
