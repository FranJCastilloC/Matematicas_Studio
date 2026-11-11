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

- El 11 de noviembre de 2026 Francisco pidió cubrir todo lo que tiene que estudiar (la carpeta `~/brain`), con una regla:
  "esto no es una biblioteca de materias si no de conceptos", con enfoque matemático. Lo no matemático (IA empresarial, bases de
  datos, redes) no tiene páginas; las materias solo se citan para atar ("dónde te lo enseñaron").
- La biblioteca vive en `biblioteca/`, organizada en 20 rutas matemáticas agrupadas en Fundamentos (la escalera completa de
  `~/brain/03-Matematicas`), Cálculo, Álgebra lineal, Probabilidad y estadística, y Aprendizaje automático.
  El catálogo tiene el mapa completo: 186 conceptos, 19 construidos y 167 planeados en 5 tandas ordenadas por las fechas del campus.
- Las fuentes que se citan están en `~/brain` (fuera del proyecto). Hay mapas de citas en `brain/fuentes/` para el material de la UD1,
  Raschka cap. 5, Nield caps. 3 y 4, Brasil vol. 1 y Jansen cap. 13; cada tanda mapea las fuentes nuevas antes de construir.
- La carpeta también tiene escenas de Manim que generan videos, y sus renders en `media/`.

**Abierto:** qué papel juegan los videos de Manim ahora que existe la biblioteca. ¿Se siguen haciendo, o la biblioteca los reemplaza?
**Abierto:** si la biblioteca es solo para Francisco o la va a compartir con alguien.

## Cross-refs
- [[cliente]] — para quién se construye cada página y por qué
- [[procesos]] — cómo se suma un concepto nuevo
- [[voz]] — cómo se escriben las páginas
