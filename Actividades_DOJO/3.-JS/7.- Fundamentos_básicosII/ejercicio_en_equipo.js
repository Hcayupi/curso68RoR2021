/*11.- Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original, 
pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], devuelve [-1,-3,-5].*/

function perspectivaNegativa(array) {
    var nuevoArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            nuevoArray.push(-array[i]);
        } else {
            console.log("---");
            nuevoArray.push(array[i]);
        }
    }

    return nuevoArray;
}
console.log(perspectivaNegativa([1, -3, 5]));
/*12.- Siempre hambriento - Crea una función que acepte un array e imprima (print) “yummy” cada vez que alguno de 
los valores sea “comida”. Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez.*/

function siempreHambriento(array) {
    //console.log("--------------")
    var tengoHambre = true; //variable booleana

    for (let i = 0; i < array.length; i++) {

        if (array[i] == "comida") {
            tengoHambre = false;
            console.log("yummy");
        }
    }
    if (tengoHambre)
        console.log("tengo hambre");
}

siempreHambriento([1, 56, "comida", "pato", "zapato", true, false, "comida"]);
siempreHambriento([1, 56, "juguete", "pato", false, "no hay"]);

/*13.- Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, el tercero con el antepenúltimo, etc. 
Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a [“pizza¨, 42, “Ada”, 2, true]. 
cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a [6,2,4,3,5,1]. No es necesario devolver (return) el array esta vez. */
function cambiaHaciaElCentro(array) {
    var auxiliar = 0;
    var iFinal = array.length - 1;
    var mitadArray = array.length / 2;

    for (let iInicial = 0; iInicial < mitadArray; iInicial += 2) {
        auxiliar = array[iInicial];
        array[iInicial] = array[iFinal];
        array[iFinal] = auxiliar;
        iFinal -= 2;
    }
    return array;
}

console.log(" salida final: " + cambiaHaciaElCentro([1, 2, 3, 4, 5, 6, 45, 23, 58, 9, 54, 25, 852, 458, 42, 12, 36, 98]));
console.log(" salida final: " + cambiaHaciaElCentro([true, 42, "Ada", 2, "pizza"]));

/*Ejercicio 13.*/
/*Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, el tercero con el ante penúltimo, etc.
Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a [“pizza¨, 42, “Ada”, 2, true]. 
cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a [6,2,4,3,5,1]. No es necesario devolver (return) el array esta vez.*/

function cambiaHaciaElCentro(array) {
    var primer = [];
    var tercero = [];
    primer = array[array.length - 1];
    array[array.length - 1] = array[0];
    array[0] = primer;
    tercero = array[array.length / 2];
    array[array.length / 2] = array[(array.length / 2) - 1];
    array[(array.length / 2) - 1] = tercero;

    return array
}
console.log(cambiaHaciaElCentro([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//opcion 2//
function cambiaHaciaElCentro(array) {
    for (var i = 0; i < array.length / 2; i += 2) {
        var temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    return array;
}
console.log(cambiaHaciaElCentro([1, 2, 3, 4, 5, 6])); //cambia el array a [6,2,4,3,5,1

/*14.- Escala el Array - Dado un array arr y un número num, multiplica todos los valores en el array arr por el número num, 
y devuelve el array arr modificado. Por ejemplo, escalaArray([1,2,3], 3] debería devolver [3,6,9].*/


function escalaArray(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * num;
    }
    return arr;
}
console.log(escalaArray([0, 9, 10, 50], 7));