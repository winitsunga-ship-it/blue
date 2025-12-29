const openBtn = document.getElementById("openBtn");
const envelope = document.getElementById("envelope");
const music = document.getElementById("bg-music");

let opened = false;

openBtn.addEventListener("click", () => {
  if (opened) return;
  opened = true;

  envelope.classList.add("open");

  // Play music
  if (music) {
    music.volume = 0.6;
    music.play().catch(() => {});
  }

  // Create blue hearts
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "💙";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = 16 + Math.random() * 20 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);
  }, 300);
});
