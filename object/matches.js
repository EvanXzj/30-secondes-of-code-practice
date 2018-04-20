// Compares two objects to determine if the first one contains equivalent property values to the second one.

// Use Object.keys(source) to get all the keys of the second object, then Array.every(),
// Object.hasOwnProperty() and strict comparison to determine if all keys exist in the first object and have the same values.

const matches = (obj, source) => Object.keys(source).every((key) => obj.hasOwnProperty(key) && obj[key] === source[key])

// console.log(matches({age: 25, hair: 'long', beard: true}, {hair: 'long', beard: true}))
// console.log(matches({hair: 'long', beard: true}, {age: 25, hair: 'long', beard: true}))

exports.matches = matches
