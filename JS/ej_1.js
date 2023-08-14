function responderPregunta() {
    var respuesta = prompt("¿Eres bellisimo/a?");
    if (respuesta === "sí" || respuesta === "Sí" || respuesta === "SÍ" || respuesta === "si" || respuesta === "Si" || respuesta === "SI") {
      alert("Ciertamente");
    } else if (respuesta === "no" || respuesta === "No" || respuesta === "NO") {
      alert("No te creo");
    } else {
      alert("Respuesta no válida");
    }
  }