const is = require("../is")

module.exports = s.any()
  .custom(value =>
    (value instanceof RegExp) || `Should be a type of 'regexp'`)
