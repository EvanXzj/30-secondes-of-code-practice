const longestItem = (...vals) => [...vals].sort((val1, val2) => val2.length - val1.length)[0]

// console.log(longestItem('a', '1312', 'sadfaf', '1'))

exports.longestItem = longestItem
