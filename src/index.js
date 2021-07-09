/*

mrwnmncd (c) 2021 
https://github.com/mrwnmncd 

*/

const Console = require('./console');
const { globalConsole } = require('./overrides');
{
  module.exports = Console;
  module.exports.globalConsole = globalConsole;
}
{
  const { log, warn, error } = require('./static-console-just-inspect');
  module.exports.inspect = { log, warn, error };
}
