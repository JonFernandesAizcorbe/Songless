<p align="center">
  <img src="/static/favicon.png" alt="Song Game Banner" width="600">
</p>

# 🎵 Adivina la Canción — Song Game (FastAPI)

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.10+-blue?logo=python" alt="Python Badge">
  <img src="https://img.shields.io/badge/FastAPI-Framework-green?logo=fastapi" alt="FastAPI Badge">
  <img src="https://img.shields.io/badge/YouTube-Playlist-red?logo=youtube" alt="YouTube Badge">
  <img src="https://img.shields.io/badge/Status-Active-success" alt="Status Badge">
</p>

---

## 🎮 Descripción del proyecto

**Song Game** es un juego web desarrollado en **Python con FastAPI** donde el jugador escucha fragmentos progresivos de una canción y debe adivinar su nombre.

El sistema obtiene canciones directamente desde una **playlist pública de YouTube**, generando una experiencia dinámica y personalizable.

Incluye:
- 🎧 Reproducción por fragmentos
- 🔍 Autocompletado de canciones
- ⏭️ Botón de saltar canción
- 📜 Historial de respuestas
- 🎯 Rondas progresivas

---

## 🎯 Objetivos

- Practicar el uso de **FastAPI**
- Integrar datos externos (YouTube playlist)
- Desarrollar un juego interactivo con JavaScript
- Aplicar buenas prácticas en frontend y backend
- Crear una aplicación fácilmente configurable

---

## ⚙️ Tecnologías utilizadas

- 🐍 **Python 3.10+**
- ⚡ **FastAPI**
- 🎵 **YouTube Data (playlist)**
- 🌐 **HTML / CSS / JavaScript**
- 📦 **Uvicorn**
- 🧠 Programación modular

---

## 📦 Requisitos previos

Debes tener instalado:

- Python 3.10 o superior  
- Visual Studio Code  
- Git  
- Cuenta de GitHub  

Descargas:

- https://www.python.org/downloads/
- https://code.visualstudio.com/
- https://git-scm.com/downloads/
- https://github.com/

---

## 🚀 Clonar el repositorio desde GitHub (VS Code)

1. Abre Visual Studio Code
2. Pulsa:

```bash
Ctrl + Shift + P
```

3. Escribe:

```bash
Git: Clone
```
4. Pega la URL del repositorio:

```bash
https://github.com/USUARIO/NOMBRE_REPO.git
```

5. Selecciona una carpeta

6. Pulsa Sí cuando VS Code pregunte si deseas abrir el proyecto

🧩 Crear entorno virtual (recomendado)

Abre la terminal en VS Code:

Terminal → Nuevo terminal

Windows

```bash
python -m venv venv
venv\Scripts\activate
```

macOS / Linux

```bash
python3 -m venv venv
source venv/bin/activate
```

📦 Instalar dependencias

Con el entorno virtual activo:
```bash
pip install -r requirements.txt
```
▶️ Ejecutar el proyecto
```bash
uvicorn app.main:app --reload
```

Abre tu navegador en:
```bash
http://127.0.0.1:8000
```
🎶 Cambiar la playlist de YouTube

Abre el archivo:
```bash
app/main.py
```

Busca la línea:
```bash
PLAYLIST_URL = "https://www.youtube.com/playlist?list=XXXXXXXX"
```
Sustitúyela por tu playlist

Ejemplo:
```bash
PLAYLIST_URL = "https://www.youtube.com/playlist?list=PLFgquLnL59amLujt0N6_Ez3pM8c7q5R2P"
```

Guarda el archivo y reinicia el servidor:
```bash
Ctrl + C
uvicorn app.main:app --reload
```
📁 Estructura del proyecto

```bash
project/
│
├── app/
│   ├── main.py
│   └── templates/
│       └── index.html
│
├── static/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── app.js
│
├── requirements.txt
└── README.md
```
⚠️ Problemas comunes
❌ Python no reconocido

Asegúrate de marcar esta opción al instalar Python:

☑ Add Python to PATH
❌ Error con la playlist

Comprueba que:

La playlist es pública

Es una URL de playlist (no de vídeo)

Has reiniciado el servidor tras cambiarla

📝 Notas

No cierres la terminal mientras esté activo uvicorn

El botón Empezar juego / Siguiente canción reinicia la partida

El autocompletado funciona escribiendo parte del nombre

El proyecto solo se obtiene desde GitHub

👨‍💻 Autor

Proyecto desarrollado como parte del curso Python + IA
Autor: Tu nombre aquí