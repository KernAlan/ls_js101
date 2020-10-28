function determineExclamation(string) {
  if (string.endsWith("!")) {
    return true;
  } else return false;
}

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

console.log(determineExclamation(str1));
console.log(determineExclamation(str2));