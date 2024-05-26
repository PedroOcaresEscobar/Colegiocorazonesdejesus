
document.addEventListener('DOMContentLoaded', function () {
    const imagenes = document.querySelectorAll('.division-carousel-chs img');
    const totalImagenes = imagenes.length;
    let paginaActual = 0;

    function carousel() {
        paginaActual = (paginaActual + 1) % totalImagenes;
        document.querySelector('.division-carousel-chs').style.transform = `translateX(-${paginaActual * 100}%)`;
    }
    setInterval(carousel, 2000);

});

