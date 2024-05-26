document.addEventListener('DOMContentLoaded', function () {
    const imagenesCarousel = document.querySelectorAll('.carousel-index img');
    const totalImagenesCarousel = imagenesCarousel.length;
    let paginaActualCarousel = 0;

    function carouselindex() {
        paginaActualCarousel = (paginaActualCarousel + 1) % totalImagenesCarousel ;
        document.querySelector('.carousel-index').style.transform = `translateX(-${paginaActualCarousel * 100}%)`
    }
    setInterval(carouselindex, 3000); 
});