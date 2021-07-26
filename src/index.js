'use strict';
const Console = require('./console');
{
  module.exports = Console;
  module.exports.globalConsole = require('./override');
  module.exports.namespace = Console.namespaceConsole;
}
