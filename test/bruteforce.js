const Console = require('../src');
let i = 0;
{
  console.log('global console.log');
}
{
  {
    console.$native.log(i++);
    Console.log('static Console.log');
    Console.worker('static Console.worker');
    Console.warn('static Console.warn');
    Console.error('static Console.error');
    Console.debug('static Console.debug');
  }
  {
    console.$native.log(i++);
    // TODO : reconsider refactor
    Console.inspect.log('static inspected Console.log');
    Console.inspect.warn('static inspected Console.warn');
    Console.inspect.error('static inspected Console.error');
  }
}
{
  console.$native.log(i++);
  new Console().log('instance Console.log');
  new Console().worker('instance Console.worker');
  new Console().warn('instance Console.warn');
  new Console().error('instance Console.error');
  new Console().debug('instance Console.debug');
}
{
  console.$native.log(i++);
  new Console({ inspect: true }).log('instance object-inspected Console.log');
  new Console({ inspect: true }).worker(
    'instance object-inspected Console.worker',
  );
  new Console({ inspect: true }).warn('instance object-inspected Console.warn');
  new Console({ inspect: true }).error(
    'instance object-inspected Console.error',
  );
  new Console({ inspect: true }).debug(
    'instance object-inspected Console.debug',
  );
}
{
  {
    console.$native.log(i++);
    // new Console({ name: string }) || new Console(string);
    new Console({ name: 'ci' }).log('instance object-named Console.log');
    new Console({ name: 'ci' }).worker('instance object-named Console.worker');
    new Console({ name: 'ci' }).warn('instance object-named Console.warn');
    new Console({ name: 'ci' }).error('instance object-named Console.error');
    new Console({ name: 'ci' }).debug('instance object-named Console.debug');
  }
  {
    console.$native.log(i++);
    // new Console({ name: string }) || new Console(string);
    new Console('ci').log('instance string-named Console.log');
    new Console('ci').worker('instance string-named Console.worker');
    new Console('ci').warn('instance string-named Console.warn');
    new Console('ci').error('instance string-named Console.error');
    new Console('ci').debug('instance string-named Console.debug');
  }
}
{
  console.$native.log(i++);
  new Console({ inspect: true, name: 'ci' }).log(
    'instance object-inspected-named Console.log',
  );
  new Console({ inspect: true, name: 'ci' }).worker(
    'instance object-inspected-named Console.worker',
  );
  new Console({ inspect: true, name: 'ci' }).warn(
    'instance object-inspected-named Console.warn',
  );
  new Console({ inspect: true, name: 'ci' }).error(
    'instance object-inspected-named Console.error',
  );
  new Console({ inspect: true, name: 'ci' }).debug(
    'instance object-inspected-named Console.debug',
  );
}
{
  console.$native.log(i++);
  Console.globalConsole(true);
  // || Console.globalConsole({ fancy: true });
  console.log('modified boolean-true-global console.log');
  console.worker('modified boolean-true-global console.worker');
  console.warn('modified boolean-true-global console.warn');
  console.error('modified boolean-true-global console.error');
  console.debug('modified boolean-true-global console.debug');
}
{
  {
    console.$native.log(i++);
    Console.globalConsole({ fancy: true });
    // || Console.globalConsole(true);
    console.log('modified object-true-fancy global console.log');
    console.warn('modified object-true-fancy global console.warn');
    console.error('modified object-true-fancy global console.error');
    console.debug('modified object-true-fancy global console.debug');
  }
  {
    console.$native.log(i++);
    Console.globalConsole({ fancy: false });
    // || Console.globalConsole(false);
    console.log('modified object-false-fancy global console.log');
    console.warn('modified object-false-fancy global console.warn');
    console.error('modified object-false-fancy global console.error');
    console.debug('modified object-false-fancy global console.debug');
  }
}
{
  {
    console.$native.log(i++);
    Console.globalConsole({ inspect: true });
    // no prefix, args are simply inspected
    console.log('modified object-true-inspect global console.log');
    console.warn('modified object-true-inspect global console.warn');
    console.error('modified object-true-inspect global console.error');
    console.debug('modified object-true-inspect global console.debug');
  }
  {
    11;
    console.$native.log(i++);
    Console.globalConsole({ inspect: false });
    // no prefix, no inspect, just the native
    /* TODO : Enable fancy by default. */
    console.log('modified object-false-inspect global console.log');
    console.warn('modified object-false-inspect global console.warn');
    console.error('modified object-false-inspect global console.error');
    console.debug('modified object-false-inspect global console.debug');
  }
}
{
  {
    console.$native.log(i++);
    Console.globalConsole({ namespace: true });
    /**
     * @description
     * When the namespace option is enabled,
     * the fancy is enabled by default.
     * Argument inspection is disabled unless enabled.
     */
    console.log('ci')('modified object-true-namespace global console.log');
    console.warn('ci')('modified object-true-namespace global console.warn');
    console.error('ci')('modified object-true-namespace global console.error');
    console.debug('ci')('modified object-true-namespace global console.debug');
  }
  {
    console.$native.log(i++);
    Console.globalConsole({ namespace: false });
    // || Console.globalConsole(false);
    /* TODO : Enable just the fancy */
    console.log('modified object-false-namespace global console.log');
    console.warn('modified object-false-namespace global console.warn');
    console.error('modified object-false-namespace global console.error');
    console.debug('modified object-false-namespace global console.debug');
  }
}
{
  console.$native.log(i++);
  Console.globalConsole(false);
  // just the native, nothing special
  console.log('modified boolean-false-global console.log');
  console.warn('modified boolean-false-global console.warn');
  console.error('modified boolean-false-global console.error');
  console.debug('modified boolean-false-global console.debug');
}
{
  {
    console.$native.log(i++);
    Console.globalConsole({ inspect: true, fancy: true });
    console.log('modified object-true-inspect-true-fancy global console.log');
    console.warn('modified object-true-inspect-true-fancy global console.warn');
    console.error(
      'modified object-true-inspect-true-fancy global console.error',
    );
    console.debug(
      'modified object-true-inspect-true-fancy global console.debug',
    );
  }
  {
    console.$native.log(i++);
    Console.globalConsole({ inspect: true, fancy: false });
    console.log('modified object-true-inspect-false-fancy global console.log');
    console.warn(
      'modified object-true-inspect-false-fancy global console.warn',
    );
    console.error(
      'modified object-true-inspect-false-fancy global console.error',
    );
    console.debug(
      'modified object-true-inspect-false-fancy global console.debug',
    );
  }
  {
    console.$native.log(i++);
    Console.globalConsole({ inspect: false, fancy: true });
    console.log('modified object-false-inspect-true-fancy global console.log');
    console.warn(
      'modified object-false-inspect-true-fancy global console.warn',
    );
    console.error(
      'modified object-false-inspect-true-fancy global console.error',
    );
    console.debug(
      'modified object-false-inspect-true-fancy global console.debug',
    );
  }
  {
    console.$native.log(i++);
    Console.globalConsole({ inspect: false, fancy: false });
    console.log('modified object-false-inspect-false-fancy global console.log');
    console.warn(
      'modified object-false-inspect-false-fancy global console.warn',
    );
    console.error(
      'modified object-false-inspect-false-fancy global console.error',
    );
    console.debug(
      'modified object-false-inspect-false-fancy global console.debug',
    );
  }
}
{
  console.$native.log(i++);
  Console.globalConsole({ inspect: true, namespace: true });
  // // Console.globalConsole({ inspect: true, namespace: false });
  console.log('ci')(
    'modified object-true-inspect-true-namespace global console.log',
  );
  console.warn('ci')(
    'modified object-true-inspect-true-namespace global console.warn',
  );
  console.error('ci')(
    'modified object-true-inspect-true-namespace global console.error',
  );
  console.debug('ci')(
    'modified object-true-inspect-true-namespace global console.debug',
  );
}
{
  console.$native.log(i++);
  Console.globalConsole({ inspect: true, fancy: false });
  console.log('modified object-true-inspect-false-fancy global console.log');
  console.warn('modified object-true-inspect-false-fancy global console.warn');
  console.error(
    'modified object-true-inspect-false-fancy global console.error',
  );
  console.debug(
    'modified object-true-inspect-false-fancy global console.debug',
  );
}
