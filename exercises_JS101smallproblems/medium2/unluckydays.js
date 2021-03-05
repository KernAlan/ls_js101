// Some people believe that Fridays that fall on the 13th day of the month are considered to be unlucky days. Write a
// function that takes a year as an argument, and returns the number of Friday the 13ths in that year. You may assume that the year is greater
// than 1752, which is when the United Kingdom adopted the modern Gregorian Calendar. You may also 
// assume that the same calendar will remain in use for the foreseeable future.

// Itierate over 12 months
// Store each day in array
// Count how many Fridays are in the Array

function fridayThe13ths(year) {
  let fridayCounter = 0;
  
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  for (let month = 0; month < months.length; month++) {
    let date = new Date(`${months[month]} 13, ${year}`);
    if (date.getDay() === 5) {
      fridayCounter += 1;
    }
  }
  
  return fridayCounter;
  
}

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2