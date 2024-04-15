const { test } = require('node:test')
const { ok, equal, throws } = require('node:assert/strict')

const { is } = require('../../src')

test('string.validate()', t => {
  const schema = is.string()
  const message = `Should be a type of 'string'`

  ok(schema.validate(''))
  ok(schema.validate('false'))
})

test('string.warn()', t => {
  const schema = is.string()
  const message = `Should be a type of 'string'`

  equal(schema.warn(null), message)
  equal(schema.warn(3), message)
  equal(schema.warn(false), message)
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
