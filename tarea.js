window.onload = iniciar;

let AgendaTareas = [];

function iniciar(){
    let tarea = document.getElementById("btnAgregar")
    tarea.addEventListener("click", AgendarTarea)
}

function AgendarTarea (evento){
  evento.preventDefault();
  let nombre = document.getElementById("txtNombre").value;
  let descripcion = document.getElementById("txtDesc").value;
 
  let ObjetoTarea = {
  "nombre" : nombre,
  "descripcion": descripcion,
  }

  AgendaTareas.push(ObjetoTarea);
  mostrar();
}


function mostrar(){
  let listado = document.getElementById("listado")

  let mensaje = "";

  for(let mostrar of AgendaTareas){

    mensaje += mostrar.nombre + ": " + mostrar.descripcion + "<br>";

  }
  listado.innerHTML = mensaje;
}
