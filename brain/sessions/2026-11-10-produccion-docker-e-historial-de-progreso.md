---
type: session
area: despliegue
date: 2026-11-10
slug: 2026-11-10-produccion-docker-e-historial-de-progreso
title: "Producción con Docker, historial de progreso y repositorio en GitHub"
tags: [despliegue, docker, caddy, sqlite, historial, sincronizacion, git, github]
status: active
related:
  - 2026-11-06-rutas-ud1-y-algebra-lineal
  - 2026-11-05-biblioteca-creada-con-covarianza
  - procesos
sources:
  - repo:despliegue/docker-compose.yml
  - repo:despliegue/app/servidor.py
  - repo:despliegue/web/Caddyfile
  - repo:despliegue/LEEME.md
  - repo:biblioteca/nucleo/nucleo.js
  - repo:biblioteca/historial.html
  - url:https://github.com/FranJCastilloC/Matematicas_Studio
superseded_by: null
---

# Producción con Docker, historial de progreso y repositorio en GitHub

## Contexto

Francisco quiso llevar la biblioteca a producción. Sigue siendo personal, pero quería conservar por lo menos
un histórico, y propuso dockerizarla. Hasta ahora el progreso vivía solo en el `localStorage` del navegador
(se perdía al borrar datos o al cambiar de equipo), y las citas abrían los PDF con `file://` desde su Mac.

Eligió en el selector:
- Histórico = **su progreso de estudio** (no versiones de las páginas).
- Destino = **un VPS propio**.
- PDFs = **disponibles en el servidor, detrás de contraseña**.

Al final pidió subir el proyecto a un repositorio de GitHub.

## Decisiones

- **Dos contenedores.** `web` es Caddy: HTTPS automático, `basic_auth` para todo y los PDF en `/pdf/`.
  `app` es Python solo con la biblioteca estándar y SQLite. Así no hay dependencias que mantener.
- **El progreso se mezcla en el servidor, no se pisa.** Se unen los pasos, los días y los retos resueltos.
  En las notas gana el lado con el `mod` más reciente (`actualizar` ahora pone `p.mod = Date.now()`).
  Con esto puede estudiar en dos dispositivos sin perder nada. La mezcla vive solo en `servidor.py`,
  para no duplicarla en JS.
- **Historial como fotos.** Como máximo una foto cada 10 minutos de actividad; dentro de esa ventana se
  actualiza la última. Se ven y se descargan en `historial.html`.
- **Sincronización opcional en `nucleo.js`.** Solo se activa si responde `/api/salud`. Con doble clic o con
  el servidor local de pruebas, todo sigue igual que antes. Si el servidor trae progreso nuevo al cargar,
  la página se recarga una vez (protegida con `sessionStorage`).
- **URLs absolutas con `location.origin`.** Al probar con la contraseña dentro de la URL, `fetch` rechazaba
  las rutas relativas. Las URLs absolutas lo evitan.
- **Solo los PDF citados.** Solo suben los PDF que aparecen en `fuentes.js`. `preparar_pdfs.py` los copia a
  `despliegue/pdfs/` con su ruta relativa a `brain/`.
- **Repositorio sin commits de Claude.** Claude hizo `git init`, conectó el remoto, creó el `.gitignore` y el
  `README`, y dejó 68 archivos en el stage. El commit y el push los hace Francisco (regla global).
  Fuera del repo quedan `despliegue/.env`, `datos/`, `pdfs/`, `respaldos/` y `media/`.
- **Voseo corregido** en dos mensajes del núcleo ("Pegala", "Abri").

## Output

- `despliegue/`: `docker-compose.yml`, `app/Dockerfile`, `app/servidor.py`, `web/Dockerfile`, `web/Caddyfile`,
  `.env.ejemplo`, `preparar_pdfs.py`, `desplegar.sh`, `respaldar.sh`, `LEEME.md` y `.gitignore`.
- `biblioteca/historial.html`: curva de pasos y retos en el tiempo, y la lista de fotos para descargar.
- `biblioteca/nucleo/nucleo.js`: sincronización con `/api/progreso`, `B.nube`, el evento `biblioteca:nube`
  y la apertura de PDF en `/pdf/`.
- `biblioteca/index.html`: enlace "Historial" con un indicador de estado y un pie que cambia en producción.
- En la raíz: `.dockerignore`, `.gitignore` y `README.md`. `CLAUDE.md` suma la sección Producción y la nueva sección Git.
- Probado en local con Docker (puerto 8080):
  - Sin contraseña da 401.
  - La sincronización funciona y el progreso se recupera en un navegador vacío.
  - Los PDF abren en su página.
  - El historial se ve bien y no hay scroll horizontal a 375 px.
  - Sin errores de consola.
  - Al terminar se borraron los datos de prueba.

## Pendiente

- Francisco: contratar el VPS, instalar Docker, apuntar el dominio y armar `despliegue/.env` con su
  contraseña real. El `.env` actual es de prueba local. Después correr `./despliegue/desplegar.sh`.
- Francisco: elegir si el repositorio es privado o público. Si es público, se ven `brain/` y las rutas
  de su Mac en `fuentes.js`.
- Francisco: crear el commit y hacer el push (el mensaje ya está redactado).
- Hacer respaldos periódicos con `./despliegue/respaldar.sh` o con los snapshots del proveedor.
- El resumen del historial no cuenta las notas: una foto que solo tiene hipótesis muestra 0 conceptos.

## Cross-refs
- [[2026-11-06-rutas-ud1-y-algebra-lineal]] — los PDF citados en esa sesión son los que ahora se sirven en `/pdf/`
- [[2026-11-05-biblioteca-creada-con-covarianza]] — el progreso en localStorage que se diseñó ahí ahora se sincroniza con el servidor
- [[procesos]] — la regla de no crear commits gobernó cómo se armó el repositorio

## Fuentes
- [[sources#despliegue]]
- [[sources#nucleo]]
- [Repositorio en GitHub](https://github.com/FranJCastilloC/Matematicas_Studio)
