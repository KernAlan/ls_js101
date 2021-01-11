/*

1. Initialize deck
2. Deal cards to player and dealer
3. Player turn: hit or stay
   - repeat until bust or stay
4. If player bust, dealer wins.
5. Dealer turn: hit or stay
   - repeat until total >= 17
6. If dealer busts, player wins.
7. Compare cards and declare winner.

TO DO 1/4/2021:
 - Calculate aces
 - Fix play again

*/

let rlsync = require("readline-sync");

let playerHand = [];

let dealerHand = [];

let deck = [
  [11, 'A'], [11, 'A'], [11, 'A'], [11, 'A'],
  [2, '2'], [2, '2'], [2, '2'], [2, '2'],
  [3, '3'], [3, '3'], [3, '3'], [3, '3'],
  [4, '4'], [4, '4'], [4, '4'], [4, '4'],
  [5, '5'], [5, '5'], [5, '5'], [5, '5'],
  [6, '6'], [6, '6'], [6, '6'], [6, '6'],
  [7, '7'], [7, '7'], [7, '7'], [7, '7'],
  [8, '8'], [8, '8'], [8, '8'], [8, '8'],
  [9, '9'], [9, '9'], [9, '9'], [9, '9'],
  [10, '10'], [10, '10'], [10, '10'], [10, '10'],
  [10, 'J'], [10, 'J'], [10, 'J'], [10, 'J'],
  [10, 'Q'], [10, 'Q'], [10, 'Q'], [10, 'Q'],
  [10, 'K'], [10, 'K'], [10, 'K'], [10, 'K']
];

function deal() {
  playerHand.push(deck[0], deck[1]);
  deck.splice(0, 2);

  dealerHand.push(deck[0], deck[1]);
  deck.splice(0, 2);
}

function hit(hand) {
  let card = deck.splice(0, 1);
  hand.push(card[0]);

  if (hand === playerHand) {
    console.log(`The player has hit, and has drawn one ${card[0][1]}.`);
  }

  if (hand === dealerHand) {
    console.log(`The dealer has hit, and has drawn one ${card[0][1]}.`);
  }
}

function total(hand) {
  let sum = 0;

  for (let index = 0; index < hand.length; index++) {
    sum += hand[index][0];
  }
  
  // Correct for aces:

  hand.filter(value => value[0] === 11).forEach(function() {
    if (sum > 21) sum -= 10;
  });

  return sum;
}

function busted(hand) {
  if (total(hand) > 21) {
    return true;
  }
}

function resetCards() {
  deck.length = 0;
  deck = [
    [11, 'A'], [11, 'A'], [11, 'A'], [11, 'A'],
    [2, '2'], [2, '2'], [2, '2'], [2, '2'],
    [3, '3'], [3, '3'], [3, '3'], [3, '3'],
    [4, '4'], [4, '4'], [4, '4'], [4, '4'],
    [5, '5'], [5, '5'], [5, '5'], [5, '5'],
    [6, '6'], [6, '6'], [6, '6'], [6, '6'],
    [7, '7'], [7, '7'], [7, '7'], [7, '7'],
    [8, '8'], [8, '8'], [8, '8'], [8, '8'],
    [9, '9'], [9, '9'], [9, '9'], [9, '9'],
    [10, '10'], [10, '10'], [10, '10'], [10, '10'],
    [10, 'J'], [10, 'J'], [10, 'J'], [10, 'J'],
    [10, 'Q'], [10, 'Q'], [10, 'Q'], [10, 'Q'],
    [10, 'K'], [10, 'K'], [10, 'K'], [10, 'K']
  ];

  playerHand.length = 0;
  dealerHand.length = 0;
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]];
  }
}

function hasWon() {
  if (busted(playerHand)) {
    return 'dealer';
  }

  if (busted(dealerHand)) {
    return 'player';
  }

  if (total(playerHand) > total(dealerHand)) {
    return 'player';
  }

  if (total(dealerHand) > total(playerHand)) {
    return 'dealer';
  }
}

function listCards(hand) {
  let arr = [];
  for (let index = 0; index < hand.length; index++) {
    arr.push(hand[index][1]);
  }
  return arr.join(", ");
}

function displayWinner() {
  if (hasWon() === 'player') {
    console.log(`The player has won!`);
  } else if (hasWon() === 'dealer') {
    console.log(`The dealer has won!`);
  } else {
    console.log(`The game is a draw!`);
  }
}

// GAMEPLAY

let playAgain = true;

while (playAgain) {

  shuffle(deck);
  deal();
  
  let playerTotal = total(playerHand);
  let dealerTotal = total(dealerHand);
  
  console.log(`You were dealt a ${playerHand[0][1]} and a ${playerHand[1][1]} for a total of ${playerTotal}`);
  console.log(`You can see the dealer has one ${dealerHand[0][1]}`);

  // PLAYER TURN

  while (true) {

    console.log(`Hit or stay? 'h' for hit or 's' for stay`);
    let answer = rlsync.question();

    if (answer === 'h') hit(playerHand);
    if (answer === 's' || busted(playerHand) === true) break;
    
    playerTotal = total(playerHand);
    dealerTotal = total(dealerHand);

    console.log(`Player's hand is ${playerTotal}.`);

  }

  // DEALER TURN

  while (true) {
    if (dealerTotal >= 17) break;

    if (busted(playerHand)) break;

    if (busted(dealerHand)) break;

    if (playerTotal > dealerTotal) {
      hit(dealerHand);
    }
  }

  // POST-GAME SCREEN

  console.log(`The dealer lays down the following hand: ${listCards(dealerHand)}`);
  console.log(`You lay down your hand: ${listCards(playerHand)}`);

  displayWinner();

  console.log(`Would you like to play again? 'y' or 'n' `);

  while (true) {
    let playOnceMore = rlsync.question();

    if (playOnceMore === 'y') {
      resetCards();
      break;
    } else if (playOnceMore === 'n') {
      playAgain = false;
      break;
    } else {
      console.log(`That was an invalid choice! Type again 'y' or 'n' `);
    }
  }

}