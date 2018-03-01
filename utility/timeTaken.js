const timeTaken = (fn) => {
  console.time('timeTaken')
  const result = fn()
  console.timeEnd('timeTaken')

  return result
}

// console.log(timeTaken(() => Math.pow(2, 10)))
// timeTaken: xxx
// result

exports.timeTaken = timeTaken
