// Let an empty array representing the series
let f = [];

// Base cases are 0, 1, ...
// So put the first element of array as 0
// Second element as 1
f[0] = 0;
f[1] = 1;

// For loop given number of times(15, for instance)
// In every iteration, current element is sum of previous two
for (i = 2; i <= 15; i++) f[i] = f[i - 1] + f[i - 2];

// Now simply log the array as comma and space seperated numbers
console.log(f.join());

// It logs the fibonacci series upto 15
