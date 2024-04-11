const { test } = require('node:test')
const { ok, equal, throws } = require('node:assert/strict')

const { is } = require('../../src')

test('date.validate()', t => {
  const schema = is.date()
  const message = `Should be a type of 'date'`

  ok(schema.validate(new Date()))
  ok(schema.validate(new Date('2024-01-01')))
  ok(schema.validate(new Date(-1000)))
  ok(schema.validate(new Date(2024, 0, 1)))
  equal(schema.validate(null), message)
  equal(schema.validate(3), message)
  equal(schema.validate(new Date(NaN)), message)
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
