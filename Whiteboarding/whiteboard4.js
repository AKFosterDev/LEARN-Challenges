// calculating info for farmer
// create a varable for quantity of chickens, goats, horses
const chickens = 2 // 4
const goats = 5 // 20
const horses = 4 // 16

// create function that takes in number (of animals) as an argument
const numOfLegs = (animal1, animal2, animal3) => {
	// return total number of legs on this farm
	return animal1 * 2 + animal2 * 4 + animal3 * 4
}

// call the function
console.log(numOfLegs(chickens, goats, horses)) // 40
