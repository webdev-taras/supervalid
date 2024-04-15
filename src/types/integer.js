const is = require("../is")

const number = is.any()
number.rules.push(value =>
  Number.isSafeInteger(value) || `Should be a type of 'integer'`)

module.exports = number
