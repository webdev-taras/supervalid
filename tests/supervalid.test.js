const { test } = require('node:test')
const { ok } = require('node:assert/strict')

const supervalid = require('../src')

test('supervalid API', t => {
  ok(typeof supervalid === 'object' && supervalid != null)
  ok(typeof supervalid.is === 'object')
})
