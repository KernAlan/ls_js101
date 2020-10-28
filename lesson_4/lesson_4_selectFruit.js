let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(obj) {
  let newObj = {};
  let arr = Object.keys(obj);
  
  for (let i = 0; i < arr.length; i++) {
    let currentKey = arr[i];
    let currentValue = obj[currentKey];
    
    if (currentValue === "Fruit") {
      newObj[currentKey] = currentValue;
   }
  }
  return newObj;
}

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }