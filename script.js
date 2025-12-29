const openBtn = document.getElementById("openBtn");
const envelope = document.getElementById("envelope");
const music = document.getElementById("bg-music");

let opened = false;

openBtn.addEventListener("click", () => {
  if (opened) return;
  opened = true;

  // OPEN ENVELOPE
  envelope.classList.add("open");

// PLAY MUSIC WITH FADE-IN
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
}


  // FLOATING BLUE HEARTS
const heartInterval = setInterval(() => {
  const heart = document.createElement("span");
  heart.className = "heart pulse";
  heart.innerText = "💙";

  heart.style.left = Math.random() * window.innerWidth + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}, 500);

});


