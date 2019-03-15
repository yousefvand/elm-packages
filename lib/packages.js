const httpGet = require('./utils').httpGet

/**
 * Retrieve all Elm packages.
 *
 * @returns {Array} all Elm packages
 */
async function packages () {
  let allPackages = ''
  try {
    allPackages = await httpGet('https://package.elm-lang.org/search.json')
  } catch (err) {
    throw new Error(`Cannot download packages information from web. Error ${err}`)
  }
  return JSON.parse(allPackages)
}

module.exports = packages
