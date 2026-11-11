---
type: session
area: biblioteca
date: 2026-11-05
slug: 2026-11-05-biblioteca-creada-con-covarianza
title: "Biblioteca creada, con covarianza como primer concepto"
tags: [biblioteca, covarianza, estandar, nucleo, retos]
status: active
related:
  - 2026-11-06-rutas-ud1-y-algebra-lineal
sources:
  - repo:CLAUDE.md
  - repo:biblioteca/catalogo.js
  - repo:biblioteca/conceptos/covarianza.html
  - repo:biblioteca/nucleo/nucleo.js
superseded_by: null
---

# Biblioteca creada, con covarianza como primer concepto

## Contexto

Francisco contó que le cuesta visualizar lo abstracto y pidió una biblioteca interactiva de los conceptos que va estudiando.
Trajo como ejemplo `Covarianza fila por fila.html`: le gustó el visual, pero le faltaban retos y un paso a paso en secuencia, y las explicaciones estaban abajo.

## Decisiones

- **Núcleo compartido** en `biblioteca/nucleo/`: estilos, pasos con candado, tipos de reto y progreso. Así cada concepto nuevo sale igual y con menos código.
- **Imagen central de covarianza:** cada punto aporta un rectángulo con signo entre el punto y el centro. Todo el recorrido gira alrededor de ella.
- **Pasos con candado:** cada paso termina con un chequeo que abre el siguiente. El primero es una predicción, para fallar primero.
- **Las respuestas que pide un chequeo se ocultan** en el visual hasta resolverlo.
- **Progreso en localStorage** con repaso espaciado a 1, 3, 7, 14 y 30 días. No necesita servidor.
- **El visual original se conservó** como laboratorio dentro del concepto, sin borrar el archivo de la raíz.
- **Voseo** en las páginas, siguiendo el estilo del ejemplo y de las instrucciones globales.
- **Brain con backend de archivos locales**, contenido en español.

### Actualización [22:06]
- **Contexto sin entrevista:** los cuatro archivos de `contexto/` se escribieron con lo que Francisco dijo en la sesión. Lo que no dijo quedó como `**Abierto:**`, en lugar de inventarlo.
- **Un solo nodo por la sesión:** la instalación del brain se registró dentro de este nodo, no en uno aparte, porque es parte del mismo trabajo del día.

### Actualización [22:18]
- **Español neutro, no voseo.** Francisco pidió dejar el español argentino. Reemplaza la decisión de voseo de arriba. Todo lo escrito pasó a tuteo y sin regionalismos rioplatenses.

### Actualización [22:25]
- **Covarianza no es correlación, destacado en el paso 7.** Francisco preguntó si era un error que la matriz no diera entre −1 y 1. No lo es: la covarianza no tiene límite fijo, su tope es $\sigma_X\sigma_Y$. El laboratorio va de −1 a 1 porque usa datos estandarizados. Como la confusión es natural, se volvió parte del recorrido en lugar de quedar en el chat.
- **Predecir antes de estandarizar:** el botón de estandarizar se activa recién después de predecir qué valdrá la diagonal. El paso 7 ahora se cierra con dos chequeos.

### Actualización [22:31]
- **Nueva sección "Así funciona en la vida real"**, pedida por Francisco. El algoritmo en Python y en R con una animación que lo ejecuta línea por línea, como el laboratorio de la matriz. Pasa a ser parte fija del estándar: es la Parte 2 de cada concepto.
- **Bucles explícitos y no `np.cov`:** así se ve el algoritmo. El programa termina comparando contra la función de la librería, y la versión de una línea queda como profundización porque es la forma que aparece en PCA.
- **El código se verifica antes de publicarlo:** se corrió en Python 3 con NumPy 2.1 y en R 4.6. Lo que muestra la página es idéntico a lo que se corrió.

## Output

