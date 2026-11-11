# Biblioteca en producción

La biblioteca corre en un VPS con Docker. Son dos contenedores:

- **web** (Caddy): sirve las páginas y los PDF citados, saca el certificado HTTPS solo y pide usuario y contraseña.
- **app** (Python + SQLite): guarda tu progreso de estudio y una foto con fecha cada 10 minutos de estudio como máximo.

El progreso sigue viviendo también en el navegador. Al abrir una página se mezcla con el del servidor
sin perder nada, así que puedes estudiar en la Mac y en el celular. El historial está en `/historial.html`.

Abierta con doble clic o con el servidor local de pruebas (puerto 8765), la biblioteca funciona como antes, sin servidor.

## Primera vez

1. **Contrata un VPS** con Ubuntu (Hetzner CX22 o DigitalOcean de 1 GB alcanzan) y agrega tu llave SSH.
2. **Instala Docker** en el VPS: `curl -fsSL https://get.docker.com | sh`
3. **Apunta tu dominio**: un registro A, por ejemplo `biblioteca.tudominio.com`, con la IP del VPS.
4. **Arma el `.env`** en tu Mac: copia `despliegue/.env.ejemplo` como `despliegue/.env` y complétalo.
   El hash de la contraseña sale de:
   `docker run --rm caddy:2.8.4-alpine caddy hash-password --plaintext 'tu-contrasena'`
   (en el `.env`, cada `$` del hash va doble: `$$`).
5. **Despliega**: `./despliegue/desplegar.sh`

## Cada vez que cambie algo

`./despliegue/desplegar.sh` copia los PDF citados, sube la biblioteca y reconstruye. Nunca toca `datos/` del servidor.

## Respaldos

- El historial vive en el VPS, en `despliegue/datos/progreso.db`.
- `./despliegue/respaldar.sh` trae una copia a tu Mac en `despliegue/respaldos/`. Hazlo cada tanto,
  o activa los snapshots automáticos de tu proveedor de VPS.

## Probar en tu Mac

Con `DOMINIO=:80` y `PUERTO_HTTP=8080` en el `.env`:
`cd despliegue && docker compose up -d --build` y abre http://localhost:8080.
Para apagarlo: `docker compose down`.
