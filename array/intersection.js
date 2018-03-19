const intersection = (arr1, arr2) => {
  const set = new Set(arr2)

  return arr1.filter((val) => set.has(val))
}

exports.intersection = intersection
