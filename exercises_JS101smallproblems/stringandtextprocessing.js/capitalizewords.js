// Write a function that takes a string as an argument, and returns that 
// string with the first character of every word capitalized and all subsequent characters in lowercase.

// You may assume that a word is any sequence of non-whitespace characters.

function wordCap(string) {
  let arr = string.split(" ");
  let newArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i][0].toUpperCase() + arr[i].slice(1, arr[i].length).toLowerCase());
  }
  
  console.log(newArr.join(" "));
  return newArr.join(" ");
}

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'