const is = require("../is")

const proto = is.any()
proto.rules.push(value =>
  (typeof value === 'bigint') || `Should be a type of 'bigint'`)

module.exports = proto
