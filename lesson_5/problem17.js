// Each UUID consists of 32 hexadecimal characters (the digits 0-9 and the letters a-f) represented as a string. 
// The value is typically broken into 5 sections in an 8-4-4-4-12 pattern, e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.
// Write a function that takes no parameters and returns a UUID.

let char = '0123456789abcdefghijklmnopqrstuvwxyz'.split("");

function randomSelection(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function generateSection(max) {
  let arr = [];
  for (let i = 0; i < max; i += 1) {
    arr.push(char[randomSelection(32)]);
  }
  return arr.join("");
}

function generateUUID() {
  return `${generateSection(8)}-${generateSection(4)}-${generateSection(4)}-${generateSection(4)}-${generateSection(12)}`
}

console.log(generateUUID());