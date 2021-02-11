// Write a function that takes a string argument, and returns a list of all substrings that start from the beginning of the string, ordered from shortest to longest.

function leadingSubstrings(string) {
  let array = [];
  for (let i = 1; i < string.length + 1; i++) {
    array.push(string.substring(0, i));
  }
  console.log(array);
  return array;
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]