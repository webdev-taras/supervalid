const is = require("../is")

module.exports = is.any()
  .custom(value =>
    (typeof value === 'string') || `Should be a type of 'string'`)
