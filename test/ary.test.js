const {ary} = require('../adapter/ary')
const firstTwoMax = ary(Math.max, 2)

const result = [[2, 4, 'a'], [6, 4, 10], [8, 7, 10]].map((x) => {
  return firstTwoMax(...x)
})

console.log(result)
