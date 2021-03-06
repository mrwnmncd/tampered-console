'use strict';

/* Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com) */

const os = require('os');
const tty = require('tty');
const { env } = process;
let flagForceColor;
function flag(flag) {
  const argv = process.argv;
  const prefix = flag.startsWith('-') ? '' : flag.length === 1 ? '-' : '--';
  const position = argv.indexOf(prefix + flag);
  const terminatorIndex = argv.indexOf('--');
  return (
    position !== -1 && (terminatorIndex === -1 || position < terminatorIndex)
  );
}
if (
  flag('no-color') ||
  flag('no-colors') ||
  flag('color=false') ||
  flag('color=never')
) {
  flagForceColor = 0;
} else if (
  flag('color') ||
  flag('colors') ||
  flag('color=true') ||
  flag('color=always')
) {
  flagForceColor = 1;
}
function chkSupport(stream, options = {}) {
  const level = (function (
    haveStream,
    { streamIsTTY, sniffFlags = true } = {},
  ) {
    const noFlagForceColor = (function () {
      if ('FORCE_COLOR' in env) {
        if (env.FORCE_COLOR === 'true') return 1;
        if (env.FORCE_COLOR === 'false') return 0;
        return env.FORCE_COLOR.length === 0
          ? 1
          : Math.min(Number.parseInt(env.FORCE_COLOR, 10), 3);
      }
    })();
    if (noFlagForceColor !== undefined) flagForceColor = noFlagForceColor;
    const forceColor = sniffFlags ? flagForceColor : noFlagForceColor;
    if (forceColor === 0) return 0;
    if (sniffFlags) {
      if (flag('color=16m') || flag('color=full') || flag('color=truecolor'))
        return 3;

      if (flag('color=256')) return 2;
    }
    if (haveStream && !streamIsTTY && forceColor === undefined) return 0;
    const min = forceColor || 0;
    if (env.TERM === 'dumb') return min;
    if (process.platform === 'win32') {
      // 10586  =  256
      // 14931 = 16m
      const osRelease = os.release().split('.');
      if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586)
        return Number(osRelease[2]) >= 14931 ? 3 : 2;
      return 1;
    }
    if ('CI' in env) {
      if (
        [
          'TRAVIS',
          'CIRCLECI',
          'APPVEYOR',
          'GITLAB_CI',
          'GITHUB_ACTIONS',
          'BUILDKITE',
          'DRONE',
        ].some((sign) => sign in env) ||
        env.CI_NAME === 'codeship'
      )
        return 1;
      return min;
    }
    if ('TEAMCITY_VERSION' in env)
      return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
    if (env.COLORTERM === 'truecolor') return 3;
    if ('TERM_PROGRAM' in env) {
      const version = Number.parseInt(
        (env.TERM_PROGRAM_VERSION || '').split('.')[0],
        10,
      );
      switch (env.TERM_PROGRAM) {
        case 'iTerm.app':
          return version >= 3 ? 3 : 2;
        case 'Apple_Terminal':
          return 2;
      }
    }
    if (/-256(color)?$/i.test(env.TERM)) return 2;
    if (
      /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(
        env.TERM,
      )
    )
      return 1;
    if ('COLORTERM' in env) return 1;
    return min;
  })(stream, {
    streamIsTTY: stream && stream.isTTY,
    ...options,
  });
  if (level === 0) return false;
  return {
    level,
    hasBasic: true,
    has256: level >= 2,
    has16m: level >= 3,
  };
}
const color = {
  stdout: chkSupport({ isTTY: tty.isatty(1) }),
  stderr: chkSupport({ isTTY: tty.isatty(2) }),
};
module.exports = color;
