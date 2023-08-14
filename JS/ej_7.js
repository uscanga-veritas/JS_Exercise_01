function verificarDiaSemana() {
    var dia = prompt("Ingresa un día de la semana:").toLowerCase();
    if (dia === "lunes") {
      alert("Es lunes");
    } else if (dia === "viernes") {
      alert("Es viernes");
    } else if (dia === "sábado" || dia === "domingo") {
      alert("Es fin de semana");
    } else {
      alert("No es un día especial");
    }
  }