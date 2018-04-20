// Creates an array of key-value pair arrays from an object.

// Use Object.keys() and Array.map() to iterate over the object's
// keys and produce an array with key-value pairs.

const objectToPairs = (obj) => Object.keys(obj).map((key) => [key, obj[key]])

// console.log(objectToPairs({a: 1, b: 2}))

exports.objectToPairs = objectToPairs
