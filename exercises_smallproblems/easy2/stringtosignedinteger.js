/*
Input:
  Positive or negative strings with digits with possible leading + or -. 
Output:
  If positive, positive integers. If negative, negative integers.

Algorithm:
  Test if positive or negative sign
  Pass through stringToInteger function to convert to integers
  If positive, return the argument value
  If negative, multiply by -1. Then return.
  Log return value of stringToInteger
  
*/

function stringToSignedInteger(integers) {
  if (integers.includes('-')) {
    integers = integers.slice(1, integers.length);
    return (stringToInteger(integers)) * -1;
  } else if (integers.includes('+')) {
    integers = integers.slice(1, integers.length);
    return stringToInteger(integers);
  } else return stringToInteger(integers);
}

function stringToInteger(string) {
  const DIGITS = {
    0 : 0,
    1 : 1,
    2 : 2,
    3 : 3,
    4 : 4,
    5 : 5,
    6 : 6,
    7 : 7,
    8 : 8,
    9 : 9,
   }
  let numbers = 0;
  let result = 0;
  let stringArray = string.split("");
  stringArray = stringArray.forEach(el => {
    numbers = DIGITS[el];
    result = (result * 10) + numbers;
  })
  return result;
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true