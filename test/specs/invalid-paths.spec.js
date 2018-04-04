const {expect} = require('../config/test-config');
const {isAbsoluteLinuxPath, isAbsoluteWindowsPath} = require('../../');

describe('Invalid paths', () => {

  describe('on Linux', () => {
    const paths = [
      null,
      true,
      false,
      {},
      [],
      '/some/\0',
      '/foo/\b',
      '/back\\slash',
      '',
      '~',
      'not/absolute',
      'not/./normalized',
      'C:\\windows\\path',
      '/path/with/:colon',
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
        isAbsoluteLinuxPath(p).should.equal(false)
      })
    })
  })

  describe('on Windows', () => {
    const paths = [
      null,
      true,
      false,
      {},
      [],
      'C:\\some/\0',
      'C:\\/foo/\b',
      'C:\\forward/slash',
      'C:\\more\\than\\:one\\colon',
      '',
      '~',
      'not\\absolute',
      'not\\.\\normalized',
      '\\home\\with\\spaces\\foo.log was written',
      '.',
      '..',
      '\\..',
      '\\.',
      '!path',
      '*pattern.file',
      'file*',
      '\\path\\to\\pattern*',
      'path\\**',
      '\\\\\\server\\share',
    ]

    paths.forEach(p => {
      it(`${p}`, () => {
        isAbsoluteWindowsPath(p).should.equal(false)
      })
    })
  });
})