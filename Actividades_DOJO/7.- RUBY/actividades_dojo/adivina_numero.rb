def adivina_numero valor
  number = 25

  if valor == number
    puts 'Lo conseguiste!'
  elsif valor > number
    puts '¡La suposición fue demasiado alta!'
  elsif valor < number
    puts '¡La supocición fue demasiado baja!'
  end
end

puts 'Adivina el nùmero: '
numero = gets.chomp.to_i

adivina_numero numero
