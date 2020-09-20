const readline = require('readline-sync');

const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const ABBREVIATED_CHOICES = ['r', 'p', 's', 'l', 'sp'];
const WINNING_COMBOS = {
  r :  ['s', 'l'],
  p :  ['r', 'sp'],
  s :  ['p', 'l'],
  l :  ['p', 'sp'],
  sp : ['r', 's'],
};

let round = 1;

let score = { player : 0, computer : 0, };

function prompt(message) {
  console.log(`=> ${message}`);
}

function incrementWinner(winner) {
  if (winner === 1) {
    score.player += 1;
  } else {
    score.computer += 1;
  }
}

function abbrevConverter(choice) {
  switch (choice) {
    case 'r': return 'rock';
    case 'p': return 'paper';
    case 's': return 'scissors';
    case 'l': return 'lizard';
    case 'sp': return 'spock';
    case 'y': return 'yes';
    case 'n': return 'no';
    default: return choice;
  }
}

function greeting() {
  prompt(`---+++Welcome to Rock, Paper, Scissors (Bonus Edition)!+++---`);
  prompt(`This is a best of 5 match.`);
  prompt(`Your choices are: ${VALID_CHOICES.join(' ')}`);
  prompt(`--Type the first letter of your choice. For Spock, type 'sp'\n`);
}

// gameplay

while (true) {
  if (round === 1) {
    console.clear();
    greeting();
  }

  prompt(`ROUND ${round}. You are at ${score.player} and computer is at ${score.computer}.`);

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);

  let computerChoice = ABBREVIATED_CHOICES[randomIndex];

  let choice = readline.question().toLowerCase();

  while (!ABBREVIATED_CHOICES.includes(choice)) {
    prompt(`That's not a valid choice! Type again.`);
    choice = readline.question().toLowerCase();
  }

  if (choice === computerChoice) {
    prompt(`Tie! You chose ${abbrevConverter(choice)} and computer chose ${abbrevConverter(computerChoice)}.`);
    round += 1;
  } else if (WINNING_COMBOS[choice].includes(computerChoice)) {
    incrementWinner(1);
    round += 1;
    prompt(`You won! You chose ${abbrevConverter(choice)} and computer chose ${abbrevConverter(computerChoice)}.`);
  } else {
    incrementWinner(2);
    round += 1;
    prompt(`You lost! You chose ${abbrevConverter(choice)} and computer chose ${abbrevConverter(computerChoice)}.`);
  }

  if (round > 5) {
    prompt(`Final score: You won ${score.player} and computer won ${score.computer}`);

    if (score.player > score.computer) {
      prompt(`You won the match!\n`);
    } else if (score.player < score.computer) {
      prompt(`You lost the match!\n`);
    } else {
      prompt(`Tie match!\n`);
    }

    prompt('Do you want to play again (y/n)?');

    let resetGame = readline.question().toLowerCase();

    while ((resetGame !== 'n') && (resetGame !== 'y')) {
      prompt('Please enter "y" or "n".');
      resetGame = readline.question().toLowerCase();
    }

    if (resetGame === 'n') break;
    if (resetGame === 'y') {
      round = 1;
      score.player = 0;
      score.computer = 0;
    }

  }
}