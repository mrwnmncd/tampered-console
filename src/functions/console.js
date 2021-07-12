'use strict';
const chalk = require('chalk');
const util = require('util');
const { cl, cle } = require('../init');
const dsb = '  ';
function log() {
  const args = util.format.apply(this, arguments);
  const app = 'log';
  cl(dsb + chalk.bold.whiteBright(app), args);
}
function worker() {
  const args = util.format.apply(this, arguments);
  const app = 'worker';
  cl(dsb + chalk.bold.magenta(app), args);
}
function debug() {
  const args = util.format.apply(this, arguments);
  const app = 'warn';
  cle(dsb + chalk.bold.keyword('orange')(app), args);
}
function warn() {
  const args = util.format.apply(this, arguments);
  const app = 'warn';
  cle(dsb + chalk.bold.keyword('orange')(app), args);
}
function error() {
  const args = util.format.apply(this, arguments);
  const app = 'error';
  cle(dsb + chalk.bold.red(app), args);
}

module.exports = { log, worker, debug, warn, error };
