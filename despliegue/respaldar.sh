#!/usr/bin/env bash
# Trae a esta Mac una copia del progreso guardado en el VPS: despliegue/respaldos/progreso-FECHA.db
# Uso: ./despliegue/respaldar.sh
set -euo pipefail
cd "$(dirname "$0")"
VPS=$(grep -E '^VPS=' .env | cut -d= -f2-)
CARPETA=$(grep -E '^CARPETA_VPS=' .env | cut -d= -f2-)
FECHA=$(date +%Y-%m-%d-%H%M)
mkdir -p respaldos
ssh "$VPS" "cd '$CARPETA/despliegue' && docker compose exec -T app python -c \"import sqlite3; s=sqlite3.connect('/datos/progreso.db'); d=sqlite3.connect('/datos/respaldo.db'); s.backup(d); d.close()\""
scp "$VPS:$CARPETA/despliegue/datos/respaldo.db" "respaldos/progreso-$FECHA.db"
echo "Respaldo en despliegue/respaldos/progreso-$FECHA.db"
