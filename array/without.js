const without = (arr, ...args) => arr.filter((val) => !args.includes(val))

// console.log(without([2, 1, 2, 3], 1, 2))

exports.without = without
