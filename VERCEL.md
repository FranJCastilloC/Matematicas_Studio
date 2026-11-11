# Biblioteca en Vercel

Las páginas se publican solas con cada `git push`. El progreso y su historial se guardan en Upstash Redis.
Todo entra en los planes gratis (Vercel Hobby y Upstash Free). Los PDF no se suben: las citas muestran
libro y página, y el PDF se abre desde tu Mac.

Piezas: `vercel.json` (sirve `biblioteca/` y manda `/api/*` a la función), `api/index.py` (la API del progreso),
`middleware.js` (pide usuario y contraseña) y `.vercelignore`.

## Estado actual

- Proyecto: `matematicas-studio` en el equipo `francisco-castillos-projects-2eacffcf`, conectado a GitHub.
- Dirección: https://matematicas-studio.vercel.app
- Base: Upstash Redis `biblioteca-progreso` (plan Free, región iad1), conectada al proyecto.
- `BIBLIOTECA_USUARIO=francisco` en producción. `BIBLIOTECA_CLAVE` la pone Francisco.

## Primera vez (unos 10 minutos, todo en vercel.com)

1. **Importa el repo.** En vercel.com, *Add New → Project* y elige `Matematicas_Studio`.
   Deja *Framework Preset* en *Other*: el resto lo lee de `vercel.json`. No despliegues todavía si te lo deja.
2. **Crea la base de datos.** En el proyecto: *Storage → Create Database → Upstash (Redis)*, plan *Free*,
   y conéctala al proyecto. Vercel agrega solas las variables `KV_REST_API_URL` y `KV_REST_API_TOKEN`.
3. **Pon la contraseña.** En *Settings → Environment Variables*, agrega:
   - `BIBLIOTECA_USUARIO`: el usuario que quieras, por ejemplo `francisco`
   - `BIBLIOTECA_CLAVE`: tu contraseña
4. **Despliega.** *Deployments → Redeploy*, o haz cualquier `git push`. Las variables nuevas solo valen
   a partir del siguiente despliegue.

Al abrir la dirección `.vercel.app`, el navegador pide usuario y contraseña. En el índice aparece "Historial"
con un punto verde cuando el progreso quedó guardado.

## Si algo falla

- **Pide contraseña y dice "Falta configurar"**: faltan las variables del paso 3, o no volviste a desplegar.
- **No aparece "Historial" en el índice**: la base de Upstash no está conectada (paso 2). La biblioteca
  funciona igual, pero guarda solo en el navegador.

## Respaldo

En `historial.html`, "Descargar el progreso actual" baja un JSON con todo. Cada foto del historial también se descarga.
