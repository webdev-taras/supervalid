const { test } = require('node:test')
const { ok, deepEqual } = require('node:assert/strict')

const { is } = require('../src')

test('is() returns set of factories', t => {
  ok(typeof is === 'function')
  deepEqual(Object.keys(is()), [
    'any',
    'boolean',
    'number',
    'string',
    'array',
    'object',
  ])
})

