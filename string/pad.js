// Pads a string on both sides with the specified character, if it's shorter than the specified length.
// Use String.padStart() and String.padEnd() to pad both sides of the given string.
// Omit the third argument, char, to use the whitespace character as the default padding character.

const pad = (str, length, char = ' ') => str.padStart((str.length + length) / 2, char).padEnd(length, char)

// console.log(pad('cat', 8, '_'), pad(String(42), 6, '0'), pad('foobar', 3))

exports.pad = pad
