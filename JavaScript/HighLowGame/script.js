// EPIC Challenge
// High/Low Game
// Create an HTML page and link your JavaScript file
// More information about linking HTML to JavaScript here
// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive)
// As a user, when I see if my guess is too high or too low
// As a user, if I guess the number correctly I am notified that I won
// STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message

// generate random number between 1 and 100 (num1)
let randomNum = Math.floor(Math.random() * 100) + 1

// get guessed number (num2)
let guess = document.getElementById('guess')

// create guess counter
let counter = 0

// create variable for number of tries player gets
let tries = 7

// create a function that accepts two numbers
const checkGuess = (num1, num2) => {
  // create conditional to make sure player has more tries available
    if (counter <= tries) {
            // return "Your guess was too low. Try again."
      return alert('Your guess was too low. Try again.')
    } else {
      return alert('Game Over! You ran out of tries')
  
  // create conditional to compare the two numbers
  // if numbers match
  if (num1 === num2) {
    // return "You guessed the number!"
    return alert('Congratulations! You guessed the number!')
  } else if (num1 > num2) {
    // if guess lower than random number
    
    }
  } else
}

// if guess higher than random number
// update guess counter
// return "Your guess was too high"
