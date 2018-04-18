const forOwnRight = (obj, fn) =>
  Object.keys(obj)
    .reverse()
    .forEach((key) => fn(obj(key), key, obj))

exports.forOwnRight = forOwnRight
