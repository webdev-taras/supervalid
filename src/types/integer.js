const is = require("../is")

module.exports = is.any()
  .custom(value =>
    Number.isSafeInteger(value) || `Should be a type of 'integer'`)
