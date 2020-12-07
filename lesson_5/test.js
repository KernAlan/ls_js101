let array = [
  [1, 2, 3],
  [5, 6, 7],
  [4, 8, 9]
  ]

for (let i = 0; i < array.length; i++) {
  if (array[i].includes(4)) {
    console.log('yes')
  } else {
    console.log('no')
  }
}