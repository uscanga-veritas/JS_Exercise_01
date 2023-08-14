function encontrarNumeroMenor() {
    var numero1 = parseFloat(prompt("Ingresa el primer número:"));
    var numero2 = parseFloat(prompt("Ingresa el segundo número:"));
    if (numero1 < numero2) {
      alert(numero1 + " es menor que " + numero2);
    } else {
      alert(numero2 + " es menor que " + numero1);
    }
  }