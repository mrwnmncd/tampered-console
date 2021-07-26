'use strict';
const util = require('util');
const { stdout, stderr } = require('./exports');
const { writeStream } = require('./core/write');

const namespaceConsole = {
  /**
   * namespaceConsole
   * @param {String} namespace The namespace concatenated to the prefix.
   * @returns Function
   */
  log: function (namespace) {
    return function (...args) {
      writeStream({ prefix: 'log', namespace }, stdout, ...args);
    };
  },
  /**
   * namespaceConsole
   * @param {String} namespace The namespace concatenated to the prefix.
   * @returns Function
   */
  worker: function (namespace) {
    return function (...args) {
      writeStream({ prefix: 'worker', namespace }, stdout, ...args);
    };
  },
  /**
   * namespaceConsole
   * @param {String} namespace The namespace concatenated to the prefix.
   * @returns Function
   */
  debug: function (namespace) {
    return function (...args) {
      writeStream({ prefix: 'debug', namespace }, stderr, ...args);
    };
  },
  /**
   * namespaceConsole
   * @param {String} namespace The namespace concatenated to the prefix.
   * @returns Function
   */
  warn: function (namespace) {
    return function (...args) {
      writeStream({ prefix: 'warn', namespace }, stderr, ...args);
    };
  },
  /**
   * namespaceConsole
   * @param {String} namespace The namespace concatenated to the prefix.
   * @returns Function
   */
  error: function (namespace) {
    return function (...args) {
      writeStream({ prefix: 'error', namespace }, stderr, ...args);
    };
  },
};

class Console {
  /**
   * @param {String} namespace The namespace concatenated to the prefix.
   */
  constructor(namespace) {
    this._namespace = namespace;
  }
  log(...args) {
    if (this._namespace) return namespaceConsole.log(this._namespace)(...args);
    writeStream('log', stdout, ...args);
  }
  worker(...args) {
    if (this._namespace) return namespaceConsole.worker(this._namespace)(...args);
    writeStream('worker', stdout, ...args);
  }
  debug(...args) {
    if (this._namespace) return namespaceConsole.debug(this._namespace)(...args);
    writeStream('debug', stdout, ...args);
  }
  warn(...args) {
    if (this._namespace) return namespaceConsole.warn(this._namespace)(...args);
    writeStream('warn', stdout, ...args);
  }
  error(...args) {
    if (this._namespace) return namespaceConsole.error(this._namespace)(...args);
    writeStream('error', stdout, ...args);
  }
  static log(...args) {
    writeStream('log', stdout, ...args)
  }
  static worker(...args) {
    writeStream('worker', stdout, ...args)
  }
  static debug(...args) {
    writeStream('debug', stderr, ...args)
  }
  static warn(...args) {
    writeStream('warn', stderr, ...args)
  }
  static error(...args) {
    writeStream('error', stderr, ...args)
  }
}

module.exports = Console;
module.exports.namespaceConsole = namespaceConsole;
