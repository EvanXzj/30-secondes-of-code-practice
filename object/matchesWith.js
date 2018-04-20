const matchesWith = (obj, source, fn) =>
  Object.keys(source).every(
    (key) => (obj.hasOwnProperty(key) && fn ? fn(obj[key], source[key], key, obj, source) : obj[key] === source[key])
  )

// const isGreeting = (val) => (/^h(?:i|ello)$/).test(val)
// console.log(matchesWith({greeting: 'hello'}, {greeting: 'hi'}, (oV, sV) => isGreeting(oV) && isGreeting(sV)))

exports.matchesWith = matchesWith
