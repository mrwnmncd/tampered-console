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
class Console {
  /**
   * Create a `namespace` or enable `inspect` option.
   * @param {String} options namespace
   * @param {Object} options inspect
   * @example
   * new Console('info').log(args)
   * new Console({inspect: true}).log(args)
   * new Console({name: 'info', inspect: true}).log(args)
   */
  constructor(options) {
    this.$args = options;
    if (typeof options === 'string') {
      this._namespace = options;
      this._inspect = false;
    }
    if (typeof options === 'object') {
      const { name, inspect } = options;
      this._namespace = name;
      this._inspect = inspect || false;
      if (inspect && typeof inspect !== 'boolean') {
        this._inspect = false;
        clw(
          dsb +
            chalk.bold.keyword('orange')(app + sc) +
            chalk.bold.gray('tampered-console') +
            sb +
            `'inspect' option is not a boolean, assumed ${this._inspect}`,
        );
      }
    }
  }
  log(args) {
    args ? args : '';
    const app = 'log';
    this._namespace
      ? this._inspect === true
        ? cl(
            dsb +
              chalk.bold.whiteBright(app + sc) +
              chalk.bold.gray(this._namespace) +
              sb +
              util.inspect(args),
          )
        : cl(
            dsb +
              chalk.bold.whiteBright(app + sc) +
              chalk.bold.gray(this._namespace) +
              sb +
              args,
          )
      : this._inspect === true
      ? cl(dsb + chalk.bold.whiteBright(app) + sb + util.inspect(args))
      : cl(dsb + chalk.bold.whiteBright(app) + sb + args);
  }
  static log(args) {
    args ? args : '';
    const app = 'log';
    cl(dsb + chalk.bold.whiteBright(app) + sb + args);
  }
  worker(args) {
    args ? args : '';
    const app = 'worker';
    this._namespace
      ? this._inspect === true
        ? cl(
            dsb +
              chalk.bold.magenta(app + sc) +
              chalk.bold.gray(this._namespace) +
              sb +
              util.inspect(args),
          )
        : cl(
            dsb +
              chalk.bold.magenta(app + sc) +
              chalk.bold.gray(this._namespace) +
              sb +
              args,
          )
      : this._inspect === true
      ? cl(dsb + chalk.bold.magenta(app) + sb + util.inspect(args))
      : cl(dsb + chalk.bold.magenta(app) + sb + args);
  }
  static worker(args) {
    args ? args : '';
    const app = 'worker';
    cl(dsb + chalk.bold.magenta(app) + sb + args);
  }
  warn(args) {
    args ? args : '';
    const app = 'warn';
    this._namespace
      ? this._inspect === true
        ? clw(
            dsb +
              chalk.bold.keyword('orange')(app + sc) +
              chalk.bold.gray(this._namespace) +
              sb +
              util.inspect(args),
          )
        : clw(
            dsb +
              chalk.bold.keyword('orange')(app + sc) +
              chalk.bold.gray(this._namespace) +
              sb +
              args,
          )
      : this._inspect === true
      ? cl(dsb + chalk.bold.keyword('orange')(app) + sb + util.inspect(args))
      : cl(dsb + chalk.bold.keyword('orange')(app) + sb + args);
  }
  static warn(args) {
    args ? args : '';
    const app = 'warn';
    clw(dsb + chalk.bold.keyword('orange')(app) + sb + args);
  }
  error(args) {
    args ? args : '';
    const app = 'error';
    this._namespace
      ? this._inspect === true
        ? cle(
            dsb +
              chalk.bold.red(app + sc) +
              chalk.bold.gray(this._namespace) +
              sb +
              util.inspect(args),
          )
        : cle(
            dsb +
              chalk.bold.red(app + sc) +
              chalk.bold.gray(this._namespace) +
              sb +
              args,
          )
      : this._inspect === true
      ? cle(dsb + chalk.bold.red(app) + sb + util.inspect(args))
      : cle(dsb + chalk.bold.red(app) + sb + args);
  }
  static error(args) {
    args ? args : '';
    const app = 'error';
    cle(dsb + chalk.bold.red(app) + sb + args);
  }
  debug(args) {
    args ? args : '';
    const app = 'debug';
    debug(this._namespace ? app + sc + this._namespace : app)(
      util.inspect(args),
    );
  }
  static debug(args) {
    args ? args : '';
    const app = 'debug';
    debug(app)(util.inspect(args));
  }
}

module.exports = Console;
