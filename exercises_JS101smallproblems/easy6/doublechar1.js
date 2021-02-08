/*Write a function that takes a string, doubles every character in the string, and returns the result as a new string.*/

function repeater(text) {
  text = text.split("");
  let newArr = [];
  for (let i = 0; i < text.length; i++) {
    newArr.push(text[i]);
    newArr.push(text[i]);
  }
  
  console.log(newArr.join(""));
  return newArr.join("");
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""