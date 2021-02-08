// Write a function that counts the number of occurrences of each element in a given array. 
// Once counted, log each element alongside the number of occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").

function countOccurrences(array) {
  let obj = {};
  
  array.forEach(element => {
    if (!obj[element]) {
      obj[element] = 1;
    } else {
      obj[element] += 1;
    }
  });
  
  for (let idx = 0; idx < Object.keys(obj).length; idx++) {
    let keys = Object.keys(obj);
    let values = Object.values(obj);
    console.log(`${keys[idx]} => ${Number(values[idx])}`);
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2