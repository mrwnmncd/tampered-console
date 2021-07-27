module.exports = function () {
  const Console = require('../src');
  let i = 0;
  {
    Console.log(i++); // N 0
    console.log('global console.log');
  }
  {
    Console.log(i++); // N 1
    Console.log('static Console.log');
    Console.worker('static Console.worker');
    Console.warn('static Console.warn');
    Console.error('static Console.error');
    Console.debug('static Console.debug');
  }
  {
    Console.log(i++); // N 2
    new Console().log('instance Console.log');
    new Console().worker('instance Console.worker');
    new Console().warn('instance Console.warn');
    new Console().error('instance Console.error');
    new Console().debug('instance Console.debug');
  }
  {
    Console.log(i++); // N 3
    new Console('ci').log('instance string-named Console.log');
    new Console('ci').worker('instance string-named Console.worker');
    new Console('ci').warn('instance string-named Console.warn');
    new Console('ci').error('instance string-named Console.error');
    new Console('ci').debug('instance string-named Console.debug');
  }
  {
    Console.log(i++); // N 4
    Console.globalConsole();
    // || Console.globalConsole(true); || Console.globalConsole({ fancy: true });
    console.log('modified global console.log');
    console.worker('modified global console.worker');
    console.warn('modified global console.warn');
    console.error('modified global console.error');
    console.debug('modified global console.debug');
  }
  {
    Console.log(i++); // N 5
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
        Console.log(i++); // N 6
        Console.globalConsole({ fancy: true });
        // || Console.globalConsole(true);
        console.log('modified object-true-fancy global console.log');
        console.worker('modified object-true-fancy global console.worker');
        console.warn('modified object-true-fancy global console.warn');
        console.error('modified object-true-fancy global console.error');
        console.debug('modified object-true-fancy global console.debug');
      }
      {
        Console.log(i++); // N 7
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
      Console.log(i++); // N 8
      Console.globalConsole({});
      // || Console.globalConsole(true);
      console.log('modified object-empty global console.log');
      console.worker('modified object-empty global console.worker');
      console.warn('modified object-empty global console.warn');
      console.error('modified object-empty global console.error');
      console.debug('modified object-empty global console.debug');
    }

    {
      {
        Console.log(i++); // N 9
        Console.globalConsole({ namespace: true });
        console.log('ci')('modified object-true-namespace global console.log');
        console.worker('ci')(
          'modified object-true-namespace global console.worker',
        );
        console.warn('ci')(
          'modified object-true-namespace global console.warn',
        );
        console.error('ci')(
          'modified object-true-namespace global console.error',
        );
        console.debug('ci')(
          'modified object-true-namespace global console.debug',
        );
      }
      {
        Console.log(i++); // N 10
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
    Console.log(i++); // N 11
    Console.globalConsole(false);
    console.log('modified boolean-false-global console.log');
    // console worker disabled
    console.warn('modified boolean-false-global console.warn');
    console.error('modified boolean-false-global console.error');
    console.debug('modified boolean-false-global console.debug');
  }
  {
    {
      Console.log(i++); // N 12
      Console.globalConsole({ fancy: true, namespace: true });
      // || Console.globalConsole({ namespace: true });
      console.log('ci')('native ~ fancy-true-namespace-true ~ console.log');
      console.worker('ci')('native ~ fancy-true-namespace-true ~ console.worker');
      console.warn('ci')('native ~ fancy-true-namespace-true ~ console.warn');
      console.error('ci')('native ~ fancy-true-namespace-true ~ console.error');
      console.debug('ci')('native ~ fancy-true-namespace-true ~ console.debug');
    }
    {
      Console.log(i++); // N 13
      Console.globalConsole({ fancy: false, namespace: false });
      // || Console.globalConsole(false);
      console.log('global ~ fancy-false-namespace-false ~ console.log');
      // console worker disabled
      console.warn('global ~ fancy-false-namespace-false ~ console.warn');
      console.error('global ~ fancy-false-namespace-false ~ console.error');
      console.debug('global ~ fancy-false-namespace-false ~ console.debug');
    }
    {
      Console.log(i++); // N 14
      Console.globalConsole({ fancy: true, namespace: false });
      // || Console.globalConsole({ fancy: true }); || Console.globalConsole(true);
      console.log('native ~ fancy-true-namespace-false ~ console.log');
      console.worker('native ~ fancy-true-namespace-false ~ console.worker');
      console.warn('native ~ fancy-true-namespace-false ~ console.warn');
      console.error('native ~ fancy-true-namespace-false ~ console.error');
      console.debug('native ~ fancy-true-namespace-false ~ console.debug');
    }
    {
      Console.log(i++); // N 15
      Console.globalConsole({ fancy: false, namespace: true });
      /* 0 1 is assumed 1 1 */
      // || Console.globalConsole({ namespace: true });
      console.log('ci')('native ~ fancy-false:namespace-true ~ console.log');
      console.worker('ci')('native ~ fancy-false:namespace-true ~ console.worker');
      console.warn('ci')('native ~ fancy-false:namespace-true ~ console.warn');
      console.error('ci')('native ~ fancy-false:namespace-true ~ console.eror');
      console.debug('ci')('native ~ fancy-false:namespace-true ~ console.debug');
    }
  }
  {
    Console.log(i++);
    Console.globalConsole('ci');
    console.log('modified global string-named console.log');
    console.worker('modified global string-named console.worker');
    console.warn('modified global string-named console.warn');
    console.error('modified global string-named console.error');
    console.debug('modified global string-named console.debug');
  }
};
