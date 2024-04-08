const basic = require("./basic")


const types = {
  'any': Object.create(basic),
  'boolean': () => {},
  'number': () => {},
  'string': () => {},
  'array': () => {},
  'object': () => {},
}

const is = new Proxy(types, {
  get: (target, property) => {
    const proto = target[property]
    if (!proto) {
      throw new TypeError(`type '${property}' is not defined`)
    }
    console.log(property, 'proto.rules', proto.rules)
    const instance = Object.create(proto)
    instance.rules = [...proto.rules]
    return instance
  }
})

function define() {}

module.exports = {
  is,
  define,
}