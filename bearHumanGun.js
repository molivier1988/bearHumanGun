// Function to get user game choice and check for valid input
function getUserChoice(userInput) {
  // Convert input to lower case
  userInput = userInput.toLowerCase();
  // Tests for valid user input. If valid user choice is returned else
  // error message is returned
  if (userInput === "bear" || userInput === "human" || userInput === "gun") {
    return console.log(userInput);
  } else {
    console.log("Sorry your input is invalid");
  }
}

// Function to randomly select computer choice
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  console.log(randomNumber);
  if (randomNumber === 0) {
    return "bear";
  } else if (randomNumber === 1) {
    return "human";
  } else {
    return "gun";
  }
}

// Function to determine game winner by comparing
// userChoice and computerChoice inputs
function determineWinner(userChoice, computerChoice) {
  // if there is a tie
  if (userChoice === computerChoice) {
    return "It is a tie";
  }
  // if user selects `'human'`
  if (userChoice === "human") {
    // if computer selects `'bear'`
    if (computerChoice === "bear") {
      return "You have been mauled by a bear";
    } else {
      return "You have disarmed a gun";
    }
  }
  // if user selects `'bear'`
  if (userChoice === "bear") {
    // if computer selects `'gun'`
    if (computerChoice === "gun") {
      return "You have been shot by a gun";
    } else {
      return "You have mauled a human";
    }
  }
  // if user selects `'gun'`
  if (userChoice === "gun") {
    // if computer selectsion `'human'`
    if (computerChoice === "human") {
      return "Your gun has been disarmed";
    } else {
      return "You have shot a bear";
    }
  }
}

// Function to start game, calls functions to:
// 1. Get user input
// 2. Check if user input is valid and print to the console
// 3. Get random computer choice and print to the console
// 4. Determine who wins the game
function playGame() {
  // prompt user to make choice
  var promptUsesChoice = prompt("Please choose bear, human or gun");
  // format user choice to lower case and check for valid word
  var userChoice = getUserChoice(promptUsesChoice);
  // call `getComputerChoice()` and assign to variable `computerChoice`
  var computerChoice = getComputerChoice();
  console.log(computerChoice);
  console.log(userChoice);
  // pass `userChoice` and `computerChoice` to the function `determineWinner`
  // and log to the console
  console.log(determineWinner(userChoice, computerChoice));
}

playGame(); // Call playGame()
