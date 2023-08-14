function calcularCostoHelado() {
    var costoBase = 50;
    var topping = prompt("Elige un topping (oreo, KitKat, brownie):").toLowerCase();
    var costoTopping = 0;
    
    switch (topping) {
      case "oreo":
        costoTopping = 10;
        break;
      case "kitkat":
        costoTopping = 15;
        break;
      case "brownie":
        costoTopping = 20;
        break;
      default:
        alert("No tenemos este topping, lo sentimos.");
        break;
    }
    
    var costoTotal = costoBase + costoTopping;
    alert("El costo total del helado es: " + costoTotal + " MXN");
  }