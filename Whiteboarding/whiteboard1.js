// mixed data type array
let mixedArray = [4, true, 'today', 56, 'hello world', false, 'hooray']

let filteredArray = []
// function takes the mixed array and a name of data type desired in a string
const filterArray = (arr, type) => {
	// filters the given array and returns data that matches the given data type argument
	// set variable for new filtered array
	// return new array with only a data that matches data type
	return arr.filter((item) => {
		return typeof item === type
	})
}

console.log(filterArray(mixedArray, 'string'))
