/*
 * Idea of this algorithm is too approach the problem as:
 * Convert each Duration to Seconds
 * Add all Seconds
 * Convert Seconds to HH:MM:SS -> Result
 * Return Result
 */

const addTime = durs => {

	// Convert HH:MM:SS to total seconds
	const sum = durs.reduce((a, dur) => a + dur.split(":").reduce((a, t) => 60 * a + +t), 0);

	// Convert total seconds to HH:MM:SS
	const time = [Math.floor(sum / 3600), Math.floor(sum / 60) % 60, sum % 60];

	// Return HH:MM:SS
	return time.map(t => ("00" + t).slice(-2)).join(":");

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
