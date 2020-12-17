// joinOr([1, 2, 3]);               // => "1, 2, or 3"
// joinOr([1, 2, 3], '; ');         // => "1; 2; or 3"
// joinOr([1, 2, 3], ', ', 'and');  // => "1, 2, and 3"
// joinOr([]);                      // => ""
// joinOr([2]);                     // => "5"
// joinOr([1, 2]);                  // => "1 or 2"

// if input array is empty, return an empty string
// if input array only has one value, return that value as a string
// if input array has exactly two values, return those values separated by the join word; don't use delimiter
// if input array has three or more values, return the concatenation of all of the values as follows:
// Add the delimiter between each pair of values
// Add the join word before the last value

function joinOr(array, delimiter, conjunction) {
  delimiter = ', ';
  conjunction = 'or';
  
  if (array.length === 0) {
    return '';
  }
  
  if (array.length === 1) {
    return array.join();
  }
  
  if (array.length > 1 && array.length < 3) {
    return array.join(` ${conjunction} `);
  }
  
  if (array.length > 2) {
    return array.slice(0, array.length - 1).join(delimiter) + `${delimiter}${conjunction} ${array[array.length - 1]}`
  }

  
}

  
console.log(joinOr([1, 2, 3]));
console.log(joinOr([1, 2, 3], '; '));
console.log(joinOr([1, 2, 3], ', ', 'and'));
console.log(joinOr([]));
console.log(joinOr([2]));
console.log(joinOr([1, 2]));