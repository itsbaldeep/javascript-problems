// Let a function named convert which has parameter of template literals
// 1. literals are the strings
// 2. args are the values of ${arg}
const convert = (literals, ...args) => {
    // We let j to loop through args
    let j = 0;

    // Simply returing the answer
    // literals is the array of strings
    // args is the array of args values
    return literals
        // Mapping each literal(string) with the args value
        .map(i => args[j] ? i + args[j++] : i)
        // Joining the array to get single line of result
        .join("");
};

// Example of getting area and perimeter of a square
// Let side constant to be 10
const s = 10;

// We log the convert function with template literal as an argument
console.log(convert`Area is ${s * s} and the Perimeter is ${4 * s}.`);

// This logs the same answer as
// console.log(`Area is ${s*s} and the Perimeter is ${4*s}`);
