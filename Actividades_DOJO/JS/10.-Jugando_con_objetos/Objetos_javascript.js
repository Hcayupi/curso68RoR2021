var users = [{ name: "Michael", age: 37 }, { name: "John", age: 30 }, { name: "David", age: 27 }];

//¿Cómo harías print/log de la edad de John?
console.log("1.- Edad de John: " + users[1].age);
//¿Cómo harías print/log del nombre del primer objeto?
console.log("2.- Nombre del primer objeto: " + users[0].name);
//¿Cómo harías print/log del nombre y la edad de cada usuario utilizando un for loop? Tu output debería verse algo como esto
console.log("3.- ---- Lista de usuarios --- ");
for (let indice in users) {
    console.log("-Nombre: " + users[indice].name + " - " + users[indice].age);
}
//¿Cómo harías para imprimir el nombre de los mayores de edad?
console.log("4.- ---- Usuarios mayores de edad --- ");
for (let indice in users) {
    if (users[indice].age >= 18) {
        console.log("Nombre: " + users[indice].name);
    }
}