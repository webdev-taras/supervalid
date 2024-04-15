const { test } = require('node:test')
const { ok, equal, throws } = require('node:assert/strict')

const { is } = require('../../src')

test('function.validate()', t => {
  const schema = is.function()

  ok(schema.validate(ok))
  ok(schema.validate(test))
  ok(schema.validate(new Function()))
})

test('function.warn()', t => {
  const schema = is.function()
  const message = `Should be a type of 'function'`

  equal(schema.warn(null), message)
  equal(schema.warn(3), message)
  equal(schema.warn('no'), message)
})

test('function.assert()', t => {
  const schema = is.function()

  schema.assert(ok)
  throws(
    () => schema.assert(3),
    {
      name: 'TypeError',
      message: `Should be a type of 'function'`,
    },
  )
})
