const { test } = require('node:test')
const { ok, equal, throws } = require('node:assert/strict')

const { is } = require('../../src')

test('array.validate()', t => {
  const schema = is.array()
  const message = `Should be a type of 'array'`

  ok(schema.validate([]))
  ok(schema.validate([1, 2, 3]))
  equal(schema.validate(null), message)
  equal(schema.validate(3), message)
  equal(schema.validate('no'), message)
})

test('array.assert()', t => {
  const schema = is.array()

  schema.assert([])
  throws(
    () => schema.assert(3),
    {
      name: 'TypeError',
      message: `Should be a type of 'array'`,
    },
  )
})
