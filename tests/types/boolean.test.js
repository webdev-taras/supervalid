const { test } = require('node:test')
const { ok, equal, throws } = require('node:assert/strict')

const { is } = require('../../src')

test('boolean.validate()', t => {
  const schema = is.boolean()

  ok(schema.validate(true))
  ok(schema.validate(false))
})

test('boolean.warn()', t => {
  const schema = is.boolean()
  const message = `Should be a type of 'boolean'`

  equal(schema.warn(null), message)
  equal(schema.warn(3), message)
  equal(schema.warn('no'), message)
})

test('boolean.assert()', t => {
  const schema = is.boolean()

  schema.assert(false)
  throws(
    () => schema.assert(3),
    {
      name: 'ValidationError',
      message: `Should be a type of 'boolean'`,
      reason: undefined,
      value: '3',
    },
  )
})
