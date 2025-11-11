// Función principal que calcula el total. Se ejecuta al enviar el formulario.
function calcularTotal(event) {
  // Evita que el formulario se envíe y la página se recargue.
  event.preventDefault();

  // Obtiene el valor seleccionado en el select con id "especialidad" (precio o valor asociado).
  var especialidad = document.getElementById("especialidad").value;
  // Obtiene el valor del radio button seleccionado con name "pan" (precio del tipo de pan).
  var pan = document.querySelector('input[name="pan"]:checked').value;
  // Obtiene la cantidad ingresada en el input con id "cantidad".
  var cantidad = document.getElementById("cantidad").value;
  // Obtiene el estado  del checkbox con id "domicilio" (si el usuario quiere envío).
  var domicilio = document.getElementById("domicilio").checked;
  // Obtiene todos los checkboxes marcados dentro de .checkbox-list (ingredientes adicionales).
  var ingredientes = document.querySelectorAll('.checkbox-list input[type="checkbox"]:checked');

  // Inicializa la variable total en 0 para empezar a acumular precios.
  var total = 0;

  // Suma el valor de la especialidad al total (se usa Number para convertir de string a número).
  total = total + Number(especialidad);
  // Suma el valor del pan al total (convierte a número antes de sumar).
  total = total + Number(pan);

  // Recorre cada ingrediente seleccionado y suma su valor al total (convierte a Number).
  ingredientes.forEach(function(opcion) {
    total = total + Number(opcion.value);
  });

  // Multiplica el subtotal por la cantidad (por ejemplo, si piden más de 1 unidad).
  total = total * Number(cantidad);

  // Si el checkbox de domicilio está marcado, se agrega una cuota fija de 30.
  if (domicilio) {
    total = total + 30;
  }

  // Muestra el total en el elemento con id "total", formateado como moneda MXN.
  document.getElementById("total").textContent = "Total: $" + total + " MXN";
}

