function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }
  return false;
}

function threePeriods(array) {
  let counter = 0;
  let splitArray = array.split("");
  for (let i = 0; i < splitArray.length; i += 1) {
    if (splitArray[i] === ".") {
      counter += 1
    }
  } if (counter === 3) {
    return true;
  } else return false;
}

function isDotSeparatedIpAddress(inputString) {
  if (threePeriods(inputString) === false) {
    return false;
}
  let dotSeparatedWords = inputString.split(".");
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}

console.log(isDotSeparatedIpAddress("10.4.5.11"))
console.log(isDotSeparatedIpAddress("4.5.5"))
console.log(isDotSeparatedIpAddress("1.2.3.4.5"))