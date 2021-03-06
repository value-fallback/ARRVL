# ARRVL
[![license](https://img.shields.io/github/license/value-fallback/ARRVL.svg?style=flat-square)](https://github.com/value-fallback/ARRVL/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/arrvl.svg?style=flat-square)](https://www.npmjs.com/package/arrvl)
[![npm](https://img.shields.io/npm/dt/arrvl.svg?style=flat-square)](https://www.npmjs.com/package/arrvl)
[![Travis](https://img.shields.io/travis/value-fallback/ARRVL.svg?style=flat-square)](https://travis-ci.org/value-fallback/ARRVL)
[![ESLint Gluons](https://img.shields.io/badge/code%20style-gluons-9C27B0.svg?style=flat-square)](https://github.com/gluons/eslint-config-gluons)

Fallback when a value is not [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

## Installation

**Via [NPM](https://www.npmjs.com):**

[![NPM](https://nodei.co/npm/arrvl.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/arrvl)

```
npm install arrvl
```

**Via [Yarn](https://yarnpkg.com):**

```
yarn add arrvl
```

## Usage

```javascript
const arrvl = require('arrvl');

// When a value is not Array, it will return fallback value.
let a = arrvl(null, 0); // a = 0
let b = arrvl({}, 'x'); // b = 'x'

// When a value is Array, it will return that value.
let c = arrvl([], 1); // c = []
let d = arrvl([1, 2, 3], 'abc'); // d = [1, 2, 3]
```

## API

### arrvl(value, fallbackValue)

#### value
A main value.

#### fallbackValue
A fallback value.
