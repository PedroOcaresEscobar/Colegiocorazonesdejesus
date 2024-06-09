<!DOCTYPE html>
<html  lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/style.css">
    <script src="js/carousel-index.js"></script>  
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   

    <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poetsen+One&display=swap" rel="stylesheet">
    <title>Inicio - Corazones de Jesus</title>
    <!-- Meta etiquetas -->
    <!-- Palabras claves para SEO -->
    <meta name="keywords" content="colegio gratuito, Lo Espejo, educación gratuita, pre-kínder, octavo básico, educación básica, talleres artísticos, colegio en Lo Espejo, educación primaria, colegio público, talleres extracurriculares, educación artística, escuela gratuita,corazones de Jesus,corazones,jesus">
    <!-- Descripción de la página -->
    <meta name="description" content="Bienvenidos a nuestro colegio Corazones de Jesus en Lo Espejo, donde ofrecemos educación gratuita desde pre-kínder hasta octavo básico. Nuestro compromiso es brindar una educación de calidad con una amplia variedad de talleres artísticos. Únete a nuestra comunidad educativa y descubre un entorno de aprendizaje inclusivo y creativo.">
    <!-- Números de teléfono -->
    <meta name="telephone" content="+56233177786">
    <!-- Número de WhatsApp -->
    <meta name="whatsapp" content="+56233177786">
    <!-- Autor de la página -->
    <meta name="author" content="Pedro Ocares">
    <!-- Ubicación geográfica -->
    <meta name="geo.placename" content="Carlos Dittborn 1807, Lo Espejo, Santiago, Región Metropolitana, Chile">
    <meta name="geo.position" content="-33.4850;-70.6760">
    <meta name="geo.region" content="CL-RM">
    <!-- Favicon -->
    <link rel="shortcut icon" href="../img/logo-ccdj.png" type="image/x-icon">

</head>
<body>

    <header>
        <section id="navmobile">
            <nav id="xd" class="navbar bg-body-tertiary fixed-top">
                <div class="container-fluid">
                    <!-- Título y botón de menú -->
                    <a class="navbar-brand" href="#"><img class="logo-cel" src="../img/logo-ccdj.png" alt="">Colegio Corazones de Jesús</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <!-- Menú desplegable para dispositivos móviles -->
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <!-- Título del menú -->
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Colegio Corazones de Jesús</h5>
                            <!-- Botón para cerrar el menú -->
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <!-- Cuerpo del menú desplegable -->
                        <div id="MODAL-MENU" class="offcanvas-body">
                            <!-- Enlaces del menú -->
                            <ul  class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <!-- Enlaces del navbar de escritorio -->
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="index.html">INICIO</a>
                                </li>


                                <li class="nav-item">
                                    <a  class="nav-link active dropdown-toggle" aria-current="page" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">CURSOS</a>
                                    <ul id="cursos-dropdown" class="dropdown-menu"> <!-- Utilizamos el ID para controlar el menú desplegable -->
                                        <!-- Contenido del menú desplegable -->
                                        <li><a class="dropdown-item" href="page/cursos.html">CURSOS</a></li>
                                        <li><a class="dropdown-item" href="/page/page-cursos/Pre-Kinder.html">Pre-Kinder:
                                            El Circo de las Vocales</a></li>
                                        <li><a class="dropdown-item" href="/page/page-cursos/Kinder.html">Kinder:
                                            El Circo de las Vocales</a></li>
                                        <li><a class="dropdown-item" href="/page/page-cursos/primero.html">1° Básico:
                                            El Zoo de las Letras</a></li>
                                        <li><a class="dropdown-item" href="/page/page-cursos/segundo.html">2° Básico:
                                            La Magia de la Escritura</a></li>
                                        <li><a class="dropdown-item" href="/page/page-cursos/tercero.html">3° Básico:
                                            El Universo del Saber</a></li>
                                        <li><a class="dropdown-item" href="/page/page-cursos/cuarto.html">4° Básico:
                                            Ciencias</a></li>
                                        <li><a class="dropdown-item" href="/page/page-cursos/quinto.html">5° Básico:
                                            Naturaleza</a></li>
                                        <li><a class="dropdown-item" href="/page/page-cursos/sexto.html">6° Básico:
                                            Genios del Reciclaje</a></li>
                                        <li><a class="dropdown-item" href="/page/page-cursos/septimo.html">7° Básico:
                                            Seguidores de Atena</a></li>
                                        <li><a class="dropdown-item" href="/page/page-cursos/octavo.html">8° Básico:
                                            Sembradores de Corazones</a></li>
                                        <!-- Separador -->

                                    </ul>
                                </li>
                                
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="page/talleres.html">TALLERES</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="page/plataformas.html">PLATAFORMAS</a>
                                </li>
                                <li class="nav-item">
                                    <a  class="nav-link active dropdown-toggle" aria-current="page" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">EQUIPO</a>
                                    <ul id="cursos-dropdown" class="dropdown-menu"> <!-- Utilizamos el ID para controlar el menú desplegable -->
                                        <!-- Contenido del menú desplegable -->
                                        <li><a class="dropdown-item" href="/page/profesores.html">Directivos</a></li>
                                        <li><a class="dropdown-item" href="/page/profesores.html">Docentes</a></li>
                                        <li><a class="dropdown-item" href="page/profesores.html">Asistentes de la Educación</a></li>
         
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="page/biblioteca.html">BIBLIOTECA</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="page/nosotros.html">NOSOTROS</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="page/contacto.html">CONTACTO</a>
                                </li>
                            </ul>
                            <!-- Logo de la página -->
                            <img class="logo_nav" src="../img/logo-ccdj.png" alt="Logo Corazones de Jesús">
                        </div>
                    </div>
                </div>
        
        
                </div>
        
            </nav>
        </section>
        <section class="contentedor-header-sup">
            <div class="division-logo-chs">
                <a href="index.html"><img src="../img/logo-ccdj.png" alt="logo corazones de Jesus"></a>
            </div>
            <div class="prueba">
                <div class="division-carousel-chs">
                    <img src="../img/bannerx150 (1).png" alt="">
                    <img src="../img/bannerx150 (2).png" alt="">
                    <img src="../img/bannerx150 (3).png" alt="">
                    <img src="../img/bannerx150 (4).png" alt="">
    
                </div>

            </div>

        </section>



        <section class="contentedor-header-inf">
            <div>
                <ul>
                    <li><a href="../index.php">INICIO</a></li>
                    <li><a href="/php/main_cursos.php">CURSOS</a></li>
    
  
                    <li><a href="/php/main_profesores.php">EQUIPO</a></li>

                    <li><a href="page/nosotros.html">NOSOTROS</a></li>
                    <li><a href="/php/main_contacto.php">CONTACTO</a></li>
                </ul>
                

            </div>
        </section>
 


    </header>

