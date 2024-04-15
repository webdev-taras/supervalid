const is = require("../is")

module.exports = is.any()
  .custom(value =>
    (typeof value === 'function') || `Should be a type of 'function'`)
