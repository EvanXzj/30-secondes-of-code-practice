// Take a number and return specified currency formatting.

// Use Intl.NumberFormat to enable country / currency sensitive formatting.

const toCurrency = (num, curr, LanguageFormat) =>
  Intl.NumberFormat(LanguageFormat, {style: 'currency', currency: curr}).format(num)

// console.log(toCurrency(123456.789, 'EUR')) // €123,456.79  | currency: Euro | currencyLangFormat: Local

exports.toCurrency = toCurrency
