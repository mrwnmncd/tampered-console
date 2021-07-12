/*
mrwnmncd (c) 2021
https://github.com/mrwnmncd 
*/
'use strict';

{
  module.exports = require('./classes/console');
  module.exports.inspect = require('./classes/inspected-console');
  const { globalConsole } = require('./overrides');
  module.exports.globalConsole = globalConsole;
}
