# Especificacion: Diccionarios, conjuntos y hash (diccionarios-hash)

- Ruta: `python-base`, orden 10, tanda 8. Area: Programacion con datos.
- Prerrequisitos: "Listas, mutabilidad y alias".
- Siguientes: "Archivos, CSV y JSON", "Orden de crecimiento".
- Aparece: `[{ materia: "SM142002", ud: "UD1" }]`.
- Resumen: "Buscar por clave en un solo paso: cómo una función hash decide en qué casilla se guarda cada clave."
- Fuente del catalogo: "Think Python cap. 11 y 21, Python Workout cap. 4".

## Imagen central

Una **tabla hash de juguete con 8 casillas** (cubetas numeradas 0 a 7, en vertical) y, a su izquierda, una **maquina hash**:
una caja donde entra una clave (texto en minusculas) y sale un numero. La funcion de juguete es visible y se calcula en vivo:
**suma de las posiciones de las letras en el alfabeto (a = 1, b = 2, ..., z = 26), y luego el resto de dividir entre el numero
de casillas**. Por ejemplo `uva` = 21 + 22 + 1 = 44, y 44 mod 8 = 4.

Datos inventados (precios por kilo de fruta): `pera 4`, `kiwi 7`, `mango 2`, `uva 9`, `lima 5`, `higo 3`. Con 8 casillas
caen en 0, 4, 2, 4, 3 y 7: hay una sola colision (`kiwi` y `uva` en la 4), que se apilan en una cadena dentro de la casilla.

Controles:
- Campo para escribir una clave (a-z, 2 a 8 letras) y botones "guardar" (con un valor) y "buscar". Al buscar, una flecha va
  directo a la casilla calculada y recorre su cadena; el contador "comparaciones" sube por cada clave revisada.
- Al lado, la **misma busqueda en una lista** (las 6 parejas en fila): un cursor recorre desde el inicio y su contador de
  comparaciones sube uno por uno.
- Selector del numero de casillas: 4, 8, 16. Al cambiarlo se "rehace" la tabla (todas las claves se mueven a su casilla nueva,
  animado). Con 4 hay muchas colisiones; con 16, ninguna.
- Interruptor "redimensionar sola" (paso 5): cuando las claves igualan al numero de casillas, la tabla duplica su tamano.
- Boton "usar una lista como clave" (paso 6): la maquina hash rechaza la entrada (`TypeError: unhashable type: 'list'`).
- Modo conjunto (paso 7): las cubetas guardan solo claves, sin valores.

## Hipotesis inicial

"Tienes 1000 fichas de clientes en una caja, sin orden, y buscas la de 'Rosa'. Otra persona tiene 26 cajones marcados con la
primera letra del apellido. ¿Cuantas fichas crees que mira cada uno, en el peor caso? ¿Que podria salir mal con los cajones?
Escribe tu idea."

## Pasos

### Paso 1. Cajones con letra (prediccion sin simbolos)
- Idea: si la ubicacion se calcula a partir del nombre, no hace falta revisar todo.
- Escenario: 26 cajones dibujados (A a Z) y una fila de 1000 fichas grises. Un contador por cada metodo. Nada de codigo.
- Chequeo (prediccion): "Buscas a alguien de apellido Soto. En el peor caso, ¿cuantas fichas revisas en la fila y cuantos
  cajones abres?"
  - Correcta: "hasta 1000 fichas en la fila; un solo cajon (el S), y dentro revisas solo las fichas de ese cajon".
  - "Los dos metodos revisan lo mismo": falla porque el cajon se calcula sin mirar los otros.
  - "Un cajon y una sola ficha siempre": falla porque puede haber varios apellidos con S en el mismo cajon (esa es la colision,
    que vuelve en el paso 4).
- Al resolver: "Esa regla que convierte el nombre en un cajon se llama funcion hash." Inspirado en la explicacion de Python
  Workout (oficinas por inicial del apellido), contado con otro ejemplo.

