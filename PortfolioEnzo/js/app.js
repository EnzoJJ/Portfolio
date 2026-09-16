document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const links = navLinks ? navLinks.querySelectorAll('a') : [];
  const logo = document.getElementById('logo');

  if (menuToggle && navLinks) {
    menuToggle.setAttribute('aria-expanded', 'false');

    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation(); // Evita que el click se propague al document
      const isActive = menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    });
  }

  // Cerrar al hacer click en los links
  links.forEach(link => {
    link.addEventListener('click', () => {
      if (menuToggle) menuToggle.classList.remove('active');
      if (navLinks) navLinks.classList.remove('active');
    });
  });

  // Control del "logo" (file-path)
  if (logo) {
    logo.setAttribute('role', 'button');
    logo.setAttribute('tabindex', '0');
    const cerrarMenu = () => {
      if (menuToggle) {
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
      if (navLinks) navLinks.classList.remove('active');
    };
    logo.addEventListener('click', cerrarMenu);
    logo.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        cerrarMenu();
      }
    });
  }

  // Cerrar al hacer click afuera del menú
  document.addEventListener('click', (e) => {
    const target = e.target;
    if (navLinks && menuToggle && !navLinks.contains(target) && !menuToggle.contains(target)) {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Cerrar con tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuToggle && navLinks) {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 680 && menuToggle && navLinks) {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });
});

/* ==========================================
   Rotación de proyectos destacados (hero)
   ========================================== */
document.addEventListener("DOMContentLoaded", () => {
  const tarjetas = document.querySelectorAll('.browser-card');
  if (tarjetas.length > 0) {
    let indexActual = 0;
    const tiempoRotacion = 4000;
    setInterval(() => {
      tarjetas[indexActual].classList.remove('active');
      indexActual = (indexActual + 1) % tarjetas.length;
      tarjetas[indexActual].classList.add('active');
    }, tiempoRotacion);
  }
});
