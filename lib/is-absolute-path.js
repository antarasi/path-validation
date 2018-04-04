const path = require('path');

// http://www.mtu.edu/umc/services/digital/writing/characters-avoid/
const restricted = /[\[\]#%&{}<>*?\s\b\0$!'":@|‘“+^`]/;

function trimPath(str) {
  const parsed = path.parse(str);
  const hasTrailingSlash = str.charAt(str.length - 1) === path.sep;
  const endIndex = hasTrailingSlash ? str.length - 1 : str.length;

  // trim leading root and trailing slash
  return str.substring(parsed.root.length, endIndex);
}

function isAbsolute(p) {
  return trimPath(path.resolve(p)) === trimPath(p);
}

module.exports = function isAbsolutePath(str) {
  // is string
  // not empty
  // doesn't have disallowed characters
  // resolves to absolute path
  return !!((typeof str === 'string') && str.length && !restricted.test(str) && isAbsolute(str));
}