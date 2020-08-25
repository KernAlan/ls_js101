const rlSync = require('readline-sync');
console.log('Welcome to Calculator!');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function calculator() {
  let number1 = rlSync.question(prompt("What's the first number?\n"));
  while (invalidNumber(number1)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number1 = rlSync.question();
  }

  let number2 = rlSync.question(prompt("What's the second number?\n"));
  while (invalidNumber(number2)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number2 = rlSync.question();
  }

  let operation = rlSync.question(prompt("What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide"));
  while (invalidNumber(operation)) {
    prompt("Hmm... that doesn't look like a valid number.");
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
    prompt('Hmm, something went wrong. Try again.');
    calculator();
  }

  console.log(prompt(`The result is: ${result}`));
}

calculator();
