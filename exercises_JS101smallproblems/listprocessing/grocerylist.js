// Write a function that takes a grocery list (a two-dimensional array) with each element containing a fruit and a quantity, 
// and returns a one-dimensional array of fruits, in which each fruit appears a number of times equal to its quantity.

function buyFruit(array) {
  let fruits = [];
  for (let i = 0; i < array.length; i++) {
    let num = array[i][1];
    let counter = 0;
    while (counter < num) {
      fruits.push(array[i][0]);
      counter += 1;
    }
  }
  console.log(fruits);
  return fruits;
}

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]