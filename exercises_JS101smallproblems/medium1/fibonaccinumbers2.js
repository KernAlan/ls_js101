// Rewrite your recursive fibonacci function so that it computes its results without using recursion.

function fibonacci(n) {
  let sum = [0, 1, 1];
  
  for (let i = 3; i <= n; i++) {
    let nextElement = sum[i - 1] + sum[i - 2];
    sum.push(nextElement);
  }
  
  console.log(sum[n]);
  return sum[n];
}

fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050