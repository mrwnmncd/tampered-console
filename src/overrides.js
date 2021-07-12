'use strict';
const util = require('util');
/**
 * Params must be boolean or string, else assumed `true`.
 * @param {boolean} option option for global `console`
 * @example
 * globalConsole(true); // override
 * globalConsole('namespace'); // global uniform namespace
 * globalConsole({ namespace: true }); // global namespace
 */
function globalConsole(option) {
  let overrideNative = true;
  let globalNamespace = false;
  let autoNamespace;
  {
    switch (typeof option) {
      case 'boolean':
        overrideNative = option;
        globalNamespace = false;
        break;
      case 'number':
      case 'string':
        autoNamespace = option;
        overrideNative = true;
        globalNamespace = true;
        break;
      case 'object':
        const { namespace } = option;
        switch (typeof namespace) {
          case 'boolean':
            globalNamespace = namespace;
            break;
          case 'string':
          case 'number':
            autoNamespace = option;
            option = namespace;
            break;
          default:
            break;
        }
        break;
      default:
        overrideNative = true;
        break;
    }
  }
  {
    if (overrideNative === true) {
      {
        const {
          log,
          worker,
          warn,
          error,
          debug,
        } = require('./functions/inspected-console');
        console.inspect = {};
        console.inspect.log = log;
        console.inspect.worker = worker;
        console.inspect.warn = warn;
        console.inspect.error = error;
        console.inspect.debug = debug;
      }
      if (globalNamespace === true) {
        if (autoNamespace) {
          const {
            log,
            worker,
            warn,
            error,
            debug,
          } = require('./functions/instance-console');
          console.debug = debug(autoNamespace);
          console.log = log(autoNamespace);
          console.worker = worker(autoNamespace);
          console.warn = warn(autoNamespace);
          console.error = error(autoNamespace);
          return;
        }
        const {
          log,
          worker,
          warn,
          error,
          debug,
        } = require('./functions/instance-console');
        console.debug = debug;
        console.log = log;
        console.worker = worker;
        console.warn = warn;
        console.error = error;
        return;
      }
      const {
        log,
        worker,
        warn,
        error,
        debug,
      } = require('./functions/console');
      console.debug = debug;
      console.log = log;
      console.worker = worker;
      console.warn = warn;
      console.error = error;
      return;
    }
  }
  if (!overrideNative || overrideNative === false) {
    delete console.inspect;
    console.log = function () {
      process.stdout.write(util.format.apply(this, arguments) + '\n');
    };
    console.warn = function () {
      process.stderr.write(util.format.apply(this, arguments) + '\n');
    };
    console.error = function () {
      process.stderr.write(util.format.apply(this, arguments) + '\n');
    };
    console.debug = function () {
      process.stdout.write(util.format.apply(this, arguments) + '\n');
    };
  }
}
exports.globalConsole = globalConsole;
