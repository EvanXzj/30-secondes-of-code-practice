const call = (key, ...args) => {
  return (context) => {
    return context[key](...args)
  }
}

module.exports = {
  call
}
