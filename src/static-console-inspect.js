'use strict';
const chalk = require('chalk');
const util = require('util');
const { cl, clw, cle } = require('./init');
const sb = ' ';
const dsb = '  ';
const sc = ':';
/* TODO : spread args params */
function log(args) {
  const app = 'log';
  cl(dsb + chalk.bold.whiteBright(app) + sb + util.inspect(args));
}
function worker(args) {
  const app = 'worker';
  cl(dsb + chalk.bold.magenta(app) + sb + util.inspect(args));
}
function warn(args) {
  const app = 'warn';
  clw(dsb + chalk.bold.keyword('orange')(app) + sb + util.inspect(args));
}
function error(args) {
  const app = 'error';
  cle(dsb + chalk.bold.red(app) + sb + util.inspect(args));
}

module.exports = { log, worker, warn, error };
