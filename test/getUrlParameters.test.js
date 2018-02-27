const {getUrlParameters} = require('../utility/getUrlParameters.js')

describe('getUrlParameters Test', () => {
  it('#1 ', () => {
    const result = {name: 'Adam', surname: 'Smith'}
    expect(getUrlParameters('http://url.com/page?name=Adam&surname=Smith')).toEqual(result)
  })

  it('#2', () => {
    const result = {}
    expect(getUrlParameters('http://www.baidu.com')).toEqual(result)
  })
})
