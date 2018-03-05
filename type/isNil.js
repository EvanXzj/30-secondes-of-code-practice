// Returns true if the specified value is null or undefined, false otherwise.
// Use the strict equality operator to check if the value and of val are equal to null or undefined.

const isNil = (val) => val === undefined || val === null

// console.log(isNil(undefined), isNil(null), isNil(false))

exports.isNil = isNil
