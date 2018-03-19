const intersectionWith = (arr1, arr2, comp) => arr1.filter((val) => arr2.findIndex((value) => comp(value, val)) !== -1)

exports.intersectionWith = intersectionWith
