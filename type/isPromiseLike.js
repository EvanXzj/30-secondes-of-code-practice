// Returns true if an object looks like a Promise, false otherwise.

// Check if the object is not null,
// its typeof matches either object or function and if it has a .then property, which is also a function.

const isPromiseLike = (val) =>
  val !== null && (typeof val === 'object' || typeof val === 'function') && typeof val.then === 'function'

// console.log(
//   isPromiseLike({
//     then() {
//       return ''
//     }
//   }),
//   isPromiseLike(null),
//   isPromiseLike({})
// )

exports.isPromiseLike = isPromiseLike
