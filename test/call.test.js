const {call} = require('../adapter/call')

Promise.resolve([1, 2, 3])
  .then(call('map', (x) => x * 2))
  .then(console.log) //[ 2, 4, 6 ]

const map = call.bind(null, 'map')
Promise.resolve([1, 2, 3])
  .then(map((x) => 2 * x))
  .then(console.log) //[ 2, 4, 6 ]
