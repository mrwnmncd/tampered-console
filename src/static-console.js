'use strict';
const chalk = require('chalk');
const { cl, clw, cle } = require('./init');
const sb = ' ';
const dsb = '  ';
/* TODO : spread args params */
function log(args) {
  args ? args : '';
  const app = 'log';
  cl(dsb + chalk.bold.whiteBright(app) + sb + args);
}
function worker(args) {
  args ? args : '';
  const app = 'worker';
  cl(dsb + chalk.bold.magenta(app) + sb + args);
}
function warn(args) {
  args ? args : '';
  const app = 'warn';
  clw(dsb + chalk.bold.keyword('orange')(app) + sb + args);
}
function error(args) {
  args ? args : '';
  const app = 'error';
  cle(dsb + chalk.bold.red(app) + sb + args);
}

module.exports = { log, worker, warn, error };
