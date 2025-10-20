const themeToggle = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const body = document.body;

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
  enableDarkMode();
} else {
  enableLightMode();
}

function enableDarkMode() {
  body.classList.add('dark');
  body.classList.remove('bg-bgLight', 'text-textDark');
  body.classList.add('bg-gray-900', 'text-gray-100');
  sunIcon.classList.add('hidden');
  moonIcon.classList.remove('hidden');
  localStorage.setItem('theme', 'dark');
}

function enableLightMode() {
  body.classList.remove('dark');
  body.classList.remove('bg-gray-900', 'text-gray-100');
  body.classList.add('bg-bgLight', 'text-textDark');
  moonIcon.classList.add('hidden');
  sunIcon.classList.remove('hidden');
  localStorage.setItem('theme', 'light');
}

themeToggle.addEventListener('click', () => {
  if (body.classList.contains('dark')) {
    enableLightMode();
  } else {
    enableDarkMode();
  }
});

const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.certification-card').forEach(card => {
  observer.observe(card);
});

document.querySelectorAll('.animate-fadeInUp').forEach(section => {
  if (!section.classList.contains('certification-card')) {
    section.style.opacity = '0';
    const singleObserver = new IntersectionObserver((entries) => {
      entries.forEach(ent => {
        if (ent.isIntersecting) {
          ent.target.style.animationPlayState = 'running';
          ent.target.style.opacity = '1';
          singleObserver.unobserve(ent.target);
        }
      });
    }, { threshold: 0.1 });
    singleObserver.observe(section);
    section.style.animationPlayState = 'paused';
  }
});