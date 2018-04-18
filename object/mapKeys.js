// Creates an object with keys generated by running the provided function for each key and the same values as the provided object.

// Use Object.keys(obj) to iterate over the object's keys.
// Use Array.reduce() to create a new object with the same values and mapped keys using fn.

const mapKeys = (obj, fn) =>
  Object.keys(obj).reduce((acc, key) => {
    acc[fn(obj[key], key, obj)] = obj[key]

    return acc
  }, {})

// console.log(mapKeys({a: 1, b: 2}, (val, key) => key + val))
// { a1: 1, b2: 2 }

exports.mapKeys = mapKeys
