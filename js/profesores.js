document.addEventListener("DOMContentLoaded", function() {
    // Información de los profesores
    const profesores = [
     
        
        {
            nombre: "María Carolina Soto Urra",
            // titulo: "Profesor",
            email: "mcarolina.sotou@gmail.com",
            // frase: "¡Frase!",
            perfil: "Profesora Jefe Kinder",
            imgSrc: "../img/logo-ccdj.png",
            // linkedin: "https://www.linkedin.com/in/hellen-estay-m%C3%A9ndez-a2a240266/"
        },
        {
            nombre: "Belén Camila Salinas Cancino",
            // titulo: "Profesor",
            email: "belensalinas.7@gmail.com",
            // frase: "¡Frase!",
            perfil: "Profesora Jefe 1° Básico",
            imgSrc: "../img/logo-ccdj.png",
            // linkedin: "https://www.linkedin.com/in/hellen-estay-m%C3%A9ndez-a2a240266/"
        },
        {
            nombre: "Tania Maritza Rojas Rojas",
            // titulo: "Profesor",
            email: "taniarojas.profesorabasica@gmail.com",
            // frase: "¡Frase!",
            perfil: "Profesora Jefe 2° Básico",
            imgSrc: "../img/logo-ccdj.png",
            // linkedin: "https://www.linkedin.com/in/hellen-estay-m%C3%A9ndez-a2a240266/"
        },
        {
            nombre: "Javiera Constanza Hernández Muñoz",
            // titulo: "Profesor",
            email: "javiera.hernandez2016@umce.cl",
            // frase: "¡Frase!",
            perfil: "Profesora Jefe 3° Básico",
            imgSrc: "../img/logo-ccdj.png",
            // linkedin: "https://www.linkedin.com/in/hellen-estay-m%C3%A9ndez-a2a240266/"
        },
        {
            nombre: "Virginia del Pilar Villela Espinoza",
            // titulo: "Profesor",
            email: "vvillela.espinoza@gmail.com",
            // frase: "¡Frase!",
            perfil: "Profesora Jefe 4° Básico",
            imgSrc: "../img/logo-ccdj.png",
            // linkedin: "https://www.linkedin.com/in/hellen-estay-m%C3%A9ndez-a2a240266/"
        },
        {
            nombre: "Melanny Andrea Parodi Araya",
            // titulo: "Profesor",
            email: "melanny.parodii@gmail.com",
            // frase: "¡Frase!",
            perfil: "Profesora Jefe 5° Básico",
            imgSrc: "../img/logo-ccdj.png",
            // linkedin: "https://www.linkedin.com/in/hellen-estay-m%C3%A9ndez-a2a240266/"
        },
       
        {
            nombre: "Carla Mireya Gaete Oyarce",
            // titulo: "Profesor",
            email: "carla-g88@hotmail.cl",
            // frase: "¡Frase!",
            perfil: "Profesora Jefe 6° Básico",
            imgSrc: "../img/logo-ccdj.png",
            // linkedin: "https://www.linkedin.com/in/hellen-estay-m%C3%A9ndez-a2a240266/"
        },

       



        {
            nombre: "Hellen Karyn Estay Méndez",
            titulo: "Profesora ed. Gral. Básica",
            email: "profesora.helllen@colegiocorazonesdejesus.cl",
            // frase: "¡Nunca dejen de aprender y de creer en ustedes mismos!",
            perfil: "Profesora Jefe 7° Básico",
            imgSrc: "../img/logo-ccdj.png",
            // linkedin: "https://www.linkedin.com/in/hellen-estay-m%C3%A9ndez-a2a240266/"
        },
        {
            nombre: "Nicole Espinosa Miranda",
            titulo: "Profesora ed. Gral. Básica",
            email: "dvervas@gmail.com",
            // frase: "¡Frase!",
            perfil: "Profesora Jefe 8° Básico",
            imgSrc: "../img/logo-ccdj.png",
            // linkedin: "https://www.linkedin.com/in/hellen-estay-m%C3%A9ndez-a2a240266/"
        },
        
        // Añade más profesores según sea necesario
    ];

    // Seleccionar el contenedor principal donde se añadirán las tarjetas
    const contenedor = document.querySelector(".contenedordeContenedordeCard");

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

    // Añadir las tarjetas al contenedor
    profesores.forEach(profesor => {
        const tarjeta = crearTarjetaProfesor(profesor);
        contenedor.appendChild(tarjeta);
    });
});
