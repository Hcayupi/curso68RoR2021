arreglo =[1, 5, 10, 7, -2]
arreglo.delete_at(0)
arreglo.push(0)
puts arreglo.to_s

# fetch
puts arreglo.fetch(6)

# eliminar un elemento del arreglo por posicion
arreglo.delete_at(0)
puts arreglo.to_s

# eliminar un elemento del arreglo
arreglo.delete("h")
puts arreglo.to_s

# reverse
puts arreglo.reverse.to_s

# length
puts arreglo.length

# sort ordena el arreglo
puts arreglo.sort!.to_s
puts arreglo.to_s

# shuffle desordena el arreglo
puts arreglo.shuffle!.to_s
puts arreglo.to_s

a = %w{gato perro oso} 
puts a.values_at(1,2).join(' y ') #=> "perro y oso"

# agregar el elemento al inicio del arreglo,desplazandolo al final los elementos
arreglo.insert(0,"j")
puts arreglo.to_s
arreglo.insert(9,"h")
puts arreglo.to_s

