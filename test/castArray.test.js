const {castArray} = require('../utility/castArray')

describe('# CastArray Test', () => {
  it(`1#  castArray('a') should return ['a']`, () => {
    expect(castArray('a')).toContain('a')
  })

  it(`2# castArray(['b']) should return ['b']`, () => {
    expect(castArray(['b'])).toContain('b')
  })
})
