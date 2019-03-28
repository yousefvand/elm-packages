const packages = require('../lib/packages')

/* eslint-env jest */

test('packages', async () => {
  const ps = await packages()
  expect(ps.length).toBeGreaterThan(100)
  expect(ps.filter(item => item.name === 'elm/browser').length).toBe(1)
})
