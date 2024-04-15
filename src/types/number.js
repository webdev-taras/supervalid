const is = require("../is")

module.exports = is.any()
  .custom(value =>
    (typeof value === 'number' && !isNaN(value)) || `Should be a type of 'number'`)
