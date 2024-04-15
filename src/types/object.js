const is = require("../is")

const object = is.any()
object.rules.push(value =>
  (value != null && typeof value === 'object') || `Should be a type of 'object'`)

object.props = function(params) {
  for (const prop in params) {
    this.rules.push(value => params[prop].warn(value[prop]) ?? true)
  }
  return this
}

module.exports = object
