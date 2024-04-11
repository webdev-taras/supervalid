const { test } = require('node:test')
const { ok, equal, throws } = require('node:assert/strict')

const { is } = require('../../src')

test('function.validate()', t => {
  const schema = is.function()
  const message = `Should be a type of 'function'`

  ok(schema.validate(ok))
  ok(schema.validate(test))
  ok(schema.validate(new Function()))
  equal(schema.validate(null), message)
  equal(schema.validate(3), message)
  equal(schema.validate('no'), message)
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
