/**
 * Module dependencies
 */

var assert = require('assert');
var debug = require('debug');
var noop = function() {};

/**
 * Expose `reactDebug()`.
 */

module.exports = reactDebug;

/**
 * React debug
 *
 * @param {Object?} ctx
 * @param {Any} msg
 */

function reactDebug(ctx, msg) {
  assert(ctx, 'react-debug: ctx should exist');

  if (!msg) {
    msg = ctx;
    ctx = noop;
  };

  assert.equal(typeof ctx, 'function', 'react-debug: ctx should be a function');

  var displayName = ctx.displayName || '';
  var namespace = displayName
    ? 'class:' + displayName
    : 'class';

  debug(namespace)(msg);
}
