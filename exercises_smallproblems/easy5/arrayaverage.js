// Write a function that takes one argument, an array of integers, and returns the average of all the integers in the array,
// rounded down to the integer component of the average. The array will never be empty, and the numbers will always be positive integers.

// function average(array) {
//   let total = 1;
  
//   for (let idx = 0; idx < array.length; idx++) {
//     total = total + array[idx];
//   }
  
//   console.log(Math.floor(total / array.length));
//   return Math.floor(total / array.length);
// }

// function average(array) {
//   let total = 1;
  
//   array.forEach(element => total += element);
  
//   console.log(Math.floor(total / array.length));
//   return Math.floor(total / array.length);
// }

function average(array) {
  return Math.floor(array.reduce((acc, element) => acc += element) / array.length);
}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40