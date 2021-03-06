// Deep flattens an array:
// Use recursion. Use Array.concat() with an empty array ([]) and the spread operator (...) to flatten an array.
// Recursively flatten each element that is an array.

const deepFlatten = (arr) => [].concat(...arr.map((val) => (Array.isArray(val) ? deepFlatten(val) : val)))

exports.deepFlatten = deepFlatten
