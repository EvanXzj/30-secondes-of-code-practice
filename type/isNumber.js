const isNumber = (val) => typeof val === 'number'

console.log(isNumber('1'), isNumber(1))

exports.isNumber = isNumber
