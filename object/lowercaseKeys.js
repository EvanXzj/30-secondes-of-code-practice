const lowercaseKeys = (obj) =>
  Object.keys(obj).reduce((acc, key) => {
    acc[key.toLocaleLowerCase()] = obj[key]

    return acc
  }, {})

// const myObj = {Name: 'Adam', sUrnAME: 'Smith'}
// const myObjLower = lowercaseKeys(myObj)

// console.log(myObjLower)
// { name: 'Adam', surname: 'Smith' }

exports.lowercaseKeys = lowercaseKeys
