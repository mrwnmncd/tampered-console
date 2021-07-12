module.exports = function () {
  const Console = require('../../src');
  let i = 0;
  {
    Console.log(i++);
    console.log('global console.log', 'spread');
  }
  {
    {
      Console.log(i++);
      Console.log('static Console.log', 'spread');
      Console.worker('static Console.worker', 'spread');
      Console.warn('static Console.warn', 'spread');
      Console.error('static Console.error', 'spread');
      Console.debug('static Console.debug', 'spread');
    }
    {
      Console.log(i++);
      Console.inspect.log('static inspected Console.log', 'spread');
      Console.inspect.worker('static inspected Console.worker', 'spread');
      Console.inspect.warn('static inspected Console.warn', 'spread');
      Console.inspect.error('static inspected Console.error', 'spread');
    }
  }
  {
    Console.log(i++);
    new Console().log('instance Console.log', 'spread');
    new Console().worker('instance Console.worker', 'spread');
    new Console().warn('instance Console.warn', 'spread');
    new Console().error('instance Console.error', 'spread');
    new Console().debug('instance Console.debug', 'spread');
  }
  {
    Console.log(i++);
    // new Console({ name: string }) || new Console(string);
    new Console('ci').log('instance string-named Console.log', 'spread');
    new Console('ci').worker('instance string-named Console.worker', 'spread');
    new Console('ci').warn('instance string-named Console.warn', 'spread');
    new Console('ci').error('instance string-named Console.error', 'spread');
    new Console('ci').debug('instance string-named Console.debug', 'spread');
  }
  {
    Console.log(i++);
    Console.globalConsole(true);
    // || Console.globalConsole({ fancy: true });
    console.log('modified boolean-true-global console.log', 'spread');
    console.worker('modified boolean-true-global console.worker', 'spread');
    console.warn('modified boolean-true-global console.warn', 'spread');
    console.error('modified boolean-true-global console.error', 'spread');
    console.debug('modified boolean-true-global console.debug', 'spread');
  }
  {
    {
      {
        Console.log(i++);
        Console.globalConsole({ fancy: true });
        // || Console.globalConsole(true);
        console.log('modified object-true-fancy global console.log', 'spread');
        console.worker(
          'modified object-true-fancy global console.worker',
          'spread',
        );
        console.warn(
          'modified object-true-fancy global console.warn',
          'spread',
        );
        console.error(
          'modified object-true-fancy global console.error',
          'spread',
        );
        console.debug(
          'modified object-true-fancy global console.debug',
          'spread',
        );
      }
      {
        Console.log(i++);
        Console.globalConsole({ fancy: false });
        // || Console.globalConsole(false);
        console.log('modified object-false-fancy global console.log', 'spread');
        // console worker disabled
        console.warn(
          'modified object-false-fancy global console.warn',
          'spread',
        );
        console.error(
          'modified object-false-fancy global console.error',
          'spread',
        );
        console.debug(
          'modified object-false-fancy global console.debug',
          'spread',
        );
      }
    }
    {
      {
        Console.log(i++);
        Console.globalConsole({ inspect: true });
        console.log(
          'modified object-true-inspect global console.log',
          'spread',
        );
        console.worker(
          'modified object-true-inspect global console.worker',
          'spread',
        );
        console.warn(
          'modified object-true-inspect global console.warn',
          'spread',
        );
        console.error(
          'modified object-true-inspect global console.error',
          'spread',
        );
        console.debug(
          'modified object-true-inspect global console.debug',
          'spread',
        );
      }
      {
        13;
        Console.log(i++);
        Console.globalConsole({ inspect: false });
        // || Console.globalConsole(true);
        console.log(
          'modified object-false-inspect global console.log',
          'spread',
        );
        console.worker(
          'modified object-false-inspect global console.worker',
          'spread',
        );
        console.warn(
          'modified object-false-inspect global console.warn',
          'spread',
        );
        console.error(
          'modified object-false-inspect global console.error',
          'spread',
        );
        console.debug(
          'modified object-false-inspect global console.debug',
          'spread',
        );
      }
    }
    {
      {
        Console.log(i++);
        Console.globalConsole({ namespace: true });
        console.log('ci')(
          'modified object-true-namespace global console.log',
          'spread',
        );
        console.worker('ci')(
          'modified object-true-namespace global console.worker',
          'spread',
        );
        console.warn('ci')(
          'modified object-true-namespace global console.warn',
          'spread',
        );
        console.error('ci')(
          'modified object-true-namespace global console.error',
          'spread',
        );
        console.debug('ci')(
          'modified object-true-namespace global console.debug',
          'spread',
        );
      }
      {
        15;
        Console.log(i++);
        Console.globalConsole({ namespace: false });
        // || Console.globalConsole(true);
        console.log(
          'modified object-false-namespace global console.log',
          'spread',
        );
        console.worker(
          'modified object-false-namespace global console.worker',
          'spread',
        );
        console.warn(
          'modified object-false-namespace global console.warn',
          'spread',
        );
        console.error(
          'modified object-false-namespace global console.error',
          'spread',
        );
        console.debug(
          'modified object-false-namespace global console.debug',
          'spread',
        );
      }
    }
  }
  {
    Console.log(i++);
    Console.globalConsole(false);
    console.log('modified boolean-false-global console.log', 'spread');
    // console worker disabled
    console.warn('modified boolean-false-global console.warn', 'spread');
    console.error('modified boolean-false-global console.error', 'spread');
    console.debug('modified boolean-false-global console.debug', 'spread');
  }
  {
    {
      Console.log(i++);
      Console.globalConsole({ fancy: true, inspect: true, namespace: true });
      // || Console.globalConsole({ inspect: true, namespace: true });
      console.log('ci')(
        'native ~ fancy-inspect-namespace ~ console.log',
        'spread',
      );
      console.worker('ci')(
        'native ~ fancy-inspect-namespace ~ console.worker',
        'spread',
      );
      console.warn('ci')(
        'native ~ fancy-inspect-namespace ~ console.warn',
        'spread',
      );
      console.error('ci')(
        'native ~ fancy-inspect-namespace ~ console.error',
        'spread',
      );
      console.debug('ci')(
        'native ~ fancy-inspect-namespace ~ console.debug',
        'spread',
      );
    }
    {
      Console.log(i++);
      Console.globalConsole({ fancy: false, inspect: false, namespace: false });
      // || Console.globalConsole(false);
      console.log('native ~ console.log', 'spread');
      // console worker disabled
      console.warn('native ~ console.warn', 'spread');
      console.error('native ~ console.error', 'spread');
      console.debug('native ~ console.debug', 'spread');
    }
    {
      Console.log(i++);
      Console.globalConsole({ fancy: true, inspect: false, namespace: false });
      // || Console.globalConsole({ fancy: true }); || Console.globalConsole(true);
      console.log('native ~ fancy ~ console.log', 'spread');
      console.worker('native ~ fancy ~ console.worker', 'spread');
      console.warn('native ~ fancy ~ console.warn', 'spread');
      console.error('native ~ fancy ~ console.error', 'spread');
      console.debug('native ~ fancy ~ console.debug', 'spread');
    }
    {
      Console.log(i++);
      Console.globalConsole({ fancy: false, inspect: true, namespace: false });
      // || Console.globalConsole({ fancy: false, inspect: true });
      console.log('native ~ inspect ~ console.log', 'spread');
      // console worker disabled
      console.warn('native ~ inspect ~ console.warn', 'spread');
      console.error('native ~ inspect ~ console.error', 'spread');
      console.debug('native ~ inspect ~ console.debug', 'spread');
    }
    {
      Console.log(i++);
      Console.globalConsole({ fancy: false, inspect: false, namespace: true });
      /* 0 0 1 is assumed 1 0 1 */
      // || Console.globalConsole({ namespace: true });
      console.log('ci')('native ~ fancy:namespace ~ console.log', 'spread');
      console.worker('ci')(
        'native ~ fancy:namespace ~ console.worker',
        'spread',
      );
      console.warn('ci')('native ~ fancy:namespace ~ console.warn', 'spread');
      console.error('ci')('native ~ fancy:namespace ~ console.eror', 'spread');
      console.debug('ci')('native ~ fancy:namespace ~ console.debug', 'spread');
    }
    {
      22;
      Console.log(i++);
      Console.globalConsole({ fancy: true, inspect: false, namespace: true });
      // || Console.globalConsole({ namespace: true });
      console.log('ci')('native ~ fancy-namespace ~ console.log', 'spread');
      console.worker('ci')(
        'native ~ fancy-namespace ~ console.worker',
        'spread',
      );
      console.warn('ci')('native ~ fancy-namespace ~ console.warn', 'spread');
      console.error('ci')('native ~ fancy-namespace ~ console.error', 'spread');
      console.debug('ci')('native ~ fancy-namespace ~ console.debug', 'spread');
    }
    {
      Console.log(i++);
      Console.globalConsole({ fancy: true, inspect: true, namespace: false });
      // || Console.globalConsole({ inspect: true });
      console.log('native ~ fancy-inspect ~ console.log', 'spread');
      console.worker('native ~ fancy-inspect ~ console.worker', 'spread');
      console.warn('native ~ fancy-inspect ~ console.warn', 'spread');
      console.error('native ~ fancy-inspect ~ console.error', 'spread');
      console.debug('native ~ fancy-inspect ~ console.debug', 'spread');
    }
    {
      Console.log(i++);
      Console.globalConsole({ fancy: false, inspect: true, namespace: true });
      /* 0 1 1 is assumed 1 1 1 */
      console.log('ci')(
        'native ~ fancy:inspect-namespace ~ console.log',
        'spread',
      );
      console.worker('ci')(
        'native ~ fancy:inspect-namespace ~ console.worker',
        'spread',
      );
      console.warn('ci')(
        'native ~ fancy:inspect-namespace ~ console.warn',
        'spread',
      );
      console.error('ci')(
        'native ~ fancy:inspect-namespace ~ console.error',
        'spread',
      );
      console.debug('ci')(
        'native ~ fancy:inspect-namespace ~ console.debug',
        'spread',
      );
    }
  }
  {
    Console.log(i++);
    Console.globalConsole('ci');
    console.log('modified global string-named console.log', 'spread');
    console.worker('modified global string-named console.worker', 'spread');
    console.warn('modified global string-named console.warn', 'spread');
    console.error('modified global string-named console.error', 'spread');
    console.debug('modified global string-named console.debug', 'spread');
  }
};
