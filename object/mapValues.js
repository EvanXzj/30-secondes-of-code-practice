const mapValues = (obj, fn) =>
  Object.keys(obj).reduce((acc, key) => {
    acc[key] = fn(obj[key], key, obj)

    return acc
  }, {})

// const users = {
//   fred: {user: 'fred', age: 40},
//   pebbles: {user: 'pebbles', age: 1}
// }

// console.log(mapValues(users, (user) => user.age))
// { fred: 40, pebbles: 1 }

exports.mapValues = mapValues
