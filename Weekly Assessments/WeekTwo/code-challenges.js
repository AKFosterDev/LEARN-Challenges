// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.

let num1 = 15 // Expected output: "15 is divisible by three"
let num2 = 0 // Expected output: "0 is divisible by three"
let num3 = -7 // Expected output: "-7 is not divisble by three"

// create a function that accepts a number as an argument
const divisibleByThree = num => {
	// deside if argument is equally divisible by 3
	if (num % 3 === 0) {
		// if argument is divisible by three return '(argument) is divisible by three'
		return `${num} is divisible by three`
	} else {
		// otherwise return '(argument) is not divisible by three'
		return `${num} is not divisible by three`
	}
}

// call the function
console.log('Problem #1')
console.log(divisibleByThree(num1))
console.log(divisibleByThree(num2))
console.log(divisibleByThree(num3))

// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

let randomNouns = [
	'streetlamp',
	'potato',
	'teeth',
	'conclusion',
	'nephew',
	'temperature',
	'database',
]

// create a function that takes an argument of an array of strings
const capitalizeArray = arr => {
	// iterate through array argument and capitalize each string
	// create new variable to hold the new array
	let newCapitalizedArray = arr.map(item => {
		// isolate first character in each word to capitalize then add the rest of the word back on
		return item.charAt(0).toUpperCase() + item.substr(1)
	})
	// return the new array with all words in the array argument capitalized
	return newCapitalizedArray
}

// call the function
console.log('Problem #2')
console.log(capitalizeArray(randomNouns))

// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.
// Expected output: [-8, 0, 8, 46, 59, 90, 107]

let mixedDataArray = [true, 8, 'hello', 90, -8, null, 0, 46, 59, 107, 'hey!']

// create a function that accepts an array of mixed data types
const numbersOnlyArray = arr => {
	// iterate through array argument separating out the number data types
	// create a variable to hold the new array containing only numbers
	let newNumbersArray = arr.filter(item => {
		return typeof item === 'number'
	})
	// sort new number array (compare numbers to make sure values compared not just first digit)
	// return a new array with only numbers sorted from least to greatest
	return newNumbersArray.sort((a, b) => a - b)
}

// call the function
console.log('Problem #3')
console.log(numbersOnlyArray(mixedDataArray))

// --------------------4) Create a function that takes in a string and logs the index of the first vowel.

let vowelTester1 = 'learn' // Expected output: 1
let vowelTester2 = 'throw' // Expected output: 3

// create a varible that contains an array of vowels to compare against

// create a function that takes a string as an argument
const returnFirstVowel = str => {
	// create a variable to hold the resulting search
	let firstVowelResult = str.search(/[a, e, i, o, u, A, E, I, O, U]/g)
	// return the index of the first vowel
	return firstVowelResult
}

// call the function
console.log('Problem #4')
console.log(returnFirstVowel(vowelTester1))
console.log(returnFirstVowel(vowelTester2))

// --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"
// Uncomment and use the following console logs to test your function

// create a function that takes three arguments two numbers and a mathematical operation (+, -, *, /)
const calculator = (num1, sym, num2) => {
	// create conditional that takes the two numbers and performs the given calculation based on passed arguments

	if (num2 === 0 && sym === '/') {
		// if input arguments try to divide by 0 return 'Can't divide by 0!'
		return "Can't divide by 0!"
	}
	// otherwise perform calculation and return the result
	else if (sym === '+') {
		return num1 + num2
	} else if (sym === '-') {
		return num1 - num2
	} else if (sym === '*') {
		return num1 * num2
	} else if (sym === '/') {
		return num1 / num2
	} else {
		return 'Something went wrong'
	}
}

// NOTE: I know this can be done in a cleaner way.

// call the function
console.log('Problem #5')
console.log(calculator(3, '*', 9)) // Expected output: 27
console.log(calculator(16, '+', 3)) // Expected output: 19
console.log(calculator(89, '/', 0)) // Expected output: "Can't divide by 0!"
