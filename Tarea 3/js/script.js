function scrollToSection(sectionId) {
    document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Obtener el elemento de Lottie y el audio
const animacion = document.getElementById("animacion");
const audio = document.getElementById("audio");

// Función para reproducir animación y audio al hacer clic
animacion.addEventListener("click", () => {
  // Reproducir la animación
  animacion.play();
  // Reproducir el audio
  audio.play();
});