// Binds methods of an object to the object itself, overwriting the existing method.

// Use Array.forEach() to return a function that uses Function.apply() to apply the given context (obj) to fn for each function specified.

const bindAll = (obj, ...fns) => fns.forEach((fn) => ((f = obj[fn]), (obj[fn] = () => f.apply(obj))))

exports.bindAll = bindAll
