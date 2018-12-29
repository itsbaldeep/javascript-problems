/*
 * Idea of this algorithm is too approach the problem as:
 * Convert each Duration to Seconds
 * Add all Seconds
 * Convert Seconds to HH:MM:SS -> Result
 * Return Result
 */

const addTime = durations => {
	// Convert HH:MM:SS to total seconds
	let sum = 0;
	for (let dur of durations) sum += dur.split(":").reduce((a, t) => 60 * a + +t);

	// Convert total seconds to HH:MM:SS
	let time = [Math.floor(sum / 3600), Math.floor(sum / 60) % 60, sum % 60];
	for (let e of time) time[time.indexOf(e)] = ("00" + e).slice(-2);

	// Return HH:MM:SS
	return time.join(":");
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
