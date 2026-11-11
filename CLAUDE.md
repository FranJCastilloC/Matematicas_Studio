# Math Videos: biblioteca interactiva de matemáticas

Francisco estudia matemáticas (maestría en IA) y le cuesta entender lo abstracto hasta que lo ve.
Esta carpeta es su biblioteca personal: una página interactiva por concepto **matemático**.
Es una biblioteca de conceptos, no de materias: las materias del máster solo se citan ("dónde te lo enseñaron").
Lo que hay que estudiar vive en `~/brain` (`01-Academico`, `02-Biblioteca`, `03-Matematicas`; la carpeta del semestre es
`SEMESTRE 1 ` con un espacio al final). second_brain (MCP) sirve para ubicar temas, pero las páginas se citan contra el PDF.
**Francisco no programa.** Él trae el concepto (tema, apuntes, PDF, página de un libro) y Claude construye todo.

## Estructura

```
biblioteca/
  index.html              rutas agrupadas y plegables, filtro por materia y unidad, progreso, repaso, próximas tandas, libros
  catalogo.js             el mapa completo: UNIDADES (20 rutas en 5 grupos), MATERIAS, TANDAS y CATALOGO (listos y planeados)
  fuentes.js              window.FUENTES: los libros y el material del máster que se citan, con la ruta al PDF
  nucleo/estilo.css       tokens de color y componentes compartidos (incluye vida real, destacado y citas)
  nucleo/nucleo.js        window.Biblioteca: progreso, pasos con candado, tipos de reto, citas, motor de vida real
  nucleo/BRIEF-CONCEPTO.md  el brief que recibe cada agente que construye una página
  nucleo/verificar.py     verificación sin navegador: python3 nucleo/verificar.py conceptos/<id>.html
  nucleo/verificar_catalogo.py  revisa el catálogo entero: títulos, órdenes, archivos, unidades cubiertas, PDF
  nucleo/prueba.js        prueba de humo dentro del navegador (se carga con fetch y eval desde la consola)
  conceptos/<id>.html     una página por concepto
  conceptos/<id>-*-lab.html  laboratorios extra de un concepto (opcional)
  historial.html          historial del progreso guardado en el servidor (solo en producción)
brain/fuentes/*.md        mapas de citas de cada libro: qué tema está en qué página (verificados)
api/index.py, middleware.js, vercel.json, VERCEL.md   producción en Vercel (API del progreso, contraseña, guía)
despliegue/               producción con Docker: Caddy (HTTPS, contraseña, PDFs) + app Python/SQLite (progreso)
  LEEME.md                cómo desplegar en el VPS, respaldar y probar en local
matriz_covarianza.py, primer_video.py   escenas de Manim (videos), aparte de la biblioteca
```

Para ver la biblioteca: abrir `biblioteca/index.html` con doble clic, o en el panel del navegador con la
configuración `biblioteca` de `.claude/launch.json` (servidor local en el puerto 8765). El panel no carga
CSS ni JS relativos con `file://`, así que para probar siempre usar el servidor.

## Cuando Francisco trae un concepto nuevo

1. Entender qué necesita: de dónde viene (libro, materia), qué parte le cuesta, qué ya sabe.
   Si hay material, leerlo primero. Preguntar solo lo que cambia el diseño.
2. Encontrar **la imagen central**: la representación visual que hace evidente la idea
   (en covarianza: cada punto aporta un rectángulo con signo). Todo el concepto gira alrededor de ella.
3. Crear `biblioteca/conceptos/<id>.html` siguiendo `nucleo/BRIEF-CONCEPTO.md` y la estructura de `covarianza.html`.
   Si son varias páginas, construirlas en paralelo con agentes (fork) que reciben ese brief más la especificación
   de su página: imagen central, pasos, chequeos, retos, código de vida real y citas con página.
4. El concepto casi siempre ya está en `biblioteca/catalogo.js` como `estado: "planeado"`, con su ruta, orden, `tanda`,
   prerrequisitos y `aparece`. Al construirlo: `estado: "listo"`, borrar `tanda`, `agregado` con la fecha del día y
   `fuentes: [ids]` con las fuentes que la página cita. Si es nuevo, se agrega con todos los campos (ver la cabecera del archivo)
   y se suma su título a `siguientes` de sus prerrequisitos. Luego `python3 nucleo/verificar_catalogo.py` tiene que decir OK.
   Las rutas están en `window.UNIDADES`, agrupadas por `grupo` (Fundamentos, Cálculo, Álgebra lineal, Probabilidad y
   estadística, Aprendizaje automático). Si un concepto pertenece a más de una ruta, va en su ruta principal y en
   `tambien: [{ unidad, orden }]`. `aparece: [{ materia, ud }]` dice dónde lo enseñan en el máster (`window.MATERIAS`).
4b. Citar las fuentes: si el concepto sale de un libro o material que no está mapeado en `brain/fuentes/`, leerlo
   primero (o delegar la lectura) y guardar el mapa de citas con páginas verificadas antes de construir.
5. Si un concepto existente lo lista como prerrequisito o siguiente, se enlaza solo por título:
   usar exactamente el mismo título.
