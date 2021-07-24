class MathDojo
    @@operacion = 0
  
    def add *params
        @@operacion += params.flatten.sum
        self
    end
  
    def subtract *params
        num = params.flatten.sum
        @@operacion-=num
        self
    end
  
   def result
        puts @@operacion.round(2)
        @@operacion = 0
        self
    end
    
end

desafio1 = MathDojo.new.add(2).add(2, 5).subtract(3, 2).result # => 4
desafio2 = MathDojo.new.add(1).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract([2,3], [1.1, 2.3]).result # => 23.15