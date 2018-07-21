// Let a function stairs which takes parameter n
// n here is representing the length and height of stairs

stairs = n => {
  // Reversed for loop from n down to 0
  for (let i = n; i > 0; i--)
    // Empty Space is repeated lesser and lesser times each loop
    // Number Sign is repeated more and more times each loop
    console.log(" ".repeat(i - 1) + "#".repeat(n - i + 1));
  // Log empty space and number sign each loop
};

// Call the function with argument of any number
stairs(5);

// It logs the stairs with length of given argument
