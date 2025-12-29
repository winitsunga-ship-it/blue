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
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.innerText = "💙";

  heart.style.left = Math.random() * window.innerWidth + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}, 500);

});

