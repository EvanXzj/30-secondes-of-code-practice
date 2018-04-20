// Creates a new object from the combination of two or more objects.

// Use Array.reduce() combined with Object.keys(obj) to iterate over all objects and keys.
// Use hasOwnProperty() and Array.concat() to append values for keys existing in multiple objects.

const merge = (...objs) =>
  [...objs].reduce(
    (acc, obj) =>
      Object.keys(obj).reduce((_ac, key) => {
        acc[key] = acc.hasOwnProperty(key) ? [].concat(acc[key]).concat(obj[key]) : obj[key]

        return acc
      }, {}),
    {}
  )

// const object = {
//   a: [{x: 2}, {y: 4}],
//   b: 1
// }
// const other = {
//   a: {z: 3},
//   b: [2, 3],
//   c: 'foo'
// }
// console.log(merge(object, other))

exports.merge = merge
