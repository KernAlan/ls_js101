// Using the forEach method, write some code to output all vowels from the strings in the arrays. Don't use a for or while loop.

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

function isVowel(char) {
    return /^[aeiou]$/.test(char.toLowerCase());
}

let container = Object.values(obj);

let vowels = [];

container.forEach(element => {
  element.forEach(element2 => {
    let arrayVowels = element2.split("");
    arrayVowels.forEach(element3 => {
      if (isVowel(element3) === true) vowels.push(element3);
    })
    }
  )}
)

console.log(vowels);