const is = require("../is")

const regexp = is.any()
regexp.rules.push(value =>
  (value instanceof RegExp) || `Should be a type of 'regexp'`)

module.exports = regexp
