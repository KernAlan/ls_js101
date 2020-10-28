let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

function check(objectTest) {
  if (Array.isArray(objectTest)) {
    return true;
  } else return false;
}

console.log(check(numbers));
console.log(check(table));