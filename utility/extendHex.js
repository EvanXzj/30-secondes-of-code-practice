// Extends a 3-digit color code to a 6-digit color code.

const ZERO = 0
const ONE = 1

const extendHex = (shortHex) =>
  `#${shortHex
    .slice(shortHex.startsWith('#') ? ONE : ZERO)
    .split('')
    .map((val) => val + val)
    .join('')}`

exports.extendHex = extendHex
