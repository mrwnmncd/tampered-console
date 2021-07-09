'use strict';
const dbg = require('debug');
const util = require('util');
dbg.enable('*');
function debug(args) {
  args ? args : '';
  const app = 'debug';
  dbg(app)(util.inspect(args));
}

module.exports = { debug };