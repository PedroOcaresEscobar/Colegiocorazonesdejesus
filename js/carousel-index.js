document.addEventListener('DOMContentLoaded', function () {
    const imagenesCarousel = document.querySelectorAll('.carousel-index img');
    const totalImagenesCarousel = imagenesCarousel.length;
    let paginaActualCarousel = 0;

    function moveCarousel() {
        document.querySelector('.carousel-index').style.transform = `translateX(-${paginaActualCarousel * 100}%)`;
    }

    document.querySelector('.prev-btn').addEventListener('click', function () {
        paginaActualCarousel = (paginaActualCarousel - 1 + totalImagenesCarousel) % totalImagenesCarousel;
        moveCarousel();
    });

    document.querySelector('.next-btn').addEventListener('click', function () {
        paginaActualCarousel = (paginaActualCarousel + 1) % totalImagenesCarousel;
        moveCarousel();
    });
});