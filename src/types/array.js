const is = require("../is")

const array = is.any()
array.custom(value =>
  Array.isArray(value) || `Should be a type of 'array'`)

array.of = function(params = is.any()) {
  this.custom(value => {
    for(const element of value) {
      const result = params.warn(element)
      if (result !== undefined)
        return result
    }
    return true
  })
  return this
}

module.exports = array
