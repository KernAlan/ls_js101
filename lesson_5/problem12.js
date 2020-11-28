let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let newArr = arr.map(element => {
  return element.filter(digit => digit % 3 === 0)
})

console.log(newArr);