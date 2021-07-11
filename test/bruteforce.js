const Console = require('../src');
let i = 0;
{
  console.$native.log(i++);
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
    Console.inspect.log('static inspected Console.log');
    Console.inspect.worker('static inspected Console.worker');
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
  {
    {
      console.$native.log(i++);
      new Console({ inspect: true }).log(
        'instance object-inspected Console.log',
      );
      new Console({ inspect: true }).worker(
        'instance object-inspected Console.worker',
      );
      new Console({ inspect: true }).warn(
        'instance object-inspected Console.warn',
      );
      new Console({ inspect: true }).error(
        'instance object-inspected Console.error',
      );
      new Console({ inspect: true }).debug(
        'instance object-inspected Console.debug',
      );
    }
    {
      console.$native.log(i++);
      new Console({ inspect: false }).log(
        'instance object-false-inspected Console.log',
      );
      new Console({ inspect: false }).worker(
        'instance object-false-inspected Console.worker',
      );
      new Console({ inspect: false }).warn(
        'instance object-false-inspected Console.warn',
      );
      new Console({ inspect: false }).error(
        'instance object-false-inspected Console.error',
      );
      new Console({ inspect: false }).debug(
        'instance object-false-inspected Console.debug',
      );
    }
  }
  {
    {
      6;
      console.$native.log(i++);
      // new Console({ name: string }) || new Console(string);
      new Console({ name: 'ci' }).log('instance object-named Console.log');
      new Console({ name: 'ci' }).worker(
        'instance object-named Console.worker',
      );
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
    {
      console.$native.log(i++);
      Console.globalConsole({ fancy: true });
      // || Console.globalConsole(true);
      console.log('modified object-true-fancy global console.log');
      console.worker('modified object-true-fancy global console.worker');
      console.warn('modified object-true-fancy global console.warn');
      console.error('modified object-true-fancy global console.error');
      console.debug('modified object-true-fancy global console.debug');
    }
    {
      console.$native.log(i++);
      Console.globalConsole({ fancy: false });
      // || Console.globalConsole(false);
      console.log('modified object-false-fancy global console.log');
      // console worker disabled
      console.warn('modified object-false-fancy global console.warn');
      console.error('modified object-false-fancy global console.error');
      console.debug('modified object-false-fancy global console.debug');
    }
  }
  {
    {
      console.$native.log(i++);
      Console.globalConsole({ inspect: true });
      console.log('modified object-true-inspect global console.log');
      console.worker('modified object-true-inspect global console.worker');
      console.warn('modified object-true-inspect global console.warn');
      console.error('modified object-true-inspect global console.error');
      console.debug('modified object-true-inspect global console.debug');
    }
    {
      13;
      console.$native.log(i++);
      Console.globalConsole({ inspect: false });
      // || Console.globalConsole(true);
      console.log('modified object-false-inspect global console.log');
      console.worker('modified object-false-inspect global console.worker');
      console.warn('modified object-false-inspect global console.warn');
      console.error('modified object-false-inspect global console.error');
      console.debug('modified object-false-inspect global console.debug');
    }
  }
  {
    {
      console.$native.log(i++);
      Console.globalConsole({ namespace: true });
      console.log('ci')('modified object-true-namespace global console.log');
      console.worker('ci')(
        'modified object-true-namespace global console.worker',
      );
      console.warn('ci')('modified object-true-namespace global console.warn');
      console.error('ci')(
        'modified object-true-namespace global console.error',
      );
      console.debug('ci')(
        'modified object-true-namespace global console.debug',
      );
    }
    {
      15;
      console.$native.log(i++);
      Console.globalConsole({ namespace: false });
      // || Console.globalConsole(true);
      console.log('modified object-false-namespace global console.log');
      console.worker('modified object-false-namespace global console.worker');
      console.warn('modified object-false-namespace global console.warn');
      console.error('modified object-false-namespace global console.error');
      console.debug('modified object-false-namespace global console.debug');
    }
  }
}
{
  console.$native.log(i++);
  Console.globalConsole(false);
  console.log('modified boolean-false-global console.log');
  // console worker disabled
  console.warn('modified boolean-false-global console.warn');
  console.error('modified boolean-false-global console.error');
  console.debug('modified boolean-false-global console.debug');
}
{
  {
    console.$native.log(i++);
    Console.globalConsole({ fancy: true, inspect: true, namespace: true });
    // || Console.globalConsole({ inspect: true, namespace: true });
    console.log('ci')('native ~ fancy-inspect-namespace ~ console.log');
    console.worker('ci')('native ~ fancy-inspect-namespace ~ console.worker');
    console.warn('ci')('native ~ fancy-inspect-namespace ~ console.warn');
    console.error('ci')('native ~ fancy-inspect-namespace ~ console.error');
    console.debug('ci')('native ~ fancy-inspect-namespace ~ console.debug');
  }
  {
    console.$native.log(i++);
    Console.globalConsole({ fancy: false, inspect: false, namespace: false });
    // || Console.globalConsole(false);
    console.log('native ~ console.log');
    // console worker disabled
    console.warn('native ~ console.warn');
    console.error('native ~ console.error');
    console.debug('native ~ console.debug');
  }
  {
    console.$native.log(i++);
    Console.globalConsole({ fancy: true, inspect: false, namespace: false });
    // || Console.globalConsole({ fancy: true }); || Console.globalConsole(true);
    console.log('native ~ fancy ~ console.log');
    console.worker('native ~ fancy ~ console.worker');
    console.warn('native ~ fancy ~ console.warn');
    console.error('native ~ fancy ~ console.error');
    console.debug('native ~ fancy ~ console.debug');
  }
  {
    console.$native.log(i++);
    Console.globalConsole({ fancy: false, inspect: true, namespace: false });
    // || Console.globalConsole({ fancy: false, inspect: true });
    console.log('native ~ inspect ~ console.log');
    // console worker disabled
    console.warn('native ~ inspect ~ console.warn');
    console.error('native ~ inspect ~ console.error');
    console.debug('native ~ inspect ~ console.debug');
  }
  {
    console.$native.log(i++);
    Console.globalConsole({ fancy: false, inspect: false, namespace: true });
    /* 0 0 1 is assumed 1 0 1 */
    // || Console.globalConsole({ namespace: true });
    console.log('ci')('native ~ fancy:namespace ~ console.log');
    console.worker('ci')('native ~ fancy:namespace ~ console.worker');
    console.warn('ci')('native ~ fancy:namespace ~ console.warn');
    console.error('ci')('native ~ fancy:namespace ~ console.eror');
    console.debug('ci')('native ~ fancy:namespace ~ console.debug');
  }
  {
    22;
    console.$native.log(i++);
    Console.globalConsole({ fancy: true, inspect: false, namespace: true });
    // || Console.globalConsole({ namespace: true });
    console.log('ci')('native ~ fancy-namespace ~ console.log');
    console.worker('ci')('native ~ fancy-namespace ~ console.worker');
    console.warn('ci')('native ~ fancy-namespace ~ console.warn');
    console.error('ci')('native ~ fancy-namespace ~ console.error');
    console.debug('ci')('native ~ fancy-namespace ~ console.debug');
  }
  {
    console.$native.log(i++);
    Console.globalConsole({ fancy: true, inspect: true, namespace: false });
    // || Console.globalConsole({ inspect: true });
    console.log('native ~ fancy-inspect ~ console.log');
    console.worker('native ~ fancy-inspect ~ console.worker');
    console.warn('native ~ fancy-inspect ~ console.warn');
    console.error('native ~ fancy-inspect ~ console.error');
    console.debug('native ~ fancy-inspect ~ console.debug');
  }
  {
    console.$native.log(i++);
    Console.globalConsole({ fancy: false, inspect: true, namespace: true });
    /* 0 1 1 is assumed 1 1 1 */
    console.log('ci')('native ~ fancy:inspect-namespace ~ console.log');
    console.worker('ci')('native ~ fancy:inspect-namespace ~ console.worker');
    console.warn('ci')('native ~ fancy:inspect-namespace ~ console.warn');
    console.error('ci')('native ~ fancy:inspect-namespace ~ console.error');
    console.debug('ci')('native ~ fancy:inspect-namespace ~ console.debug');
  }
}
{
  console.$native.log(i++);
  Console.globalConsole('ci');
  console.log('modified global string-named console.log');
  console.worker('modified global string-named console.worker');
  console.warn('modified global string-named console.warn');
  console.error('modified global string-named console.error');
  console.debug('modified global string-named console.debug');
}
