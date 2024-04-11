const inherit = require("./inherit")

module.exports = new Proxy({}, {
  get: (target, property) => {
    const proto = target[property]
    if (!proto) {
      throw new TypeError(`type '${property}' is not defined`)
    }
    return () => inherit(proto)
  },
  set(target, property, value) {
    // TODO: value should be validator instance
    // TODO: if value is function then wrap up by validator
    target[property] = value
  }
})
