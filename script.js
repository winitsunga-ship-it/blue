const openBtn = document.getElementById("openBtn");
const envelope = document.getElementById("envelope");
const music = document.getElementById("bg-music");
const muteBtn = document.getElementById("muteBtn");

let opened = false;
let isMuted = false;

// OPEN LETTER
openBtn.addEventListener("click", () => {
  if (opened) return;
  opened = true;

  envelope.classList.add("open");

  if (music) {
    music.volume = 0;
    music.play().catch(() => {});

    let volume = 0;
    const fade = setInterval(() => {
      volume += 0.02;
      if (volume >= 0.6) {
        volume = 0.6;
        clearInterval(fade);
      }
      music.volume = volume;
    }, 100);

    startHearts();
    setupBeatDetection();
  }
});

// MUTE BUTTON
muteBtn.addEventListener("click", () => {
  if (!music) return;

  muteBtn.classList.add("switching");

  setTimeout(() => {
    isMuted = !isMuted;
    music.muted = isMuted;

    muteBtn.textContent = isMuted ? "🔇" : "💙";
    muteBtn.classList.toggle("muted", isMuted);

    muteBtn.classList.remove("switching");
  }, 150);
});

// FLOATING HEARTS
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("span");
    heart.className = "heart";
    heart.textContent = "💙";
    heart.style.left = Math.random() * window.innerWidth + "px";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }, 500);
}

// BEAT DETECTION
function setupBeatDetection() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioCtx = new AudioContext();
  const source = audioCtx.createMediaElementSource(music);
  const analyser = audioCtx.createAnalyser();

  analyser.fftSize = 256;
  source.connect(analyser);
  analyser.connect(audioCtx.destination);

  const dataArray = new Uint8Array(analyser.frequencyBinCount);
  audioCtx.resume();

  function detectBeat() {
    analyser.getByteFrequencyData(dataArray);

    let bass = 0;
    for (let i = 0; i < 10; i++) bass += dataArray[i];

    if (bass > 180) {
      envelope.classList.add("beat");
      muteBtn.classList.add("beat");

      setTimeout(() => {
        envelope.classList.remove("beat");
        muteBtn.classList.remove("beat");
      }, 120);

      document.querySelectorAll(".heart").forEach(h => {
        h.classList.add("beat");
        setTimeout(() => h.classList.remove("beat"), 120);
      });
    }

    requestAnimationFrame(detectBeat);
  }

  detectBeat();
}
