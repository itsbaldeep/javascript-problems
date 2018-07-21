// Let input be any integer or string
const input = 565;

// toString() allows us to have string prototype methods
// split() method makes an array of all characters
// reverse() method reverses the array
// join() method makes a string out of array
console.log(
  input
    .toString()
    .split("")
    .reverse()
    .join("")
);

// It logs the reversed input
