// example: { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

/*
Algorithm:
  -Split each character into an array
  -Create an object with the alphabet as keys and 0's as values
  -Loop through the object and test if each index has one of the string characters
  -if it does, increment value by 1
  -Loop through object and delete all 0 value properties
*/

let statement = "The Flintstones Rock";

let result = {};

for (let counter = 0; counter < statement.length; counter += 1) {
  let char = statement[counter];
  if (char === ' ') continue;

  result[char] = result[char] || 0;
  result[char] += 1;
}

console.log(result);