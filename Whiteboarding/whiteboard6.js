// your preference of language...
// array of numbers write function return the array with all duplicates removed and sorted least to greatest

const nums1 = [1, 2, 2, 3, 4, 5, 7, 7, 8, 10, 12, 7, 11, 9]

// create a function that takes an array of numbers as an argument
const removeDuplicates = (arr) => {
	// create a variable to hold that holds a Set that removes duplicates
	let set = new Set(arr)
	// create a variable to hold the new array with no duplicates
	let noDuplicatesArray = Array.from(set)
	// return the array with duplicates removed and sorted least to greatest
	return noDuplicatesArray.sort((a, b) => a - b)
}

// call the function
console.log(removeDuplicates(nums1))
