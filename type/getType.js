// Returns the native type of a value.
// Returns lowercased constructor name of value, "undefined" or "null" if value is undefined or null.
const getType = (val) => (val === undefined ? 'undefined' : val === null ? 'null' : val.constructor.name.toLowerCase())

// console.log(
//   getType(new Set([1, 2, 3])),
//   getType(new Map([['a', 'b'], ['c', 'd']])),
//   getType(Number(10)),
//   getType(String('abc')),
//   getType(10),
//   getType('abc'),
//   getType([1, 2, 3])
// )

exports.getType = getType
