const fs = require('fs')
const path = require('path')
const info = require('./info')
const packages = require('./packages')

/**
 * Create offline database.
 *
 * @param {String} saveTo path to file
 */
async function offline (saveTo = null) {
  const savePath = saveTo || path.join(__dirname, '..', 'db.json')
  const result = []
  const ps = await packages()
  for (let p of ps) {
    p.docs = []
    for (let v of p.versions) {
      const d = await info(p.name.split('/')[0], p.name.split('/')[1], v)
      p.docs.push({ 'version': v, 'info': d })
    }
    result.push(p)
  }
  fs.writeFileSync(savePath, JSON.stringify(result))
}

console.log('This will take a while depending on your internet speed...')
offline()
  .then(() => console.log('db created'))
