// Assigns default values for all properties in an object that are undefined.

// Use Object.assign() to create a new empty object and copy the original one to maintain key order,
// use Array.reverse() and the spread operator ... to combine the default values from left to right,
// finally use obj again to overwrite properties that originally had a value.

const defaults = (obj, ...defs) => Object.assign({}, obj, ...defs.reverse(), obj)

exports.defaults = defaults
