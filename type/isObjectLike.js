// Checks if a value is object-like.

// Check if the provided value is not null and its typeof is equal to 'object'.

const isObjectLike = (val) => val !== null && typeof val === 'object'

exports.isObjectLike = isObjectLike
