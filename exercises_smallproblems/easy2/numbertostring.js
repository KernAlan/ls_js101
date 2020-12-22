
// Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on) to the string representation of that integer


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


console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
console.log(integerToString(1234567890));      // "1234567890"