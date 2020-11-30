// Given the following data structure, write some code that returns an object where the key is the first item in each subarray, and the value is the second.

let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

function obj(arr) {
  let newObj = {};
  arr.forEach(array1 => {
     newObj[array1[0]] = array1[1];
  })
  return newObj;
}

console.log(obj(arr));

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }