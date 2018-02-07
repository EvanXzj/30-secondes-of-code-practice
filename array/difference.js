// Returns the difference between two arrays
// Create a Set from arr2, then use Array.filter() on arr1 to only keep values not contained in arr2.

const difference = (arr1, arr2) => {
  const set = new Set(arr2)

  return arr1.filter((val) => !set.has(val))
}

exports.difference = difference
