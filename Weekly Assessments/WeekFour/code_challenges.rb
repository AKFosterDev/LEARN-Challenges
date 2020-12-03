# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest. Use the test variables provided.

full_arr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
# Expected output: [-9, 7, 9, 199]
full_arr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# Expected output: [-823, 7, 23]

# Create a method that takes an array
def filter_odd array
  # return an array of only odd numbers least to greatest
  array.select { |value| value.is_a? Numeric }.select { |value| value.odd?}.sort
end 

puts 'Problem #1'
p filter_odd full_arr1
p filter_odd full_arr2


# --------------------2) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_a = 'a'
# Expected output: ['tea', 'soda water'] 
# ******YOUR EXPECTED OUTPUT IS MISSING WATER******

# Create a method that takes an array of words
def letter_checker(array, letter_variable)
# loop over array and return only words that include a given letter variable
# Return filtered array 
  array.select { |word| word.include? letter_variable}
end

puts 'Problem #2'
p letter_checker(beverages_array, letter_o)
p letter_checker(beverages_array, letter_a)

# -------------------3) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul' # Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper' # Expected output: 'Sgt Pppr'
album3 = 'Abbey Road' # Expected output: 'bby Rd'

def vowel_remover string
  string.delete "aeiouAEIOU"
end

puts 'Problem #3'
p vowel_remover album1
p vowel_remover album2
p vowel_remover album3


# -------------------4) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27] # Expected output: 76
nums_array2 = [25, 17, 47, 11] # Expected output: 100

def add_numbers array
  # sum = 0
  # array.each { |num| sum += num } 
  # sum
  array.sum
end 

puts 'Problem #4'
p add_numbers nums_array1
p add_numbers nums_array2


# -------------------5) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forwards or backwards. Use the test variables provided.

is_palindrome1 = 'Racecar' # Expected output: 'Racecar is a palindrome'
is_palindrome2 = 'LEARN' # Expected output: 'LEARN is not a palindrome'
is_palindrome3 = 'Rotator' # Expected output: 'Rotator is a palindrome'

def palindrome_checker string
  # Create a variable to hold string argument reversed and lowercase
  string_reversed = string.downcase.reverse
  # Compare string argument lowercased to string reversed and lowercased variable
  if string.downcase == string_reversed
    "#{string} is a palindrome"
  else
    "#{string} is not a palindrome"  
  end
end

puts 'Problem #5'
p palindrome_checker is_palindrome1
p palindrome_checker is_palindrome2
p palindrome_checker is_palindrome3


# STRETCH
is_palindrome4 = 'Was it a cat I saw'  # Expected output: Was it a cat I saw is a palindrome'

def palindrome_checker2 string
  # remove white space from argument using gsub (what being replaced, replacing with what?)
  lowercase_stripped_string = string.downcase.gsub(" ", "")
  # Create a variable to hold stripped string argument reversed 
  lowercase_stripped_string_reversed = lowercase_stripped_string.reverse
  # Compare string argument lowercased to string reversed and lowercased variable
  if lowercase_stripped_string == lowercase_stripped_string_reversed
    "#{string} is a palindrome"
  else
    "#{string} is not a palindrome"  
  end
end

puts 'Problem #5 - STRETCH'
p palindrome_checker2 is_palindrome4
