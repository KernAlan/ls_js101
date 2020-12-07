/*
// Display the initial empty 3x3 board.
// Ask the user to mark a square.
// Computer marks a square.
// Display the updated board state.
// If it's a winning board, display the winner.
// If the board is full, display tie.
// If neither player won and the board is not full, go to #2
// Play again?
// If yes, go to #1
// Goodbye!
*/

// Game setup initializing

prompt("Welcome to Tic-Tac-Toe!");

let rlsync = require("readline-sync");

let frontBoard = [['1', '2', '3'],
            ['4', '5', '6'],
            ['7', '8', '9']];
            
let inputBoard = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

let playerChoices = [];
let playerChoice;

let computerChoices = [];
let computerChoice;
            
            
function displayBoard() {
  console.log(frontBoard[0]);
  console.log(frontBoard[1]);
  console.log(frontBoard[2]);
}

function randomGenerator(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min).toString(10);
}

function prompt(string) {
  console.log(string);
}

function everyMatch (array, target) {
  for (let i = 0; i < target.length; i++) {
    if (target[i].every(element => array.includes(element))) {
      return true;
   }
  }
}

let winningCombinations = [
  ['1', '2', '3'],
  ['1', '5', '9'],
  ['1', '4', '7'],
  ['2', '5', '8'],
  ['3', '6', '9'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['7', '5', '3'],
  ];

// Display the initial empty 3x3 board.

displayBoard();

// Ask the user to mark a square.

let noWinner = true;

while (noWinner === true) {

  let loop = true;
  
  while (loop) {
    playerChoice = rlsync.question("Which tile would you like to mark? (Enter number): ");
    
    if (playerChoices.includes(playerChoice) || computerChoices.includes(playerChoice)) {
      prompt(`That tile has already been marked! Please choose again`);
    } else {
      loop = false;
    }
  }

    playerChoices.push(playerChoice);
    
    for (let i = 0; i < frontBoard.length; i++) {
      if (frontBoard[i].includes(playerChoice)) {
        let index = frontBoard[i].indexOf(playerChoice);
        frontBoard[i][index] = 'X';
      }
    }
    prompt(`Player choices: ${playerChoices}`);
    
    if (inputBoard.includes(playerChoice)) {
      loop = false;
    } else {
        prompt("Please enter a valid number.");
    }

// Computer marks a square.
  
  while (true) {
    computerChoice = randomGenerator(1, 9);
    if (computerChoices.includes(computerChoice) || playerChoices.includes(computerChoice)) {
      computerChoice = randomGenerator(1, 9);
      } else {
        break;
      }
    }
    
  computerChoices.push(computerChoice);
  
  for (let i = 0; i < frontBoard.length; i++) {
    if (frontBoard[i].includes(computerChoice)) {
          let index = frontBoard[i].indexOf(computerChoice);
          frontBoard[i][index] = 'O';
          prompt(`Computer chooses ${computerChoice}.`);
        }
      }
      prompt(`Computer choices: ${computerChoices}`);
  
  // Display the updated board state.
  
  displayBoard();

// If it's a winning board, display the winner.

  let winner;
  let player;
  let computer;
  
  if (everyMatch(computerChoices, winningCombinations)) {
    prompt(`The computer wins!`);
    noWinner = false;
  }
  
  if (everyMatch(playerChoices, winningCombinations)) {
    prompt(`The player wins!`);
    noWinner = false;
  }

// If the board is full, display tie.

  if (computerChoices.length + playerChoices.length > 8) {
    prompt(`Tie game!`);
    noWinner = false;
  }

// If neither player won and the board is not full, go to #2

}

// If yes, go to #1

displayBoard();
prompt(`Game over!`)

let gameOver = rlsync.question(`Would you like to play again? Enter 'y' or 'n'.`);

// Goodbye!