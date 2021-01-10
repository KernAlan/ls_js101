/*
Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. 
This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. 
If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.
*/

function isRealPalindrome(string) {
  string = string.toLowerCase();
  let alphabet = 'abcdefghijklmnopqrstuvwxyz1234567890';
  
  for (let i = 0; i < string.length; i++) {
    if (!alphabet.includes(string[i])) {
      let arr = string.split("");
      arr = arr.splice(i, 1);
      string = arr.join("");
    }
  }
  
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[string.length - (1 + i)]) {
      console.log('false');
      return false;
    }
  }
  console.log('true');
  return true;
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false