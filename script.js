// Confetti
const container = document.querySelector('.confetti-container');

for (let i = 0; i < 100; i++) {
  const confetti = document.createElement('div');
  confetti.style.position = 'absolute';
  confetti.style.width = '10px';
  confetti.style.height = '10px';
  confetti.style.background = `hsl(${Math.random() * 360}, 100%, 70%)`;
  confetti.style.left = Math.random() * 100 + 'vw';
  confetti.style.top = Math.random() * 100 + 'vh';
  confetti.style.opacity = Math.random();
  confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
  confetti.style.animation = `fall ${3 + Math.random() * 5}s linear infinite`;
  container.appendChild(confetti);
}

const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes fall {
  0% { transform: translateY(0) rotate(0deg); }
  100% { transform: translateY(100vh) rotate(360deg); }
}`;
document.head.appendChild(styleSheet);

// Balloons
function createBalloon() {
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');
  balloon.style.left = Math.random() * 100 + 'vw';
  balloon.style.background = `hsl(${Math.random() * 360}, 100%, 70%)`;
  balloon.style.animationDuration = (6 + Math.random() * 4) + 's';
  document.body.appendChild(balloon);

  setTimeout(() => {
    balloon.remove();
  }, 10000);
}

setInterval(createBalloon, 1000);
