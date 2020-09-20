function penultimate(string) {
  string = string.split(' ');
  let secondToLast = string.length - 2;
  return string[secondToLast];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

// further exploration

function middleWord(string) {
  string = string.split(' ');
  let stringIndex = string.length;
  if (string.length % 2 === 0) {
    stringIndex = string.length / 2;
  } else {
    stringIndex = (string.length - 1) / 2;
    console.log("This is an odd string number:")
  }
  return string[stringIndex];
}

console.log(middleWord("This is a string full of multiple words."))
console.log(middleWord("This is a string full of multiple."))