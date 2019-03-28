const info = require('../lib/info')

/* eslint-env jest */
test('info', async () => {
  const result = await info('elm', 'browser')
  expect(result.length).toBe(4)
  expect(result.filter(item => item.name === 'Browser.Events').length).toBe(1)
})