### Paso 2. Un diccionario: clave y valor
- Idea: un diccionario guarda parejas clave → valor y se consulta por clave: `precios["uva"]` da 9. Si la clave no esta, da
  `KeyError`; `precios.get("sandia", 0)` da 0. `in` pregunta por claves, no por valores.
- Escenario: una tabla simple de dos columnas (clave, valor) con las 6 frutas; cuadro de consulta. Todavia sin casillas.
- Chequeo (eleccion con explicacion): "¿Que devuelve `"uva" in precios`? ¿Y `9 in precios`?"
  - Correcta: `True` y `False` (`in` solo mira claves).
  - `True` y `True`: "9 es un valor; para buscar valores hay que usar `precios.values()`".
  - Error: "`in` funciona con diccionarios".
- Citas: thinpython PDF 146 (A Dictionary Is a Mapping) y PDF 147 (`in` solo mira claves; `values()`); thinpython PDF 148
  (histograma con diccionario y `get`).

### Paso 3. La maquina hash: de clave a casilla
- Idea: la funcion hash convierte la clave en un numero; el resto de dividir entre el numero de casillas da la casilla. La misma
  clave siempre cae en la misma casilla.
- Escenario: se enciende la maquina hash y las 8 cubetas. Formula viva con los numeros de la clave escrita:
  `u(21) + v(22) + a(1) = 44`, `44 mod 8 = 4`. Las claves guardadas aparecen en sus casillas. El numero de casilla de la clave
  del chequeo no se muestra hasta resolver.
- Chequeo (calculo con datos en vivo): "¿En que casilla cae `lima` con 8 casillas?" Respuesta: 3 (12 + 9 + 13 + 1 = 35;
  35 mod 8 = 3).
  - 35: "ese es el numero que sale de la maquina; falta el resto de dividir entre 8".
  - 4: "revisa la suma: l = 12, i = 9, m = 13, a = 1".
- Cita: thinpython PDF 274 (BetterMap: `hash(k) % len(self.maps)` y la idea de envolver el numero en un indice valido);
  pyworkout PDF 81 (p.55: la clave pasa por la funcion hash, que da el lugar donde guardar la pareja).

### Paso 4. Colisiones (TRAMPA)
- Idea: dos claves distintas pueden caer en la misma casilla; entonces la casilla guarda una pequena cadena y al buscar se
  compara dentro de ella. Por eso la busqueda no es "una sola mirada" exacta, sino "unas pocas".
- Escenario: `kiwi` y `uva` apiladas en la casilla 4. Buscar `uva`: flecha a la casilla 4, compara con `kiwi` (no), con `uva`
  (si). Contador = 2. El selector de casillas se habilita: con 4 casillas la 0 tiene tres claves (`pera`, `kiwi`, `uva`); con
  16 no hay colisiones.
- Chequeo (calculo): "Con 4 casillas, ¿cuantas comparaciones hacen falta para encontrar `uva` si las claves se guardaron en el
  orden pera, kiwi, mango, uva, lima, higo?" Respuesta: 3 (en la casilla 0 estan pera, kiwi y uva, en ese orden).
  - 1: "con 4 casillas, uva comparte la casilla 0 con pera y kiwi".
  - 6: "esa es la busqueda en la lista; aqui solo se revisa una casilla".
- Valores reales para la pagina (calculados con `python3`): sumas pera 40, kiwi 52, mango 50, uva 44, lima 35, higo 39.
  Con 4 casillas: 0, 0, 2, 0, 3, 3. Con 8: 0, 4, 2, 4, 3, 7. Con 16: 8, 4, 2, 12, 3, 7.

### Paso 5. Por que es rapido, y que pasa cuando se llena
- Idea: en la lista, buscar cuesta tanto como el largo (O(n)); en la tabla hash, si las claves se reparten bien, cuesta lo mismo
  con 6 claves que con un millon (O(1) en promedio). Para que siga asi, cuando hay tantas claves como casillas la tabla duplica su
  tamano y vuelve a repartir todo (rehash).
