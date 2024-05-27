document.addEventListener('DOMContentLoaded', function() {
  const formulario = document.getElementById('miFormulario');
  const btn = document.getElementById('button');

  formulario.addEventListener('submit', function(event) {
      event.preventDefault();

      // Validar todos los campos del formulario
      if (!validarCampos()) {
          alert('Por favor, completa todos los campos.');
          return;
      }

      btn.value = 'Sending...';

      const serviceID = 'default_service';
      const templateID = 'template_tgwulpr';

      emailjs.sendForm(serviceID, templateID, this)
          .then(() => {
              btn.value = 'Send Email';
              alert('Sent!');
              limpiarCampos();
          }, (err) => {
              btn.value = 'Send Email';
              alert(JSON.stringify(err));
          });
  });

  function validarCampos() {
      let esValido = true;
      formulario.querySelectorAll('input, textarea').forEach((campo) => {
          if (campo.value.trim() === '') {
              esValido = false;
          }
      });
      return esValido;
  }

  function limpiarCampos() {
      formulario.reset(); // Restablece los campos del formulario
  }
});