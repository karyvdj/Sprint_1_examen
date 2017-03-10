var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    return estudiantes;
}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado

    var nombreEstudiante = prompt ("Nombre:"); // declarar variable de las preguntas
    var puntosTecnicos = prompt ("Puntos Tecnicos:");
    var puntosHse = prompt ("Puntos Habiliades Socio-Emocionales:");

    var alumno = { //objeto que almacena los datos del alumno ingresado
      "nombreEstudiante": nombreEstudiante,
      "puntosTecnicos": puntosTecnicos,
      "puntosHse": puntosHse
    }
    estudiantes.push (alumno); //guardar en el arreglo global
    return alumno; //retorna el ultimo alumno ingresado
}
function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante

    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombreEstudiante + "</p>"; //llama a la propiedad del objeto
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.puntosTecnicos + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.puntosHse + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";

    return resultado;

}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    var lista = ""; //variable que almacena los estudiantes que ingresaste
    for(var i = 0; i < estudiantes.length; i++){ //recorre la longitud del arreglo estudiantes
        lista += mostrar(estudiantes[i]); //concatenacion de la lista y los estudiantes ingresados llamando a mostrar
    }
    return lista;
}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    var estudiantesFiltrados = estudiantes.filter (function (alumno){
      return alumno.nombreEstudiante.toLowerCase () == nombre.toLowerCase ();
    });
    return estudiantesFiltrados;

}//filter de la lista final por el nombre y poner un toLowerCase

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
    var ordenarPuntosTecnicos = estudiantes.sort (function (itemA, itemB){
      return itemB.puntosTecnicos > itemA.puntosTecnicos;
    });
    return ordenarPuntosTecnicos;
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    var ordenarPuntosHse = estudiantes.sort (function (itemA, itemB){
      return itemB.puntosHse > itemA.puntosHse;
    });
    return ordenarPuntosHse;
}
