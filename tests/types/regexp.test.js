const { test } = require('node:test')
const { ok, equal, throws } = require('node:assert/strict')

const { is } = require('../../src')

test('regexp.validate()', t => {
  const schema = is.regexp()

  ok(schema.validate(/ab+c/))
  ok(schema.validate(new RegExp("ab+c")))
})

test('regexp.warn()', t => {
  const schema = is.regexp()
  const message = `Should be a type of 'regexp'`

  equal(schema.warn(null), message)
  equal(schema.warn(3), message)
  equal(schema.warn('ab+c'), message)
})

test('regexp.assert()', t => {
  const schema = is.regexp()

  schema.assert(/ab+c/)
  throws(
    () => schema.assert(3),
    {
      name: 'ValidationError',
      message: `Should be a type of 'regexp'`,
      reason: undefined,
      value: '3',
    },
  )
})
