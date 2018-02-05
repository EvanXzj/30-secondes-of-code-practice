/*
 * @Author: Evan 
 * @Date: 2018-02-05 17:56:12 
 * @Last Modified by: Evan
 * @Descripton: Creates a function that accepts up to n arguments, ignoring any additional arguments.
 * @Last Modified time: 2018-02-05 18:04:12
 */

const ary = (fn, n) => {
  return (...args) => {
    return fn(...args.slice(0, n))
  }
}

module.exports = {
  ary
}
