// Write a function that takes an array of strings, and returns an array of the same values with all vowels (a, e, i, o, u) removed.

function removeVowels(array) {
  const vowels = "aeiouAEIOU";
  let newArr = [];
  
  for (let i = 0; i < array.length; i++) {
    newArr.push(array[i].split("").filter(char => !vowels.includes(char)).join(""));
  }
  
  return newArr;
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]