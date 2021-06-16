function sumMaxMin(arr) {
    var mayor = arr[0];
    var menor = arr[0];
    var suma = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > mayor) {
            mayor = arr[i];
        } else if (arr[i] < menor) {
            menor = arr[i];
        }
    }
    return mayor + "+" + menor + "=" + (mayor + menor);
}

console.log(sumMaxMin([1, 3, 10]));

console.log(sumMaxMin([-2, -5, -10]));


describe("sumMaxMin", function() {
    it("Debería devolver 10+1=11 con argumento [1,2,10]", function() {
        expect(sumMaxMin([1, 3, 10])).toEqual("10+1=11");
    });
    it("Debería devolver -2+-10= -12 con argumento [-2,-5,-10]", function() {
        expect(sumMaxMin([-2, -5, -10])).toEqual("-2+-10=-12");
    });
});