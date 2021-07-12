'use strict';
const util = require('util');
const { cl, clw, cle } = require('./init');
/* TODO : spread args params */
function log(args) {
  cl(util.inspect(args));
}
function debug(args) {
  cl(util.inspect(args));
}
function warn(args) {
  clw(util.inspect(args));
}
function error(args) {
  cle(util.inspect(args));
}

module.exports = { log, debug, warn, error };
