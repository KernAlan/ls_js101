// Write a function that will take a short line of text, and write it to the console log within a box.

// Algorithm ideas

// by string length

// 5 rows deep

// 4 rows wide minimum

function p(text) {
  console.log(text);
}

function logInBox(words) {
  
  let spacesNum = 0 ;
  
  if (words.length === 0) { 
    spacesNum = 0; 
  } else {
    spacesNum = words.length;
  }
  
  const dash = "-";
  const space = " ";
  
  p(`+-${dash.repeat(spacesNum)}-+`);
  p(`| ${space.repeat(spacesNum)} |`);
  p(`| ${words} |`);
  p(`| ${space.repeat(spacesNum)} |`);
  p(`+-${dash.repeat(spacesNum)}-+`);
  
}

logInBox('To boldly go where no one has gone before');
logInBox('');