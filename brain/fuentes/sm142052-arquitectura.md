# Mapa de citas: SM142052 Arquitectura de computadores y redes, UD1 a UD3 (máster IA UAX)

Carpeta: `.../SEMESTRE 1 /SM142052 - Arquitectura de computadores y redes/` ("SEMESTRE 1 " lleva un espacio al final). Subcarpetas:
`UD1. Arquitectura de computadores/`, `UD2. CPU, memoria y organizacion/`, `UD3. E-S y perifericos/` y `00 Bienvenida - guia y cronograma/`.
Este mapa cubre las **tres unidades completas** (el mapa parcial `sm142052-ud1.md`, solo representación numérica, sigue vigente y no se contradice: sus filas del epígrafe 5 se resumen aquí y los detalles finos de bases y complemento a dos están allí).
Las unidades 4 a 6 (redes, protocolos, seguridad) y el proyecto final no se mapean.

Todos los PDF tienen capa de texto. Al extraer texto se pierde el signo "+" de las fórmulas y del código (sale "a  b", "1/((1-p)  p/n)"): las páginas renderizadas muestran el símbolo correcto. La ligadura "fi" y los espacios cortan palabras en las diapositivas. Se leyeron renderizadas las figuras (arq1 p.8, p.11, p.15; arq3 p.9 y p.11; arq1diapo p.9, p.16, p.45; arq2diapo p.3; arq3diapo p.19; enunciado p.2).

## Ids y relación entre página del PDF y página impresa

| id | archivo | páginas PDF | relación (verificada) |
|---|---|---|---|
| `arq1` | `UD1.../MUIA_SM142052_UD1_Contenido_teórico.pdf` | 29 | **PDF = impresa + 3**: PDF 4 = "1", PDF 13 = "10", PDF 17 = "14", PDF 22 = "19", PDF 28 = "25". p.1 portada, p.2-3 índice, p.29 contraportada (sin número) |
| `arq1diapo` | `UD1.../MUIA_SM142052_UD1_Presentación.pdf` | 51 | **PDF = impresa** (diapositiva 3 = "3", 24 = "24", 37 = "37", 49 = "49"). Sin número: portada (1), índice (2) y las portadas de sección (5, 12, 19, 26, 30, 41), 51 "¡GRACIAS!" |
| `arq2` | `UD2.../MUIA_SM142052_UD2_Contenido_teorico.pdf` | 25 | **PDF = impresa + 3**: PDF 4 = "1", PDF 10 = "7", PDF 17 = "14", PDF 22 = "19", PDF 24 = "21". p.1 portada, p.2-3 índice, p.25 contraportada |
| `arq2diapo` | `UD2.../MUIA_SM142052_UD2_Presentacion.pdf` | 30 | **PDF = impresa** (3 = "3", 12 = "12", 22 = "22", 30 = "30"). Portada (1) e índice (2) sin número |
| `arq2ej` | `UD2.../MUIA_SM142052_UD2_Ejercicio_con_solucion.pdf` | 12 | **PDF = impresa + 1** desde la segunda página: PDF 3 = "2", PDF 6 = "5", PDF 11 = "10". La p.2 (inicio del enunciado) no lleva número; p.1 portada, p.12 contraportada |
| `arq2enun` (no estaba en tu lista) | `UD1.../MUIA_SM142052_UD2_Ejercicio.pdf` (enunciado suelto, dentro de la carpeta de la UD1) | 11 | **PDF = impresa + 2**: PDF 3 = "1", PDF 6 = "4", PDF 10 = "8". Índice en p.2; p.11 contraportada |
| `arq3` | `UD3.../MUIA_SM142052_UD3_Contenido_teórico.pdf` | 25 | **PDF = impresa + 3**: PDF 4 = "1", PDF 12 = "9", PDF 20 = "17", PDF 24 = "21". p.1 portada, p.2-3 índice, p.25 contraportada |
| `arq3diapo` | `UD3.../MUIA_SM142052_UD3_Presentación.pdf` | 49 | **PDF = impresa** (3 = "3", 19 = "19", 31 = "31", 46 = "46"). Sin número: portada (1), índice (2) y las portadas de sección (5, 11, 16, 22, 27, 33, 40), 49 "¡GRACIAS!" |
| (guía) | `00 Bienvenida.../...Guia de aprendizaje...pdf` | 10 | impresa = PDF - 1 (PDF 2 = "1", PDF 8 = "7"); la portada y la contraportada no llevan número |
| (cronograma) | `00 Bienvenida.../MUIA_SM142052_Cronograma.pdf` | 2 | sin numeración |

Los índices de `arq1`, `arq2` y `arq3` dan páginas **impresas**; se comprobaron todas las entradas contra las páginas reales y coinciden (salvo lo anotado en erratas de `arq3`). `arq2enun` solo trae, sobre `arq2ej`, el índice, los Objetivos y las Instrucciones de entrega; las tablas y las tareas son idénticas.

Notación del material: el código está en Python (`def speedup(p, n)`, `roofline`, `decidir_arquitectura`); no hay código en R en ninguna de las tres unidades.

## arq1: UD1 Contenido teórico (PDF = impresa + 3)

| Tema | pág. PDF | impresa | Qué hay exactamente |
|---|---|---|---|
| Índice | 2-3 | | 6 epígrafes con subapartados; páginas impresas coinciden |
| Introducción | 4-5 | 1-2 | por qué importa el hardware en IA (entrenar en horas o semanas, la memoria condiciona el tamaño del modelo); cuadro "Importante": CPU y jerarquía en UD2, E/S en UD3 |
| Objetivos | 5 | 2 | objetivo general y 9 específicos: definir arquitectura frente a organización, hitos y Ley de Moore, Von Neumann, Harvard, Flynn, componentes, rendimiento, binario, CPU/GPU/TPU |
| Definición de arquitectura | 6 | 3 | caja "Definición": diseño conceptual y estructural; "un computador es un sistema secuencial síncrono"; 1 lógico = 5 V, 0 lógico cerca de 0 V ("dependen de la tecnología"). No menciona aquí ISA ni organización (ver erratas) |
| Perspectiva histórica | 6-7 | 3-4 | Babbage (máquina analítica), Ada Lovelace (primer programa, números de Bernoulli), Turing 1936 (máquina universal), Boole y Shannon, ENIAC 1945 (programar = recablear), Von Neumann 1945 (First Draft of a Report on the EDVAC, programa almacenado) |
| Cuatro generaciones | 7 | 4 | válvulas (40-50), transistores (inventados en 1947, Bell), circuitos integrados (60-70), microprocesador (desde 70, Intel 4004, 1971); patrón común: miniaturización, más cálculo, menos consumo y coste |
| Figura 1 | 8 | 5 | infografía "Línea temporal: de las máquinas de cálculo al microprocesador" (Babbage, Turing, Shannon, ENIAC, Von Neumann, generaciones, 4004); sin escala numérica |
| Ley de Moore y sus límites | 8-9 | 5-6 | Moore 1965: transistores al menor coste "se duplicaba aproximadamente cada dos años"; "no es una ley física"; ejemplo (miles de transistores en los 70 frente a decenas de miles de millones hoy, sin cifras exactas); fin del escalado de Dennard; justificación de GPU y TPU. Sin gráfica ni fórmula $N=N_0\,2^{t/2}$ |
| Modelo de Von Neumann: cuatro elementos | 9 | 6 | CPU, memoria principal (instrucciones y datos en un mismo espacio direccionable), E/S, bus del sistema; **Tabla 1** (elementos y función) |
| Ciclo de instrucción (3 fases) | 9 | 6 | búsqueda (fetch, indicada por el contador de programa), decodificación, ejecución; se repite de manera continua; "se retomará en UD2" |
| Cuello de botella de Von Neumann y Harvard | 10-11 | 7-8 | CPU y memoria comparten un bus de datos único, no se leen instrucciones y datos a la vez; ejemplo del procesamiento de una matriz; Harvard separa memorias y buses; "pocos computadores son estrictamente Harvard", pura en microcontroladores; Harvard modificada (cachés I y D separadas) |
| Ejemplo práctico: resultado = a + b | 10-11 | 7-8 | 4 pasos: leer la instrucción, leer a, leer b, escribir el resultado. Von Neumann: los cuatro por el mismo bus, en secuencia; Harvard: mientras se busca la instrucción se accede a a y b por otro bus |
| Figura 2 | 11 | 8 | diagrama "Arquitectura Harvard modificada en ordenadores modernos": memoria principal unificada (instrucciones y datos, direcciones 0x0000...), bus de memoria, procesador con I-Cache, D-Cache, unidad de control, unidad de selección de instrucciones (Fetch), unidad de ejecución (ALU), unidad de acceso a datos (Load/Store); flujos de instrucciones (azul) y de datos (verde) |
| Taxonomía de Flynn | 12 | 9 | Flynn 1972; **Tabla 2**: SISD (CPU de un núcleo), SIMD (GPU), MISD (tolerancia a fallos, poco habitual), MIMD (multinúcleo, distribuidos) |
| Componentes: introducción | 12 | 9 | magnitudes orientativas; detalle en UD2 y UD3 |
| 3.1 La CPU | 13 | 10 | unidad de control, ALU y registros; multinúcleo aproxima MIMD; distinto del paralelismo masivo de la GPU |
| 3.2 Memoria y jerarquía; Tabla 3 | 13-14 | 10-11 | **Tabla 3**: registros (pocos bytes, menos de 1 ns), caché (KB a decenas de MB, pocos ns), RAM (GB, decenas de ns, volátil), SSD/HDD (cientos de GB a TB, microsegundos a milisegundos, no volátil); al descender suben capacidad y tiempo de acceso; el tamaño del modelo en GPU depende de la memoria de ese nivel |
| 3.3 Buses | 14 | 11 | bus de datos, de direcciones y de control; PCIe conecta la GPU y su ancho de banda limita la transferencia de datos durante el entrenamiento |
| 3.4 Dispositivos de E/S | 14 | 11 | disparidad de velocidad CPU y periféricos, "se resuelve con DMA", detalle en UD3 |
| 3.5 Ejemplo integrador | 14-15 | 11-12 | recorrido de a + b: contador de programa localiza la instrucción por el bus de direcciones, viaja por el bus de datos, se decodifica, se piden a y b, ALU suma, resultado a memoria o registro; "se completa en una fracción de nanosegundo" (ver erratas) |
| Figura 3 | 15 | 12 | diagrama "Grandes bloques funcionales de un computador": CPU (unidad de control, ALU, registros, caché L1), memoria (registros, L1, L2, L3 opcional, RAM), E/S (entrada, salida, almacenamiento, red) y tres buses (direcciones, datos, control) |
| 4.1 Frecuencia de reloj e IPC | 16 | 13 | GHz = ciclos por segundo; IPC = instrucciones por ciclo; **ejemplo**: A 4 GHz con IPC 0,5 hace 2.000 millones de instrucciones por segundo, B 3 GHz con IPC 1 hace 3.000 millones; sin la fórmula escrita (frecuencia por IPC) |
| 4.2 Ley de Amdahl | 16-17 | 13-14 | Amdahl 1967: la mejora está limitada por la fracción secuencial; **ejemplo**: 90 % paralelo y 10 % secuencial, mejora máxima 10 veces; relación con GPU (carga de datos, coordinación). Sin la fórmula (está en `arq2ej`) |
| 5 Información en el computador (intro) | 17 | 14 | dos estados (0 V, 1 V como 5 V), hardware "robusto y económico" |
| 5.1 Sistemas de numeración (decimal, binario, hexadecimal) | 17-20 | 14-17 | ver `sm142052-ud1.md`: decimal con ejemplo 1234 (p.18), binario con tabla 1-16 y ejemplo 0110 1101 = 109 (p.19), hexadecimal con $2AF_{16}=687$ (p.20) y tabla de nibbles (p.20) |
| 5.1.4 Conversiones | 20-21 | 17-18 | hex y binario por bloques de 4 bits (ejemplo BCA, D6); decimal a binario por divisiones sucesivas (13 = 1101) |
| 5.2 Complemento a dos | 21-22 | 18-19 | misma ALU suma y resta; regla (invertir y sumar 1); bit más significativo como signo. Sin ejemplo (está en `arq1diapo` p.37) |
| 5.3 ASCII y Unicode | 22 | 19 | ASCII 7 bits, 128 caracteres; Unicode "varios cientos de miles" |
| 5.4 Unidades de información | 22 | 19 | bit, byte (8 bits), kilobyte a terabyte sin valores; relevancia para tamaño de modelos y datasets |
| 6 Nuevas arquitecturas: por qué la CPU no basta | 22-23 | 19-20 | entrenar una red = sumas y multiplicaciones de matrices, en gran parte simultáneas; carga "eminentemente SIMD" |
| GPU | 23 | 20 | diseñada para gráficos (píxeles independientes); CPU pocos núcleos potentes frente a GPU con miles de núcleos sencillos: "casi de manual" SIMD |
| TPU | 23 | 20 | ASIC de Google (Jouppi et al., 2017), todo el silicio para operaciones matriciales; entrenamiento e inferencia |
| Tabla 4 y caja "Importante" | 23-24 | 20-21 | comparación CPU (SISD/MIMD), GPU (SIMD), TPU (ASIC); ninguna sustituye a las demás, la CPU coordina y delega |
| Cierre del epígrafe 6 | 24 | 21 | Moore + Amdahl: ni el paralelismo masivo elimina la fracción secuencial |
| Conclusiones | 25 | 22 | 8 viñetas, una por epígrafe |
| Resumen y mapa conceptual | 26 | 23 | párrafo y tabla de 6 bloques |
| Glosario | 27 | 24 | Arquitectura (ISA), bit, byte, bus, complemento a dos, CPU, frecuencia, GPU, ISA, Ley de Amdahl, Ley de Moore, modelo de Von Neumann, Flynn, TPU |
| Bibliografía | 28 | 25 | Amdahl 1967, Ceruzzi 2003, Flynn 1972, Hennessy y Patterson 2019, Jouppi 2017, Moore 1965, Null y Lobur 2019, Patterson y Hennessy 2021, Stallings 2019, Von Neumann 1945; ninguna con página |

