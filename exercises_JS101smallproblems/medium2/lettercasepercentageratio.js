// Write a function that takes a string, and returns an object containing the following three properties:

// the percentage of characters in the string that are lowercase letters
// the percentage of characters that are uppercase letters
// the percentage of characters that are neither

// You may assume that the string will always contain at least one character.

function letterPercentages(string) {
  let object = {};
  let counter = 0;
  
  const lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseAlphabet = lowercaseAlphabet.toUpperCase();
  
  let stringArray = string.split("");
  
  // Lowercase percentage
  
  for (let i = 0; i < string.length; i++) {
    if (lowercaseAlphabet.includes(stringArray[i])) {
      counter += 1;
    } else {
      continue;
    }
  }
  object.lowercasePercent = (counter * 100) / stringArray.length;
  
  // Uppercase percentage
  
  counter = 0;

  stringArray.forEach(element => {
    if (uppercaseAlphabet.includes(element)) {
      counter += 1;
    }
  })
  
  object.uppercasePercent = (counter * 100) / stringArray.length;
  
  // Neither percentage
  
  counter = 0;
  
  stringArray.forEach(element => {
    if (!lowercaseAlphabet.includes(element) && !uppercaseAlphabet.includes(element)) {
      counter += 1;
    }
  });
  
  object.neither = (counter * 100) / stringArray.length;

  return object;
}


letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }