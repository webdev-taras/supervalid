const { test } = require('node:test')
const { ok, equal, deepEqual, throws } = require('node:assert/strict')

const validator = require('../../src/validator')
const { is } = require('../../src')

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

test('any.warn()', t => {
  const schema = is.any()
    .custom(value => value != null || 'Value is required')
    .custom(value => typeof value === 'string')
    .custom(({ length }) => length > 3 || { length, message: 'length should be > 3' })

  equal(schema.warn('qwerty'), undefined)
  equal(schema.warn(null), 'Value is required')
  equal(schema.warn(3), false)
  deepEqual(schema.warn('no'), { length: 2, message: 'length should be > 3' })
})

test('any.assert()', t => {
  const schema = is.any()
    .custom(value => value != null)
    .custom(value => typeof value === 'string')
    .custom(value => (value.length > 3) ? true : 'length should be > 3')

  schema.assert('qwerty')
  throws(
    () => schema.assert(3),
    {
      name: 'TypeError',
      message: 'validation error',
    },
  )
  throws(
    () => schema.assert('no'),
    {
      name: 'TypeError',
      message: 'length should be > 3',
    },
  )
})

test('any.required()', t => {
  const schema = is.any().required()

  ok(schema.validate('qwerty'))
  ok(schema.validate(1))
  equal(schema.warn(undefined), 'Value is required')
  equal(schema.warn(null), 'Value is required')
  throws(
    () => schema.assert(),
    {
      name: 'TypeError',
      message: 'Value is required',
    },
  )
})
