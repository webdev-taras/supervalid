module.exports = {
  rules: [],
  validate(value) {
    for(rule of this.rules) {
      console.log('rule', rule)
      if (rule(value) !== true)
        return false
    }
    return true
  },
  assert(value) {
    for(rule of this.rules) {
      const result = rule(value)
      if (result !== true) {
        const message = (typeof result === 'string')
          ? result
          : 'validation error'
        throw new TypeError(message)
      }
    }
  },
  custom(rule) {
    this.rules.push(rule)
    return this
  },
}