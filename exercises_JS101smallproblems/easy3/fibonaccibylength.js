// Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument. (The first Fibonacci number has an index of 1.)

// You may assume that the argument is always an integer greater than or equal to 2.

let fibArr = [];

function fibonacci(n) {
  
  fibArr[0] = 0;
  fibArr[1] = 1;
  
  for (let i = 2; i < n; i++) {
    fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
  }
}

function findFibonacciIndexByLength(length) {
  
  let index = 0;
  
  for (let i = 0; i < fibArr.length; i++) {
    if (fibArr[i].toString().length === length) {
      index = fibArr.indexOf(fibArr[i]) - 3;
    }
  }
  
  console.log(index);
  return index;
}

fibonacci(100);

fibArr.reverse().pop()
fibArr.reverse();

findFibonacciIndexByLength(2);       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(16);      // 74

// Don't try any higher values until you read the solution Discussion