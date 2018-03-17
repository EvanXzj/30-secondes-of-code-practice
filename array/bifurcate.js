// Splits values into two groups. If an element in filter is truthy, the corresponding element in the collection belongs to the first group;
// otherwise, it belongs to the second group.

// Use Array.reduce() and Array.push() to add elements to groups, based on filter.

const bifurcate = (arr, filter) =>
  arr.reduce((acc, val, index) => (acc[filter[index] ? 0 : 1].push(val), acc), [[], []])

// console.log(bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]))

exports.bifurcate = bifurcate
