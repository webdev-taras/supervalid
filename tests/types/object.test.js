const { test } = require('node:test')
const { ok, throws } = require('node:assert/strict')

const { is } = require('../../src')

test('object.validate()', t => {
  const schema = is.object()

  ok(schema.validate({}))
  ok(schema.validate({ id: 1, name: 'user' }))
  ok(!schema.validate(null))
  ok(!schema.validate(3))
  ok(!schema.validate('no'))
})

test('object.assert()', t => {
  const schema = is.object()

  schema.assert({})
  throws(
    () => schema.assert(3),
    {
      name: 'TypeError',
      message: `Should be a type of 'object'`,
    },
  )
})
