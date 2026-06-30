document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const links = navLinks ? navLinks.querySelectorAll('a') : [];
  const logo = document.querySelector('.logo');

  if (menuToggle && navLinks) {
    menuToggle.setAttribute('aria-expanded', 'false');
    
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation(); // Evita que el click se propague al document
      const isActive = menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
      console.log("Menú clickeado. Estado active:", navLinks.classList.contains('active'));
    });
  }

  // Cerrar al hacer click en los links
  links.forEach(link => {
    link.addEventListener('click', () => {
      if(menuToggle) menuToggle.classList.remove('active');
      if(navLinks) navLinks.classList.remove('active');
    });
  });

  // Control del Logo
  if (logo) {
    logo.setAttribute('role', 'button');
    logo.setAttribute('tabindex', '0');
    const cerrarMenu = () => {
      if(menuToggle) {
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
      if(navLinks) navLinks.classList.remove('active');
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

  // Quitamos el evento 'scroll' porque rompe el comportamiento en móviles al desplegar
  window.addEventListener('resize', () => {
    if (window.innerWidth > 560 && menuToggle && navLinks) {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });
});

/* ==========================================
   Efecto Parallax Background (Mantenelo igual)
   ========================================== */
const seccion = document.querySelector(".seccion-presentacion");
if (seccion) {
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
}

/* ==========================================
   Rotación de Tarjetas Publicidad (Mantenelo igual)
   ========================================== */
document.addEventListener("DOMContentLoaded", () => {
  const tarjetas = document.querySelectorAll('.card-publicidad');
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