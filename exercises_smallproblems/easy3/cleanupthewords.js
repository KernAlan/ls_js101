// Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters
// replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive
// spaces).

function cleanUp(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
  let arr = str.split("");
  
  let counter = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (!alphabet.includes(arr[i])) {
      counter += 1;
      
      if (counter <= 1) {
        arr.splice(i, 1, " ");
      }
      
      if (counter > 1) {
        arr.splice(i, 1);
        i -= 1;
      }
    }
      
    if (alphabet.includes(arr[i])) {
      counter = 0;
    }
      
  }
  console.log(arr.join(""));
  return arr.join("");
  
}

cleanUp("---what's my +*& line?");    // " what s my line "