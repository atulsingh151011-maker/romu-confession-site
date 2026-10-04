const yesBtn = document.getElementById('yesBtn');
const maybeBtn = document.getElementById('maybeBtn');
const loveModal = document.getElementById('loveModal');
const closeModal = document.getElementById('closeModal');
const confettiLayer = document.getElementById('confettiLayer');

const colors = ['#ff6ec7', '#ffd166', '#7bdff2', '#c4f1be', '#d8b4ff', '#ff9ab6'];

const burstConfetti = () => {
  const pieces = 90;

  for (let i = 0; i < pieces; i++) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.setProperty('--drift', `${(Math.random() - 0.5) * 260}px`);
    piece.style.animationDuration = `${4 + Math.random() * 2.8}s`;
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    confettiLayer.appendChild(piece);

    setTimeout(() => piece.remove(), 7000);
  }
};

const showLoveModal = () => {
  loveModal.classList.remove('hidden');
  burstConfetti();
};

const hideLoveModal = () => {
  loveModal.classList.add('hidden');
};

yesBtn.addEventListener('click', showLoveModal);
closeModal.addEventListener('click', hideLoveModal);
loveModal.addEventListener('click', (event) => {
  if (event.target === loveModal) hideLoveModal();
});

maybeBtn.addEventListener('click', () => {
  maybeBtn.textContent = 'Okay okay, yes 😍';
  maybeBtn.style.background = 'linear-gradient(135deg, #ff7cb5, #ffb9d9)';
  maybeBtn.style.color = '#fff';
  maybeBtn.disabled = true;
  maybeBtn.style.cursor = 'default';
  setTimeout(() => {
    showLoveModal();
  }, 500);
});

window.addEventListener('load', () => {
  burstConfetti();
  setTimeout(burstConfetti, 700);
  setTimeout(burstConfetti, 1300);
});
























































