// Creates an object from the given key-value pairs.

// Use Array.reduce() to create and combine key-value pairs.

const objectFromPairs = (arr) => arr.reduce((acc, val) => ((acc[val[0]] = val[1]), acc), {})

// console.log(objectFromPairs([['a', 1], ['b', 2]]))

exports.objectFromPairs = objectFromPairs
