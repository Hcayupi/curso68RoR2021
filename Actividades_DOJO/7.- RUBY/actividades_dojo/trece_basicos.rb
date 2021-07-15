
=begin
Mostrar 1-255

Escriba un programa que muestre todos los números del 1 al 255.
=end

for num in (1..255)
    puts num
end

(1...255).each do |num|
    puts num
end

i=1
num = 255
while i <= num do
    puts num
    i+=1
end

1.upto(255) { |num| print i, ""}


=begin
Mostrar números impares entre 1 y 255

Escriba un programa que muestre todos los números impares del 1 al 255.
=end

for num in (1..255)
    if  num % 2 != 0
        puts num
    end
end

=begin
Muestre la suma

Escriba un programa que muestre los números del 0 al 255, pero esta vez,
muestre también la suma de los números que se han mostrado hasta el momento.
=end

suma =0;
for num in(0..255)
    suma+=num
    puts "Nuevo número: #{num} suma #{suma}"
end

i=1
num = 255
while i <= num do
    puts num
    i+=1
end

=begin
Recorriendo un arreglo

Dado un arreglo X, digamos [1, 3, 5, 7, 9, 13], escriba un programa que 
recorra cada elemento del arreglo y muestre su valor. 
Ser capaz de recorrer cada elemento de un arreglo es sumamente importante.
=end

aux=[1 , 3, 5, 7, 9, 13]

for i in aux
    puts I
end

=begin
Encontrar el máximo

Escriba un programa (un conjunto de instrucciones) que tome cualquier arreglo y 
muestre el valor máximo del arreglo. Tu programa debe funcionar también con arreglos 
que tengan todos los números negativos (ejemplo [-3, -5, -7]), o incluso 
una combinación con números positivos, negativos y cero. 
=end

def encontrarMax arreglo
    yield arreglo.max
end

def encontrarMaxSort arreglo
    yield arreglo.sort!.last
    puts arreglo.to_s
end


encontrarMax ([-1,3,0,7,9,13]) {|i| puts "el maximo es: #{i}"}

=begin
Promedio

Escriba un programa que tome un arreglo y muestre el PROMEDIO de los valores del arreglo. 
Por ejemplo para el arreglo [2, 10, 3] tu programa debe mostrar un promedio de 5. De nuevo, 
asegúrate de crear un caso base y escribe las instrucciones para resolver este caso primero, 
luego ejecuta tus instrucciones para otros casos más complicados. Puedes utilizar la función
length para esta actividad.
=end


=begin
Arreglo con números impares

Escriba un programa que cree un arreglo "y" que contenga todos los números impares entre 1 y 255. 
Cuando el programa se complete, "y" debe tener los valores de [1, 3, 5, 7, ... 255].
=end



=begin
Mayor que Y

Escriba un programa que tome un arreglo y devuelva la cantidad de números que son mayores a un valor 
dado Y. Por ejemplo si el arreglo es [1, 3, 5, 7] y Y = 3, después de ejecutar tu programa debe mostrar
 2 (debido a que hay 2 valores en el arreglo que son mayores a 3).
=end

puts [1, 3, 5, 7].find_all{|i| i>3}.size

=begin
Elevar al cuadrado

Dado un arreglo x, digamos [1, 5, 10, -2], cree un algoritmo (un conjunto e instrucciones) que multiplique 
cada valor en el arreglo por si mismo. Cuando el programa termine, el arreglo x debe tener valores que han 
sido elevados al cuadrado, es decir [1, 25, 100, 4].
=end

puts [1, 5, 10, -2].collect {|x| x*x}

=begin
Eliminar números negativos

Dado un arreglo x, digamos [1, 5, 10, -2], cree un algoritmo que reemplace cualquier número negativo 
con 0. Cuando el programa termine, x no debe tener valores negativos, es decir [1, 5, 10, 0].
=end


=begin
Max, Min, y Promedio

Dado un arreglo x, digamos [1, 5, 10, -2], cree un algoritmo que devuelva un hash con el valor máximo, 
el valor mínimo y el promedio de los valores en el arreglo.
=end
#hash
#=> hash rocket

arreglo=[1, 5, 10, -2]

hash["máximo"]= arreglo.min
hash["mínimo"]= arreglo.max
hash["promedio"]= arreglo.sum/arreglo.size

puts hash.to_s

=begin
Cambiar los valores en el arreglo

Dado un arreglo x, cree un algoritmo que cambie cada número del arreglo por el número que hay en la 
siguiente posición. Por ejemplo, dado el arreglo [1, 5, 10, 7, -2], cuando el programa termine, este 
arreglo debe ser [5, 10, 7, -2, 0].
=end

arreglo =[1, 5, 10, 7, -2]
arreglo.delete_at(0)
arreglo.push(0)
puts arreglo.to_s





