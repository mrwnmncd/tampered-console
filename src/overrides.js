const Console = require('./console');
require('./init');
/**
 * Could be an object
 * @param {object|boolean} options options for global `console`
 * @example globalConsole({override: true, inspect: false})
 */
function globalConsole(options) {
  let overrideNative = true;
  let autoInspect = false;
  let globalNamespace = false;
  //let autoNamespace = '';
  {
    switch (typeof options) {
      case 'object': {
        let { fancy, inspect, namespace } = options;
        if (fancy && typeof fancy !== 'boolean') {
          fancy = true;
          new Console('tampered-console').warn(
            `'fancy' option is not a boolean, assumed ${fancy}`,
          );
        }
        if (inspect && typeof inspect !== 'boolean') {
          inspect = true;
          new Console('tampered-console').warn(
            `'inspect' option is not a boolean, assumed ${inspect}`,
          );
        }
        if (namespace && typeof namespace !== 'boolean') {
          namespace = false;
          new Console('tampered-console').warn(
            `'namespace' option is not a boolean, assumed ${inspect}`,
          );
        }
        overrideNative = fancy;
        autoInspect = inspect || false;
        globalNamespace = namespace || false;
        if (
          (!fancy && !autoInspect && namespace === true) ||
          (!fancy && autoInspect === true && namespace === true)
        )
          overrideNative = true;
        new Console('tampered-console-object').debug(
          `overrideNative: ${overrideNative}`,
        );
        new Console('tampered-console-object').debug(
          `autoInspect: ${autoInspect}`,
        );
        new Console('tampered-console-object').debug(
          `globalNamespace: ${globalNamespace}`,
        );
        break;
      }
      case 'boolean':
        overrideNative = options;
        autoInspect = false;
        globalNamespace = false;
        new Console('tampered-console-boolean').debug(
          `overrideNative: ${overrideNative}`,
        );
        new Console('tampered-console-boolean').debug(
          `autoInspect: ${autoInspect}`,
        );
        new Console('tampered-console-boolean').debug(
          `globalNamespace: ${globalNamespace}`,
        );
        break;
      case 'string':
        overrideNative = true;
        autoInspect = false;
        globalNamespace = true;
        autoNamespace = options;
        break;
      default:
        overrideNative = true;
        break;
    }
  }
  {
    if (overrideNative === true) {
      if (autoInspect === true) {
        if (globalNamespace === true) {
          new Console('tampered-console-c').debug('instance-console-inspect');
          const {
            log,
            worker,
            warn,
            error,
          } = require('./instance-console-inspect');
          const { debug } = require('./instance-debug');
          console.debug = debug;
          console.log = log;
          console.worker = worker;
          console.warn = warn;
          console.error = error;
          return;
        }
        new Console('tampered-console-c').debug('static-console-inspect');
        const {
          log,
          worker,
          warn,
          error,
        } = require('./static-console-inspect');
        const { debug } = require('./static-debug');
        console.debug = debug;
        console.log = log;
        console.worker = worker;
        console.warn = warn;
        console.error = error;
        return;
      }
      if (globalNamespace === true) {
        if (typeof options === 'string') {
          new Console('tampered-console-c').debug(
            'instance-console~string-option',
          );
          const { log, worker, warn, error } = require('./instance-console');
          const { debug } = require('./instance-debug');
          console.debug = debug(options);
          console.log = log(options);
          console.worker = worker(options);
          console.warn = warn(options);
          console.error = error(options);
          return;
        }
        new Console('tampered-console-c').debug('instance-console');
        const { log, worker, warn, error } = require('./instance-console');
        const { debug } = require('./instance-debug');
        console.debug = debug;
        console.log = log;
        console.worker = worker;
        console.warn = warn;
        console.error = error;
        return;
      }
      {
        new Console('tampered-console-c').debug('static-console');
        const { log, worker, warn, error } = require('./static-console');
        const { debug } = require('./static-debug');
        console.debug = debug;
        console.log = log;
        console.worker = worker;
        console.warn = warn;
        console.error = error;
      }
    }
    if (!overrideNative || overrideNative === false) {
      if (autoInspect === true) {
        new Console('tampered-console-c').debug('static-console-just-inspect');
        const { log, warn, error } = require('./static-console-just-inspect');
        const { debug } = require('./static-debug');
        console.log = log;
        console.warn = warn;
        console.error = error;
        console.debug = debug;
        return;
      }
      new Console('tampered-console-c').debug('native-console');
      console.log = console.$native.log;
      console.warn = console.$native.warn;
      console.error = console.$native.error;
      console.debug = console.$native.debug;
    }
  }
}

module.exports = { globalConsole };