## arq1diapo: UD1 Presentación (PDF = impresa)

| Tema | pág. PDF | Qué hay exactamente |
|---|---|---|
| Índice y objetivos | 2-3 | los 6 bloques; 8 objetivos específicos en tarjetas (arquitectura frente a organización, hitos, Von Neumann, Harvard, Flynn, componentes, rendimiento, binario) |
| Introducción | 4 | todo sistema de IA corre sobre una máquina física; la memoria condiciona el tamaño del modelo |
| Qué es la arquitectura | 6 | definición; dos niveles: arquitectura (ISA, lo que ve quien programa) y organización (implementación física); computador "secuencial síncrono", 5 V y 0 V |
| Perspectiva histórica | 7-8 | cuatro hitos (Babbage y Lovelace, Turing y Shannon, ENIAC, Von Neumann) y cuatro generaciones |
| Ley de Moore | 9-10 | cada dos años; gráfica de barras sin ejes ni cifras ("crecimiento aproximadamente exponencial, 1971 a hoy"); límites y escalado de Dennard |
| Repaso: Moore | 11 | pregunta sobre qué estrategia sustituye a Moore; respuesta: organizar transistores de forma especializada (GPU, TPU) |
| Von Neumann: elementos y ciclo | 13-14 | cuatro elementos y un bus común; ciclo fetch, decode, execute |
| Cuello de botella | 15 | un único bus compartido entre CPU y memoria (instrucciones y datos); ejemplo de la matriz |
| Harvard modificada | 16 | memoria unificada por fuera, I-Cache, unidad de control y D-Cache por dentro, buses independientes; ejemplo RESULTADO = A + B (Von Neumann en secuencia, Harvard con acceso simultáneo) |
| Flynn | 17 | SISD, SIMD, MISD, MIMD en cuatro bloques con la descripción de SISD y MISD |
| Repaso: Harvard modificada | 18 | por qué "Von Neumann por fuera y Harvard por dentro" |
| CPU, memoria, buses, E/S | 20-23 | unidad de control, ALU, registros; multinúcleo MIMD; jerarquía con tiempos (registros < 1 ns, caché pocos ns, RAM decenas de ns, SSD/HDD µs a ms); tres buses y PCIe; E/S y DMA |
| Ejemplo integrador | 24 | 4 pasos de a + b (localizar, decodificar, leer datos, ejecutar); "fracción de nanosegundo" |
| Repaso: buses | 25 | qué tres buses intervienen en a + b y qué transporta cada uno |
| Frecuencia e IPC | 27 | A (4 GHz, IPC 0,5, 2 ciclos por instrucción) 2.000 M instr/s; B (3 GHz, IPC 1) 3.000 M instr/s |
| Ley de Amdahl | 28-29 | 90 % paralelo, 10 % secuencial, máximo 10 veces; repaso: 20 % secuencial, máximo 5 veces (1 ÷ 0,20) |
| Binario (epígrafe 5) | 31-40 | ver `sm142052-ud1.md`: por qué binario (31), decimal (32), binario con tabla y ejemplo (33), hexadecimal (34-35), divisiones (36), complemento a 2 con el ejemplo −5 (37), ASCII (38), unidades con $10^3$ (39), pregunta A3 (40) |
| CPU, GPU y TPU | 42-46 | SIMD y miles de datos; GPU "pocos núcleos potentes" frente a "miles"; TPU como ASIC; comparación en tres cajas (p.45); repaso: por qué la GPU sirve para redes neuronales (patrón SIMD común con gráficos) |
| Conclusiones, mapa, glosario, bibliografía | 47-50 | igual que `arq1` p.25-28 |

## arq2: UD2 Contenido teórico (PDF = impresa + 3)

