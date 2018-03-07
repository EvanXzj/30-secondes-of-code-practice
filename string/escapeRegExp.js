const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

exports.escapeRegExp = escapeRegExp
