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
        const { fancy, namespace } = option;
        switch (typeof fancy) {
          case 'boolean':
            overrideNative = fancy;
            break;
          default:
            overrideNative = true;
            break;
        }
        switch (typeof namespace) {
          case 'boolean':
            globalNamespace = namespace;
            if (globalNamespace === true) overrideNative = true;
            break;
          case 'string':
          case 'number':
            overrideNative = true;
            globalNamespace = true;
            autoNamespace = option;
            option = namespace;
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
      const Console = require('./console'),
        { namespaceConsole } = Console;
      if (globalNamespace === true) {
        if (autoNamespace) {
          console.debug = namespaceConsole.debug(autoNamespace);
          console.log = namespaceConsole.log(autoNamespace);
          console.worker = namespaceConsole.worker(autoNamespace);
          console.warn = namespaceConsole.warn(autoNamespace);
          console.error = namespaceConsole.error(autoNamespace);
          return;
        }
        console.debug = namespaceConsole.debug;
        console.log = namespaceConsole.log;
        console.worker = namespaceConsole.worker;
        console.warn = namespaceConsole.warn;
        console.error = namespaceConsole.error;
        return;
      }
      console.debug = Console.debug;
      console.log = Console.log;
      console.worker = Console.worker;
      console.warn = Console.warn;
      console.error = Console.error;
      return;
    }
  }
  if (!overrideNative || overrideNative === false) {
    console.log = function () {
      process.stdout.write(util.format.apply(this, arguments) + '\r\n');
    };
    console.warn = function () {
      process.stderr.write(util.format.apply(this, arguments) + '\r\n');
    };
    console.error = function () {
      process.stderr.write(util.format.apply(this, arguments) + '\r\n');
    };
    console.debug = function () {
      process.stdout.write(util.format.apply(this, arguments) + '\r\n');
    };
  }
}
module.exports = globalConsole;
