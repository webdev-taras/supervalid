class ValidationError extends TypeError {
  constructor({
    reason,
    message,
    value,
    path = '',
    code = '',
  }) {
    super(message ?? 'Validation Error')
    this.reason = reason != null ? JSON.stringify(reason) : undefined
    this.value = JSON.stringify(value)
    this.path = path
    this.code = code
  }
}
ValidationError.prototype.name = 'ValidationError'

module.exports = { ValidationError }
