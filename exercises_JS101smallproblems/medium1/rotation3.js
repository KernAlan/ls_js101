// Take the number 735291 and rotate it by one digit to the left, getting 352917. 
// Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again 
// to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and
// rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

// Write a function that takes an integer as an argument, and returns the maximum rotation of that integer. You can (and 
// probably should) use the rotateRightmostDigits function from the previous exercise.

function rotateRightmostDigits(number, count) {
  let array = number.toString().split("");
  let length = array.length;
  
  let firstPart = array.slice(0, length - count);
  let countNumber = array[length - count];
  let secondPart = array.slice(length - count + 1, length);
  let returnArray = firstPart.concat(secondPart).concat(countNumber);
  
  return Number(returnArray.join(""));
}

function maxRotation(digits) {
  let length = digits.toString().length;
  let iterationOne = rotateRightmostDigits(digits, length);

  for (let i = 1; i < length; i++) {
    iterationOne = rotateRightmostDigits(iterationOne, length - i);
  }
  
  console.log(iterationOne);
  return iterationOne;
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845