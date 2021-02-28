// Write a function that takes a sentence string as an argument, and returns that string with every occurrence of a "number word" — 'zero', 'on
// e', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

function wordToDigit(string) {
  let numbers = {
    zero : 0,
    one : 1,
    two : 2,
    three : 3,
    four : 4,
    five : 5,
    six : 6,
    seven : 7,
    eight : 8,
    nine : 9
  };
  
  let array = string.split(" ");
  
  let keys = Object.keys(numbers);
  
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (String(array[i]).includes(keys[j])) {
        array[i] = String(array[i]).replace(keys[j], numbers[keys[j]]);
      }
    }
  }
  console.log(array.join(" "));
  return array.join(" ");
}

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."

wordToDigit('The weight is done.');      // "The weight is done."