const { test } = require('node:test')
const { ok, throws } = require('node:assert/strict')

const { is } = require('../../src')

test('regexp.validate()', t => {
  const schema = is.regexp()

  ok(schema.validate(/ab+c/))
  ok(schema.validate(new RegExp("ab+c")))
  ok(!schema.validate(null))
  ok(!schema.validate(3))
  ok(!schema.validate('ab+c'))
})

test('regexp.assert()', t => {
  const schema = is.regexp()

  schema.assert(/ab+c/)
  throws(
    () => schema.assert(3),
    {
      name: 'TypeError',
      message: `Should be a type of 'regexp'`,
    },
  )
})
