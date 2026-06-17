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


/* ── Orbital AI Network ── */

const canvas = document.createElement('canvas');
canvas.id = 'particle-canvas';
document.body.prepend(canvas);

const ctx = canvas.getContext('2d');

function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resize();
window.addEventListener('resize', resize);

const center = {
  get x(){ return canvas.width/2; },
  get y(){ return canvas.height/2; }
};

const orbiters = [];
for(let i=0;i<220;i++){
  orbiters.push({
    angle: Math.random()*Math.PI*2,
    radius: 150 + Math.random()*700,
    speed: (0.0008 + Math.random()*0.003) * (Math.random() > 0.5 ? 1 : -1),
    size: Math.random()*2 + 0.5
  });
}

const streaks = [];
for(let i=0;i<35;i++){
  streaks.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    speed: 4 + Math.random()*8,
    length: 80 + Math.random()*140
  });
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  const glow = ctx.createRadialGradient(center.x,center.y,0,center.x,center.y,500);
  glow.addColorStop(0,'rgba(245,166,35,0.10)');
  glow.addColorStop(1,'rgba(245,166,35,0)');

  ctx.fillStyle = glow;
  ctx.fillRect(0,0,canvas.width,canvas.height);

  orbiters.forEach(p=>{
    p.angle += p.speed;

    const x = center.x + Math.cos(p.angle) * p.radius;
    const y = center.y + Math.sin(p.angle) * p.radius * 0.55;

    ctx.beginPath();
    ctx.arc(x,y,p.size,0,Math.PI*2);
    ctx.fillStyle='rgba(245,166,35,0.9)';
    ctx.shadowBlur=10;
    ctx.shadowColor='#f5a623';
    ctx.fill();
  });

  streaks.forEach(s=>{
    s.x += s.speed;
    s.y -= s.speed;

    if(s.x > canvas.width + 250){
      s.x = -250;
      s.y = Math.random()*canvas.height;
    }

    const x2 = s.x - s.length;
    const y2 = s.y + s.length;

    const g = ctx.createLinearGradient(s.x,s.y,x2,y2);
    g.addColorStop(0,'rgba(245,166,35,1)');
    g.addColorStop(1,'rgba(245,166,35,0)');

    ctx.strokeStyle=g;
    ctx.lineWidth=2;

    ctx.beginPath();
    ctx.moveTo(s.x,s.y);
    ctx.lineTo(x2,y2);
    ctx.stroke();
  });

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
