/*
 * @Author: Evan
 * @Date: 2018-02-05 17:56:12
 * @Last Modified by: Evan
 * @Descripton: Creates a function that accepts up to n arguments, ignoring any additional arguments.
 * @Last Modified time: 2018-02-07 16:32:14
 */
const ZERO = 0

const ary = (fn, size) => (...args) => fn(...args.slice(ZERO, size))

module.exports = {
  ary
}
