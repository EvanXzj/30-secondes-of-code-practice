const {countBy} = require('../array/countBy')

console.log(countBy([6.1, 4.2, 6.3], Math.ceil)) // {5: 1, 7: 2}
console.log(countBy(['one', 'two', 'three'], 'length')) // {3: 2, 5: 1}
