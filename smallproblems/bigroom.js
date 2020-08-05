let readlineSync = require("readline-sync");

let type = readlineSync.question('Enter your unit of measure: meters or feet? ').toLowerCase()

let length = readlineSync.question("Enter the length of the room: ");
let width = readlineSync.question("Enter the width of the room: ");

function calculateArea(length, width) {
  let areaSquareMeters = length * width;
  if (type === 'meters') {
    return `The area of the room is ${areaSquareMeters} square meters.`;
  } else {
    let areaSquareFeet = areaSquareMeters * 10.7639;
    return `The area of the room is ${areaSquareFeet} square feet.`;
}
}

console.log(calculateArea(length, width));