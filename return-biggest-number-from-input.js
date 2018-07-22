// Using the core module readline
// Creating interface with commandline IO
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

// Using the question method of readline interface
// Passing message as first argument
// Passing callback function as second argument
readline.question("Type in the elements seperated by ' ': ", d => {
  // Take the input, split it as an array
  // Spread the array using ...
  // Log the maximum number from that
  console.log(`The biggest number is: ${Math.max(...d.split(" "))}`);

  // Close the readline to return back to the commandline
  readline.close();
});

// It prompts for input of space seperated numbers
// And logs the maximum of those numbers
