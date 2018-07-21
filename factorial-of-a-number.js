// Let a function named factorial which has a parameter n

factorial = n => {
  // When parameter is 0 or less, we return 1
  if (n <= 0) return 1;
  // When paramter is more than 0
  // Return n times factorial of previous integer
  return n * factorial(n - 1);
  // This is called Recursion
};

// Call the factorial function with any integer argument
// And log it in the console
console.log(factorial(4));

// It gives the factorial of the passed argument