- Escenario: la lista y la tabla lado a lado con contadores. Un boton "agregar 10 claves al azar" (de una lista fija de frutas y
  verduras inventadas) con el interruptor "redimensionar sola": se ve el salto de 8 a 16 casillas y las claves moviendose.
  Grafico pequeno: comparaciones promedio de cada metodo segun el numero de claves.
- Chequeo (prediccion): "Si la tabla tiene 8 casillas y 8 claves, y redimensiona al duplicar, ¿cuantas casillas tendra despues?
  ¿Por que hay que mover las claves?" Respuesta: 16; porque la casilla depende del numero de casillas (el resto de dividir cambia).
  - "16, pero las claves se quedan donde estaban": "con 16, `uva` (44) cae en la 12, no en la 4".
  - "9": "se duplica para que el costo de redimensionar, repartido entre todas las inserciones, siga siendo constante".
- Profundizar ("¿Por que duplicar y no sumar una casilla?"): el argumento de Think Python: con duplicacion, n inserciones cuestan
  en total unas 2n − 2 unidades de trabajo (Figure 21-1); si se sumara una cantidad fija, el costo creceria como n al cuadrado.
  Nota honesta: Python no usa cadenas dentro de la casilla como este juguete (y como `BetterMap`); usa direccionamiento abierto
  (si la casilla esta ocupada, prueba otra). La idea de la funcion hash y del redimensionamiento es la misma.
- Citas: thinpython PDF 272 (busqueda lineal frente a tabla hash; "Hashtables"), PDF 273 (`LinearMap`, busqueda lineal), PDF 275
  (`HashMap` con `resize` y rehash), PDF 276 (Figure 21-1, costo 2n − 2); thinpython PDF 271 (operaciones de diccionario en
  tiempo constante).

### Paso 6. Las claves no pueden cambiar (DESTACADO)
- Idea: solo se pueden usar como clave objetos hashables. Una lista no lo es: si pudiera cambiar despues de guardarse, su hash
  cambiaria y quedaria en una casilla equivocada, imposible de encontrar. Una tupla (inmutable) si sirve.
- Escenario: boton "usar `[1, 2]` como clave": la maquina se traba con `TypeError: unhashable type: 'list'` (real). Luego una
  simulacion "¿y si se permitiera?": se guarda la clave `ab` (casilla 3 con 8 casillas: 1 + 2 = 3), se "cambia" a `ac` por dentro
  y la busqueda de `ac` va a la casilla 4 (1 + 3), donde no esta; la pareja queda perdida en la 3.
- `.destacado` con prediccion (la confusion natural: "¿por que no deja usar una lista, si es solo un dato?"): "Guardas una clave
  en la casilla que le toca y despues la clave cambia por dentro. ¿Que pasa al buscarla?"
  - Correcta: "Se busca en la casilla de la clave nueva y no se encuentra, aunque la pareja sigue guardada en la vieja."
  - "Se encuentra igual": "la maquina calcula la casilla con la clave actual, y ya no coincide".
  - "Python la mueve sola": "no hay forma de que la tabla sepa que la clave cambio; por eso Python prohibe claves mutables".
- Chequeo del paso: el destacado, mas una eleccion: "¿Cual de estas puede ser clave?" `(1, 2)` (correcta), `[1, 2]`,
  `{"a": 1}`. Salida real de `d[(1, 2)] = "x"`: `{(1, 2): 'x'}`.
- Al resolver se muestra `#citaHipo`.
- Citas: thinpython PDF 152 (las listas no pueden ser claves; que es hashable y que es una funcion hash); pyworkout PDF 81
  (p.55: si la clave cambia, su hash cambia y la pareja no se encuentra); pyworkout PDF 80 (p.54: solo los tipos hashables
  pueden ser claves).

### Paso 7. Conjuntos y el lado de R (el mas tecnico)
- Idea: un conjunto (`set`) es una tabla hash con claves y sin valores: preguntar `x in s` es rapido y no hay repetidos. Sirve
  para quitar duplicados y para union, interseccion y diferencia. En R no hay un diccionario hash comun: un vector con nombres
  (`setNames(precios, claves)`) busca por nombre recorriendo, y `unique`, `union`, `intersect`, `setdiff` trabajan sobre vectores.
  (Los `environment` de R si son tablas hash; se mencionan en el profundizar.)
