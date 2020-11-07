// Consider this variable:
var person = {
  firstName: 'Arthur',
  lastName: 'Dent',
  homePlanet: 'Earth',
  logPlanet: function () {
    return `${this.firstName} ${this.lastName} is from planet ${this.homePlanet}`
  },
}
// Write the code that accesses the first name of the person object.
console.log(person.firstName)
// Write the code that accesses the last name of the person object.
console.log(person.lastName)
// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
// Update the person object with a method that logs "Arthur Dent is from planet Earth".
console.log(person.logPlanet())

// ************************************************************************
// Write a function called describeProduct takes product as an argument and logs "The product is a chair. It costs $14.99".
// Consider this variable:
var product = {
  name: 'chair',
  price: 14.99,
}

// create function that takes obj as an argument
const describeProduct = obj => {
  // return console.log "The product is a chair. It costs $14.99"
  return console.log(`The product is a ${obj.name}. It costs $${obj.price}`)
}
// call the function
console.log(describeProduct(product))

// ************************************************************************

// Write the code that accesses the ingredients property.
// Write the code that access the 3rd ingredient of the lunch object.
// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
// Consider this variable:
var lunch = {
  name: 'PB and Banana',
  type: 'sandwich',
  ingredients: ['bread', 'peanut butter', 'banana'],
  ingredientsStatement: function () {
    return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients[0]}, ${this.ingredients[1]}, and ${this.ingredients[2]}.`
  },
}

console.log(lunch.ingredients)
console.log(lunch.ingredients[2])

// create function that accepts an object
const lunchIngredients = obj => {
  // return "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
  return console.log(
    `The ingredients for a ${obj.name} ${obj.type} are ${obj.ingredients[0]}, ${obj.ingredients[1]}, and ${obj.ingredients[2]}.`
  )
}
// call the function
console.log(lunchIngredients(lunch))

// call the object method
console.log(lunch.ingredientsStatement())

// ************************************************************************

// Consider this variable:
// var animals = [
//   { name: "Waffles", type: "dog", age: 12 },
//   { name: "Fluffy", type: "cat", age: 14 },
//   { name: "Spelunky", type: "dog", age: 4 },
//   { name: "Hank", type: "cat", age: 11 },
// ]
// Create a function that takes in any array of objects and returns a new array with only those of type cat.
// Using the same array of objects above. Create a function that returns a new array with only the names of the animals.

// ************************************************************************

// Write the code that destructures the author object and makes the following work:
// console.log(`${name} is a ${genre} author`)
// --> "H. G. Wells is a science fiction author"
// Consider this variable:
let author = {
  name: 'H. G. Wells',
  genre: 'science fiction',
}

let { name, genre } = author

console.log(`${name} is a ${genre} author`)

// ************************************************************************

// Write a function called describePokemon() that take an object like the ones above and uses destructuring to return a description of the Pokemon such that:
// console.log(describePokemon(pokeOne))
// --> "Charmandar is a Fire pokemon"
// console.log(describePokemon(pokeTwo))
// --> "Magikarp is a Water pokemon"
// Consider this variable:
let pokeOne = {
  species: 'Charmandar',
  pokemon_type: 'Fire',
}

let pokeTwo = {
  species: 'Magikarp',
  pokemon_type: 'Water',
}

// create function that accepts an object
const describePokemon = obj => {
  // destructure obj received
  let { species, pokemon_type } = obj
  // return "(species) is a (pokemon_type) pokemon"
  return `${species} is a ${pokemon_type} pokemon`
}

// call the function
console.log(describePokemon(pokeOne))
console.log(describePokemon(pokeTwo))
