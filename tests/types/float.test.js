const { test } = require('node:test')
const { ok, equal, throws } = require('node:assert/strict')

const { is } = require('../../src')

test('float.validate()', t => {
  const schema = is.float()

  ok(schema.validate(1))
  ok(schema.validate(3.14))
  ok(schema.validate(2 ** 53))
  ok(schema.validate(5.000000000000001))
})

test('float.warn()', t => {
  const schema = is.float()
  const message = `Should be a type of 'float'`

  equal(schema.warn(null), message)
  equal(schema.warn(NaN), message)
  equal(schema.warn(1 / 0), message)
  equal(schema.warn(0 / 0), message)
  equal(schema.warn(-Infinity), message)
})

test('float.assert()', t => {
  const schema = is.float()

  schema.assert(3.14)
  throws(
    () => schema.assert(Infinity),
    {
      name: 'TypeError',
      message: `Should be a type of 'float'`,
    },
  )
})
