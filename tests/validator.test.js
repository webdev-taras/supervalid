const { test } = require('node:test')
const { ok, deepEqual } = require('node:assert/strict')

const validator = require('../src/validator')

test('validator interface', t => {
  ok(typeof validator === 'object')
  deepEqual(Object.keys(validator), [
    'rules',
    'validate',
    'assert',
    'custom',
  ])
})

test('validator.validate()', t => {
  validator
    .custom(value => value != null)
    .custom(value => typeof value === 'string')
    .custom(value => value.length > 3)

  ok(validator.validate('qwerty'))
  ok(validator.validate('blablabla'))
  ok(!validator.validate(null))
  ok(!validator.validate(3))
  ok(!validator.validate('no'))
})