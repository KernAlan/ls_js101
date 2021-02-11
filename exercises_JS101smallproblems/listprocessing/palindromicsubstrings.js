// // Write a function that returns a list of all palindromic substrings of a string.
// That is, each substring must consist of a sequence of characters that reads the same forward and backward. 
// The substrings in the returned list should be sorted by their order of appearance in the input string. 
// Duplicate substrings should be included multiple times.

// // You may (and should) use the substrings function you wrote in the previous exercise.

// // For the purpose of this exercise, you should consider all characters and pay attention to case; that is, 
// 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are not palindromes.

function leadingSubstrings(string) {
  let array = [];
  for (let i = 1; i < string.length + 1; i++) {
    array.push(string.substring(0, i));
  }
  return array;
}

function substrings(text) {
  let arr = [];
  
  for (let i = 0; i < text.length; i++) {
    let slice = leadingSubstrings(text.slice(i, text.length));
    for (let i = 0; i < slice.length; i++) {
      arr.push(slice[i]);
    }
  }
  
  return arr;
}

function palindromes(string) {
  let arrayedSubstrings = substrings(string);
  let palindromes = [];
  
  arrayedSubstrings.forEach(element => {
    let yes = 0;
    for (let i = 0; i < element.length; i++) {
      if (element[i] !== element[element.length - (1 + i)]) {
        yes = 1;
      }
    }
    if (yes === 0 && element.length !== 1) {
      palindromes.push(element);
    }
  });
  console.log(palindromes);
  return palindromes;
}

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]