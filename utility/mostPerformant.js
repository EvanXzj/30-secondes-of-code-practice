const iteration = 10000

const mostPerformant = (fns, iterations = iteration) => {
  const times = fns.map((fn) => {
    const before = Date.now()

    for (let it = 0; it < iterations; it++) fn()

    return Date.now() - before
  })

  return times.indexOf(Math.min(...times))
}

// console.log(
//   mostPerformant([
//     () => [1, 2, 3, 4, 5, 6, 7, 8, 9, '10'].every((el) => typeof el === 'number'),
//     () => [1, '2', 3, 4, 5, 6, 7, 8, 9, 10].every((el) => typeof el === 'number')
//   ])
// )

exports.mostPerformant = mostPerformant
