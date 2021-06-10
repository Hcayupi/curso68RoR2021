/*1.- Dados un array y un valor Y, cuenta e imprime (print) el número de valores del array que sean mayores que Y.  */

function mayorQueY(array, y) {
    var contador = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] > y) {
            console.log(array[i] + " es mayor que " + y);
            contador += 1;
        }
    }
    console.log(contador + " números son mayores que " + y);
}

mayorQueY([2, 3, 58, -5, 878, 52, 1, 2, 3, 8, 5], 12);



/*2.- Dado un array, imprime los valores máximos (max), mínimos (min) y promedio (average) para el array.  */

function mayorMenorProm(array) {
    var mayor = array[0];
    var menor = array[0];
    var suma = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i];
        } else if (array[i] < menor) {
            menor = array[i];
        }
        suma += array[i];
    }
    var promedio = suma / array.length;
    console.log("Mayor: " + mayor);
    console.log("Menor: " + menor)
    console.log("Promedio: " + promedio);
}

mayorMenorProm([2, 3, 58, -5, 878, 52, 1, 2, -10, 0, 1000]);

/*3.- Dado un array de números, crea una función que dé como resultado un nuevo array donde los valores negativos se 
reemplacen por el texto (string) ‘Dojo’. Por ejemplo, reemplazarNegativos([1,2,-3,-5,5]) debiera devolver [1,2, “Dojo”, “Dojo”, 5]. */

function reemplazarNegativos(array) {
    var nuevoArray = array;
    for (var i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            nuevoArray[i] = "Dojo";
        }
    }
    console.log("Nuevo array: [" + nuevoArray + "]");
}
reemplazarNegativos([1, 2, -3, -5, 5]);

/*4.- Dado un array y su respectivo índice, remueve los valores en el rango del índice 
dado( acortando el array). Por ejemplo, removerRango([20,30,40,50,60,70],2,4)debiera devolver [20,30,70].*/

function removerRango(array, desde, hasta) {
    var nuevoArray = [];
    for (var i = 0; i < array.length; i++) {
        if (i < desde || i > hasta) {
            nuevoArray.push(array[i]);
        }
    }
    console.log("Nuevo array: [" + nuevoArray + "]");
}
removerRango([20, 30, 40, 50, 60, 70], 2, 4);