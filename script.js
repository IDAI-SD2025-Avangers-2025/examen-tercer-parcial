
function calcularTotal() {

  var especialidad = document.getElementById("especialidad").value;
  var pan = document.querySelector('input[name="pan"]:checked');
  var cantidad = document.getElementById("cantidad").value;
  var domicilio = document.getElementById("domicilio");
  var ingredientes = document.querySelectorAll('.checkbox-list input[type="checkbox"]:checked');

  

  var total = 0;

 
  total = total + Number(especialidad);

  
  total = total + Number(pan.value);

  
  ingredientes.forEach(function(opcion) {
    total = total + Number(opcion.value);
  });

  
  total = total * Number(cantidad);

  
  if (domicilio.checked) {
    total = total + 30;
  }

  
  document.getElementById("total").textContent = "Total: $" + total + " MXN";
}

