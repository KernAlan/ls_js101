// As seen in the previous exercise, the time of day can be represented as the number of minutes before or after midnight. 
// If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

// Write two functions that each take a time of day in 24 hour format, and return the number of minutes before and after midnight, respectively. 
// Both functions should return a value in the range 0..1439.

// You may not use javascript's Date class methods.

const MIDNIGHT = 0;
const MINS_TO_MIDNIGHT = 1440;
const HOURS_TO_MINS = 60;

function beforeMidnight(time) {
  if (time === "00:00" || time === "24:00") {
    return 0;
  } else {
  return MINS_TO_MIDNIGHT - afterMidnight(time);
  }
}

function afterMidnight(time) {
  time = time.split(":");
  
  let minutes = Number(time[1]);
  let hours = Number(time[0]);
  
  minutes += (hours * HOURS_TO_MINS);
  
  if (minutes === MINS_TO_MIDNIGHT) {
    return 0;
  } else {
  return minutes;
  }
}


console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);