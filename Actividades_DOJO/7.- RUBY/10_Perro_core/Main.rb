require './Perro.rb'
=begin

@Hcayupi
Crea un archivo mamifero.rb. En este archivo, crea una clase Mamifero. 
Mamifero debe tener un atributo de salud predeterminado de 150. 
También adicione un método llamado mostrar_salud , que cuando sea invocado, 
muestre la salud del mamífero.

- En un archivo separado (perro.rb) crea una clase llamada Perro que herede de la 
  clase Mamifero y haga lo siguiente:
- Salud predeterminada de 150 (heredada).  
- Un método llamado acariciar, que cuando se invoque, aumente la salud en 5.  
- Un método llamado caminar, que cuando se invoque, disminuya la salud en 1.  
- Un método llamado correr, que cuando se invoque, disminuya la salud en 10.  
- Un método llamado mostrar_salud (heredado).  
- Haga que una instancia de la clase Perro camine 3 veces, corra dos veces, acaricie una vez y luego muestre su salud.
=end

perro = Perro.new
perro.acariciar
perro.caminar
perro.correr
perro.mostrar_salud

perro.caminar*3
perro.correr*10
perro.acariciar
perro.mostrar_salud
