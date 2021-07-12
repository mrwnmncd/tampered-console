const Console = require('./console');
require('./init');
/**
 * @param {object|boolean} options options for global `console`
 * @example
 * globalConsole({ fancy: false, inspect: true });
 * globalConsole(true);
 */
function globalConsole(options) {
  let overrideNative = true;
  let autoInspect = false;
  let globalNamespace = false;
  {
    switch (typeof options) {
      case 'object': {
        let { fancy, inspect, namespace } = options;
        if (fancy && typeof fancy !== 'boolean') {
          fancy = true;
        }
        if (inspect && typeof inspect !== 'boolean') {
          inspect = true;
        }
        if (namespace && typeof namespace !== 'boolean') {
          namespace = false;
        }
        {
          switch (fancy) {
            case true:
            case false:
              fancy = fancy;
              break;
            default:
              fancy = true;
              break;
          }
          switch (inspect) {
            case true:
            case false:
              inspect = inspect;
              break;
            default:
              inspect = false;
              break;
          }
          switch (namespace) {
            case true:
              fancy = true;
            case false:
              namespace = namespace;
              break;
            default:
              namespace = false;
              break;
          }
        }
        {
          overrideNative = fancy;
          autoInspect = inspect;
          globalNamespace = namespace;
        }
        break;
      }
      case 'boolean':
        overrideNative = options;
        autoInspect = false;
        globalNamespace = false;
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
          const { log, worker, warn, error } = require('./instance-console');
          const { debug } = require('./instance-debug');
          console.debug = debug(options);
          console.log = log(options);
          console.worker = worker(options);
          console.warn = warn(options);
          console.error = error(options);
          return;
        }
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
        const {
          log,
          debug,
          warn,
          error,
        } = require('./static-console-just-inspect');
        console.log = log;
        console.warn = warn;
        console.error = error;
        console.debug = debug;
        delete console.worker;
        return;
      }
      console.log = console.$native.log;
      console.warn = console.$native.warn;
      console.error = console.$native.error;
      console.debug = console.$native.debug;
    }
  }
}

module.exports = { globalConsole };
