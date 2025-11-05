document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
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
