# elm-packages

Elm packages information library.

[![https://nodei.co/npm/elm-packages.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/elm-packages.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/elm-packages)

## Install

```bash
npm i elm-packages
```

## Usage

- Get all Elm packages information:

```js
const elmInfo = require('elm-packages')
const allPackages = elmInfo.packages()
```

- Get documentation of a package:

```js
const elmInfo = require('elm-packages')
const docs = elmInfo.info('elm','browser','1.0.1')
```

- Create offline db:

Json file size is approximately 23MB uncompressed and 3.5MB compressed.

```js
const elmInfo = require('elm-packages')
const elmInfo.offline('path/to/db.json')
```

- Search by keyword

This package uses an offline db (`db.json` ~ 24MB) to provide Elm type info (npm compresses all packages by default so the download size would be < 3.5 MB) and uses an in memory `Map` indexed by `methods` so queries would be resolved super fast.
Upon searching a `keyword` all versions of all Elm packages containing such a `method` will be returned as an array of objects with the following structure:

```json
{
  'package': 'parent package name',
  'version': 'version',
  'type': 'type signature',
  'comment': 'comment'
}
```

Example usage:

```js
const elmInfo = require('elm-packages')
const resultArray = elmInfo.search('reverse')
```

## Contribution

This package is experimental yet.

**PRs** are welcome.

## Changes

### 0.4.0

- Search added.

### 0.3.0

- Create offline db.

### 0.2.0

- Get latest package version info by default.

### 0.1.0

- Initial release.