- `biblioteca/index.html`: catálogo con progreso, repaso y conceptos sugeridos.
- `biblioteca/conceptos/covarianza.html`: 7 pasos, 10 retos, fórmula de memoria, tarjetas y conexiones.
- `biblioteca/conceptos/covarianza-matriz-lab.html`: copia del visual original con enlace de vuelta.
- `biblioteca/nucleo/estilo.css` y `biblioteca/nucleo/nucleo.js`.
- `biblioteca/catalogo.js` con la entrada de covarianza.
- `CLAUDE.md` en la raíz con el estándar y el flujo.
- `.claude/launch.json` con el servidor local `biblioteca` en el puerto 8765 para probar en el panel.
- El brain: `brain/`, `.claude/commands/brain.md` y `.vscode/settings.json`.

### Actualización [22:06]
- `brain/contexto/`: que-hacemos, cliente, procesos y voz.
- `brain/sources.md` con los archivos clave de la biblioteca, la escena de Manim y el libro de Raschka.
- Verificado: sin placeholders sin reemplazar, sin wikilinks rotos, y la query "¿quiénes somos y qué hacemos?" responde con el proyecto.

### Actualización [22:18]
- Pasados a español neutro: las páginas de la biblioteca, el laboratorio, `nucleo.js`, el `CLAUDE.md` de la raíz, el esquema del brain, el comando `/brain` y `contexto/voz.md`.
- El archivo original `Covarianza fila por fila.html` de la raíz quedó sin tocar.

### Actualización [22:25]
- `biblioteca/conceptos/covarianza.html`: recuadro destacado en el paso 7 con la fórmula de la correlación, una predicción, el botón para estandarizar y la cuenta Cov / (σσ) del par elegido. La matriz pasa a 1.00 en la diagonal y 0.64, −0.96 y −0.79 fuera de ella.
- El plano ahora puede mostrar datos estandarizados, con ejes en desvíos estándar.
- Nuevo reto: qué par está más relacionado cuando solo se conoce la covarianza. Son 11 retos en total.
- Nueva tarjeta: si la covarianza siempre está entre −1 y 1.

### Actualización [22:31]
- `biblioteca/conceptos/covarianza.html`: sección `vidareal` con código animado en Python y R, una predicción de cuántas veces corre la suma (36) y dos trampas reales como retos. La primera es `np.cov` sin `rowvar=False`, que da 6 × 6. La segunda es `np.var`, que divide entre n. Son 14 retos en total.
- `CLAUDE.md` de la raíz: la vida real queda en el estándar como Parte 2, y las confusiones naturales del concepto van como recuadro destacado.

## Pendiente

- Confirmar voseo o tuteo en las páginas.
- Decidir qué pasa con los videos de Manim y la carpeta `media/`.
- Próximos conceptos sugeridos por el catálogo: correlación de Pearson, PCA, eigenvectores y eigenvalores.
- El área `pycache` del brain no corresponde a ningún trabajo real. Se puede quitar del enum.

### Actualización [22:06]
- Hacer la entrevista de contexto para cerrar los puntos abiertos: temas de la maestría, si la biblioteca se comparte, palabras que no quiere ver.

### Actualización [22:18]
- Resuelto: el pendiente de confirmar voseo o tuteo. Es español neutro con tuteo.

## Cross-refs
- [[2026-11-10-produccion-docker-e-historial-de-progreso]] — el progreso en localStorage ahora se sincroniza con un servidor y tiene historial
- [[2026-11-06-rutas-ud1-y-algebra-lineal]] — la sesión siguiente: rutas completas y citas a los libros
- [[que-hacemos]] — esta sesión construyó lo que describe ese contexto
- [[procesos]] — el recorrido que se definió aquí para sumar conceptos

## Fuentes
- [[sources#estandar-biblioteca]]
- [[sources#concepto-covarianza]]
- [[sources#lab-matriz-covarianza]]
- Origen histórico (no modificar): `Covarianza fila por fila.html`