- Escenario: modo conjunto. Se guardan `3, 1, 3, 2, 1, 3` y las cubetas solo aceptan cada numero una vez. Dos conjuntos de frutas
  en diagrama de Venn sobre las cubetas: `{pera, uva, kiwi}` y `{uva, lima}`.
- Chequeo (calculo): "¿Cuantos elementos tiene `set([3, 1, 3, 2, 1, 3])`? ¿Y que da `{pera, uva, kiwi} - {uva, lima}`?"
  Respuesta: 3; `{pera, kiwi}` (salidas reales: `{1, 2, 3} 3` y `['kiwi', 'pera']` ordenado).
  - 6: "un conjunto no guarda repetidos".
  - `{lima}`: "la diferencia deja lo del primero que no esta en el segundo".
- Profundizar ("R y las tablas hash"): `e <- new.env(); assign("uva", 9, envir = e); get("uva", envir = e)` da 9 (verificado);
  el material de la materia no lo usa. En pandas, el indice de un DataFrame tambien usa hash para buscar por etiqueta (enlace
  a "Listas y data frames").
- Citas: thinpython PDF 248 (Sets: un conjunto es como las claves de un diccionario sin valores; `set(d1) - set(d2)`); pyworkout
  PDF 82 (p.56: conjuntos, busqueda O(1) y quitar duplicados); thinpython PDF 250 (defaultdict y `Counter`).

## Vida real (Python y R)

Mismos datos: las 6 frutas y precios, 8 casillas, funcion de juguete. Algoritmo: calcular la casilla con un bucle, armar las
cubetas, guardar cada pareja, buscar `uva` contando comparaciones, y cerrar contra el diccionario de la libreria (`dict` en
Python, vector con nombres en R).

Ids compartidos: `def` (cabecera de la funcion), `total0`, `letras`, `suma`, `resto`, `claves`, `precios`, `n`, `cubetas0`,
`cubetasfor`, `cubetasvacia`, `guardafor`, `h`, `guarda`, `muestra`, `buscada`, `hbusca`, `comp0`, `recorre`, `comp`, `si`,
`encontro`, `libreria1`, `libreria2`.

Python (Python 3.13.5):
```python
def casilla(clave, n):
    total = 0
    for letra in clave:
        total = total + ord(letra) - 96
    return total % n

claves = ["pera", "kiwi", "mango", "uva", "lima", "higo"]
precios = [4, 7, 2, 9, 5, 3]
n = 8
cubetas = []
for j in range(n):
    cubetas.append([])
for k in range(len(claves)):
    h = casilla(claves[k], n)
    cubetas[h].append((claves[k], precios[k]))
print(cubetas)
buscada = "uva"
h = casilla(buscada, n)
comparaciones = 0
for clave, precio in cubetas[h]:
    comparaciones = comparaciones + 1
    if clave == buscada:
        print(h, precio, comparaciones)
d = dict(zip(claves, precios))
print(d["uva"])
```
Salida real:
```
[[('pera', 4)], [], [('mango', 2)], [('lima', 5)], [('kiwi', 7), ('uva', 9)], [], [], [('higo', 3)]]
4 9 2
9
```

R (R 4.6.1):
```r
casilla <- function(clave, n) {
  total <- 0
  for (letra in strsplit(clave, "")[[1]]) {
    total <- total + utf8ToInt(letra) - 96
  }
  total %% n
}

claves <- c("pera", "kiwi", "mango", "uva", "lima", "higo")
precios <- c(4, 7, 2, 9, 5, 3)
n <- 8
cubetas <- list()
for (j in 1:n) {
  cubetas[[j]] <- list()
}
for (k in seq_along(claves)) {
  h <- casilla(claves[k], n)
  cubetas[[h + 1]] <- c(cubetas[[h + 1]], list(c(claves[k], precios[k])))
}
print(lengths(cubetas))
buscada <- "uva"
h <- casilla(buscada, n)
comparaciones <- 0
for (par in cubetas[[h + 1]]) {
  comparaciones <- comparaciones + 1
  if (par[1] == buscada) {
    print(c(h, as.numeric(par[2]), comparaciones))
  }
}
d <- setNames(precios, claves)
print(d[["uva"]])
```
Salida real:
```
[1] 1 0 1 1 2 0 0 1
[1] 4 9 2
[1] 9
```

