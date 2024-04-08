const { test } = require('node:test')
const { ok } = require('node:assert/strict')

const validator = require('../src/validator')
const { is } = require('../src')

test('any instanceof validator', t => {
  ok(typeof is.any === 'function')
  ok(Object.getPrototypeOf(Object.getPrototypeOf(is.any())) === validator)
})

test('any.validate()', t => {
  const schema = is.any()
    .custom(value => value != null)
    .custom(value => typeof value === 'string')
    .custom(value => value.length > 3)

  ok(schema.validate('qwerty'))
  ok(schema.validate('blablabla'))
  ok(!schema.validate(null))
  ok(!schema.validate(3))
  ok(!schema.validate('no'))
})