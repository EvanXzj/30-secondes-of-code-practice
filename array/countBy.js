/*
* Groups the elements of an array based on the given function and returns the count of elements in each group.
* Use Array.map() to map the values of an array to a function or property name.
* Use Array.reduce() to create an object, where the keys are produced from the mapped results.
* */
const ZERO = 0
const ONE = 1

const countBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : (val) => val[fn]).reduce((acc, value) => {
    acc[value] = (acc[value] || ZERO) + ONE

    return acc
  }, {})

exports.countBy = countBy
