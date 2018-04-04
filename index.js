const isAbsolutePath = require('./lib/is-absolute-path');
const isAbsoluteLinuxPath = require('./lib/is-absolute-linux-path');
const isAbsoluteWindowsPath = require('./lib/is-absolute-windows-path');

module.exports = {
  isAbsolutePath,
  isAbsoluteLinuxPath,
  isAbsoluteWindowsPath,
}