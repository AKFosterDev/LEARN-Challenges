// ASSESSMENT 3: Coding Practical Questions

// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// create a function
const fibonacci = () => {
	// create a variable to hold returned values
	let result = [0, 1]
	// create loop to create fibonacci sequence and add to new array
	for (let i = 2; i <= 10; i++) {
		result.push(result[i - 2] + result[i - 1])
	}
	// return first 10 numbers in the fibonacci sequence
	return result.slice(1)
}

// call the function
console.log('Problem #1')
console.log(fibonacci())

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

let fullArr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola'] // Expected output: [-9, 7, 9, 199]
let fullArr2 = ['hello', 7, 23, -823, false, 78, null, '67', 6, 'number'] // Expected output: [-823, 7, 23]

// create a function that accepts a mixed data array
const oddNums = (arr) => {
	// filter out number values
	// create variable for new array
	let filteredArray = arr.filter((item) => {
		// check if a number and if odd and return
		return typeof item === 'number' && item % 2 !== 0
	})
	// return only odd numbers sorted least to greatest
	return filteredArray.sort((a, b) => a - b)
}

// call the function
console.log('Problem #2')
console.log(oddNums(fullArr1))
console.log(oddNums(fullArr2))

// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

let middleLetters1 = 'hello' // Expected output: “l”
let middleLetters2 = 'rhinoceros' // Expected output: “oc”

// create a function that accepts a string as an argument
const middleCharFinder = (str) => {
	// create variable that holds the string argument converted to an array
	let strArray = str.split('')

	// create variable that holds the middle
	let middle = strArray[Math.floor(strArray.length / 2)]

	// if string has an even number of characters
	if (strArray.length % 2 === 0) {
		// create variable to hold the index of the first of the middle two numbers
		let firstOfMiddleIndex = strArray.length / 2 - 1
		// return two middle letters
		return strArray[firstOfMiddleIndex] + middle
	} else {
		// if string has an odd number of characters return middle letter only
		return middle
	}
}

// call the function
console.log('Problem #3')
console.log(middleCharFinder(middleLetters1))
console.log(middleCharFinder(middleLetters2))

// --------------------4) READ CAREFULLY: Create a CLASS to get the area of a sphere. Create THREE spheres with different radi as test cases. Area of a sphere =  4πr^2 (four * pi * radi squared)

//create a class
class SphereArea {
	constructor(radius) {
		this.radiusSquared = radius * radius
	}

	// create a method that calculates the area of a sphere
	calculateArea() {
		return 4 * Math.PI * this.radiusSquared
	}
}

// create three spheres from new class
const sphere1 = new SphereArea(2) // 50.27
const sphere2 = new SphereArea(7) // 615.75
const sphere3 = new SphereArea(10) // 1256.64

console.log('Problem #4')
console.log(sphere1.calculateArea())
console.log(sphere2.calculateArea())
console.log(sphere3.calculateArea())

// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

let numbersToAdd1 = [2, 4, 45, 9] // Excpected output: [2, 6, 51, 60]
let numbersToAdd2 = [0, 7, -8, 12] // Expected output: [0, 7, -1, 11]
let numbersToAdd3 = [] // Expected output: []

// Create a function that takes an array of numbers as an argument
const accumulatingArray = (arr) => {
	// create a variable to hold the resulting addition
	let result = 0
	let resultsArray = arr.map((value) => {
		return (result = result + value)
	})
	// return an array of the accumulating sum
	return resultsArray
}

// call the function
console.log('Problem #5')
console.log(accumulatingArray(numbersToAdd1))
console.log(accumulatingArray(numbersToAdd2))
console.log(accumulatingArray(numbersToAdd3))
