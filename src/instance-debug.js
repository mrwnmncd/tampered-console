'use strict';
const dbg = require('debug');
const util = require('util');
dbg.enable('*');
/* TODO : spread args params */
/**
 * Namespace for Console
 * @param {string} namespace Namespace
 * @example
 * Console.debug(args)('namespace')
 */
function debug(namespace) {
  return function (args) {
    args ? args : '';
    const app = 'debug';
    dbg(app + ':' + namespace)(util.inspect(args));
  };
}

module.exports = { debug };
