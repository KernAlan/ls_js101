let numbers = [1, 2, 3, 4, 5];
let numbersCopy = numbers.slice().reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]
console.log(numbersCopy);

let numbers2 = [1, 2, 3, 4, 5];
let numbers2Copy = numbers2.sort((num1, num2) => num2 - num1);
console.log(numbers2Copy); // [ 5, 4, 3, 2, 1 ]

