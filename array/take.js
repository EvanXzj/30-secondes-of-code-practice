// Returns an array with n elements,removed from the beginning.

// Use Array.slice() to create a slice of the array with n elements taken from the beginning.

const take = (arr, num = 1) => arr.slice(0, num)

// console.log(take([1, 2, 3]), take([1, 2, 3, 4], 2))

exports.take = take
