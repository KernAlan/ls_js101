// Given the following data structure, sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

function oddNumbers(array) {
  let counter = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 2 !== 0) {
      counter += array[i];
    }
  }
  return counter;
}

arr.sort(function(a, b) {
  return oddNumbers(a) - oddNumbers(b)
})

console.log(arr);