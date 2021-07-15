class MathDojo
    @@operacion = Array.new
  
    def add *params

        params[0].each do |elementos|
        puts elementos


        @@operacion.push(params.sum)
        puts @@operacion
        self
    end

    def subtract *params
        @@operacion.push(-params.sum)
        puts @@operacion
        self
    end

    def result
        puts "resultado #{@@operacion.sum}"
        self
    end
end

desafio1 = MathDojo.new.add(2).add(2, 5).subtract(3, 2).result # => 4
desafio2 = MathDojo.new.add(1).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract([2,3], [1.1, 2.3]).result # => 23.15