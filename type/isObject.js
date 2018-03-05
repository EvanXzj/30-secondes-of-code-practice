const isObject = (val) => val === Object(val)

// console.log(isObject(false), isObject({}), isObject({ab: 1}))

exports.isObject = isObject
