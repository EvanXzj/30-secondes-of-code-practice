// Returns a customized coalesce function that
// returns the first argument that returns true from the provided argument validation function.
// Use Array.find() to return the first argument that returns true from the provided argument validation function.

const coalesceFactory = (fn) => (...args) => args.find(fn)

exports.coalesceFactory = coalesceFactory
