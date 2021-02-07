// Write a function that takes a string argument containing one or more words, and returns a new string containing the words from the string argument.
// All five-or-more letter words should have their letters in reverse order. The string argument will consist of only letters and spaces. 
// Words will be separated by a single space.

function reverseWords(text) {
  let arr = text.split(" ");
  let reversedWords = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= 5) {
      reversedWords.push(arr[i].split("").reverse().join(""));
    } else {
      reversedWords.push(arr[i]);
    }
  }
  
  console.log(reversedWords.join(" "));
  return reversedWords.join(" ");
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"