const {cloneRegExp} = require('../utility/cloneRegExp')

test(`cloneRegExp(/lorem ipsum/gis) should return /lorem ipsum/gis`, () => {
  expect(cloneRegExp(/lorem ipsum/gis)).toBe(/lorem ipsum/gis)
})
