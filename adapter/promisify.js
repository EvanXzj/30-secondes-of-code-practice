const promisify = (fn) => {
  return (...args) => {
    return new Promise((resolve, reject) => {
      fn(...args, (err, result) => (err ? reject(err) : resolve(result)))
    })
  }
}

module.exports = {
  promisify
}
