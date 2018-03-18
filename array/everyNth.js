const everyNth = (arr, nth) => arr.filter((_val, index) => index % nth === nth - 1)

// console.log(everyNth([1, 2, 3, 4, 5, 6], 2), everyNth([1, 2, 3, 4, 5, 6], 3))

exports.everyNth = everyNth
