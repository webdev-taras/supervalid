const { test } = require('node:test')
const { ok, throws } = require('node:assert/strict')

const { is } = require('../../src')

test('date.validate()', t => {
  const schema = is.date()

  ok(schema.validate(new Date()))
  ok(schema.validate(new Date('2024-01-01')))
  ok(schema.validate(new Date(-1000)))
  ok(schema.validate(new Date(2024, 0, 1)))
  ok(!schema.validate(null))
  ok(!schema.validate(3))
  ok(!schema.validate(new Date(NaN)))
})

test('date.assert()', t => {
  const schema = is.date()

  schema.assert(new Date())
  throws(
    () => schema.assert(2024),
    {
      name: 'TypeError',
      message: `Should be a type of 'date'`,
    },
  )
})
