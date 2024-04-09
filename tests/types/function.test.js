const { test } = require('node:test')
const { ok, throws } = require('node:assert/strict')

const { is } = require('../../src')

test('function.validate()', t => {
  const schema = is.function()

  ok(schema.validate(ok))
  ok(schema.validate(test))
  ok(schema.validate(new Function()))
  ok(!schema.validate(null))
  ok(!schema.validate(3))
  ok(!schema.validate('no'))
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
