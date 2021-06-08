// Fundamentos Intermedios
// Parte 1

/*1.- Sigma - Implementa una función sigma(num) que, dado un número, devuelve la suma de todos los enteros 
positivos (incluyendo el número dado). Ej: sigma(3) = 6 (1+2+3); sigma(5) = 15 (1+2+3+4+5).*/

function sigma(num) {
    var suma = 0;
    for (var i = 1; i <= num; i++) {
        suma += i;
    }
    return suma;
}
var numero = 6;
console.log("Sigma (" + numero + ")= " + sigma(numero));

/*2.- Factorial - Escribe una función factorial(num) que, dado un número, devuelva el producto 
(multiplicación) de todos los enteros positivos (incluyendo el número dado). Por ejemplo: factorial(3) = 6 (1*2*3); factorial(5) = 120 (1*2*3*4*5).*/
function factorial(num) {
    var producto = 1;
    for (var i = 1; i <= num; i++) {
        producto *= i;
    }
    return producto;
}
var numero = 5;
console.log("Factorial (" + numero + ")= " + factorial(numero));


/*3.- Fibonacci - Crea una función para generar números de Fibonacci. En esta famosa secuencia matemática, 
cada número es la suma de las dos anteriores, partiendo con los valores 0 y 1. Tu función debería aceptar un argumento, 
un índice en la secuencia (donde 0 corresponde al valor inicial, 4 corresponden al valor cuatro más tarde, etc). 
Ejemplos: fibonacci(0) = 0 (dado), fibonacci(1) = 1 (dado), fibonacci(2) = 1 (fib(0)+fib(1), o 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, o 1+1), 
fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8). Haz esto primero sin usar recursión. 
Si no sabes qué es una recursión, no te preocupes puesto que vamos a introducir este concepto en la Parte 2 de esta actividad.*/
function funcionFibonacci(indiceFibonacci) {
    var numeroAnterior = 0;
    var numeroSiguiente = 1;
    var auxiliar = 0;
    var suma = 0;

    if (indiceFibonacci == 0) {

        console.log("Fibonacci (" + indiceFibonacci + ")= 0");

    } else if (indiceFibonacci == 1) {

        console.log("Fibonacci (" + indiceFibonacci + ")= 1");

    } else {

        for (var i = 1; i < indiceFibonacci; i++) {
            suma = numeroAnterior + numeroSiguiente;
            auxiliar = numeroSiguiente;
            numeroSiguiente = suma;
            numeroAnterior = auxiliar;
        }
        console.log("Fibonacci (" + indiceFibonacci + ")= " + suma);

    }
}
funcionFibonacci(0);
funcionFibonacci(1);
funcionFibonacci(2);
funcionFibonacci(3);
funcionFibonacci(4);
funcionFibonacci(5);
funcionFibonacci(6);
funcionFibonacci(7);

/*4.- Array: Penúltimo: Devuelve el penúltimo elemento del array. Dado [42,true,4,”Liam”, 7] 
devuelve “Liam”. Si el array es muy pequeño, devuelve null.*/

function retornoPenultimo(array) {
    var tamagno = array.length;

    if (tamagno < 3) {
        return null;
    } else
        return array[array.length - 2];
}

console.log(retornoPenultimo([42, true, 4, "Liam", 7]));

//5.- Array: “N” último: Devuelve el elemento “N” último. Dado ([5,2,3,6,4,9,7],3], devuelve 6. Si el array es muy pequeño, devuelve null.

function retornoValorArray(array, posicion) {
    let tamagno = array.length - 1;
    if (tamagno < posicion) {
        return null;
    } else
        return array[posicion];
}

console.log(retornoValorArray([5, 2, 3, 6, 4, 9, 7], 3));

/*6.- Array: Segundo más grande: Devuelve el segundo elemento más grande de un array. Dado [42,1,4,3.14,7], devuelve 7.  
Si el array es muy pequeño, devuelve null.*/

function segundoMasGrande(array) {

    var auxiliar = 0;
    var tamagnoArray = array.length;

    for (let i = 0; i < tamagnoArray; i++) {
        for (let j = tamagnoArray - 1; j > i; j--) {
            if (array[i] > array[j]) {
                auxiliar = array[j];
                array[j] = array[i];
                array[i] = auxiliar;
            }
        }
    }
    console.log("El segundo número más grande es:" + array[array.length - 2]);
}

segundoMasGrande([42, 1, 4, 3.14, 7]);


/*7.- Doble Problema Par: Crea una función que cambie un array dado duplicando cada uno de sus elementos y 
manteniendo el orden original. Convierte [4, "Ulysses", 42, false]   a    [4,4, "Ulysses", "Ulysses", 42, 42, false, false].*/

function duplicarValores(array) {
    var arrayAuxiliar = [];
    for (var i = 0; i < array.length; i++) {
        arrayAuxiliar.push(array[i]);
        arrayAuxiliar.push(array[i]);
    }

    return arrayAuxiliar;
}

console.log(duplicarValores([4, "Ulysses", 42, false]));