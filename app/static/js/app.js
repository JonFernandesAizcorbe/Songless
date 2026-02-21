let player;
let currentSong;
let round = 1;
// let attempts = 5;
let currentAttemptIndex = 0;
let progressIntervals = [];

const attemptTimes = [1, 2, 4, 7, 11];

const playFragmentBtn = document.getElementById("playFragmentBtn");
const guessInput = document.getElementById("guess");
const suggestions = document.getElementById("suggestions");
const roundEl = document.getElementById("round");
// const attemptsEl = document.getElementById("attempts");
const historyDiv = document.getElementById("history");
const segments = document.querySelectorAll(".segment");
const gameDiv = document.getElementById("game");
const startBtn = document.getElementById("startBtn");
const skipBtn = document.getElementById("skip-btn");

roundEl.textContent = round;
// attemptsEl.textContent = attempts;


// ================= YOUTUBE PLAYER =================
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "0",
    width: "0",
    videoId: "",
    playerVars: {
      autoplay: 0,
      controls: 0,
      disablekb: 1
    }
  });
}

// ================= GAME =================
function pickRandomSong() {
  return playlist[Math.floor(Math.random() * playlist.length)];
}

function resetAllSegments() {
  segments.forEach(seg => seg.innerHTML = "");
}

function updateSegmentWidths() {
  const totalTime = attemptTimes[attemptTimes.length - 1];
  segments.forEach((seg, i) => {
    const widthPercent = (attemptTimes[i] / totalTime) * 100;
    seg.style.flex = `0 0 ${widthPercent}%`;
  });
}

// ================= START NEW SONG =================
function startNewSong() {
  currentSong = pickRandomSong();
  currentAttemptIndex = 0;
  round = 1;
  // attempts = 5;

  roundEl.textContent = round;
  // attemptsEl.textContent = attempts;

  resetAllSegments();
  updateSegmentWidths();

  if (player) {
    player.cueVideoById(currentSong.video_id, 0);
  }
}

// ================= PLAY BUTTON =================
playFragmentBtn.addEventListener("click", () => {
  if (!player || !currentSong) return;

  resetAllSegments();
  updateSegmentWidths();

  progressIntervals.forEach(interval => clearInterval(interval));
  progressIntervals = [];

  const startTime = 0;
  const endTime = attemptTimes[currentAttemptIndex];

  player.seekTo(startTime, true);
  player.playVideo();

  let elapsed = 0;
  const interval = setInterval(() => {
    elapsed += 0.05;

    for (let i = 0; i <= currentAttemptIndex; i++) {
      const seg = segments[i];
      if (!seg.firstChild) {
        let fill = document.createElement("div");
        fill.classList.add("segment-fill");
        seg.appendChild(fill);
      }

      const segmentStart = i === 0 ? 0 : attemptTimes[i - 1];
      const segmentEnd = attemptTimes[i];
      const fill = seg.firstChild;

      if (elapsed >= segmentEnd) {
        fill.style.width = "100%";
      } else if (elapsed >= segmentStart) {
        const percent = ((elapsed - segmentStart) / (segmentEnd - segmentStart)) * 100;
        fill.style.width = `${percent}%`;
      } else {
        fill.style.width = "0%";
      }
    }

    if (elapsed >= endTime) {
      clearInterval(interval);
      progressIntervals = progressIntervals.filter(i => i !== interval);
      player.pauseVideo();
    }
  }, 50);

  progressIntervals.push(interval);
});

// ================= AUTOCOMPLETE =================
guessInput.addEventListener("input", () => {
  const value = guessInput.value.toLowerCase();
  suggestions.innerHTML = "";

  if (!value) return;

  playlist.forEach(song => {
    if (song.title.toLowerCase().includes(value)) {
      const li = document.createElement("li");
      li.textContent = song.title;
      li.onclick = () => {
        guessInput.value = song.title;
        suggestions.innerHTML = "";
        checkGuess();
      };
      suggestions.appendChild(li);
    }
  });
});

// ================= CHECK GUESS =================
function checkGuess() {
  const guess = guessInput.value.toLowerCase();
  if (!guess) return;

  let entry = document.createElement("div");

  if (guess === currentSong.title.toLowerCase()) {
    entry.innerHTML = `✅ Ronda ${round}: ${currentSong.title}`;
    historyDiv.appendChild(entry);

    guessInput.value = "";
    startNewSong();
    return;
  }

  entry.innerHTML = `❌ Ronda ${round}: ${guess}`;
  historyDiv.appendChild(entry);

  // attempts--;
  // attemptsEl.textContent = attempts;

  nextRound();
  guessInput.value = "";

  /*
  if (attempts <= 0) {
    alert(`🎵 La canción era: ${currentSong.title}`);
  }
  */
}

// ================= NEXT ROUND =================
function nextRound() {
  currentAttemptIndex++;
  round = currentAttemptIndex + 1;

  if (currentAttemptIndex >= attemptTimes.length) {
    alert(`🎵 Fin de la canción: ${currentSong.title}`);
    playFragmentBtn.disabled = true;
    skipBtn.disabled = true;
    guessInput.disabled = true;
    return;
  }

  roundEl.textContent = round;

  resetAllSegments();
  updateSegmentWidths();
}

// ================= SKIP BUTTON =================
skipBtn.addEventListener("click", () => {
  // attempts--;
  // attemptsEl.textContent = attempts;

  nextRound();

  /*
  if (attempts <= 0) {
    alert(`🎵 La canción era: ${currentSong.title}`);
  }
  */
});

// ================= START GAME =================
startBtn.addEventListener("click", () => {

  // Mostrar el juego
  gameDiv.style.display = "flex";
  document.getElementById("roundText").style.display = "block";

  // Cambiar texto del botón
  startBtn.textContent = "Siguiente canción";

  // Reset
  round = 1;
  currentAttemptIndex = 0;
  historyDiv.innerHTML = "";

  playFragmentBtn.disabled = false;
  skipBtn.disabled = false;
  guessInput.disabled = false;

  roundEl.textContent = round;

  startNewSong();
});