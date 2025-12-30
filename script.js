const openBtn = document.getElementById("openBtn");
const envelope = document.getElementById("envelope");
const music = document.getElementById("bg-music");
const muteBtn = document.getElementById("muteBtn");
const closeBtn = document.getElementById("closeBtn");

let opened = false;
let isMuted = false;

/* OPEN */
openBtn.addEventListener("click", () => {
  if (opened) return;
  opened = true;

  envelope.classList.add("open");

  music.volume = 0;
  music.play().catch(() => {});
  let v = 0;
  const fade = setInterval(() => {
    v += 0.02;
    music.volume = Math.min(v, 0.6);
    if (v >= 0.6) clearInterval(fade);
  }, 100);

  spawnHearts();
  startBeatSync();
});

/* CLOSE */
closeBtn.addEventListener("click", () => {
  envelope.classList.add("closing");

  setTimeout(() => {
    envelope.classList.remove("open", "closing");
    opened = false;
  }, 600);
});

/* MUTE */
muteBtn.addEventListener("click", () => {
  isMuted = !isMuted;
  music.muted = isMuted;
  muteBtn.textContent = isMuted ? "🔇" : "💙";
});

/* HEARTS */
function spawnHearts() {
  setInterval(() => {
    const h = document.createElement("span");
    h.className = "heart";
    h.textContent = "💙";
    h.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 5000);
  }, 700);
}

/* BEAT SYNC */
function startBeatSync() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const ctx = new AudioContext();
  const src = ctx.createMediaElementSource(music);
  const analyser = ctx.createAnalyser();

  analyser.fftSize = 256;
  src.connect(analyser);
  analyser.connect(ctx.destination);

  const data = new Uint8Array(analyser.frequencyBinCount);
  ctx.resume();

  function beat() {
    analyser.getByteFrequencyData(data);
    let bass = 0;
    for (let i = 0; i < 10; i++) bass += data[i];

    if (bass > 180) {
      envelope.classList.add("beat");
      muteBtn.classList.add("beat");
      document.querySelectorAll(".heart").forEach(h => h.classList.add("beat"));

      setTimeout(() => {
        envelope.classList.remove("beat");
        muteBtn.classList.remove("beat");
        document.querySelectorAll(".heart").forEach(h => h.classList.remove("beat"));
      }, 120);
    }
    requestAnimationFrame(beat);
  }
  beat();
}
