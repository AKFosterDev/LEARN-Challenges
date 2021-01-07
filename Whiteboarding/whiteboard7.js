// app fun word games check if a word is a palindrome - takes a string of a single word
// returns '<Word> is a palindrome' or '<Word> is not a palindrome'

let string = 'Racecar'

// Create a function that takes a string as an argument
const palindrome = (str) => {
	let lowercase = str.toLowerCase()
	// variable to hold the word reversed
	let reversed = lowercase.split('').reversed().join('')
	// compare the string argument against the reversed string
	// conditional to check if they match
	if (lowercase === reversed) {
		;`${str} is a palindrome!`
	} else {
		;`${str} is not a palindrome!`
	}
	// return the appropriate statement
}

// call the function
console.log(palindrome(string))
