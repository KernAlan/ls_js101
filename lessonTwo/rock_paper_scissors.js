const readline = require('readline-sync');
const VALID_CHOICES = ['r', 'p', 'ss', 's', 'l'];

let roundCount = 1;
let roundsLeft = 6 - roundCount;
let computerWins = 0;
let playerWins = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

function incrementPlayer() {
  playerWins += 1;
  roundCount += 1;
}

function incrementComputer() {
  computerWins += 1;
  roundCount += 1;
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if ((choice === 'r' && computerChoice === 'ss') ||
      (choice === 'p' && computerChoice === 'r') ||
      (choice === 'ss' && computerChoice === 'p') ||
      (choice === 's' && computerChoice === 'r') ||
      (choice === 'l' && computerChoice === 'p')) {
    incrementPlayer();
    prompt(`You win!`);

  } else if ((choice === 'rock' && computerChoice === 'paper') ||
             (choice === 'paper' && computerChoice === 'scissors') ||
             (choice === 'scissors' && computerChoice === 'rock')) {
    incrementComputer();
    prompt(`Computer wins!`);
    
  } else {
    prompt(`It's a tie!`);
    roundCount += 1;
  }
}

  while(true) {
  prompt(`It is round ${roundCount}. You are at ${playerWins} and computer is at ${computerWins}. Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

    while (!VALID_CHOICES.includes(choice)) {
      prompt(`That's not a valid choice!`);
      choice = readline.question();
    }
    
    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];
    
    displayWinner(choice, computerChoice);
  
  if (roundCount > 5 || playerWins >= 3 || computerWins >= 3) {
    prompt(`Final score: You won ${playerWins} and computer won ${computerWins}`);
    if (playerWins > computerWins) {
      prompt(`You won the match!`);
    } else if (computerWins > playerWins) {
      prompt(`You lose the match!`);
    } else {
      prompt(`Tie match!`)
    }
    
    roundCount = 0;
    playerWins = 0;
    computerWins = 0;
    prompt('Do you want to play again (y/n)?');
      let answer = readline.question().toLowerCase();
      while (answer[0] !== 'n' && answer[0] !== 'y') {
        prompt('Please enter "y" or "n".');
        answer = readline.question().toLowerCase();
      }
  
    if (answer[0] !== 'y') break;
   }
  }