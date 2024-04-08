const inherit = require("./inherit")
const any = require("./types/any")

const types = {
  any,
  'boolean': inherit(any),
  'number': inherit(any),
  'string': inherit(any),
  'array': inherit(any),
  'object': inherit(any),
}

module.exports = new Proxy(types, {
  get: (target, property) => {
    const proto = target[property]
    if (!proto) {
      throw new TypeError(`type '${property}' is not defined`)
    }
    return () => inherit(proto)
  },
  set(target, property, value) {
    // TODO: value should be validator instance
    // TODO: if value if function then wrap up by validator
    target[property] = value
  }
})
