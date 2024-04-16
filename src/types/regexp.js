const is = require("../is")

module.exports = is.any()
  .custom(value =>
    (value instanceof RegExp) || `Should be a type of 'regexp'`)
