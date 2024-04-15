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
      // TODO: case when result is object
      // TODO: case when result is error
      const message = (typeof result === 'string')
        ? result
        : 'validation error'
      // TODO: include into error: value, path, code, params...
      throw new TypeError(message)
    }
  },
}