// A triangle is classified as follows:

// Equilateral: All three sides are of equal length.
// Isosceles: Two sides are of equal length, while the third is different.
// Scalene: All three sides are of different lengths.
// To be a valid triangle, the sum of the lengths of the two shortest sides must be great
// er than the length of the longest side, and every side must have a length greater than 0. If either of t
// hese conditions is not satisfied, the triangle is invalid.

// Write a function that takes the lengths of the three sides of a triangle as arguments, and returns one of t
// he following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

function triangle(side1, side2, side3) {
  let array = [side1, side2, side3];
  array.sort();
  
  if ((array[0] === 0) || (array[0] + array[1]) < array[2]) {
    return 'invalid';
  } else if ((array[0] === array[1]) && (array[0] === array[2])) {
    return 'equilateral';
  } else if ((array[0] !== array[1]) && (array[0] !== array[2]) && (array[1] !== array[2])) {
    return 'scalene';
  } else {
    return 'isosceles';
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"