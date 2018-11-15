// Days of the week
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// getDay function
function getDay(month, date, year) {
  // Doomsdays in the year
  // 4 Jan and 29 Feb if it's a leap year
  const doomsdays = [-1, year % 4 == 0 ? 4 : 3, year % 4 == 0 ? 29 : 28, 14, 4, 9, 6, 11, 8, 5, 10, 7, 12];

  // Getting the century index
  // Initializing the main index
  let c = Math.floor(year / 100) % 4;
  let index = c == 1 ? 0 : c == 2 ? 5 : c == 3 ? 3 : 2;

  // Adding the alogithm logic to main index
  // Quotient by 12, It's remainder and It's quotient by 4
  index += Math.floor((year % 100) / 12);
  index += (year % 100) % 12;
  index += Math.floor(((year % 100) % 12) / 4);

  // Finding the current date through closest doomsday
  index += date;
  index -= doomsdays[month];

  // Returning the index converted to day
  return days[index % 7];
}

// Example - November 15, 2018
const result = getDay(11, 15, 2018);
console.log(result);
// Prints Thursday

// Since javascript has the Date class built in
// This results the same thing but in one line
// Note that you have to decrement the month index
// So november is 10, december is 11...
const index = new Date(2018, 10, 15).getDay();
const native_result = days[index];
console.log(native_result);
// Prints thursday
