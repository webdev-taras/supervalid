const is = require("../is")

const proto = is.any()
proto.rules.push(value =>
  (value instanceof Date && !isNaN(value.getTime())) || `Should be a type of 'date'`)

module.exports = proto
