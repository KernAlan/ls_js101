// Modify the function from the previous exercise so it ignores non-alphabetic characters when determining whether it should uppercase or lowercase each letter. 
// The non-alphabetic characters should still be included in the return value; they just don't count when toggling the desired case.

function staggeredCase(string) {
  let split = string.split("");
  let newArr = [];
  let alphanumeric = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let counter = 0;
  
  for (let i = 0; i < split.length; i++) {
    if (!alphanumeric.includes(split[i])) {
      newArr.push(split[i]);
      continue;
    }
    
    if (counter % 2 === 0) {
      newArr.push(split[i].toUpperCase());
      counter += 1;
    } else {
      counter += 1;
      newArr.push(string[i].toLowerCase());
    } 
  }
  
  console.log(newArr.join(""));
  return newArr.join("");
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);