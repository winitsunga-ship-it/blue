
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


const envelope = document.getElementById("envelope");
const output = document.getElementById("output");
const iframe = document.getElementById("musicPlayer");
const heartsLayer = document.getElementById("hearts");

let hasOpened = false;

envelope.addEventListener("click", () => {
  if (hasOpened) return;
  hasOpened = true;

  // Open envelope animation
  envelope.classList.add("open");

  // Start music (autoplay allowed because user clicked)
  iframe.src += "&autoplay=1&loop=1&playlist=y-nxQMx_38s";

  // Floating hearts
  setInterval(createHeart, 700);

  // Typing effect
  let index = 0;
  const typingInterval = setInterval(() => {
    output.textContent += message[index];
    index++;
    if (index >= message.length) {
      clearInterval(typingInterval);
    }
  }, 38);
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