Notas de lectura del codigo, para la narracion:
- La casilla vale lo mismo en los dos lenguajes (0 a 7, porque es un resto), pero en R la cubeta de la casilla `h` es
  `cubetas[[h + 1]]`: la pagina debe marcarlo (enlace a "Índices, rebanadas y máscaras").
- En R, `c(claves[k], precios[k])` convierte el precio en texto (`"9"`): coercion (enlace a "Tipos y coerción"); por eso aparece
  `as.numeric(par[2])` al imprimir. Es un detalle real del codigo, decirlo.
- `ord(letra) - 96` y `utf8ToInt(letra) - 96` dan la posicion en el alfabeto solo para minusculas a-z.
- En Python la cubeta se imprime entera; en R se imprime `lengths(cubetas)` (cuantas parejas hay en cada casilla) porque la
  lista anidada de R ocupa demasiadas lineas. Se dice.

Foto de estado por linea ejecutada (resumen; la pagina precalcula un evento por linea, con la funcion `casilla` expandida
en 4 a 5 vueltas de `suma` por clave, o colapsada en un solo evento por llamada: se recomienda colapsarla y mostrar la suma
completa en la foto para no pasar de unos 45 eventos):

| tramo | linea | variables que cambian |
|---|---|---|
| preparacion | claves, precios, n | listas y n = 8 |
| cubetas vacias | cubetasfor, cubetasvacia (x8) | `cubetas` = 8 casillas vacias; j = 0..7 (Python) / 1..8 (R) |
| guardar pera | guardafor, h, guarda | k = 0 / 1; suma 40; h = 0; casilla 0 = [pera] |
| guardar kiwi | idem | suma 52; h = 4 |
| guardar mango | idem | suma 50; h = 2 |
| guardar uva | idem | suma 44; h = 4; casilla 4 = [kiwi, uva] (colision) |
| guardar lima | idem | suma 35; h = 3 |
| guardar higo | idem | suma 39; h = 7 |
| muestra | muestra | imprime |
| buscar | buscada, hbusca, comp0 | buscada = uva; h = 4; comparaciones = 0 |
| vuelta 1 | recorre, comp, si | clave = kiwi; comparaciones = 1; no coincide |
| vuelta 2 | recorre, comp, si, encontro | clave = uva; comparaciones = 2; imprime `4 9 2` |
| libreria | libreria1, libreria2 | `d`; imprime 9 |

Visual: las 8 cubetas (como en la imagen central) llenandose; la maquina hash muestra la suma y el resto de la clave en curso;
la etiqueta de la cubeta usa `ctx.ix` para la posicion en la lista (`cubetas[4]` en Python, `cubetas[[5]]` en R) pero el numero
de casilla es el mismo (4).

