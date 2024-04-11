module.exports = {
  rules: [],
  validate(value) {
    for(rule of this.rules) {
      const result = rule(value)
      if (result !== true)
        return result
    }
    return true
  },
  warn(value) {
    const result = this.validate(value)
    return (result === true)
      ? void(0)
      : result || true
  },
  assert(value) {
    const result = this.warn(value)
    if (result) {
      // TODO: case when result is object
      // TODO: case when result is error
      const message = (typeof result === 'string')
        ? result
        : 'validation error'
      throw new TypeError(message)
    }
  },
  custom(rule) {
    this.rules.push(rule)
    return this
  },
}