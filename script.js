document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.querySelector('.animated-text');
    const words = ["FOTÓGRAFO", "ARTISTA", "CRIADOR"];
    let index = 0;

    function changeWord() {
        textElement.textContent = words[index];
        index = (index + 1) % words.length;
    }

    setInterval(changeWord, 2000); // Muda a palavra a cada 2 segundos

    // Galeria de imagens
    let slideIndex = 0;
    const slides = document.querySelectorAll('.galeria-slide');

    function showSlides() {
        slides.forEach((slide, index) => {
            slide.style.display = index === slideIndex ? 'block' : 'none';
        });

        slideIndex = (slideIndex + 1) % slides.length;
    }

    setInterval(showSlides, 3000); // Muda a imagem a cada 3 segundos

    // Inicializar a galeria
    showSlides();
});


