'use strict';
const util = require('util');
const config = require('../config');
const { ansifyPrefix, ansify } = require('./ansify');

/**
 *
 * @param {Object} init Prefix and Namespace
 * @param  {...any} args Arguments that prints to the console.
 * @returns {String} Formatted String with ANSI Escapes attached.
 */
function write(init, ...args) {
  let prefix, namespace;
  switch (typeof init) {
    case 'string':
      prefix = init;
      break;
    case 'object':
      namespace = init.namespace;
      prefix = init.prefix;
      break;
  }
  // TODO : attach args config with html hex plugins
  if (!config.consoleSupport)
    return util.format(
      '  ' + '[' + prefix.toString().toUpperCase() + ']',
      ...args,
      '\r\n',
    );
  const ansiPrefix = ansifyPrefix(prefix);
  if (namespace)
    return util.format(
      '  ' +
        ansiPrefix.open +
        `${prefix}:` +
        ansiPrefix.close +
        ansify(namespace, { bold: true }),
      ...args,
      '\r\n',
    );
  return util.format(
    '  ' + ansiPrefix.open + prefix + ansiPrefix.close,
    ...args,
    '\r\n',
  );
}
/**
 * WriteStream
 * @param {Object} init Namespace and Prefix
 * @param stream Stream to where pipe the arguments.
 * @param {any} args Arguments that prints to the console.
 * @returns {Function} Function
 */
exports.writeStream = function (init, stream, ...args) {
  // TODO : attach stream configs
  stream(write(init, util.format(...args)));
};

exports.write = write;
