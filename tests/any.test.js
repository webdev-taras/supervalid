const { test } = require('node:test')
const { ok } = require('node:assert/strict')

const basic = require('../src/basic')
const { is } = require('../src')
const any = is().any

test('any instanceof basic', t => {
  ok(typeof any === 'function')
  const instance = any()
  ok(Object.getPrototypeOf(instance) === basic)
})
