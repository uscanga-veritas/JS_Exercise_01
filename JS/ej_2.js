function verificarDivisibilidad() {
    var numero = parseInt(prompt("Ingresa un número:"));
    if (numero % 2 === 0) {
      alert(numero + " es divisible entre 2");
    } else {
      alert(numero + " no es divisible entre 2");
    }
  }