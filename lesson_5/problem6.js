// Given this previously seen family object, print the name, age, and gender of each family member:

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

let munstersKeys = Object.keys(munsters);

for (let i = 0; i < munstersKeys.length; i += 1) {
  let name = munstersKeys[i];
  let age = munsters[munstersKeys[i]].age;
  let gender = munsters[munstersKeys[i]].gender;
  console.log(`${name} is a ${age}-year-old ${gender}.`)
}