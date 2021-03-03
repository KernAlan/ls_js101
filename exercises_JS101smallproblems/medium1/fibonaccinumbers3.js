// For this exercise, your objective is to refactor the recursive fibonacci function to use memoization.

function fibonacci(n) {
  let memo = {};
  
  if (n < 2) {
    return n;
  } else {
    memo.n = fibonacci(n - 1) + fibonacci(n - 2);
    return memo.n;
  }
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765