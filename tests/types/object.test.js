const { test } = require('node:test')
const { ok, equal, throws } = require('node:assert/strict')

const { is } = require('../../src')

test('object.validate()', t => {
  const schema = is.object()
  const message = `Should be a type of 'object'`

  ok(schema.validate({}))
  ok(schema.validate({ id: 1, name: 'user' }))
  equal(schema.validate(null), message)
  equal(schema.validate(3), message)
  equal(schema.validate('no'), message)
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
