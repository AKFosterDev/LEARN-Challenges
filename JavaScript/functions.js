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
const greeting = (name) => {
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
const oddOrEven = (num) => {
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
const triple = (num) => {
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
const assignGrade = (score) => {
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
const tripled = (arr) => {
	// create variable to hold mapped array
	let tripledArray = arr.map((num) => {
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
const removeOddNumbers = (arr) => {
	// create variable to hold filtered array of odd numbers
	let oddNumbers = arr.filter((num) => {
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
const makeAllCaps = (str) => {
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
const keepStringsOnly = (arr) => {
	// loop through array to filter out the strings
	// create condition to check type is string
	let stringOnlyArray = arr.filter((item) => {
		return typeof item === 'string'
	})
	// return new array converted to a string
	return stringOnlyArray.join('')
}

// refactor:

// call the function
console.log('Problem #14')
console.log(keepStringsOnly(comboArr))

// ************************************************************************
// Problem #15
// Create a function that returns the highest number
// Expected output --> 67

let numberArray1 = [1, 45, 4, 2, 7, 67, -96, 0, 6]

// create a function that takes in an array of numbers
const highestNumber = (arr) => {
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
const lowestNumber = (arr) => {
	// return highest number
	return Math.min.apply(null, arr)
}
// call the function
console.log('Problem #16')
console.log(lowestNumber(numberArray2))
console.log(lowestNumber(numberArray1))

// ************************************************************************
// Problem #17
// Create a function that calculates the sum

var addThese1 = [1, 2, 3, 4] // Expected output --> 10
var addThese2 = [] // Expected output --> 0

// create function that takes in an array of numbers
const addThemUp = (arr) => {
	// add each number in the array together
	// what is happening here...using addThese1 array
	// acc = 0, cur = 1 => acc = 1
	// acc = 1, cur = 2 => acc = 3
	// acc = 3, cur = 3 => acc = 6
	// acc = 6, cur = 4 => acc = 10
	const sum = arr.reduce((acc, cur) => {
		return acc + cur
	}, 0) // this 0 sets the acc value
	// return sum of all nums in array
	return sum
}

// call the function
console.log('Problem #17')
console.log(addThemUp(addThese1))
console.log(addThemUp(addThese2))

// ************************************************************************
// Problem #18
// Create a function that calculates the mean value (sum / count)

let meanArray1 = [1, 2, 3] // Expected output --> 2
let meanArray2 = [5, 9, 7, 8] // Expected output --> 7.25

// create a function that takes in an array of numbers
const meanChecker = (arr) => {
	// create loop to add all numbers together
	const sum = arr.reduce((acc, cur) => {
		return acc + cur
	}, 0)
	// return that sum divided by the length of the array
	return sum / arr.length
}

// call the function
console.log('Problem #18')
console.log(meanChecker(meanArray1))
console.log(meanChecker(meanArray2))

// ************************************************************************
// Problem #19
// Create a function that finds the index of the highest number
let highIndexArr1 = [1, 4, 2] // Expected output --> 1
let highIndexArr2 = [99, 42, 53, 74] // Expected output --> 1
let highIndexArr3 = [11, 38, 79] // Expected output --> 1

// create a function that takes in an array of numbers
const indexHighestNumber = (array) => {
	// create loop to compare index of values
	// what is happening here?
	// iMax => index of max element so far
	// cur => currently tested element in array (value)
	// i => currently tested index
	// arr => the array being passed
	// turnary => if current element (val) greater than the value of arr[iMax] then i is now iMax otherwidse iMax is still the highest
	let indexOfMaxVal = array.reduce((iMax, cur, i, arr) => {
		return cur > arr[iMax] ? i : iMax
	}, 0)
	return indexOfMaxVal
}
// return the index of the highest number
// call the function

console.log('Problem #19')
console.log(indexHighestNumber(highIndexArr1))
console.log(indexHighestNumber(highIndexArr2))
console.log(indexHighestNumber(highIndexArr3))
// ************************************************************************
// Problem #20
// Create a function that takes in a string and returns only the middle value
let testString1 = 'hello' // Expected output --> "l"
let testString2 = 'boogeyman' // Expected output --> "e"

// create a function that takes in a string
const middleLetter = (str) => {
	// convert string to array
	let stringToArray = str.split('')
	// determine length of array divided by 2 - 1 to get index
	let middleIndex = Math.ceil(stringToArray.length / 2 - 1)
	// return the letter at the middle index
	return stringToArray[middleIndex]
}

// call the function

console.log('Problem #20')
console.log(middleLetter(testString1))
console.log(middleLetter(testString2))

// ************************************************************************
// STRETCH Challenges

// Problem #21
// Palindrome: Create a function that takes in a string and determines whether the string is a palindrome (the same word forward and backwards)
let word1 = 'racecar' // Expected output --> "Yes racecar is a palindrome"

let word2 = 'albatross' // Expected output --> "No albatross is not a palindrome"

// create function that takes in a string
const isPalindrome = (str) => {
	// create variable to hold reversed string
	const revString = str.split('').reverse().join('')
	// create conditional
	// if string supplied is palidrome
	if (str === revString) {
		// return "Yes <string> is a palindrome"
		return `Yes ${str} is a palindrome`
	} else {
		// if string supplied is not palidrome
		// return "No <string> is not a palindrome"
		return `No ${str} is not a palindrome`
	}
}

// call the function
console.log('Problem #21')
console.log(isPalindrome(word1))
console.log(isPalindrome(word2))

// ************************************************************************
// Problem #22
// Vowels Removed: Create a function that takes in a string and returns a new string with all the vowels removed
let fullString1 = 'javascript is awesome' // Expected output --> "jvscrpt s wsm"

let fullString2 = 'I am a LEARN student' // Expected output --> "m LRN stdnt"

// create function that takes a string as an argument
const vowelRemover = (str) => {
	// create variable that contains an array of vowels
	const vowels = ['a', 'e', 'i', 'o', 'u']
	// create a variable that converts given string argument to lowercase then to an array
	let strToArray = str.toLowerCase().split('')
	// create variable to hold newly created array of letters with vowels removed
	let result = strToArray.filter((letter) => {
		return !vowels.includes(letter)
	})
	// return result array and join() to create new string
	return result.join('')
}

// call the function
console.log('Problem #22')
console.log(vowelRemover(fullString1))
console.log(vowelRemover(fullString2))

// ************************************************************************
// Problem #23
// Merge Arrays: Create a function that takes in two arrays as arguments and returns one array with no duplicate values.
// Expected output --> [3, 7, 10, 5, 4, 8, 2, 1]

let arr1 = [3, 7, 10, 5, 4, 3, 3]
let arr2 = [7, 8, 2, 3, 1, 5, 4]

// create function that takes in two arrays of numbers
const mergeArrays = (arr1, arr2) => {
	// combine arrays to one array
	// create set to remove any duplicates
	const set = new Set([...arr1, ...arr2])
	const mergedArray = [...set]
	// return new merged duplicate free array
	return mergedArray
}

// call the function
console.log('Problem #23')
console.log(mergeArrays(arr1, arr2))

// ************************************************************************
// Problem #24
// Clean Function: Create a function that filters false, null, 0 and blank values from an array.
let filterArray1 = [58, '', 'abcd', true, null, false, 0] // Expected output --> [58, "abcd", true]

// create a function that removes any items not to be included in filtered array
const isWantedValue = (value) => {
	// create a conditional that returns only wanted values
	if (value !== false || value !== null || value !== 0 || value !== '') {
		// return wanted values
		return value
	}
}

// create function that takes in an array
const filterArrayValues = (arr) => {
	// iterate through given array to filter out values wanted
	const cleanedArray = arr.filter(isWantedValue)
	// return the cleaned array
	return cleanedArray
}

// call the function

console.log('Problem #24')
console.log(filterArrayValues(filterArray1))

// ************************************************************************
// Problem #25
// Pre-fill: Write a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
// fillArray = (6, 0) expected output --> [0, 0, 0, 0, 0, 0]
// fillArray = (4, 11) expected output --> [11, 11, 11, 11]

// create a function that takes two numbers as arguments
const fillArray = (num1, num2) => {
	// create a variable to hold created array
	const filledArray = new Array(num1).fill(num2)
	// return an array the length of the first number filled with the second number
	return filledArray
}

// call the function
console.log('Problem #25')
console.log(fillArray(6, 0))
console.log(fillArray(4, 11))

// ************************************************************************
// Problem #26
// Create a function named addUp that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
// addUp = (4) Expected output --> 10
// addUp = (13) Expected output --> 91
// addUp = (600) Expected output --> 180300

// create a function named addUp that takes a number as an argument.
const addUp = (num) => {
	let sum = 0
	for (let i = 0; i <= num; i++) {
		sum += i
	}
	return sum
}
// create a loop that lasts number value
// return added up numbers

console.log('Problem #26')
console.log(addUp(4))
console.log(addUp(13))
console.log(addUp(600))

// ************************************************************************

// EPIC Challenge
// High/Low Game
// Create an HTML page and link your JavaScript file
// More information about linking HTML to JavaScript here
// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive)
// As a user, when I see if my guess is too high or too low
// As a user, if I guess the number correctly I am notified that I won
// STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message

// SEE HighLowGame folder for solution
