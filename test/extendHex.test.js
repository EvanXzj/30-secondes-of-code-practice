const {extendHex} = require('../utility/extendHex')

describe('extendHex', () => {
  it(`1# extendHex('#03f') should equal to #0033ff`, () => {
    expect(extendHex('#03f')).toBe('#0033ff')
  })

  it(`2# extendHex('05a') should equal to #0055aa`, () => {
    expect(extendHex('05a')).toBe('#0055aa')
  })
})
