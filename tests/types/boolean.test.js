const { test } = require('node:test')
const { ok, throws } = require('node:assert/strict')

const { is } = require('../../src')

test('boolean.validate()', t => {
  const schema = is.boolean()

  ok(schema.validate(true))
  ok(schema.validate(false))
  ok(!schema.validate(null))
  ok(!schema.validate(3))
  ok(!schema.validate('no'))
})

test('boolean.assert()', t => {
  const schema = is.boolean()

  schema.assert(false)
  throws(
    () => schema.assert(3),
    {
      name: 'TypeError',
      message: `Should be a type of 'boolean'`,
    },
  )
})
