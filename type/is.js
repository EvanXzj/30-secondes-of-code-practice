// Checks if the provided value is of the specified type (doesn't work with literals)
// Use the instanceof operator to check if the provided value is of the specified type.

const is = (val, type) => val instanceof type

console.log(
  is([1], Array),
  is(new ArrayBuffer(), ArrayBuffer),
  is(new Map(), Map),
  is(new Set(), Set),
  is('abc', String)
)
