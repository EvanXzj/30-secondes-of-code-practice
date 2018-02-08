// Casts the provided value as an array if it's not one

const castArray = (value) => (Array.isArray(value) ? value : [value])

exports.castArray = castArray
