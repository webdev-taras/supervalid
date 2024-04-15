const { test } = require('node:test')
const { ok, equal, throws } = require('node:assert/strict')

const { is } = require('../../src')

test('array.validate()', t => {
  const schema = is.array()

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

test('array.of(): simple cases', t => {
  ok(is.array().of(is.boolean()).validate([]))
  ok(is.array().of(is.number()).validate([1, 2, 3, 4, 5]))
  ok(is.array().of(is.string()).validate(['owner', 'admin', 'seo']))
  ok(is.array().of().validate([123, 'admin', true, {}]))

  equal(is.array().of(is.number()).warn([1, 2, '3', 4, 5]), `Should be a type of 'number'`)
  equal(is.array().of(is.number()).warn([1, 2, null, 4, 5]), `Should be a type of 'number'`)
})
