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
  const { log, worker, warn, error } = require('./instance-console-inspect');
  module.exports.inspect = { log, worker, warn, error };
}
