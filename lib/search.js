const db = require('../db.json')
const unions = new Map()
const methods = new Map()

// Let's create a Map based on methods of packages
for (const p of db) {
  for (const d of p.docs) {
    for (const n of d.info) {
      for (const m of n.values) {
        const a = {
          'name': m.name,
          'package': p.name,
          'version': d.version,
          'type': m.type,
          'comment': m.comment
        }
        if (!methods.has(m.name)) {
          methods.set(m.name, [])
        } else {
          methods.get(m.name).push(a)
        }
      }
      for (const u of n.unions) {
        const a = {
          'name': u.name,
          'package': p.name,
          'version': d.version,
          'args': u.args,
          'cases': u.cases,
          'comment': u.comment
        }
        if (!unions.has(u.name)) {
          unions.set(u.name, [])
        } else {
          unions.get(u.name).push(a)
        }
      }
    }
  }
}

/**
 * Searches a keyword in all Elm packages.
 *
 * @param {String} keyword keyword to search for
 * @param {Object} options search options
 * @returns {Array} result array
 */
function search (keyword, options = {}) {
  const method = options.method || 'startsWith'
  const packages = options.packages || []
  const type = options.type || 'any'

  if (method !== 'exact' && method !== 'startsWith' && method !== 'contains') {
    throw new Error(`Invalid search method in options: '${method}'. Valid values: startsWith | exact | contains`)
  }

  if (!Array.isArray(packages)) {
    throw new Error('Invalid search packages type in options. packages should be an array of string.')
  }

  if (type !== 'any' && type !== 'method' && type !== 'union') {
    throw new Error(`Invalid search type in options: '${type}'. Valid values: any | method | union`)
  }

  const result = { Methods: [], Unions: [] }

  if (type === 'method' || type === 'any') {
    switch (method) {
      case 'startsWith':
        let matches = []
        for (const k of methods.keys()) {
          if (k.startsWith(keyword)) {
            matches = matches.concat(methods.get(k))
          }
        }
        result.Methods = matches
          .filter(r => packages.length === 0 || packages.includes(r.package))
        break
      case 'contains':
        let anyMatches = []
        for (const k of methods.keys()) {
          if (k.includes(keyword)) {
            anyMatches = anyMatches.concat(methods.get(k))
          }
        }
        result.Methods = anyMatches
          .filter(r => packages.length === 0 || packages.includes(r.package))
        break
      default: // exact
        const x = methods.get(keyword) || []
        result.Methods = x.filter(r => packages.length === 0 || packages.includes(r.package))
        break
    }
  } else if (type === 'union' || type === 'any') {
    switch (method) {
      case 'startsWith':
        let matches = []
        for (const k of unions.keys()) {
          if (k.startsWith(keyword)) {
            matches = matches.concat(unions.get(k))
          }
        }
        result.Unions = matches
          .filter(r => packages.length === 0 || packages.includes(r.package))
        break
      case 'contains':
        let anyMatches = []
        for (const k of unions.keys()) {
          if (k.includes(keyword)) {
            anyMatches = anyMatches.concat(unions.get(k))
          }
        }
        result.Unions = anyMatches
          .filter(r => packages.length === 0 || packages.includes(r.package))
        break
      default: // exact
        const x = unions.get(keyword) || []
        result.Unions = x.filter(r => packages.length === 0 || packages.includes(r.package))
        break
    }
  } else {
    throw new Error(`Unknown search type option: ${type}`)
  }
  return result
}

module.exports = search
