// test each character to see if it's capital or not
// reverse the capital or not capital
// return that into a new string

let munstersDescription = "The Munsters are creepy and spooky.";

let newStringArr = munstersDescription.split('');
for (let i = 0; i < newStringArr.length; i += 1){
  if (newStringArr[i] !== newStringArr[i].toUpperCase()) {
    newStringArr[i] = newStringArr[i].toUpperCase();
  } else {
    newStringArr[i] = newStringArr[i].toLowerCase();
  }
}

let finalString = newStringArr.join("");

console.log(finalString);