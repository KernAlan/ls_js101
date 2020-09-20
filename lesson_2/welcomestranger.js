function greetings(array, object) {
  let newArray = array.join(' ');
  return `Hello, ${newArray}! Nice to have a ${object.title} ${object.occupation} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);