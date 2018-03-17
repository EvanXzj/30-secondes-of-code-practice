// Returns a new array with n elements removed from the left.

// Use Array.slice() to slice the remove the specified number of elements from the left.

const drop = (arr, nth = 1) => arr.slice(nth)

exports.drop = drop
