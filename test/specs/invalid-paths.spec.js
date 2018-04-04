const {toCurrentPlatformPath} = require('../config/test-config');
const {isAbsolutePath} = require('../../');

describe('Invalid paths', () => {

  const paths = [
    null,
    true,
    false,
    {},
    [],
    '/some/\0',
    '/foo/\b',
    '',
    '~',
    'not/absolute',
    'not/./normalized',
    '/home/user/Documents/foo.log was written',
    '/the file /home/user/Documents/foo.log was written',
    '/path/../to/file', // path.isAbsolute(str) fails this
    '/quick/../../escape/to.file',  // path.isAbsolute(str) fails this
    '/.',  // path.isAbsolute(str) fails this
    '/..',  // path.isAbsolute(str) fails this
    '..',
    '.',
    '!path',
    '*pattern.file',
    'file*',
    '/path/to/pattern*',
    'path/**',
    '\\\\\\server\\share',
  ]

  paths.forEach(p => {
    it(`${p}`, () => {
      const platformPath = toCurrentPlatformPath(p);
      isAbsolutePath(platformPath).should.equal(false)
    })
  })
})