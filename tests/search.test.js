const search = require('../lib/search')

/* eslint-env jest */

test('search methods', () => {
  let s = search('toUpper',
    {
      method: 'exact',
      packages: [],
      type: 'method'
    }
  )
  expect(s.Methods.filter(x => x.package === 'elm/core').length).toBe(1)

  s = search('to',
    {
      method: 'exact',
      packages: [ 'elm-community/typed-svg' ],
      type: 'method'
    }
  )
  expect(s.Methods.length).toBe(3)

  s = search('exp',
    {
      method: 'startsWith',
      packages: [],
      type: 'method'
    }
  )
  expect(s.Methods.length).toBeGreaterThan(70)

  s = search('down',
    {
      method: 'contains',
      packages: [],
      type: 'method'
    }
  )
  expect(s.Methods.length).toBeGreaterThan(260)
})

test('search unions', () => {
  let s = search('Error',
    {
      method: 'exact',
      packages: [],
      type: 'union'
    }
  )
  expect(s.Unions.filter(x => x.package === 'elm/http').length).toBe(2)

  s = search('Decoder',
    {
      method: 'exact',
      packages: [ 'elm/json' ],
      type: 'union'
    }
  )
  expect(s.Unions.length).toBe(1)

  s = search('Exp',
    {
      method: 'startsWith',
      packages: [],
      type: 'union'
    }
  )
  expect(s.Unions.length).toBeGreaterThan(10)

  s = search('down',
    {
      method: 'contains',
      packages: [],
      type: 'union'
    }
  )
  expect(s.Unions.length).toBeGreaterThan(30)
})
