const randomHexColorCode = () => {
  const str = (Math.random() * 0xfffff * 100000).toString(16)

  return `#${str.slice(0, 6)}`
}

// console.log(randomHexColorCode())

exports.randomHexColorCode = randomHexColorCode
