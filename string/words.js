// Converts a given string into an array of words.

// Use String.split() with a supplied pattern (defaults to non-alpha as a regexp) to convert to an array of strings.
// Use Array.filter() to remove any empty strings. Omit the second argument to use the default regexp.

const words = (str, pattern = /[^a-zA-z-]+/) => str.split(pattern).filter(Boolean)

// console.log(words('I love javaScript!!'), words('python, javaScript & coffee'))

exports.words = words
