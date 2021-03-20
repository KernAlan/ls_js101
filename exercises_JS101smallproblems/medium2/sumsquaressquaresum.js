// Write a function that computes the difference between the square of the sum of the first count positive 
// integers and the sum of the squares of the first count positive integers.

function sumSquareDifference(number) {
  
  if (number <= 1) {
    return 0;
  }
  
  let firstCount = [];
  
  for (let i = 1; i <= number; i++) {
    firstCount.push(i);
  }
  
  let firstNumber = firstCount.reduce((accumulator, element) => accumulator + element) ** 2;
  
  // Second number
  
  let secondCount = [];
  
  for (let i = 1; i <= number; i++) {
    secondCount.push(i ** 2);
  }
  
  let secondNumber = secondCount.reduce((accumulator, element) => accumulator + element);
  
  return firstNumber - secondNumber;
}

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150