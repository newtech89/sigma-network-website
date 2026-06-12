/* ── Nav scroll ── */
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('scrolled', window.scrollY > 30);
});

/* ── Mobile menu ── */
function toggleMenu(){
  const btn = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  btn.classList.toggle('open');
  menu.classList.toggle('open');
}
function closeMenu(){
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('mobileMenu').classList.remove('open');
}

/* ── Cursor glow ── */
const cursorGlow = document.createElement('div');
cursorGlow.className = 'cursor-glow';
document.body.appendChild(cursorGlow);
let mouseX = -1000, mouseY = -1000;
document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorGlow.style.left = mouseX + 'px';
  cursorGlow.style.top = mouseY + 'px';
});

/* ── Particle / molecule network canvas ── */
const canvas = document.createElement('canvas');
canvas.id = 'particle-canvas';
document.body.prepend(canvas);
const ctx = canvas.getContext('2d');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', () => { resize(); });

const GOLD = '245,166,35';
const BLUE = '79,140,255';
const GREEN = '62,207,142';

const COUNT = Math.min(80, Math.floor(window.innerWidth / 18));

class Particle {
  constructor() { this.reset(true); }
  reset(init) {
    this.x = Math.random() * canvas.width;
    this.y = init ? Math.random() * canvas.height : Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.35;
    this.vy = (Math.random() - 0.5) * 0.35;
    this.radius = Math.random() * 1.8 + 0.6;
    const palette = [GOLD, GOLD, GOLD, BLUE, GREEN];
    this.color = palette[Math.floor(Math.random() * palette.length)];
    this.alpha = Math.random() * 0.5 + 0.3;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;

    // Mouse repulsion
    const dx = this.x - mouseX;
    const dy = this.y - mouseY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 120) {
      const force = (120 - dist) / 120;
      this.x += (dx / dist) * force * 2.2;
      this.y += (dy / dist) * force * 2.2;
    }

    if (this.x < -50) this.x = canvas.width + 50;
    if (this.x > canvas.width + 50) this.x = -50;
    if (this.y < -50) this.y = canvas.height + 50;
    if (this.y > canvas.height + 50) this.y = -50;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.color},${this.alpha})`;
    ctx.fill();
    // Glow
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius * 3, 0, Math.PI * 2);
    const g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius * 3);
    g.addColorStop(0, `rgba(${this.color},0.08)`);
    g.addColorStop(1, `rgba(${this.color},0)`);
    ctx.fillStyle = g;
    ctx.fill();
  }
}

const particles = Array.from({ length: COUNT }, () => new Particle());

const MAX_DIST = 130;
const MOUSE_DIST = 160;

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw connections
  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];

    // Mouse connection
    const mdx = p.x - mouseX;
    const mdy = p.y - mouseY;
    const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
    if (mdist < MOUSE_DIST) {
      const alpha = (1 - mdist / MOUSE_DIST) * 0.25;
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(mouseX, mouseY);
      ctx.strokeStyle = `rgba(${GOLD},${alpha})`;
      ctx.lineWidth = 0.6;
      ctx.stroke();
    }

    for (let j = i + 1; j < particles.length; j++) {
      const q = particles[j];
      const dx = p.x - q.x;
      const dy = p.y - q.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < MAX_DIST) {
        const alpha = (1 - dist / MAX_DIST) * 0.18;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(q.x, q.y);
        ctx.strokeStyle = `rgba(${p.color},${alpha})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }

  particles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animate);
}
animate();

/* ── Scroll reveal ── */
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 90);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });
reveals.forEach(r => observer.observe(r));

/* ── Smooth scroll ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
  });
});
