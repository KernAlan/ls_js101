function prompt(message) {
  console.log(message);
}

const rlsync = require('readline-sync');

prompt("What is your name?");
let name = rlsync.question();

if (name.includes('!')) {
  name = name.replace(/!/, '').toUpperCase();
  prompt(`HELLO ${name}. WHY ARE WE SCREAMING?`);
} else {
  prompt(`Hello, ${name}.`);
}