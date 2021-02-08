// Write a function that takes a non-empty string argument, and returns the middle character(s) of the string. 
// If the string has an odd length, you should return exactly one character. 
// If the string has an even length, you should return exactly two characters.

function centerOf(string) {
  let center = Math.floor(string.length / 2);
  if (string.length % 2 === 0) {
    console.log(string[center - 1] + string[center]);
    return string[center] + string[center + 1];
  } else {
    console.log(string[center]);
    return string[center];
  }
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"