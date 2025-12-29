
const message = `
To my dearest, Adrian,

Happy New Year, my Yayang 💙

I still can’t believe how close we’ve become,
how naturally you became someone important to me.
There are moments when I catch myself smiling
just because I thought of you.

You make ordinary days feel lighter,
and quiet moments feel warm.
If this letter could reach your hands,
I hope it carries even a fraction
of what I feel in my heart.

Always,
— Me
`;


document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.querySelector(".envelope");
  const letter = document.querySelector(".letter");
  const openBtn = document.querySelector(".open-btn");
  const music = document.getElementById("bg-music");

  let isOpen = false;

  openBtn.addEventListener("click", () => {
    if (isOpen) return;
    isOpen = true;

    envelope.classList.add("open");
    letter.classList.add("show");

    // Play music ONLY after user interaction (required by mobile browsers)
    if (music) {
      music.volume = 0.6;
      music.play().catch(() => {
        console.log("Autoplay blocked until user interaction.");
      });
    }
  });
});



// ================================
// 💙 HEART ANIMATION
// ================================
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "💙";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "-20px";

  heartsLayer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 2500);
}


