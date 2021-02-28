// Write a function that implements a miniature stack-and-register-based programming language that has the following commands (also called operations or tokens):

// n : Place a value, n, in the register. Do not modify the stack.
// PUSH : Push the register value onto the stack. Leave the value in the register.
// ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
// SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
// MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
// DIV : Pop a value from the stack and divide it into the register value, storing the integer result in the register.
// MOD : Pop a value from the stack and divide it into the register value, storing the integer remainder of the division in the register.
// POP : Remove the topmost item from the stack and place it in the register.
// PRINT : Print the register value.
// All operations are integer operations (which is only important with DIV and MOD).

// Programs will be supplied to your language function via a string argument. Your function may assume that all arguments are valid programs — i.e.,
// they will not do anything like trying to pop a non-existent value from the stack, and they won't contain any unknown tokens.

// Initialize the stack and register to the values [] and 0, respectively.

// ALGORITHM:
// split the string into an array
// test each value of the array to see what operation it is
// initialize a set of conditional expressions that will execute depending on what the value of the array is

function minilang(string) {
  let stack = [];
  let register = 0;
  
  let array = string.split(" ");
  
  for (let i = 0; i < array.length; i++) {
    if (!Number.isNaN(Number(array[i]))) {
      register = Number(array[i]);
    }
    
    if (array[i] === 'PUSH') {
      stack.push(register);
    }
    
    if (array[i] === 'ADD') {
      register += Number(stack.pop());
    }
    
    if (array[i] === 'SUB') {
      register -= Number(stack.pop());
    }
    
    if (array[i] === 'MULT') {
      register *= Number(stack.pop());
    }
    
    if (array[i] === 'DIV') {
      register = Math.floor(register / Number(stack.pop()));
    }
    
    if (array[i] === 'MOD') {
      register = register % Number(stack.pop());
    }
    
    if (array[i] === 'POP') {
      register = Number(stack.pop());
    }
    
    if (array[i] === 'PRINT') {
      console.log(register);
    }
  }
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)