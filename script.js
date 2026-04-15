(function () {
  const canvas = document.getElementById('network-canvas');
  if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const ctx = canvas.getContext('2d');
  const COLORS = ['#119f5d', '#0f766e', '#2563eb'];
  const CONNECTION_DIST = 135;
  const SPEED = 0.28;

  let nodes = [], width = 0, height = 0, raf;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  function makeNode() {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * SPEED * 2,
      vy: (Math.random() - 0.5) * SPEED * 2,
      r: 1.6 + Math.random() * 1.4,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    };
  }

  function init() {
    resize();
    const count = window.innerWidth < 768 ? 36 : 62;
    nodes = Array.from({ length: count }, makeNode);
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < CONNECTION_DIST) {
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(17,159,93,${(1 - d / CONNECTION_DIST) * 0.22})`;
          ctx.lineWidth = 0.9;
          ctx.stroke();
        }
      }
    }

    nodes.forEach((n) => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = n.color + 'aa';
      ctx.fill();

      n.x += n.vx;
      n.y += n.vy;
      if (n.x < -10) n.x = width + 10;
      else if (n.x > width + 10) n.x = -10;
      if (n.y < -10) n.y = height + 10;
      else if (n.y > height + 10) n.y = -10;
    });

    raf = requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => { resize(); });

  init();
  draw();
})();

const reveals = document.querySelectorAll('.reveal');
const navLinks = document.querySelectorAll('.nav-link');
const sections = [...document.querySelectorAll('main section[id]')];
const menuToggle = document.querySelector('.menu-toggle');
const headerInner = document.querySelector('.header-inner');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

reveals.forEach((item) => revealObserver.observe(item));

const activateNav = () => {
  const offset = window.scrollY + 140;
  let current = sections[0]?.id;

  sections.forEach((section) => {
    if (offset >= section.offsetTop) {
      current = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
};

window.addEventListener('scroll', activateNav);
window.addEventListener('load', activateNav);

document.getElementById('year').textContent = new Date().getFullYear();

if (menuToggle && headerInner) {
  menuToggle.addEventListener('click', () => {
    const isOpen = headerInner.classList.toggle('menu-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 760) {
        headerInner.classList.remove('menu-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 760) {
      headerInner.classList.remove('menu-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
}
