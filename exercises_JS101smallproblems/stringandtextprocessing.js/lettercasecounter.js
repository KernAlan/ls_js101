// Write a function that takes a string and returns an object containing three properties: one representing the number of characters in the string that are lowercase letters, 
// one representing the number of characters that are uppercase letters, and one representing the number of characters that are neither.

function letterCaseCount(string) {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = lowercase.toUpperCase();
  
  let obj = {};
  
  let lowercaseNumber = 0;
  let uppercaseNumber = 0;
  let neitherNumber = 0;
  
  for (let i = 0; i < string.length; i++) {
    if (lowercase.includes(string[i])) {
      lowercaseNumber += 1;
    } else if (uppercase.includes(string[i])) {
      uppercaseNumber += 1;
    } else {
      neitherNumber += 1;
   }
  }
  
  obj.lowercase = lowercaseNumber;
  
  obj.uppercase = uppercaseNumber;
  
  obj.neither = neitherNumber;
  
  console.log(obj);
  return obj;
  
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }