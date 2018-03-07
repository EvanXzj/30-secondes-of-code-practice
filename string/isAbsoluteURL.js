// Returns true if the given string is an absolute URL, false otherwise.

// Use a regular expression to test if the string is an absolute URL.
const rexp = /^[a-z][a-z0-9+.-]*:/
const isAbsoluteURL = (str) => rexp.test(str)

// console.log(
//   isAbsoluteURL('https://google.com'),
//   isAbsoluteURL('ftp://www.myserver.net'),
//   isAbsoluteURL('/foo/bar'),
//   isAbsoluteURL('asdf://asdfjalsdf')
// )

exports.isAbsoluteURL = isAbsoluteURL
