// Returns a new array with n elements removed from the right.

// Use Array.slice() to slice the remove the specified number of elements from the right.

const dropRight = (arr, nth = 1) => arr.slice(0, -nth)

exports.dropRight = dropRight
