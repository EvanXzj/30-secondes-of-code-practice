const unionBy = (arr1, arr2, fn) => {
  const set = new Set(arr1.map((val) => fn(val)))

  return Array.from(new Set([...arr1, ...arr2.filter((val) => !set.has(fn(val)))]))
}

// console.log(unionBy([2.1], [1.2, 2.3], Math.floor))

exports.unionBy = unionBy
