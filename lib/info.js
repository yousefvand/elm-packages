const httpGet = require('./utils').httpGet

/**
 * Retrieve information about a package.
 *
 * @param {String} author package author
 * @param {String} name package name
 * @param {String} version package version
 * @returns {Object} package info
 */
async function info (author, name, version = 'latest') {
  let result
  let packageInfo = ''
  try {
    packageInfo = await httpGet(`https://package.elm-lang.org/packages/${author}/${name}/${version}/docs.json`)
  } catch (err) {
    throw new Error(`Cannot download packages versions from web. Error: ${err}`)
  }
  try {
    result = JSON.parse(packageInfo)
  } catch (err) {
    throw new Error(`Cannot parse malformed JSON. Error: ${err}`)
  }
  return result
}

module.exports = info
