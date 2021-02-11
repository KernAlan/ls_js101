// Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. 
// This means that all substrings that start at index position 0 should come first, then all substrings that start at index position 1, and so on. 
// Since multiple substrings will occur at each position, return the substrings at a given index from shortest to longest.

// You may (and should) use the leadingSubstrings function you wrote in the previous exercise:

function leadingSubstrings(string) {
  let array = [];
  
  for (let i = 1; i < string.length + 1; i++) {
    array.push(string.substring(0, i));
  }
  
  return array;
}

function substrings(text) {
  let arr = [];
  
  for (let i = 0; i < text.length; i++) {
    let slice = leadingSubstrings(text.slice(i, text.length));
    for (let i = 0; i < slice.length; i++) {
      arr.push(slice[i]);
    }
  }
  
  return arr;
}


console.log(substrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]