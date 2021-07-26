'use strict';
const util = require('util');
const { styles } = require('../exports');
const config = require('../config');

// TODO : create ansify for args

/**
 * ansifyPrefix
 * @param {String} prefix The prefix/method added.
 * @returns {String} Formatted string with ANSI escapes attached.
 */
exports.ansifyPrefix = function (prefix) {
  // TODO : conditionalise(!config.config[prefix]) && throw ansify error
  const open = [];
  const close = [];
  const modifiers = [
    'reset', // ? should this be really here?
    'bold',
    'dim',
    'italic', // support varies
    'underline',
    'overline', // VTE Terminal
    'inverse',
    'hidden', // ? should this be really here?
    'strikethrough', // support varies
  ];
  open.push(
    styles.color[config.consoleSupport](
      ...styles.hexToRgb(config.prefixConfig[prefix].color),
    ),
  );
  close.push(styles.color.close);
  modifiers.forEach(function (modifier) {
    if (config.prefixConfig[prefix][modifier] === true) {
      open.push(styles.modifier[modifier].open);
      close.push(styles.modifier[modifier].close);
    }
  });
  return {
    open: util
      .format(...open)
      .toString()
      .replace(/\s+/g, ''),

    close: util
      .format(...close)
      .toString()
      .replace(/\s+/g, ''),
  };
};

exports.ansify = function (
  input,
  format = {
    color: '#808080',
    bold: false,
    dim: false,
    underline: false,
    inverse: false,
  },
) {
  const open = [];
  const close = [];
  const modifiers = ['bold', 'dim', 'underline', 'inverse'];
  if (!format.color) format.color = '#808080';
  open.push(
    styles.color[config.consoleSupport](...styles.hexToRgb(format.color)),
  );
  close.push(styles.color.close);
  modifiers.forEach(function (modifier) {
    if (format[modifier] === true) {
      open.push(styles.modifier[modifier].open);
      close.push(styles.modifier[modifier].close);
    }
  });
  return (
    util
      .format(...open)
      .toString()
      .replace(/\s+/g, '') +
    input +
    util
      .format(...close)
      .toString()
      .replace(/\s+/g, '')
  );
};
