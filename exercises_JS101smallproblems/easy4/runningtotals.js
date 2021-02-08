// Write a function that takes an array of numbers, and returns an array with the same number of elements, 
// with each element's value being the running total from the original array.

// input: array of integers
// output: array of integers

// algo:
// - initialize a new array
// - take first element and push to new array
// - add sum of second element to first element and push it to new array
// - add sum of third, second, and first element and push to new array
// - etc.
// - return new array

function runningTotal(arr) {
  if (arr.length === 0) return [];
  
  let newArr = [];
  
  newArr.push(arr[0]);
  let currentSum = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    currentSum += arr[i];
    newArr.push(currentSum);
  }
  
  console.log(newArr);
  return newArr;
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []