// Clones a regular expression
// Use new RegExp(), RegExp.source and RegExp.flags to clone the given regular expression

const cloneRegExp = (regExp) => new RegExp(regExp.source, regExp.flags)

exports.cloneRegExp = cloneRegExp
