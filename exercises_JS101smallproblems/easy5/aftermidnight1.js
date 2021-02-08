// The time of day can be represented as the number of minutes before or after midnight. I
// f the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

// Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). 
// Your method should work with any integer input.

// You may not use javascript's Date class methods.

function timeOfDay(int) {
  
  let hours = 0;
  let minutes = 0;
  
  while (int !== 0) {
    
    // COUNTDOWN
    
    if (int < 0) {
      minutes -= 1;
      int += 1;
    }
    
    if (int > 0) {
      minutes += 1;
      int -= 1;
    }
    
    // CLOCK
    
    if (minutes > 59) {
      hours += 1;
      minutes = 0;
    }
    
    if (minutes < 0) {
      hours -= 1;
      minutes = 59;
    }
    
    if (hours > 23) {
      hours = 0;
    }
    
    if (hours < 0) {
      hours = 23;
    }
  }
  
  // DISPLAY
  
  console.log(`${display(hours)}:${display(minutes)}`);
  return `${display(hours)}:${display(minutes)}`;
}

function display(time) {
  if (time < 10 && time > -9) return `0${time}`;
  return time;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");