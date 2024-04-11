const { test } = require('node:test')
const { ok, deepEqual } = require('node:assert/strict')

const validator = require('../src/validator')

test('validator interface', t => {
  ok(typeof validator === 'object')
  deepEqual(Object.keys(validator), [
    'rules',
    'validate',
    'warn',
    'assert',
    'custom',
  ])
})
