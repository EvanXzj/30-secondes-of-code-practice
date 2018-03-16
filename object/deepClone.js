// Creates a deep clone of an object.

// Use recursion. Use Object.assign() and an empty object ({}) to create a shallow clone of the original.
// Use Object.keys() and Array.forEach() to determine which key-value pairs need to be deep cloned.

const deepClone = (obj) => {
  const clone = Object.assign({}, obj)

  Object.keys(clone).forEach((key) => (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]))

  return clone
}

// const a = { foo: 'bar', obj: { a: 1, b: 2 } };
// const b = deepClone(a); // a !== b, a.obj !== b.obj

exports.deepClone = deepClone
