// array of strings
let strArray = ['one', 'two', 'three', 'four', 'five']
// function that takes an array of strings
const arrayToUppercase = (arr) => {
	// returns the array with the strings in all caps
	return arr.map((item) => {
		return item.toUpperCase()
	})
}

console.log(arrayToUppercase(strArray))
