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
