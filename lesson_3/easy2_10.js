let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
let regexp = /t/g;

console.log(statement1.match(regexp).length);
console.log(statement2.match(regexp));