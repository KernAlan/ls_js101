/*
input: let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
output: { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

algorithm:
  - Initialize a new object
  - Loop through the array
  - Add each element as a key
  - Append a sequence of numbers from 0 to each element as a value

*/

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let flintstonesObject = {};

function objectAppend(array) {
  for (let i = 0; i < array.length; i += 1) {
    flintstonesObject[array[i]] = i;

  }
  return flintstonesObject;
}


console.log(objectAppend(flintstones));