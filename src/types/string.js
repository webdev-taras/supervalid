const is = require("../is")

const string = is.any()
string.rules.push(value =>
  (typeof value === 'string') || `Should be a type of 'string'`)

module.exports = string
