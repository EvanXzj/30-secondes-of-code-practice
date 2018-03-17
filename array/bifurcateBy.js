const bifurcateBy = (arr, fn) => arr.reduce((acc, val, index) => (acc[fn(val, index) ? 0 : 1].push(val), acc), [[], []])

// console.log(bifurcateBy(['beep', 'boop', 'foo', 'bar'], (x) => x[0] === 'b'))
// console.log(bifurcateBy(['beep', 'boop', 'foo', 'bar'], (x, index) => index % 2 === 0))

exports.bifurcateBy = bifurcateBy
