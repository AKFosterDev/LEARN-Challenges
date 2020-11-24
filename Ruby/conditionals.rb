puts 'Enter a number:'
num = gets.chomp
p num

if num.to_i > 20
  p "#{num} is greater than 20"
elsif num.to_i < 20
  p "#{num} is less than 20"
else 
  p "Something went wrong"
end      

p 'Enter a greeting:'

greeter = gets.chomp
p "#{greeter}"