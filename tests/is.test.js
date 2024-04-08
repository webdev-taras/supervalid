const { test } = require('node:test')
const { ok, deepEqual } = require('node:assert/strict')

const { is } = require('../src')

test('is provides set of registered types', t => {
  ok(typeof is === 'object')
  deepEqual(Object.keys(is), [
    'any',
    'boolean',
    'number',
    'string',
    'array',
    'object',
  ])
})
