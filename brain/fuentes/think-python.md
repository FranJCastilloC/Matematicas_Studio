# Mapa de citas: Downey, Think Python, 2a edicion (O'Reilly)

Archivo: `/Users/franciscocastillo/Desktop/Libros/Think_Python_1748353929.pdf` (290 paginas PDF; la PDF 11 esta en blanco; la PDF 41, 95, 119, 145, 185, 207, 243 y 255 son reversos en blanco antes de un capitulo nuevo).
Correspondencia verificada: **pagina PDF N = pagina impresa N + 21** para el cuerpo del libro (capitulos 1 a 21 e indice). Comprobado en PDF 22 = p. 1 (apertura del cap. 1), PDF 49 = p. 28 (Stack Diagrams), PDF 97 = p. 76 (Figure 7-1), PDF 136 = p. 115 (Aliasing), PDF 276 = p. 255 (Figure 21-1); ademas, el pie de pagina de cada hoja entre la PDF 22 y la PDF 289 se comparo con ese desfase por programa y coincide en todas las paginas con texto (las 8 hojas en blanco no llevan numero). Las paginas preliminares usan numeracion romana: numero romano = PDF - 1: PDF 12 = xi (inicio del Preface), PDF 21 = xx; el indice general ocupa las PDF 4-10 (iii a ix). Las 250 entradas del indice general (21 capitulos, secciones y el Index) se comprobaron una por una: el encabezado aparece como linea propia en la pagina PDF que resulta de sumar 21 a la impresa.
Edicion: *Think Python*, 2nd edition (O'Reilly Media), Python 3 (los ejemplos muestran el prompt de Python 3.4). Un solo capitulo (el 21, "Analysis of Algorithms") se presenta como apendice: es un extracto de *Think Complexity*. Las citas de abajo usan "PDF / impresa": para el chip de la biblioteca, `data-pag` es la PDF y `data-pimp` la impresa.
Los codigos (por ejemplo `Figure 3-1`) son los del libro. Lo que va en **negrita** es una figura o diagrama.

## Tabla por tema y subseccion

| Tema | PDF | Impresa | Seccion | Notas |
|---|---|---|---|---|
| Prefacio: historia del libro y quien lo usa | 12-13 | xi-xii | Preface | The Strange History of This Book: de Java a Python en 1999; objetivo del libro; la 2a edicion pasa todo a Python 3 y agrega secciones y ejercicios; sitio `thinkpython2.com` con el codigo |
| Olin College y convenciones tipograficas | 14 | xiii | Preface | nota sobre Olin College; convenciones (cursiva, negrita, ancho constante) y como usar los ejemplos de codigo |
| Como contactar a la editorial | 15 | xiv | Preface | Safari Books Online y datos de contacto de O'Reilly |
| Agradecimientos y lista de contribuyentes | 16-21 | xv-xx | Preface (Acknowledgments, Contributor List) | lista de personas que corrigieron el libro; la PDF 20-21 menciona cambios por Python 3 (por ejemplo un keyword nuevo, `cmp`); no tiene contenido tecnico |
| Cap. 1: apertura | 22 | 1 | Cap. 1: The Way of the Program (apertura) | pensar como cientifico de la computacion: lenguajes formales, diseno, observacion |
| Que es un programa | 22-23 | 1-2 | Cap. 1: What Is a Program? | secuencia de instrucciones; las cinco operaciones basicas: entrada, salida, matematicas, ejecucion condicional, repeticion |
| Ejecutar Python | 23-24 | 2-3 | Cap. 1: Running Python | el interprete y el prompt `>>>`; versiones Python 2 y Python 3 (el libro usa 3; recomienda PythonAnywhere si no tienes Python) |
| El primer programa | 24 | 3 | Cap. 1: The First Program | `print('Hello, World!')`; el parentesis de Python 3 frente a `print 'Hello, World!'` de Python 2 (que aqui da error) |
| Operadores aritmeticos | 24-25 | 3-4 | Cap. 1: Arithmetic Operators | `+ - * / **` en el interprete; `6 ^ 2` es XOR bit a bit, no potencia (trampa clasica) |
| Valores y tipos | 25-26 | 4-5 | Cap. 1: Values and Types | int, float, str con `type()`; `'2'` no es 2; `1,000,000` no es un entero sino una tupla de tres numeros |
| Lenguajes formales y naturales | 26-28 | 5-7 | Cap. 1: Formal and Natural Languages | tokens y estructura (sintaxis), significado (semantica); ambiguedad y literalidad de los lenguajes formales |
| Depurar: primera vista | 28 | 7 | Cap. 1: Debugging | origen de la palabra bug y de depurar; el estado de animo del programador; la clasificacion de errores llega en el cap. 2 y se retoma en el cap. 20 |
| Glosario cap. 1 | 29-30 | 8-9 | Cap. 1: Glossary | problem solving, high-level/low-level language, interpreter, compile, source code, prompt, bug, syntax, semantic error |
| Ejercicios cap. 1 | 30-31 | 9-10 | Cap. 1: Exercises | 1-1 pide practicar en el interprete (errores a proposito); 1-2 usarlo como calculadora (segundos, millas por hora, ritmo de carrera) |
| Cap. 2: apertura | 32 | 11 | Cap. 2: Variables, Expressions and Statements (apertura) | una variable es un nombre que se refiere a un valor |
| Sentencias de asignacion | 32 | 11 | Cap. 2: Assignment Statements | `message = ...`, `n = 17`, `pi = 3.14...`; **Figure 2-1: diagrama de estado**, cada nombre con una flecha a su valor |
| Nombres de variables | 33 | 12 | Cap. 2: Variable Names | reglas: letras, digitos y `_`, sin empezar por digito; ejemplos ilegales `76trombones`, `more@`, `class`; lista de las palabras clave de Python 3 |
| Expresiones y sentencias | 33-34 | 12-13 | Cap. 2: Expressions and Statements | una expresion produce un valor, una sentencia hace algo; diferencia entre interprete y script |
| Modo script | 34-35 | 13-14 | Cap. 2: Script Mode | archivos `.py`; en un script una expresion suelta no imprime nada, hay que usar `print` |
| Orden de las operaciones | 35-36 | 14-15 | Cap. 2: Order of Operations | PEMDAS; `**` antes que `*`; la division asociada a la izquierda |
| Operaciones con cadenas | 36 | 15 | Cap. 2: String Operations | `+` concatena y `*` repite; `first + second`; no se puede restar ni dividir cadenas |
| Comentarios | 36-37 | 15-16 | Cap. 2: Comments | `#` hasta el fin de linea; comentar el por que, no el que |
| Depurar: tres tipos de error | 37-38 | 16-17 | Cap. 2: Debugging | sintaxis, ejecucion (runtime) y semantica; los mensajes de error y que hacer con cada uno |
| Glosario cap. 2 | 38-39 | 17-18 | Cap. 2: Glossary | variable, assignment, state diagram, keyword, operand, expression, statement, evaluate, script, comment |
| Ejercicios cap. 2 | 39-40 | 18-19 | Cap. 2: Exercises | 2-1 probar errores a proposito (`x = 5 = 6`, olvidar el punto y coma, etc.); 2-2 volumen de una esfera, costo de libros, hora de regreso a casa |
| Cap. 3: apertura | 42 | 21 | Cap. 3: Functions (apertura) | funciones: llamar, definir, composicion y diagramas de pila |
| Llamadas a funciones | 42-43 | 21-22 | Cap. 3: Function Calls | `type(42)`, `int('32')`, `int(3.99999)` trunca (no redondea), `float`, `str`; `int('Hello')` da ValueError |
| Funciones matematicas | 43-44 | 22-23 | Cap. 3: Math Functions | `import math` y la notacion de punto; `math.sin(radians)`, `math.sqrt`; modulos como objetos |
| Composicion | 44 | 23 | Cap. 3: Composition | una expresion puede ser argumento de otra; el lado izquierdo de una asignacion debe ser un nombre de variable |
| Crear funciones nuevas | 44-46 | 23-25 | Cap. 3: Adding New Functions | `def print_lyrics():` (cabecera y cuerpo con sangria); `print(print_lyrics)` muestra el objeto funcion; `repeat_lyrics` llama a otra funcion |
| Definiciones y usos | 46 | 25 | Cap. 3: Definitions and Uses | hay que definir antes de llamar; el programa mezcla definiciones y llamadas |
| Flujo de ejecucion | 46-47 | 25-26 | Cap. 3: Flow of Execution | se ejecuta de arriba abajo; una definicion no ejecuta el cuerpo; la llamada salta al cuerpo y vuelve |
| Parametros y argumentos | 47-48 | 26-27 | Cap. 3: Parameters and Arguments | `print_twice(bruce)` recibe `'Spam'`, `42` o `math.pi`; `cat_twice(part1, part2)`; el nombre del argumento no tiene que ver con el del parametro |
| Variables locales | 48 | 27 | Cap. 3: Variables and Parameters Are Local | las variables creadas dentro de una funcion mueren con ella; `cat` fuera de `cat_twice` da NameError |
| Diagramas de pila | 49-50 | 28-29 | Cap. 3: Stack Diagrams | cada funcion es un marco (frame) con sus parametros y variables; **Figure 3-1: diagrama de pila** con `__main__`, `cat_twice` y `print_twice`; ademas el traceback que sale de esa pila |
| Funciones con y sin valor de retorno | 50 | 29 | Cap. 3: Fruitful Functions and Void Functions | `math.sqrt(5)` devuelve un valor; `print_twice` es void y devuelve `None` (`type(None)`) |
| Para que sirven las funciones | 51 | 30 | Cap. 3: Why Functions? | nombrar bloques, eliminar repeticion, depurar por partes, reutilizar |
| Depurar: sangria y espacios | 51 | 30 | Cap. 3: Debugging | depurar como trabajo de detective y como ciencia experimental (hipotesis, prueba, ajuste) |
| Glosario cap. 3 | 52-53 | 31-32 | Cap. 3: Glossary | function, function definition, header, body, parameter, argument, local variable, stack diagram, frame, traceback |
| Ejercicios cap. 3 | 53-55 | 32-34 | Cap. 3: Exercises | 3-1 `right_justify`; 3-2 `do_twice(f)` con un objeto funcion; 3-3 dibujar una cuadricula con solo lo visto hasta aqui |
| Cap. 4: apertura | 56 | 35 | Cap. 4: Case Study: Interface Design (apertura) | caso de estudio con el modulo `turtle`: encapsular, generalizar, refactorizar |
| El modulo turtle | 56-57 | 35-36 | Cap. 4: The turtle Module | `import turtle`, `bob = turtle.Turtle()`, `bob.fd(100)`, `bob.lt(90)`, `turtle.mainloop()`; PythonAnywhere no corre turtle |
| Repeticion simple | 58 | 37 | Cap. 4: Simple Repetition | `for i in range(4):` para el cuadrado; la sentencia `for` y el cuerpo con sangria |
| Ejercicios guiados de TurtleWorld | 59 | 38 | Cap. 4: Exercises | lista sin numerar: `square`, `square(t, length)`, `polygon`, `circle`, `arc`; sirven de borrador del resto del capitulo |
| Encapsulacion | 59-60 | 38-39 | Cap. 4: Encapsulation | envolver un fragmento en una funcion: `def square(t)` |
| Generalizacion | 60-61 | 39-40 | Cap. 4: Generalization | anadir parametros: `square(t, length)`, `polygon(t, n, length)`; argumentos por palabra clave (`length=70`) |
| Diseno de la interfaz | 61-62 | 40-41 | Cap. 4: Interface Design | la interfaz de `circle(t, r)` y `arc(t, r, angle)` usa `math.pi` y el numero de lados; `polyline` como pieza comun |
| Refactorizacion | 62-63 | 41-42 | Cap. 4: Refactoring | reorganizar `polyline`, `arc`, `circle` sin cambiar lo que hacen para eliminar duplicado |
| Plan de desarrollo | 63 | 42 | Cap. 4: A Development Plan | escribir un programa corto sin funciones, encapsular, generalizar, repetir; cuando conviene refactorizar |
| Docstring | 64 | 43 | Cap. 4: docstring | cadena entre `"""` al inicio de la funcion: que hace, que parametros recibe, precondiciones |
| Depurar: interfaz y precondiciones | 64 | 43 | Cap. 4: Debugging | precondiciones (lo que debe cumplirse al llamar) y postcondiciones (lo que la funcion garantiza); usar `assert` mas adelante |
| Glosario cap. 4 | 65 | 44 | Cap. 4: Glossary | instance, loop, encapsulation, generalization, keyword argument, interface, refactoring, development plan, docstring, precondition, postcondition |
| Ejercicios cap. 4 | 65-67 | 44-46 | Cap. 4: Exercises | 4-1 leer `polygon.py` (funciones del cap.); 4-2 flores (**Figure 4-1: flores de tortuga**); 4-3 pies (**Figure 4-2: porciones de pizza de tortuga**); 4-4 letras del alfabeto con tortuga; 4-5 espiral de Arquimedes |
| Cap. 5: apertura | 68 | 47 | Cap. 5: Conditionals and Recursion (apertura) | `//`, `%`, booleanos, `if`, recursion y entrada de teclado |
| Division entera y modulo | 68-69 | 47-48 | Cap. 5: Floor Division and Modulus | `minutes // 60` y `minutes % 60` (105 minutos = 1 h 45 min); `x % 10` extrae el ultimo digito |
| Expresiones booleanas | 69 | 48 | Cap. 5: Boolean Expressions | `==`, `!=`, `>`, `<`, `>=`, `<=`; tipo `bool` (`True`/`False`); error comun `=` frente a `==` |
| Operadores logicos | 70 | 49 | Cap. 5: Logical Operators | `and`, `or`, `not`; cualquier numero distinto de cero cuenta como `True` (`42 and True`) |
| Ejecucion condicional | 70 | 49 | Cap. 5: Conditional Execution | `if x > 0:` con cuerpo con sangria; sentencias compuestas; `pass` como marcador |
| Ejecucion alternativa | 70-71 | 49-50 | Cap. 5: Alternative Execution | `if` / `else`; las dos ramas del flujo de ejecucion (`x % 2 == 0`) |
| Condicionales encadenados | 71 | 50 | Cap. 5: Chained Conditionals | `if` / `elif` / `else`; se ejecuta exactamente una rama |
| Condicionales anidados | 71-72 | 50-51 | Cap. 5: Nested Conditionals | un `if` dentro de otro; conviene simplificar con operadores logicos |
| Recursion | 72-73 | 51-52 | Cap. 5: Recursion | una funcion que se llama a si misma: `countdown(n)` y `print_n(s, n)`; caso base |
| Diagramas de pila de funciones recursivas | 74 | 53 | Cap. 5: Stack Diagrams for Recursive Functions | **Figure 5-1: pila de `countdown(3)`**, varios marcos `countdown` con distinto `n` a la vez; el marco con `n=0` es el caso base |
| Recursion infinita | 74-75 | 53-54 | Cap. 5: Infinite Recursion | `def recurse(): recurse()` produce `RuntimeError: Maximum recursion depth exceeded`; falta el caso base |
| Entrada por teclado | 75-76 | 54-55 | Cap. 5: Keyboard Input | `input()` devuelve siempre una cadena; `int(speed)` falla con ValueError si no es numero |
| Depurar: lectura del traceback | 76-77 | 55-56 | Cap. 5: Debugging | que parte del mensaje de error leer primero (tipo y lugar); errores de espacios en blanco; el error puede estar antes de la linea que senala el mensaje |
| Glosario cap. 5 | 77-78 | 56-57 | Cap. 5: Glossary | floor division, modulus, boolean expression, relational operator, logical operator, conditional statement, condition, compound statement, branch, chained conditional, nested conditional, recursion, base case, infinite recursion |
| Ejercicios cap. 5 | 78-81 | 57-60 | Cap. 5: Exercises | 5-1 el modulo `time` y la hora; 5-2 Ultimo teorema de Fermat (`check_fermat`); 5-3 desigualdad triangular con tres palillos; 5-4 y 5-5 leer un programa y dibujar su pila; 5-6 curva de Koch recursiva (**Figure 5-2: curva de Koch**) |
| Cap. 6: apertura | 82 | 61 | Cap. 6: Fruitful Functions (apertura) | funciones que devuelven valores, desarrollo incremental, recursion mas profunda |
| Valores de retorno | 82-83 | 61-62 | Cap. 6: Return Values | `return` con una expresion (`area(radius)`); `return` en varias ramas; codigo muerto despues de un `return`; que todo camino devuelva algo (`absolute_value(0)` devuelve `None` si falta el caso) |
| Desarrollo incremental | 83-85 | 62-64 | Cap. 6: Incremental Development | `distance(x1, y1, x2, y2)` construida por pasos con un esqueleto que devuelve `0.0`; andamiaje (scaffolding) y variables temporales |
| Composicion de funciones | 85-86 | 64-65 | Cap. 6: Composition | `circle_area(xc, yc, xp, yp)` llama a `area(distance(...))` |
| Funciones booleanas | 86-87 | 65-66 | Cap. 6: Boolean Functions | `is_divisible(x, y)`; devolver la comparacion directamente; nombres como pregunta (`is_`, `has_`) |
| Mas recursion | 87-89 | 66-68 | Cap. 6: More Recursion | `factorial(n)` paso a paso; **Figure 6-1: diagrama de pila de `factorial(3)`**; base `n == 0`; la Turing-completitud como nota historica |
| Acto de fe | 89 | 68 | Cap. 6: Leap of Faith | confiar en que la llamada recursiva es correcta en lugar de seguir todo el flujo |
| Otro ejemplo: Fibonacci | 89-90 | 68-69 | Cap. 6: One More Example | `fibonacci(n-1) + fibonacci(n-2)`; dos casos base; se retoma con memos en el cap. 11 |
| Comprobar tipos | 90-91 | 69-70 | Cap. 6: Checking Types | `factorial(1.5)` y `factorial(-2)` recursan sin fin; `isinstance(n, int)`; guardianes (guardians) que levantan errores |
| Depurar: dividir el problema | 91-92 | 70-71 | Cap. 6: Debugging | funciones como puntos de control: revisar precondicion de los argumentos y postcondicion; `print` de los argumentos al entrar y del valor devuelto al salir |
| Glosario cap. 6 | 92 | 71 | Cap. 6: Glossary | temporary variable, dead code, incremental development, scaffolding, guardian |
| Ejercicios cap. 6 | 93-94 | 72-73 | Cap. 6: Exercises | 6-1 pila de un programa con funciones `a`, `b`, `c`; 6-2 funcion de Ackermann; 6-3 palindromo recursivo con `first`, `last`, `middle`; 6-4 `is_power`; 6-5 maximo comun divisor |
| Cap. 7: apertura | 96 | 75 | Cap. 7: Iteration (apertura) | repeticion: reasignacion, `while`, `break`, raices cuadradas |
| Reasignacion | 96-97 | 75-76 | Cap. 7: Reassignment | `x = 5; x = 7`; `=` no es igualdad matematica (`a = 5; b = a; a = 3` deja `b` en 5); **Figure 7-1: diagrama de estado de la reasignacion** |
| Actualizacion de variables | 97 | 76 | Cap. 7: Updating Variables | `x = x + 1` requiere inicializar antes (NameError si no existe); incremento y decremento |
| La sentencia while | 98-99 | 77-78 | Cap. 7: The while Statement | `countdown(n)` con `while n > 0`; flujo de ejecucion; secuencia de Collatz (`sequence(n)`, `while n != 1`) sin garantia de terminar |
| break | 99-100 | 78-79 | Cap. 7: break | `while True:` con `break` y `input` hasta que el usuario escribe `done` |
| Raices cuadradas (Newton) | 100-101 | 79-80 | Cap. 7: Square Roots | `y = (x + a/x) / 2` repetido hasta converger; `a = 4`; se compara con `math.sqrt`; criterio con `abs` |
| Algoritmos | 102 | 81 | Cap. 7: Algorithms | definicion de algoritmo; la multiplicacion por el metodo de la escuela como proceso mecanico (aprendiz de dos digitos vs. proceso) |
| Depurar: bisectar el programa | 102-103 | 81-82 | Cap. 7: Debugging | depuracion por biseccion: se revisa la mitad del programa, luego la mitad de la mitad (unos seis pasos para 100 lineas) |
| Glosario cap. 7 | 103 | 82 | Cap. 7: Glossary | reassignment, update, initialization, increment, decrement, iteration, infinite loop, algorithm |
| Ejercicios cap. 7 | 103-105 | 82-84 | Cap. 7: Exercises | 7-1 `mysqrt` y tabla de comparacion con `math.sqrt`; 7-2 `eval` y bucle de lectura (`eval_loop`); 7-3 la serie de Ramanujan para 1/pi |
| Cap. 8: apertura | 106 | 85 | Cap. 8: Strings (apertura) | las cadenas son secuencias: indices, longitud, recorridos y rebanadas |
| Una cadena es una secuencia | 106-107 | 85-86 | Cap. 8: A String Is a Sequence | `fruit[1]` da `'a'`; indices desde 0; `fruit[1.5]` da TypeError |
| len | 107 | 86 | Cap. 8: len | `len(fruit)`; el ultimo caracter es `fruit[len(fruit)-1]` o `fruit[-1]`; IndexError si el indice se sale |
| Recorrido con for | 107-108 | 86-87 | Cap. 8: Traversal with a for Loop | `while index < len(fruit)` frente a `for letter in fruit`; concatenacion de prefijos en el ejemplo `prefixes` |
| Rebanadas de cadenas | 108-109 | 87-88 | Cap. 8: String Slices | `s[0:5]`, `fruit[:3]`, `fruit[3:]`; **Figure 8-1: los indices apuntan entre los caracteres**; `fruit[3:3]` es vacia |
| Las cadenas son inmutables | 109-110 | 88-89 | Cap. 8: Strings Are Immutable | `greeting[0] = 'J'` da TypeError; se crea otra: `'J' + greeting[1:]` |
| Busqueda | 110 | 89 | Cap. 8: Searching | funcion `find(word, letter)` con `while`, devuelve `-1` si no encuentra |
| Bucles y conteo | 110-111 | 89-90 | Cap. 8: Looping and Counting | contador (`count = 0`) sobre `word`; patron contador; encapsular y generalizar |
| Metodos de cadenas | 111-112 | 90-91 | Cap. 8: String Methods | `word.upper()`, `word.find('a')`, `find` con inicio y fin; notacion de metodo frente a funcion |
| El operador in | 112 | 91 | Cap. 8: The in Operator | `'a' in 'banana'` es booleano; `in_both(word1, word2)` imprime letras comunes |
| Comparacion de cadenas | 113 | 92 | Cap. 8: String Comparison | `==`, `<`, `>`; las mayusculas van antes que las minusculas; normalizar con `lower()` |
| Depurar: indices | 113-115 | 92-94 | Cap. 8: Debugging | `is_reverse('pots', 'stop')` con IndexError; imprimir `i` y `j`; **Figure 8-2: diagrama de estado del marco de `is_reverse`** (la figura cae en la pagina siguiente a la mencion) |
| Glosario cap. 8 | 115-116 | 94-95 | Cap. 8: Glossary | object, sequence, item, index, slice, empty string, immutable, traverse, search, counter, invocation, optional argument |
| Ejercicios cap. 8 | 116-118 | 95-97 | Cap. 8: Exercises | 8-1 metodos de cadenas; 8-2 `count`; 8-3 rebanada con paso (`fruit[0:5:2]`, `[::-1]`); 8-4 funciones `any_lowercase1..5` para cazar el error; 8-5 cifrado Cesar con `ord`/`chr` y `rotate_word` |
| Cap. 9: apertura | 120 | 99 | Cap. 9: Case Study: Word Play (apertura) | trabajar con la lista de palabras `words.txt` (rompecabezas de palabras) |
| Leer la lista de palabras | 120-121 | 99-100 | Cap. 9: Reading Word Lists | `fin = open('words.txt')`, `readline`, `strip`; recorrer el archivo con `for line in fin` |
| Ejercicios 9-1 a 9-6 | 121-122 | 100-101 | Cap. 9: Exercises | 9-1 palabras de mas de 20 letras; 9-2 `has_no_e` y el libro Gadsby; 9-3 `avoids`; 9-4 `uses_only`; 9-5 `uses_all`; 9-6 `is_abecedarian` |
| Busqueda | 122-123 | 101-102 | Cap. 9: Search | patron de busqueda con `for` y `return False` temprano; `has_no_e`, `avoids`, `uses_only`, `uses_all`, `is_abecedarian` (version recursiva y con `while`) |
| Bucles con indices | 124-125 | 103-104 | Cap. 9: Looping with Indices | `is_abecedarian` con `for`, recursiva y con `while` sobre indices; `is_palindrome(word)` con `while i<j` y reutilizando `is_reverse` del cap. 8 |
| Depurar: probar programas | 125 | 104 | Cap. 9: Debugging | probar con casos pequenos y conocidos; probar tambien con la lista completa |
| Glosario cap. 9 | 126 | 105 | Cap. 9: Glossary | file object, reduction to a previously solved problem, special case |
| Ejercicios 9-7 a 9-9 | 126-127 | 105-106 | Cap. 9: Exercises | 9-7 a 9-9 son tres Car Talk Puzzlers resueltos por busqueda sobre la lista de palabras (tres letras dobles seguidas, odometro con palindromos, edades con digitos invertidos) |
| Cap. 10: apertura | 128 | 107 | Cap. 10: Lists (apertura) | listas como secuencias mutables; aliasing; map, filter, reduce |
| Una lista es una secuencia | 128 | 107 | Cap. 10: A List Is a Sequence | `[10, 20, 30]`, elementos de cualquier tipo, listas anidadas, `[]` vacia |
| Las listas son mutables | 129-130 | 108-109 | Cap. 10: Lists Are Mutable | `numbers[1] = 5` cambia el elemento; **Figure 10-1: diagrama de estado de `cheeses`, `numbers` y `empty`**; un indice fuera de rango da IndexError; el operador `in` |
| Recorrer una lista | 130 | 109 | Cap. 10: Traversing a List | `for cheese in cheeses`; `for i in range(len(numbers))` para modificar; un `for` sobre `[]` no ejecuta nada |
| Operaciones con listas | 131 | 110 | Cap. 10: List Operations | `+` concatena, `*` repite (`[0] * 4`, `[1, 2, 3] * 3`) |
| Rebanadas de listas | 131 | 110 | Cap. 10: List Slices | `t[1:3]`, `t[:]` copia, rebanada en el lado izquierdo (`t[1:3] = ['x', 'y']`) |
| Metodos de listas | 132 | 111 | Cap. 10: List Methods | `append`, `extend`, `sort`; casi todos devuelven `None` (`t = t.sort()` es un error tipico) |
| Map, filter y reduce | 132-133 | 111-112 | Cap. 10: Map, Filter and Reduce | `sum(t)` como reduce; `capitalize_all` como map; `only_upper` como filter, todo con acumulador y bucles (no se usan las funciones integradas `map`/`filter`) |
| Borrar elementos | 134 | 113 | Cap. 10: Deleting Elements | `pop(i)`, `del t[1]`, `remove(x)`, `del t[1:5]` |
| Listas y cadenas | 134-135 | 113-114 | Cap. 10: Lists and Strings | `list('spam')`, `s.split()`, `s.split('-')`, `'-'.join(t)` |
| Objetos y valores | 135-136 | 114-115 | Cap. 10: Objects and Values | `a = 'banana'; b = 'banana'`: **Figure 10-2: dos posibles estados** (mismo objeto o dos); **Figure 10-3: listas equivalentes pero no identicas**; `is` frente a `==` |
| Aliasing (alias) | 136-137 | 115-116 | Cap. 10: Aliasing | **Figure 10-4: `b = a` hace que dos nombres apunten a la misma lista**; `b[0] = 42` cambia a `a`; recomendacion de evitarlo con objetos mutables |
| Listas como argumentos | 137-139 | 116-118 | Cap. 10: List Arguments | `delete_head(t)` modifica la lista del llamador (**Figure 10-5: diagrama de pila con la lista compartida entre dos marcos**); `append` devuelve `None`, `+` crea una lista nueva; `bad_delete_head` con `t = t[1:]` no cambia al llamador; `tail` |
| Depurar listas | 139-140 | 118-119 | Cap. 10: Debugging | tres reglas: no reasignar con metodos que devuelven `None`, copiar antes de `sort` (`t[:]` o `sorted`), evitar aliasing; `sort` frente a `sorted` |
| Glosario cap. 10 | 140-141 | 119-120 | Cap. 10: Glossary | list, element, nested list, accumulator, augmented assignment, reduce, map, filter, object, equivalent, identical, reference, aliasing, delimiter |
| Ejercicios cap. 10 | 141-144 | 120-123 | Cap. 10: Exercises | 10-1 `nested_sum`; 10-2 `cumsum`; 10-3 `middle`; 10-4 `chop`; 10-5 `is_sorted`; 10-6 `is_anagram`; 10-7 `has_duplicates`; 10-8 paradoja del cumpleanos con `random`; 10-9 construir la lista con `append` y con `+`; 10-10 busqueda por biseccion (`bisect`); 10-11 pares inversos; 10-12 palabras que se entrelazan |
| Cap. 11: apertura | 146 | 125 | Cap. 11: Dictionaries (apertura) | diccionarios: mapeos clave-valor y su uso como contadores |
| Un diccionario es un mapeo | 146-148 | 125-127 | Cap. 11: A Dictionary Is a Mapping | `eng2sp = dict()`, `eng2sp['one'] = 'uno'`, literal `{'one': 'uno', ...}`; `KeyError`; `len`; `in` solo mira claves; `values()` |
| Diccionario como coleccion de contadores | 148-149 | 127-128 | Cap. 11: Dictionary as a Collection of Counters | `histogram(s)` cuenta letras (`brontosaurus`); `h.get('a', 0)`; el patron histograma |
| Bucles y diccionarios | 149-150 | 128-129 | Cap. 11: Looping and Dictionaries | `for c in h` recorre claves; `print_hist(h)`; `for key in sorted(h)` para ordenar |
| Busqueda inversa | 150-151 | 129-130 | Cap. 11: Reverse Lookup | `reverse_lookup(d, v)` es lineal; `raise LookupError(...)` cuando no hay valor |
| Diccionarios y listas | 151-152 | 130-131 | Cap. 11: Dictionaries and Lists | `invert_dict(d)` guarda listas como valores; **Figure 11-1: diagrama de estado de un diccionario invertido**; las listas pueden ser valores pero no claves (TypeError por no ser hashable) |
| Memos (memoizacion) | 152-154 | 131-133 | Cap. 11: Memos | `fibonacci(n)` con diccionario `known`; **Figure 11-2: grafo de llamadas de `fibonacci(4)`**; explica por que la version recursiva sin memo es exponencial |
| Variables globales | 154-155 | 133-134 | Cap. 11: Global Variables | `global`; variables `been_called`, `count` y banderas; cuidado: reasignar vs. modificar un diccionario global (`example1..example5`) |
| Depurar estructuras grandes | 155-156 | 134-135 | Cap. 11: Debugging | reducir la entrada, resumir en lugar de imprimir todo, auto-verificaciones, dar formato a la salida (`pprint`) |
| Glosario cap. 11 | 156-157 | 135-136 | Cap. 11: Glossary | mapping, dictionary, key-value pair, item, key, value, implementation, hashtable, hash function, hashable, lookup, reverse lookup, raise statement, singleton, call graph, memo, global variable, flag, declaration |
| Ejercicios cap. 11 | 158-159 | 137-138 | Cap. 11: Exercises | 11-1 diccionario con `words.txt`; 11-2 `setdefault`; 11-3 memoizar Ackermann; 11-4 `has_duplicates` con diccionarios; 11-5 pares de rotacion; 11-6 palabras con pronunciacion (Car Talk) |
| Cap. 12: apertura | 160 | 139 | Cap. 12: Tuples (apertura) | tuplas: secuencias inmutables; asignacion de tuplas; `zip`, `enumerate`, `items` |
| Las tuplas son inmutables | 160-161 | 139-140 | Cap. 12: Tuples Are Immutable | `t = 'a', 'b', 'c'`, parentesis opcionales; `('a')` es una cadena, `('a',)` una tupla; `tuple('lupins')`; asignar a un elemento da TypeError; tuplas hashables |
| Asignacion de tuplas | 162 | 141 | Cap. 12: Tuple Assignment | `a, b = b, a` intercambia sin variable temporal; desempaquetar `uname, domain = addr.split('@')`; `ValueError` si no coinciden las cantidades |
| Tuplas como valores de retorno | 162-163 | 141-142 | Cap. 12: Tuples as Return Values | `divmod(7, 3)` devuelve `(2, 1)`; `min_max(t)` devuelve `min(t), max(t)` |
| Argumentos de longitud variable | 163-164 | 142-143 | Cap. 12: Variable-Length Argument Tuples | `def printall(*args)` reune argumentos en una tupla; `*` tambien dispersa (scatter): `divmod(*t)` |
| Listas y tuplas | 164-165 | 143-144 | Cap. 12: Lists and Tuples | `zip(s, t)` crea un objeto zip (iterador), se recorre con `for pair in zip(s, t)` o `list(zip(...))`; `has_match`; `enumerate` para obtener `(indice, elemento)` |
| Diccionarios y tuplas | 165-167 | 144-146 | Cap. 12: Dictionaries and Tuples | `d.items()`; `dict(zip('abc', range(3)))`; recorrer `for key, val in d.items()`; tuplas como claves de un directorio (`last, first`); **Figure 12-1: tupla `('Cleese', 'John')` con indices**; **Figure 12-2: directorio telefonico con tuplas como claves** |
| Secuencias de secuencias | 167-168 | 146-147 | Cap. 12: Sequences of Sequences | cuando usar cadena, lista o tupla; `sorted` y `reversed` con tuplas; claves compuestas |
| Depurar estructuras de datos | 168 | 147 | Cap. 12: Debugging | errores de forma (shape): `structshape` del autor (`structshape(t)`); tuplas de un solo elemento |
| Glosario cap. 12 | 169 | 148 | Cap. 12: Glossary | tuple, tuple assignment, gather, scatter, DSU (decorate, sort, undecorate), data structure, shape error |
| Ejercicios cap. 12 | 169-171 | 148-150 | Cap. 12: Exercises | 12-1 `most_frequent` (frecuencia de letras en varios idiomas); 12-2 conjuntos de anagramas; 12-3 pares de metatesis; 12-4 palabra mas larga que sigue siendo palabra al quitar letras (Car Talk) |
| Cap. 13: apertura | 172 | 151 | Cap. 13: Case Study: Data Structure Selection (apertura) | elegir estructuras de datos con analisis de texto (frecuencia y Markov) |
| Analisis de frecuencia de palabras | 172-173 | 151-152 | Cap. 13: Word Frequency Analysis | pasos: leer, partir en palabras, quitar puntuacion (`string.punctuation`), minusculas; ejercicios 13-1 (limpiar palabras), 13-2 (libro de Project Gutenberg), 13-3 (20 palabras mas usadas) y 13-4 (palabras que no estan en la lista) |
| Numeros aleatorios | 173-174 | 152-153 | Cap. 13: Random Numbers | `import random`; `random.random()`, `randint(5, 10)`, `choice(t)`; pseudoaleatorio y determinismo; ejercicio 13-5 `choose_from_hist` |
| Histograma de palabras | 174-175 | 153-154 | Cap. 13: Word Histogram | `process_file(filename)`, `process_line(line, hist)`, `total_words`, `different_words`; el histograma es un diccionario palabra a frecuencia |
| Palabras mas comunes | 176 | 155 | Cap. 13: Most Common Words | `most_common(hist)` ordena tuplas `(freq, word)` con `sort(reverse=True)`; patron decorar-ordenar-desdecorar |
| Parametros opcionales | 176-177 | 155-156 | Cap. 13: Optional Parameters | `print_most_common(hist, num=10)`; valores por defecto; reglas del argumento por defecto |
| Resta de diccionarios | 177-178 | 156-157 | Cap. 13: Dictionary Subtraction | `subtract(d1, d2)` palabras del libro que no estan en la lista; luego la version con `set` (ejercicio 13-6) |
| Palabras aleatorias | 178-179 | 157-158 | Cap. 13: Random Words | `random_word(h)` eligiendo de una lista con repeticiones segun la frecuencia; ejercicio 13-7 |
| Analisis de Markov | 179-180 | 158-159 | Cap. 13: Markov Analysis | prefijo de n palabras y sufijos posibles; `shift(prefix, word)`; ejercicio 13-8 genera texto aleatorio |
| Estructuras de datos | 180-182 | 159-161 | Cap. 13: Data Structures | almacenamiento vs. implementacion; comparar listas de tuplas, diccionarios de listas; coste del tiempo frente a la complejidad |
| Depurar: comprobaciones | 182-183 | 161-162 | Cap. 13: Debugging | cinco tacticas: leer, ejecutar, rumiar, depurar con el pato de goma (`rubber duck`) y retroceder |
| Glosario cap. 13 | 183-184 | 162-163 | Cap. 13: Glossary | deterministic, pseudorandom, default value, override, benchmarking |
| Ejercicios cap. 13 (resto) | 184 | 163 | Cap. 13: Exercises | 13-9 ley de Zipf: rango frente a frecuencia en escala logaritmica (usa `matplotlib`) |
| Cap. 14: apertura | 186 | 165 | Cap. 14: Files (apertura) | archivos, excepciones, bases de datos, pickle, pipes y modulos |
| Persistencia | 186 | 165 | Cap. 14: Persistence | programas transitorios y persistentes; guardar en disco para sobrevivir al programa |
| Leer y escribir | 187 | 166 | Cap. 14: Reading and Writing | `open('output.txt', 'w')`, `fout.write(line1)`, `fout.close()`; el libro no usa `with open` (cierra a mano) |
| Operador de formato | 187-188 | 166-167 | Cap. 14: Format Operator | `'%d' % camels`, `'In %d years I have spotted %g %s.' % (3, 0.1, 'camels')`; TypeError si faltan valores o el tipo no coincide; no usa f-strings ni `.format` |
| Nombres y rutas | 188-189 | 167-168 | Cap. 14: Filenames and Paths | `os.getcwd()`, `os.path.abspath`, `os.path.exists`, `os.path.isdir`, `os.listdir`; la funcion recursiva `walk(dirname)` |
| Capturar excepciones | 190 | 169 | Cap. 14: Catching Exceptions | `open('bad_file')` da IOError; `PermissionError` e `IsADirectoryError`; `try:` / `except:` con mensaje `'Something went wrong.'` |
| Bases de datos | 190-191 | 169-170 | Cap. 14: Databases | modulo `dbm`: `dbm.open('captions', 'c')`; funciona como un diccionario en disco; claves y valores son bytes |
| Pickling | 191-192 | 170-171 | Cap. 14: Pickling | `pickle.dumps(t1)` / `pickle.loads(s)`: `t1 == t2` pero `t1 is t2` es `False`; guardar objetos como cadenas |
| Pipes | 192-193 | 171-172 | Cap. 14: Pipes | `os.popen('ls -l')`, calcular `md5sum` de un archivo; `fp.close()` devuelve el estado |
| Escribir modulos | 193-194 | 172-173 | Cap. 14: Writing Modules | `import wc`; `if __name__ == '__main__'` para no ejecutar las pruebas al importar; reload |
| Depurar: espacios en blanco | 194-195 | 173-174 | Cap. 14: Debugging | `repr` para ver `\t`, `\n`; los distintos finales de linea |
| Glosario cap. 14 | 195-196 | 174-175 | Cap. 14: Glossary | persistent, format operator, format string, format sequence, text file, directory, path, relative path, absolute path, catch, database, bytes object, shell, pipe object |
| Ejercicios cap. 14 | 196-197 | 175-176 | Cap. 14: Exercises | 14-1 `sed` sobre archivos; 14-2 `shelve` con anagramas; 14-3 duplicados de MP3 con checksum y `os.walk`/pipes |
| Cap. 15: apertura | 198 | 177 | Cap. 15: Classes and Objects (apertura) | tipos definidos por el programador, atributos, copiado |
| Tipos definidos por el programador | 198-199 | 177-178 | Cap. 15: Programmer-Defined Types | `class Point:` y `blank = Point()`; instancias; `blank.x = 3.0`; el nombre de la clase se muestra como `<class '__main__.Point'>` |
| Atributos | 199-200 | 178-179 | Cap. 15: Attributes | notacion de punto; `blank.x`; **Figure 15-1: diagrama de objeto de `Point` con `x` e `y`**; `print_point(p)`; `distance = math.sqrt(blank.x**2 + blank.y**2)` |
| Rectangulos | 200-201 | 179-180 | Cap. 15: Rectangles | `class Rectangle` con `width`, `height`, `corner` (objeto dentro de objeto); `box.corner.x`; **Figure 15-2: diagrama de objeto con `corner` incrustado** |
| Instancias como valor de retorno | 202 | 181 | Cap. 15: Instances as Return Values | `find_center(rect)` devuelve un `Point` |
| Los objetos son mutables | 202 | 181 | Cap. 15: Objects Are Mutable | `grow_rectangle(rect, dwidth, dheight)` modifica `box`; los alias a objetos aparecen de nuevo |
| Copiar objetos | 203-204 | 182-183 | Cap. 15: Copying | `copy.copy(p1)` hace copia superficial (shallow); **Figure 15-3: dos `Rectangle` que comparten un mismo `corner`**; `copy.deepcopy(box)` copia tambien los objetos incrustados |
| Depurar objetos | 204-205 | 183-184 | Cap. 15: Debugging | `AttributeError` al leer un atributo inexistente (`p.z`); `type(p)`, `hasattr(p, 'x')`, `try/except AttributeError` |
| Glosario cap. 15 | 205-206 | 184-185 | Cap. 15: Glossary | class, class object, instance, instantiate, attribute, embedded object, shallow copy, deep copy, object diagram |
| Ejercicios cap. 15 | 206 | 185 | Cap. 15: Exercises | 15-1 clase `Circle` (centro y radio) y pertenencia de puntos; 15-2 `draw_rect` con `Turtle` |
| Cap. 16: apertura | 208 | 187 | Cap. 16: Classes and Functions (apertura) | funciones puras y modificadores sobre objetos `Time` |
| La clase Time | 208-209 | 187-188 | Cap. 16: Time | `class Time` con `hour`, `minute`, `second`; **Figure 16-1: diagrama de objeto de `start`**; `print_time`, `is_after` |
| Funciones puras | 209-210 | 188-189 | Cap. 16: Pure Functions | `add_time(t1, t2)` crea un objeto nuevo y no modifica los argumentos; error del acarreo de minutos y segundos |
| Modificadores | 210-211 | 189-190 | Cap. 16: Modifiers | `increment(time, seconds)` modifica el objeto; `time_to_int` / `int_to_time`; se puede escribir con funciones puras |
| Prototipado frente a planificacion | 211-212 | 190-191 | Cap. 16: Prototyping versus Planning | prototipo y parche frente a diseno planificado: pasar a segundos (base 60), `time_to_int`, `int_to_time` |
| Depurar: invariantes | 213 | 192 | Cap. 16: Debugging | `valid_time(time)`; invariantes y `assert` |
| Glosario cap. 16 | 213-214 | 192-193 | Cap. 16: Glossary | prototype and patch, designed development, pure function, modifier, functional programming style, invariant, assert statement |
| Ejercicios cap. 16 | 214-215 | 193-194 | Cap. 16: Exercises | 16-1 `mul_time`; 16-2 modulo `datetime` y la fecha de nacimiento |
| Cap. 17: apertura | 216 | 195 | Cap. 17: Classes and Methods (apertura) | metodos, `__init__`, `__str__`, sobrecarga de operadores, polimorfismo |
| Caracteristicas de programacion orientada a objetos | 216-217 | 195-196 | Cap. 17: Object-Oriented Features | objetos y metodos; un metodo es una funcion dentro de la clase; cambio de perspectiva: el objeto es el sujeto |
| Imprimir objetos | 217-218 | 196-197 | Cap. 17: Printing Objects | `print_time(time)` como funcion y luego `Time.print_time(start)`; primer parametro `self`; `start.print_time()` |
| Otro ejemplo | 219 | 198 | Cap. 17: Another Example | `increment(self, seconds)`, `start.increment(1337)`; argumentos opcionales; `end.increment(1337, 460)` da TypeError ("takes 2 positional arguments but 3 were given"); aclara que es un argumento posicional |
| Un ejemplo mas complicado | 219-220 | 198-199 | Cap. 17: A More Complicated Example | `is_after(self, other)`; `end.is_after(start)` |
| El metodo init | 220 | 199 | Cap. 17: The init Method | `def __init__(self, hour=0, minute=0, second=0)`; `Time()`, `Time(9)`, `Time(9, 45)` |
| El metodo __str__ | 221 | 200 | Cap. 17: The __str__ Method | `__str__` devuelve el texto de `print(time)`; formato `'%.2d:%.2d:%.2d'` |
| Sobrecarga de operadores | 221-222 | 200-201 | Cap. 17: Operator Overloading | `__add__(self, other)` para usar `+` con objetos `Time` |
| Despacho segun el tipo | 222-223 | 201-202 | Cap. 17: Type-Based Dispatch | `__add__` con `isinstance(other, Time)` para sumar un `Time` o un entero |
| Polimorfismo | 223-224 | 202-203 | Cap. 17: Polymorphism | `__radd__` (`print(1337 + start)`); `sum([t1, t2, t3])`; `histogram` funciona con cualquier secuencia (`spam, egg, ...`); funciones que sirven con varios tipos |
| Interfaz e implementacion | 224-225 | 203-204 | Cap. 17: Interface and Implementation | separar lo que ofrece una clase de como lo hace; cambiar la representacion (a segundos) sin romper a los clientes |
| Depurar: atributos y vars | 225 | 204 | Cap. 17: Debugging | inicializar todos los atributos en `__init__`; `vars(p)` devuelve un diccionario de atributos; `print_attributes(obj)` (con `getattr`) |
| Glosario cap. 17 | 225-226 | 204-205 | Cap. 17: Glossary | object-oriented language, object-oriented programming, method, subject, positional argument, keyword argument, init method, str method, operator overloading, type-based dispatch, polymorphic, information hiding |
| Ejercicios cap. 17 | 226-227 | 205-206 | Cap. 17: Exercises | 17-1 reescribir `Time` con un solo entero (segundos); 17-2 trampa clasica: clase `Kangaroo` con un atributo de lista como valor por defecto (la lista se comparte) |
| Cap. 18: apertura | 228 | 207 | Cap. 18: Inheritance (apertura) | herencia con cartas, mazos y manos |
| Objetos carta | 228-229 | 207-208 | Cap. 18: Card Objects | `class Card` con `suit` y `rank` como enteros; codificacion de palos (0 a 3) y rangos (1 a 13); `__init__(self, suit=0, rank=2)` |
| Atributos de clase | 229-231 | 208-210 | Cap. 18: Class Attributes | `Card.suit_names` y `Card.rank_names` fuera de los metodos; `__str__` de `Card`; **Figure 18-1: diagrama de objeto con `Card` y los atributos de clase** |
| Comparar cartas | 231-232 | 210-211 | Cap. 18: Comparing Cards | `__lt__(self, other)` con tuplas `(suit, rank)`; el orden de las cartas es parcial segun la regla del juego |
| Mazos | 232 | 211 | Cap. 18: Decks | `class Deck` con `cards`; `__init__` con dos `for` anidados (`range(4)`, `range(1, 14)`) |
| Imprimir el mazo | 232-233 | 211-212 | Cap. 18: Printing the Deck | `__str__` acumula cadenas con `res.append(str(card))` y `'\n'.join(res)` |
| Agregar, quitar, barajar y ordenar | 233-234 | 212-213 | Cap. 18: Add, Remove, Shuffle and Sort | `pop_card`, `add_card`, `shuffle` con `random.shuffle`; `sort` usa `__lt__` de `Card`; metodos que solo delegan se llaman metodos de ventanilla (veneer) |
| Herencia (la seccion) | 234-235 | 213-214 | Cap. 18: Inheritance | `class Hand(Deck)`: la clase hija hereda metodos de `Deck`; `Hand.__init__(self, label='')` sustituye al de la clase madre; `move_cards(self, hand, num)` |
| Diagramas de clases | 235-236 | 214-215 | Cap. 18: Class Diagrams | relaciones IS-A (herencia) y HAS-A (composicion) con multiplicidades; **Figure 18-2: diagrama de clases de `Card`, `Deck` y `Hand`** |
| Encapsulacion de datos | 236-238 | 215-217 | Cap. 18: Data Encapsulation | el programa de Markov reescrito con `class Markov` (`process_word`, `random_text`); `try/except KeyError`; prototipo, refactorizacion y encapsulacion de datos |
| Depurar herencia | 238-239 | 217-218 | Cap. 18: Debugging | `find_defining_class(obj, meth_name)` usando `type(obj).mro()`; que clase define cada metodo; `Hand.shuffle` viene de `Deck` |
| Glosario cap. 18 | 239-240 | 218-219 | Cap. 18: Glossary | encode, class attribute, instance attribute, veneer, inheritance, parent class, child class, IS-A relationship, HAS-A relationship, class diagram, multiplicity |
| Ejercicios cap. 18 | 240-242 | 219-221 | Cap. 18: Exercises | 18-1 diagrama de clases UML (`PingPongParent`, `Ping`, `Pong`); 18-2 `deal_hands` en `Deck`; 18-3 manos de poker (`PokerHand`, clasificacion y probabilidades) |
| Cap. 19: apertura | 244 | 223 | Cap. 19: The Goodies (apertura) | caracteristicas de Python para escribir menos codigo (opcional) |
| Expresiones condicionales | 244-245 | 223-224 | Cap. 19: Conditional Expressions | `return 1 if n == 0 else n * factorial(n-1)`; version sin `if` multilinea |
| Comprensiones de listas | 245-246 | 224-225 | Cap. 19: List Comprehensions | `[s for s in t if s.isupper()]` frente al bucle con `append`; map y filter en una linea |
| Expresiones generadoras | 246-247 | 225-226 | Cap. 19: Generator Expressions | `g = (x**2 for x in range(5))`; `next(g)`; `sum(x**2 for x in range(5))`; son iteradores perezosos |
| any y all | 247 | 226 | Cap. 19: any and all | `any([False, False, True])`; `any(letter == 't' for letter in 'monty')`; `avoids` con `not any(...)` |
| Conjuntos (set) | 247-249 | 226-228 | Cap. 19: Sets | `set(d1) - set(d2)` para `subtract`; `has_duplicates` con `set`; `uses_only` con `<=`; operaciones de conjunto |
| Counter | 249-250 | 228-229 | Cap. 19: Counters | `from collections import Counter`; `Counter('parrot')`; `most_common(3)` |
| defaultdict | 250-251 | 229-230 | Cap. 19: defaultdict | `defaultdict(list)` crea la clave al acceder; `all_anagrams` antes y despues |
| Tuplas con nombre | 251-252 | 230-231 | Cap. 19: Named Tuples | `namedtuple('Point', ['x', 'y'])`; `p.x`, `p[0]`, `x, y = p` |
| Reunir argumentos con nombre | 253 | 232 | Cap. 19: Gathering Keyword Args | `def printall(*args, **kwargs)`; `Point(**d)` dispersa un diccionario como argumentos |
| Glosario cap. 19 | 254 | 233 | Cap. 19: Glossary | conditional expression, list comprehension, generator expression, multiset, factory |
| Ejercicios cap. 19 | 254 | 233 | Cap. 19: Exercises | 19-1 `binomial_coeff` recursiva: reescribirla con expresiones condicionales anidadas |
| Cap. 20: apertura y clasificacion de errores | 256 | 235 | Cap. 20: Debugging (apertura) | tres clases de errores: sintaxis, ejecucion y semanticos; ejemplo del error de dos puntos faltantes y `maximum recursion depth exceeded` |
| Errores de sintaxis | 256-257 | 235-236 | Cap. 20: Syntax Errors | como leer el mensaje; falta de `:`, comillas sin cerrar, `=` en vez de `==`, sangria irregular; errores que aparecen en la linea siguiente |
| Cambios que no tienen efecto | 258 | 237 | Cap. 20: I keep making changes and it makes no difference | comprobar que corres el archivo que editas; guardar; provocar un error a proposito para ver si se ejecuta |
| Errores de ejecucion | 258 | 237 | Cap. 20: Runtime Errors | el programa arranca pero algo falla en marcha |
| El programa no hace nada | 258 | 237 | Cap. 20: My program does absolutely nothing | comprobar que la funcion principal se llama de verdad; ruta de ejecucion con `print` al entrar a cada funcion |
| El programa se cuelga | 259-260 | 238-239 | Cap. 20: My program hangs | subseccion "Infinite loop" (prints antes y despues del bucle, condicion de `while`), "Infinite recursion" (caso base, `RuntimeError: Maximum recursion depth exceeded`) y "Flow of execution" (prints de entrada y salida de cada funcion) |
| Me sale una excepcion | 260-261 | 239-240 | Cap. 20: When I run the program I get an exception | `NameError`, `TypeError`, `KeyError`, `AttributeError`, `IndexError`, `ValueError`; el traceback y el depurador `pdb`; como interpretar cada una (`pdb` se menciona al final) |
| Demasiados prints | 261-262 | 240-241 | Cap. 20: I added so many print statements I get inundated with output | simplificar la salida (quitar o fusionar prints) y simplificar el programa (reducir la entrada, limpiar el codigo, minimo caso de prueba) |
| Errores semanticos | 262 | 241 | Cap. 20: Semantic Errors | el programa corre sin mensajes de error pero hace algo distinto de lo esperado |
| El programa no hace lo esperado | 262-263 | 241-242 | Cap. 20: My program doesn’t work | preguntas guia; el modelo mental del programador; probar cada componente por separado |
| Una expresion enorme que no hace lo que espero | 263-264 | 242-243 | Cap. 20: I’ve got a big hairy expression and it doesn’t do what I expect | dividir con variables temporales; usar parentesis; ejemplo `y = x / 2 * math.pi` |
| Una funcion que no devuelve lo que espero | 264 | 243 | Cap. 20: I’ve got a function that doesn’t return what I expect | guardar el resultado en una variable temporal para imprimirlo antes del `return` (`count = self.hands[i].removeMatches()`) |
| Estoy atascado y necesito ayuda | 264 | 243 | Cap. 20: I’m really, really stuck and I need help | descansar, explicarlo en voz alta (a otra persona o a un objeto), reducir el problema, aprender del error |
| De verdad necesito ayuda | 264-265 | 243-244 | Cap. 20: No, I really need help | como pedir ayuda: mensaje de error, ultimo cambio, que has probado; despues pensar como encontrar el bug mas rapido |
| Cap. 21: apertura | 266-267 | 245-246 | Cap. 21: Analysis of Algorithms (apertura) | se presenta como apendice (extracto de `Think Complexity`, 2012); costo en tiempo y espacio |
| Orden de crecimiento | 267-269 | 246-248 | Cap. 21: Order of Growth | por que es dificil comparar algoritmos (hardware, datos, tamano): modelo de maquina, peor caso, funcion del tamano `n`; A proporcional a `n` y B a `n^2`; termino dominante y punto de cruce; **tabla de ordenes de crecimiento: O(1), O(log n), O(n), O(n log n), O(n^2), O(n^3), O(c^n)**; el logaritmo no depende de la base; ejercicio 21-1 (Big-Oh en Wikipedia) |
| Analisis de operaciones basicas de Python | 269-271 | 248-250 | Cap. 21: Analysis of Basic Python Operations | aritmetica e indexado en tiempo constante; bucles lineales; `+` y rebanadas; metodos de cadena lineales; `append` constante amortizado; `sort` en O(n log n); diccionarios constantes salvo `update`; ejercicio 21-2 (algoritmos de ordenamiento) |
| Analisis de algoritmos de busqueda | 271-272 | 250-251 | Cap. 21: Analysis of Search Algorithms | `in` y `find` son busqueda lineal; busqueda binaria O(log n) con secuencia ordenada (1 000 000 de elementos, unos 20 pasos); los diccionarios buscan en tiempo constante |
| Tablas hash | 272-276 | 251-255 | Cap. 21: Hashtables | mapa implementado con `LinearMap` (lista de tuplas, `get` lineal), luego `BetterMap` (100 `LinearMap`, `hash(k) % len(self.maps)`), luego `HashMap` con `resize` (duplica y rehace el hash); coste total de `n` adds = 2n - 2; **Figure 21-1: el costo de cada `add` como torres que se amortiguan**; claves mutables no son hashables |
| Glosario cap. 21 | 276-277 | 255-256 | Cap. 21: Glossary | analysis of algorithms, machine model, worst case, leading term, crossover point, order of growth, Big-Oh, linear, quadratic, search, hashtable |
| Indice analitico | 278-289 | 257-268 | Index | indice de terminos con paginas impresas (257 a 268); sirve para saltar de un termino (por ejemplo "aliasing", "stack diagram") a la pagina impresa; la PDF 290 (impresa 269) trae "About the Author" y el colofon, sin numero visible |

Filas de la tabla: 254.

## Busqueda rapida por concepto candidato

Las paginas van como PDF / impresa (PDF = impresa + 21). Las figuras en **negrita** son diagramas del libro.

| Candidato | Mejores paginas |
|---|---|
| Variables, tipos y expresiones | PDF 25-26 / impresa 4-5 (operadores, `^` es XOR, `type()`, int, float y str; `1,000,000` no es un entero); PDF 32 / 11 (asignacion, **Figure 2-1: diagrama de estado**); PDF 33-34 / 12-13 (nombres legales, palabras clave, expresion frente a sentencia); PDF 35-36 / 14-15 (orden de operaciones, `+` y `*` con cadenas); PDF 42 / 21 (`int`, `float`, `str`); PDF 96-97 / 75-76 (reasignacion y `x = x + 1`, **Figure 7-1: diagrama de estado**); PDF 37 / 16 (los tres tipos de error); ejercicio 2-2 en PDF 40 / 19 |
| Condicionales y booleanos | PDF 68 / 47 (`//` y `%`); PDF 69 / 48 (expresiones booleanas, `==`); PDF 70 / 49 (`and`, `or`, `not`, `42 and True`, `if`, `pass`); PDF 71 / 50 (`else`, `elif`); PDF 71-72 / 50-51 (anidados); PDF 86 / 65 (funciones booleanas, `is_divisible`); PDF 78-79 / 57-58 (ejercicios 5-2 Fermat y 5-3 triangulo); PDF 244-245 / 223-224 (expresion condicional `x if c else y`); PDF 247 / 226 (`any` y `all`) |
| Funciones y marco de llamada (stack diagram) | PDF 44-46 / 23-25 (`def`, cuerpo, llamar, flujo); PDF 47 / 26 (parametros y argumentos); PDF 48 / 27 (variables locales, `NameError`); PDF 49 / 28 (**Figure 3-1: diagrama de pila con `__main__`, `cat_twice`, `print_twice`**, traceback); PDF 50 / 29 (con valor de retorno y void, `None`); PDF 74 / 53 (**Figure 5-1: pila de `countdown(3)`**); PDF 88 / 67 (**Figure 6-1: pila de `factorial(3)`**); PDF 82-85 / 61-64 (`return` y desarrollo incremental con `distance`); PDF 137-138 / 116-117 (**Figure 10-5: pila con una lista compartida**); ejercicios de pila: 5-4 en PDF 79 / 58 y 6-1 en PDF 93 / 72 |
| Bucles while y for | PDF 97 / 76 (actualizar variables); PDF 98-99 / 77-78 (`while`, `countdown`, Collatz `sequence(n)`); PDF 99-100 / 78-79 (`break`, `while True`); PDF 100-101 / 79-80 (raiz cuadrada por Newton, lazo hasta converger); PDF 58 / 37 (`for i in range(4)`); PDF 107-108 / 86-87 (recorrido de cadena con `while` y con `for`); PDF 110 / 89 (bucle y conteo); PDF 124 / 103 (bucles con indices); ejercicios 7-1 a 7-3 en PDF 103-104 / 82-83; depurar bucles por biseccion en PDF 102 / 81 |
| Cadenas y rebanadas | PDF 106-107 / 85-86 (indice, `len`); PDF 108 / 87 (recorrer con `for`); PDF 108-109 / 87-88 (rebanadas, **Figure 8-1: indices entre los caracteres**); PDF 109-110 / 88-89 (inmutables); PDF 111 / 90 (metodos); PDF 112 / 91 (`in`); PDF 113 / 92 (comparacion); PDF 116 / 95 (rebanada con paso, ejercicio 8-3); PDF 117 / 96 (ejercicios 8-4 y 8-5, cifrado Cesar); PDF 36 / 15 (`+` y `*` con cadenas) |
| Listas, mutabilidad y alias | PDF 128-129 / 107-108 (la lista, mutable, **Figure 10-1**); PDF 131-132 / 110-111 (operaciones, rebanadas, metodos que devuelven `None`); PDF 135 / 114 (**Figure 10-2: dos estados posibles para `a` y `b`**); PDF 136 / 115 (**Figure 10-3: listas equivalentes pero no identicas**, `is`); PDF 136-137 / 115-116 (aliasing, **Figure 10-4**); PDF 137-138 / 116-117 (lista como argumento, **Figure 10-5**, `t = t[1:]` no cambia al llamador); PDF 139-140 / 118-119 (trampas de depuracion, `sort` frente a `sorted`); PDF 203-205 / 182-184 (copia superficial y profunda, **Figure 15-3**) |
| Diccionarios y hashing | PDF 146-147 / 125-126 (mapeo, `KeyError`, `in`); PDF 148-149 / 127-128 (histograma con diccionario, `get`); PDF 150 / 129 (busqueda inversa); PDF 151-152 / 130-131 (`invert_dict`, **Figure 11-1**, las listas no son claves); PDF 152 / 131 (hashable, `TypeError`); PDF 152-153 / 131-132 (memos con `known`, **Figure 11-2: grafo de llamadas**); PDF 272-276 / 251-255 (`LinearMap` -> `BetterMap` con `hash(k) % n` -> `HashMap` con `resize`, **Figure 21-1**); PDF 249-250 / 228-229 (`Counter` y `defaultdict`) |
| Tuplas | PDF 160-161 / 139-140 (inmutables, sintaxis con coma, `tuple`); PDF 162 / 141 (asignacion de tuplas, `a, b = b, a`); PDF 163 / 142 (valores de retorno, `divmod`, `*args`); PDF 164-165 / 143-144 (`zip`, `enumerate`); PDF 165-167 / 144-146 (`items()`, claves de tupla, **Figure 12-1 y 12-2**); PDF 168 / 147 (errores de forma, `structshape`); PDF 251-252 / 230-231 (`namedtuple`) |
| Archivos y excepciones | PDF 120-121 / 99-100 (`open`, `readline`, `strip`, `for line in fin`); PDF 187 / 166 (escribir con `write`, `close`); PDF 187-188 / 166-167 (operador de formato `%`); PDF 188-189 / 167-168 (`os.path`, `os.listdir`, `walk`); PDF 190 / 169 (`try/except`, errores de apertura); PDF 191-192 / 170-171 (`dbm`, `pickle`); PDF 194 / 173 (espacios en blanco y `repr`); PDF 151 / 130 (`raise`); PDF 205 / 184 (`hasattr`, `try/except AttributeError`); PDF 213 / 192 (`raise ValueError`, `assert`); PDF 260-261 / 239-240 (excepciones comunes al depurar) |
| Comprensiones, map/filter/reduce | PDF 133 / 112 (`sum` como reduce, `capitalize_all` como map, `only_upper` como filter; con acumulador, sin `map()` ni `filter()` integrados); PDF 245 / 224 (comprension de listas); PDF 246 / 225 (expresion generadora, `next`); PDF 247 / 226 (`any` y `all` con generadoras); PDF 247-248 / 226-227 (`set` para `subtract` y `uses_only`); PDF 122-123 / 101-102 (filtros por palabra: `has_no_e`, `avoids`, `uses_only`) |
| Clases y objetos, herencia, polimorfismo | PDF 198-199 / 177-178 (`class Point`, instancia, atributos); PDF 200-201 / 179-180 (**Figure 15-1 y 15-2: diagramas de objeto**, objeto dentro de objeto); PDF 202 / 181 (los objetos son mutables); PDF 203-204 / 182-183 (`copy.copy` y `deepcopy`, **Figure 15-3**); PDF 217-219 / 196-198 (de funcion a metodo, `self`); PDF 220 / 199 (`__init__`); PDF 221-222 / 200-201 (`__str__`, `__add__`, despacho por tipo); PDF 223 / 202 (polimorfismo, `__radd__`, `sum`); PDF 229-232 / 208-211 (Card, atributos de clase, `__lt__`, Deck); PDF 234-235 / 213-214 (herencia `class Hand(Deck)`); PDF 236 / 215 (**Figure 18-2: diagrama de clases con IS-A**); PDF 238 / 217 (`mro`, que clase define el metodo) |
| Depurar y leer un error | PDF 256-265 / 235-244 (capitulo 20 completo: sintaxis, ejecucion, semanticos); PDF 37 / 16 (tres tipos de error); PDF 49-50 / 28-29 (traceback y `NameError`); PDF 76 / 55 (que leer en un mensaje de error); PDF 91 / 70 (pre y postcondiciones); PDF 102 / 81 (biseccion); PDF 113-115 / 92-94 (`IndexError`, **Figure 8-2: diagrama de estado en depuracion**); PDF 139-140 / 118-119 (trampas con listas); PDF 182 / 161 (cinco tacticas, pato de goma); PDF 260-261 / 239-240 (excepciones: `NameError`, `TypeError`, `KeyError`, `AttributeError`, `IndexError`, `ValueError`; `pdb`) |
| Orden de crecimiento y hashtables | PDF 266-267 / 245-246 (por que comparar algoritmos); PDF 267-269 / 246-248 (terminos dominantes, **tabla de ordenes de crecimiento**, ejercicio 21-1); PDF 269-271 / 248-250 (operaciones de Python, `append` amortizado, ejercicio 21-2); PDF 271-272 / 250-251 (busqueda lineal y biseccion, 1 000 000 elementos en unos 20 pasos); PDF 272-276 / 251-255 (hashtable con `resize`, 2n - 2 unidades de trabajo, **Figure 21-1**); PDF 143 / 122 (ejercicio 10-10 bisect) |
| Recursion | PDF 72-73 / 51-52 (`countdown`, `print_n`, caso base); PDF 74 / 53 (**Figure 5-1: pila recursiva**); PDF 74-75 / 53-54 (recursion infinita, `RuntimeError`); PDF 87-89 / 66-68 (`factorial`, **Figure 6-1**, acto de fe); PDF 89-90 / 68-69 (Fibonacci); PDF 90-91 / 69-70 (comprobar tipos, guardianes); PDF 152-153 / 131-132 (memos y **Figure 11-2**); PDF 80 / 59 (ejercicio 5-6, curva de Koch, **Figure 5-2**); PDF 93-94 / 72-73 (6-2 Ackermann, 6-3 palindromo, 6-4 `is_power`, 6-5 MCD); PDF 260 / 239 (depurar recursion infinita) |

## Erratas e inconsistencias

No encontre erratas de contenido en las paginas leidas (el codigo y las salidas citadas coinciden con lo que describe el texto). Si hay inconsistencias menores del propio libro:

- **Capitulo 21 es un apendice.** El indice lo numera como capitulo, pero el texto de apertura (PDF 266 / 245) dice que es un extracto editado de *Think Complexity*; es el unico capitulo con ese origen.
- **Resto de TurtleWorld.** El Preface (PDF 13) explica que se cambio la libreria propia Swampy por el modulo estandar `turtle`, pero la lista de ejercicios sin numerar de la PDF 59 / 38 sigue diciendo "using TurtleWorld"; es un residuo de la edicion anterior.
- **Nombre de error anticuado.** En la PDF 190 / 169 el primer ejemplo muestra `IOError` al abrir un archivo que no existe, mientras los otros dos ejemplos de la misma pagina usan `PermissionError` e `IsADirectoryError` (nombres de Python 3.3+). En Python 3 actual el primero tambien aparece como `FileNotFoundError`.
- **Pies de figura en la pagina siguiente.** Algunos diagramas caen en la hoja posterior a la que los menciona: Figure 8-2 (texto en PDF 114, figura en PDF 115), Figure 10-4 (texto en PDF 136, figura en PDF 137), Figure 10-5 (texto en PDF 137, figura en PDF 138), Figure 12-2 (texto en PDF 166, figura en PDF 167). Hay que citar la pagina de la figura, no la del texto.
- **Python 2 mencionado a proposito.** La PDF 24 / 3 muestra `print 'Hello, World!'` (sintaxis de Python 2) como ejemplo de lo que da error, y la PDF 75 / 54 nota que `input` se llama `raw_input` en Python 2. No es una errata, pero conviene saberlo.
- **Ejercicios en medio del texto.** Los capitulos 9 y 13 intercalan sus ejercicios con la explicacion (por ejemplo 9-1 a 9-6 en PDF 121-122 y 13-1 a 13-5 en PDF 172-174); el capitulo 4 trae una lista de ejercicios sin numerar (PDF 59). El numero impreso del TOC "Exercises" no cubre todos.

## No aparece

Verificado con busqueda de texto sobre las PDF 22-277 (cuerpo del libro):

- **NumPy, pandas, SciPy, scikit-learn, Jupyter:** ninguno aparece. Solo se menciona `matplotlib` una vez (PDF 184 / 163, ejercicio 13-9, grafica de la ley de Zipf).
- **f-strings y `str.format`:** no aparecen; el unico formato de cadenas es el operador `%` (PDF 187-188 / 166-167).
- **`with open(...)`:** no aparece; los archivos se cierran con `fout.close()`.
- **`json`, `csv`, `argparse`, `sys`:** no aparecen; la persistencia usa `dbm`, `pickle` y pipes con `os.popen`.
- **Comprensiones de diccionario o de conjunto, `lambda`, decoradores, anotaciones de tipo, `@property`, `super()`, `__repr__`, `__eq__`, `dataclass`, `yield` como sentencia:** no aparecen (`lambda` solo figura en la lista de palabras clave de la PDF 33 / 12; las expresiones generadoras si estan, PDF 246-247).
- **`map()`, `filter()` y `reduce()` como funciones integradas:** no se usan; map, filter y reduce se explican como patrones con bucle y acumulador (PDF 133 / 112).
- **`sorted(..., key=...)`:** no aparece; el orden por frecuencia se logra con tuplas `(freq, word)` (PDF 176 / 155).
- **Excepciones propias, `finally`, `ZeroDivisionError`:** no aparecen explicados (solo `try/except`, `raise` y `assert`).
- **Pruebas automaticas (`unittest`, `doctest`):** no aparecen; la verificacion se hace con `print`, `assert` y el depurador `pdb` mencionado de pasada (PDF 261 / 240).
- **Notacion matematica de probabilidad o algebra lineal:** el libro no la usa; lo mas cercano son la serie de Ramanujan (ejercicio 7-3), el metodo de Newton (PDF 100-102 / 79-81), numeros aleatorios (PDF 173-174 / 152-153), la paradoja del cumpleanos (ejercicio 10-8) y Markov (PDF 179-181 / 158-160).
- **Diagrama del recorrido de un `for` o `while`:** el libro solo dibuja diagramas de estado y de pila (por ejemplo Figure 7-1 y Figure 8-2); no hay figura que muestre iteracion por iteracion.
