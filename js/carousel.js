
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
// Función para alternar la visibilidad del menú de cursos
function toggleCursosMenu() {
    var cursosMenu = document.getElementById("cursos-menu2");
    cursosMenu.classList.toggle("show");
}

// Cerrar el menú si el usuario hace clic fuera de él
window.onclick = function(event) {
    if (!event.target.matches('#cursosdesplegar')) {
        var cursosMenu = document.getElementById("cursos-menu2");
        if (cursosMenu.classList.contains('show')) {
            cursosMenu.classList.remove('show');
        }
    }
}

// Función para desplazarse suavemente al principio de la página
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

