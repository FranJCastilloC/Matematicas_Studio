---
type: contexto
area: biblioteca
date: 2026-11-05
slug: procesos
title: "Cómo se trabaja: de un concepto a una página"
tags: [flujo, biblioteca, sesiones]
status: active
related:
  - que-hacemos
  - cliente
  - voz
sources:
  - repo:CLAUDE.md
superseded_by: null
---

# Cómo se trabaja: de un concepto a una página

El recorrido de un concepto desde que Francisco lo trae hasta que queda en la biblioteca.

## El recorrido

1. Francisco abre una sesión en esta carpeta y trae el concepto matemático, a veces con material.
2. Claude, con el brain y Claude Code, desarrolla la página. Francisco lo describió como: "yo solo voy a traer el concepto matemático y ustedes me ayudarán con el desarrollo".
3. La página se construye con el estándar escrito en el `CLAUDE.md` de la raíz y se suma al índice de la biblioteca.
4. Francisco estudia en la página y vuelve a hacer los retos cuando el índice le avisa que toca repasar.
5. Al final de la sesión se corre `/brain ingest` para dejar registro.

## Qué está escrito

- El estándar de página y el flujo están en el `CLAUDE.md` de la raíz del proyecto.
- La lista de conceptos está en `biblioteca/catalogo.js`.

## Reglas fijas de Francisco

- Nunca crear commits ni preguntar si se puede. Solo redactar el mensaje.
- Nunca usar emojis en el código.

**Abierto:** si Francisco quiere revisar cada página antes de darla por terminada, o prefiere que se entregue directo.
**Abierto:** qué parte de este recorrido se rompe más seguido. Todavía no hay historia para saberlo.

## Cross-refs
- [[que-hacemos]] — qué produce este recorrido
- [[cliente]] — quién lo dispara y lo usa
- [[voz]] — cómo se escribe lo que sale de aquí
