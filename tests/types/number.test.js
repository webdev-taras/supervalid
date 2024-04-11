const { test } = require('node:test')
const { ok, equal, throws } = require('node:assert/strict')

const { is } = require('../../src')

test('number.validate()', t => {
  const schema = is.number()
  const message = `Should be a type of 'number'`

  ok(schema.validate(1))
  ok(schema.validate(3.14))
  ok(schema.validate(Infinity))
  equal(schema.validate(null), message)
  equal(schema.validate(NaN), message)
  equal(schema.validate('100'), message)
})

test('number.assert()', t => {
  const schema = is.number()

  schema.assert(0)
  throws(
    () => schema.assert('100'),
    {
      name: 'TypeError',
      message: `Should be a type of 'number'`,
    },
  )
})
