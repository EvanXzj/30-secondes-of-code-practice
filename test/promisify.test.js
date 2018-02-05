const {promisify} = require('../adapter/promisify')

const settime = (t, cb) => {
  return setTimeout(cb, t)
}

const delay = promisify(settime)

delay(2000).then(() => console.log('Hi!')) // Promise resolves after 2s
