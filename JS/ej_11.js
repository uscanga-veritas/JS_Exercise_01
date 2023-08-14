function calcularPagoDistancia() {
    var vehiculo = prompt("Ingresa el tipo de vehículo (coche, moto, autobús):").toLowerCase();
    var precioKilometro = 0;
    
    switch (vehiculo) {
      case "coche":
        precioKilometro = 0.20;
        break;
      case "moto":
        precioKilometro = 0.10;
        break;
      case "autobús":
        precioKilometro = 0.5;
        break;
      default:
        alert("Tipo de vehículo no válido");
        return;
    }
    
    var kilometros = parseFloat(prompt("Ingresa la distancia recorrida en kilómetros:"));
    var litrosConsumidos = parseFloat(prompt("Ingresa los litros consumidos:"));
    
    var costoTotal = (precioKilometro * kilometros) + ((litrosConsumidos > 100) ? 10 : 5);
    
    alert("El costo total es: " + costoTotal + " MXN");
  }