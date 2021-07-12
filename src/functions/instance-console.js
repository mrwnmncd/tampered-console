'use strict';
const chalk = require('chalk');
const util = require('util');
const { cl, cle } = require('../init');
const dsb = '  ';
const sc = ':';
function log(namespace) {
  return function () {
    const args = util.format.apply(this, arguments);
    const app = 'log';
    cl(
      dsb + chalk.bold.whiteBright(app + sc) + chalk.bold.gray(namespace),
      args,
    );
  };
}
/**
 * Namespace for Console
 * @param {string} namespace Namespace
 * @example
 * Console.worker('namespace')(args)
 */
function worker(namespace) {
  return function () {
    const args = util.format.apply(this, arguments);
    const app = 'worker';
    cl(dsb + chalk.bold.magenta(app + sc) + chalk.bold.gray(namespace), args);
  };
}
/**
 * Namespace for Console
 * @param {string} namespace Namespace
 * @example
 * Console.debug('namespace')(args)
 */
function debug(namespace) {
  return function () {
    const args = util.format.apply(this, arguments);
    const app = 'warn';
    cle(
      dsb + chalk.bold.keyword('orange')(app + sc) + chalk.bold.gray(namespace),
      args,
    );
  };
}
/**
 * Namespace for Console
 * @param {string} namespace Namespace
 * @example
 * Console.warn('namespace')(args)
 */
function warn(namespace) {
  return function () {
    const args = util.format.apply(this, arguments);
    const app = 'warn';
    cle(
      dsb + chalk.bold.keyword('orange')(app + sc) + chalk.bold.gray(namespace),
      args,
    );
  };
}
/**
 * Namespace for Console
 * @param {string} namespace Namespace
 * @example
 * Console.error('namespace')(args)
 */
function error(namespace) {
  return function () {
    const args = util.format.apply(this, arguments);
    const app = 'error';
    cle(dsb + chalk.bold.red(app + sc) + chalk.bold.gray(namespace), args);
  };
}

module.exports = { log, worker, debug, warn, error };
