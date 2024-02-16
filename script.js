function mostrarImagen(event) {
  const imagen = document.getElementById('imagenSeleccionada');
  imagen.style.display = 'block';

  const archivo = event.target.files[0];
  const lector = new FileReader();

  lector.onload = function(event) {
    imagen.src = event.target.result;
  };

  lector.readAsDataURL(archivo);
}


// Obtener los elementos del DOM
const familiaCheckbox = document.getElementById('familia');
const cuantosFamiliaInput = document.getElementById('cuantosFamilia');
const cuantosNinosInput = document.getElementById('cuantosNinos');
const soloCheckbox = document.getElementById('solo');

// Agregar eventos para controlar la lógica de los campos
familiaCheckbox.addEventListener('change', function() {
  if (this.checked) {
    cuantosFamiliaInput.disabled = false;
    cuantosNinosInput.disabled = false;
    soloCheckbox.checked = false;
  } else {
    cuantosFamiliaInput.disabled = true;
    cuantosNinosInput.disabled = true;
  }
});

soloCheckbox.addEventListener('change', function() {
  if (this.checked) {
    familiaCheckbox.checked = false;
    cuantosFamiliaInput.disabled = true;
    cuantosNinosInput.disabled = true;
  }
});
