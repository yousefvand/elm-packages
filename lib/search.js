const db = require('../db.json')
const indexed = new Map()

for (const p of db) {
  for (const d of p.docs) {
    for (const n of d.info) {
      for (const m of n.values) {
        const a = {
          'package': p.name,
          'version': d.version,
          'type': m.type,
          'comment': m.comment
        }
        if (!indexed.has(m.name)) {
          indexed.set(m.name, [])
        } else {
          indexed.get(m.name).push(a)
        }
      }
    }
  }
}

const search = keyword => indexed.get(keyword)

module.exports = search
