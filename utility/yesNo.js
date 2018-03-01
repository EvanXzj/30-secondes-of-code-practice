// Returns true if the string is y/yes or false if the string is n/no.
// Use RegExp.test() to check if the string evaluates to y/yes or n/no.
// Omit the second argument, def to set the default answer as no.

const yesNo = (value, def = false) => {
  const reg1 = /^(y|yes)$/i
  const reg2 = /^(n|no)$/i
  const temp = reg2.test(value) ? false : def

  return reg1.test(value) ? true : temp
}

exports.yesNo = yesNo