| Tema | pág. PDF | impresa | Qué hay exactamente |
|---|---|---|---|
| Índice | 2-3 | | 7 epígrafes, 40 apartados; páginas impresas coinciden |
| Introducción y objetivos | 4 | 1 | dos ejes: CPU (ciclo, registros, ALU, buses) y memoria (jerarquía, caché, virtual); 7 objetivos |
| 1.1 Ciclo de instrucción (5 fases) | 5 | 2 | **Fetch** (PC, IR, el PC se incrementa), **Decode** (código de operación en el IR), **Cálculo de operandos** (dirección efectiva por modo de direccionamiento), **Execute** (ALU o unidad funcional), **Write-back** (resultado y flags) |
| 1.2 Interrupciones | 6 | 3 | al final de cada ciclo se comprueba si hay una pendiente; se guarda el estado y se salta a la rutina de tratamiento; esencial para multitarea y periféricos |
| 1.3 Segmentación (pipeline) | 6 | 3 | solapar instrucciones en etapas (una ejecuta, la siguiente se decodifica, una tercera se busca); **Tabla 1**: fases, unidad implicada y función; riesgos estructurales, de datos y de control |
| Riesgos del pipeline | 6-7 | 3-4 | estructurales (mismo recurso, p. ej. un solo puerto de memoria; duplicar recursos o burbujas), de datos (resultado aún no escrito; reenvío o forwarding desde la salida de la ALU), de control (saltos; predicción de saltos y flush); mucho silicio para predictores. Sin diagrama de ciclos ni número de etapas |
| 2 Registros: tamaño y tipos | 7 | 4 | acceso del orden de un ciclo; "entre 32 y 64 bits por registro"; visibles al usuario (propósito general, de datos, de direcciones con SP, BP e índice) |
| 2.1.2 Control y estado; 2.2 Banco de registros; Tabla 2 | 8 | 5 | PC, IR, flags (acarreo, cero, signo, desbordamiento), MAR, MBR/MDR; banco con varios puertos (lee dos operandos y escribe uno en un ciclo); más registros, menos accesos a memoria pero más bits de instrucción; **Tabla 2** de seis registros (PC, IR, MAR, MBR/MDR, SP, SR/Flags) |
| 2.3 Modos de direccionamiento | 9 | 6 | inmediato (ADD R1, #5), directo a registro (ADD R1, R2), directo a memoria, indirecto a registro, indexado (offset más índice, para arrays), relativo al PC (saltos) |
| 2.4 RISC frente a CISC; Tabla 3 | 9 | 6 | RISC con 16, 32 o más registros; x86 de 32 bits con 8, x86-64 con 16; **Tabla 3**: x86 (8), x86-64 (16), ARM AArch64 (31), RISC-V RV64 (32) |
| 3 ALU: operaciones, entradas y salidas | 10 | 7 | aritméticas, lógicas bit a bit (AND, OR, XOR, NOT), desplazamientos y rotaciones (con o sin signo), comparación por resta interna que solo actualiza flags; dos operandos y una señal de control; salida y flags (acarreo, desbordamiento, nulo, negativo) |
| 3.3 Sumador | 10 | 7 | todo se reduce a la suma binaria; resta por complemento a dos "que permite solucionar el problema del doble 0" (ver erratas); reutiliza el sumador |
| 3.4 Unidad de coma flotante | 10 | 7 | FPU según IEEE 754, "amplio rango dinámico y precisión decimal". Es todo |
| 4.1-4.2 Buses: clasificación, internos y externos | 11 | 8 | direcciones (unidireccional; con n líneas se direccionan $2^n$ posiciones), datos (bidireccional, anchura = bits por ciclo), control (R/W, interrupciones, reloj); internos (registros-ALU) y de sistema (ISA, PCI, PCIe, DDR) |
| 4.3 Arbitraje; 4.4 Jerarquía de buses | 11-12 | 8-9 | centralizado (árbitro) y descentralizado (prioridades); puentes que adaptan velocidades; USB y SATA para periféricos lentos; **Tabla 4** (tipos de bus, dirección, información) |
| 4.5 Síncronos y asíncronos | 12 | 9 | reloj común y ciclos de espera (wait states) frente a handshaking |
| 4.6 Buses actuales; Tabla 5 | 12-13 | 9-10 | PCIe (carriles), USB, SATA (sustituyó a IDE), DDR (doble tasa por ciclo), I2C/SPI (entre chips, baja velocidad) |
| 4.7 DMA | 13 | 10 | la CPU programa origen, destino y número de palabras; el controlador mueve los datos y avisa con una interrupción; sin DMA, una instrucción por palabra |
| 5.1 Niveles de la jerarquía | 13 | 10 | registros ("unos pocos cientos de bytes", un ciclo), caché L1-L3 (SRAM), RAM (DRAM), almacenamiento (SSD y HDD), remoto o en la nube |
| 5.2 Principio de localidad | 14 | 11 | temporal (variables de un bucle) y espacial (elementos consecutivos de un array, instrucciones) |
| 5.3 Parámetros; Tabla 6 | 14 | 11 | tiempo de acceso, capacidad, coste por bit; **Tabla 6**: registros (flip-flops, < 1 KB, < 1 ns), L1 (SRAM, 32-64 KB por núcleo, ~1 ns), L2 (256 KB-1 MB, 3-10 ns), L3 (varios MB compartida, 10-20 ns), RAM (DRAM, GB, 50-100 ns), SSD (flash, cientos de GB a TB, 10-100 µs), HDD (TB, 1-10 ms) |
| 5.4 SRAM frente a DRAM | 14-15 | 11-12 | SRAM: biestable de 6 transistores, sin refresco, más área y coste; DRAM: un condensador y un transistor, densa, refresco "cada pocos milisegundos" |
| 5.5 Coste por gigabyte | 15 | 12 | SRAM "decenas de euros", DRAM 2 a 5 euros, SSD/HDD céntimos; razón económica de la jerarquía |
| 5.6 Inclusión entre niveles | 15 | 12 | inclusiva (L1 dentro de L2, simplifica coherencia, duplica), exclusiva (más capacidad, más compleja), no inclusiva ni exclusiva |
| 6 Caché y 6.1 funcionamiento | 15 | 12 | acierto (hit) y fallo (miss): el dato se copia a la caché al fallar |
| 6.2 Líneas o bloques | 16 | 13 | de 32 o 64 bytes contiguos; aprovecha la localidad espacial |
| 6.3 Correspondencia | 16 | 13 | directa (una única línea "mediante una operación de módulo"), totalmente asociativa (cualquier línea, compara con todas), asociativa por conjuntos (conjuntos de N líneas, p. ej. 4 u 8). Sin fórmulas ni ejemplo |
| 6.4 Reemplazo | 16 | 13 | LRU, FIFO, aleatoria |
| 6.5 Escritura | 16-17 | 13-14 | write-through (todo a caché y memoria) y write-back (bit dirty, se actualiza al reemplazar) |
| 6.6 Métricas | 17 | 14 | tasa de aciertos y de fallos (= 1 − aciertos); **tiempo medio de acceso = tiempo de acierto + tasa de fallos × penalización por fallo**; "incluso un 95 % de aciertos" mejora mucho; sin ejemplo numérico |
| 6.7 Niveles múltiples | 17 | 14 | L1 dividida en instrucciones y datos, L2 más grande y lenta, L3 compartida |
| 6.8 Descomposición de la dirección | 17 | 14 | solo para correspondencia directa: etiqueta (tag), índice (nº de bits según el nº de líneas) y desplazamiento u offset (según el tamaño de línea); la etiqueta distingue bloques con el mismo índice. Sin cuentas de bits ni ejemplo |
| 6.9 Coherencia | 17-18 | 14-15 | copias obsoletas entre núcleos; MESI (Modified, Exclusive, Shared, Invalid) solo nombrado |
| 7 Memoria virtual y 7.1 objetivos | 18 | 15 | MMU más sistema operativo; espacio propio, contiguo y mayor que la física; cuatro objetivos (ampliar, aislar y proteger, simplificar, compartir código) |
| 7.2 Paginación | 18 | 15 | páginas de 4 KB habituales, marcos de página del mismo tamaño, tabla de páginas. Sin cuentas de bits (offset de 12 bits) ni ejemplo de traducción |
| 7.3 TLB | 18-19 | 15-16 | caché de traducciones recientes; acierto casi inmediato; fallo obliga a consultar la tabla completa |
| 7.4 Fallo de página | 19 | 16 | página en swap; el SO localiza, elige marco (variante de LRU), carga y actualiza la tabla; "considerablemente más lento" que un fallo de caché, sin cifras |
| 7.5 Segmentación frente a paginación | 19 | 16 | tamaño variable y significado lógico frente a fijo; fragmentación externa; segmentación paginada |
| 7.6 Caché y memoria virtual; Tabla 7 | 19 | 16 | **Tabla 7**: problema (latencia frente a capacidad y protección), unidad (línea de 32-64 B frente a página de 4 KB), gestión (hardware frente a MMU y SO) |
| 7.7 Bits de control | 20 | 17 | presencia o válido, permisos (leer, escribir, ejecutar), modificado (dirty), referenciado (accessed) |
| Conclusiones y comparativa comercial | 21-22 | 18-19 | localidad como idea transversal; compromisos de ingeniería; **Tabla 8**: Intel Core (L1 32-48 KB datos y 32-64 KB instrucciones), AMD Ryzen (32 KB y 32-64 KB), Apple Silicon (128-192 KB), Snapdragon (32-64 KB), L3 de varios MB |
| Resumen, mapa, glosario, bibliografía | 22-24 | 19-21 | lista de 9 viñetas; glosario de 18 términos; Harris y Harris, Patterson y Hennessy, Prieto Espinosa, Stallings, Tanenbaum y Austin, Tomás Civera |

## arq2diapo: UD2 Presentación (PDF = impresa)

| Tema | pág. PDF | Qué hay exactamente |
|---|---|---|
| Objetivos | 3 | los 7 objetivos de `arq2` p.4 bajo "Objetivo general"; las tarjetas de "Objetivos específicos" son restos de otra plantilla (ver erratas) |
| Introducción | 4 | igual que `arq2` p.4 |
| Ciclo de instrucción | 5 | las 5 fases en dos columnas |
| Interrupciones | 6 | igual que `arq2` p.6 |
| Pipeline | 7 | texto de `arq2` p.6 y Tabla 1 (fases); los tres riesgos solo nombrados |
| Registros y banco | 8-9 | clasificación (p.8) y banco con Tabla 2 (p.9) |
| Modos de direccionamiento | 10 | solo los seis nombres, sin los ejemplos de `arq2` |
| ALU | 11-12 | operaciones, entradas y salidas (p.11); sumador, complemento a dos y FPU (p.12, con frase rota) |
| Buses | 13-16 | clasificación con $2^n$ (p.13), internos, arbitraje y tabla de tipos (p.14), síncronos y Tabla 5 (p.15), DMA (p.16) |
| Jerarquía | 17-19 | niveles y localidad (p.17), parámetros y Tabla 6 (p.18), SRAM frente a DRAM y coste (p.19) |
| Caché | 20-24 | funcionamiento y estructura (p.20), correspondencia y reemplazo (p.21), escritura y tiempo medio de acceso (p.22), niveles múltiples y descomposición de la dirección (p.23), "coherencia" (p.24, con el texto equivocado) |
| Memoria virtual | 25-27 | objetivos (p.25), paginación, TLB y fallo de página (p.26), segmentación y Tabla 7 (p.27) |
| Conclusión, resumen, bibliografía | 28-30 | resumen de la unidad y mapa en una línea |
| No están en las diapositivas | | Tabla 3 (RISC y CISC), inclusión de cachés, MESI, bits de control, Tabla 8 y la comparativa comercial |

## arq2ej: UD2 Ejercicio con solución, caso CPU frente a GPU (PDF = impresa + 1)

Es la "Actividad 1: Caso CPU vs GPU" del cronograma. Datos (Tabla 1): CPU de 24 núcleos, 3,5 GHz, AVX-512 "16 FLOPs/ciclo/núcleo FP32", pico 2688 GFLOPS, L1 80 KB, L2 2 MB por núcleo (48 MB), L3 36 MB, RAM 89,6 GB/s, 125 W; GPU de 16384 núcleos CUDA (128 SM), 2,5 GHz, pico 81920 GFLOPS, 128 KB de memoria compartida por SM, 24 GB GDDR6X, 1008 GB/s, 450 W. Cargas (Tabla 2): A CNN (p = 0,98; 25 FLOPs/byte; 2 GB), B OLTP (0,10; 0,5; 50 MB), C H.264 (0,90; 8; 4 GB), D compilación (0,40; 0,2; 500 MB), E búsqueda y ordenación (0,60; 1; 40 GB).

| Tema | pág. PDF | impresa | Qué hay exactamente |
|---|---|---|---|
| Enunciado y datos | 2-3 | 1-2 | Tabla 1 (CPU y GPU), Tabla 2 (cargas A a E), entregable: documento y fichero .py |
| Tareas 1 a 5 (enunciado) | 3-4 | 2-3 | comparar arquitecturas; Amdahl con n = 16384 y n = 24; corrección por rendimiento por núcleo con factor r; roofline; asignación CPU o GPU |
| Tareas 6 a 9 (enunciado) | 4 | 3 | jerarquía y divergencia de warp en B y D; GFLOPS por vatio; caso trampa (B a la GPU por el roofline); `decidir_arquitectura` |
| Tarea 1: diferencias | 4 | 3 | tabla: superescalar, especulativo y fuera de orden (CPU) frente a SIMT con warps de 32 y en orden (GPU); cachés grandes frente a memoria compartida pequeña; la CPU gasta silicio en control, la GPU en unidades aritméticas |
| Tarea 2: Amdahl | 4-5 | 3-4 | `speedup(p, n) = 1/((1-p)+p/n)`; resultados GPU y CPU: A 49,85 y 16,44; B 1,11 y 1,11; C 9,99 y 7,27; D 1,67 y 1,62; E 2,50 y 2,35 (todos recalculados: coinciden) |
| Tarea 3: Amdahl heterogéneo | 5-6 | 4-5 | `speedup_heterogeneo(p, n, r) = 1/(r(1-p)+p/n)` con r = 20; A 2,500, B 0,056, C 0,500, D 0,083, E 0,125 (recalculados: coinciden), respecto a un núcleo de CPU; la ventaja se derrumba bajo p cercano a 0,95 |
| Tarea 4: roofline | 6 | 5 | `roofline(i, pico, bw) = min(pico, bw × i)`; CPU: A 2240, B 44,8, C 716,8, D 17,92, E 89,6 GFLOPS; GPU: A 25200, B 504, C 8064, D 201,6, E 1008; cociente 11,25 = 1008/89,6 (recalculado) |
| Tarea 5: decisión | 6-7 | 5-6 | A a GPU; B, D y E a CPU; C a CPU "o hardware dedicado" (NVENC) |
| Tarea 6: jerarquía y divergencia | 7 | 6 | caché L1, L2 y L3 con localidad frente a coalescing de la GPU; el acceso irregular lo rompe; ramas distintas en un warp se ejecutan en secuencia (divergencia) |
| Tarea 7: energía | 7-8 | 6-7 | CPU 2688/125 = 21,5 GFLOPS/W; GPU 81920/450 = 182,04; la GPU 8,47 veces más eficiente en pico (recalculado) |
| Tarea 8: caso trampa | 8 | 7 | B a la GPU por roofline (504/44,8 = 11,25) ignora p = 10 %, bloqueos y ACID, y la latencia fija de lanzar el kernel y mover datos por PCIe con solo 50 MB |
| Tarea 9: `decidir_arquitectura` | 8-9 | 7-8 | `speedup_gpu_real >= margen` (r = 20, n_gpu = 16384, margen = 1,2); devuelve GPU solo para A (2,5) |
| Pautas de evaluación y conclusión | 10-11 | 9-10 | reparto de 10 puntos (1, 2, 1,5, 1,5, 1, 1, 1, 1); Amdahl y roofline como dos techos distintos |
| Enunciado suelto (`arq2enun`) | 2-10 | 1-8 | índice (p.2), objetivos específicos (p.4-5, impresa 2-3), instrucciones de entrega (p.7-8, impresa 5-6: documento con cálculos explícitos y tablas resumen; .py con docstrings, sin librerías externas, que recibe fracción paralelizable, intensidad aritmética e indicador de dependencias/divergencia) |

## arq3: UD3 Contenido teórico (PDF = impresa + 3)

| Tema | pág. PDF | impresa | Qué hay exactamente |
|---|---|---|---|
| Índice | 2-3 | | 7 epígrafes; páginas impresas coinciden (omite 2.1, 2.2, 5.2, 5.3 y 5.4) |
| Introducción y objetivos | 4-5 | 1-2 | hilo conductor: la CPU no debe esperar a periféricos (polling, interrupciones, DMA); segunda mitad: HDD, SSD, RAID; IA: el cuello de botella puede estar en servir datos a la GPU; 8 objetivos |
| 1.1 Subsistema de E/S | 6 | 3 | periféricos, controladores y buses; el controlador traduce señales a registros que la CPU lee y escribe |
| 1.2 Periféricos; Tabla 1 | 6 | 3 | entrada, salida, almacenamiento y comunicación, con ejemplos |
| 1.3 Controlador de E/S | 6-7 | 3-4 | registros de datos, de estado (ocupado, listo, error) y de control (leer, escribir, iniciar, detener); mapeados en memoria o en un espacio de E/S independiente; buffer, interrupciones y maestro del bus |
| 1.4 Disparidad; Tabla 2 | 7 | 4 | ciclo de CPU ≈ 0,3 ns (3 GHz), DRAM 50-100 ns, SSD NVMe 10-100 µs, HDD (seek + latencia) 5-10 ms, pulsación de tecla ≈ 100 ms; "seis órdenes de magnitud" |
| 2 E/S programada (polling) | 7-8 | 4-5 | la CPU escribe en el registro de control y lee el de estado en un bucle de espera activa; simple, pero bloquea a la CPU |
| 2.1 E/S por interrupciones | 8 | 5 | el dispositivo avisa por una línea de interrupción; la CPU queda libre |
| 2.2 Comparativa; Tabla 3 | 8 | 5 | polling (la CPU pregunta, uso total), interrupciones (el dispositivo avisa, nada mientras se espera, teclado y ratón), DMA (el controlador gestiona, nada durante la transferencia, disco, red, vídeo); principio: ceder autonomía al periférico |
| Ejemplo: el coste del polling | 8-9 | 5-6 | 3·10⁹ × 0,002 = 6.000.000 de ciclos perdidos; con interrupciones solo "decenas o centenas" de ciclos de ISR (recalculado: correcto) |
| 3.1 Mecanismo de interrupción; Figura 1 | 9 | 6 | 4 pasos: termina la instrucción en curso, guarda PC y flags en la pila, salta a la ISR, restaura y reanuda; se comprueba al final de cada ciclo |
| 3.2 Vector y controlador de interrupciones | 9-10 | 6-7 | tabla en memoria que asocia identificador y dirección de la ISR; el controlador arbitra por prioridad y presenta un identificador; PIC 8259 y APIC |
| 3.3 Prioridades, máscara y anidadas; Tabla 4 | 10 | 7 | niveles de prioridad, anidamiento, registro de máscara, NMI; **Tabla 4**: máxima (fallo de alimentación, error de memoria no corregible; NMI), alta (temporizador, controlador de memoria), media (disco, red), baja (teclado, ratón) |
| 3.4 Hardware y software | 10-11 | 7-8 | interrupciones hardware frente a software (trampas o excepciones: división por cero, dirección no válida, llamada al sistema); mismo mecanismo |
| 4.1 Motivación del DMA | 11 | 8 | las interrupciones exigen una ISR por palabra; el DMA mueve bloques sin intervenir palabra a palabra |
| 4.2 Controlador DMA; Figura 2 | 11 | 8 | registros de dirección de memoria, contador de palabras (se decrementa en cada transferencia) y control/estado; maestro del bus; una interrupción al llegar a cero; **Figura 2** (CPU programa el DMA, DMA, periférico y memoria) |
| 4.3 Ráfaga y robo de ciclo | 12 | 9 | ráfaga: bloque continuo, más rápido, puede bloquear a la CPU; robo de ciclo: una palabra y cede el bus, más lento, la CPU progresa |
| 4.4 DMA actual | 12 | 9 | controladoras NVMe, SATA, red y gráficas con DMA propio; ejemplo de lectura de un archivo NVMe por PCIe |
| Ejemplo: interrupciones frente a DMA | 12-13 | 9-10 | 8 KB = 2.048 palabras de 4 bytes; 2.048 ISR × ~100 ciclos = 204.800 ciclos, frente a unas decenas de ciclos y una interrupción (recalculado: correcto) |
| 5.1 Jerarquía de buses de E/S | 13 | 10 | bus rápido de corto alcance (GPU, NVMe) y buses lentos por el chipset |
| 5.2 PCIe | 13 | 10 | enlaces serie punto a punto en carriles (x1, x4, x8, x16); cada generación duplica aproximadamente el ancho por carril |
| 5.3 USB | 13 | 10 | topología en árbol con host y concentradores; USB 2.0, 3.x, USB4 sin cifras; USB4 sobre Thunderbolt y PCIe |
| 5.4 SATA y NVMe; Tabla 5 | 13-14 | 10-11 | SATA III ≈ 600 MB/s; NVMe sobre PCIe con hasta 65.535 colas (1 en SATA); **Tabla 5**: PCIe 3.0, 4.0, 5.0 ≈ 1, 2 y 4 GB/s por carril y ≈ 16, 32 y 64 GB/s en x16; NVMe usa x4 |
| 6.1 HDD | 14 | 11 | platos a 5.400, 7.200 o 10.000-15.000 RPM, pistas, sectores (512 B o 4 KB), brazo actuador |
| 6.2 Tiempos de acceso en HDD | 14-15 | 11-12 | búsqueda (seek, varios ms, dominante), latencia rotacional (media vuelta, ≈ 4,2 ms a 7.200 RPM), transferencia; HDD eficiente en secuencial |
| Ejemplo: tiempo de acceso medio | 15 | 12 | seek 8 ms + 4,2 + 0,2 = 12,4 ms por sector; 1.000 sectores al azar ≈ 12,4 s; contiguos "unas pocas decenas de milisegundos" (ver erratas: son ≈ 212 ms) |
| 6.3 SSD | 15 | 12 | flash NAND sin partes móviles; SLC (1 bit), MLC (2), TLC (3), QLC (4): más densidad y menos coste pero menos velocidad y resistencia; FTL |
| 6.4 Wear leveling, TRIM, sobreaprovisionamiento | 15-16 | 12-13 | borrado por bloque, ciclos finitos; nivelación de desgaste, TRIM, reserva de capacidad y recolección de basura |
| 6.5 HDD frente a SSD; Tabla 6 | 16 | 13 | tecnología, acceso aleatorio (5-10 ms frente a 10-100 µs), coste por GB, golpes, E/S aleatoria, uso típico |
| 7.1 RAID | 17 | 14 | varios discos como una unidad lógica; rendimiento, capacidad y tolerancia a fallos, ninguno maximiza los tres |
| 7.2 Niveles; Tabla 7 | 17 | 14 | **Tabla 7**: RAID 0 (2 discos, sin tolerancia, 100 %), RAID 1 (2, 1 disco, 50 %), RAID 5 (3, 1 disco, (n-1)/n), RAID 6 (4, 2 discos, (n-2)/n), RAID 10 (4, 1 por pareja, 50 %); descripción de cada uno |
| Ejemplo: 4 discos de 2 TB | 18 | 15 | RAID 0 = 8 TB (0 fallos), RAID 1 de 2 discos = 2 TB (1), RAID 5 = 6 TB (1), RAID 6 = 4 TB (2), RAID 10 = 4 TB (1 por pareja); recalculado: correcto |
| 7.3 Elección de nivel | 18 | 15 | RAID 0 para datos regenerables o con respaldo; 1 y 10 para disponibilidad crítica; 5 y 6 para servidores de archivos |
| 7.4 Datasets masivos y E/S en IA | 18-19 | 15-16 | cientos de GB o TB leídos en cada época; entrenamiento limitado por E/S (I/O-bound) o por cómputo (compute-bound); mitigaciones: NVMe frente a HDD (lecturas aleatorias del shuffle), DMA, RAID 0 o 10, prefetching y solapamiento, sistemas de archivos paralelos. Sin cifras |
| Conclusiones y resumen | 20 | 17 | 10 viñetas |
| Mapa conceptual y glosario | 21-23 | 18-20 | 22 términos (APIC, chipset, FTL, I/O-bound, ISR, NAND, NMI, polling, RAID, striping, TRIM, wear leveling...) |
| Bibliografía | 24 | 21 | Harris y Harris, Patterson y Hennessy, Silberschatz, Stallings, Tanenbaum y Austin |

## arq3diapo: UD3 Presentación (PDF = impresa)

| Tema | pág. PDF | Qué hay exactamente |
|---|---|---|
| Objetivos e introducción | 3-4 | 8 objetivos; la GPU espera datos: la E/S puede ser el cuello de botella |
| Controlador de E/S | 6-8 | CPU, controlador y periférico (teclado-USB/PS2, disco-SATA/NVMe, red-Ethernet, pantalla-gráfico); registros de datos, estado y control |
| Clasificación y disparidad | 7, 9 | cuatro categorías (la tarjeta de red como híbrida); misma tabla de tiempos que `arq3` p.7 |
| Repaso: controlador | 10 | por qué la CPU nunca habla directo con el periférico |
| Polling | 12 | seudocódigo "mientras (estado ≠ LISTO): seguir consultando // espera activa" |
| Interrupciones (técnica) | 13 | línea de interrupción; esquema CPU ejecuta A, interrupción, ISR, CPU reanuda A; ventaja y coste (salvar y restaurar contexto) |
| Comparativa de técnicas y repaso | 14-15 | tabla como `arq3` Tabla 3; pregunta sobre la desventaja del polling |
| Mecanismo de interrupción | 17 | 4 pasos; por qué guardar el estado; por qué la pila (anidar) |
| Vector y controlador | 18 | tabla de ejemplo: teclado 0x00A4, disco 0x00B8, temporizador 0x0020 (direcciones de ejemplo, no del material teórico); IRQ0 temporizador, IRQ1 teclado, IRQ6 disco, IRQ11 red; PIC 8259 y APIC |
| Prioridades y máscara | 19 | prioridad, enmascaramiento, NMI; ejemplo de interrupción anidada (fallo de alimentación sobre una ISR de impresión); IRQ14/15 |
| Hardware frente a software | 20-21 | cinco ejemplos de trampas (división por cero, acceso inválido, syscall...); repaso sobre arbitraje del controlador |
| Motivación del DMA | 23 | 10.000 ISR frente a 1 interrupción para 10.000 palabras |
| Registros del DMA y modos | 24-25 | dirección, contador (se decrementa), control; esquema de uso del bus en ráfaga y en robo de ciclo |
| Repaso: DMA | 26 | 10.000 palabras: una interrupción frente a 10.000 |
| Buses y estándares | 28-31 | jerarquía (p.28), PCIe con tabla por carril (p.29), USB 2.0 ≈ 480 Mb/s, 3.x 5-20 Gb/s, USB4 hasta 40 Gb/s (p.30), SATA III ≈ 600 MB/s frente a NVMe PCIe 4.0 x4 hasta ≈ 7-8 GB/s y 65.535 colas (p.31) |
| Repaso: NVMe frente a SATA | 32 | colas y protocolo diseñado para flash |
| HDD | 34-35 | platos, pistas, sectores, brazo, cabezas; seek, latencia rotacional y transferencia |
| SSD | 36-37 | tabla SLC, MLC, TLC, QLC (bits, densidad, velocidad); FTL; wear leveling, TRIM, over-provisioning |
| HDD frente a SSD y repaso | 38-39 | tabla y barras de escala relativa (5-10 ms frente a 10-100 µs); por qué el HDD sufre con acceso aleatorio |
| RAID | 41-43 | los tres objetivos; tabla de niveles; casos de uso y esquema "I/O-bound frente a compute-bound" |
| Mitigaciones y repaso | 44-45 | NVMe, DMA, RAID 0 o 10, prefetching; pregunta sobre "limitado por E/S" |
| Conclusiones, resumen, bibliografía | 46-48 | 8 conclusiones y 11 viñetas de resumen |

## Guía y cronograma (00 Bienvenida)

| Tema | pág. PDF | Qué hay |
|---|---|---|
| Guía: qué es la asignatura | 3 (impresa 2) | SM142052, 6 ECTS, obligatoria, primer cuatrimestre, online, en español; 14 sesiones (UD1 sesiones 1-2, UD2 sesiones 3-5, UD3 sesiones 6-7, UD4 8-9, UD5 10-11, UD6 12-13, repaso 14) |
| Guía: competencias y resultados | 4-5 (3-4) | competencias específicas y un resultado por unidad (UD1 a UD6) |
| Guía: metodología y evaluación | 5-7 (4-6) | 14 clases virtuales; sin examen final; 40 % evaluación continua y 60 % proyecto final; mínimo 5,0 en cada parte para promediar |
| Guía: bibliografía | 7-9 (6-8) | lista general de la asignatura (incluye Solarte, Kurose y Ross, Tanenbaum y Wetherall) |
| Cronograma | 1-2 | semanas 1 a 7: UD1 (semana 1), UD2 (semanas 2-3), UD3 (semanas 3-4), UD4 (4-5), UD5 (5-6), UD6 (6-7); **Actividad 1: Caso CPU vs GPU** en la semana 3, **Actividad 2: Reto diseño de red** en la semana 6, entrega final del proyecto |

## Erratas e inconsistencias

Verificadas recalculando con python3 salvo donde se indica "dato externo".

**arq1 (UD1 teoría)**
- **p.12 (impresa 9) y p.13 (impresa 10)**: "Como se retomará en el epígrafe 5" y "paralelismo masivo de una GPU, que se aborda en el epígrafe 5". La GPU, el SIMD y el entrenamiento están en el epígrafe **6** (p.22-24); el 5 es el binario.
- **p.14-15 (impresa 11-12), "se completa en una fracción de nanosegundo"**: el ejemplo incluye buscar la instrucción y dos datos en memoria, pero la propia Tabla 3 (p.13) pone la RAM en "decenas de nanosegundos"; solo sería cierto si todo estuviera en registros o en caché.
- **p.5-6 y p.27**: el objetivo es "diferenciar arquitectura de organización", pero la definición del epígrafe 1 (p.6) describe solo la arquitectura como diseño estructural; ISA frente a organización aparece únicamente en el glosario (p.27), el resumen (p.26) y las conclusiones (p.25).
- **p.8 (impresa 5), Ley de Moore**: "se duplicaba aproximadamente cada dos años". En 1965 Moore proyectaba cada año; los dos años son su revisión de 1975 (dato externo, no está en el material). Tampoco se da ninguna cifra de transistores por año.
- **p.9 frente a `arq2` p.5-6**: la UD1 da el ciclo de instrucción en **3 fases** (fetch, decode, execute) y la UD2 en **5** (añade cálculo de operandos y write-back); la UD2 aclara en su glosario "fetch-decode-execute-writeback" (4 nombres) y en su resumen "búsqueda, decodificación, ejecución y escritura" (4). No hay contradicción de fondo, pero la página debe decir que son niveles de detalle distintos.
- **Escalas de tamaño y tiempo entre unidades**: registros "unos pocos bytes" (`arq1` Tabla 3) frente a "unos pocos cientos de bytes" (`arq2` p.13) y "< 1 KB" (Tabla 6); RAM "decenas de ns" frente a 50-100 ns (`arq2` Tabla 6, `arq3` Tabla 2). Son órdenes de magnitud aproximados, no errores, pero conviene usar una sola tabla (la 6 de `arq2`).
- **Extracción de texto**: "resultado = a  b" (p.10, 14) es "a + b" en la imagen renderizada.
- **Epígrafe 5**: erratas ya recogidas en `sm142052-ud1.md` (B p.33 con sumandos que dan 91, "0×10⁴" en A p.19, "0001 0" cortado, redacción de la regla del complemento a dos, múltiplos con "~", 5 V). Siguen vigentes.

**arq1diapo**
- **p.33**: sumandos "64 + 16 + 8 + 2 + 1" para 01101101 (dan 91, no 109); es la trampa de `sm142052-ud1.md`.
- **p.9**: la gráfica de Moore son siete barras sin eje ni valores: no sirve para leer cifras.
- **p.37**: bit de signo "0 = positivo" omite el cero; la regla dice "invirtiendo todos sus bits" (ver `sm142052-ud1.md`).

**arq2 (UD2 teoría)**
- **p.5 (impresa 2), Fetch**: "la unidad de control utiliza el contador de programa para obtener de memoria la dirección de la siguiente instrucción". El PC *contiene* esa dirección (Tabla 2, p.8: "dirección de la próxima instrucción"); lo que se obtiene de memoria es la instrucción, que va al IR.
- **p.10 (impresa 7), "problema del doble 0" y "precisión decimal"**: ver `sm142052-ud1.md`. Nunca se presentan signo-magnitud ni complemento a uno; IEEE 754 binario no da "precisión decimal" (0,1 no es exacto).
- **p.13-15 (impresa 10-12), registros y SRAM**: "5.1 registros: unos pocos cientos de bytes" y Tabla 6 los pone como "flip-flops, < 1 KB", pero §5.4 y el glosario (p.23) dicen que la SRAM se usa "en los registros y en la caché".
- **p.15 (impresa 12), coste por gigabyte**: SRAM "del orden de decenas de euros por gigabyte" (dato externo: el coste real de SRAM es varios órdenes mayor; cifra no verificable en el material, no usarla como dato).
- **p.9 (impresa 6), Tabla 3**: ARM AArch64 "31" y RISC-V "32" registros "aprox."; en RISC-V el registro x0 vale siempre cero, por lo que son 31 utilizables (dato externo).
- **p.6-7 frente a Tabla 1**: el texto del pipeline describe tres etapas (ejecuta, decodifica, busca) y la Tabla 1 define cinco fases.
- **p.17 (impresa 14), AMAT**: la fórmula es correcta, pero no hay ejemplo numérico. Con acierto de 1 ns, penalización de 100 ns y 95 % de aciertos da 6 ns (cálculo propio, no está en el material).
- **p.22 (impresa 19), Resumen**: lista "concepto de arquitectura y modelo de von Neumann", que la UD2 no desarrolla.

**arq2diapo**
- **p.3**: bajo "Objetivos específicos" hay cuatro tarjetas de otra plantilla: "CPU, memoria y organización", "Registro", "Consultar una BBDD", "Configuración Query" (ver imagen). Los objetivos reales están encima, bajo "Objetivo general".
- **p.7**: "Segmentación (pipeling)" (errata de escritura).
- **p.12**: "es par solucionar el problema del doble 0 y que así lo interprete de manera negativa" (frase rota; en `arq2` p.10 es "que permite solucionar el problema del doble 0 e interpretarlo de manera negativa").
- **p.14**: el apartado "Jerarquía de buses en un sistema actual" solo trae la Tabla 4 (tipos de bus), no el texto sobre puentes del apartado 4.4.
- **p.19**: "refresco cada poco milisegundo" (en `arq2` p.15: "cada pocos milisegundos").
- **p.24**: la diapositiva "Coherencia de caché en sistemas multinúcleo" repite el texto de "Niveles múltiples de caché" (p.23) y no trae nada de coherencia ni de MESI (que solo está en `arq2` p.17-18).

**arq2ej (UD2 ejercicio con solución)**
- **Tabla 1 (p.2), pico de la CPU**: 24 núcleos × 3,5 GHz × 16 FLOPs/ciclo/núcleo = **1344** GFLOPS, no 2688. Para 2688 haría falta 32 FLOPs/ciclo/núcleo (dos operaciones FMA de 16 lanes). La GPU sí cuenta FMA (16384 × 2,5 GHz × 2 = 81920).
- **p.6 (impresa 5), roofline**: "salvo en la carga A, ninguna carga alcanza el techo de cómputo de su dispositivo". Es falso también para A: el punto de cruce es 2688/89,6 = 30 FLOPs/byte en la CPU y 81920/1008 ≈ 81,3 en la GPU, y A tiene 25, así que la CPU rinde 2240 < 2688 y la GPU 25200 < 81920. **Las cinco cargas están limitadas por ancho de banda en ambos dispositivos.** (El enunciado pide distinguir cómputo y memoria, p.4 de `arq2enun`, pero ninguna carga es compute-bound.)
- **Tarea 3 y 5, inconsistencia de comparación**: el speedup heterogéneo de la GPU (A = 2,5) se mide frente a **un núcleo de CPU**, mientras que la CPU de 24 núcleos ya tiene 16,44 en la Tarea 2. Con las cifras del propio ejercicio, para A la CPU de 24 núcleos sería ~6,6 veces más rápida que la GPU corregida, lo que contradice la decisión A a GPU (que sí apoya el roofline, 11,25 veces). El texto no calcula el speedup corregido de la CPU ni comenta el desacuerdo entre los dos modelos.
- **Tarea 9 (p.8-9, impresa 7-8)**: el enunciado pide `decidir_arquitectura(carga)` con "indicador de dependencias/divergencia" y "integrando los criterios de las tareas anteriores" (`arq2enun` p.6-7). La solución recibe `(p, intensidad, r, n_gpu, margen)`, **no usa `intensidad`** (queda sin uso) ni recibe dependencias; en la práctica solo aplica Amdahl heterogéneo, aunque la conclusión (p.11) dice integrar roofline.
- **Parámetros sin fuente**: r = 20 ("rinde ~20 veces menos") y margen = 1,2 son supuestos del autor.
- **Tarea 6 (p.7)**: dice que ante accesos irregulares y estructuras enlazadas la caché "sigue acertando" gracias a la "prefetching agresiva"; el prefetch ayuda con patrones regulares, no con punteros (dato externo, afirmación discutible).
- **Extracción**: `1/((1 - p)  p / n)` es `1/((1-p)+p/n)`; las sangrías del `if` salen torcidas, en la imagen están bien.

**arq3 (UD3 teoría)**
- **p.15 (impresa 12), ejemplo del HDD**: leer 1.000 sectores contiguos "apenas añadiría el tiempo de transferencia... del orden de unas pocas decenas de milisegundos". Con los datos del propio ejemplo son 8 + 4,2 + 1.000 × 0,2 = **212,2 ms** (la transferencia sola son 200 ms). La razón con el acceso aleatorio es 12.400/212,2 ≈ 58, dos órdenes de magnitud y no "varios".
- **p.6 (impresa 3), §1.1**: el controlador se maneja "con las mismas instrucciones que usaría para acceder a memoria", pero §1.3 (p.6) admite un espacio de E/S independiente, que usa instrucciones distintas (E/S mapeada en memoria frente a E/S aislada).
- **p.7 (impresa 4), Tabla 2**: "seis órdenes de magnitud" entre CPU y HDD. Con 0,3 ns frente a 5-10 ms son ~7 órdenes (1,7×10⁷ a 3,3×10⁷); "seis" vale solo entre 1 ns y 1 ms.
- **Índice (p.2-3)**: no lista 2.1, 2.2 (E/S por interrupciones, comparativa), 5.2 (PCIe), 5.3 (USB) ni 5.4 (SATA y NVMe), que sí existen.
- **Tabla 3 (p.8, impresa 5), matices**: interrupciones "Ninguno mientras se espera" omite el coste de una ISR por palabra (§4.1); DMA "Ninguno durante la transferencia" no recoge que en modo ráfaga la CPU puede quedar sin bus (§4.3, p.12).
- **Figura 1 (p.9)**: "intrucción" (errata de escritura).
- **Verificados correctos**: 6.000.000 ciclos (p.8-9), 204.800 ciclos (p.12-13), 12,4 ms y 12,4 s (p.15), ≈ 4,2 ms a 7.200 RPM (60/7200/2 = 4,17 ms), todas las capacidades de RAID del ejemplo (p.18), PCIe x16 = 16, 32 y 64 GB/s (Tabla 5).

**arq3diapo**
- **Todas las diapositivas** llevan la cabecera "Unidad 1. E/S y periféricos" (debe ser Unidad 3).
- **p.19**: "Prioridad alta: fallo de alimentación, media: fin de impresión, baja: refresco de pantalla", pero el ejemplo de la misma diapositiva llama "ISR de baja prioridad" a la de impresión y `arq3` Tabla 4 (p.10) da máxima, alta, media y baja con otras causas (teclado y ratón son los de prioridad baja).
- **p.18-19, IRQ**: "IRQ6 disco" y "IRQ14/15 canales SATA". En el PC clásico IRQ6 era el disquete y IRQ14/15 los canales IDE/PATA, no SATA (dato externo). Las direcciones 0x00A4, 0x00B8 y 0x0020 son ilustrativas, no vienen de la teoría.
- **p.23 y p.26**: usan 10.000 palabras, mientras la teoría usa 8 KB = 2.048 palabras (`arq3` p.12-13).
- **p.31**: "el tema central de la sesión 2" es un resto de otra presentación.
- **p.48**: "BPatterson" (errata de escritura). **p.14**: las etiquetas del esquema inferior salen cortadas en la extracción ("Programa/da", "Interrupcion/es", "DM/A").
- **p.30**: velocidades de USB que la teoría no da (USB 2.0 480 Mb/s, 3.x 5-20 Gb/s, USB4 40 Gb/s).

## No aparece

- **Álgebra booleana**: no hay tablas de verdad ni puertas lógicas; AND, OR, XOR y NOT solo se nombran (`arq2` p.10); Boole y Shannon solo en la historia (`arq1` p.6). XOR como paridad no se menciona.
- **Suma binaria con acarreo paso a paso**, sumador completo, definición de **desbordamiento** (solo el nombre del flag en `arq2` p.8 y p.10) y rango de enteros con signo; **IEEE 754** y el 0,1 + 0,2 de la coma flotante (solo nombrados). Ver `sm142052-ud1.md`.
- **Formato de instrucción, código de operación en bits, ensamblador real**: el único ejemplo es `ADD R1, #5` (`arq2` p.9); no hay un programa corto ejecutado paso a paso con valores de PC e IR.
- **Pipeline cuantitativo**: sin diagrama de ciclos, sin número de etapas, sin speedup ni CPI, sin ejemplo de riesgo de datos ni de burbujas.
- **Fórmula de Amdahl en la teoría**: solo el límite en prosa (`arq1` p.16-17); la fórmula $1/((1-p)+p/n)$ está en `arq2ej` p.4. Tampoco la fórmula de tiempo de CPU (instrucciones × CPI × periodo) ni la ley de Moore como fórmula.
- **Caché con números**: sin ejemplo de traza de accesos, sin cuentas de bits de etiqueta, índice y offset, sin ejemplo de LRU, sin tabla de aciertos y fallos, sin ejemplo numérico del tiempo medio de acceso, sin conjuntos de N líneas con un caso resuelto; MESI solo nombrado.
- **Memoria virtual con números**: sin traducción resuelta (página 4 KB, offset de 12 bits), sin tamaño de TLB, sin tiempos de fallo de página, sin ejemplo de reemplazo.
- **Roofline como teoría**: solo existe la función `roofline` del ejercicio; no se define el punto de cruce (ridge point) ni se dibuja.
- **SIMT, warp y divergencia** salen únicamente en `arq2ej` (warps de 32); UD1 habla de SIMD sin ejemplo de código ni de vectores.
- **Entrenamiento limitado por E/S sin cifras** (`arq3` p.18-19): no hay GB/s que exige la GPU, tamaño de lote, tiempo por época ni utilización de la GPU.
- **RAID**: no explica cómo se calcula la paridad (XOR), ni la penalización de escritura de RAID 5, ni el tiempo de reconstrucción.
- **SSD**: sin IOPS ni anchos de banda de lectura y escritura (solo "≈ 7-8 GB/s" en `arq3diapo` p.31); sin amplificación de escritura.
- **E/S mapeada en memoria frente a por puertos** con ejemplos; **latencia de una interrupción**; traza de un DMA con valores de dirección y contador.
- **Código en R** y código en general en UD1 y UD3 (el único código es el del ejercicio de la UD2, en Python).
- **Octal**, fracciones binarias y la mayor parte del epígrafe de representación numérica: ver `sm142052-ud1.md`.

## Búsqueda rápida por concepto

| Concepto | Mejor página | Otras |
|---|---|---|
| Arquitectura frente a organización (ISA) | `arq1` p.27 (impresa 24, glosario) | `arq1diapo` p.6; `arq1` p.6 (definición) |
| Programa almacenado, Von Neumann | `arq1` p.9 (impresa 6), Tabla 1 | `arq1` p.7; `arq1diapo` p.13 |
| Ciclo de instrucción (3 y 5 fases) | `arq2` p.5 (impresa 2) | `arq1` p.9; `arq2diapo` p.5; `arq1` p.14-15 (ejemplo a + b) |
| Registros (PC, IR, MAR, MBR, flags) | `arq2` p.8 (impresa 5), Tabla 2 | `arq2` p.7; `arq2diapo` p.8-9 |
| Modos de direccionamiento | `arq2` p.9 (impresa 6) | `arq2diapo` p.10 (solo nombres) |
| RISC frente a CISC | `arq2` p.9, Tabla 3 | `arq2` p.22, Tabla 8 |
| Cuello de botella y Harvard | `arq1` p.10-11 (impresa 7-8), ejemplo a + b y Figura 2 | `arq1diapo` p.15-16 |
| Interrupciones (mecanismo, pila) | `arq3` p.9 (impresa 6), Figura 1 | `arq3diapo` p.17; `arq2` p.6 |
| Vector, prioridades, NMI | `arq3` p.9-10 (impresa 6-7), Tabla 4 | `arq3diapo` p.18-19 |
| Álgebra booleana, operaciones lógicas | `arq2` p.10 (impresa 7, §3.1) | `arq1` p.6 (Boole y Shannon) |
| Complemento a dos, sumador | `arq1diapo` p.37 (−5 = 1111 1011) | `arq1` p.21-22; `arq2` p.10; `arq2diapo` p.12 |
| Flags de la ALU (acarreo, cero, signo, desbordamiento) | `arq2` p.8 (§2.1.2) y p.10 (§3.2) | solo nombrados |
| Pipeline y riesgos | `arq2` p.6-7 (impresa 3-4), Tabla 1 | `arq2diapo` p.7 |
| Frecuencia, IPC | `arq1` p.16 (impresa 13), ejemplo A y B | `arq1diapo` p.27 |
| Ley de Amdahl | `arq2ej` p.4-5 (fórmula y tabla) | `arq1` p.16-17; `arq1diapo` p.28-29 |
| Ley de Moore | `arq1` p.8 (impresa 5) | `arq1diapo` p.9-11 (con errata de plazo, ver erratas) |
| Flynn: SISD, SIMD, MIMD | `arq1` p.12 (impresa 9), Tabla 2 | `arq1diapo` p.17; `arq1` p.22-23 |
| GPU, TPU, CPU | `arq1` p.22-24 (impresa 19-21), Tabla 4 | `arq1diapo` p.42-46 |
| Divergencia de warp y SIMT | `arq2ej` p.4 y p.7 | no está en las unidades teóricas |
| Roofline | `arq2ej` p.6 (impresa 5) | sin teoría |
| GFLOPS por vatio | `arq2ej` p.7-8 (impresa 6-7) | |
| Amdahl heterogéneo (factor r) | `arq2ej` p.5-6 (impresa 4-5) | |
| Jerarquía de memoria y tiempos | `arq2` p.14 (impresa 11), Tabla 6 | `arq1` p.13, Tabla 3; `arq2diapo` p.18; `arq3` p.7, Tabla 2 |
| Localidad temporal y espacial | `arq2` p.14 (impresa 11) | `arq2diapo` p.17 |
| SRAM frente a DRAM | `arq2` p.14-15 (impresa 11-12) | `arq2diapo` p.19 |
| Caché: aciertos, fallos, líneas | `arq2` p.15-16 (impresa 12-13) | `arq2diapo` p.20 |
| Correspondencia directa, asociativa, por conjuntos | `arq2` p.16 (impresa 13) | `arq2diapo` p.21 |
| Reemplazo LRU, FIFO | `arq2` p.16 (impresa 13) | `arq2diapo` p.21 |
| Escritura write-through y write-back | `arq2` p.16-17 (impresa 13-14) | `arq2diapo` p.22 |
| Tiempo medio de acceso | `arq2` p.17 (impresa 14), fórmula | `arq2diapo` p.22 |
| Etiqueta, índice, offset | `arq2` p.17 (impresa 14) | `arq2diapo` p.23 |
| Coherencia y MESI | `arq2` p.17-18 (impresa 14-15) | solo nombrado |
| Memoria virtual, paginación, tabla de páginas | `arq2` p.18 (impresa 15) | `arq2diapo` p.25-26 |
| TLB y fallo de página | `arq2` p.18-19 (impresa 15-16) | `arq2diapo` p.26 |
| Bits de control de la tabla de páginas | `arq2` p.20 (impresa 17) | no está en las diapositivas |
| Bus de direcciones y $2^n$ | `arq2` p.11 (impresa 8) | `arq2diapo` p.13 |
| PCIe, USB, SATA, NVMe (cifras) | `arq3` p.14 (impresa 11), Tabla 5 | `arq3` p.13; `arq3diapo` p.29-31 |
| DMA (registros, ráfaga, robo de ciclo) | `arq3` p.11-12 (impresa 8-9) | `arq3diapo` p.23-26; `arq2` p.13 |
| Coste del polling (6.000.000 ciclos) | `arq3` p.8-9 (impresa 5-6) | `arq3diapo` p.12 |
| Interrupciones frente a DMA (204.800 ciclos) | `arq3` p.12-13 (impresa 9-10) | `arq3diapo` p.23 (con 10.000 palabras) |
| HDD: seek, latencia rotacional, transferencia | `arq3` p.14-15 (impresa 11-12) y ejemplo p.15 | `arq3diapo` p.34-35 |
| SSD: NAND, FTL, wear leveling, TRIM | `arq3` p.15-16 (impresa 12-13) | `arq3diapo` p.36-37 |
| HDD frente a SSD | `arq3` p.16 (impresa 13), Tabla 6 | `arq3diapo` p.38 |
| RAID 0, 1, 5, 6, 10 | `arq3` p.17-18 (impresa 14-15), Tabla 7 y ejemplo | `arq3diapo` p.41-43 |
| Entrenamiento limitado por E/S | `arq3` p.18-19 (impresa 15-16) | `arq3diapo` p.43-45; `arq1` p.13-14 |
| Unidades: bit, byte, múltiplos | `arq1diapo` p.39 | `arq1` p.22; ver `sm142052-ud1.md` |

## Conceptos candidatos

Ruta sugerida para el grupo "Infraestructura y programación", con tres tramos: **El computador por dentro** (1 a 5 y 12), **Memoria** (6 a 8) y **Entrada, salida y almacenamiento** (9 a 11 y 13). Orden de estudio, de lo más plano a lo más complejo. Todas las páginas se apoyan en estas fuentes de `fuentes.js`: `arq1`, `arq1diapo`, `arq2`, `arq2diapo`, `arq2ej`, `arq3`, `arq3diapo`.

Decisiones de fusión: **buses**, **modos de direccionamiento**, **Von Neumann frente a Harvard** y **registros** son vocabulario y se funden en la página 3; **Flynn, GPU, TPU, roofline y energía** se funden en la 12; **PCIe, SATA y NVMe** se reparten entre la 10 y la 13; **Ley de Moore** va como un paso de la 5 (con la exponencial). **IEEE 754** no se propone (solo se nombra), tampoco **desbordamiento** como página propia (solo es el nombre de un flag; se puede mostrar como paso opcional de la 2 aclarando que el material no lo define). **Complemento a dos** sí, porque el material trae regla, bit de signo y el ejemplo −5, y lo conecta con el sumador de la ALU.

---

### 1. Álgebra booleana y puertas lógicas
- **Qué se ve**: cómo AND, OR, XOR y NOT combinan bit a bit dos bytes, y cómo con ellas se arma una suma de un bit.
- **Imagen central**: dos filas de 8 interruptores (los bits de A y B, cada uno se enciende con un toque) y debajo cuatro filas de resultado (AND, OR, XOR, NOT) que se iluminan en vivo; un panel de una puerta con dos entradas arrastrables y su tabla de verdad que se completa sola, y un semisumador (XOR da el bit de suma, AND da el acarreo) con el que se suman dos bits.
- **Unidades**: UD2 §3.1 y §3.3 (`arq2` p.10; `arq2diapo` p.11-12); UD1 §1.1 por Boole y Shannon (`arq1` p.6). El material solo nombra las operaciones: la página aporta las tablas de verdad (no están en el material y se dice así).
- **Prerrequisitos**: "Binario y otras bases".
- **Python y R**: tablas de verdad y operaciones bit a bit con bucles sobre las posiciones de dos números de 8 bits, y el semisumador con XOR y AND; cierre comparando con `a & b`, `a | b`, `a ^ b` en Python y con `bitwAnd`, `bitwOr`, `bitwXor` en R. Con `Biblioteca.vidaReal` se ve el bit que se calcula en cada vuelta del bucle.

### 2. Complemento a dos y la ALU
- **Qué se ve**: por qué con invertir los bits y sumar 1 aparecen los negativos, y por qué la misma suma sirve para restar.
- **Imagen central**: un número de 8 bits con pesos −128, 64, 32, 16, 8, 4, 2, 1 donde se enciende cada bit y se lee el valor con signo en vivo; botón "invertir" y botón "+1" que animan el −5 (0000 0101 a 1111 1010 a 1111 1011, el ejemplo del material); una ALU con dos entradas y cuatro lámparas de flags (acarreo, cero, signo, desbordamiento) que cambian al arrastrar los operandos, y una "recta circular" donde se ve que restar 5 es girar 251 pasos.
- **Unidades**: UD1 §5.2 (`arq1` p.21-22; `arq1diapo` p.37, único ejemplo de negativos); UD2 §2.1.2, §3.2, §3.3 (`arq2` p.8, p.10; `arq2diapo` p.11-12). Aclarar los fallos del material: "doble 0" no explicado y desbordamiento solo nombrado (ver erratas).
- **Prerrequisitos**: "Binario y otras bases", "Álgebra booleana y puertas lógicas" (de esta lista), "Aritmética y preálgebra".
- **Python y R**: inversión y suma de 1 con bucles sobre los bits, y un sumador bit a bit con acarreo que reproduce 7 + (−5) y 127 + 1 con wrap a 8 bits; cierre comparando con `np.int8` en Python y con `x %% 256` y `bitwAnd(x, 255)` en R (R no tiene `int8`).

### 3. Ciclo de instrucción y programa almacenado
- **Qué se ve**: cómo una CPU con PC, IR, MAR y MDR ejecuta un programa guardado en la misma memoria que los datos, y qué se gana con dos buses (Harvard).
- **Imagen central**: una memoria de 16 celdas donde se mezclan instrucciones y datos (un mismo byte se puede leer como instrucción o como número), una CPU de juguete con sus registros y los tres buses; botón "paso" que anima fetch, decode, operandos, execute y write-back, y la pregunta previa "¿qué dirección tendrá el PC después?"; un conmutador "un bus / dos buses" que muestra a + b en 4 pasos en secuencia (Von Neumann) o con acceso simultáneo (Harvard); un selector de modo de direccionamiento (inmediato, registro, indirecto, indexado) que cambia de dónde se lee el operando; un deslizador de líneas de dirección que muestra $2^n$ posiciones.
- **Unidades**: UD1 §2.1, §2.2, §3.3, §3.5 (`arq1` p.9-11, p.14-15; `arq1diapo` p.13-16, p.24-25); UD2 §1.1, §1.2, §2, §2.3, §4.1 (`arq2` p.5-6, p.7-9, p.11; `arq2diapo` p.5-6, p.8-10, p.13). Aclarar la errata del fetch y las 3 frente a 5 fases.
- **Prerrequisitos**: "Binario y otras bases", "Potencias y raíces" (por $2^n$), "Álgebra booleana y puertas lógicas" (de esta lista).
- **Python y R**: una CPU de juguete con memoria como lista, `pc`, `ir` y un bucle `fetch, decode, execute` con 4 instrucciones (cargar, sumar, guardar, saltar), que también cuenta los accesos al bus con uno y con dos buses; cierre comparando el resultado de a + b con la suma directa. R usa listas y bucles `repeat`; los índices desde 0 en Python y desde 1 en R.

### 4. Segmentación (pipeline) y riesgos
- **Qué se ve**: cómo solapar instrucciones acelera la CPU, y cómo un dato aún no escrito, un recurso compartido o un salto crean burbujas.
- **Imagen central**: un diagrama de ciclos (filas = instrucciones, columnas = ciclos, cinco etapas coloreadas) donde se arrastran instrucciones y se cambia su orden; cuando una instrucción necesita el resultado de la anterior aparece una burbuja roja, y un interruptor "reenvío (forwarding)" las quita; un salto con un predictor que acierta o falla y descarta (flush) lo ya buscado; se leen los ciclos totales frente a la ejecución sin solapar.
- **Unidades**: UD2 §1.3 y Tabla 1 (`arq2` p.6-7; `arq2diapo` p.7). El material solo da las definiciones de los tres riesgos: los números del diagrama son de la página y se declaran como ilustrativos.
- **Prerrequisitos**: "Ciclo de instrucción y programa almacenado" (de esta lista), "Razones y proporciones".
- **Python y R**: una tabla de ciclos construida con bucles (para cada instrucción, su ciclo de inicio según dependencias), con y sin reenvío, y el CPI resultante; cierre comparando con la fórmula cerrada (n + etapas − 1 ciclos sin riesgos).

### 5. Frecuencia, IPC y ley de Amdahl
- **Qué se ve**: por qué más GHz no basta (IPC) y por qué más núcleos tienen un techo fijado por la parte secuencial.
- **Imagen central**: dos procesadores con deslizadores de GHz e IPC y una barra de "instrucciones por segundo" (el ejemplo A 4 GHz con IPC 0,5 frente a B 3 GHz con IPC 1 del material); y una curva de aceleración frente a número de núcleos con un deslizador de la fracción paralela $p$ y una línea horizontal en $1/(1-p)$ que muestra el techo (90 % da 10, 80 % da 5, los dos ejemplos del material); un paso opcional con barras de Moore que se duplican cada dos años.
- **Unidades**: UD1 §4.1, §4.2, §1.2 (`arq1` p.16-17, p.8-9; `arq1diapo` p.27-29, p.9-10); la fórmula en `arq2ej` p.4-5. Aclarar que la fórmula no está en la teoría y la errata de Moore.
- **Prerrequisitos**: "Razones y proporciones", "Fracciones, decimales y porcentajes", "Qué es una función", "Función exponencial y el número e" (paso de Moore).
- **Python y R**: `speedup(p, n)` con bucles sobre varios $n$ y $p$, la tabla de las 5 cargas del ejercicio (A 49,85, B 1,11, ...) y la versión heterogénea con el factor $r$; cierre comparando con una forma vectorizada (`np.array` y `sapply` en R).

### 6. Jerarquía de memoria y localidad
- **Qué se ve**: por qué ninguna memoria es a la vez grande, rápida y barata, y cómo el tiempo medio se acerca al de la memoria rápida si los datos se reutilizan.
- **Imagen central**: una escalera de siete niveles (registros a HDD) con los tiempos de la Tabla 6 en escala logarítmica y una "escala humana" (1 ns pasa a 1 s: el HDD tarda meses); un recorrido de un array por filas o por columnas sobre una cuadrícula que ilumina la localidad espacial, y un bucle que reutiliza variables (localidad temporal); deslizadores de la tasa de aciertos de cada nivel que mueven el tiempo medio de acceso.
- **Unidades**: UD1 §3.2 (`arq1` p.13-14, Tabla 3); UD2 §5 (`arq2` p.13-15, Tabla 6; `arq2diapo` p.17-19); UD3 §1.4 (`arq3` p.7, Tabla 2). Usar la Tabla 6 de `arq2` como única tabla (ver erratas por escalas y por el coste de SRAM).
- **Prerrequisitos**: "Notación científica", "Potencias y raíces", "Logaritmos", "Esperanza y varianza de una variable aleatoria" (el tiempo medio es una esperanza).
- **Python y R**: el tiempo medio de acceso de una jerarquía de varios niveles con un bucle (fallo de un nivel pasa al siguiente) y la "escala humana"; cierre comparando con la fórmula de un solo nivel de `arq2` p.17.

### 7. Memoria caché
- **Qué se ve**: cómo una dirección de memoria se parte en etiqueta, índice y offset, dónde cae cada bloque y qué se expulsa cuando no cabe.
- **Imagen central**: una memoria principal de bloques numerados y una caché de 8 líneas; se arrastra un bloque a su línea (directa), a cualquiera (asociativa) o a su conjunto (por conjuntos de 2 o 4); una dirección de 8 bits cuyos bits se colorean como etiqueta, índice y offset y cambian al mover el tamaño de línea y el número de líneas; un tren de accesos con aciertos y fallos contados, con LRU, FIFO o aleatoria; el tiempo medio de acceso se actualiza en vivo; comparar recorrer una matriz por filas o por columnas.
- **Unidades**: UD2 §6 y §5.6 (`arq2` p.15-18; `arq2diapo` p.20-24). El material solo describe en prosa y no trae cuentas de bits ni trazas: son de la página (marcarlo). Aclarar la diapositiva 24 equivocada.
- **Prerrequisitos**: "Jerarquía de memoria y localidad" (de esta lista), "Binario y otras bases", "Potencias y raíces", "Fracciones, decimales y porcentajes".
- **Python y R**: un simulador de caché de correspondencia directa y de conjuntos con LRU, con bucles sobre una traza de direcciones (`indice = bloque % lineas`, `etiqueta = bloque // lineas`), que calcula la tasa de aciertos y el tiempo medio; cierre comparando el recorrido por filas frente al de columnas. En R, `%%` y `%/%`.

### 8. Memoria virtual: paginación y TLB
- **Qué se ve**: cómo cada proceso cree tener su propia memoria, cómo una dirección virtual se traduce a física y qué cuesta un fallo de página.
- **Imagen central**: dos procesos con direcciones virtuales que se arrastran a marcos de memoria física a través de una tabla de páginas; una dirección virtual partida en número de página y offset (con páginas de 4 KB: 12 bits de offset) que se traduce paso a paso; una TLB de 4 entradas que se llena y se vacía; un marco que se expulsa al swap y un contador de tiempo que muestra que el fallo de página es mucho más caro que uno de TLB; los bits de presencia, modificado y permisos con interruptores.
- **Unidades**: UD2 §7 (`arq2` p.18-20; `arq2diapo` p.25-27). El material no trae traducciones resueltas ni cifras de tiempo: son de la página (marcarlo).
- **Prerrequisitos**: "Memoria caché" (de esta lista), "Binario y otras bases".
- **Python y R**: una traducción de direcciones con tabla de páginas (diccionario o lista), TLB con LRU y fallo de página con reemplazo, con bucles sobre una secuencia de accesos (`pagina = dir // 4096`, `offset = dir % 4096`); cierre comparando con el cálculo con desplazamientos de bits (`dir >> 12`) y `bitwShiftR` en R.

### 9. E/S programada, interrupciones y DMA
- **Qué se ve**: cuántos ciclos de CPU se pierden esperando a un dispositivo y cómo las interrupciones y el DMA los recuperan.
- **Imagen central**: una línea de tiempo con tres carriles (polling, interrupciones, DMA); un deslizador de la latencia del dispositivo (de microsegundos a milisegundos) que pinta en rojo los ciclos de espera activa y en verde los ciclos útiles; un botón que dispara una interrupción y muestra los cuatro pasos (termina la instrucción, guarda PC y flags en la pila, salta a la ISR, restaura), una pila que crece si llega otra interrupción de mayor prioridad (anidada) y una tabla vector que se consulta; un conmutador de ráfaga o robo de ciclo que reparte el bus entre DMA y CPU; contadores con los números del material (6.000.000 ciclos; 2.048 ISR × 100 = 204.800).
- **Unidades**: UD3 §1.3, §1.4, §2, §3, §4 (`arq3` p.6-13; `arq3diapo` p.12-26); UD2 §1.2 y §4.7 (`arq2` p.6, p.13); UD1 §3.4 (`arq1` p.14).
- **Prerrequisitos**: "Ciclo de instrucción y programa almacenado" (de esta lista), "Notación científica", "Razones y proporciones".
- **Python y R**: la simulación del polling que cuenta ciclos hasta que el dispositivo está listo, las interrupciones con una ISR de 100 ciclos por palabra y el DMA con una interrupción por bloque, todo con bucles; reproducir 6.000.000 y 204.800 y cerrar comparando con las fórmulas cerradas (`3e9 * 0.002`, `2048 * 100`).

### 10. Disco duro y SSD
- **Qué se ve**: por qué leer al azar en un disco mecánico cuesta órdenes de magnitud más que leer seguido, y por qué un SSD apenas lo nota.
- **Imagen central**: un plato giratorio con pistas y sectores y un brazo que se arrastra a una pista; al pedir un sector se suman en vivo seek, latencia rotacional (media vuelta, 4,2 ms a 7.200 RPM) y transferencia; un conmutador "1.000 sectores al azar o contiguos" con el cronómetro (12,4 s frente a 212 ms) y una barra para el SSD; un panel de flash donde un bloque se borra entero antes de reescribirse, con un contador de desgaste que el wear leveling reparte y el TRIM libera.
- **Unidades**: UD3 §6 (`arq3` p.14-16; `arq3diapo` p.34-39); PCIe, SATA y NVMe de `arq3` p.13-14 (Tabla 5; `arq3diapo` p.29-31). Aclarar la errata del ejemplo de los 1.000 sectores contiguos.
- **Prerrequisitos**: "Jerarquía de memoria y localidad" (de esta lista), "Notación científica", "Razones y proporciones".
- **Python y R**: el tiempo de acceso de un HDD (`60 / rpm / 2` de latencia rotacional) y la lectura de 1.000 sectores aleatorios o contiguos con un bucle que suma los tres componentes, comparada con un SSD de tiempo fijo; cierre comparando con las fórmulas cerradas (12,4 s y 212,2 ms).

### 11. RAID y paridad
- **Qué se ve**: cómo repartir datos entre discos da velocidad o tolerancia a fallos, y cómo la paridad reconstruye un disco perdido.
- **Imagen central**: de 2 a 6 discos con bloques de colores; se elige el nivel (0, 1, 5, 6, 10) y los datos se reparten solos (striping, espejo, paridad); un botón "romper disco" tacha uno y la página muestra si los datos se recuperan; en RAID 5 se ve el bloque de paridad como XOR de los otros y la reconstrucción del disco perdido; una tabla de capacidad útil (4 discos de 2 TB: 8, 2, 6, 4, 4 TB, el ejemplo del material) y un deslizador de discos con $(n-1)/n$.
- **Unidades**: UD3 §7.1 a §7.3 (`arq3` p.17-18; `arq3diapo` p.41-43). La paridad XOR no está en el material (solo "paridad distribuida"): se dice y se explica en la página.
- **Prerrequisitos**: "Álgebra booleana y puertas lógicas" (de esta lista, XOR), "Binario y otras bases", "Fracciones, decimales y porcentajes".
- **Python y R**: el reparto en franjas (striping) de una lista de bytes, la paridad como XOR acumulado con un bucle y la reconstrucción de un disco ausente, más la capacidad útil de cada nivel; cierre comparando con `np.bitwise_xor.reduce` en Python y con `Reduce(bitwXor, ...)` en R.

### 12. CPU o GPU: SIMD, roofline y energía
- **Qué se ve**: por qué la GPU gana en unas cargas y pierde en otras, con el modelo roofline y la ley de Amdahl corregida por el rendimiento de cada núcleo.
- **Imagen central**: una cuadrícula de carriles donde una sola instrucción se aplica a una fila entera (SIMD) y un "if" en el que algunos carriles toman la rama contraria obliga a repetir el paso (divergencia de warp de 32 carriles); un gráfico roofline (ejes logarítmicos) con el techo de cómputo y la rampa de ancho de banda de cada dispositivo (los datos de la Tabla 1 del ejercicio) y un punto arrastrable (la intensidad aritmética de una carga) que muestra cuál techo la limita y el punto de cruce (30 y ≈ 81 FLOPs/byte); un deslizador de $p$ y del factor $r$ para el speedup real; las cinco cargas A a E y la decisión.
- **Unidades**: UD1 §2.3 y §6 (`arq1` p.12, p.22-24, Tabla 2 y Tabla 4; `arq1diapo` p.17, p.42-46); `arq2ej` completo (p.2-9, tareas 1 a 9; `arq2enun`). Señalar las erratas del ejercicio (pico de la CPU, ninguna carga es compute-bound, comparación contra un núcleo, `intensidad` sin usar).
- **Prerrequisitos**: "Frecuencia, IPC y ley de Amdahl", "Jerarquía de memoria y localidad" (de esta lista), "Logaritmos", "Funciones a trozos" (el roofline es un `min`).
- **Python y R**: `speedup`, `speedup_heterogeneo`, `roofline` y `decidir_arquitectura` del ejercicio con bucles sobre las cinco cargas, más un contador de pasos por divergencia sobre 32 carriles; reproducir los resultados del material (A 49,85 y 16,44; A 25.200 GFLOPS en la GPU; la GPU 8,47 veces más eficiente) y cerrar con la corrección de las erratas. En R, `pmin` para el `min`.

### 13. Entrenamiento limitado por E/S
- **Qué se ve**: cuándo una GPU cara espera datos, y qué cambia con un SSD NVMe, RAID, DMA o precarga (prefetching).
- **Imagen central**: una cinta de lotes: cada lote se lee del almacenamiento y luego se calcula en la GPU; deslizadores del tamaño del dataset, de la velocidad del almacenamiento (HDD con lecturas aleatorias del shuffle, SATA, NVMe), de los discos en RAID 0 y del tiempo de cálculo por lote; un interruptor de prefetching que solapa la lectura del lote siguiente con el cálculo del actual; un indicador de utilización de la GPU y un letrero "limitado por E/S" o "limitado por cómputo" que cambia en vivo, con el mismo esquema que el roofline.
- **Unidades**: UD3 §7.4 (`arq3` p.18-19; `arq3diapo` p.43-45), con §5.4 (`arq3` p.13-14, Tabla 5; `arq3diapo` p.29-31) y §6.2 (`arq3` p.14-15). El material no trae cifras de entrenamiento: los números son de la página y se declaran como ilustrativos.
- **Prerrequisitos**: "E/S programada, interrupciones y DMA", "Disco duro y SSD", "RAID y paridad", "CPU o GPU: SIMD, roofline y energía" (todas de esta lista).
- **Python y R**: una simulación de épocas con un bucle sobre los lotes (tiempo de lectura y de cálculo por lote, con y sin precarga) que da el tiempo por época y la utilización de la GPU, más el efecto de $n$ discos en RAID 0; cierre comparando con la forma cerrada (suma frente a máximo de los dos tiempos por lote).
