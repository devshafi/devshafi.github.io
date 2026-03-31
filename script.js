const reveals = document.querySelectorAll('.reveal');
const navLinks = document.querySelectorAll('.nav-link');
const sections = [...document.querySelectorAll('main section[id]')];

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

const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const humanCheckLabel = document.getElementById('human-check-label');
const humanCheckQuestion = document.getElementById('human-check-question');
const humanCheckInput = document.getElementById('human-check-input');
const formStartedAt = document.getElementById('form-started-at');

const createHumanCheck = () => {
  const a = Math.floor(Math.random() * 8) + 1;
  const b = Math.floor(Math.random() * 8) + 1;
  humanCheckQuestion.textContent = `Human check: What is ${a} + ${b}?`;
  humanCheckLabel.dataset.answer = String(a + b);
};

if (contactForm && formStatus && humanCheckLabel && humanCheckQuestion && humanCheckInput && formStartedAt) {
  formStartedAt.value = String(Date.now());
  createHumanCheck();

  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    formStatus.textContent = '';

    if (!contactForm.checkValidity()) {
      formStatus.textContent = 'Please complete all required fields.';
      contactForm.reportValidity();
      return;
    }

    const elapsed = Date.now() - Number(formStartedAt.value);
    if (elapsed < 4000) {
      formStatus.textContent = 'Please wait a few seconds and try again.';
      return;
    }

    if (humanCheckInput.value.trim() !== humanCheckLabel.dataset.answer) {
      formStatus.textContent = 'Human check answer is incorrect.';
      createHumanCheck();
      humanCheckInput.value = '';
      return;
    }

    const formData = new FormData(contactForm);
    const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent('f.shafi@queensu.ca')}`;

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      if (!response.ok) {
        let detail = 'Request failed';
        try {
          const payload = await response.json();
          if (payload?.message) {
            detail = payload.message;
          }
        } catch {
          // Ignore JSON parse failures and keep default detail
        }
        throw new Error(detail);
      }

      formStatus.textContent = 'Thanks! Your message has been sent.';
      contactForm.reset();
      createHumanCheck();
      formStartedAt.value = String(Date.now());
    } catch {
      formStatus.textContent = 'Direct submit fallback started. If this is your first use, confirm the FormSubmit verification email once.';
      contactForm.submit();
    }
  });
}
