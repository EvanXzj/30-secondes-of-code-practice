const {deepFlatten} = require('../array/deepFlatten')

test('# deepFlatten [[1, 2], 3] into [1, 2, 3]', () => {
  const expected = [1, 2, 3]
  expect(deepFlatten([[1, 2], 3])).toEqual(expect.arrayContaining(expected))
})
