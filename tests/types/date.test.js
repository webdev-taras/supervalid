const { test } = require('node:test')
const { ok, equal, throws } = require('node:assert/strict')

const { is } = require('../../src')

test('date.validate()', t => {
  const schema = is.date()

  ok(schema.validate(new Date()))
  ok(schema.validate(new Date('2024-01-01')))
  ok(schema.validate(new Date(-1000)))
  ok(schema.validate(new Date(2024, 0, 1)))
  ok(schema.validate(new Date('2013-08-14T01:10:00Z')))
})

test('date.warn()', t => {
  const schema = is.date()
  const message = `Should be a type of 'date'`

  equal(schema.warn('2013-08-14T01:10:00Z'), message)
  equal(schema.warn(null), message)
  equal(schema.warn(3), message)
  equal(schema.warn(new Date(NaN)), message)
})

test('date.assert()', t => {
  const schema = is.date()

  schema.assert(new Date())
  throws(
    () => schema.assert(2024),
    {
      name: 'ValidationError',
      message: `Should be a type of 'date'`,
      reason: undefined,
      value: '2024',
    },
  )
})
