// Let any number to test
const number = 153;

// Let a variable representing sum of cubes of each digit
// Initialize with 0 as a default case
let sumOfCubes = 0;

// For loop from 0 upto the length of number
for (let i = 0; i < number.toString().length; i++)
  // Multiply each digit thrice to get the cube
  // Then increment sumOfCubes variable with that cube
  sumOfCubes +=
    number.toString()[i] * number.toString()[i] * number.toString()[i];

// If the sumOfCubes variable is same as the original number
// Then it is an armstrong number
// Otherwise, it is not
console.log(sumOfCubes == number ? "Armstrong" : "Not Armstrong");

// It simply logs the message
