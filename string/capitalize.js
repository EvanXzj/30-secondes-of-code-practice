// Capitalizes the first letter of a string.
// Use array destructuring and String.toUpperCase() to capitalize first letter,
// ...rest to get array of characters after first letter and then Array.join('') to make it a string again.
//  Omit the lowerRest parameter to keep the rest of the string intact, or set it to true to convert to lowercase.

const capitalize = ([first, ...rest], lowerRest = false) =>
  first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''))

// console.log(capitalize('fooBar'), capitalize('fooBarZoo', true))

exports.capitalize = capitalize
