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
   */
  constructor(namespace) {
    this._namespace = namespace;
  }
  log(arg) {
    const app = 'log';
    this._namespace
      ? cl(
          dsb +
            chalk.bold.whiteBright(app + sc) +
            chalk.bold.gray(this._namespace),
          util.inspect(arg),
        )
      : cl(dsb + chalk.bold.whiteBright(app), util.inspect(arg));
  }
  worker(arg) {
    const app = 'worker';
    this._namespace
      ? cl(
          dsb + chalk.bold.magenta(app + sc) + chalk.bold.gray(this._namespace),
          util.inspect(arg),
        )
      : cl(dsb + chalk.bold.magenta(app), util.inspect(arg));
  }
  warn(arg) {
    const app = 'warn';
    this._namespace
      ? cle(
          dsb +
            chalk.bold.keyword('orange')(app + sc) +
            chalk.bold.gray(this._namespace),
          util.inspect(arg),
        )
      : cl(dsb + chalk.bold.keyword('orange')(app), util.inspect(arg));
  }
  error(arg) {
    const app = 'error';
    this._namespace
      ? cle(
          dsb + chalk.bold.red(app + sc) + chalk.bold.gray(this._namespace),
          util.inspect(arg),
        )
      : cle(dsb + chalk.bold.red(app), util.inspect(arg));
  }
  debug(arg) {
    const app = 'debug';
    debug(this._namespace ? app + sc + this._namespace : app)(
      util.inspect(arg),
    );
  }
  static log(arg) {
    new this().log(arg);
  }
  static worker(arg) {
    new this().worker(arg);
  }
  static warn(arg) {
    new this().warn(arg);
  }
  static error(arg) {
    new this().error(arg);
  }
  static debug(arg) {
    new this().debug(arg);
  }
}
module.exports = Console;
