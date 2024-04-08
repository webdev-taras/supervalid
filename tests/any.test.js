const { test } = require('node:test')
const { ok } = require('node:assert/strict')

const basic = require('../src/validator')
const { is: { any } } = require('../src')

test('any instanceof basic', t => {
  ok(typeof any === 'object')
  ok(Object.getPrototypeOf(Object.getPrototypeOf(any)) === basic)
})
