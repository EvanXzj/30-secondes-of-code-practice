// Returns true if the given value is a number, false otherwise.

// Use !isNaN() in combination with parseFloat() to check if the argument is a number.
// Use isFinite() to check if the number is finite. Use Number() to check if the coercion holds.

const isNumber = (value) => !isNaN(parseFloat(value)) && isFinite(value) && Number(value) === value

// console.log(isNumber(10), isNumber('a'), isNumber('10'), isNumber('10a'))

exports.isNumber = isNumber
