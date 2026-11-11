#!/usr/bin/env bash
# Sube la biblioteca al VPS y la reconstruye. Uso: ./despliegue/desplegar.sh
# Lee VPS y CARPETA_VPS de despliegue/.env. Nunca toca la carpeta datos/ del servidor.
set -euo pipefail
cd "$(dirname "$0")/.."
VPS=$(grep -E '^VPS=' despliegue/.env | cut -d= -f2-)
CARPETA=$(grep -E '^CARPETA_VPS=' despliegue/.env | cut -d= -f2-)
: "${VPS:?falta VPS en despliegue/.env}"
: "${CARPETA:?falta CARPETA_VPS en despliegue/.env}"

python3 despliegue/preparar_pdfs.py
ssh "$VPS" "mkdir -p '$CARPETA'"
rsync -az --delete --exclude .DS_Store biblioteca "$VPS:$CARPETA/"
rsync -az --delete --exclude .DS_Store --exclude datos --exclude respaldos \
  despliegue .dockerignore "$VPS:$CARPETA/"
ssh "$VPS" "cd '$CARPETA/despliegue' && docker compose up -d --build && docker compose ps"
echo "Listo."
