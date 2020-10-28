// Set an iterator 10 times
// Output the string
// Add a space in the next iteration plus the string
// Add another space to last string
// Repeat until 10 iterations

let string = "The Flintstones Rock!";
console.log(string);
for (let i = 0; i < 11; i++) {
  string = " " + string;
  console.log(string);
}