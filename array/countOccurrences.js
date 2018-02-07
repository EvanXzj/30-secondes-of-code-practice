// Counts the occurrences of a value in an array.
// Use Array.reduce() to increment a counter each time you encounter the specific value inside the array.
const ZERO = 0
const ONE = 1

const countOccurrences = (arr, val) => arr.reduce((acc, value) => (value === val ? acc + ONE : acc + ZERO), ZERO)

exports.countOccurrences = countOccurrences
