document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const links = navLinks.querySelectorAll('a');
  const logo = document.querySelector('.logo');

  if (menuToggle) {
    // ensure accessibility attribute
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.addEventListener('click', () => {
      const isActive = menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    });
  }

  links.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // allow clicking the logo to close the menu (acts as a close button)
  if (logo) {
    logo.setAttribute('role', 'button');
    logo.setAttribute('tabindex', '0');
    logo.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
      if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
    });
    logo.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  document.addEventListener('click', (e) => {
    const target = e.target;
    if (!navLinks.contains(target) && !menuToggle.contains(target)) {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });

  window.addEventListener('scroll', () => {
    menuToggle.classList.remove('active');
    navLinks.classList.remove('active');
  });
  window.addEventListener('resize', () => {
    menuToggle.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

const seccion = document.querySelector(".seccion-presentacion");
const seccionWidth = window.innerWidth;
const seccionHeight = window.innerHeight;

document.addEventListener("mousemove", (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const xOffset = (mouseX / seccionWidth) * 2;
  const yOffset = (mouseY / seccionHeight) * 2;

  const movimientoMaximo = 10;

  seccion.style.backgroundPosition = `${50 - xOffset * movimientoMaximo}% ${50 - yOffset * movimientoMaximo}%`;
});

seccion.addEventListener("mouseleave", () => {
  seccion.style.backgroundPosition = "50% 50%";
});
