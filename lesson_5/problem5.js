// Compute and display the total age of the male members of the family.

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let munstersArray = Object.values(munsters);
let totalAge = 0;

for (let i = 0; i < munstersArray.length; i += 1) {
  if (munstersArray[i].gender === 'male') {
    totalAge += munstersArray[i].age;
  }
}

console.log(totalAge);