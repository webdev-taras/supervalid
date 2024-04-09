const is = require("../is")

const object = is.any()
object.rules.push(value =>
  (typeof value === 'object' && value != null) || `Should be a type of 'object'`)

module.exports = object
