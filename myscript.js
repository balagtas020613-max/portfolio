// ─── CUSTOM CURSOR ───────────────────────────────────
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;
 
document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
});
 
function animCursor() {
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
  rx += (mx - rx) * .12;
  ry += (my - ry) * .12;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animCursor);
}
animCursor();
 
// ─── NAV SCROLL EFFECT ───────────────────────────────
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});
 
// ─── HOVER EXPAND CURSOR RING ────────────────────────
document.querySelectorAll('a, button, .project-card, .service-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    ring.style.width   = '60px';
    ring.style.height  = '60px';
    ring.style.opacity = '.3';
  });
  el.addEventListener('mouseleave', () => {
    ring.style.width   = '36px';
    ring.style.height  = '36px';
    ring.style.opacity = '.5';
  });
});