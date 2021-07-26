{
  let cli = null;
  const color = require('../lib/console-color');
  if (color.stdout) cli = 'ansi';
  if (color.stdout.has256) cli = 'ansi256';
  if (color.stderr.has16m) cli = 'ansi16m';
  exports.consoleSupport = cli;
}
{
  // config for methods and namespace
  exports.prefixConfig = {
    log: {
      color: '#FFFFFF',
      bold: true,
      bgColor: false,
      underline: false,
    },
    worker: {
      color: '#FF00FF',
      bold: true,
      bgColor: false,
      underline: false,
    },
    debug: {
      color: '#FC7F00',
      bold: true,
      bgColor: false,
      underline: false,
    },
    warn: {
      color: '#FFFF00',
      bold: true,
      bgColor: false,
      underline: false,
    },
    error: {
      color: '#FF0000',
      bold: true,
      bgColor: false,
      underline: false,
    },
  };
  exports.namespaceConfig = {
    color: '#808080',
    bold: true,
    bgColor: false,
    underline: false,
  };
}
