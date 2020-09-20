let readlineSync = require("readline-sync");

function tipCalc() {
  let bill = parseFloat(readlineSync.question("What is the bill?\n"))
  let rate = parseFloat(readlineSync.question("What is the percentage tip rate?\n"));
  
  let tip = bill * (rate / 100);
  let total = (bill + tip).toFixed(2);
  return `The tip is ${tip} and the total is ${total}`;
}

console.log(tipCalc())