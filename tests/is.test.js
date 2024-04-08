const { test } = require('node:test')
const { ok, deepEqual, throws } = require('node:assert/strict')

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

test('is.blabla is not defined', t => {
  throws(
    () => is.blabla(),
    {
      name: 'TypeError',
      message: `type 'blabla' is not defined`,
    },
  )
})

test('is.blabla', t => {
  is.blabla = is.any()
  ok(typeof is.blabla() === 'object')
})
