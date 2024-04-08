const basic = require("./basic")

const types = {
  'any': () => Object.create(basic),
  'boolean': () => {},
  'number': () => {},
  'string': () => {},
  'array': () => {},
  'object': () => {},
}

function is() {
  return types
}
function define() {}

module.exports = {
  is,
  define,
}