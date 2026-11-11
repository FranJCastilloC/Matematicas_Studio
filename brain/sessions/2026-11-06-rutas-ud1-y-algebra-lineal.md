---
type: session
area: biblioteca
date: 2026-11-06
slug: 2026-11-06-rutas-ud1-y-algebra-lineal
title: "Rutas UD1 y álgebra lineal, con citas a los libros"
tags: [biblioteca, ud1, algebra-lineal, citas, rutas, agentes]
status: active
related:
  - 2026-11-05-biblioteca-creada-con-covarianza
sources:
  - repo:biblioteca/catalogo.js
  - repo:biblioteca/fuentes.js
  - repo:biblioteca/nucleo/BRIEF-CONCEPTO.md
  - repo:biblioteca/nucleo/nucleo.js
superseded_by: null
---

# Rutas UD1 y álgebra lineal, con citas a los libros

## Contexto

Francisco trajo el material de la UD1 del máster (teoría y diapositivas), su propio resumen de la unidad, y cinco libros:
Raschka cap. 5, Nield caps. 3 y 4, Brasil vol. 1, Jansen cap. 13. Pidió terminar todos los temas de la unidad y, a mitad del
trabajo, sumar el libro de Brasil completo. Condición central: citar los libros con la página exacta mientras se explica, sin
perder la esencia intuitiva de covarianza.

## Decisiones

- **Citas como pieza del núcleo:** `<cite class="cita">` se vuelve un chip con panel y enlace al PDF en la página exacta; `B.lecturas` arma la lista al final de cada página. Las rutas y los PDF viven en `biblioteca/fuentes.js`.
- **Mapas de citas antes de construir:** agentes lectores mapearon cada fuente con páginas verificadas en `brain/fuentes/`. Las páginas solo citan lo que está en esos mapas.
- **Rutas de estudio en el catálogo:** `window.UNIDADES` con `ud1` y `bml1`; un concepto puede estar en dos rutas con `tambien`. Eigenvectores y PCA están en las dos.
- **Construcción en paralelo:** un agente por página con el brief común `nucleo/BRIEF-CONCEPTO.md` y una especificación propia. La sesión principal verifica cada página en el navegador.
- **El motor de vida real pasó al núcleo** (`B.vidaReal`), y covarianza se refactorizó para usarlo.
- **Las erratas de los libros y las inconsistencias del material se dicen en la página**, como parte de entender: varianza entre n y covarianza entre n − 1 en la UD1, el espacio nulo mal calculado en Brasil, "single value decomposition", y otras.
- **Las respuestas de un chequeo no se muestran en el escenario hasta resolverlo:** en la revisión se corrigieron eigenvectores (direcciones visibles) y SVD (un chequeo con la misma respuesta que el paso anterior).

## Output

- Ruta UD1, 11 conceptos: media, mediana y moda · varianza y desviación · percentiles y box plot · asimetría y curtosis · covarianza · correlación de Pearson · estandarización · codificación y faltantes · eigenvectores · PCA · LDA y t-SNE.
- Ruta Before ML vol. 1: vectores · producto punto y coseno · span y cambio de base · matriz como transformación · determinante · inversa y sistemas · eigenvectores · diagonalización · SVD · PCA.
- Núcleo: `fuentes.js`, citas y lecturas, `B.vidaReal`, `nucleo/verificar.py`, `nucleo/prueba.js`, `nucleo/BRIEF-CONCEPTO.md`, reglas contra desbordes y `[hidden]` que siempre gana.
- Índice agrupado por ruta, con "siguiente en la ruta" y la sección de libros.
- Mapas: `brain/fuentes/ud1.md`, `raschka-cap5.md`, `nield-cap3.md`, `algebra-lineal.md`, `jansen-cap13.md`, `brasil-vol1.md`.

### Actualización [08:05]
- Revisión en el navegador de las 19 páginas, en escritorio y a 375 px: todas pasan `prueba.js`.
- Correcciones de la revisión: arranque de percentiles y LDA (variables usadas antes de existir), desbordes en celular (tablas, código en línea, `.tabla-wrap` al núcleo), `[hidden]` que siempre gana (el editor de B del determinante no se ocultaba), cuadrícula demasiado densa en diagonalización e inversa cuando las columnas están casi alineadas, direcciones reveladas antes de tiempo en eigenvectores, y el chequeo del paso 4 de SVD con la misma respuesta que el paso 3.
- La prueba de humo ahora acepta marcadores de reto dentro de un `.check`.

## Pendiente

- La entrevista de contexto sigue abierta.
- Varios agentes se cortaron por el límite de uso de 5 horas; sus archivos quedaron completos y se verificaron. Conviene no lanzar más de 8 en paralelo.
- Los enlaces `file://` a los PDF solo abren cuando la biblioteca se abre con doble clic.

## Cross-refs
- [[2026-11-10-produccion-docker-e-historial-de-progreso]] — los PDF que se citan aquí se sirven en producción detrás de contraseña
- [[2026-11-05-biblioteca-creada-con-covarianza]] — la sesión anterior, donde se creó la biblioteca y su estándar
- [[que-hacemos]] — el cuarto pilar, citar los libros, se agregó en esta sesión

## Fuentes
- [[sources#fuentes-js]]
- [[sources#mapas-de-citas]]
- [[sources#brief-concepto]]
