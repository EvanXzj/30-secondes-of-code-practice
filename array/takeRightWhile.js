const takeRigthWhile = (arr, fn) => {
  for (const index of arr.reverse().keys()) {
    if (fn(arr[index])) return arr.reverse().slice(-index)
  }

  return arr
}

// console.log(takeRigthWhile([1, 2, 3, 4], (x) => x < 3))

exports.takeRigthWhile = takeRigthWhile
