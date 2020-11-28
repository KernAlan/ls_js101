// Given the following data structure write some code to return an array containing 
// the colors of the fruits and the sizes of the vegetables. The sizes should be uppercase, and the colors should be capitalized.

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let arr = Object.values(obj).map(prop => {
  if (prop['type'] === "fruit") {
    return prop['colors'].map(prop2 => prop2[0].toUpperCase() + prop2.slice(1));
  } else {
    return prop['size'].toUpperCase();
  }
})


console.log(arr);

// output: [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]