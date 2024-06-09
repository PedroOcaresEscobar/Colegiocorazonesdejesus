document.addEventListener("DOMContentLoaded", function() {
    // Información de los cursos
    const cursos = [
        {
            imgSrc: "../img/carpa-icon.png",
            alt: "El Circo de las Vocales",
            titulo: "Pre-Kinder:<br> El Circo de las Vocales",
            enlace: "page-cursos/Pre-Kinder.html"
        },
        {
            imgSrc: "../img/carpa-icon.png",
            alt: "El Circo de las Vocales",
            titulo: "Kinder:<br> El Circo de las Vocales",
            enlace: "page-cursos/Kinder.html"
        },
        {
            imgSrc: "../img/zoo-icon.png",
            alt: "El Zoo de las Letras",
            titulo: "1° Básico:<br> El Zoo de las Letras",
            enlace: "page-cursos/primero.html"
        },
        {
            imgSrc: "../img/magia-icon.png",
            alt: "La Magia de la Escritura",
            titulo: "2° Básico:<br> La Magia de la Escritura",
            enlace: "page-cursos/segundo.html"
        },
        {
            imgSrc: "../img/universo-icon.png",
            alt: "El Universo del Saber",
            titulo: "3° Básico:<br> El Universo del Saber",
            enlace: "page-cursos/tercero.html"
        },
        {
            imgSrc: "../img/ciencia-icon.png",
            alt: "Ciencias",
            titulo: "4° Básico:<br> Ciencias",
            enlace: "page-cursos/cuarto.html"
        },
        {
            imgSrc: "../img/naturaleza.icon.png",
            alt: "Naturaleza",
            titulo: "5° Básico:<br> Naturaleza",
            enlace: "page-cursos/quinto.html"
        },
        {
            imgSrc: "../img/reciclaje-icon.png",
            alt: "Genios del Reciclaje",
            titulo: "6° Básico: <br>Genios del Reciclaje",
            enlace: "page-cursos/sexto.html"
        },
        {
            imgSrc: "../img/atena-icon.png",
            alt: "Seguidores de Atena",
            titulo: "7° Básico:<br>Seguidores de Atena",
            enlace: "page-cursos/septimo.html"
        },
        {
            imgSrc: "../img/sagrado-icon.png",
            alt: "Sembradores de Corazones",
            titulo: "8° Básico:<br> Sembradores de Corazones",
            enlace: "page-cursos/octavo.html"
        }
    ];

    // Seleccionar el contenedor principal donde se añadirán las tarjetas
    const contenedor = document.querySelector(".zone-card-curso");

    // Función para crear una tarjeta de curso
    function crearTarjetaCurso(curso) {
        const divContenedor = document.createElement("div");
        divContenedor.className = "contenedor-card-curso";

        const divCard = document.createElement("div");
        divCard.className = "card-curso";

        const img = document.createElement("img");
        img.src = curso.imgSrc;
        img.alt = curso.alt;

        const titulo = document.createElement("h2");
        titulo.className = "titulo-card-curso";
        titulo.innerHTML = curso.titulo;

        const boton = document.createElement("button");
        boton.className = "btn-entrar";
        const enlace = document.createElement("a");
        enlace.href = curso.enlace;
        enlace.textContent = "Entrar";
        boton.appendChild(enlace);

        divCard.appendChild(img);
        divCard.appendChild(titulo);
        divCard.appendChild(boton);

        divContenedor.appendChild(divCard);

        return divContenedor;
    }

    // Añadir las tarjetas al contenedor
    cursos.forEach(curso => {
        const tarjeta = crearTarjetaCurso(curso);
        contenedor.appendChild(tarjeta);
        // Añadir la clase de animación después de que se haya añadido al DOM
        setTimeout(() => {
            tarjeta.classList.add("animate");
        }, 100);
    });
});
