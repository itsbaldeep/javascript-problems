/*
 * Idea of this algorithm is too approach the problem as:
 * Durations -> [Duration, Duration, ...]
 * Duration -> [HH, MM, SS]
 * Add each HH, MM, SS Indivudually
 * Return the sum
 */

const addTime = durations => {
	// Make sum array as [hh,mm,ss]
	let sum = Array(3).fill(0);
	for (let duration of durations) {
		// Get [hh,mm,ss] from input
		duration = duration.split(":").map(e => parseInt(e));
		for (let i = duration.length - 1; i >= 0; i--) {
			// Add hh, mm, ss to sum array
			sum[i] += duration[i];
			// Carry over any >= 60 values
			if (sum[i] >= 60 && i != 0) {
				sum[i] %= 60;
				sum[i - 1]++;
			}
		}
	}
	// Format to add "0" in case of single number
	for (let e of sum) sum[sum.indexOf(e)] = ("00" + e).slice(-2);
	return sum.join(":");
};

// Make an array of durations
const inputs = [
	"3:13:45",
	"2:35:04",
	"1:17:37",
	"2:48:14",
	"1:48:49",
	"3:38:22",
	"2:26:56",
	"4:02:48",
	"1:54:08",
	"2:07:34"
];

// Call the function and log result
const result = addTime(inputs);
console.log(result);
