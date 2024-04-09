const { test } = require('node:test')
const { ok, throws } = require('node:assert/strict')

const { is } = require('../../src')

test('number.validate()', t => {
  const schema = is.number()

  ok(schema.validate(1))
  ok(schema.validate(3.14))
  ok(schema.validate(Infinity))
  ok(!schema.validate(null))
  ok(!schema.validate(NaN))
  ok(!schema.validate('100'))
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
