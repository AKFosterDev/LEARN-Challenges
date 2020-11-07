// Write the code that will add "soda" to the end of the original array.

// Write the code that will add "granola" to the end of array without altering the original array.

// Consider this variable:
let groceryList = ['chips', 'dip', 'cookies']
let newItems = ['granola']

groceryList.push('soda')
console.log(groceryList)

console.log(groceryList.concat(newItems))

// ************************************************************************

// Write the code that will add the number 0 to the beginning of the array.

// Write the code that will add the number 12 to the end of the array.

// Write the code that will remove the first number from the array.

// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
// Consider this variable:
let numbers = [2, 4, 6, 8, 10]

numbers.unshift(0)
console.log(numbers)

numbers.push(12)
console.log(numbers)

numbers.shift()
console.log(numbers)

let newNumbers = [0]

console.log(newNumbers.concat(numbers))
console.log(numbers)

// ************************************************************************

// Write the code that finds the index of the first appearance of the number 2.

// Write the code that finds the index of the last appearance of the number 2.
// Consider this variable:
let numSet = [2, 13, 6, 8, 4, 2]

console.log(numSet.indexOf(2))
console.log(numSet.lastIndexOf(2))

// ************************************************************************

// Write the code that brings all the letters in the chars array together into a string.

// Write the code that reverses the order of the letters in the chars array and saves it into a variable called charsReversed.

// Write the code that brings all the letters in the charsReversed array together into a string with a hyphen between each letter.

// Write the code that brings all the letters in the charsReversed Array together into a string without separators.

// Consider this variable:
let chars = ['y', 'a', 'r', 'r', 'a']

console.log(chars.toString())

let charsReversed = chars.reverse()
console.log(charsReversed)

console.log(charsReversed.join('-'))

console.log(charsReversed.join(''))
// ************************************************************************

// Create two arrays consisting of three first names of your cohort members in each.
// Sort the names in alphabetical order.

// Sort the names in reverse alphabetical order.

// Sort all the names in alphabetical order. Hint: Combine the arrays into a single array.

let names1 = ['Sami', 'Priscila', 'Summer']
let names2 = ['Alan', 'Filippo', 'Chris']

console.log(names1.sort())
console.log(names2.sort())
console.log(names1.concat(names2).sort())
