const { test } = require('node:test')
const { ok, deepEqual } = require('node:assert/strict')

const basic = require('../src/basic')

test('basic interface', t => {
  ok(typeof basic === 'object')
  deepEqual(Object.keys(basic), [
    'validate',
    'assert',
    'custom',
  ])
})

