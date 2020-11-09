// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired. Write the function that will make the test pass.

describe('areYouTired', () => {
	test('takes in a yes or no string argument and returns either "drink coffee" or "keep working"', () => {
		expect(areYouTired('yes')).toEqual('drink coffee')
		expect(areYouTired('no')).toEqual('keep working')
	})
})

const areYouTired = (str) => {
	if (str === 'yes') {
		return 'drink coffee'
	} else if (str === 'no') {
		return 'keep working'
	} else {
		return 'something went wrong'
	}
}

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed. Write the function that will make the test pass.

describe('areYouStressed', () => {
	test('takes in a yes or no string argument and returns either "relax" or "keep going"', () => {
		expect(areYouStressed('yes')).toEqual('relax')
		expect(areYouStressed('no')).toEqual('keep going')
	})
})

const areYouStressed = (str) => {
	if (str === 'yes') {
		return 'relax'
	} else if (str === 'no') {
		return 'keep going'
	} else {
		return 'something went wrong'
	}
}

// Write the test for a function that returns "in budget" if a price is lower than $300. Write the function that will make the test pass.

describe('budgetChecker', () => {
	test('takes in a number argument representing a budget limit of $300 and returns "in budget" if argument less than $300 and "over budget" if over', () => {
		expect(budgetChecker(300)).toEqual('over budget')
		expect(budgetChecker(150)).toEqual('in budget')
		expect(budgetChecker(505)).toEqual('over budget')
		expect(budgetChecker(5)).toEqual('in budget')
	})
})

// Write the test for a function that takes in two arguments(numbers) and returns the smaller number. Write the function that will make the test pass.

// Write the test for a function that takes in one argument(number) and returns whether the number is odd. Write the function that will make the test pass.

// Write the test for a function that takes in a fruit and returns yellow if the argument is banana, red if apple and purple if grape. Write the function that will make the test pass.

// Write the test for a function called Rick that returns "Morty". Write the function that will make the test pass.

// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen. Write the function that will make the test pass.

// Write the test for a function called oddOrEven that takes an number as an argument and logs whether the number is odd or even. Write the function that will make the test pass.

// Write the test for a function called doubler that takes an number and returns the result of the number multiplied by 2. Write the function that will make the test pass.

// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other. Write the function that will make the test pass.

// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5". Write the function that will make the test pass.

// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'. Write the function that will make the test pass.
