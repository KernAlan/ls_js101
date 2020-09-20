const rlSync = require('readline-sync');
const prompt = message => console.log(`=> ${message}`);
const MESSAGES = require('./calculator_messages.json');

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(MESSAGES['welcome']);

while(true) {
  prompt(`What's the first number?`);
  let number1 = rlSync.question();
  while (invalidNumber(number1)) {
    prompt(MESSAGES['invalidNo']);
    number1 = rlSync.question();
  }
  
  prompt("What's the second number?");
  let number2 = rlSync.question();
  while (invalidNumber(number2)) {
    prompt(MESSAGES['invalidNo']);
    number2 = rlSync.question();
  }
  
  prompt(MESSAGES['operation']);
  let operation = rlSync.question();
  while (invalidNumber(operation)) {
    prompt(MESSAGES['invalidOp']);
    operation = rlSync.question();
  }

  let result;
  if (operation === '1') {
    result = parseInt(number1, 10) + parseInt(number2, 10);
  } else if (operation === '2') {
    result = parseInt(number1, 10) - parseInt(number2, 10);
  } else if (operation === '3') {
    result = parseInt(number1, 10) * parseInt(number2, 10);
  } else if (operation === '4') {
    result = parseInt(number1, 10) / parseInt(number2, 10);
  } else {
    prompt(MESSAGES['operation']);
    operation = rlSync.question();
  }

  prompt(`The result is: ${result}\n`);
  
  prompt(MESSAGES['restart']);
  let restartCalculator = rlSync.question().toLowerCase();
  while (restartCalculator !== 'y' && restartCalculator !== 'n') {
    prompt(MESSAGES['invalidOp']);
    restartCalculator = rlSync.question();
  }
    if (restartCalculator !== 'y') break;
}