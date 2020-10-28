// Given a number and an array, determine whether the number is included in the array.

let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

function determine(number) {
  if (numbers.includes(number)) {
    return true;
  } else return false;
}

console.log(determine(8));
console.log(determine(95));