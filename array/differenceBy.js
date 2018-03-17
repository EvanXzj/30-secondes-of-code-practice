const differenceBy = (arr1, arr2, fn) => {
  const set = new Set(arr2.map((val) => fn(val)))

  return arr1.filter((val) => !set.has(fn(val)))
}

// console.log(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor), differenceBy([{x: 2}, {x: 1}], [{x: 1}], (v) => v.x))

exports.differenceBy = differenceBy
