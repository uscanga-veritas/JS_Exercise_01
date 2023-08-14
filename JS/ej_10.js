function calcularCostoPrograma() {
    var opciones = {
      "Course": 4999,
      "Carrera": 3999,
      "Master": 2999
    };
    
    var seleccion = prompt("Elige una opción (Course, Carrera, Master):");
    var costoMensual = opciones[seleccion];
    
    if (!costoMensual) {
      alert("Opción no válida");
      return;
    }
    
    var beca = prompt("¿Cuentas con alguna beca? (Facebook, Google, Jesua):").toLowerCase();
    var descuento = 0;
    
    switch (beca) {
      case "facebook":
        descuento = 0.2;
        break;
      case "google":
        descuento = 0.15;
        break;
      case "jesua":
        descuento = 0.5;
        break;
    }
    
    var costoMensualConDescuento = costoMensual * (1 - descuento);
    var duracion = {
      "Course": 2,
      "Carrera": 6,
      "Master": 12
    };
    var costoTotal = costoMensualConDescuento * duracion[seleccion];
    
    alert("El costo mensual con descuento es: " + costoMensualConDescuento + " MXN");
    alert("El costo total es: " + costoTotal + " MXN");
  }