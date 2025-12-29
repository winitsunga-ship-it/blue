* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  background: linear-gradient(#eef6ff, #d9ebff);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Georgia, serif;
}

/* WRAPPER */
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

/* BUTTON */
#openBtn {
  padding: 14px 26px;
  margin-bottom: 36px;
  border: none;
  border-radius: 30px;
  background: linear-gradient(135deg, #4fa3ff, #6bb6ff);
  color: white;
  font-size: 15px;
  cursor: pointer;
  box-shadow: 0 6px 16px rgba(79, 163, 255, 0.35);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

#openBtn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 22px rgba(79,163,255,0.45);
}


/* ENVELOPE */
#envelope {
  width: 360px;
  height: 240px;
  position: relative;
  background: #5aa9ff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
  transition: box-shadow 0.15s ease;
}

/* FLAP */
#flap {
  position: absolute;
  top: 0;
  width: 100%;
  height: 50%;
  background: #7bbcff;
  clip-path: polygon(0 0, 100% 0, 50% 100%);
  transform-origin: top;
  transition: transform 0.8s ease;
  z-index: 3;
}

/* PAPER */
#paper {
  position: absolute;
  bottom: 12px;
  left: 12px;
  right: 12px;
  height: 0;
  background: linear-gradient(#ffffff, #f6f9ff);
  box-shadow:
    inset 0 0 0 1px rgba(0,0,0,0.03),
    0 10px 25px rgba(79,163,255,0.25);
  border-radius: 10px;
  overflow-y: auto;
  transition: height 0.9s ease;
  z-index: 2;
}

/* LETTER TEXT */
#letter {
  padding: 22px;
  font-size: 15px;
  line-height: 1.8;
  white-space: pre-wrap;
  color: #333;
  font-family: 'Homemade Apple', cursive;
}

/* OPEN STATE */
#envelope.open #flap {
  transform: rotateX(180deg);
  animation: popOpen 0.6s ease;
}

@keyframes popOpen {
  0% { transform: scale(0.95); }
  60% { transform: scale(1.02); }
  100% { transform: scale(1); }
}

#envelope.open #paper {
  height: 300px;
}

/* MOBILE OPTIMIZATION */
@media (max-width: 420px) {
  #envelope {
    width: 90vw;
    height: 220px;
  }

  #envelope.open #paper {
    height: 280px;
  }

  #letter {
    font-size: 14px;
    padding: 18px;
  }
}

/* ========================= */
/* FLOATING BLUE HEARTS 💙 */
/* ========================= */
.heart {
  position: fixed !important;
  bottom: -40px !important;

  display: block !important;

  font-size: 20px;
  color: #4fa3ff;

  pointer-events: none;
  z-index: 999999;

  animation: floatUp 5s linear forwards;
}

@keyframes floatUp {
  from {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  to {
    transform: translateY(-120vh) scale(1.6);
    opacity: 0;
  }
  
.sparkle {
  position: fixed;
  width: 6px;
  height: 6px;
  background: rgba(255,255,255,0.8);
  border-radius: 50%;
  pointer-events: none;
  animation: sparkleFloat 4s linear forwards;
}

@keyframes sparkleFloat {
  from {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  to {
    transform: translateY(-120vh) scale(0.3);
    opacity: 0;
  }
}
/* HEART PULSE TO MUSIC */
.heart.pulse {
  animation: heartPulse 0.8s ease-in-out infinite,
             floatUp 5s linear forwards;
}

@keyframes heartPulse {
  0%   { transform: scale(1); }
  50%  { transform: scale(1.35); }
  100% { transform: scale(1); }
}
@keyframes pulseBeat {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.35);
  }
  100% {
    transform: scale(1);
  }
}

.heart.pulse {
  animation: pulseBeat 0.3s ease-out;
}

#envelope.beat {
  box-shadow: 0 0 35px rgba(79, 163, 255, 0.9);
}

/* HEART BEAT PULSE */
.heart.beat {
  transform: scale(1.6);
}

#muteBtn {
  margin-bottom: 28px; /* ← THIS fixes the spacing */
  padding: 10px 16px;

  border: none;
  border-radius: 999px;

  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(6px);

  font-size: 22px;
  cursor: pointer;
  color: #4fa3ff;

  box-shadow:
    0 8px 20px rgba(79, 163, 255, 0.25),
    inset 0 0 0 1px rgba(79, 163, 255, 0.25);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    opacity 0.25s ease;
}

#muteBtn.switching {
  opacity: 0;
  transform: scale(0.8);
}

#muteBtn:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow:
    0 12px 26px rgba(79, 163, 255, 0.35),
    inset 0 0 0 1px rgba(79, 163, 255, 0.35);
}

#muteBtn:active {
  transform: scale(0.95);
}

#muteBtn.muted {
  opacity: 0.5;
}
/* Beat pulse for mute button */
#muteBtn.beat {
  animation: mutePulse 0.25s ease-out;
}

@keyframes mutePulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}

@media (max-width: 420px) {
  #muteBtn {
    position: fixed;
    bottom: 20px;
    right: 20px;

    margin: 0;
    z-index: 1000;
  }
}


}





