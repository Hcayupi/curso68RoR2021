// 1.- Print 1 to x
// Por favor, completa los siguientes códigos para que la función imprima (print) todos los enteros (integers) de 1 a x. Si x es negativo, 
// haz que se muestre (print/log) “número negativo” y que la función devuelva falso.

function printUpTo(x) {
    if (x < 0) {
        console.log("número negativo");
        return false;
    }

    for (var i = 1; i <= x; i++) {
        console.log(i);
    }
}
printUpTo(1000);
y = printUpTo(-10);
console.log(y);

// 2.- PrintSum
// Completa el código de más abajo para que la función imprima enteros (integers) de 0 a x y donde cada entero imprima la suma (sum) parcial. Haz que la función entregue la suma final.

function printSum(x) {
    var sum = 0;
    for (i = 0; i <= x; i++) {
        sum += i;
        console.log(sum);
    }
    return sum
}
y = printSum(255)
console.log("suma total", y);

// 3.- PrintSumArray
// Completa el código a continuación para que la función entregue la suma de todos los valores en un array dado.

function printSumArray(x) {
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return sum;
}
console.log(printSumArray([1, 2, 3]));


// 4.- Bonus: LargestElement
// Crea una función que entregue el elemento más grande (largest element) en un array. Por ejemplo largestElement([1,30,5,7]) debiera dar como resultado 30.

function largestElement(x) {
    var mayor = x[0];
    for (var i = 0; i < x.length; i++) {
        if (x[i] > mayor)
            mayor = x[i];
    }
    return mayor;
}
numMayor = largestElement([1, 30, 5, 7]);
console.log(numMayor);