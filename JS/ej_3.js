function verificarParImpar() {
    var numero = parseInt(prompt("Ingresa un número:"));
    if (numero % 2 === 0) {
      alert(numero + " es un número par");
    } else {
      alert(numero + " es un número impar");
    }
  }