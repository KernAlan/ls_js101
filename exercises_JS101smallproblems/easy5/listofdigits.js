// Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.

function digitList(int) {
  let arr = [];
  
  int.toString().split("").forEach(element => arr.push(Number(element)));
  
  console.log(arr);
  
  return arr;
}

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]