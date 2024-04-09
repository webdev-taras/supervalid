const { test } = require('node:test')
const { ok, throws } = require('node:assert/strict')

const { is } = require('../../src')

test('string.validate()', t => {
  const schema = is.string()

  ok(schema.validate(''))
  ok(schema.validate('false'))
  ok(!schema.validate(null))
  ok(!schema.validate(3))
  ok(!schema.validate(false))
})

test('string.assert()', t => {
  const schema = is.string()

  schema.assert('blablabla')
  throws(
    () => schema.assert(3),
    {
      name: 'TypeError',
      message: `Should be a type of 'string'`,
    },
  )
})
