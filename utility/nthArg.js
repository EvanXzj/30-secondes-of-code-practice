// Creates a function that gets the argument at index n. If n is negative, the nth argument from the end is returned.
// Use Array.slice() to get the desired argument at index n

const nthArg = (nth) => (...args) => args.slice(nth)[0]

exports.nthArg = nthArg
