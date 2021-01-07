// function that takes a string of multiple words and return a string with the letters in each word reversed.

let testStr = 'I really enjoy driving a racecar'

// Create a function that takes a string as an argument
const reverseWordSentence = (str) => {
	// create a variable that holds the words in an array
	let toArray = str.split(' ')
	// map over each word and reverse it
	let outputArray = toArray.map((word) => {
		return word.split('').reverse().join('')
	})
	return outputArray.join(' ')
	// return rejoin the words array to a sentence
}

// call the function
console.log(reverseWordSentence(testStr))
