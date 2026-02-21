from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import yt_dlp

app = FastAPI()

# Archivos estáticos
app.mount("/static", StaticFiles(directory="app/static"), name="static")
templates = Jinja2Templates(directory="app/templates")

# Playlist pública de YouTube
PLAYLIST_URL = "https://www.youtube.com/playlist?list=PLjNlQ2vXx1xbt30X8TcUfNzw_akVISXEu"

# Cache en memoria para no llamar yt-dlp cada vez
playlist_cache = []

def fetch_playlist():
    global playlist_cache
    if playlist_cache:
        return playlist_cache

    ydl_opts = {
        "quiet": True,
        "extract_flat": True,
        "skip_download": True
    }

    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        info = ydl.extract_info(PLAYLIST_URL, download=False)
        songs = [{"title": entry["title"], "video_id": entry["id"]} for entry in info["entries"]]
        playlist_cache = songs
        return songs

@app.get("/", response_class=HTMLResponse)
async def index(request: Request):
    songs = fetch_playlist()
    return templates.TemplateResponse(
        "index.html",
        {"request": request, "playlist": songs}
    )