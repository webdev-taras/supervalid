const { test } = require('node:test')
const { ok, throws } = require('node:assert/strict')

const { is } = require('../../src')

test('bigint.validate()', t => {
  const schema = is.bigint()

  ok(schema.validate(9007199254740991n))
  ok(schema.validate(BigInt('9007199254740991')))
  ok(schema.validate(BigInt('0x1fffffffffffff')))
  ok(!schema.validate(null))
  ok(!schema.validate(3))
  ok(!schema.validate('123'))
})

test('bigint.assert()', t => {
  const schema = is.bigint()

  schema.assert(9007199254740991n)
  throws(
    () => schema.assert(3),
    {
      name: 'TypeError',
      message: `Should be a type of 'bigint'`,
    },
  )
})