Prediccion antes de reproducir (`#vrPred`): "¿Cuantas comparaciones necesitara la busqueda de `uva`?" Respuesta: 2. Distractor
1 ("cae en una casilla, pero esa casilla ya tiene a kiwi"); distractor 4 ("seria la posicion de uva en la lista original; la
tabla no recorre la lista").

`p.vr-nota`: en Python, `precios = dict(zip(claves, precios))` y `precios["uva"]`; en R, `setNames(precios, claves)[["uva"]]`.
`details.profundizar`: la funcion `hash()` real de Python para cadenas cambia en cada ejecucion (se siembra al azar por seguridad;
dos corridas de `print(hash("uva"))` dieron `-9214272708219777949` y `-6269769214188974066`), por eso la pagina usa una funcion
de juguete. Los enteros si son estables: `hash(7)` = 7.

Trampas reales:
- `codigo1` (Python): una lista como clave.
  ```python
  d = {}
  d[[1, 2]] = "x"
  ```
  Ultima linea de la salida: `TypeError: unhashable type: 'list'`. Arreglo con tupla:
  ```python
  d = {}
  d[(1, 2)] = "x"
  print(d)
  ```
  Salida: `{(1, 2): 'x'}`.
  Pregunta: "¿Por que la tupla si sirve?" Correcta: "es inmutable: su hash no puede cambiar". Distractores: "porque usa
  parentesis" (la sintaxis no importa), "porque tiene dos elementos" (la lista tambien).
- `codigo2` (Python y R): buscar una clave que no esta.
  Python:
  ```python
  d = {"pera": 4, "uva": 9}
  print(d.get("sandia", 0))
  print(d["sandia"])
  ```
  Salida real: primero `0`, despues el error cuya ultima linea es `KeyError: 'sandia'`.
  R:
  ```r
  d <- c(pera = 4, uva = 9)
  print(d["sandia"])
  print(d[["sandia"]])
  ```
  Salida real:
  ```
  <NA> 
    NA 
  Error in d[["sandia"]] : subscript out of bounds
  ```
  (seguido de `Calls: print` y `Execution halted` al correrlo con `Rscript`). Pregunta: "¿Cual de las cuatro lineas no avisa
  nada y devuelve un hueco?" Correcta: `d["sandia"]` de R (da `NA` con nombre `<NA>`).
- `codigo3` (Python): claves que el hash considera iguales.
  ```python
  d = {1: "uno", 1.0: "flotante", True: "verdad"}
  print(d)
  print(len(d))
  ```
  Salida real:
  ```
  {1: 'verdad'}
  1
  ```
  Pregunta: "¿Por que quedo una sola pareja?" Correcta: "1, 1.0 y True son iguales con `==` y tienen el mismo hash, asi que son
  la misma clave; se queda la primera clave escrita y el ultimo valor". Distractores: "Python borra los flotantes" (no), "es un
  error de Python" (es la regla).

## Retos (12 ids: 9 de esta seccion mas codigo1 a codigo3)

1. `ojo` (ojo clinico, 5 rondas al azar, 4 de 5): se muestra un objeto al azar entre `"uva"`, `42`, `(1, 2)`, `[1, 2]`,
   `{"a": 1}`, `{1, 2}`, `(1, [2])`, `3.5`. "¿Puede ser clave de diccionario?" Respuestas: si para cadena, entero, flotante y
   tupla de inmutables; no para lista, dict, set y tupla que contiene una lista (verificado: `hash((1, [2]))` da `TypeError: unhashable type: 'list'`).
2. `amano1` (a mano, datos al azar): palabra al azar (a-z, 3 a 6 letras) y numero de casillas al azar (4, 8, 16); calcular la
   casilla. Pistas: (1) "suma las posiciones: a = 1 ... z = 26", (2) muestra la suma, (3) "el resto de dividir entre n".
3. `amano2` (a mano): 5 claves al azar y n = 4; "¿cuantas colisiones hay?" (casillas con 2 o mas claves). Pistas: tabla
   parcial de casillas.
4. `construir1` (construir): elegir el numero de casillas (4, 8, 16) y el orden de insercion para que buscar `uva` cueste
   exactamente 1 comparacion. Varias soluciones (16 casillas; o 8 casillas insertando `uva` antes que `kiwi`).
5. `construir2` (construir): escribir tres claves nuevas que caigan todas en la misma casilla con 8 casillas (por ejemplo,
   sumas 3, 11 y 19). Valida con la funcion de juguete.
6. `cazar` (cazar el error, 3 variantes, una linea mal) en un contador de letras con diccionario (el patron histograma, con
   desarrollo propio): correcta `for c in s: cuenta[c] = cuenta.get(c, 0) + 1`.
   - Variante A: `cuenta[c] = cuenta[c] + 1` (KeyError en la primera letra).
   - Variante B: `cuenta = {}` dentro del bucle (se reinicia en cada vuelta: queda solo la ultima letra con 1).
   - Variante C: `cuenta.get(c, 0) + 1` sin asignar (no guarda nada: queda vacio).
   Salidas reales con `s = "banana"`: correcta `{'b': 1, 'a': 3, 'n': 2}`; A `KeyError: 'b'`; B `{'a': 1}`; C `{}`.
7. `prop` (propiedades, `mezclar: true`, reintentable): "¿Cual es verdadera?"
   - Correcta: "Buscar una clave en un diccionario cuesta, en promedio, lo mismo con 10 claves que con un millon."
   - "`in` busca entre los valores" (pista: paso 2).
   - "Dos claves distintas nunca caen en la misma casilla" (pista: paso 4).
   - "Al redimensionar, cada clave se queda en su casilla" (pista: paso 5).
8. `conjunto` (a mano): dos listas al azar de 5 frutas de un banco de 8; escribir la union, la interseccion y la diferencia.
   Pistas: diagrama de Venn parcial.
9. `rfaltante` (propiedades, R): "En R, con `d <- c(pera = 4, uva = 9)`, ¿que da `d["sandia"]`?" Correcta: `NA` con nombre
   `<NA>`; distractores con pista: "error" (eso es `d[["sandia"]]`), "0" (R no tiene valor por defecto).
10. Mas `codigo1`, `codigo2`, `codigo3`.

Lecturas de inspiracion (citar, no copiar): Python Workout ej. 15 Rainfall (PDF 85-89, p.59-63: acumular por clave con `get`),
ej. 16 Dictdiff (PDF 90-94, p.64-68), ej. 17 How many different numbers? (PDF 94-96, p.68-70: `set`); Think Python ejercicio
11-4 (`has_duplicates` con diccionario, PDF 158-159).

## Memoria

`B.ordenar`: armar la cuenta de la casilla: `casilla` · `=` · `suma de las letras` · `mod` · `numero de casillas`.
En codigo: `h` · `=` · `casilla(clave, n)` y la linea de la funcion `return total % n`. Se recomienda la version en codigo:
piezas `total = 0` · `for letra in clave:` · `total = total + ord(letra) - 96` · `return total % n`.
Distractores: `return total // n` (cociente, no resto), `return total % len(clave)` (divide por el largo de la clave),
`total = ord(letra) - 96` (no acumula).

Tarjetas (8):
1. ¿Que hace una funcion hash? / Convierte una clave en un numero; con el resto se elige la casilla.
2. ¿Por que buscar en un diccionario es rapido? / Se calcula la casilla y se mira solo ahi, sin recorrer todo.
3. ¿Que es una colision? / Dos claves distintas en la misma casilla; se comparan dentro de la casilla.
4. ¿Por que la tabla duplica su tamano? / Para que las casillas no se llenen; al cambiar n hay que rehacer el hash de todo.
5. ¿Por que una lista no puede ser clave? / Si cambiara, su hash cambiaria y la pareja quedaria perdida.
6. ¿Que diferencia hay entre `d["x"]` y `d.get("x", 0)`? / El primero da KeyError si falta; el segundo devuelve 0.
7. ¿Que es un `set`? / Una tabla hash solo con claves: sin repetidos y con `in` rapido.
8. ¿Que equivale a un diccionario en R? / Un vector o lista con nombres (busca recorriendo); un `environment` si es tabla hash.

## Citas (13)

| fuente | pag PDF | pag impresa | seccion | que hay | cuando leerla |
|---|---|---|---|---|---|
| thinpython | 146 | 125 | Cap. 11: A Dictionary Is a Mapping | claves y valores, `dict()`, `eng2sp['one'] = 'uno'` | Paso 2 |
| thinpython | 147 | 126 | Cap. 11: A Dictionary Is a Mapping | `in` solo mira claves; `values()`; lista frente a diccionario | Paso 2, despues del chequeo |
| thinpython | 148 | 127 | Cap. 11: Dictionary as a Collection of Counters | el patron histograma con diccionario | Retos (cazar el error) |
| thinpython | 152 | 131 | Cap. 11: Dictionaries and Lists | las listas no son claves (`TypeError`); que es hashable y que es una funcion hash | Paso 6 |
| thinpython | 248 | 227 | Cap. 19: Sets | un conjunto es como las claves de un diccionario sin valores; resta de conjuntos | Paso 7 |
| thinpython | 271 | 250 | Cap. 21: Analysis of Basic Python Operations | casi todas las operaciones de diccionario son de tiempo constante | Paso 5 |
| thinpython | 272 | 251 | Cap. 21: Hashtables | por que la tabla hash busca en tiempo constante | Paso 5 |
| thinpython | 274 | 253 | Cap. 21: Hashtables | `BetterMap`: `hash(k) % len(self.maps)`; claves mutables no son hashables | Paso 3 |
| thinpython | 275 | 254 | Cap. 21: Hashtables | `HashMap.resize` duplica y rehace el hash | Paso 5 |
| thinpython | 276 | 255 | Cap. 21: Hashtables | Figure 21-1: el costo de cada `add`; total 2n − 2 | Paso 5, profundizar |
| pyworkout | 80 | 54 | Cap. 4: Hashing and dicts | solo los tipos hashables pueden ser claves; analogia de las oficinas | Paso 1 (al resolver) |
| pyworkout | 81 | 55 | Cap. 4: Hashing and dicts | la clave pasa por la funcion hash; colisiones; por que las claves mutables no sirven | Pasos 3, 4 y destacado del paso 6 |
| pyworkout | 82 | 56 | Cap. 4: Sets | conjuntos como dicts sin valores; busqueda O(1); quitar duplicados | Paso 7 |

Verificacion: releidas con `pdftotext` las PDF 146, 147-148, 152, 248, 250, 271, 272, 273, 274, 275, 276 de thinpython y 80, 81,
82 de pyworkout. Nota: el mapa `think-python.md` da "Conjuntos (set) 247-249", pero la PDF 247 trata `any` y `all`; la seccion
Sets empieza en la PDF 248 (verificado). En otra fila del mismo mapa dice "PDF 249-250 / 228-229 (Counter y defaultdict)" y en la
tabla principal "defaultdict 250-251": la PDF 250 tiene el final de `Counter` y el inicio de `defaultdict` (verificado). Si se
quiere citar thinpython 250, usar `data-pag="250" data-pimp="229"`.

Material del master: prog1 no trae diccionarios; solo el cuaderno UAX_20251028 (c46-48) usa un diccionario `estaciones` con
`.map` al que le falta el mes 12 (82 filas en NaN). Es un ejemplo perfecto de "clave que no esta", pero el cuaderno no esta
registrado en `fuentes.js` (id propuesto `prog1nb`). Si la sesion principal lo registra, citarlo en el paso 2 o en `codigo2`.

## Riesgos y notas para quien construye

- Nunca mostrar `hash("...")` real de Python como si fuera fijo: cambia en cada corrida. La funcion de la pagina es de juguete y
  se dice desde el paso 3.
- La funcion de juguete reparte mal (anagramas como `amor` y `roma` siempre chocan: las dos suman 47, verificado). Se puede usar como pregunta en
  un profundizar ("¿por que una buena funcion hash mira el orden de las letras?"), y aclarar que la real si lo hace.
- Python usa direccionamiento abierto, no cadenas dentro de la casilla; Think Python (BetterMap) y esta pagina usan cadenas para
  ensenar. Decirlo en el profundizar del paso 5 sin entrar en detalles.
- Desde Python 3.7 los diccionarios conservan el orden de insercion (Python Workout lo menciona en la PDF 81 como un cambio de
  Python 3.6); la tabla de juguete no: no confundir el orden de impresion con el orden de las casillas.
- R: `utf8ToInt` sobre una letra; `%%` es el resto. `c(texto, numero)` convierte a texto (se dice). Indices de las cubetas en R
  con `+ 1`.
- Entrada libre de claves: forzar minusculas a-z sin tildes ni ene, para que la suma sea la de la tabla del alfabeto ingles de 26
  letras (decirlo: "usamos el alfabeto sin tildes ni ene para que la cuenta sea simple").
