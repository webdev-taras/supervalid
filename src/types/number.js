const is = require("../is")

const number = is.any()
number.rules.push(value =>
  (typeof value === 'number' && !isNaN(value)) || `Should be a type of 'number'`)

module.exports = number
