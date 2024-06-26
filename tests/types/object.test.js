const { test } = require('node:test')
const { ok, equal, throws } = require('node:assert/strict')

const { is } = require('../../src')

test('object.validate()', t => {
  const schema = is.object()

  ok(schema.validate({}))
  ok(schema.validate({ id: 1, name: 'user' }))
})

test('object.warn()', t => {
  const schema = is.object()
  const message = `Should be a type of 'object'`

  equal(schema.warn(null), message)
  equal(schema.warn(3), message)
  equal(schema.warn('no'), message)
})

test('object.assert()', t => {
  const schema = is.object()

  schema.assert({})
  throws(
    () => schema.assert(3),
    {
      name: 'ValidationError',
      message: `Should be a type of 'object'`,
      reason: undefined,
      value: '3',
    },
  )
})

test('object.props(): simple case', t => {
  const schema = is.object().props({ id: is.number() })

  ok(is.object().props().validate({}))
  ok(is.object().props({}).validate({}))
  ok(is.object().props({}).validate({ id: 1 }))
  ok(schema.validate({ id: 1 }))
  equal(schema.warn({}), `Should be a type of 'number'`)
  equal(schema.warn({ name: 'John Connor' }), `Should be a type of 'number'`)
  equal(schema.warn({ id: '123'}), `Should be a type of 'number'`)
})

test('object.props(): user: simple case', t => {
  const schema = is.object().props({
    id: is.integer(),
    name: is.string(),
    groups: is.array(),
  })
  const user = {
    id: 1,
    name: 'John Connor',
    groups: ['owner', 'admin', 'seo'],
  }

  ok(schema.validate(user))
  ok(schema.validate({ ...user, password: 'genesis' }))
  equal(schema.warn({}), `Should be a type of 'integer'`)
  equal(schema.warn({ id: 2 }), `Should be a type of 'string'`)
  equal(schema.warn({ id: '123', name: 'John', groups: [] }), `Should be a type of 'integer'`)
})

test('object.props(): user: another case', t => {
  const schema = is.object().props({
    id: is.integer(),
    name: is.string(),
    age: is.integer(),
    address: is.object().props({
      streetAddress: is.string(),
      city: is.string(),
      state: is.string(),
    }),
    interests: is.array(),
    createdAt: is.date(),
  })
  const user = {
    id: 123,
    name: 'John Doe',
    age: 30,
    address: {
        streetAddress: '21 2nd Street',
        city: 'New York',
        state: 'NY',
    },
    interests: ['sports', 'music'],
    createdAt: new Date('2013-08-14T01:10:00Z'),
  }

  ok(schema.validate(user))
  ok(schema.validate({ ...user, email: 'john@doe.com' }))
  equal(schema.warn({ ...user, id: '123' }), `Should be a type of 'integer'`)
  equal(schema.warn({ ...user, createdAt: '2013-08-14T01:10:00Z' }), `Should be a type of 'date'`)
})
