document.getElementById('formtarea').addEventListener('submit',savetarea);

function savetarea(e) {
  
  let titulo = document.getElementById('titulo').value;
  let descripcion = document.getElementById('descripcion').value;
  console.log(descripcion)

  const tarea = {
    titulo, 
    descripcion 
  };


  if(localStorage.getItem('tareas') === null){
    let tareas = [];
    tareas.push(tarea);
    localStorage.setItem('tareas', JSON.stringify(tareas)); //JSON.stringify = Lo Convierto en string
  }else{
  let tareas = JSON.parse(localStorage.getItem('tareas')); //JSON.parse Lo Convierto el Objeto de JS
  tareas.push(tarea);
  localStorage.setItem('tareas', JSON.stringify(tareas));
}


  gettareas();
  document.getElementById('formtarea').reset();
  e.preventDefault();

}

function gettareas(){
  let tareas = JSON.parse(localStorage.getItem('tareas'));
  let tareasView = document.getElementById('tareas');

  tareasView.innerHTML = '';

  for(let i = 0; i < tareas.length; i++) {
    let titulo = tareas[i].titulo;
    let descripcion = tareas[i].descripcion;

    tareasView.innerHTML += `<div class="card mb-3">
    <div class="card-body">
    <p>${titulo} - ${descripcion} </p>
    <a class="btn btn-danger " onclick="deletetarea('${titulo}')">
    Borrar</a>
    </div>
    </div>`;
  }
}

function deletetarea(titulo){
  let tareas = JSON.parse(localStorage.getItem("tareas"));
  for(let i = 0; i < tareas.length; i++){
    if(tareas[i].titulo == titulo){
      tareas.splice(i, 1);
    }
  }

  localStorage.setItem('tareas', JSON.stringify(tareas));
  gettareas();
}

gettareas();


