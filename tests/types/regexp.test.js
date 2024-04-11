const { test } = require('node:test')
const { ok, equal, throws } = require('node:assert/strict')

const { is } = require('../../src')

test('regexp.validate()', t => {
  const schema = is.regexp()
  const message = `Should be a type of 'regexp'`

  ok(schema.validate(/ab+c/))
  ok(schema.validate(new RegExp("ab+c")))
  equal(schema.validate(null), message)
  equal(schema.validate(3), message)
  equal(schema.validate('ab+c'), message)
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
