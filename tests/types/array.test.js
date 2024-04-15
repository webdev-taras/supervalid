const { test } = require('node:test')
const { ok, equal, throws } = require('node:assert/strict')

const { is } = require('../../src')

test('array.validate()', t => {
  const schema = is.array()
  const message = `Should be a type of 'array'`

  ok(schema.validate([]))
  ok(schema.validate([1, 2, 3]))
})

test('array.warn()', t => {
  const schema = is.array()
  const message = `Should be a type of 'array'`

  equal(schema.warn(null), message)
  equal(schema.warn(3), message)
  equal(schema.warn('no'), message)
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
