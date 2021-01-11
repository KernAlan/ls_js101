// Write a function that returns true if its integer argument is palindromic, or false otherwise. A palindromic number reads the same forwards and backwards.

// input: integer
// output: boolean

// algo:
// convert integer to string
// compare the first and last number and return false if not the same
// compare the second and second to last number and return false
// ...

// return true if it hasn't returned false

function isPalindromicNumber(num) {
  
  num = num.toString();
  
  for (let i = 0; i < num.length; i++) {
    if (num[i] !== num[num.length - (1 + i)]) {
      console.log('false');
      return false;
    }
  }
  
  console.log('true');
  return true;
}


isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true