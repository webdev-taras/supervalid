const is = require("../is")

const proto = is.any()
proto.rules.push(value =>
  (typeof value === 'function') || `Should be a type of 'function'`)

module.exports = proto
