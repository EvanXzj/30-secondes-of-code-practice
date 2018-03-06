// Checks if the provided argument is a valid JSON.

// Use JSON.parse() and a try... catch block to check if the provided argument is a valid JSON.

const isValidJSON = (val) => {
  try {
    JSON.parse(val)

    return true
  } catch (error) {
    return false
  }
}

console.log(isValidJSON('{"name":"Adam","age":20}'), isValidJSON('{"name":"Adam",age:"20"}'), isValidJSON(null))

exports.isValidJSON = isValidJSON
