const versions = require('../lib/versions')

/* eslint-env jest */

test('versions', async () => {
  let result = await versions('elm', 'http')
  expect(result.length).toBeGreaterThanOrEqual(2)
  result = await versions('rtfeldman', 'elm-css')
  expect(result.length).toBeGreaterThanOrEqual(3)
})
