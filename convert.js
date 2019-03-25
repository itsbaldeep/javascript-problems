/*
 * The decimal (base 10) to hexadecimal (base 16) conversion function
 * @param   int     any decimal number
 * @return  string  a string containing the result of conversion
 */

function convert(decimal) {
    // Make an array to hold all chars
    const hex = []

    // Looping till decimal isn't 0
    while (decimal != 0) {
        // Diving the decimal by 16, and keeping track of remainder
        const remainder = decimal % 16
        decimal = Math.floor(decimal / 16)

        // Making ASCII out of remainder
        // 48 = 0, 49 = 1, ... 57 = 9
        // 97 = a, 98 = b, ... 103 = f
        const ascii = remainder < 10 ? 48 + remainder : 87 + remainder
        
        // Getting char from ASCII and pushing it to the array
        const char = String.fromCharCode(ascii)
        hex.push(char)
    }
    // Returning the array "reversed" as a "string"
    return hex.reverse().join('')
}

// Taking a decimal input to work with
const input = 123456

// Printing both our output and the JavaScript's own API output
console.log(`The manual convert function: ${convert(input)}`)
console.log(`The JavaScript's toString method: ${input.toString(16)}`)
