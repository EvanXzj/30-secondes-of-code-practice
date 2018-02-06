const {compact} = require('../array/compact')

console.log(compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34])) // [ 1, 2, 3, 'a', 's', 34 ]
