// Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. 
// palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.

// input: string
// output: boolean

// rules: case matters, all characters matter

// algorithm:


function isPalindrome(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[string.length - (1 + i)]) {
      return false;
    }
  }
  
  return true;
}

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true