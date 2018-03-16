const findKey = (obj, fn) => Object.keys(obj).find((key) => fn(obj[key]))

// fred
// console.log(
//   findKey(
//     {
//       barney: {age: 36, active: true},
//       fred: {age: 40, active: false},
//       pebbles: {age: 1, active: true}
//     },
//     (obj) => obj.active === false
//   )
// )

exports.findKey = findKey
