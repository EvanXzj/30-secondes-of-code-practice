const {difference} = require('../array/difference')

const arr1 = ['a', 'b', 'c', 'd']
const arr2 = ['a', 'b']

test(`# difference between ${arr1} and ${arr2} `, () => {
  const expected = ['c', 'd']
  expect(difference(arr1, arr2)).toEqual(expect.arrayContaining(expected))
})
