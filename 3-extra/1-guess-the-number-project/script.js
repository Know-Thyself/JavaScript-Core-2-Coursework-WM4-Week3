let randomNumber = Math.floor(Math.random() * 100 + 1);
let counter = 0;
let numberOfTries = 7;
const output = document.querySelector(".final-output");
output.innerText = `Number of tries: ${numberOfTries} \n Guess a number between 1 and 100`;

function guessNumber() {
  //Collect input from the user
  let guess = document.querySelector(".inputs-Values").value;

  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  if (guess === "" || guess < 1 || guess > 100) {
    output.innerText = "Please enter a number between 1 and 100";
  }

  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
  else if (guess > randomNumber && numberOfTries > 1) {
    counter++;
    numberOfTries--;
    output.innerText = `Number of tries: ${numberOfTries} \n Number is too high, try again.`;
  }

  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
  else if (guess < randomNumber && numberOfTries > 1) {
    counter++;
    numberOfTries--;
    output.innerText = `Number of tries: ${numberOfTries} \n Number is too low, try again.`;
  }

  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
  else if (guess == randomNumber) {
    counter++;
    numberOfTries--;
    output.innerText = `${randomNumber} Guess is correct. You win! \n It took you ${counter} tries.`;
  } else {
    numberOfTries--;
    output.innerText = `Number of tries: ${numberOfTries} \n You Lose, the number was ${randomNumber}`;
  }
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Reset randomNumber
  randomNumber = Math.floor(Math.random() * 100 + 1);
  console.log(randomNumber, "new game");
  //Reset users input field
  document.querySelector(".inputs-Values").value = "";
  //Reset tries, and triesTaken by the user
  counter = 0;
  numberOfTries = 7;
  output.innerText = `Number of tries: ${numberOfTries} \n Guess a number between 1 and 100`;
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.querySelector(".btnNewGame").addEventListener("click", newGame);
document.addEventListener("keypress", keyBoardEvents);
