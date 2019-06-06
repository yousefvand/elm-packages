# elm-packages

Elm packages information library.

[![https://nodei.co/npm/elm-packages.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/elm-packages.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/elm-packages)

## Install

```bash
npm i elm-packages
```

## Usage

### Get all Elm packages information:

```js
const elmInfo = require('elm-packages')
// Inside an async function
const allPackages = await elmInfo.packages()
```

### Get documentation of a package:

```js
const elmInfo = require('elm-packages')
// Inside an async function
const docs = await elmInfo.info('elm','browser','1.0.1')
```

### Get available versions of a package:

```js
const elmInfo = require('elm-packages')
// Inside an async function
const docs = await elmInfo.version('elm','browser')
```

### Search by keyword (offline)

This package uses an offline db (`db.json` ~ 24MB) to provide Elm type info (npm compresses all packages by default so the download size would be < 3.5 MB) and uses an in memory `Map` indexed by `methods` and `unions` so queries would be resolved super fast.
You can pass an `options` object alongside `keyword` to customize your search. Structure of `options` object is:

```js
{
  method: String
  packages: Array
  type: String
}
```

- `method`: How to match keyword. Valid options are:
  - `exact`: Results should be exactly the same as search `keyword`.
  - `startsWith`: Results should be started with search `keyword`.
  - `contains`: `keyword` can appear anywhere in searched entries.
- `packages` : Array of `string`. Array of all packages to search for keyword. Empty array means all packages.
- `type`: What to search. Valid options are:
  - `method`: Search `keyword` in methods.
  - `union`: Search `keyword` in unions.
  - `any`: Search `keyword` in methods and unions.

Search result is an object of:

```js
{
  Methods: [],
  Unions: []
}
```

### Examples

```js
search('toUpper')
```

```js
search('toUpper',
  {
    method: 'exact',
    packages: [ 'NoRedInk/elm-formatted-text-19' ],
    type: 'method'
  }
)
```

```js
search('to',
  {
    method: 'startsWith',
    packages: [ 'elm/core', 'NoRedInk/elm-formatted-text-19' ],
    type: 'method'
  }
)
```

```js
search('fun',
  {
    method: 'contains',
    packages: [],
    type: 'method'
  }
)
```

```js
search('Error',
  {
    method: 'exact',
    packages: [],
    type: 'union'
  }
)
```

### Contribution

**PRs** are welcome. Check if tests pass by `npm run test`

### Changes

#### 0.5.1

- Fixing security vulnerability in `js-yaml` dependency.
- Fixing security vulnerability in `handlebars` dependency.

#### 0.5.0

- Search options added with examples.
- Error in case of malformed Json.
- Unit tests added.

#### 0.4.0

- Search added.

#### 0.3.0

- Create offline db.

#### 0.2.0

- Get latest package version info by default.

#### 0.1.0

- Initial release.