6. Verificar en el navegador (servidor `biblioteca`): recorrer todos los pasos, responder bien y mal
   cada chequeo, revisar ancho móvil (375 px) sin scroll horizontal, y sin errores de consola.
   Las pruebas se hacen en una pestaña propia con `http://127.0.0.1:8765` (otro origen, otro almacenamiento), nunca en
   `localhost:8765`, donde Francisco puede estar estudiando. Al terminar, borrar el progreso de prueba en esa pestaña:
   `localStorage.removeItem('biblioteca:v1')`.

## Construir por tandas

El catálogo tiene el mapa completo (186 conceptos al 2026-11-11) y cada planeado lleva `tanda` (1 primero), ordenada por las
fechas del campus (`window.TANDAS`). El plan completo está en `~/.claude/plans/users-franciscocastillo-brain-second-br-splendid-diffie.md`.
Por cada tanda:
1. Mapas de citas primero: por cada fuente nueva, leer el PDF (o delegar la lectura) y guardar `brain/fuentes/<fuente>.md`
   con tema, página del PDF, página impresa, desfase y erratas. Registrar la fuente en `biblioteca/fuentes.js`.
2. Escribir la especificación de cada página: imagen central, 5 a 8 pasos de lo plano a lo complejo, chequeos, trampa,
   vida real en Python y R, retos y citas con página.
3. Construir en paralelo con agentes (hasta 8 a la vez, `model: "opus"`), cada uno con `nucleo/BRIEF-CONCEPTO.md` más su especificación.
4. Integrar en el catálogo, correr `verificar_catalogo.py`, y verificar en el navegador.
5. Preparar el stage y redactar el mensaje de commit para Francisco.
Un componente visual que sirve a varias páginas (plano con arrastre, graficador de funciones, histograma, lienzo de grafos) va al núcleo.

## Estándar de cada página de concepto

Los tres pilares que pidió Francisco, más la vida real, en este orden:

**Cabecera.** Título, área y fuente, una bajada corta, y una caja "Antes de empezar, piénsalo tú"
donde escribe su hipótesis (se guarda con `Biblioteca.nota`). Se le muestra de nuevo más adelante
para que compare.

**Parte 1, paso a paso** (5 a 8 pasos). Dos columnas: el texto del paso a la izquierda y un
**escenario** interactivo a la derecha que cambia de modo en cada paso (capas que se encienden de a una).
- Cada paso construye una sola idea y termina con un **chequeo** que desbloquea el siguiente.
- El primer chequeo es una predicción antes de ver nada (fallar primero).
- Los chequeos piden predecir antes de tocar, calcular con los datos en vivo, o elegir con explicación.
- Las respuestas que el chequeo pide nunca se muestran en el escenario hasta resolverlo.
- Las fórmulas aparecen con números vivos que cambian cuando Francisco manipula el visual.
- Lo profundo va en un `details.profundizar` ("¿Por qué n − 1?"), no en notas al final.
- Incluir al menos una trampa o contraejemplo (en covarianza: la U con covarianza cero).

**Parte 2, así funciona en la vida real.** El algoritmo escrito en Python y en R, con una animación
que lo ejecuta línea por línea (ver la sección `vidareal` de `covarianza.html`).
- El código de la página se corre antes en los dos lenguajes y tiene que ser idéntico, carácter por
  carácter, al que se verificó. Hay Python con NumPy y R instalados en esta máquina.
- Se escribe con bucles explícitos para que se vea el algoritmo, y se cierra comparando contra la función
  de la librería (`np.cov`, `cov`). La versión vectorizada va en un `details.profundizar`.
- El motor es `B.vidaReal(root, {codigo, eventos, narrar, vars, visual, demora})` en el núcleo. Cada línea tiene
  un id semántico compartido por los dos lenguajes y la página precalcula una foto del estado por línea
  ejecutada; el motor pone los controles (reproducir, anterior, paso, ir al final, reiniciar, velocidad,
  Python o R, copiar código) y la página solo dibuja su visual.
- Los índices se muestran como los escribe cada lenguaje: desde 0 en Python y desde 1 en R.
- Una predicción antes de reproducir (por ejemplo, cuántas veces corre una línea) y dos o tres
  "trampas reales" de las librerías como retos (en covarianza: `rowvar` y `ddof`).
- Usar los mismos datos que el recorrido, para que el resultado coincida con algo que Francisco ya vio.

**Parte 3, retos** (6 a 12). Variar los tipos, todos registrados con `C.reto(id, ok)`:
- ojo clínico: decidir sin calcular, varias rondas generadas al azar
- construir: manipular el visual hasta cumplir objetivos
- a mano: cálculo con papel, datos aleatorios, pistas escalonadas
- cazar el error: un desarrollo con una línea mal
- propiedades: opción múltiple con una pista distinta para cada respuesta equivocada

**Parte 4, memoria.** Armar la fórmula pieza por pieza (con distractores) y tarjetas para voltear.

**Parte 5, lecturas.** `B.lecturas` arma la lista de todo lo citado en la página, agrupado por libro.

