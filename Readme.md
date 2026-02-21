🎵 Adivina la Canción (Song Game)

Juego web donde escuchas fragmentos de una canción y debes adivinar su nombre.

📦 Requisitos previos

Debes tener instalado:

Python 3.10 o superior

Visual Studio Code

Git

Cuenta de GitHub

Descargas:

Python: https://www.python.org/downloads/

VS Code: https://code.visualstudio.com/

Git: https://git-scm.com/downloads/

GitHub: https://github.com/

🚀 Clonar el repositorio desde GitHub (VS Code)

Abre Visual Studio Code

Pulsa:

Ctrl + Shift + P

Escribe:

Git: Clone

Pega la URL del repositorio:

https://github.com/USUARIO/NOMBRE_REPO.git

Elige una carpeta donde guardarlo

VS Code te preguntará:

¿Quieres abrir el repositorio?

Pulsa Sí

🧩 Crear entorno virtual (recomendado)

Abre la terminal en VS Code:

Terminal → Nuevo terminal

Ejecuta:

Windows:
python -m venv venv
venv\Scripts\activate
Mac / Linux:
python3 -m venv venv
source venv/bin/activate
📦 Instalar dependencias

Con el entorno virtual activo:

pip install -r requirements.txt
▶️ Ejecutar el proyecto

En la terminal:

uvicorn app.main:app --reload

Luego abre tu navegador en:

http://127.0.0.1:8000
🎶 Cambiar la playlist de YouTube

Abre el archivo:

app/main.py

Busca esta línea:

PLAYLIST_URL = "https://www.youtube.com/playlist?list=XXXXXXXX"

Sustituye por tu playlist:

PLAYLIST_URL = "https://www.youtube.com/playlist?list=TU_PLAYLIST_AQUI"

Ejemplo:

PLAYLIST_URL = "https://www.youtube.com/playlist?list=PLFgquLnL59amLujt0N6_Ez3pM8c7q5R2P"

Guarda el archivo

Reinicia el servidor (Ctrl + C y vuelve a ejecutar uvicorn)

📁 Estructura del proyecto
project/
│
├── app/
│   ├── main.py
│   └── templates/
│       └── index.html
│
├── static/
│   ├── css/style.css
│   └── js/app.js
│
├── requirements.txt
└── README.md
⚠️ Problemas comunes
❌ Python no reconocido

Solución: reinstala Python marcando:

☑ Add Python to PATH
❌ Error con la playlist

Comprueba:

Que la playlist es pública

Que es una URL de playlist (no de vídeo)

Que reiniciaste el servidor

📝 Notas

No cierres la terminal mientras esté activo uvicorn

El botón Empezar juego / Siguiente canción reinicia la partida

El autocompletado funciona escribiendo parte del nombre