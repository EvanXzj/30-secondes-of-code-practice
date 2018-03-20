// Returns every element that exists in any of the two arrays once.

const union = (arr1, arr2) => [...new Set([...arr1, ...arr2])]

// console.log(union([1, 2, 3], [4, 3, 2]))

exports.union = union
