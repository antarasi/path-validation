const path = require('path');

const ALLOWED_SEPARATORS = ['\\', '/'];

// http://www.mtu.edu/umc/services/digital/writing/characters-avoid/
const restricted = /[\[\]#%&{}<>*?\s\b\0$!'"@|‘“+^`]/;
const startWithSlash = /^\//;
const restrictedOnLinux = /[\\:]/;
const startWithDriveLetter = /^[a-zA-Z]:\\/;
const restrictedOnWindows = /[\/]/;
const numberOfColons = (str) => (str.match(/:/g) || []).length;

function trimPath(str, dirSeparator) {
  const parsed = path.parse(str);
  const hasTrailingSlash = str.charAt(str.length - 1) === dirSeparator;
  const endIndex = hasTrailingSlash ? str.length - 1 : str.length;

  // trim leading root and trailing slash
  return str.substring(parsed.root.length, endIndex);
}

function isAbsolute(p, dirSeparator) {
  const resolver = dirSeparator === '/' ? 'posix' : 'win32';

  const resolved = trimPath(path[resolver].resolve(p), dirSeparator);
  const original = trimPath(p, dirSeparator);

  return resolved === original;
}

module.exports = function isAbsolutePath(str, dirSeparator = path.sep) {
  if (ALLOWED_SEPARATORS.indexOf(dirSeparator) < 0) {
    throw new Error(`'${dirSeparator}' is not allowed as directory separator.`);
  }

  // is string
  // not empty
  // doesn't have disallowed characters
  // resolves to absolute path
  const isCorrectPath = !!((typeof str === 'string') && str.length && !restricted.test(str) && isAbsolute(str, dirSeparator));

  if ( dirSeparator === '/' ) {
    // posix
    // + start with slash
    // + does not contain backslash
    return isCorrectPath && startWithSlash.test(str) && !restrictedOnLinux.test(str);
  } else {
    // windows
    // + start with drive letter
    // + does not contain forward slash
    return isCorrectPath && startWithDriveLetter.test(str) && !restrictedOnWindows.test(str) && numberOfColons(str) === 1;
  }
}