# koa-response-censor

Filter out certain keys from the response body. Keep those secrets secret! [![Build Status](https://travis-ci.org/murphyrandle/koa-response-censor.svg?branch=master)](https://travis-ci.org/murphyrandle/koa-response-censor)

![A little joke header image of censored text](https://cloud.githubusercontent.com/assets/1227109/8010577/88623048-0b6e-11e5-93ee-959dbdad8719.png)

## Install
>Install with [npm](https://github.com/npm/npm)

```
$ npm install koa-response-censor
```

## Usage

```js
var app      = require('koa')(),
    koaCensor   = require('koa-response-censor');

app.use(koaCensor({
  keys: [
    'pwdHash',
    '_secretKey',
    'myPhoneNumber'
  ]
}));

...

// any keys at any depth of the response body matching
// a term found in the array above will be omitted from
// the response.

```

## Options

- `keys` **{array}** An array of keys to be omitted (deeply) from the response body

## Tests

```
$ npm test
```

## License
The MIT License, 2014 [Murphy Randle](https://github.com/murphyrandle)
