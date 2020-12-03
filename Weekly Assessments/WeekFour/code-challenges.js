// ASSESSMENT 4: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in an array. Each time the function is run, remove the first item from the array and shuffle the remaining content. If the array is empty, return "The array is empty."

var collections = ['purple', 'blue', 'green', 'yellow', 'pink']
// Expected output example1 (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example2 (can be a different order): ["blue", "green", "pink"]
// Expected output example3 (can be a different order): ["pink", "green"]

// Create a function that takes an array as an argument
const arrayShuffler = (arr) => {
	// let randomNum = Math.floor(Math.random() * arr.length)
	// console.log('random number', randomNum)
	// check if the array is empty or not
	// if not empty remove first item from array
	if (arr.length > 1) {
		arr.shift()
		// return random item from array
		// ****** NOTE: I FOUND THIS NEXT LINE ON FREECODECAMP BUT I DON'T THINK IT'S WORKING QUITE RIGHT ******
		return arr.sort((a, b) => 0.5 - Math.random())
	} else {
		return 'The array is empty.'
	}
}

// call the function
console.log('Problem #1')
console.log(arrayShuffler(collections))
console.log(arrayShuffler(collections))
console.log(arrayShuffler(collections))
console.log(arrayShuffler(collections))
console.log(arrayShuffler(collections))
console.log(arrayShuffler(collections))

// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

var cubeAndSum1 = [2, 3, 4] // Expected output: 99
var cubeAndSum2 = [0, 5, 10] // Expected output: 1125

// Create a function that takes an array of numbers as a argument
const cubeAndSum = (arr) => {
	// create a variable to hold the accumulated value
	let result = 0
	// loop through array and cube each number and add to accumulating result value
	arr.map((value) => {
		return (result = value * value * value + result)
	})
	// return the sum of all the numbers cubed
	return result
}

// Call the function
console.log('Problem #2')
console.log(cubeAndSum(cubeAndSum1))
console.log(cubeAndSum(cubeAndSum2))

// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

var nums1 = [3, 56, 90, -8, 0, 23, 6] // Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24] // Expected output: [-59, 109]

// Create a function that takes an array of numbers as a argument
const minMax = (arr) => {
	let resultArray = []
	// create variable to hold min value
	let min = arr.reduce((a, b) => {
		return Math.min(a, b)
	})
	// create variable to hold max value
	let max = arr.reduce((a, b) => {
		return Math.max(a, b)
	})
	// push min and max value to the result array
	resultArray.push(min, max)
	// return an array with the minimum and the maximum numbers in that order
	return resultArray
}

console.log('Problem #3')
console.log(minMax(nums1))
console.log(minMax(nums2))

// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.

var testString1 = 'albatross' // Expected output: "aLbAtRoSs"
var testString2 = 'jabberwocky' // Expected output: "jAbBeRwOcKy"

// Create a function that takes a string as an argument
const wonkyLetterMaker = (str) => {
	return (
		str
			// split the string into an array
			.split('')
			// loop over the letters in the array and determine odd index and put to correct case
			.map((letter, index) =>
				index % 2 === 0 ? letter.toLowerCase() : letter.toUpperCase()
			)
			// return array of converted letters as a string with every other letter capitalized
			.join('')
	)
}

console.log('Problem #4')
console.log(wonkyLetterMaker(testString1))
console.log(wonkyLetterMaker(testString2))

// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

let array1 = [3, 7, 10, 5, 4, 3, 3]
let array2 = [7, 8, 2, 3, 1, 5, 4] // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

// Create a function that accepts two arrays of numbers as arguments
const combineArrayNoDuplicates = (arr1, arr2) => {
	// combine array arguments into a set - this removes all duplicate values
	const set = new Set([...arr1, ...arr2])
	// return one combined array with no duplicate values
	// (convert the set to an array)
	return Array.from(set)
}

console.log('Problem #5')
console.log(combineArrayNoDuplicates(array1, array2))

// Stretch Goal using spread in argument declaration:
// const combineArrayNoDuplicates2 = (...array) => {
// 	let comboArray = array.reduce((acc, currentValue) => {
// 		return acc.concat(currentValue)
// 	})
// 	const set = new Set([comboArray])
// 	// return one combined array with no duplicate values
// 	// (convert the set to an array)
// 	return Array.from(set)
// }

// console.log(combineArrayNoDuplicates2(array1, array2, [10, 11, 12]))
