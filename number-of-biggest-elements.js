// Let an array of multiple biggest elements
const array = [3, 2, 1, 3];

// Filtering the array
// Keep those elements which are equal to the biggest element
// Biggest element is calculated using max method
// Get the length of the filtered array
console.log(array.filter(i => i == Math.max(...array)).length);

// It logs the number of biggest elements in the array
