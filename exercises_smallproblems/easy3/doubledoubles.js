// A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. 
// For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

// Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; return double numbers as-is.

function twice(num) {
  
  num = num.toString();
  
  // 1st test
  if (num.length % 2 === 0) {
    
    // 2nd test
    
    let div = num.length / 2;
    
    if (num.substring(0, div) === num.substring(div, num.length)) {
      console.log(parseInt(num, 10))
      return parseInt(num, 10);
      
    // if 2nd test fails and it's not a double
    } else {
        console.log(parseInt(num, 10) * 2)
        return parseInt(num, 10) * 2;
    }
    
  // if 1st test fails and it's not a double
  } else {
      console.log(parseInt(num, 10) * 2)
      return parseInt(num, 10) * 2;
  }

}


twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676