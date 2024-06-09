
<?php include 'header.php'; ?>
<main>


    
        <section class="contactanosConten">
            <h1>Contacta con Nosotros</h1>
            <form id="miFormulario">
                <div class="contactoPrimera">
                    <div class="mb-3 uno">
                        <label for="nombre" class="form-label">Nombre Completo</label>
                        <input type="text" class="form-control" id="nombre" placeholder="Juanito Perez Pereira" name="nombre">
                    </div>
                    <div class="mb-3">
                        <label for="celular" class="form-label">Celular</label>
                        <input type="tel" class="form-control" id="celular" placeholder="+56912344321" name="celular">
                    </div>
                </div>

                <div class="contactoTercera">
                    <div class="mb-3">
                        <label for="pais" class="form-label">País</label>
                        <input type="text" class="form-control" id="pais" placeholder="Chile" name="pais">
                    </div>
                    <div class="mb-3">
                        <label for="ciudad" class="form-label">Ciudad</label>
                        <input type="text" class="form-control" id="ciudad" placeholder="Santiago" name="ciudad">
                    </div>
                </div>

                <div class="contactoSegunda">
                    <div class="mb-3">
                        <label for="mail" class="form-label">Correo Electrónico</label>
                        <input type="email" class="form-control" id="mail" placeholder="nombre@ejemplo.cl" name="mail">
                    </div>
                </div>

                <div class="contactoCuarta">
                    <div class="mb-3">
                        <label for="message" class="form-label">Consulta</label>
                        <textarea class="form-control" id="message" rows="3" name="message"></textarea>
                    </div>
                </div>
                <div class="contactoQuinta">
                    <button id="button" type="submit" class="btn-contacto">Enviar</button>
                </div>
            </form>
        </section>
    </main>

<?php include 'footer.php'; ?>   
