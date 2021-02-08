// Write a function that takes a string consisting of zero or more space separated words, and returns an object that shows the number of words of different sizes.

// split the string into an array by words
// store the length of each element in the array in a second array
// store the count of each length number as the second value in each element of the array second array
// place the first element of the first array as the key in an object, and the second element as the value of the key
// return the object

// THIS COUNTS AS LETTERCOUNTER2 AS WELL

function wordSizes(string) {
  if (string.length === 0) return {};
  
  let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ';
  
  let filteringArray = string.split("");
  filteringArray = filteringArray.filter(element => alphabet.includes(element));
  let filteredString = filteringArray.join("");
  
  let array = filteredString.split(" ");
  let secondArray = [];
  let object = {};
  
  array.forEach(element => secondArray.push(element.length));


  secondArray.forEach(element => object[element] = (object[element] || 0) + 1);
  
console.log(object);

}


wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}