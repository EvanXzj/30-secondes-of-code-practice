// Parse an HTTP Cookie header string and return an object of all cookie name-value pairs.

// Use String.split(';') to separate key-value pairs from each other.
// Use Array.map() and String.split('=') to separate keys from values in each pair.
// Use Array.reduce() and decodeURIComponent() to create an object with all key-value pairs.

const parseCookie = (str) =>
  str
    .split(';')
    .map((val) => val.split('='))
    .reduce((acc, value) => {
      acc[decodeURIComponent(value[0].trim())] = decodeURIComponent(value[1].trim())

      return acc
    }, {})

// console.log(parseCookie('foo=bar; equation=E%3Dmc%5E2'))

exports.parseCookie = parseCookie
