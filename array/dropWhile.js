// Removes elements in an array until the passed function returns true. Returns the remaining elements in the array.

// Loop through the array, using Array.slice() to drop the first element of the array until the returned value from the function is true. Returns the remaining elements.

const dropWhile = (array, func) => {
  let arr = array
  while (arr.length > 0 && !func(arr[0])) {
    arr = arr.slice(1)
  }

  return arr
}

// console.log(dropWhile([1, 2, 3, 4], (n) => n >= 3))

exports.dropWhile = dropWhile
