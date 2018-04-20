// Omits the key-value pairs corresponding to the given keys from an object.

// Use Object.keys(obj), Array.filter() and Array.includes() to remove the provided keys.
// Use Array.reduce() to convert the filtered keys back to an object with the corresponding key-value pairs.

const omit = (obj, arr) =>
  Object.keys(obj)
    .filter((key) => !arr.includes(key))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {})

// console.log(omit({a: 1, b: '2', c: 3}, ['b']))

exports.omit = omit
