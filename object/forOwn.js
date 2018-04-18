const forOwn = (obj, fn) => Object.keys(obj).forEach((key) => fn(obj[key]), key, obj)

exports.forOwn = forOwn
