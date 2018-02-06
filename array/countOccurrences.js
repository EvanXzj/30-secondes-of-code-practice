// Counts the occurrences of a value in an array.
// Use Array.reduce() to increment a counter each time you encounter the specific value inside the array.

const countOccurrences = (arr, val) => {
  return arr.reduce((acc, v) => {
    return v === val ? acc + 1 : acc + 0
  }, 0)
}

exports.countOccurrences = countOccurrences
