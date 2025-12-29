const openBtn = document.getElementById("openBtn");
const envelope = document.getElementById("envelope");
const music = document.getElementById("bg-music");

let opened = false;

openBtn.addEventListener("click", () => {
  if (opened) return;
  opened = true;

  // OPEN ENVELOPE
  envelope.classList.add("open");

  // PLAY MUSIC
  if (music) {
    music.volume = 0.6;
    music.play().catch(() => {});
  }

  // FLOATING BLUE HEARTS
  const heartInterval = setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "💙";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = 14 + Math.random() * 18 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }, 500);

  // STOP HEARTS AFTER 15 SECONDS
  setTimeout(() => {
    clearInterval(heartInterval);
  }, 15000);
});
