const rlSync = require("readline-sync");

function computeProdOrSum() {
  
  // User inputs
  let int = parseInt(rlSync.question("Enter a number greater than 0:\n"), 10);
  let choice = rlSync.question("Enter \"s\" to compute the sum, or \"p\" to compute the product:\n");
  
  // Result variables
  let sumResult = 0;
  let productResult = 1;
  
  // If integer is NaN or 0 or less
  if (Number.isNaN(int) || int <= 0) {
    console.log("Not a valid number")
    return computeProdOrSum();
}

  // For sum calculation
  if (choice === "s") {
    for (let i = 0; i < int; i++) {
      sumResult = sumResult + (i + 1);
    } 
    return `The sum of integers between 1 and ${int} is ${sumResult}`
    
  // For product calculation
    } else if (choice === "p") {
      for (let i = 0; i < int; i++) {
        productResult = productResult * (i + 1);
      }
      return `The product of integers between 1 and ${int} is ${productResult}`
      
  // If anything else is inputted besides s or p
    } else {
      console.log('That was not a correct input. Try again.')
      return computeProdOrSum()
    } 
}

console.log(computeProdOrSum())