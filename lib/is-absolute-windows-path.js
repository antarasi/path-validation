const isAbsolutePath = require('./is-absolute-path');

module.exports = function isAbsoluteWindowsPath(str) {
  return isAbsolutePath(str, '\\');
}