const sortCharacterInString = (str) => [...str].sort((val1, val2) => val1.localeCompare(val2)).join('')

// console.log(sortCharacterInString('asfbxcka'))

exports.sortCharacterInString = sortCharacterInString
