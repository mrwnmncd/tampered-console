'use strict';
const chalk = require('chalk');
const util = require('util');
const { cl, cle } = require('../init');
const dsb = '  ';
function log(arg) {
  arg = util.inspect(arg);
  const app = 'log';
  cl(dsb + chalk.bold.whiteBright(app), arg);
}
function worker(arg) {
  arg = util.inspect(arg);
  const app = 'worker';
  cl(dsb + chalk.bold.magenta(app), arg);
}
function debug(arg) {
  arg = util.inspect(arg);
  const app = 'warn';
  cle(dsb + chalk.bold.keyword('orange')(app), arg);
}
function warn(arg) {
  arg = util.inspect(arg);
  const app = 'warn';
  cle(dsb + chalk.bold.keyword('orange')(app), arg);
}
function error(arg) {
  arg = util.inspect(arg);
  const app = 'error';
  cle(dsb + chalk.bold.red(app), arg);
}

module.exports = { log, worker, debug, warn, error };
