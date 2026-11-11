---
type: contexto
area: biblioteca
date: 2026-11-06
slug: que-hacemos
title: "Qué es Math Videos"
tags: [biblioteca, matematicas, visualizacion]
status: active
related:
  - cliente
  - procesos
  - voz
sources:
  - repo:CLAUDE.md
  - repo:biblioteca/catalogo.js
superseded_by: null
---

# Qué es Math Videos

Una biblioteca propia e interactiva de los conceptos, fórmulas e ideas matemáticas que Francisco va estudiando.

## Qué es

Francisco lo pidió así: "armar una biblioteca propia e interactiva sobre todos los conceptos, formulas e ideas matematicas que vaya estudiando".
La biblioteca "se irá armando con el tiempo", una sesión por tema matemático, todas en esta misma carpeta.

Cada concepto tiene que tener tres cosas, en las palabras de Francisco:

1. Visual interactivo, "muy interactivo".
2. Paso a paso "para entender el contexto matemático a fondo", estructurado como secuencia.
3. "Test y fórmulas por hacer que terminen de activar nuestro cerebro y aprendérnosla".

Tiene que ser "super interactivo y retador, que ponga mi mente a pensar".

Y un cuarto pilar que pidió el 5 de noviembre de 2026 por la noche: **citar los libros**. "Como no quiero quedarme de lado y no leer nada de los libros",
cada página lo manda al PDF exacto (archivo y página) para que, después de entender con las manos, lea la versión técnica y diga
"okey, ahora sí lo entiendo". Los temas que son muy de Python (Raschka cap. 5) se explican con Python y con las explicaciones de código
del libro, pero "con el mismo tono y nivel intuitivo".

## Qué hay hoy

- La biblioteca vive en `biblioteca/`, organizada por rutas de estudio. La primera ruta es la UD1 del máster (estadística descriptiva
  y análisis): once conceptos, de media y mediana hasta PCA, LDA y t-SNE.
- Las fuentes que se citan están en la carpeta brain de Francisco (fuera del proyecto): el material de la UD1, Raschka cap. 5,
  Nield caps. 3 y 4, Brasil vol. 1 caps. 5 y 6, Jansen cap. 13. Sus mapas de citas están en `brain/fuentes/`.
- La carpeta también tiene escenas de Manim que generan videos, y sus renders en `media/`.

**Abierto:** qué papel juegan los videos de Manim ahora que existe la biblioteca. ¿Se siguen haciendo, o la biblioteca los reemplaza?
**Abierto:** si la biblioteca es solo para Francisco o la va a compartir con alguien.

## Cross-refs
- [[cliente]] — para quién se construye cada página y por qué
- [[procesos]] — cómo se suma un concepto nuevo
- [[voz]] — cómo se escriben las páginas
