/*
 * General formula for any row, any direction, any length
 * n - i - 1 spaces and 2 * i + 1 asterisks
 */

function astPattern(n=3, up=false) {
    // If it's facing up
    if (up) for (let i = 0; i < n; i++) 
        console.log(' '.repeat(n - i - 1) + '*'.repeat(2 * i + 1))
    // If it's facing down
    else for (let i = n - 1; i >= 0; i--) 
        console.log(' '.repeat(n - i - 1) + '*'.repeat(2 * i + 1))
}

// Number of rows
const n = 3

// Drawing the pattern in both facing positions
astPattern(n)
astPattern(n, true)
