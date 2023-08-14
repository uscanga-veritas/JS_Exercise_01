function verificarNumeroCliente() {
    var numeroCliente = parseInt(prompt("Ingresa tu número de cliente:"));
    if (numeroCliente === 1000) {
      alert("¡Ganaste un premio!");
    } else {
      alert("Lo sentimos, sigue participando");
    }
  }