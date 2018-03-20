const unionWith = (arr1, arr2, comp) =>
  Array.from(new Set([...arr1, ...arr2.filter((val) => arr1.findIndex((val2) => comp(val, val2)) !== -1)]))

// console.log(unionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)))

exports.unionWith = unionWith
