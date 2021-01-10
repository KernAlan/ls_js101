// Build a program that logs when the user will retire and how many more years the user has to work until retirement.

// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!

let rlsync = require("readline-sync");

console.log(`What is your age?`);
let age = Number(rlsync.question());

console.log(`At what age would you like to retire?`);
let retirementAge = Number(rlsync.question());

let year = 2021;

let retirementYear = year + (retirementAge - age);

let yearsToGo = retirementYear - year;

console.log(`It's 2021. You will retire in ${retirementYear}. \nYou only have ${yearsToGo} years of work to go!`);