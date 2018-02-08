const {coalesce} = require('../utility/coalesce')

test('coalesce', () => {
  expect(coalesce(null, undefined, 'Evan')).toBe('Evan')
})
