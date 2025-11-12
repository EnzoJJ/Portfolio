document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const links = navLinks.querySelectorAll('a');

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
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
