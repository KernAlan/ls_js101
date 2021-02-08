// Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. 
// The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

function doubleConsonants(string) {
  string = string.split("");
  let newArr = [];
  let vowels = 'aeiou';
  
  for (let idx = 0; idx < string.length; idx++) {
    if (!vowels.includes(string[idx])) {
      newArr.push(string[idx] + string[idx]);
    } else {
      newArr.push(string[idx]);
    }
  }
  
  console.log(newArr.join(""));
  return newArr.join("");
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""