// group friends secret society 1st letter each name sorted alpha create ss name
let names = ['Sarah', 'Matt', 'Vivean', 'Amanda']
// function that accepts an array of names as the argument
const ssName = (arr) => {
	// ss name is determined by the first letter of each name in the array sorted in alpha order
	let initalsArray = arr.map((item) => {
		return item.charAt(0).toUpperCase()
	})
	// returns secret society name as an uppercased string
	return initalsArray.sort().join('')
}

// call the function
console.log(ssName(names))

// AMSV
