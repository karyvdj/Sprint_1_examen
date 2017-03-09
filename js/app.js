var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
  /*  for(var i = 0; i < estudiantes.length; i ++)
    estudiante ++;*/
}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
    var preguntas = [
      "Nombre de la estudiante:",
      "Porcentaje técnico",
      "Porcentaje Habilidades Socio-Emocionales"
    ];

    for (var i = 0; i < preguntas.length ; i++){
      var ingresarEstudiante = prompt (preguntas [i]); // arroja todas la preguntas
      //estudiante = estudiante.toLowerCase();
     }

}
function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
      estudiante = {
         nombre: estudiante,
         tecnicos: parseInt("tecnicos"),
         hse: parseInt("hse")
       }; // objeto con valores no definidos
       /*estudiante.nombre = nombre;
       estudiante.apellido = apellido;*/ //esto ayuda cuando no se sabe las propiedades del objeto y se agregan mas
       estudiantes.push (estudiante); //push permite poner un elemento al final del arreglo
    /* function estudiante(nombre, tecnico, hse)
      {
        this.nombre: nombre,
        this.tecnico: tecnico,
        this.hse: hse
      }*/
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.tecnicos + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.hse + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";

    return resultado;

}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes

} /*puede se con un for que haga que los estudiantes que ingresaste vayan sumandose, o llando a la funcion que donde obtuve
la lista para aqui imprimirla*/

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

}//filter de la lista final por el nombre y poner un toLowerCase

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor

}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor

}
