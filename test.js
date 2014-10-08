/*eslint no-unused-expressions: 0*/

/**
 * Module dependencies
 */

var debug = require('./index');
var react = require('react');
var noop = function() {};

/**
 * Test
 */

describe('react-debug', function() {
  it('should assert argument types', function() {
    debug.bind(debug)
      .should.throw('react-debug: ctx should exist');

    debug.bind(debug, 123, 'foo')
      .should.throw('react-debug: ctx should be a function');

    debug.bind(debug, noop, 'foo')
      .should.not.throw();
  });

  it('should accept a function with a displayName property', function() {
    debug(function() {this.displayName = 'foo'}, 'hello world');
  });

  it('should accept react classes', function() {
    function dum(){return react.DOM.div()};
    var cls = react.createClass({displayName: 'foobar', render: dum});
    debug(cls, 'hello you');
    dum();
  });
});
