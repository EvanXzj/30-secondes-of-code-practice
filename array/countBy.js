/* 
* Groups the elements of an array based on the given function and returns the count of elements in each group. 
* Use Array.map() to map the values of an array to a function or property name.
* Use Array.reduce() to create an object, where the keys are produced from the mapped results. 
* */

const countBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : (val) => val[fn]).reduce((acc, value, index) => {
    acc[value] = (acc[value] || 0) + 1
    return acc
  }, {})

exports.countBy = countBy
