const is = require("../is")

module.exports = is.any()
  .custom(value =>
    (value instanceof Date && !isNaN(value.getTime())) || `Should be a type of 'date'`)
