// ── Mouse glow with smoothing ──
const glow = document.querySelector('.mouse-glow');
let targetX = -200, targetY = -200;
let currentX = -200, currentY = -200;
const LERP = 0.12;

document.addEventListener('mousemove', e => {
  targetX = e.clientX;
  targetY = e.clientY;
});

function animateGlow() {
  currentX += (targetX - currentX) * LERP;
  currentY += (targetY - currentY) * LERP;
  glow.style.left = currentX + 'px';
  glow.style.top  = currentY + 'px';
  requestAnimationFrame(animateGlow);
}

animateGlow();

// ── Theme toggle ──
const theme = localStorage.getItem('theme');
if (theme === 'dark') document.documentElement.setAttribute('data-theme', 'dark');

function toggleTheme() {
  const el = document.documentElement;
  const isDark = el.getAttribute('data-theme') === 'dark';
  if (isDark) {
    el.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
  } else {
    el.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
}

document.querySelector('.theme-toggle').addEventListener('click', toggleTheme);
