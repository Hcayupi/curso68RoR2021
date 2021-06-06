// Trabaja en los siguientes desafíos y sube tu trabajo en un solo archivo.

//1.- Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.

function generarArray() {
    var array = [];
    for (var i = 1; i <= 255; i++) {
        array.push(i);
    }
    return array;
}
console.log(generarArray());

//2.- Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio. 

function sumadorDePares() {
    var sumaPares = 0;
    for (var i = 1; i <= 1000; i++) {
        if (i % 2 == 0) {
            sumaPares = sumaPares + i;
        }
    }
    return sumaPares;
}

console.log(sumadorDePares());

//3.- Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).

function sumadorDeImpares() {
    var sumaImpares = 0;
    for (var i = 1; i <= 5000; i++) {
        if (i % 2 != 0) {
            sumaImpares = sumaImpares + i;
        }
    }
    return sumaImpares;
}

console.log(sumadorDeImpares());



//4.- Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14). 

function sumaValoresArray(array) {
    var suma = 0;
    for (var i = 0; i < array.length; i++) {
        suma = suma + array[i];
    }
    return suma;
}
console.log(sumaValoresArray([-5, 2, 5, 12]));

//5.- Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7). 

function numeroMayor(array) {
    var numMayor = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > numMayor) {
            numMayor = array[i];
        }
    }

    return numMayor;
}

console.log(numeroMayor([-3, 3, 5, 7]));

//6.- Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función que devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2).

function promedioArray(array) {
    var suma = 0;
    for (var i = 0; i < array.length; i++) {
        suma = suma + array[i];
    }
    return suma / array.length;
}
console.log(promedioArray([1, 3, 5, 7, 20]));

//7.- Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.

function devuelveImpares() {
    var arrayImpar = [];
    for (var i = 1; i <= 50; i++) {
        if (i % 2 != 0) {
            arrayImpar.push(i);
        }
    }
    return arrayImpar;
}
console.log(devuelveImpares());


//8.- Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7). 

function mayorQue(array, y) {
    var numerosMayores = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > y) {
            numerosMayores.push(i);
        }
    }
    return numerosMayores;
}
var valorAcomparar = 3
var valoresMayores = mayorQue([1, 3, 5, 7], valorAcomparar);
console.log("Hay " + valoresMayores.length + " valores mayores que " + valorAcomparar + " y estos son: " + valoresMayores);

//9.- Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).
function valoresAlCuadrado(array) {
    for (var i = 0; i < array.length; i++) {
        array[i] = Math.pow(array[i], 2);
    }
    return array;
}

console.log(valoresAlCuadrado([1, 5, 10, -2]));

//10.- Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0. Cuando el programa esté listo, el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).
function reemplazaNegativos(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            array[i] = 0;
        }
    }
    return array;
}

console.log(reemplazaNegativos([1, 5, 10, -2, -3, 5, -9]));

//11.- Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo contenga el valor mayor (max), menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).
function analizaValores(array) {
    var arrayAux = [];
    var mayor = array[0];
    var menor = array[0];
    var suma = 0;;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i];
        } else if (array[i] < menor) {
            menor = array[i];
        }
        suma = suma + array[i];
    }
    arrayAux.push(mayor);
    arrayAux.push(menor);
    arrayAux.push(suma / array.length);
    return arrayAux;
}

console.log(analizaValores([-3, 5, 10, 0, 100, -9, 102, -100, -2, -1]));
//12.- Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array. La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]). 

function intercambiaValores(array) {
    var auxiliar = array[0];
    array[0] = array[array.length - 1];
    array[array.length - 1] = auxiliar;
    return array;
}

console.log(intercambiaValores([1, 5, 10, -2]));

//13.- De Número a String: Escribe una función que tome un array de números y reemplace cualquier valor negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].

function deNumeroAString(array) {

    for (var i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            array[i] = "Dojo";
        }
    }
    return array;
}

console.log(deNumeroAString([1, 5, -8, -6, 10, -2]));