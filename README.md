# Matematicas_Studio

Biblioteca personal e interactiva de matemáticas: una página por concepto, con un recorrido paso a paso,
el algoritmo en Python y R animado línea por línea, retos y citas a la página exacta de cada libro.

- `biblioteca/`: el sitio. Ábrelo con doble clic en `biblioteca/index.html`, o sírvelo con
  `python3 -m http.server 8765 --directory biblioteca`.
- `despliegue/`: producción con Docker (Caddy con HTTPS y contraseña, y un servidor Python con SQLite
  que guarda el progreso y su historial). Instrucciones en `despliegue/LEEME.md`.
- `brain/`: mapas de citas de los libros y contexto del proyecto.
- `matriz_covarianza.py`, `primer_video.py`: escenas de Manim.

Los PDF de los libros no están en el repositorio.
