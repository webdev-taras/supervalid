const is = require("../is")

module.exports = is.any()
  .custom(value =>
    (typeof value === 'boolean') || `Should be a type of 'boolean'`)
