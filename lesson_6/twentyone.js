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

*/

function randomGenerator(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random * (max - min) + min)
}


function hit(player) {
  
}

function determineBust(player) {
  
}

function resetDeck() {
  
}

function playRound() {
  
}

let playerHand = [];

let dealerHand = [];

let deck = [
  [1, 1, 1, 1],
  [10, 10, 10, 10],
  [10, 10, 10, 10],
  [10, 10, 10, 10],
  [2, 2, 2, 2],
  [3, 3, 3, 3],
  [4, 4, 4, 4],
  [5, 5, 5, 5],
  [6, 6, 6, 6],
  [7, 7, 7, 7],
  [8, 8, 8, 8],
  [9, 9, 9, 9],
  [10, 10, 10, 10]
  ];

