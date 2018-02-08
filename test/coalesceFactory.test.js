const {coalesceFactory} = require('../utility/coalesceFactory')

const fn = (val) => val > 5

const customCoalesce = coalesceFactory(fn)

test('coalesceFactory', () => {
  expect(customCoalesce(1, 2, 7, 4, 2)).toBe(7)
})
