// Let a function convert with parameter s
const convert = s => {
  // Split the hours, minutes and seconds to an array
  const time = s.split(":");
  // Remove AM/PM from the seconds
  time[2] = time[2][0] + time[2][1];
  // Make sure hours are less than 12
  time[0] = time[0] == 12 ? 0 : parseInt(time[0]);
  // If time is PM then add 12 to hours
  time[0] += s.toLowerCase().indexOf("pm") > -1 ? 12 : 0;
  // Formatting (Optional)
  time[0] = time[0].toString().length == 1 ? "0" + time[0] : time[0];
  // Logging the result
  console.log(time.join(":"));
};

// Call the convert function with any time as argument
convert("08:24:10PM");

// It logs the 24-hour formatted time
