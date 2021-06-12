/*1.- Configura un array para que los valores negativos se transformen en 0. Por ejemplo, resetNegativos([1,2,-1,-3]) debiera dar como resultado [1,2,0,0]. */
function resetNegativos(array) {

    for (var i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            array[i] = 0;
        }
    }
    return array;
}

console.log(resetNegativos([1, 2, -1, -3]));

/*2.- Dado un array, mueve todos los valores un espacio de derecha a izquierda eliminando el primer valor y dejando un 0 para el último valor. 
Por ejemplo, moverAdelante([1,2,3]) debiera dar como resultado [2,3,0]. */
function moverAdelante(array) {
    for (var i = 0; i < array.length; i++) {
        if (i == array.length - 1) {
            array[i] = 0;
        } else array[i] = array[i + 1];
    }

    return array;
}

console.log(moverAdelante([1, 2, 3, 34, 4, 5, 6, 6, 7]));

/*3.-Configura un array para que el resultado sean los valores en el orden contrario. 
Por ejemplo, returnReverso([1,2,3]) debe dar [3,2,1]. */

function returnReverso(array) {
    var arrayAux = [];
    for (var i = array.length - 1; i >= 0; i--) {
        arrayAux.push(array[i]);
    }

    return arrayAux;
}

console.log(returnReverso([1, 2, 3]));

/**4.- Crea una función que cambie un array repitiendo sus valores originales (manteniendo el mismo orden). 
 * Por ejemplo, repetirValores([4,”Ulysses”, 42, false]) debiera dar [4,4, “Ulysses”, “Ulysses”, 42, 42, 
 * false, false]. */

function repetirValores(array) {
    var arrayAux = [];
    for (var i = 0; i < array.length; i++) {
        arrayAux.push(array[i]);
        arrayAux.push(array[i]);
    }

    return arrayAux;
}

console.log(repetirValores([4, "Ulysses", 42, false]));