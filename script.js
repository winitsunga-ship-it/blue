const openBtn = document.getElementById("openBtn");
const envelope = document.getElementById("envelope");
const music = document.getElementById("bg-music");

let opened = false;

openBtn.addEventListener("click", () => {
  if (opened) return;
  opened = true;

  // 1️⃣ Open envelope
  envelope.classList.add("open");

  // 2️⃣ Play music (user interaction)
  if (music) {
    music.volume = 0;
    music.play().catch(() => {});

    // Gentle fade-in
    let volume = 0;
    const fade = setInterval(() => {
      volume += 0.02;
      if (volume >= 0.6) {
        volume = 0.6;
        clearInterval(fade);
      }
      music.volume = volume;
    }, 100);

    // ===== BEAT SYNC SETUP (PUT IT RIGHT HERE) =====
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
      for (let i = 0; i < 10; i++) {
        bass += dataArray[i];
      }

      if (bass > 180) {
        envelope.classList.add("beat");
        setTimeout(() => envelope.classList.remove("beat"), 120);

        document.querySelectorAll(".heart").forEach(h => {
          h.classList.add("beat");
          setTimeout(() => h.classList.remove("beat"), 120);
        });
      }

      requestAnimationFrame(detectBeat);
    }

    detectBeat();
  }
});
