const rlsync = require("readline-sync");
function prompt(text) { console.log(""); }

// The calculation formula

let monthlyPayment;
let loanAmount;
let apr;
let loanDurationYears;
let interestRateMonthly;
let loanDurationMonths;

function calculator(loanAmount, interestRateMonthly, loanDurationMonths) {
  monthlyPayment = loanAmount * (interestRateMonthly / (1 - Math.pow((1 + interestRateMonthly), (-loanDurationMonths))));
  return monthlyPayment.toFixed(2);
}

// User inputs

function userInputs() {
  prompt('What is the loan amount?')
  loanAmount = Number.parseFloat(rlsync.question());
  
  prompt('What is the APR? Type as percentage. (i.e. if 5%, input 5)')
  apr = Number.parseFloat(rlsync.question() / 100) ;
  loanDurationYears = Number.parseFloat(rlsync.question("What is the loan duration in years?\n"));

// Our converted variables from inputs

  interestRateMonthly = apr / 12;
  loanDurationMonths = loanDurationYears * 12;
  return calculator(loanAmount, interestRateMonthly, loanDurationMonths);

}

// Answer log

let finalAnswer = userInputs();

console.log(`Your monthly payment will be $${finalAnswer} \n`);

// Loop

let userInput = rlsync.question('Would you like to enter a new calculation? Enter \'yes\' or \'no\'\n ')
while (userInput === "yes") {
  let loanAmount = Number.parseFloat(rlsync.question("What is the loan amount?\n"));
  
  let apr = Number.parseFloat(rlsync.question("What is the APR? e.g. if 5%, enter \'5\'\n")) / 100;
  
  let loanDurationYears = Number.parseFloat(rlsync.question("What is the loan duration in years?"));
}