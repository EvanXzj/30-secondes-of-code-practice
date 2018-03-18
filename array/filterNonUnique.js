// Filters out the non-unique values in an array.
// Use Array.filter() for an array containing only the unique values

const filterNonUnique = (arr) => arr.filter((val) => arr.indexOf(val) === arr.lastIndexOf(val))

// console.log(filterNonUnique([1, 2, 2, 3, 4, 4, 5]))

exports.filterNonUnique = filterNonUnique
