function asciiValue(string) {
  let i = 0;
  let value = 0;
  while (i < string.length) {
    value = value + string.charCodeAt(i);
    i += 1;
  }
  console.log(value);
  return value;
}

asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0