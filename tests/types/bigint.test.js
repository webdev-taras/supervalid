const { test } = require('node:test')
const { ok, equal, throws } = require('node:assert/strict')

const { is } = require('../../src')

test('bigint.validate()', t => {
  const schema = is.bigint()

  ok(schema.validate(9007199254740991n))
  ok(schema.validate(BigInt('9007199254740991')))
  ok(schema.validate(BigInt('0x1fffffffffffff')))
})

test('bigint.warn()', t => {
  const schema = is.bigint()
  const message = `Should be a type of 'bigint'`
  equal(schema.warn(null), message)
  equal(schema.warn(3), message)
  equal(schema.warn('123'), message)
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
