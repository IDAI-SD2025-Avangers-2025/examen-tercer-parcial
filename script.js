function calcularTotal(event) {
  event.preventDefault();

  var especialidad = document.getElementById("especialidad").value;
  var pan = document.querySelector('input[name="pan"]:checked').value;
  var cantidad = document.getElementById("cantidad").value;
  var domicilio = document.getElementById("domicilio").checked;
  var ingredientes = document.querySelectorAll('.checkbox-list input[type="checkbox"]:checked');

  var total = 0;

  total = total + Number(especialidad);
  total = total + Number(pan);

  ingredientes.forEach(function(opcion) {
    total = total + Number(opcion.value);
  });

  total = total * Number(cantidad);

  if (domicilio) {
    total = total + 30;
  }

  document.getElementById("total").textContent = "Total: $" + total + " MXN";
}
