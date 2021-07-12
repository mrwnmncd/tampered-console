'use strict';
const util = require('util');
{
  exports.cl = function () {
    process.stdout.write(util.format.apply(this, arguments) + '\n');
  };
  exports.cle = function () {
    process.stderr.write(util.format.apply(this, arguments) + '\n');
  };
}
