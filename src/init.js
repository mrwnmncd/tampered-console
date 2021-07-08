(function () {
  if (!console.$native) {
    console.$native = {};
    console.$native.log = console.log;
    console.$native.warn = console.warn;
    console.$native.error = console.error;
    console.$native.debug = console.debug;
  }
})();


exports.cl = console.$native.log;
exports.clw = console.$native.warn;
exports.cle = console.$native.error;