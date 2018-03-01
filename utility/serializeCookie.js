// Serialize a cookie name-value pair into a Set-Cookie header string.

// Use template literals and encodeURIComponent() to create the appropriate string.

const serializeCookie = (name, value) => `${encodeURIComponent(name)}=${encodeURIComponent(value)}`

// console.log(serializeCookie('foo', 'bar'))  //foo=bar
// console.log(serializeCookie('foo  ', 'bar')) //foo%20%20=bar
// console.log(serializeCookie('徐志坚', 'test')) //%E5%BE%90%E5%BF%97%E5%9D%9A=test

exports.serializeCookie = serializeCookie
