# hex-csb [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/hex-csb/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/hex-csb)

Convert a HEX colour to Scratch CSB.

[![NPM Badge](https://nodei.co/npm/hex-csb.png)](https://npmjs.com/package/hex-csb)

## Install

```sh
npm install hex-csb
```

## Usage

```js
const hexCsb = require("hex-csb");

hexCsb("FFFFFF");
//=> [0, 0, 100]

hexCsb("000000");
//=> [0, 0, 0]

hexCsb("#FFD800");
//=> [14, 100, 100]
```

## API

### hexCsb(input)

#### input

Type: `string`

The HEX code to convert.
