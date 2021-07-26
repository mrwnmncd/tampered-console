'use strict';
{
  exports.stdout = process.stdout.write.bind(process.stdout);
  exports.stderr = process.stderr.write.bind(process.stderr);
  exports.styles = require('../lib/ansi-styles')();
}
