function encontrarNumeroMayor() {
    var numero1 = parseFloat(prompt("Ingresa el primer número:"));
    var numero2 = parseFloat(prompt("Ingresa el segundo número:"));
    var numero3 = parseFloat(prompt("Ingresa el tercer número:"));
    
    if (numero1 >= numero2 && numero1 >= numero3) {
      alert(numero1 + " es el número mayor");
    } else if (numero2 >= numero1 && numero2 >= numero3) {
      alert(numero2 + " es el número mayor");
    } else {
      alert(numero3 + " es el número mayor");
    }
  }