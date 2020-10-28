let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let agesArr = Object.values(ages);
let smallestNum = Math.min(...agesArr);
for (let elem in ages) {
  if (ages[elem] === smallestNum) {
    console.log(`The smallest age is ${elem}'s which is ${ages[elem]}.`)
  }
}