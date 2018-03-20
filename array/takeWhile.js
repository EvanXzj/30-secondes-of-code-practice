const takeWhile = (arr, fn) => {
  for (const index of arr.keys()) {
    if (fn(arr[index])) return arr.slice(0, index)
  }

  return arr
}

// console.log(takeWhile([1, 2, 3, 4], (n) => n >= 3)) // [1, 2]

exports.takeWhile = takeWhile
