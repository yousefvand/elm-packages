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

## Changes

### 0.2.0

- Get latest package version info by default.

### 0.1.0

- Initial release.
