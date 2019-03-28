const httpGet = require('./utils').httpGet

/**
 * Retrieve all Elm packages.
 *
 * @returns {Array} all Elm packages
 */
async function packages () {
  let result
  let allPackages = ''
  try {
    allPackages = await httpGet('https://package.elm-lang.org/search.json')
  } catch (err) {
    throw new Error(`Cannot download packages information from web. Error: ${err}`)
  }
  try {
    result = JSON.parse(allPackages)
  } catch (err) {
    throw new Error(`Cannot parse malformed JSON. Error: ${err}`)
  }
  return result
}

module.exports = packages
