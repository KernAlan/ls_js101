// Write a function that takes a string argument, 
// and returns true if all of the alphabetic characters inside the string are uppercase; false otherwise. 
// Ignore characters that are not alphabetic.

function isUppercase(string) {
  let uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  
  let array = string.split("").filter(char => uppercaseLetters.includes(char) || lowercaseLetters.includes(char));
  
  return array.every(element => uppercaseLetters.includes(element));
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true