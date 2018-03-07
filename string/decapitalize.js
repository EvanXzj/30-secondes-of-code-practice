const decapitalize = ([first, ...rest], upperRest = false) =>
  first.toLowerCase() + (upperRest ? rest.join('').toUpperCase() : rest.join(''))

// console.log(decapitalize('FooBar'), decapitalize('Foobar', true))

exports.decapitalize = decapitalize
