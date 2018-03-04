const isArrayLike = (val) => {
  try {
    return [...val], true
  } catch (error) {
    return false
  }
}
// const arrayLike = {
//   '0': 'a',
//   '1': 'b',
//   '2': 'c',
//   length: 3
// }

// console.log(isArrayLike('abc'), isArrayLike(arrayLike))

exports.isArrayLike = isArrayLike
