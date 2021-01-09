/*
input: year number
output: string that begins with century number and ends with 'st,' 'nd', 'rd,' 'th'

algo:

divide by 100 and floor the value
convert number to string
initiate object with endings
read last number and assign ending
return string
*/

function century(year) {
  let century = Math.ceil(year / 100).toString();
  
  let endings = {
    0 : 'th',
    1 : 'st',
    2 : 'nd',
    3 : 'rd',
    4 : 'th',
    5 : 'th',
    6 : 'th',
    7 : 'th',
    8 : 'th',
    9 : 'th'
  };
  
  let lastTwo = Number(century.slice(century.length - 2));
  
  if (lastTwo >= 11 && lastTwo < 20) {
    return century + 'th';
  }
  
  return century + endings[century[century.length - 1]];
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"