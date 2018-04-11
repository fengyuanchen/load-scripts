# load-scripts

[![Build Status](https://img.shields.io/travis/fengyuanchen/load-scripts.svg)](https://travis-ci.org/fengyuanchen/load-scripts) [![Downloads](https://img.shields.io/npm/dm/load-scripts.svg)](https://www.npmjs.com/package/load-scripts) [![Version](https://img.shields.io/npm/v/load-scripts.svg)](https://www.npmjs.com/package/load-scripts)

> Dynamic scripts loading for modern browsers.

## Main

```text
dist/
├── load-scripts.js        (UMD)
├── load-scripts.min.js    (UMD, compressed)
├── load-scripts.common.js (CommonJS, default)
└── load-scripts.esm.js    (ES Module)
```

## Install

```sh
npm install load-scripts
```

## Usage

```js
import loadScripts from 'load-scripts';

loadScripts('foo.js').then(() => {
  console.log(window.Foo);
});

loadScripts('foo.js', 'bar.js').then(() => {
  console.log(window.Foo, window.Bar);
});
```

## Browser support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)
- Edge (latest)
- Internet Explorer 10+ (requires a `Promise` polyfill as [es6-promise](https://github.com/stefanpenner/es6-promise))

## License

[MIT](http://opensource.org/licenses/MIT) © [Chen Fengyuan](http://chenfengyuan.com)
