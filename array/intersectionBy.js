const intersectionBy = (arr1, arr2, fn) => {
  const set = new Set(arr2.map((val) => fn(val)))

  return arr1.filter((val) => set.has(val))
}

exports.intersectionBy = intersectionBy
