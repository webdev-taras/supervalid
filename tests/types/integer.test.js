const { test } = require('node:test')
const { ok, equal, throws } = require('node:assert/strict')

const { is } = require('../../src')

test('integer.validate()', t => {
  const schema = is.integer()

  ok(schema.validate(1))
  ok(schema.validate(2 ** 53 - 1))
  ok(schema.validate(9007199254740991))
})

test('integer.warn()', t => {
  const schema = is.integer()
  const message = `Should be a type of 'integer'`

  equal(schema.warn(null), message)
  equal(schema.warn(NaN), message)
  equal(schema.warn(3.14), message)
  equal(schema.warn(2 ** 53), message)
  equal(schema.warn(99999999999999999999999), message)
  equal(schema.warn(Infinity), message)
})

test('integer.assert()', t => {
  const schema = is.integer()

  schema.assert(123456789)
  throws(
    () => schema.assert(3.14),
    {
      name: 'TypeError',
      message: `Should be a type of 'integer'`,
    },
  )
})
