// Returns the index of the last element for which the provided function returns a truthy value.

// Use Array.map() to map each element to an array with its index and value.
// Use Array.filter() to remove elements for which fn returns falsey values, Array.slice(-1) to get the last one.

const findLastIndex = (arr, fn) =>
  arr
    .map((val, index) => [index, val])
    .filter((val) => fn(val[1], val[0], arr))
    .slice(-1)[0][0]

// console.log(findLastIndex([1, 2, 3, 4], (n) => n % 2 === 1))

exports.findLastIndex = findLastIndex
