// Capitalizes the first letter of every word in a string.

// Use String.replace() to match the first character of each word and String.toUpperCase() to capitalize it.

const capitalizeEveryWord = (str) => str.replace(/\b[a-z]/g, (char) => char.toUpperCase())

// console.log(capitalizeEveryWord('what is your goal'))

exports.capitalizeEveryWord = capitalizeEveryWord
