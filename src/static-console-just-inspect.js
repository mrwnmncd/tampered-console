'use strict';
const chalk = require('chalk');
const util = require('util');
const { cl, clw, cle } = require('./init');
const sb = ' ';
const dsb = '  ';
const sc = ':';
/* TODO : spread args params */
function log(args) {
  cl(util.inspect(args));
}
function warn(args) {
  clw(util.inspect(args));
}
function error(args) {
  cle(util.inspect(args));
}

module.exports = { log, warn, error };
