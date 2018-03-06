// Returns a boolean determining if the passed value is primitive or not.

// Use Array.includes() on an array of type strings which are not primitive, supplying the type using typeof.
// Since typeof null evaluates to 'object', it needs to be directly compared.

const isPrimitive = (val) => !['object', 'function'].includes(typeof val) || val === null

// console.log(isPrimitive(null), isPrimitive(50), isPrimitive(Symbol('sym')), isPrimitive((xy) => xy), isPrimitive([]))

exports.isPrimitive = isPrimitive
