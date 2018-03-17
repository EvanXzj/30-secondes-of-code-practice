// Returns true if the provided predicate function returns true for at least one element in a collection, false otherwise.

// Use Array.some() to test if any elements in the collection return true based on fn. Omit the second argument, fn, to use Boolean as a default.

const any = (arr, fn = Boolean) => arr.some(fn)

// console.log(any([0, 0, 1]), any([0, 1, 2, 0, 3], (val) => val > 2))

exports.any = any
