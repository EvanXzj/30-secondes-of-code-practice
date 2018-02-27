const {nthArg} = require('../utility/nthArg')

test('nthArg test', () => {
  expect(nthArg(2)('a', 'b', 'c')).toBe('c')
  expect(nthArg(2)('a', 'b')).toBe(undefined)
})
