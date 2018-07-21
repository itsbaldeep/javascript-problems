// Let an input which is a palindrome
// It is same as spelt backwards
// It can be a number or a string, try 787, 1221, etc.
const input = "noon";

// toString() method allows us to use string prototype methods
// split() method makes an array of each character
// reverse() method reverses the array
// join() method joins all elements of array

// If the result is same as what we started with
// Then it is a palindrome
// Else it is not a palindrome
console.log(
  input
    .toString()
    .split("")
    .reverse()
    .join("") == input
    ? "It is Palindrome"
    : "It is not Palindrome"
);

// It logs the message
