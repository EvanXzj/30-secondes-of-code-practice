const maxN = (arr, num = 1) => [...arr].sort((v1, v2) => v2 - v1).slice(0, num)

// console.log(maxN([1, 2, 3]), maxN([1, 2, 3], 2))

exports.maxN = maxN
