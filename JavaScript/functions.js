// Problem #1
// Write a function named marco that returns "polo".

// create function named marco
const marco = () => {
  // return "polo"
  return 'polo'
}

// call function
console.log('Problem #1')
console.log(marco())

// ************************************************************************
// Problem #2
// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

// create function named greeting that takes a name as an argument
const greeting = name => {
  // return "Welcome, <person's name here>!"
  return `Welcome, ${name}!`
}

// call function
console.log('Problem #2')
console.log(greeting('Amanda'))

// ************************************************************************
// Problem #3
// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

// create function named oddOrEven that takes a number as an argument
const oddOrEven = num => {
  // create conditional that checks if argument is even
  if (num % 2 === 0) {
    // return "even"
    return 'even'
  } else {
    // if not even
    // return odd
    return 'odd'
  }
}

// call function
console.log('Problem #3')
console.log(oddOrEven(5))
console.log(oddOrEven(20))

// ************************************************************************
// Problem #4
// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

// create function named triple that takes a number argument
const triple = num => {
  // return number argument multiplied by 3
  return num * 3
}

// call function
console.log('Problem #4')
console.log(triple(5))
console.log(triple(100))
console.log(triple(45))

// ************************************************************************
// Problem #5
// Write a function named multiply that takes two numbers as arguments and returns the result of one of the numbers multiplied by the other.

// create function named multiply that takes two numbers as arguments
const multiply = (num1, num2) => {
  // return the result of the numbers being multiplied by the other
  return num1 * num2
}

// call function
console.log('Problem #5')
console.log(multiply(10, 20))
console.log(multiply(15, 2))

// ************************************************************************
// Problem #6
// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// create function named divisibleBy that takes two numbers as arguments
const divisibleBy = (num1, num2) => {
  // create conditional to see if num1 is evenly divisible by num2
  if (num1 % num2 === 0) {
    // return whether the first number is evenly divisible by the second
    // logs "<num1> is evenly divisible by <num2>"
    return `${num1} is evenly divisible by ${num2}`
  }
}

// call function
console.log('Problem #6')
console.log(divisibleBy(10, 5))

// ************************************************************************
// Problem #7
// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// create function named assignGrade that takes a number score as argument
const assignGrade = score => {
  // create conditional to check what letter grade should be returned
  // return the letter grade for the score argument given
  if (score >= 90) {
    return 'A'
  } else if (score >= 80) {
    return 'B'
  } else if (score >= 70) {
    return 'C'
  } else if (score >= 60) {
    return 'D'
  } else if (score >= 50) {
    return 'F'
  } else {
    return 'You REALLY need to study!'
  }
}

// call function
console.log('Problem #7')
console.log(assignGrade(100))
console.log(assignGrade(85))
console.log(assignGrade(71))
console.log(assignGrade(63))
console.log(assignGrade(52))
console.log(assignGrade(10))

// ************************************************************************
// STRETCH Challenges
// Test your functions with multiple calls

// ************************************************************************
// Problem #8
// What number's bigger: Write a function named greaterNum that takes 2 arguments, both numbers and returns whichever number is the greater (higher) number

// create function called greaterNum that takes in 2 numbers as arguments
const greaterNum = (num1, num2) => {
  // create conditional to determine greater number
  // return whichever number argument is greater
  if (num1 > num2) {
    return `${num1} is greater than ${num2}`
  } else {
    return `${num2} is greater than ${num1}`
  }
}

// call function
console.log('Problem #8')
console.log(greaterNum(50, 100))
console.log(greaterNum(150, 2))
console.log(greaterNum(1, 9))
console.log(greaterNum(438, 536))

// ************************************************************************
// Problem #9
// The World Translator: Write a function named helloWorld that takes 1 argument, a language code (e.g. "es", "de", "en") and returns "Hello, World" for the given language, for at least 3 languages (it should default to returning English)

// create function called helloWorld that takes in 1 argument - a language code ("es", "de", "en") default (code = en)
const helloWorld = (code = 'en') => {
  // create conditional to check language
  if (code === 'en') {
    // if code is "en" return "Hello, World!" also default
    return 'Hello, World!'
  } else if (code === 'fr') {
    // if code is "fr" return "Bonjour le monde!"
    return 'Bonjour le monde!'
  } else if (code === 'es') {
    // if code is "es" return "Hola, Mundo!"
    return 'Hola, Mundo!'
  } else if (code === 'de') {
    // if code is "de" return "Hallo, Welt!"
    return 'Hallo, Welt!'
  } else {
    return 'Please enter one of these language codes: en, fr, es, de'
  }
}

// call the function
console.log('Problem #9')
console.log(helloWorld())
console.log(helloWorld('en'))
console.log(helloWorld('fr'))
console.log(helloWorld('es'))
console.log(helloWorld('de'))

