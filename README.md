# elm-packages

Elm packages information library.

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