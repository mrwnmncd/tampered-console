'use strict';
const debug = require('debug');
const chalk = require('chalk');
const util = require('util');
const { cl, clw, cle } = require('./init');
const sb = ' ';
const dsb = '  ';
const sc = ':';
debug.enable('*');
/* TODO : spread params in class methods */
/**
 * Namespace for Console
 * @param {string} namespace Namespace
 * @example
 * Console.log('namespace')(args)
 */
function log(namespace) {
  return function (args) {
    const app = 'log';
    cl(
      dsb +
        chalk.bold.whiteBright(app + sc) +
        chalk.bold.gray(namespace) +
        sb +
        util.inspect(args),
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
  return function (args) {
    const app = 'worker';
    cl(
      dsb +
        chalk.bold.magenta(app + sc) +
        chalk.bold.gray(namespace) +
        sb +
        util.inspect(args),
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
  return function (args) {
    const app = 'warn';
    clw(
      dsb +
        chalk.bold.keyword('orange')(app + sc) +
        chalk.bold.gray(namespace) +
        sb +
        util.inspect(args),
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
  return function (args) {
    const app = 'error';
    cle(
      dsb +
        chalk.bold.red(app + sc) +
        chalk.bold.gray(namespace) +
        sb +
        util.inspect(args),
    );
  };
}

module.exports = { log, worker, warn, error };
