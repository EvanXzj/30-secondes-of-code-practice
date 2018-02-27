// Returns an object containing the parameters of the current URL.
// Use String.match() with an appropriate regular expression to get all key-value pairs,
// Array.reduce() to map and combine them into a single object.Pass location.search as the argument to apply to the current url.
const ZERO = 0
const ONE = 1
const getUrlParameters = (url) =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (acc, value) => ((acc[value.slice(ZERO, value.indexOf('='))] = value.slice(value.indexOf('=') + ONE)), acc),
    {}
  )

exports.getUrlParameters = getUrlParameters
