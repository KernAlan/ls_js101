// Write a function that takes a string as an argument, 
// and returns that string with every lowercase letter changed to uppercase and every uppercase letter 
// changed to lowercase. Leave all other characters unchanged.

function swapCase(string) {
  let split = string.split("");
  let newArr = [];
  let lowercase = "abcdefghijklmnopqrstuvwxyz";
  let uppercase = lowercase.toUpperCase();
  
  for (let i = 0; i < split.length; i++) {
    if (lowercase.includes(split[i])) {
      newArr.push(split[i].toUpperCase());
    } else if (uppercase.includes(split[i])) {
      newArr.push(split[i].toLowerCase());
    } else {
      newArr.push(split[i]);
    }
  }

  return newArr.join("");
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"