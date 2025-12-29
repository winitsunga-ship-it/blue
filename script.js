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

 // Floating blue hearts
const heartInterval = setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💙";

  // Random horizontal position
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 14 + Math.random() * 18 + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}, 500);
