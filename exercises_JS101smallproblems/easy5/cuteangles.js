// Write a function that takes a floating point number representing an angle between 0 and 360 degrees, 
// and returns a string representing that angle in degrees, minutes, and seconds. You should use a degree symbol (˚) to represent degrees, a single quote (') 
// to represent minutes, and a double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.

function dms(number) {
  if (number % 10 === 0) {
    console.log(number + `°00'00"`);
    return number + `°00'00"`;
  }
  
  let degrees = Math.floor(number).toString();
  
  let minutes = Math.floor((number % 1) * 60).toString();
  
  let seconds = Math.floor((((number % 1) * 60) % 1 * 60)).toString();
  
  
  // Pad Zeroes
  
  if (minutes.length !== 2) {
    minutes = '0' + minutes;
  }
  
  if (seconds.length !== 2) {
    seconds = '0' + seconds;
  }
  
  // 
  
  
  console.log(`${degrees}°${minutes}'${seconds}"`);
  
  return `${degrees}°${minutes}'${seconds}"`;
  
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"