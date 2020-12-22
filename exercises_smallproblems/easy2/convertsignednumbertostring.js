// Write a function that takes an integer, and converts it to a string representation.



// ALGORITHM:
// Declare a function SignedIntegerToString with argument int
// Declare a function plusOrMinus to return a string + or - depending on return value of Math.sign() for SITS
// Return return value of POM + return value of SITS

function signedIntegerToString(int) {
    return `${plusOrMinus(int)}${integerToString(int)}`
}

function plusOrMinus(int) {
    if (Math.sign(int) === 1) {
        return '+';
    } else if (Math.sign(int) === 0) {
        return '';
    } else return '-';
};

function integerToString(int) {
  const DIGITS = {
      0 : "0",
      1 : "1",
      2 : "2",
      3 : "3",
      4 : "4",
      5 : "5",
      6 : "6",
      7 : "7",
      8 : "8",
      9 : "9",
  }
  
  let intArray = [];
  if (int === 0) { intArray.push(0); }
  if (int < 0) { int = int * -1 };
  while (int > 0) {
    intArray.push(int % 10);
    int = parseInt(int / 10);
  }
  intArray.reverse();
  
  let strArray = intArray.map(function(el) {
    return DIGITS[el];
  })
  
  return strArray.join('')
}



// OUTPUT: 
console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");