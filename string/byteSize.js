// Browser
// Returns the length of a string in bytes.
// Convert a given string to a Blob Object and find its size.

const byteSize = (str) => new Blob([str]).size

// console.log(byteSize('😀'), byteSize('Hello World'))

exports.byteSize = byteSize
