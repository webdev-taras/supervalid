const is = require("../is")

const array = is.any()
array.rules.push(value =>
  Array.isArray(value) || `Should be a type of 'array'`)

module.exports = array
