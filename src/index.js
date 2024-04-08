const validator = require("./validator")


const types = {
  'any': Object.create(validator),
  'boolean': Object.create(validator),
  'number': Object.create(validator),
  'string': Object.create(validator),
  'array': Object.create(validator),
  'object': Object.create(validator),
}

const is = new Proxy(types, {
  get: (target, property) => {
    const proto = target[property]
    if (!proto) {
      throw new TypeError(`type '${property}' is not defined`)
    }
    const instance = Object.create(proto)
    instance.rules = [...proto.rules]
    return instance
  },
  set(target, property, value) {
    // TODO: value should be validator instance
    // TODO: if value if function then wrap up by validator
    target[property] = value
  }
})

module.exports = {
  is,
}