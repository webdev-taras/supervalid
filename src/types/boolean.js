const is = require("../is")

const boolean = is.any()
boolean.rules.push(value =>
  (typeof value === 'boolean') || `Should be a type of 'boolean'`)

module.exports = boolean
