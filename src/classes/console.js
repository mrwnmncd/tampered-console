'use strict';
const debug = require('debug');
const chalk = require('chalk');
const util = require('util');
const { cl, cle } = require('../init');
const dsb = '  ';
const sc = ':';
debug.enable('*');
class Console {
  /**
   * Create a `namespace` for the console istance.
   * @param {String} options namespace
   * @example
   * new Console('info').log(args);
   * new Console('info').inspect.log(obj);
   */
  constructor(namespace) {
    this._namespace = namespace;
  }
  log() {
    const args = util.format.apply(this, arguments);
    const app = 'log';
    this._namespace
      ? cl(
          dsb +
            chalk.bold.whiteBright(app + sc) +
            chalk.bold.gray(this._namespace),
          args,
        )
      : cl(dsb + chalk.bold.whiteBright(app), args);
  }
  worker() {
    const args = util.format.apply(this, arguments);
    const app = 'worker';
    this._namespace
      ? cl(
          dsb + chalk.bold.magenta(app + sc) + chalk.bold.gray(this._namespace),
          args,
        )
      : cl(dsb + chalk.bold.magenta(app), args);
  }
  warn() {
    const args = util.format.apply(this, arguments);
    const app = 'warn';
    this._namespace
      ? cle(
          dsb +
            chalk.bold.keyword('orange')(app + sc) +
            chalk.bold.gray(this._namespace),
          args,
        )
      : cl(dsb + chalk.bold.keyword('orange')(app), args);
  }
  error() {
    const args = util.format.apply(this, arguments);
    const app = 'error';
    this._namespace
      ? cle(
          dsb + chalk.bold.red(app + sc) + chalk.bold.gray(this._namespace),
          args,
        )
      : cle(dsb + chalk.bold.red(app), args);
  }
  debug() {
    const args = util.format.apply(this, arguments);
    const app = 'debug';
    debug(this._namespace ? app + sc + this._namespace : app)(args);
  }
  static log() {
    new this().log.apply(this, arguments);
  }
  static worker() {
    new this().worker.apply(this, arguments);
  }
  static warn() {
    new this().warn.apply(this, arguments);
  }
  static error() {
    new this().error.apply(this, arguments);
  }
  static debug() {
    new this().debug.apply(this, arguments);
  }
}
module.exports = Console;
