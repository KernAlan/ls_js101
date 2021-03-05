// A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its 
// digits occuring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is 
// not a multiple of 7), and 133 is not (the digit 3 appears twice).

// Write a function that takes an integer as an argument, and returns the next featured number greater than the integer.
// Issue an error message if there is no next featured number.

// NOTE: The largest possible featured number is 9876543201.

function featured(number) {
  let counter = number + 1;
  
  while (true) {
    if ((counter % 7 === 0) && (counter % 2 !== 0) && (digitsNotSame(counter))) {
      return counter;
    } else if (counter >= 9876543201) {
      return 'No number meets the requirements.';
    } else counter += 1;
  }
}

function digitsNotSame(num) {
  let string = String(num);
  
  for (let i = 0; i < string.length; i++) {
    let slice = string.slice(i + 1, string.length);
    if (slice.includes(string[i])) {
      return false;
    }
  }
  return true;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."