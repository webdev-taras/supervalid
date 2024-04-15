const validator = require("../validator")
const inherit = require("../inherit")

const any = inherit(validator)

any.required = function() {
  this.custom(value =>
    (value != null) || 'Value is required')
  return this
}

module.exports = any
