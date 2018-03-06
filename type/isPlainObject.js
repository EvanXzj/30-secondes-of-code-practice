// Checks if the provided value is an object created by the Object constructor.

// Check if the provided value is truthy,
// use typeof to check if it is an object and Object.constructor to make sure the constructor is equal to Object.
const isPlainObject = (val) => Boolean(val && typeof val === 'object' && val.constructor === Object)

// console.log(isPlainObject({ab: 1}), isPlainObject(new Map()))

exports.isPlainObject = isPlainObject
