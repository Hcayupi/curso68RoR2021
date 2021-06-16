function alumnoAlAzar(arreglo) {
    var posicion = Math.floor(Math.random() * arreglo.length);
    var apellido = arreglo[posicion];

    console.log("*** La o El elegido es: " + apellido);
}

var nombres = ["Inzunza", "Vennik", "Salazar", "Hoyuela"];

alumnoAlAzar(nombres);