// Converts the values of RGB components to a color code.
// Convert given RGB parameters to hexadecimal string
// using bitwise left-shift operator (<<) and toString(16), then String.padStart(6,'0') to get a 6-digit hexadecimal value.

const RGBToHex = (red, green, blue) => ((red << 16) + (green << 8) + blue).toString(16).padStart(6, '0')

// console.log(RGBToHex(255, 165, 1), RGBToHex(1, 165, 255))

exports.RGBToHex = RGBToHex
