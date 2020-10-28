const rlsync = require("readline-sync");
const log = message => console.log(message);

log("Enter a number:");
let num1 = parseInt(rlsync.question());

log("Enter a second number:");
let num2 = parseInt(rlsync.question());

if (Number.isNaN(num1) || Number.isNaN(num2)) {
  log("That is not a number.")
} else {
log(`${num1} + ${num2} = ${num1 + num2}`);
log(`${num1} - ${num2} = ${num1 - num2}`);
log(`${num1} * ${num2} = ${num1 * num2}`);
log(`${num1} / ${num2} = ${num1 / num2}`);
log(`${num1} % ${num2} = ${num1 % num2}`);
log(`${num1} ** ${num2} = ${num1 ** num2}`);
}