// input: string
// output: that string converted to number
// algo: 
  // split the string into pieces
  // test each piece to determine what number it is
  // put the corresponding number into a new holder
  // log the holder
// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570); // logs true



function stringToInteger(string) {
  const DIGITS = {
    0 : 0,
    1 : 1,
    2 : 2,
    3 : 3,
    4 : 4,
    5 : 5,
    6 : 6,
    7 : 7,
    8 : 8,
    9 : 9,
   }
  let numbers = 0;
  let result = 0;
  let stringArray = string.split("");
  stringArray = stringArray.forEach(el => {
    numbers = DIGITS[el];
    result = (result * 10) + numbers;
  })
  return result;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true