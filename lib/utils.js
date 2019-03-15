const https = require('https')

/**
 * A light http client for http GET requests
 *
 * @param {String} url Url to fetch
 * @returns {String} Url content
 */
function httpGet (url) {
  return new Promise((resolve, reject) => {
    https.get(url, (resp) => {
      let data = ''

      resp.on('data', chunk => {
        data += chunk
      })

      resp.on('end', () => resolve(data))
    }).on('error', err => reject(err))
  })
}

module.exports = {
  httpGet: httpGet
}
