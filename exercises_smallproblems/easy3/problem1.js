// Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

// crunch('ddaaiillyy ddoouubbllee');    // "daily double"
// crunch('4444abcabccba');              // "4abcabcba"
// crunch('ggggggggggggggg');            // "g"
// crunch('a');                          // "a"
// crunch('');                           // ""

// ALGORITHM

// Split the string into an array of single characters
// Initialize an empty array
// Loop through str and push the index char to the new arr if the subsequent element isn't equal to the index char
// Return the joined new array

// SOLVING WITH BASIC LOOP

// function crunch(str) {
//   let arr = str.split("");

//   let newArr = [];
  
//   for (let i = 0; i < str.length; i++) {
//     if (str[i + 1] !== str[i]) {
//       newArr.push(str[i]);
//     }
//   }
  
//   console.log(newArr.join(""));
//   return newArr.join("");
  
// }

// SOLVING WITH REGEX

