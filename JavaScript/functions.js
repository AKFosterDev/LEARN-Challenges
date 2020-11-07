// Write a function named marco that returns "polo".

// ************************************************************************

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

// Write a function named multiply that takes two numbers as arguments and returns the result of one of the numbers multiplied by the other.

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
// STRETCH Challenges
// Test your functions with multiple calls

// ************************************************************************

// What number's bigger: Write a function named greaterNum that takes 2 arguments, both numbers and returns whichever number is the greater (higher) number

// declare a function called greaterNum that takes in 2 numbers as arguments
// use a conditional
// if num1 greater return num1
// if else return num2
// call function

// ************************************************************************

// The World Translator: Write a function named helloWorld that takes 1 argument, a language code (e.g. "es", "de", "en") and returns "Hello, World" for the given language, for at least 3 languages (it should default to returning English)

// declare a function called helloWorld that takes in 1 argument - a language code ("es", "de", "en") default (code = en)?
// use a conditional to check language
// if code is "en" return "Hello, World!"
// if code is "fr" return "Bonjour le monde!"
// if code is "es" return "Hola, Mundo!"
// if code is "de" return "Hallo, Welt!"
// returns "Hello, World" for the given language for at least 3 languages w/default of english
// call the function

// ************************************************************************

// The Pluralizer: Write a function named pluralizer that takes 2 arguments, a number and a singular noun and returns the number and pluralized form of the noun, if necessary

// const pluralizer = (5, cat)

// Expected outcome --> "5 cats"

// const pluralizer = (1, dog)

// Expected outcome --> "1 dog"

// Bonus: Make it handle a few collective nouns like "sheep", "goose", "child", "person" and "species"

// IDEA create a collectiveNouns array
// IDEA create a collectiveNounSingular array

// declare a function that takes 2 arguments - a number (value) and a singular noun
// use a conditional to determine if the number is 1 or less
// if it is return the number and singular form of the noun
// if the number is greater than 1 return the number and pluralized form of the noun if necessary
// if the noun is sheep return number and sheep
// if the noun is species return number and species
// if the noun is goose return number and geese
// if the noun is child return number and children
// if the noun is person return number and people
// else return 'something went wrong'
// call the function

// ************************************************************************

// DON'T FORGET TO PSEUDO CODE

// Write a function that takes in an array and returns a new array with all numbers multiplied by 3.
// var testArr1 = [3, 9, 15, 4, 10]

// Expected output --> [9, 27, 45, 12, 30]

// declare a function that takes an array of numbers as an argument
// create a new empty array to store the multiplied numbers
// create a loop that goes through any array that is passed to the function
// multiply each number by 3
// push result to the empty array
// return the new originally empty array with all numbers multiplied by 3
// call the function

// ************************************************************************

// Write a function that takes in an array and returns a new array with only odd numbers.
// var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]

// Expected output --> [-7, 3, 5, 13]

// declare a function that takes an array of numbers as an argument
// create an empty array to store the odd numbers
// create a loop that goes through the array passed to it
// if num[i] is odd push result to empty array
// return the new originally empty array with the odd numbers
// call the function

// ************************************************************************

// Write a function that takes in a string and returns a new string with every letter capitalized. HINT: you do not need arrays or loops.
// var myMessage = "Hello There"

// Expected output --> "HELLO THERE"

// declare a function that takes a string
// return string.toUpperCaseI()
// call the function

// ************************************************************************

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method
// var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]

// Expected output --> "nicework"

// create a function that takes an array of numbers and letters
// create an empty array to store the string types
// create loop checking
// create a conditional if .typeOf() = string push it to new array
// return the new originally empty array .join("")
// call the function

// ************************************************************************

// Create a function that returns the highest number
// var highestNumber = [1, 45, 4, 2, 7, 67, -9, 0, 6]

// Expected output --> 67

// create a function that takes in an array of numbers
// create a variable to hold the highest number
// create a loop that goes through the array provided
// determine highest number
// create a conditional that compares current index to last saved highest number
// return highest number
// call the function

// ************************************************************************

// Create a function that returns the lowest number
// var lowestNumber = [1, 45, 4, 2, 7, 67, -9, 0, 6]

// Expected output --> -9

// create a function that takes in an array of numbers
// create a variable to hold the lowest number
// create a loop that goes through the array provided
// determine lowest number
// create a conditional that compares current index to last saved lowest number
// return lowest number
// call the function

// ************************************************************************

// Create a function that calculates the sum
// var addThese1 = [1, 2, 3, 4]

// Expected output --> 10

// var addThese2 = []

// Expected output --> 0

// ************************************************************************

// Create a function that calculates the mean value
// var meanChecker = [1, 2, 3] Expected output --> 2

// ************************************************************************

// Create a function that finds the index of the highest number
// var indexHighestNumber = [1, 4, 2]

// Expected output --> 1

// ************************************************************************

// Create a function that takes in a string and returns only the middle value
// var testString1 = "hello" Expected output --> "l" var testString2 = "boogeyman" Expected output --> "e"

// ************************************************************************

// STRETCH Challenges
// Palindrome: Create a function that takes in a string and determines whether the string is a palindrome (the same word forward and backwards)
// var isPalindrome1 = "racecar"

// Expected output --> "Yes racecar is a palindrome"

// var isPalindrome2 = "albatross"

// Expected output --> "No albatross is not a palindrome"

// ************************************************************************

// Vowels Removed: Create a function that takes in a string and returns a new string with all the vowels removed
// var fullString1 = "javascript is awesome"

// Expected output --> "jvscrpt s wsm"

// var fullString2 = "I am a LEARN student"

// Expected output --> "m LRN stdnt"

// ************************************************************************

// Merge Arrays: Create a function that takes in two arrays as arguments and returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3, 3]

// var arr2 = [7, 8, 2, 3, 1, 5, 4]

// Expected output --> [3, 7, 10, 5, 4, 8, 2, 1]

// ************************************************************************

// Clean Function: Create a function that filters false, null, 0 and blank values from an array.
// var filterArrayValues = [58, " ", "abcd", true, null, false, 0]

// Expected output --> [58, "abcd", true]

// ************************************************************************

// Pre-fill: Write a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
// fillArray = (6, 0)

// expected output --> [0, 0, 0, 0, 0, 0]

// fillArray = (4, 11)

// expected output --> [11, 11, 11, 11]

// ************************************************************************

// Create a function named addUp that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
// addUp = (4)

// Expected output --> 10

// addUp = (13)

// Expected output --> 91

// addUp = (600)

// Expected output --> 180300

// ************************************************************************

// EPIC Challenge
// High/Low Game
// Create an HTML page and link your JavaScript file
// More information about linking HTML to JavaScript here
// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive)
// As a user, when I see if my guess is too high or too low
// As a user, if I guess the number correctly I am notified that I won
// STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message
