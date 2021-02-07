// Write a function that takes a string as argument, and returns true if all parentheses in the string are properly balanced, 
// false otherwise. To be properly balanced, parentheses must occur in matching '(' and ')' pairs.

function isBalanced(string) {
  let mismatch = 0;
  let leftCount = 0;
  let rightCount = 0;
  let stringArr = string.split("");
  
  for (let i = 0; i < stringArr.length; i++) {
    if (stringArr[i].includes('(')) { 
      leftCount += 1;
      mismatch += 1;
      for (let j = i + 1; j < stringArr.length; j++) {
        if (stringArr[j].includes(')')) {
          mismatch -= 1;
          break;
       }
     }
    }
    if (stringArr[i].includes(')')) rightCount += 1;
  }
  if (leftCount !== rightCount) return false;
  if (mismatch === 0) return true;
  if (mismatch !== 0) return false;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);