// Given the following data structure, write some code to return an array which contains only the objects where all the numbers are even.

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

function evenTest(number) {
  if (number % 2 === 0) {
    return true;
  } else return false;
}

let newArr = []

arr.forEach(obj => {
  for (let arrNum in obj) {
    obj[arrNum].forEach(num => {
      if (evenTest(num) === true) {
        newArr.push(num);
      }
    })
  }
})

console.log(newArr);