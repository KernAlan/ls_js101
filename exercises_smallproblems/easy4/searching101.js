// Write a program that solicits six numbers from the user, then logs a message that describes whether or not the sixth number appears amongst the first five numbers.

// input: 6 numbers
// output: string to console that tells user if 6th number is among the first 5

const rlsync = require("readline-sync");

let arr = [];

for (let i = 0; i <= 5; i++) {
  let endings = { 0 : 'st', 1 : 'nd', 2 : 'rd', 3 : 'th', 4 : 'th', 5 : 'th', 6 : 'th'};
  
  console.log(`Enter the ${i + 1}${endings[i]} number:`);
  let num = rlsync.question();
  
  arr.push(num);
}

let firstFive = arr.slice(0, 4);

if (firstFive.includes(arr[5])) {
  console.log(`The number ${arr[5]} appears in ${arr.join(",")}`);
}

if (!firstFive.includes(arr[5])) {
  console.log(`The number ${arr[5]} does not appear in ${arr.join(",")}`);
}