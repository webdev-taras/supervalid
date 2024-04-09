const { test } = require('node:test')
const { ok, throws } = require('node:assert/strict')

const { is } = require('../../src')

test('array.validate()', t => {
  const schema = is.array()

  ok(schema.validate([]))
  ok(schema.validate([1, 2, 3]))
  ok(!schema.validate(null))
  ok(!schema.validate(3))
  ok(!schema.validate('no'))
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
