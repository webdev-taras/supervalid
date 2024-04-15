const is = require("../is")

module.exports = is.any()
  .custom(value =>
    Number.isFinite(value) || `Should be a type of 'float'`)
