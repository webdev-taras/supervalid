const is = require("../is")

module.exports = is.any()
  .custom(value =>
    (typeof value === 'bigint') || `Should be a type of 'bigint'`)
