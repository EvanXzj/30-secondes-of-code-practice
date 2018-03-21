// Returns the nth element of an array.

const nthElement = (arr, nth = 0) => (nth > 0 ? arr.slice(nth, nth + 1) : arr.slice(nth))[0]

// console.log(nthElement([1, 2, 3], 1))
// console.log(nthElement([1, 2, 3], 2))
// console.log(nthElement([1, 2, 3], -1))

exports.nthElement = nthElement
