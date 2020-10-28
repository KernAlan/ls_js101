/*
input: the object ages
ouput: the ages object all added up in a single number

algorithm:
   - initialize a function
   - loop through the object with for in
   - for each iteration, add the value to a variable counter
*/

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let counter = 0;

for (let element in ages) {
  counter = ages[element] += counter;
}
console.log(counter);