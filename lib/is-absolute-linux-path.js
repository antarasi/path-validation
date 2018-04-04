const isAbsolutePath = require('./is-absolute-path');

module.exports = function isAbsoluteLinuxPath(str) {
  return isAbsolutePath(str, '/');
}