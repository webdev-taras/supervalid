const { test } = require('node:test')
const { ok, equal, throws } = require('node:assert/strict')

const { is } = require('../../src')

test('string.validate()', t => {
  const schema = is.string()
  const message = `Should be a type of 'string'`

  ok(schema.validate(''))
  ok(schema.validate('false'))
  equal(schema.validate(null), message)
  equal(schema.validate(3), message)
  equal(schema.validate(false), message)
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
