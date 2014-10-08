# react-debug
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

Debug module for react classes. Calls [`debug`][debug] under the hood with the namespace
set based on the `displayName` property of your class.

## Installation
```bash
npm install react-debug
```

## Usage
```js
var debug = require('react-debug');
var react = require('react');

react.createClass({
  displayName: 'myClass',
  getInitialState: getInitialState,
  render: render
});

function getInitialState() {
  return {
    foo: 'bar',
    bin: 'baz'
  }
}

function render() {
  debug(this, 'render', this.state);
  // => class:myClass render [object]
}
```

## Debug
To enable `react-debug` in the browser type in the console:
```js
localStorage.debug = '*';
```

## API
#### debug([ctx], msg)
Pass in a context to retrieve the `displayName` property from the react class.
If no context is provided we default to just using `class`.
```js
debug(react.createClass({displayName: 'baz'}), 'foobar');
// => class:baz foobar

debug('barbar');
// => class barbar
```

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/react-debug.svg?style=flat-square
[npm-url]: https://npmjs.org/package/react-debug
[travis-image]: https://img.shields.io/travis/yoshuawuyts/react-debug.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/react-debug
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/react-debug.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/react-debug?branch=master
[downloads-image]: http://img.shields.io/npm/dm/react-debug.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/react-debug

[debug]: https://github.com/visionmedia/debug
