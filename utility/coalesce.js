// Returns the first non-null/undefined argument
// Use Array.find() to return the first non null/undefined argument.
let unde

const coalesce = (...args) => args.find((value) => ![null, unde].includes(value))

exports.coalesce = coalesce
