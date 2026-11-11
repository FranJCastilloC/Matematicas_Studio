FROM python:3.12.7-slim
WORKDIR /app
COPY despliegue/app/servidor.py .
COPY api/index.py index.py
ENV RUTA_DB=/datos/progreso.db PUERTO=8000 PYTHONUNBUFFERED=1
VOLUME /datos
EXPOSE 8000
HEALTHCHECK --interval=30s --timeout=3s CMD python -c "import urllib.request; urllib.request.urlopen('http://127.0.0.1:8000/api/salud')"
CMD ["python", "servidor.py"]
