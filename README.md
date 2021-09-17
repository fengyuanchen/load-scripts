# load-scripts

[![Downloads](https://img.shields.io/npm/dm/load-scripts.svg)](https://www.npmjs.com/package/load-scripts) [![Version](https://img.shields.io/npm/v/load-scripts.svg)](https://www.npmjs.com/package/load-scripts) [![Gzip Size](https://img.shields.io/bundlephobia/minzip/load-scripts.svg)](https://unpkg.com/load-scripts/dist/load-scripts.js)

> Dynamic scripts loading for modern browsers.

## Main

```text
dist/
├── load-scripts.js        (UMD)
├── load-scripts.min.js    (UMD, compressed)
├── load-scripts.common.js (CommonJS, default)
└── load-scripts.esm.js    (ES Module)
```

## Getting started

### Installation

```shell
npm install load-scripts
```

In browser:

```html
<script src="/path/to/load-scripts.js"></script>
```

### Usage

#### Syntax

```js
loadScripts(script1, script2, ..., scriptN)
  .then(() => {})
  .catch((err) => {})
  .finally(() => {});
```

#### Example

```js
import loadScripts from 'load-scripts';

loadScripts('foo.js').then(() => {
  console.log(window.Foo);
});

loadScripts('foo.js', 'bar.js').then(() => {
  console.log(window.Foo, window.Bar);
});
```

In browser:

```html
<script>
  loadScripts('foo.js').then(() => {
    console.log(window.Foo);
  });
</script>
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
