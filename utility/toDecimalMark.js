// Use toLocaleString() to convert a float-point arithmetic to the Decimal mark form.It makes a comma separated string from a number.

const toDecimalMark = (num) => num.toLocaleString('en-US')

// console.log(toDecimalMark(123456789.123456)) //23,456,789.123

exports.toDecimalMark = toDecimalMark