**Parte 6, conexiones.** Prerrequisitos y siguientes, leídos del catálogo con `B.conexiones(id)`, que también agrega
"Dónde te lo enseñaron" a partir de `aparece`. Los conceptos planeados salen sin enlace.

## Citas a los libros

Francisco quiere ir del visual al libro: entender aquí y después leer la versión técnica y reconocerla.
- Dentro de los pasos, `<cite class="cita" data-fuente data-pag data-pimp data-seccion data-que data-cuando>` se vuelve
  un chip con panel y enlace al PDF en esa página (`B.citas()`). `data-pag` es la página del archivo PDF; `data-pimp`
  la impresa.
- Diapositivas HTML de clase (Quarto/reveal.js, como las de SM142003): la fuente lleva `tipo: "diapositivas"` en `fuentes.js`
  y la cita usa `data-pag` = número de diapositiva y `data-ancla` = ancla de reveal.js sin `#/` (la da el mapa de citas).
- Solo se citan páginas verificadas, las de `brain/fuentes/*.md`. Nunca inventar una página.
- Entre 6 y 14 citas por página, cada una con qué hay y cuándo leerla. Si el material tiene un error o una
  inconsistencia, se dice en la página con naturalidad.
- Los enlaces `file://` solo abren cuando la biblioteca se abre con doble clic; servida por http, el botón copia la ruta.

Cuando aparece una confusión natural del concepto (en covarianza: por qué la matriz no queda entre −1 y 1),
se vuelve parte del recorrido como un recuadro `.destacado` con predicción, no queda solo en el chat.

## Núcleo (`nucleo.js`)

- `Biblioteca.concepto({id, retos: [...ids], pasos: n})` devuelve `C` con `pasoHecho`, `reto(id, ok)`, `dominio()`.
- `Biblioteca.pasos(root, {concepto, alEntrar(i), alTerminar})` arma el riel de pasos y la navegación;
  `completar(i)` abre el paso siguiente.
- `opcionMultiple`, `numerico`, `ordenar`, `cazarError`, `tarjetas`: ver comentarios en el archivo.
  En los textos, `$...$` se renderiza con KaTeX.
- El progreso vive en `localStorage` con la clave `biblioteca:v1`. Repaso espaciado a 1, 3, 7, 14 y 30 días.
- Si un componente nuevo sirve para más de un concepto, va al núcleo, no a la página.

## Estilo

- **Español neutro**, tuteando a Francisco en segunda persona ("toca", "puedes", "piénsalo"). Frases cortas.
  Nada de voseo ni regionalismos rioplatenses ("acá", "dar vuelta", "agarrar"). Lo pidió Francisco explícitamente.
- Colores semánticos fijos: `--j` y `--k` para variable 1 y 2, `--pos` y `--neg` para aporte positivo
  y negativo, `--accent` para todo lo que le pide pensar, `--ok` y `--bad` para correcto e incorrecto.
- Modo claro y oscuro con los tokens de `estilo.css`. Scripts externos solo de cdnjs con versión exacta.
- Sin emojis en ningún lado del código.
- Los datos de ejemplo se eligen para que las cuentas den limpias, y la página aclara que son inventados.

## Producción

Hay dos formas de desplegar, con la misma API (`/api/salud`, `/api/progreso`, `/api/historial`):
- **Vercel (la que usa Francisco)**: `git push` a `main`. `vercel.json` sirve `biblioteca/`, `api/index.py` guarda en
  Upstash Redis y `middleware.js` pide contraseña (`BIBLIOTECA_USUARIO`, `BIBLIOTECA_CLAVE`). Sin PDFs. Guía y estado: `VERCEL.md`.
  Dirección: https://matematicas-studio.vercel.app. La CLI de Homebrew tiene el Node roto: usar `node /opt/homebrew/bin/vercel ...`.
- **VPS con Docker**: `despliegue/desplegar.sh` (ver `despliegue/LEEME.md`). Caddy sirve también los PDF en `/pdf/`.

- `nucleo.js` sincroniza `biblioteca:v1` solo si `/api/salud` responde `ok: true`; si no, todo sigue en localStorage.
  `pdf: true` en la salud indica que el servidor tiene los PDF (solo Docker).
- La mezcla vive en un solo lugar, `api/index.py` (`mezclar`, `resumen`), y el servidor de Docker la importa.
  Une pasos, días y retos resueltos, y en las notas gana lo más reciente (`mod`).
- Si se agrega una ruta a `biblioteca/` fuera de las páginas, no hace falta tocar nada: Vercel sirve la carpeta entera.
- Para probar con Docker en local: `.env` con `DOMINIO=:80` y `PUERTO_HTTP=8080`. Al terminar, `docker compose down` y borrar `despliegue/datos/`.

## Git

Repositorio en GitHub: `FranJCastilloC/Matematicas_Studio`, rama `main`. Claude puede preparar el stage
(`git add`) y redactar el mensaje, pero **nunca crea commits ni hace push**: eso lo hace Francisco (regla global).
Nunca entran al repo: `despliegue/.env`, `despliegue/datos/`, `despliegue/pdfs/`, `media/` (ver `.gitignore`).
