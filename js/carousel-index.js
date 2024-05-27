document.addEventListener('DOMContentLoaded', function () {
    const imagenesCarousel = document.querySelectorAll('.carousel-index img');
    const totalImagenesCarousel = imagenesCarousel.length;
    let paginaActualCarousel = 0;
    let autoCarousel;

    function carouselindex() {
        paginaActualCarousel = (paginaActualCarousel + 1) % totalImagenesCarousel;
        document.querySelector('.carousel-index').style.transform = `translateX(-${paginaActualCarousel * 100}%)`;
    }

    function startAutoCarousel() {
        autoCarousel = setInterval(carouselindex, 3000);
    }

    function stopAutoCarousel() {
        clearInterval(autoCarousel);
    }

    document.querySelector('.prev-btn').addEventListener('click', function () {
        stopAutoCarousel();
        paginaActualCarousel = (paginaActualCarousel - 1 + totalImagenesCarousel) % totalImagenesCarousel;
        document.querySelector('.carousel-index').style.transform = `translateX(-${paginaActualCarousel * 100}%)`;
        startAutoCarousel();
    });

    document.querySelector('.next-btn').addEventListener('click', function () {
        stopAutoCarousel();
        paginaActualCarousel = (paginaActualCarousel + 1) % totalImagenesCarousel;
        document.querySelector('.carousel-index').style.transform = `translateX(-${paginaActualCarousel * 100}%)`;
        startAutoCarousel();
    });

    startAutoCarousel();
});
