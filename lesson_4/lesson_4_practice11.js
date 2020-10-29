// example: { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

/*
Algorithm:
  -Split each character into an array
  -Create an object with the alphabet as keys and 0's as values
  -Loop through the object and test if each index has one of the string characters
  -if it does, increment value by 1
  -delete all 0 value properties
*/

let statement = "The Flintstones Rock".toLowerCase();

let fixedStatement = statement.split(" ");
let fixedStatementTwo = fixedStatement.join("");

let statementArr = fixedStatementTwo.split("");

let alphabet = {
  a : 0,
  b : 0,
  c : 0,
  d : 0,
  e : 0,
  f : 0,
  g : 0,
  h : 0,
  i : 0,
  j : 0,
  k : 0,
  l : 0,
  m : 0,
  n : 0,
  o : 0,
  p : 0,
  q : 0,
  r : 0,
  s : 0,
  t : 0,
  u : 0,
  v : 0,
  w : 0,
  x : 0,
  y : 0,
  z : 0,
}

for (let i = 0; i < statementArr.length; i++) {
  let currentLetter = statementArr[i];
    alphabet[currentLetter] += 1;
}

for (let element in alphabet) {
  if (alphabet[element] === 0) {
    delete alphabet[element]
  }
}

console.log(alphabet);