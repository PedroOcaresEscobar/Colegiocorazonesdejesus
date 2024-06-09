document.addEventListener("DOMContentLoaded", function() {
    // Información de los profesores
    const profesores = [
        {
            nombre: "Hellen Estay",
            titulo: "Profesora ed. Gral. Básica",
            email: "profesora.helllen@colegiocorazonesdejesus.cl",
            frase: "¡Nunca dejen de aprender y de creer en ustedes mismos!",
            perfil: "Profesora Jefe 7° Básico",
            imgSrc: "../img/profesor-matematica.png",
            linkedin: "https://www.linkedin.com/in/hellen-estay-m%C3%A9ndez-a2a240266/"
        },
        {
            nombre: "Profesor Generico 1",
            titulo: "Profesor",
            email: "correo@colegiocorazonesdejesus.cl",
            frase: "¡Frase!",
            perfil: "Profesora Jefa ° Básico",
            imgSrc: "../img/profesor-generico.png",
            linkedin: ""
        },
        // Añade más profesores según sea necesario
    ];

    // Información de los cursos
    const cursos = [
        {
            titulo: "Pre-Kinder:<br> El Circo de las Vocales",
            imgSrc: "../img/carpa-icon.png",
            alt: "El Circo de las Vocales",
            enlace: "page-cursos/Pre-Kinder.html"
        },
        {
            titulo: "Kinder:<br> El Circo de las Vocales",
            imgSrc: "../img/carpa-icon.png",
            alt: "El Circo de las Vocales",
            enlace: "page-cursos/Kinder.html"
        },
        {
            titulo: "1° Básico:<br> El Zoo de las Letras",
            imgSrc: "../img/zoo-icon.png",
            alt: "El Zoo de las Letras",
            enlace: "page-cursos/primero.html"
        },
        {
            titulo: "2° Básico:<br> La Magia de la Escritura",
            imgSrc: "../img/magia-icon.png",
            alt: "La Magia de la Escritura",
            enlace: "page-cursos/segundo.html"
        },
        {
            titulo: "3° Básico:<br> El Universo del Saber",
            imgSrc: "../img/universo-icon.png",
            alt: "El Universo del Saber",
            enlace: "page-cursos/tercero.html"
        },
        {
            titulo: "4° Básico:<br> Ciencias",
            imgSrc: "../img/ciencia-icon.png",
            alt: "Ciencias",
            enlace: "page-cursos/cuarto.html"
        },
        {
            titulo: "5° Básico:<br> Naturaleza",
            imgSrc: "../img/naturaleza.icon.png",
            alt: "Naturaleza",
            enlace: "page-cursos/quinto.html"
        },
        {
            titulo: "6° Básico: <br>Genios del Reciclaje",
            imgSrc: "../img/reciclaje-icon.png",
            alt: "Genios del Reciclaje",
            enlace: "page-cursos/sexto.html"
        },
        {
            titulo: "7° Básico:<br>Seguidores de Atena",
            imgSrc: "../img/atena-icon.png",
            alt: "Seguidores de Atena",
            enlace: "page-cursos/septimo.html"
        },
        {
            titulo: "8° Básico:<br> Sembradores de Corazones",
            imgSrc: "../img/sagrado-icon.png",
            alt: "Sembradores de Corazones",
            enlace: "page-cursos/octavo.html"
        },
    ];

    // Función para crear una tarjeta de profesor
    function crearTarjetaProfesor(profesor) {
        const seccion = document.createElement("section");
        seccion.className = "contenedor-profesor-card";

        const imgDiv = document.createElement("div");
        imgDiv.className = "primeras-card-img";
        const img = document.createElement("img");
        img.className = "perfil-profesor";
        img.src = profesor.imgSrc;
        img.alt = `Perfil de ${profesor.nombre}`;
        imgDiv.appendChild(img);

        const infoDiv = document.createElement("div");
        infoDiv.className = "primeras-card-profesor";
        const nombre = document.createElement("h2");
        nombre.textContent = profesor.nombre;
        const titulo = document.createElement("h4");
        titulo.textContent = profesor.titulo;
        const email = document.createElement("h4");
        email.textContent = profesor.email;
        const frase = document.createElement("h3");
        frase.textContent = profesor.frase;
        const perfil = document.createElement("p");
        perfil.textContent = profesor.perfil;
        const linkedin = document.createElement("a");
        linkedin.href = profesor.linkedin;
        linkedin.target = "_blank";
        const linkedinImg = document.createElement("img");
        linkedinImg.src = "../img/linnkedin-icon-blu.png";
        linkedinImg.className = "icong";
        linkedin.appendChild(linkedinImg);

        infoDiv.appendChild(nombre);
        infoDiv.appendChild(titulo);
        infoDiv.appendChild(email);
        infoDiv.appendChild(frase);
        infoDiv.appendChild(perfil);
        if (profesor.linkedin) {
            infoDiv.appendChild(linkedin);
        }

        seccion.appendChild(imgDiv);
        seccion.appendChild(infoDiv);

        return seccion;
    }

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

    // Seleccionar los contenedores donde se añadirán las tarjetas
    const contenedorProfesores = document.querySelector(".contenedordeContenedordeCard");
    const contenedorCursos = document.querySelector(".zone-card-curso");

    // Añadir las tarjetas de profesores al contenedor
    profesores.forEach(profesor => {
        const tarjeta = crearTarjetaProfesor(profesor);
        contenedorProfesores.appendChild(tarjeta);
    });

    // Añadir las tarjetas de cursos al contenedor
    cursos.forEach(curso => {
        const tarjeta = crearTarjetaCurso(curso);
        contenedorCursos.appendChild(tarjeta);
    });

    // Funcionalidad para alternar entre secciones
    document.querySelector("#btn-profesores").addEventListener("click", function() {
        document.querySelector(".zone-card-curso").style.display = "none";
        document.querySelector(".contenedordeContenedordeCard").style.display = "block";
    });

    document.querySelector("#btn-cursos").addEventListener("click", function() {
        document.querySelector(".zone-card-curso").style.display = "block";
        document.querySelector(".contenedordeContenedordeCard").style.display = "none";
    });
});
