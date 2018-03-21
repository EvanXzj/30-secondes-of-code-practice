const minN = (arr, nth = 1) => [...arr].sort((v1, v2) => v1 - v2).slice(0, nth)

exports.minN = minN
