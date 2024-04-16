const { ValidationError } = require('./errors')

module.exports = {
  rules: [],
  custom(rule) {
    this.rules.push(rule)
    return this
  },
  validate(value) {
    return this.warn(value) === undefined
  },
  warn(value) {
    for(const rule of this.rules) {
      const result = rule(value)
      if (result !== true)
        return result
    }
  },
  assert(value) {
    const result = this.warn(value)
    if (result !== undefined) {
      let reason, message
      if (typeof result === 'string') {
        message = result
      } else {
        reason = result
      }
      // TODO: case when reason is object
      // TODO: case when reason is error
      throw new ValidationError({ message, reason, value })
    }
  },
}