// Returns true if the a value is an empty object, collection, map or set,
// has no enumerable properties or is any type that is not considered a collection.
// Check if the provided value is null or if its length is equal to 0.

const isEmpty = (val) => val == null || !(Object.keys(val) || val).length

// console.log(
//   isEmpty(new Map()),
//   isEmpty(new Set()),
//   isEmpty([]),
//   isEmpty({}),
//   isEmpty(''),
//   isEmpty([1, 2]),
//   isEmpty({ab: 1, bc: 2}),
//   isEmpty('text'),
//   // true - type is not considered a collection
//   isEmpty(123),
//   isEmpty(true)
// )

// // true - type is not considered a collection
// console.log(isEmpty(true))

exports.isEmpty = isEmpty
