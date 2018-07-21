// Let an array of repeating elements
const array = [1, 2, 3, 4, 5, 4, 1, 7, 2];

// Construct a Set with the given array
// Use the spread operator(...) to get space-seperated elements

// To put that in an array
// Just put straight brackets around it
// const result = [...new Set(array)];

console.log(...new Set(array));

// It logs the non-recurring elements