// ************************************************************************
// Problem #10
// The Pluralizer: Write a function named pluralizer that takes 2 arguments, a number and a singular noun and returns the number and pluralized form of the noun, if necessary

// const pluralizer = (5, cat)
// Expected outcome --> "5 cats"
// const pluralizer = (1, dog)
// Expected outcome --> "1 dog"
// Bonus: Make it handle a few collective nouns like "sheep", "goose", "child", "person" and "species"

// IDEA create a collectiveNouns array
// IDEA create a collectiveNounSingular array

// create function named pluralizer that takes 2 arguments - a number (value) and a singular noun
const pluralizer = (value, noun) => {
  // create conditional to determine if the value is 1 or less
  if (value <= 1) {
    // if it is return the number and singular form of the noun
    return `${value} ${noun}`
  } else {
    // if the number is greater than 1 return the number and pluralized form of the noun if necessary
    if (noun === 'goose') {
      // if the noun is goose return number and geese
      return `${value} geese`
    } else if (noun === 'child') {
      // if the noun is child return number and children
      return `${value} children`
    } else if (noun === 'person') {
      // if the noun is person return number and people
      return `${value} people`
    } else {
      // else return value and noun with an s
      return `${value} ${noun}s`
    }
  }
}

// call the function
console.log('Problem #10')
console.log(pluralizer(3, 'person'))
console.log(pluralizer(1, 'cat'))
console.log(pluralizer(5, 'dog'))
console.log(pluralizer(10, 'goose'))
console.log(pluralizer(4, 'child'))
console.log(pluralizer(6, 'bird'))

// ************************************************************************
// Problem #11
// Write a function that takes in an array and returns a new array with all numbers multiplied by 3.
// Expected output --> [9, 27, 45, 12, 30]

let testArr1 = [3, 9, 15, 4, 10]
let testArr2 = [4, 25, 67, 26, 93, 1234]

// create function that takes an array of numbers as an argument
const tripled = arr => {
  // create variable to hold mapped array
  let tripledArray = arr.map(num => {
    // return each number multiplied by 3
    return num * 3
  })
  return tripledArray
}

// call the function
console.log('Problem #11')
console.log(tripled(testArr1))
console.log(tripled(testArr2))

// ************************************************************************
// Problem #12
// Write a function that takes in an array and returns a new array with only odd numbers.
// Expected output --> [-7, 3, 5, 13]

let testArr3 = [0, 2, -7, 3, 5, 8, 10, 13]

// create function that takes an array of numbers as an argument
const removeOddNumbers = arr => {
  // create variable to hold filtered array of odd numbers
  let oddNumbers = arr.filter(num => {
    if (num % 2 !== 0) {
      return num
    }
  })

  // return the new array of odd numbers
  return oddNumbers
}

// call the function
console.log('Problem #12')
console.log(removeOddNumbers(testArr3))
console.log(removeOddNumbers(testArr1))
console.log(removeOddNumbers(testArr2))

// ************************************************************************
// Problem #13
// Write a function that takes in a string and returns a new string with every letter capitalized. HINT: you do not need arrays or loops.
// Expected output --> "HELLO THERE"

let myMessage = 'Hello There'
let myMessage2 = 'Rockin it'

// declare a function that takes a string
const makeAllCaps = str => {
  // return string in all caps
  return str.toUpperCase()
}

// call the function
console.log('Problem #13')
console.log(makeAllCaps(myMessage))
console.log(makeAllCaps(myMessage2))

// ************************************************************************
// Problem #14
// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method
// Expected output --> "nicework"

let comboArr = [
  7,
  'n',
  true,
  'i',
  'c',
  10,
  'e',
  -388,
  'w',
  3,
  'o',
  0,
  'r',
  false,
  'k',
]

// create a function that takes an array
const keepStringsOnly = arr => {
  // loop through array to filter out the strings
  // create condition to check type is string
  let stringOnlyArray = arr.filter(item => {
    return typeof item === 'string'
  })
  // return new array converted to a string
  return stringOnlyArray.join('')
}

// call the function
console.log('Problem #14')
console.log(keepStringsOnly(comboArr))

// ************************************************************************
// Problem #15
// Create a function that returns the highest number
// Expected output --> 67

let numberArray1 = [1, 45, 4, 2, 7, 67, -96, 0, 6]

// create a function that takes in an array of numbers
const highestNumber = arr => {
  // return highest number
  return Math.max.apply(null, arr)
}

// call the function
console.log('Problem #15')
console.log(highestNumber(numberArray1))

// ************************************************************************
// Problem #16
// Create a function that returns the lowest number
// Expected output --> -9

let numberArray2 = [1, 45, 4, 2, 7, 67, -9, 0, 6]

// create a function that takes in an array of numbers
const lowestNumber = arr => {
  // return highest number
  return Math.min.apply(null, arr)
}
// call the function
console.log('Problem #16')
console.log(lowestNumber(numberArray2))
console.log(lowestNumber(numberArray1))

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
