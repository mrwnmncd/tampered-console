const Console = require('../src');
{
  Console.log('static Console.log');
  Console.worker('static Console.worker');
  Console.warn('static Console.warn');
  Console.error('static Console.error');
  Console.debug('static Console.debug');
  Console.namespace.log('ci')('cied');
}