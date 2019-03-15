const httpGet = require('./utils').httpGet

/**
 * Retrieve information about a package versions.
 *
 * @param {String} author package author
 * @param {String} name package name
 * @returns {Array} package versions
 */
async function versions (author, name) {
  let versionsJson = ''
  let versions
  try {
    versionsJson = await httpGet(`https://package.elm-lang.org/packages/${author}/${name}/releases.json`)
    versions = Object.keys(JSON.parse(versionsJson))
  } catch (err) {
    throw new Error(`Cannot download packages versions from web. Error ${err}`)
  }
  return versions
}

module.exports = versions
