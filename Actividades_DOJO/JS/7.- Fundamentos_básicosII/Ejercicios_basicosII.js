// Fundamentos Básicos II

//1.- Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, por el string “big”. Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].

function convertirAStringBig(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            array[i] = "big";
        }
    }
    return array;
}

console.log(convertirAStringBig([-1, 3, 5, -5]));

/*2.- Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un array de números. La función debería imprimir (print) 
el menor valor del array, y devolver (return) el mayor. */

function returnMayor(array) {
    var mayor = array[0];
    var menor = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i];
        } else if (array[i] < menor) {
            menor = array[i];
        }
    }
    console.log("Número menor: " + menor);
    return mayor;
}

returnMayor([-1, 3, 5, -5, -100, 500]);
/*3.- Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números. 
La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar.*/

function returnMayor(array) {
    var mayor = array[0];
    var menor = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i];
        } else if (array[i] < menor) {
            menor = array[i];
        }
    }
    console.log("Número menor: " + menor);
    return mayor;
}

returnMayor([-1, 3, 5, -5, -100, 500]);

/*4.-Doble Visión - Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique. 
Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original.*/

function dobleVision(array) {
    var auxArray = [];
    for (var i = 0; i < array.length; i++) {
        auxArray[i] = Math.pow(array[i], 2);
    }
    return auxArray;
}
console.log(dobleVision([-1, 3, 5, -5]));

/*5.- Contar Positivos -  Dado un array de números, crea una función para reemplazar el último valor con el número 
de valores positivos encontrados en el array. Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3].*/
function contadorPositivos(array) {
    var contador = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            contador += 1;
        }
    }
    array[array.length - 1] = contador;
    return array;
}
console.log(contadorPositivos([-1, 3, 5, 3]));

/*6.-Pares e Impares - Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares seguidos, 
imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”.*/

function paresParesImpares(array) {
    var contadorPares = 0;
    var contadorImpares = 0;

    for (var i = 0; i < array.length; i++) {

        if (array[i] % 2 == 0) {
            contadorPares = contadorPares + 1;
            contadorImpares = 0;
        } else {
            contadorImpares = contadorImpares + 1;
            contadorPares = 0;
        }

        if (contadorImpares == 3) {
            return contadorImpares + " Impares" + " ¡Qué imparcial!";

        } else if (contadorPares == 3) {
            return contadorPares + " pares" + " ¡Es para bién!";
        }
    }
    if (contadorPares == 0 || contadorImpares == 0) {
        return "No eres imparcial ni es para bien"
    }
}
console.log(paresParesImpares([-1, 4, 8, 6, 3, 5, 3]));
console.log(paresParesImpares([3, 4, -7, -2, 8, 5, 9]));

/*7.- Incrementa los Segundos - Dado un array de números llamado arr, suma 1 a los elementos, específicamente a 
aquellos cuyo índice es impar (arr[1], arr[3], arr[5], etc). Luego, imprime (console.log) cada valor del array y devuelve el arreglo arr.*/

function incrementaSegundo(arr) {

    for (var i = 0; i < arr.length; i++) {
        if (i % 2 != 0) {
            arr[i] = arr[i] + 1;
        }
        console.log(i + " -> " + arr[i]);
    }
    return arr;
}
console.log(incrementaSegundo([-2, 3, 5, -5]));

/*8.- Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) que contiene strings, 
reemplaza cada string con un número de acuerdo cantidad de letras (longitud) del string anterior. 
Por ejemplo, longitudesPrevias([“programar”,“dojo”, “genial”]) debería devolver [“programar”,9, 4]. Pista: ¿For loops solo puede ir hacia adelante?*/
function longitudesPrevias(array) {
    var cadena = "";
    for (var i = array.length - 1; i > 0; i--) {
        cadena = array[i - 1];
        array[i] = cadena.length;
    }
    return array;
}
console.log(longitudesPrevias(["programar", "paralelepipedo", "dojo", "genial"]));

/*9.- Agrega Siete - Construye una función que acepte un array. Devuelve un nuevo array 
con todos los valores del original, pero sumando 7 a cada uno. No alteres el array original. 
Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] en un nuevo array. */

function agregaSieteAArray(array) {
    var auxArray = [];
    for (var i = 0; i < array.length; i++) {
        auxArray.push(array[i] + 7);
    }
    return auxArray;
}

console.log(agregaSieteAArray([1, 4, 6, 0, 8]));


/*10.- Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar. 
Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3]. 
Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores).*/

function agregaSieteAArray(array) {
    var auxArray = [];
    for (var i = 0; i < array.length; i++) {
        auxArray.push(array[i] + 7);
    }
    return auxArray;
}

console.log(agregaSieteAArray([1, 4, 6, 0, 8]));

/*11.- Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original, 
pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], devuelve [-1,-3,-5].*/

function perspectivaNegativa(array) {
    var auxArray = [];
    var recibe = 0;
    for (var i = 0; i < array.length; i++) {

        if (array[i] > 0) {
            recibe = -array[i]
        } else
            recibe = array[i];

        auxArray.push(recibe);
    }

    return auxArray;
}

console.log(perspectivaNegativa([1, -3, 5]));

/*13.- Siempre hambriento - Crea una función que acepte un array e imprima (print) “yummy” cada vez que alguno de 
los valores sea “comida”. Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez.*/

function siempreHambriento(array) {
    var tengoHambre = false;
    for (var i = 0; i < array.length; i++) {
        if (array[i] == "comida") {
            console.log("yummy");
            tengoHambre = true;
        }
    }
    if (tengoHambre == true) {
        console.log("tengo hambre");
    }
}
siempreHambriento(["comida", "comida", "pasta", "café"]);
siempreHambriento(["gato", "animales", "pasta", "café"]);

/*14.- Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, el tercero con el ante penútimo, etc. 
Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a [“pizza¨, 42, “Ada”, 2, true]. 
cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a [6,2,4,3,5,1]. No es necesario devolver (return) el array esta vez. */

function cambiaHaciaElCentro(array) {
    var punteroFinal = array.length - 1;
    var maximo = array.length / 2;
    var auxiliar;
    for (var punteroInicial = 0; punteroInicial < maximo; punteroInicial += 2) {
        auxiliar = array[punteroInicial];
        array[punteroInicial] = array[punteroFinal];
        array[punteroFinal] = auxiliar;
        punteroFinal -= 2;
    }
    console.log("R: " + array);
}
cambiaHaciaElCentro([1, 2, 3, 4, 5, 6]);
cambiaHaciaElCentro([true, 42, "Ada", 2, "pizza"]);

/*15.- Escala el Array - Dado un array arr y un número num, multiplica todos los valores en el array arr por el número num, 
y devuelve el array arr modificado. Por ejemplo, escalaArray([1,2,3], 3] debería devolver [3,6,9].*/

function escalaArray(array, num) {
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i] * num;
    }

    return array;
}

console.log(escalaArray([1, 2, 3], 3));