# 🎵 Song Guess Game

Aplicación web interactiva donde el usuario escucha fragmentos progresivos de canciones de una playlist de YouTube y debe adivinar su título.

---

## 📋 Requisitos

Antes de comenzar, asegúrate de tener instalado:

- **Python 3.10 o superior**  
- **Git**  
- **Visual Studio Code**  
- **Cuenta de GitHub**  

Enlaces útiles:

- [Python](https://www.python.org/downloads/)  
- [Git](https://git-scm.com/downloads/)  
- [Visual Studio Code](https://code.visualstudio.com/)  
- [GitHub](https://github.com/)  

---

## 📥 Clonar el repositorio desde GitHub

1. Abre **Visual Studio Code**
2. Pulsa `Ctrl + Shift + P` y escribe:


Git: Clone


3. Pega la URL del repositorio:


https://github.com/USUARIO/NOMBRE_REPOSITORIO.git


4. Selecciona la carpeta donde quieres guardar el proyecto
5. Acepta cuando VS Code pregunte si quieres abrir el proyecto

---

## 🧪 Crear entorno virtual (recomendado)

### Windows:

```bash
python -m venv venv
venv\Scripts\activate
macOS / Linux:
python3 -m venv venv
source venv/bin/activate
📦 Instalar dependencias

Con el entorno virtual activado, ejecuta:

pip install -r requirements.txt
▶️ Ejecutar la aplicación
uvicorn app.main:app --reload

Luego abre tu navegador en:

http://127.0.0.1:8000
🎶 Cambiar la playlist de YouTube

Abre el archivo:

app/main.py

Busca esta línea:

PLAYLIST_URL = "https://www.youtube.com/playlist?list=XXXXXXXX"

Sustitúyela por tu playlist:

PLAYLIST_URL = "https://www.youtube.com/playlist?list=TU_PLAYLIST_ID"

Guarda el archivo y reinicia el servidor

📁 Estructura del proyecto
.
├── app/
│   ├── main.py
│   └── templates/
│       └── index.html
├── static/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── app.js
├── requirements.txt
└── README.md
⚠️ Solución de problemas
Error al instalar dependencias

Asegúrate de que el entorno virtual está activado

Error con la playlist

La playlist debe ser pública

Debe ser una playlist, no un vídeo individual

Reinicia el servidor tras cambiar la URL

📝 Notas

No cierres la terminal mientras el servidor esté activo

El juego utiliza la API de YouTube IFrame Player

El autocompletado facilita seleccionar canciones

📄 Licencia

Este proyecto se distribuye bajo licencia MIT


---

Si quieres, puedo hacer **una versión todavía más visual**, con cajas de “copiar rápido” para todos los comandos y links, lista para que cualquier persona haga **todo en 1 solo paso desde VS Code**, sin riesgo de errores.  

¿Quieres que haga esa versión también?