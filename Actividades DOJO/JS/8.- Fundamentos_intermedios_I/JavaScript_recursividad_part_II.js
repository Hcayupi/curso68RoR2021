function funcionFibonacci(numero) {
    if (numero == 0) {
        return 0;
    } else if (numero == 1)
        return 1;

    return funcionFibonacci(numero - 1) + funcionFibonacci(numero - 2);
}

var numero = 7
console.log("Fibonacci(" + numero + ")=" + funcionFibonacci(numero));